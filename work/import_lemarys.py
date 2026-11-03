from __future__ import annotations

import base64
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(".")
UPLOAD_DIR = ROOT / "work" / "lemarys-upload"
OUT_DIR = ROOT / "assets" / "work"
OUT_DIR.mkdir(parents=True, exist_ok=True)


def export_web_image(image: Image.Image, target: Path) -> None:
    working = ImageOps.exif_transpose(image).convert("RGB")
    working.thumbnail((1400, 1400), Image.Resampling.LANCZOS)

    encoded = BytesIO()
    for quality in (84, 80, 76, 72, 68, 64, 60):
        encoded = BytesIO()
        working.save(encoded, "JPEG", quality=quality, optimize=True, progressive=True)
        if encoded.tell() <= 500_000:
            break

    if encoded.tell() > 500_000:
        working.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
        encoded = BytesIO()
        working.save(encoded, "JPEG", quality=64, optimize=True, progressive=True)

    target.write_bytes(encoded.getvalue())
    print(f"{target}: {working.width}x{working.height}, {encoded.tell()} bytes")


with Image.open(ROOT / "assets/work/maroquinerie-11.jpg") as image:
    export_web_image(image, OUT_DIR / "lemarys-01.jpg")

with Image.open(ROOT / "assets/work/maroquinerie-04.jpg") as image:
    export_web_image(image, OUT_DIR / "lemarys-02.jpg")

parts = sorted(UPLOAD_DIR.glob("part-*.txt"))
if not parts:
    raise SystemExit("Aucun segment du troisième visuel Lemarys.")
encoded = "".join(path.read_text(encoding="utf-8").strip() for path in parts)
raw = base64.b64decode(encoded)
with Image.open(BytesIO(raw)) as image:
    export_web_image(image, OUT_DIR / "lemarys-03.jpg")
