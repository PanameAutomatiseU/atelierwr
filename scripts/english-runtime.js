const attributes = ["alt", "title", "aria-label", "placeholder"];
const observed = new WeakMap();

function translate(text) {
  return text.split(/( · |, )/).reduce((translated, part) => {
    const key = part.trim();
    return translated + (Object.hasOwn(translations, key) ? part.replace(key, translations[key]) : part);
  }, "");
}

function localize(text) {
  const key = text.trim();
  return Object.hasOwn(translations, key) ? text.replace(key, translations[key]) : translate(text);
}

function update(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (!node.parentElement || node.parentElement.closest("script,style,code,textarea,svg")) return;
    if (observed.get(node) === node.data) return;
    const value = localize(node.data);
    observed.set(node, value);
    if (value !== node.data) node.data = value;
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  for (const attr of attributes) {
    const current = node.getAttribute(attr);
    if (current && localize(current) !== current) node.setAttribute(attr, localize(current));
  }
  if (node.matches("a[href]:not([hreflang])") && !node.getAttribute("href").startsWith("#")) {
    const target = new URL(node.href);
    const path = target.pathname.replace(/^\/en\//, "/");
    if (target.origin === location.origin && Object.hasOwn(routes, path)) {
      const href = routes[path] + target.search + target.hash;
      if (href !== node.getAttribute("href")) node.setAttribute("href", href);
    }
  }
  for (const child of node.childNodes) update(child);
}

document.querySelectorAll(".grid, .lb, .design-continuous, .discipline-project-links").forEach(update);
new MutationObserver(records => {
  for (const record of records) {
    if (record.type === "characterData") update(record.target);
    for (const node of record.addedNodes) update(node);
  }
}).observe(document.body, {subtree: true, childList: true, characterData: true});
