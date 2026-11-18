const english = document.documentElement.lang === "en";
let link = document.querySelector(".language-switch");
if (!english && !link && Object.hasOwn(englishRoutes, location.pathname)) {
  link = document.createElement("a");
  link.href = englishRoutes[location.pathname];
  link.hreflang = "en";
  link.lang = "en";
  link.className = "language-switch";
  link.setAttribute("aria-label", "English version");
  link.textContent = "EN";
  (document.querySelector("header.nav .menu, header.nav .wrap") || document.body).append(link);
}
if (link) link.addEventListener("click", () => { link.hash = location.hash; });
