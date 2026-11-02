from __future__ import annotations

import html
import json
import re
import urllib.parse
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps
from playwright.sync_api import sync_playwright

PAGE_URL = "https://www.atelierwr.net/bags-accessories"
OUT_DIR = Path("work")
INVENTORY_PATH = OUT_DIR / "bags-gallery-inventory.json"
CONTACT_PATH = OUT_DIR / "bags-gallery-contact.jpg"

media_order: list[str] = []
media_seen: set[str] = set()
alt_by_media: dict[str, str] = {}


def media_id(value: str | None) -> str | None:
    if not value:
        return None
    value = html.unescape(value).replace("\\/", "/").replace("\\u002F", "/")
    value = urllib.parse.unquote(value)
    match = re.search(r"static\.wixstatic\.com/media/([^?\"'<>\s]+)", value)
    if not match:
        match = re.search(r"(223f51_[A-Za-z0-9_~.\-]+(?:jpg|jpeg|png|webp))", value, re.I)
    if not match:
        return None
    identifier = match.group(1)
    identifier = identifier.split("/v1/", 1)[0].split("?", 1)[0]
    if not identifier.startswith("223f51_"):
        return None
    return identifier


def remember(value: str | None, alt: str = "") -> None:
    identifier = media_id(value)
    if not identifier:
        return
    if identifier not in media_seen:
        media_seen.add(identifier)
        media_order.append(identifier)
    clean_alt = " ".join((alt or "").split())
    if clean_alt and not alt_by_media.get(identifier):
        alt_by_media[identifier] = clean_alt


def download(identifier: str) -> tuple[bytes, int, int, str] | None:
    url = f"https://static.wixstatic.com/media/{identifier}"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(request, timeout=45) as response:
            data = response.read()
        with Image.open(BytesIO(data)) as image:
            width, height = image.size
            fmt = image.format or ""
        return data, width, height, fmt
    except Exception as exc:
        print(f"SKIP {identifier}: {exc}")
        return None


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 1100}, device_scale_factor=1)

    def on_response(response):
        remember(response.url)

    page.on("response", on_response)
    page.goto(PAGE_URL, wait_until="domcontentloaded", timeout=120000)
    page.wait_for_timeout(8000)

    for step in range(80):
        page.evaluate("(y) => window.scrollTo(0, y)", step * 700)
        for frame in page.frames:
            try:
                frame.evaluate("(y) => window.scrollTo(0, y)", step * 700)
            except Exception:
                pass
        page.wait_for_timeout(120)

    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(5000)

    gallery_frames = [frame for frame in page.frames if "Masonry" in frame.url or "gallery" in frame.url.lower()]
    print("Gallery frames:", [frame.url for frame in gallery_frames])

    for frame in gallery_frames:
        try:
            elements = frame.locator("img").evaluate_all(
                """els => els.map(el => ({
                    src: el.currentSrc || el.src || el.getAttribute('data-src') || '',
                    alt: el.alt || el.title || el.getAttribute('aria-label') || ''
                }))"""
            )
            for item in elements:
                remember(item.get("src"), item.get("alt", ""))

            styles = frame.locator("[style]").evaluate_all(
                """els => els.map(el => ({
                    style: el.getAttribute('style') || '',
                    alt: el.getAttribute('aria-label') || el.getAttribute('title') || ''
                }))"""
            )
            for item in styles:
                remember(item.get("style"), item.get("alt", ""))

            resources = frame.evaluate("performance.getEntriesByType('resource').map(entry => entry.name)")
            for resource in resources:
                remember(resource)
        except Exception as exc:
            print("Frame inspection error:", exc)

    browser.close()

print("Media candidates:", len(media_order))

items = []
thumbs = []
for identifier in media_order:
    result = download(identifier)
    if not result:
        continue
    data, width, height, fmt = result
    if width < 500 or height < 350:
        continue
    try:
        image = Image.open(BytesIO(data)).convert("RGB")
    except Exception:
        continue
    item = {
        "index": len(items) + 1,
        "uri": identifier,
        "url": f"https://static.wixstatic.com/media/{identifier}",
        "title": alt_by_media.get(identifier, ""),
        "width": width,
        "height": height,
        "format": fmt,
        "bytes": len(data),
    }
    items.append(item)

    thumb = ImageOps.contain(image, (260, 180), Image.Resampling.LANCZOS)
    tile = Image.new("RGB", (280, 230), "white")
    tile.paste(thumb, ((280 - thumb.width) // 2, 10))
    draw = ImageDraw.Draw(tile)
    draw.rectangle((0, 0, 279, 229), outline=(210, 210, 210), width=1)
    draw.text((10, 196), f"{item['index']:02d}", fill=(166, 25, 46))
    title = item["title"][:34] if item["title"] else identifier[:34]
    draw.text((42, 196), title, fill=(20, 20, 20))
    thumbs.append(tile)

OUT_DIR.mkdir(parents=True, exist_ok=True)
INVENTORY_PATH.write_text(
    json.dumps({"source": PAGE_URL, "count": len(items), "items": items}, ensure_ascii=False, indent=2),
    encoding="utf-8",
)

columns = 4
rows = max(1, (len(thumbs) + columns - 1) // columns)
contact = Image.new("RGB", (columns * 280, rows * 230), (245, 245, 245))
for position, tile in enumerate(thumbs):
    contact.paste(tile, ((position % columns) * 280, (position // columns) * 230))
contact.save(CONTACT_PATH, "JPEG", quality=86, optimize=True, progressive=True)

print(f"Gallery items kept: {len(items)}")
print(INVENTORY_PATH)
print(CONTACT_PATH)
