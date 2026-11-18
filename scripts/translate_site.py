"""Build English pages from the French site, retaining the original markup and assets."""
import argparse
import json
import re
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit
from xml.etree import ElementTree

import ctranslate2
import sentencepiece
from bs4 import BeautifulSoup, Comment, Doctype

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "en"
ORIGIN = "https://atelierwr.net"
ATTRIBUTES = ("alt", "title", "aria-label", "placeholder", "data-title", "data-caption")
SKIP = {"script", "style", "code", "svg", "textarea", "pre"}
GLOSSARY = {
    "Atelier WR": "Atelier WR", "William Rigoulet": "William Rigoulet",
    "Le studio": "The Studio", "Studio de création": "Creative Studio",
    "Collaborer": "Collaborate", "Prendre contact": "Get in touch",
    "Design & création": "Design & Creative Work", "Parcours": "About",
    "Maroquinerie & accessoires": "Leather Goods & Accessories",
    "Horlogerie": "Watchmaking", "Joaillerie": "Jewellery",
    "Fine Art": "Fine Art", "Maison Boanton": "Maison Boanton",
    "Maison Rinceau": "Maison Rinceau", "Lemarys Paris": "Lemarys Paris",
    "Mulberry": "Mulberry", "Cartier": "Cartier", "Céline": "Céline",
    "Place Vendôme": "Place Vendôme", "Almé Paris": "Almé Paris",
    "Contact": "Contact", "Marseille": "Marseille", "Packaging": "Packaging",
    "Émail": "Enamel", "Direction artistique": "Art direction",
    "Haut de page ↑": "Back to top ↑", "Retour en haut ↑": "Back to top ↑",
    "Aller au contenu": "Skip to content", "Navigation principale": "Main navigation",
    "Fermer": "Close", "Précédent": "Previous", "Suivant": "Next",
    "Voir la publication Instagram ↗": "View Instagram post ↗",
    "Boanton": "Boanton", "Emblème": "Emblème", "Héritage": "Héritage",
}
JS_LITERAL = re.compile(r'\x27((?:\\.|[^\x27\r\n\\])*)\x27|"((?:\\.|[^"\r\n\\])*)"')


def useful(value):
    return (0 < len(value) < 9000 and bool(re.search(r"[^\W\d_]", value))
            and not re.match(r"^(?:https?://|mailto:|tel:|data:|[\w.+-]+@)", value))


def slots(soup):
    for node in soup.find_all(string=True):
        if isinstance(node, (Comment, Doctype)) or not node.parent or any(parent.name in SKIP for parent in node.parents):
            continue
        text = str(node).strip()
        if useful(text):
            yield text, lambda value, node=node, text=text: node.replace_with(str(node).replace(text, value, 1))
    for tag in soup.find_all(True):
        names = list(ATTRIBUTES)
        if tag.name == "meta" and tag.get("name", tag.get("property")) in {
            "description", "og:title", "og:description", "twitter:title", "twitter:description", "keywords"
        }:
            names.append("content")
        for name in names:
            text = tag.get(name)
            if isinstance(text, str) and useful(text.strip()):
                yield text.strip(), lambda value, tag=tag, name=name: tag.__setitem__(name, value)


def js_phrases(code):
    for match in JS_LITERAL.finditer(code):
        value = (match[1] or match[2] or "").replace("\\'", "'").strip()
        if (useful(value) and re.search(r"[À-ÿ]|[A-Z][a-z]+ ", value)
                and not re.search(r"[<>={}\[\]$\x60\\/]|\.html\b", value)):
            yield value
            yield from (part for part in value.split(" · ") if useful(part))


def clean_translation(value):
    value = value.replace("▁", " ")
    value = re.sub(r"[\u3400-\u9fff]", "", value)
    value = re.sub(r"(?i)\b(?:WR\s+workshop|workshop\s+WR)\b", "Atelier WR", value)
    value = re.sub(r"\s+", " ", value).strip()
    return re.sub(r"\s+([,.;!?])", r"\1", value)


def translate(cache, phrases, model):
    missing = sorted(phrases - cache.keys())
    if not missing:
        return
    tokenizer = sentencepiece.SentencePieceProcessor(model_file=str(model / "sentencepiece.model"))
    engine = ctranslate2.Translator(str(model / "model"), compute_type="int8", intra_threads=3)
    for start in range(0, len(missing), 64):
        batch = missing[start:start + 64]
        encoded = tokenizer.encode(batch, out_type=str)
        results = engine.translate_batch(encoded, beam_size=3, max_batch_size=6000, batch_type="tokens", max_decoding_length=1024)
        for source, result in zip(batch, results, strict=True):
            value = clean_translation(tokenizer.decode(result.hypotheses[0]))
            cache[source] = (value.upper() if source.isupper() else value) or source
        print(f"Translated {min(start + 64, len(missing))}/{len(missing)} segments", flush=True)


def language_link(soup, url, english):
    language = "en" if english else "fr"
    link = soup.new_tag("a", href=url, hreflang=language, lang=language)
    link["class"] = ["language-switch"]
    link["aria-label"] = "English version" if english else "Version française"
    link.string = language.upper()
    target = soup.select_one("header.nav nav.menu, header.nav .menu, header.nav .wrap") or soup.body
    target.append(link)
    soup.body.append(soup.new_tag("script", src="/en/language-switch.js", defer=True))


def rewrite(soup, routes, fr_route, en_route):
    for tag in soup.find_all(True):
        for attr in ("href", "src", "poster", "data-src"):
            value = tag.get(attr)
            if not value or value.startswith(("#", "data:", "javascript:", "mailto:", "tel:")):
                continue
            url = urlsplit(value)
            if url.scheme not in {"", "https", "http"} or (url.netloc and url.netloc not in {"atelierwr.net", "www.atelierwr.net"}):
                continue
            path = "/" + url.path.removeprefix("./").lstrip("/")
            if tag.name in {"a", "area"} and attr == "href" and path in routes:
                tag[attr] = urlunsplit(("", "", routes[path], url.query, url.fragment))
            elif not url.netloc:
                tag[attr] = urlunsplit(("", "", path, url.query, url.fragment))
        if tag.has_attr("srcset") and not tag["srcset"].startswith("data:"):
            tag["srcset"] = ", ".join(
                item if item.startswith(("/", "https:", "http:")) else "/" + item.removeprefix("./")
                for item in map(str.strip, tag["srcset"].split(","))
            )
    canonical = soup.find("link", rel="canonical")
    if not canonical:
        canonical = soup.new_tag("link", rel="canonical")
        soup.head.append(canonical)
    canonical["href"] = ORIGIN + en_route
    for tag in soup.select('meta[property="og:url"]'):
        tag["content"] = ORIGIN + en_route
    for tag in soup.select('meta[property="og:locale"]'):
        tag["content"] = "en_GB"
    for tag in soup.find_all("link", hreflang=True):
        if tag["hreflang"] in {"fr", "en"}:
            tag.decompose()
    for lang, route in (("fr", fr_route), ("en", en_route)):
        soup.head.append(soup.new_tag("link", rel="alternate", hreflang=lang, href=ORIGIN + route))
    for tag in soup.select('script[src^="/contact-form.js"]'):
        tag["src"] = "/en/contact-form.js"


def build(model):
    docs, routes, dynamic = {}, {}, set()
    french_html = {}
    scripts = {file.name: file.read_text() for file in ROOT.glob("*.js")}
    for code in scripts.values():
        dynamic.update(js_phrases(code))
    for file in sorted(ROOT.glob("*.html")):
        markup = file.read_text()
        markup = re.sub(r"<!-- bilingual:start -->.*?<!-- bilingual:end -->", "", markup, flags=re.S)
        french_html[file.name] = markup
        soup = BeautifulSoup(markup, "html.parser")
        if not soup.html or not soup.body or soup.html.get("lang", "").startswith("en"):
            continue
        canonical = soup.find("link", rel="canonical")
        page_path = "/" + file.stem
        default_route = "/" if file.stem == "index" else page_path
        canonical_path = urlsplit(canonical.get("href", "")).path if canonical else ""
        canonical_path = "/" + canonical_path.lstrip("/")
        aliases = {default_route, page_path, "/" + file.name}
        route = canonical_path if canonical_path in aliases else default_route
        for alias in aliases:
            routes[alias] = "/en" + default_route
        for script in soup.find_all("script"):
            if script.string and script.get("type") != "application/ld+json":
                dynamic.update(js_phrases(str(script.string)))
        docs[file.name] = (route, soup, list(slots(soup)))

    OUTPUT.mkdir(exist_ok=True)
    cache_file = OUTPUT / "translations.json"
    cache = json.loads(cache_file.read_text()) if cache_file.exists() else {}
    cache = {key: clean_translation(value) for key, value in cache.items()}
    cache.update(GLOSSARY)
    phrases = dynamic | {value for _, _, page_slots in docs.values() for value, _ in page_slots}
    translate(cache, phrases, model)
    cache_file.write_text(json.dumps({key: cache[key] for key in sorted(phrases)}, ensure_ascii=False, indent=2) + "\n")
    for name, (route, soup, page_slots) in docs.items():
        for source, replace in page_slots:
            if cache[source] != source:
                replace(cache[source])
        soup.html["lang"] = "en"
        rewrite(soup, routes, route, routes[route])
        language_link(soup, route, False)
        soup.body.append(soup.new_tag("script", src="/en/dynamic.js", defer=True))
        (OUTPUT / name).write_text(str(soup))
        markup = french_html[name]
        head = (
            f'<!-- bilingual:start --><link rel="alternate" hreflang="fr" href="{ORIGIN + route}">\n'
            f'<link rel="alternate" hreflang="en" href="{ORIGIN + routes[route]}">\n'
            '<script src="/en/language-switch.js" defer></script><!-- bilingual:end -->'
        )
        (ROOT / name).write_text(re.sub(r"</head>", lambda _: head + "</head>", markup, count=1, flags=re.I))
    for file in OUTPUT.glob("*.html"):
        if file.name not in docs:
            file.unlink()

    (OUTPUT / "dynamic.js").write_text(
        "(() => {\nconst translations = " + json.dumps({k: cache[k] for k in sorted(dynamic) if k != cache[k]}, ensure_ascii=False)
        + ";\nconst routes = " + json.dumps(routes, sort_keys=True) + ";\n"
        + (ROOT / "scripts" / "english-runtime.js").read_text() + "\n})();\n"
    )
    (OUTPUT / "language-switch.js").write_text(
        "(() => {\nconst englishRoutes = " + json.dumps(routes, sort_keys=True) + ";\n"
        + (ROOT / "scripts" / "language-switch.js").read_text() + "\n})();\n"
    )
    contact = scripts.get("contact-form.js", "")
    for fr, en in {
        "Projet / collaboration": "Project enquiry", "Nouvelle demande": "New enquiry",
        "Bonjour William,": "Hello William,", "Nom :": "Name:", "Société :": "Company:",
        "E-mail :": "Email:", "Téléphone :": "Phone:", "Type de projet :": "Project type:",
        "Non renseignée": "Not provided", "Non renseigné": "Not provided", "À préciser": "To be discussed",
        "Votre application de messagerie va s’ouvrir avec le message préparé.": "Your email app will open with the prepared message.",
    }.items():
        contact = contact.replace(fr, en)
    (OUTPUT / "contact-form.js").write_text(contact)

    sitemap = ROOT / "sitemap.xml"
    ns = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
    ElementTree.register_namespace("", ns[1:-1])
    index = ElementTree.parse(sitemap)
    root = index.getroot()
    for entry in list(root):
        location = entry.find(ns + "loc")
        if location is not None and (
            (location.text or "").startswith(ORIGIN + "/en/")
            or location.text == ORIGIN + "/enluminaires.html"
        ):
            root.remove(entry)
    for route in sorted({routes[route] for route, _, _ in docs.values()}):
        ElementTree.SubElement(ElementTree.SubElement(root, ns + "url"), ns + "loc").text = ORIGIN + route
    ElementTree.indent(index, space="  ")
    index.write(sitemap, encoding="utf-8", xml_declaration=True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("model", type=Path)
    build(parser.parse_args().model)
