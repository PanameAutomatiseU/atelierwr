const W = (cat, n, caps) => caps.map((c, i) => {
  const [title, client] = c.split(' · ');
  const projectHref = client === 'Maison Boanton' ? 'boanton.html' : client === 'Cartier' ? 'cartier.html' : '';
  return { src: `assets/work/${cat}-${String(i + 1).padStart(2, '0')}.jpg`, cat, title, client: client || '', projectHref };
});

const JEWELRY_GALLERY = [
  { src: 'assets/work/horlogerie-08.jpg', title: 'Collection Interstice', client: 'Planche complète des dessins' },
  { src: 'joaillerie-mockup-01.png', title: 'Collection Interstice', client: 'Mockup 01' },
  { src: 'joaillerie-mockup-02.png', title: 'Collection Interstice', client: 'Mockup 02' },
  { src: 'joaillerie-mockup-03.png', title: 'Collection Interstice', client: 'Mockup 03' },
  { src: 'joaillerie-mockup-04.png', title: 'Collection Interstice', client: 'Mockup 04' },
  { src: 'joaillerie-mockup-06.png', title: 'Collection Interstice', client: 'Mockup 06' },
  { src: 'joaillerie-mockup-07.png', title: 'Collection Interstice', client: 'Mockup 07' },
  { src: 'joaillerie-mockup-08.png', title: 'Collection Interstice', client: 'Mockup 08' },
  { src: document.querySelector('.jewelry-cardholder img')?.src || '', title: 'Porte-cartes sécurisé', client: 'Décors en laque, métal et diamants' },
];

const DESIGN = [
  ...W('maroquinerie', 12, ['Eyewear · Lunetterie', 'Collection Signature · Maroquinerie', 'Sandales cordes · Almé Paris', 'Lunettes haute joaillerie · Lunetterie', 'Sacs · Céline', 'Maroquinerie · Almé Paris', 'Shoes bag · Bally', 'Sneakers · Bally', 'Trolley pliable · Kipling', 'Croquis de sacs · Recherches', 'Croquis · Burberry', 'Sacs · Sonia Rykiel']),
  ...W('mobilier', 8, ['Piano « Italy » · Carod', 'Piano en situation · Carod', 'Sofa · Grand Palais', 'Collection · Grand Palais', 'Ère de je · Mobilier modulable', 'Ego · Assise', 'Mobilier outdoor · Grand Palais', 'Croquis de collection · Grand Palais']),
  ...W('packaging', 10, ['Coffrets · Almé Paris', 'Édition Nouvel An chinois · Packaging', 'Étiquettes · Domaine de la Bégude', 'Pleine Nature · Étiquettes de vin', "L'Ernest · La Grange d'Ernest", 'Triplette · Cantarelle', 'Gamme · Jean-Étienne Chermette', 'Coffret Année du Lapin · Philips', 'Coffret montre · Maison Boanton', 'Écrin V · Packaging']),
  ...W('logo', 12, ['Vitrophanie · La Boutique du Rhum', 'Identité · Maison Célestine', 'Crozes-Hermitage · Domaine du Chêne Vert', 'Domaines & distilleries · Diva', 'Déclinaisons · Maison Célestine', 'Monogramme · Almé Paris', 'Caves parisiennes · Joséphine', 'Logo · Aurea Imaging', 'Motif · Lemarys', 'Identité · Exacode', 'Avocats · Louise Law', 'Logo · Owl Hair Salon']),
  ...W('affiches', 12, ['Vent de sable · Affiche', 'Affiche · Joséphine', 'Les dimanches Pleine Mer · Cannibale', 'Jazz classique · Comptoir du Live', 'Coupe du monde 2018 · Cannibale Café', 'Click & Collect · Cannibale', 'Hugo · Faire-part', 'La Circulade · Larzac', 'Les Chapeaux de Beaupré · Château de Beaupré', 'Héron · Illustration', 'Marseille · Encre et soleil', 'Joyeux Noël · Fama']),
];

const SEA_ARCHIVE = [
  { src: 'https://static.wixstatic.com/media/223f51_b65e6bfab1da46ed9de8d7c6062ab1a1~mv2.png', cat: 'sea', title: "Enfant au bord de l'eau", client: 'By the sea' },
  { src: 'https://static.wixstatic.com/media/223f51_ebf657c1a0614a728c62da28694448ad~mv2.jpg', cat: 'sea', title: 'Maillot blanc', client: 'By the sea' },
  { src: 'https://static.wixstatic.com/media/223f51_aa202512fa2d4b729643f5dfa2b2a4a1~mv2.png', cat: 'sea', title: 'Nu sur la plage', client: 'By the sea' },
  { src: 'https://static.wixstatic.com/media/223f51_806769c43c7c4fe0936af0e6c242bd48~mv2.jpg', cat: 'sea', title: 'Soleil orange', client: 'By the sea' },
  { src: 'https://static.wixstatic.com/media/223f51_96016d80bd474b5dafa5905980e25353~mv2.jpg', cat: 'sea', title: 'Instantané', client: 'By the sea' },
  { src: 'https://static.wixstatic.com/media/223f51_d05aebadbfe047a98265c1e02c76514a~mv2.png', cat: 'sea', title: 'Baigneuse à la serviette', client: 'By the sea' },
  { src: 'https://static.wixstatic.com/media/223f51_af1e111d378c42c283965d509c210d91~mv2.jpg', cat: 'sea', title: 'Deux baigneuses', client: 'By the sea' },
  { src: 'https://static.wixstatic.com/media/223f51_b9e39b67c5264c7b97699e9565d8d408~mv2_d_2298_3553_s_2.jpg', cat: 'sea', title: 'Promenade sur la plage', client: 'By the sea' },
];

const ART = [
  ...W('sea', 11, ['Immersion · By the sea', 'Figuier de Barbarie · By the sea', 'Rayures · By the sea', 'Calanque · By the sea', 'Nageuse au soleil · By the sea', 'Dos au soleil · By the sea', 'Serviette · By the sea', 'Masque · By the sea', 'Parasols · By the sea', 'Rochers · By the sea', 'Plongeon · By the sea']),
  ...SEA_ARCHIVE,
  ...W('voyage', 12, ['Bateaux · Thaïlande', 'Sadhu · Inde', 'Langmusi · Chine', 'Yourte · Gobi', 'Jodhpur · Inde', 'Moscou · Russie', 'Sagesse · Langmusi', 'Along the Wall · Chine', 'Little Buddhas · Birmanie', 'Lac Inle · Birmanie', 'Kompong Chhnang · Cambodge', 'Geisha · Japon']),
  ...W('animales', 8, ['Retour de pêche · Acrylique et plâtre', 'Tentacules · Acrylique et plâtre', 'Un pour tous · Acrylique et plâtre', 'Échappée belle · Acrylique et plâtre', 'Medusa · Acrylique et plâtre', 'Entre les lignes · Acrylique et plâtre', 'Le roi Léon · Acrylique et plâtre', 'Retour de pêche II · Acrylique et plâtre']),
  ...W('nus', 8, ['Nu I · Encre', 'Nu II · Encre', 'Nu III · Aquarelle', 'Nu IV · Encre', 'Nu V · Encre', 'Nu VI · Aquarelle', 'Nu VII · Encre', 'Nu VIII · Encre']),
];

const IG_ARCHIVE = ['Et demain ? · 17.10.2026', 'Baigneuse · Encre bleue', 'Bain de montagne · Encre bleue', 'Soleil couchant · Encre bleue', 'Calanques · Encre bleue', 'Baigneur · Encre bleue', 'Croquis · Affiche', 'Affiche W · Encre bleue', 'Affiche · Encre bleue', 'Port · Noir et blanc', 'Village bleu · Encre bleue', 'Nu aux rochers · Encre bleue'];
const IG_FILES = ['01-poster-demain', '02-baigneuse-rocher', '03-bain-montagne', '04-soleil-couchant', '05-ville-calanques', '06-baigneur-dos', '07-sketch-poster', '08-poster-w', '09-poster-sept', '10-port-noir-blanc', '11-village-bleu', '12-nu-rochers'];
const IG_LATEST = [
  {
    "src": "https://www.instagram.com/p/De_1ZhFMnmV/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/reel/De_1ZhFMnmV/",
    "title": "Juste pour s’amuser…",
    "client": "27.10.2026 · Illustration",
    "caption": "Juste pour s’amuser… 🐙🌊\n\nUne pieuvre, quelques poissons et un joyeux bazar sous-marin… Bref, tout baigne ! 😎☀️\n\n#Illustration #GraphicDesign #MediterraneanArt #ArtDirection #CreativePlay"
  },
  {
    "src": "https://www.instagram.com/p/De9qgpws_7F/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/reel/De9qgpws_7F/",
    "title": "La terrasse haute du Cercle",
    "client": "26.10.2026 · Encre et acrylique",
    "caption": "La terrasse haute du Cercle ☀️\n\nLignes de fuite, perspectives, ombres et lumière… Un décor presque graphique, où la rigueur des formes rencontre celle du sport.\n\nAu Cercle des Nageurs de Marseille, on vient s’entraîner, se dépasser, répéter les mêmes gestes, jour après jour.\n\nEntre architecture moderniste, culture sportive et art de vivre marseillais, un lieu à part, que j’avais envie de raconter à ma manière.\n\nIllustration originale encre et acrylique — disponible à la vente en MP.\n\n#CercleDesNageurs #Marseille #ArchitectureModerniste #IllustrationArt #ArtPrint"
  },
  {
    "src": "https://www.instagram.com/p/De76uPfsM_p/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/reel/De76uPfsM_p/",
    "title": "Encore cinq minutes…",
    "client": "25.10.2026 · Illustration",
    "caption": "☀️🧡 ENCORE CINQ MINUTES…\n\nLe soleil descend sur Marseille, mais au Cercle, on n’a jamais vraiment envie de partir.\n\nUn dernier bain, un dernier moment au soleil…\n\n« Maman, on reste encore cinq minutes ? »\n\nElle sourit. Elle allait justement lui demander la même chose. Malheureusement il est temps de rentrer !\n\n🎨 Illustration originale — Atelier WR\n💌 Disponible à la vente — Informations et commandes en MP.\n\n#Marseille #MarseilleJeTaime #CercleDesNageurs #IllustrationArt #MarseilleArt"
  },
  {
    "src": "https://www.instagram.com/p/De7S5ZMsbk5/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/reel/De7S5ZMsbk5/",
    "title": "Le solarium du Cercle",
    "client": "25.10.2026 · Feutre et encre · A4",
    "caption": "☀️ LE SOLARIUM DU CERCLE 😎\n\nIl y a des lieux à Marseille qui ne ressemblent à aucun autre. Des endroits qui ont une âme spéciale, où le temps semble s’arrêter…\n\nAccroché à la Corniche, face à la Méditerranée et aux îles du Frioul, le solarium du Cercle des Nageurs est de ceux-là.\n\nIci, on vient autant pour la mer que pour les copains. On profite du soleil, on refait le monde, on retrouve les habitués et cette façon si marseillaise de prendre son temps.\n\nLes minots d’hier deviennent les parents d’aujourd’hui. Les générations se croisent, les souvenirs se transmettent et les petits rituels restent.\n\nUn véritable petit théâtre à ciel ouvert, où les étés n’en finissent pas.\n\n🎨 Illustration originale au feutre et encre format A4, disponible à la vente.\n\n#Marseille #CercleDesNageurs #IllustrationArt #marseillecartepostale #MediterraneanLifestyle"
  },
  {
    "src": "https://www.instagram.com/p/Dek2xfLiI8B/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/p/Dek2xfLiI8B/",
    "title": "Solitude solaire",
    "client": "16.10.2026 · Encre bleue et acrylique · A4",
    "caption": "SOLITUDE SOLAIRE ☀️\n\nUn instant suspendu, quelque part face à la mer…\n\nBy the Sea — Série d’illustrations & peintures\nEncre bleue & acrylique sur papier\nFormat A4 · 21 × 29,7 cm\n\n#ByTheSea #Illustration #MediterraneanArt #BlueInk #Bauhaus #ArtContemporain"
  },
  {
    "src": "https://www.instagram.com/p/DehPdD6MROs/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/reel/DehPdD6MROs/",
    "title": "Bain glacé au Tuba Club",
    "client": "15.10.2026 · Illustration",
    "caption": "Un lieu, une expérience, de belles rencontres… et le souvenir d’un moment aussi inattendu que précieux ! 🧊❤️\n\nBain glacé @tuba.club avec @caro_arditti\n\n#Marseille #Illustration #ArtMarseillais #IllustrateurMarseille #CréationLocale"
  },
  {
    "src": "https://www.instagram.com/p/DeDnx7EoDvS/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/reel/DeDnx7EoDvS/",
    "title": "Marseille, Between Lines",
    "client": "03.10.2026 · By the Sea",
    "caption": "MARSEILLE, BETWEEN LINES.\n\nSea. Sun. Architecture.\nAnd nothing else to do.\n\nBy the Sea — Marseille\nWilliam Rigoulet, 2026\nOriginal available · DM\n\n#MarseilleArt #MediterraneanArt #ContemporaryArt #FrenchArtist #bytheseaside"
  },
  {
    "src": "https://www.instagram.com/p/Dd-5vCgssw8/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/reel/Dd-5vCgssw8/",
    "title": "Sunshine is coming · Callelongue",
    "client": "02.10.2026 · Illustration",
    "caption": "Sunshine is coming ☀️ #Callelongue\n\nSOLD! 😀\n\n#Marseille #MarseilleJeTaime #IllustrationArt #UrbanSketching #MediterraneanArt"
  },
  {
    "src": "https://www.instagram.com/p/Dd-6HtvsX8q/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/p/Dd-6HtvsX8q/",
    "title": "Marseille. Soleil. Bang Bang Bang!!",
    "client": "02.10.2026 · Illustration",
    "caption": "Marseille. Soleil. Bang Bang Bang!! ☀️💥\n\n#Marseille #MarseilleJeTaime #MarseilleArt #UrbanSketching #MediterraneanArt"
  },
  {
    "src": "https://www.instagram.com/p/Dd9rH7_MTsX/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/reel/Dd9rH7_MTsX/",
    "title": "Malmousque, my daily spot",
    "client": "01.10.2026 · Illustration",
    "caption": "Si vous me cherchez… je suis probablement sur les rochers. 🌊☀️\nMalmousque, my daily spot. 💙\n\n#Malmousque #Marseille #IllustrationMarseille #MarseilleArt #MediterraneanArt"
  },
  {
    "src": "https://www.instagram.com/p/DdNYJMlIDvW/media/?size=l",
    "postUrl": "https://www.instagram.com/wrigoulet/p/DdNYJMlIDvW/",
    "title": "Marseille carte postale",
    "client": "12.09.2026 · Illustration",
    "caption": "#illustration #marseillecartepostale #marseillemaville #blueaesthetic #hometown"
  }
];

const LIMIT = 9;
let lbList = [], lbIndex = 0;

function renderGrid(gridEl, items, cat, moreBtn) {
  const list = cat === 'all' ? items : items.filter(i => i.cat === cat);
  const shown = gridEl.dataset.expanded === '1' ? list : list.slice(0, LIMIT);
  gridEl.innerHTML = shown.map((it, i) => `
    ${it.projectHref ? `<a class="card project-card" href="${it.projectHref}" aria-label="Découvrir le projet ${it.client} : ${it.title}">` : `<figure class="card" data-i="${i}">`}
      <img src="${it.src}" alt="${it.title}${it.client ? ', ' + it.client : ''}" loading="lazy" decoding="async">
      ${it.projectHref ? '<span class="card-caption">' : '<figcaption>'}<b>${it.title}</b><span>${it.client}${it.projectHref ? ' · Découvrir le projet →' : ''}</span>${it.projectHref ? '</span>' : '</figcaption>'}
    ${it.projectHref ? '</a>' : '</figure>'}`).join('');
  gridEl.querySelectorAll('figure.card').forEach(c => {
    c.addEventListener('click', () => openLb(shown, +c.dataset.i));
  });
  observeCards(gridEl);
  if (moreBtn) {
    moreBtn.style.display = list.length > LIMIT && gridEl.dataset.expanded !== '1' ? '' : 'none';
    moreBtn.onclick = () => { gridEl.dataset.expanded = '1'; renderGrid(gridEl, items, cat, moreBtn); };
  }
}

function setupTabs(sectionId, items) {
  const sec = document.getElementById(sectionId);
  const grid = sec.querySelector('.grid');
  const more = sec.querySelector('.more button');
  const tabs = sec.querySelectorAll('.tab');
  const projectGroups = sec.querySelectorAll('[data-project-cat]');
  const categoryIntros = sec.querySelectorAll('[data-category-intro]');
  const categoryTitle = sec.querySelector('[data-category-title]');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    projectGroups.forEach(group => { group.hidden = group.dataset.projectCat !== t.dataset.cat; });
    categoryIntros.forEach(intro => { intro.hidden = intro.dataset.categoryIntro !== t.dataset.cat; });
    if (categoryTitle) categoryTitle.textContent = t.textContent.trim();
    if (grid.hasAttribute('data-design-grid')) grid.hidden = t.dataset.cat === 'horlogerie';
    grid.dataset.expanded = '0';
    renderGrid(grid, items, t.dataset.cat, more);
  }));
  const initialCat = sec.querySelector('.tab.active').dataset.cat;
  if (categoryTitle) categoryTitle.textContent = sec.querySelector('.tab.active').textContent.trim();
  if (grid.hasAttribute('data-design-grid')) grid.hidden = initialCat === 'horlogerie';
  categoryIntros.forEach(intro => { intro.hidden = intro.dataset.categoryIntro !== initialCat; });
  renderGrid(grid, items, initialCat, more);
}

function observeCards(root) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -5% 0px' });
  root.querySelectorAll('.card').forEach(c => io.observe(c));
}

/* lightbox */
const lb = document.getElementById('lb');
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('.lb-cap');
function openLb(list, i) { lbList = list; lbIndex = i; showLb(); lb.classList.add('open'); document.body.classList.add('no-scroll'); }
const escapeHtml = value => String(value || '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
function showLb() {
  const it = lbList[lbIndex];
  lbImg.src = it.src;
  lbImg.alt = it.title;
  lb.classList.toggle('has-long-caption', Boolean(it.caption));
  const caption = it.caption ? `<p>${escapeHtml(it.caption).replace(/\n/g, '<br>')}</p>` : '';
  const postLink = it.postUrl ? `<a href="${it.postUrl}" target="_blank" rel="noopener">Voir la publication Instagram ↗</a>` : '';
  lbCap.innerHTML = `<strong>${escapeHtml(it.title)}</strong><span>${escapeHtml(it.client)}</span>${caption}${postLink}`;
}
function closeLb() { lb.classList.remove('open'); document.body.classList.remove('no-scroll'); }
lb.querySelector('.lb-close').onclick = closeLb;
lb.querySelector('.lb-prev').onclick = e => { e.stopPropagation(); lbIndex = (lbIndex - 1 + lbList.length) % lbList.length; showLb(); };
lb.querySelector('.lb-next').onclick = e => { e.stopPropagation(); lbIndex = (lbIndex + 1) % lbList.length; showLb(); };
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.querySelectorAll('[data-jewelry-i]').forEach(button => button.addEventListener('click', () => openLb(JEWELRY_GALLERY, +button.dataset.jewelryI)));
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') lb.querySelector('.lb-prev').click();
  if (e.key === 'ArrowRight') lb.querySelector('.lb-next').click();
});

/* instagram strip */
const igGrid = document.querySelector('.ig-grid');
const archivedIgItems = IG_FILES.map((f, i) => { const [title, client] = IG_ARCHIVE[i].split(' · '); return { src: `assets/ig/${f}.jpg`, title, client }; });
const igItems = [...IG_LATEST, ...archivedIgItems];
igGrid.innerHTML = igItems.map((it, i) => `<a href="#" data-i="${i}" aria-label="Voir ${escapeHtml(it.title)}"><img src="${it.src}" alt="${escapeHtml(it.title)}" loading="lazy" referrerpolicy="no-referrer"></a>`).join('');
igGrid.querySelectorAll('a').forEach(a => a.addEventListener('click', e => { e.preventDefault(); openLb(igItems, +a.dataset.i); }));

/* nav */
const nav = document.querySelector('.nav');
document.querySelector('.burger').onclick = () => nav.classList.toggle('open');
document.querySelectorAll('.menu a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const sections = [...document.querySelectorAll('section[id]')];
const links = [...document.querySelectorAll('.menu a')];
const so = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => so.observe(s));

/* reveal fallback: anything already above the fold gets revealed on scroll */
let tick = false;
function revealPassed() {
  document.querySelectorAll('.rv:not(.in), .card:not(.in)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) el.classList.add('in');
  });
}
window.addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(() => { revealPassed(); tick = false; }); } }, { passive: true });
window.addEventListener('load', revealPassed);

/* reveal */
const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => ro.observe(el));

setupTabs('design', DESIGN);
setupTabs('fineart', ART);
