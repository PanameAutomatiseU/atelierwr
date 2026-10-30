const W = (cat, n, caps) => caps.map((c, i) => {
  const [title, client] = c.split(' · ');
  const projectHref = client === 'Maison Boanton' ? 'boanton.html' : client === 'Cartier' ? 'cartier.html' : '';
  return { src: `assets/work/${cat}-${String(i + 1).padStart(2, '0')}.jpg`, cat, title, client: client || '', projectHref };
});

const HORLOGERIE = W('horlogerie', 12, ['Panthère, haute joaillerie · Cartier', 'Co-création de la marque · Maison Boanton', 'Emblème · Maison Boanton', 'Collection Héritage · Maison Boanton', 'Croquis de recherche · Maison Boanton', 'Calibre Diver · Cartier', 'Hypnose · Cartier', 'Collection de bijoux · Joaillerie', 'Calibre · Cartier', 'Tank Anglaise · Cartier', 'Les Indomptables · Cartier', 'Édition Octobre Rose · Maison Boanton']);

const JEWELRY_GALLERY = [
  { src: 'assets/work/horlogerie-08.jpg', title: 'Collection Interstice', client: 'Planche complète des dessins' },
  { src: 'https://static.wixstatic.com/media/223f51_aee806852e38479c92a34c0edd117975~mv2_d_3508_4961_s_4_2.jpg', title: 'Collection Interstice', client: 'Mockup 01' },
  { src: 'https://static.wixstatic.com/media/223f51_0ffcf5558bfd4da49fe86f08e864ea46~mv2_d_3508_2480_s_4_2.jpg', title: 'Collection Interstice', client: 'Mockup 02' },
  { src: 'https://static.wixstatic.com/media/223f51_5add9772df6a4ef4ab69d588b8fffce8~mv2.jpg', title: 'Collection Interstice', client: 'Mockup 03' },
  { src: 'https://static.wixstatic.com/media/223f51_1e1628b9480b480a877ff0be5b58c60a~mv2.png', title: 'Collection Interstice', client: 'Mockup 04' },
  { src: 'https://static.wixstatic.com/media/223f51_bfd0a91ae1964668a80ec4f594579050~mv2_d_3508_2480_s_4_2.png', title: 'Collection Interstice', client: 'Mockup 05' },
  { src: 'https://static.wixstatic.com/media/223f51_27c54311b8f3443eb247638db929905c~mv2_d_3508_2480_s_4_2.png', title: 'Collection Interstice', client: 'Mockup 06' },
];

const DESIGN = [
  ...[1, 2, 3, 4, 11, 0, 5, 6, 8, 9, 10].map(i => HORLOGERIE[i]),
  ...W('maroquinerie', 12, ['Eyewear · Lunetterie', 'Collection Signature · Maroquinerie', 'Sandales cordes · Almé Paris', 'Lunettes haute joaillerie · Lunetterie', 'Sacs · Céline', 'Maroquinerie · Almé Paris', 'Shoes bag · Bally', 'Sneakers · Bally', 'Trolley pliable · Kipling', 'Croquis de sacs · Recherches', 'Croquis · Burberry', 'Sacs · Sonia Rykiel']),
  ...W('mobilier', 8, ['Piano « Italy » · Carod', 'Piano en situation · Carod', 'Sofa · Grand Palais', 'Collection · Grand Palais', 'Ère de je · Mobilier modulable', 'Ego · Assise', 'Mobilier outdoor · Grand Palais', 'Croquis de collection · Grand Palais']),
  ...W('packaging', 10, ['Coffrets · Almé Paris', 'Édition Nouvel An chinois · Packaging', 'Étiquettes · Domaine de la Bégude', 'Pleine Nature · Étiquettes de vin', "L'Ernest · La Grange d'Ernest", 'Triplette · Cantarelle', 'Gamme · Jean-Étienne Chermette', 'Coffret Année du Lapin · Philips', 'Coffret montre · Maison Boanton', 'Écrin V · Packaging']),
  ...W('logo', 12, ['Vitrophanie · La Boutique du Rhum', 'Identité · Maison Célestine', 'Crozes-Hermitage · Domaine du Chêne Vert', 'Domaines & distilleries · Diva', 'Déclinaisons · Maison Célestine', 'Monogramme · Almé Paris', 'Caves parisiennes · Joséphine', 'Logo · Aurea Imaging', 'Motif · Lemarys', 'Identité · Exacode', 'Avocats · Louise Law', 'Logo · Owl Hair Salon']),
  ...W('affiches', 12, ['Vent de sable · Affiche', 'Affiche · Joséphine', 'Les dimanches Pleine Mer · Cannibale', 'Jazz classique · Comptoir du Live', 'Coupe du monde 2018 · Cannibale Café', 'Click & Collect · Cannibale', 'Hugo · Faire-part', 'La Circulade · Larzac', 'Les Chapeaux de Beaupré · Château de Beaupré', 'Héron · Illustration', 'Marseille · Encre et soleil', 'Joyeux Noël · Fama']),
];

const ART = [
  ...W('sea', 11, ['Immersion · By the sea', 'Figuier de Barbarie · By the sea', 'Rayures · By the sea', 'Calanque · By the sea', 'Nageuse au soleil · By the sea', 'Dos au soleil · By the sea', 'Serviette · By the sea', 'Masque · By the sea', 'Parasols · By the sea', 'Rochers · By the sea', 'Plongeon · By the sea']),
  ...W('voyage', 12, ['Bateaux · Thaïlande', 'Sadhu · Inde', 'Langmusi · Chine', 'Yourte · Gobi', 'Jodhpur · Inde', 'Moscou · Russie', 'Sagesse · Langmusi', 'Along the Wall · Chine', 'Little Buddhas · Birmanie', 'Lac Inle · Birmanie', 'Kompong Chhnang · Cambodge', 'Geisha · Japon']),
  ...W('animales', 8, ['Retour de pêche · Acrylique et plâtre', 'Tentacules · Acrylique et plâtre', 'Un pour tous · Acrylique et plâtre', 'Échappée belle · Acrylique et plâtre', 'Medusa · Acrylique et plâtre', 'Entre les lignes · Acrylique et plâtre', 'Le roi Léon · Acrylique et plâtre', 'Retour de pêche II · Acrylique et plâtre']),
  ...W('nus', 8, ['Nu I · Encre', 'Nu II · Encre', 'Nu III · Aquarelle', 'Nu IV · Encre', 'Nu V · Encre', 'Nu VI · Aquarelle', 'Nu VII · Encre', 'Nu VIII · Encre']),
];

const IG = ['Et demain ? · 17.10.2026', 'Baigneuse · Encre bleue', 'Bain de montagne · Encre bleue', 'Soleil couchant · Encre bleue', 'Calanques · Encre bleue', 'Baigneur · Encre bleue', 'Croquis · Affiche', 'Affiche W · Encre bleue', 'Affiche · Encre bleue', 'Port · Noir et blanc', 'Village bleu · Encre bleue', 'Nu aux rochers · Encre bleue'];
const IG_FILES = ['01-poster-demain', '02-baigneuse-rocher', '03-bain-montagne', '04-soleil-couchant', '05-ville-calanques', '06-baigneur-dos', '07-sketch-poster', '08-poster-w', '09-poster-sept', '10-port-noir-blanc', '11-village-bleu', '12-nu-rochers'];

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
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    projectGroups.forEach(group => { group.hidden = group.dataset.projectCat !== t.dataset.cat; });
    categoryIntros.forEach(intro => { intro.hidden = intro.dataset.categoryIntro !== t.dataset.cat; });
    grid.dataset.expanded = '0';
    renderGrid(grid, items, t.dataset.cat, more);
  }));
  const initialCat = sec.querySelector('.tab.active').dataset.cat;
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
function showLb() { const it = lbList[lbIndex]; lbImg.src = it.src; lbImg.alt = it.title; lbCap.innerHTML = `${it.title}<span>${it.client}</span>`; }
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
const igItems = IG_FILES.map((f, i) => { const [title, client] = IG[i].split(' · '); return { src: `assets/ig/${f}.jpg`, title, client }; });
igGrid.innerHTML = igItems.map((it, i) => `<a href="#" data-i="${i}"><img src="${it.src}" alt="${it.title}" loading="lazy"></a>`).join('');
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
