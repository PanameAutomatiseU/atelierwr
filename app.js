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
  { src: 'assets/work/porte-cartes-securise-nouveau.jpg', title: 'Porte-cartes sécurisé', client: 'Décors précieux en laque, métal et diamants' },
  { src: 'assets/work/porte-cartes-securise-ambiance.jpg', title: 'Porte-cartes sécurisé', client: 'Mises en situation, variations vert profond et noir et blanc' },
];

const MAROQUINERIE = [
  { src: 'assets/work/maroquinerie-01.jpg', cat: 'maroquinerie', subcat: 'sacs', title: 'Sac structuré à chaîne', client: 'Collection de maroquinerie' },
  { src: 'assets/work/maroquinerie-02.jpg', cat: 'maroquinerie', subcat: 'lunetterie', tags: ['lunetterie', 'eyewear'], title: 'Collection Eyewear · Acétate architectural', client: 'Design de monture · Écaille et métal' },
  { src: 'assets/work/maroquinerie-03.jpg', cat: 'maroquinerie', subcat: 'sacs', title: 'Sac bandoulière à fermoir', client: 'Sacs & maroquinerie' },
  { src: 'assets/work/lemarys-chain.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'lemarys'], title: 'Lemarys Paris · Sac à chaîne', client: 'Collection de maroquinerie · Fermoir minéral superposé' },
  { src: 'assets/work/lemarys-02.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'lemarys'], title: 'Lemarys Paris · Sac architectural', client: 'Collection de maroquinerie · Fermoir polygonal et feuille d’or' },
  { src: 'assets/work/lemarys-03.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'lemarys'], title: 'Lemarys Paris · Sac graphique', client: 'Collection de maroquinerie · Signature métallique verticale' },
  { src: 'assets/work/lemarys-04.png', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'lemarys'], title: 'Lemarys Paris · Sac structuré', client: 'Collection de maroquinerie · Fermoir vertical en pierre' },
  { src: 'assets/work/maroquinerie-05.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'mulberry'], title: 'Mulberry · Pochette structurée', client: 'Direction artistique · Tressage et nœuds de cuir' },
  { src: 'assets/work/maroquinerie-06.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'mulberry'], title: 'Mulberry · Sac selle compact', client: 'Design de collection · Bouclerie équestre' },
  { src: 'assets/work/maroquinerie-07.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'mulberry'], title: 'Mulberry · Cabas souple', client: 'Design de collection · Construction sellier' },
  { src: 'assets/work/maroquinerie-08.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'mulberry'], title: 'Mulberry · Petit porté main', client: 'Design de collection · Bandoulière tressée' },
  { src: 'assets/work/maroquinerie-09.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'place-vendome'], title: 'Place Vendôme · Collection Signature', client: 'Carré à pans coupés et architecture parisienne' },
  { src: 'assets/work/maroquinerie-10.jpg', cat: 'maroquinerie', subcat: 'accessoires', tags: ['accessoires', 'maison-rinceau'], title: 'Maison Rinceau · Identité et collection', client: 'Monogramme, fermoir signature et maroquinerie' },
  { src: 'assets/work/maroquinerie-12.jpg', cat: 'maroquinerie', subcat: 'chaussures', tags: ['chaussures', 'alme'], title: 'Almé · Sandales graphiques', client: 'Direction artistique · Détails dorés et identité double A' },
  { src: 'assets/work/maroquinerie-13.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'alme'], title: 'Almé · Sac demi-lune', client: 'Maroquinerie · Monogramme double A en métal doré' },
  { src: 'assets/work/maroquinerie-14.jpg', cat: 'maroquinerie', subcat: 'chaussures', tags: ['chaussures', 'alme'], title: 'Almé · Soulier tressé', client: 'Design de chaussure · Bride, tressage et talon en bois' },
  { src: 'assets/work/maroquinerie-15.jpg', cat: 'maroquinerie', subcat: 'chaussures', tags: ['chaussures', 'alme'], title: 'Almé · Sandales en corde naturelle', client: 'Design de chaussure · Tressage artisanal et nubuck' },
  { src: 'assets/work/maroquinerie-16.jpg', cat: 'maroquinerie', subcat: 'lunetterie', tags: ['lunetterie', 'eyewear'], title: 'Lunetterie haute joaillerie · Études de branches', client: 'Design précieux · Pierres et structures métalliques' },
  { src: 'assets/work/maroquinerie-17.jpg', cat: 'maroquinerie', subcat: 'accessoires', title: 'Bijoux de sac et porte-clés', client: 'Petite maroquinerie & accessoires' },
  { src: 'assets/work/maroquinerie-18.jpg', cat: 'maroquinerie', subcat: 'accessoires', tags: ['accessoires', 'alme'], title: 'Almé · Ceintures et boucleries', client: 'Déclinaisons du monogramme double A' },
  { src: 'assets/work/maroquinerie-19.jpg', cat: 'maroquinerie', subcat: 'lunetterie', tags: ['lunetterie', 'eyewear'], title: 'Lunetterie haute joaillerie · Modèle floral', client: 'Monture ronde · Or et sertissage' },
  { src: 'assets/work/maroquinerie-20.jpg', cat: 'maroquinerie', subcat: 'recherches', tags: ['recherches', 'celine'], title: 'Céline · Volume facetté', client: 'Candidature · Design architectural' },
  { src: 'assets/work/maroquinerie-21.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'celine'], title: 'Céline · Géométrie circulaire', client: 'Candidature · Design minimaliste' },
  { src: 'assets/work/maroquinerie-22.jpg', cat: 'maroquinerie', subcat: 'accessoires', tags: ['accessoires', 'celine'], title: 'Céline · Ligne courbe', client: 'Candidature · Design de maroquinerie' },
  { src: 'assets/work/maroquinerie-23.jpg', cat: 'maroquinerie', subcat: 'recherches', tags: ['recherches', 'croquis-recherches'], title: 'Sonia Rykiel · Recherche personnelle', client: 'Volumes et décors de maroquinerie' },
  { src: 'assets/work/maroquinerie-24.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'alme'], title: 'Almé · Collection de maroquinerie', client: 'Sacs, petite maroquinerie et fermoir signature' },
  { src: 'assets/work/logo-06.jpg', cat: 'maroquinerie', subcat: 'accessoires', tags: ['accessoires', 'alme'], title: 'Almé · Identité double A', client: 'Monogramme, applications et territoire de marque' },
  { src: 'assets/work/maroquinerie-25.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'mulberry'], title: 'Mulberry · Recherche de collection', client: 'Croquis, volumes, tressages et cordons' },
  { src: 'assets/work/maroquinerie-26.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'bally'], title: 'Bally · Sac à chaussures', client: 'Partenariat Vogue US · Anna Wintour' },
  { src: 'assets/work/maroquinerie-27.jpg', cat: 'maroquinerie', subcat: 'accessoires', tags: ['accessoires', 'fendi'], title: 'Fendi Dandy · Ceintures et boucleries', client: 'Design d’accessoires' },
  { src: 'assets/work/maroquinerie-28.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'fendi'], title: 'Fendi Dandy · Petite maroquinerie', client: 'Portefeuilles compacts et matières colorées' },
  { src: 'assets/work/maroquinerie-29.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'fendi'], title: 'Fendi Dandy · Porte-cartes', client: 'Systèmes coulissants et motifs de surface' },
  { src: 'assets/work/maroquinerie-30.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'fendi'], title: 'Fendi Dandy · Portefeuilles graphiques', client: 'Formats, constructions et identités visuelles' },
  { src: 'assets/work/maroquinerie-31.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'bally'], title: 'Bally Sport · Collection de sacs', client: 'Archives graphiques et design sportif' },
  { src: 'assets/work/maroquinerie-32.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'fendi'], title: 'Fendi Dandy · Bijoux de sac', client: 'Porte-clés, charms et mousquetons' },
  { src: 'assets/work/maroquinerie-33.jpg', cat: 'maroquinerie', subcat: 'sacs', title: 'Sac à rabat compact', client: 'Sacs & maroquinerie' },
  { src: 'assets/work/maroquinerie-34.jpg', cat: 'maroquinerie', subcat: 'recherches', title: 'Croquis de sacs et volumes', client: 'Croquis & recherches' },
  { src: 'assets/work/maroquinerie-35.jpg', cat: 'maroquinerie', subcat: 'sacs', title: 'Systèmes de portage et construction', client: 'Sacs & maroquinerie' },
  { src: 'assets/work/maroquinerie-36.jpg', cat: 'maroquinerie', subcat: 'recherches', tags: ['recherches', 'croquis-recherches'], title: 'Burberry · Recherche personnelle', client: 'Mode, sacs et accessoires' },
  { src: 'assets/work/maroquinerie-37.jpg', cat: 'maroquinerie', subcat: 'recherches', tags: ['recherches', 'croquis-recherches'], title: 'Recherches de volumes · Sacs', client: 'Silhouettes, proportions et systèmes de porté' },
  { src: 'assets/work/maroquinerie-38.jpg', cat: 'maroquinerie', subcat: 'recherches', tags: ['recherches', 'croquis-recherches'], title: 'Jingo · Vêtement technique de voyage', client: 'Détails fonctionnels et gamme' },
  { src: 'assets/work/maroquinerie-39.jpg', cat: 'maroquinerie', subcat: 'recherches', tags: ['recherches', 'croquis-recherches'], title: 'Recherches de silhouettes · Chaussures', client: 'Lignes, talons et constructions' },
  { src: 'assets/work/maroquinerie-40.jpg', cat: 'maroquinerie', subcat: 'recherches', tags: ['recherches', 'croquis-recherches'], title: 'Bagagerie nomade · Laptop & camera case', client: 'Organisation et portage' },
  { src: 'assets/work/maroquinerie-41.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'alme'], title: 'Almé · Cabas signature', client: 'Monogramme double A perforé et pochette amovible' },
  { src: 'assets/work/maroquinerie-42.jpg', cat: 'maroquinerie', subcat: 'accessoires', title: 'Accessoires audio et objets nomades', client: 'Petite maroquinerie & accessoires' },
  { src: 'assets/work/maroquinerie-43.jpg', cat: 'maroquinerie', subcat: 'lunetterie', tags: ['lunetterie', 'eyewear'], title: 'Collection de montures · Formes et proportions', client: 'Recherche de gamme · Acétate et métal' },
  { src: 'assets/work/maroquinerie-44.jpg', cat: 'maroquinerie', subcat: 'chaussures', tags: ['chaussures', 'bally'], title: 'Bally Sport · Recherche sneakers S/S 2006', client: 'Design de collection · Silhouettes et détails sportifs' },
  { src: 'assets/work/maroquinerie-45.jpg', cat: 'maroquinerie', subcat: 'sacs', tags: ['sacs', 'fendi'], title: 'Fendi Dandy · Étuis technologiques', client: 'Housses pour ordinateur et accessoires numériques' }
];

const DESIGN = [
  ...MAROQUINERIE,
  ...[
    { src: 'assets/work/mobilier-01.jpg', cat: 'mobilier', tags: ['carod'], title: 'Piano « Italy »', client: 'Carod · Piano connecté' },
    { src: 'assets/work/mobilier-02.jpg', cat: 'mobilier', tags: ['carod'], title: 'Piano en situation', client: 'Carod · Piano connecté' },
    { src: 'assets/work/mobilier-03.jpg', cat: 'mobilier', tags: ['grand-palais'], title: 'Grand Palais · Sofa', client: 'Mobilier & assises' },
    { src: 'assets/work/mobilier-04.jpg', cat: 'mobilier', tags: ['grand-palais'], title: 'Grand Palais · Collection', client: 'Mobilier & assises' },
    { src: 'assets/work/mobilier-05.jpg', cat: 'mobilier', tags: ['ere-de-je'], title: 'Ère de je · Aire de jeu', client: 'Mobilier modulable · Studio étudiant' },
    { src: 'assets/work/mobilier-06.jpg', cat: 'mobilier', title: 'Ego', client: 'Assise' },
    { src: 'assets/work/mobilier-07.jpg', cat: 'mobilier', tags: ['grand-palais'], title: 'Grand Palais · Mobilier outdoor', client: 'Mobilier & assises' },
    { src: 'assets/work/mobilier-08.jpg', cat: 'mobilier', tags: ['grand-palais'], title: 'Grand Palais · Croquis de collection', client: 'Mobilier & assises' }
  ],
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

const INK_WORKS = [];

const LIMIT = 9;
const projectKey = value => String(value || 'projet')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');
let lbList = [], lbIndex = 0;

function renderGrid(gridEl, items, cat, moreBtn) {
  let list = cat === 'all' ? items : items.filter(i => i.cat === cat);
  const subcat = gridEl.dataset.subcat || 'all';
  if (cat === 'mobilier') list = list.filter(item => !(item.tags || []).some(tag => tag === 'grand-palais' || tag === 'carod' || tag === 'ere-de-je'));
  if (cat === 'maroquinerie') {
    const tagsFor = item => item.tags || [item.subcat];
    const isStandaloneProject = item => tagsFor(item).some(tag => tag === 'lemarys' || tag === 'eyewear' || tag === 'mulberry' || tag === 'alme' || tag === 'bally' || tag === 'fendi' || tag === 'place-vendome' || tag === 'maison-rinceau' || tag === 'celine' || tag === 'croquis-recherches');
    if (subcat === 'lemarys') {
      list = list.filter(item => tagsFor(item).includes('lemarys'));
    } else if (subcat === 'lunetterie') {
      list = list.filter(item => tagsFor(item).includes('eyewear'));
    } else if (subcat === 'mulberry') {
      list = list.filter(item => tagsFor(item).includes('mulberry'));
    } else if (subcat === 'alme') {
      list = list.filter(item => tagsFor(item).includes('alme'));
    } else if (subcat === 'bally') {
      list = list.filter(item => tagsFor(item).includes('bally'));
    } else if (subcat === 'fendi') {
      list = list.filter(item => tagsFor(item).includes('fendi'));
    } else if (subcat === 'place-vendome') {
      list = list.filter(item => tagsFor(item).includes('place-vendome'));
    } else if (subcat === 'maison-rinceau') {
      list = list.filter(item => tagsFor(item).includes('maison-rinceau'));
    } else if (subcat === 'celine') {
      list = list.filter(item => tagsFor(item).includes('celine'));
    } else {
      list = list.filter(item => !isStandaloneProject(item));
      if (subcat !== 'all') list = list.filter(item => tagsFor(item).includes(subcat));
    }
  }
  const showCompleteCategory = cat === 'maroquinerie';
  const shown = showCompleteCategory || gridEl.dataset.expanded === '1' ? list : list.slice(0, LIMIT);
  gridEl.innerHTML = shown.map((it, i) => `
    ${it.projectHref ? `<a class="card project-card" data-project-key="${projectKey(it.client || it.title)}" href="${it.projectHref}" aria-label="Découvrir le projet ${it.client} : ${it.title}">` : `<figure class="card" data-i="${i}" data-project-key="${projectKey(it.client || it.title)}">`}
      <img src="${it.src}" alt="${it.title}${it.client ? ', ' + it.client : ''}" loading="lazy" decoding="async">
      ${it.projectHref ? '<span class="card-caption">' : '<figcaption>'}<b>${it.title}</b><span>${it.client}${it.projectHref ? ' · Découvrir le projet →' : ''}</span>${it.projectHref ? '</span>' : '</figcaption>'}
    ${it.projectHref ? '</a>' : '</figure>'}`).join('');
  gridEl.querySelectorAll('figure.card').forEach(c => {
    c.addEventListener('click', () => openLb(shown, +c.dataset.i));
  });
  observeCards(gridEl);
  if (moreBtn) {
    moreBtn.style.display = !showCompleteCategory && list.length > LIMIT && gridEl.dataset.expanded !== '1' ? '' : 'none';
    moreBtn.onclick = () => { gridEl.dataset.expanded = '1'; renderGrid(gridEl, items, cat, moreBtn); };
  }
}


function setupContinuousDesign(sec, items) {
  const categories = [
    ['horlogerie', 'Horlogerie'],
    ['joaillerie', 'Joaillerie'],
    ['maroquinerie', 'Maroquinerie & accessoires'],
    ['mobilier', 'Mobilier & objets'],
    ['packaging', 'Packaging & vins'],
    ['logo', 'Logo & identité'],
    ['affiches', 'Affiches & illustrations']
  ];
  const standaloneAccessoryProjects = ['lemarys', 'mulberry', 'alme', 'celine', 'bally', 'fendi', 'place-vendome', 'maison-rinceau', 'lunetterie', 'crazy-charms', 'croquis-recherches'];
  const sourceBar = sec.querySelector('.design-tabs');
  const originalTitle = sec.querySelector('.design-category-title');
  const originalProjectNav = sec.querySelector('[data-discipline-project-nav]');
  const originalGrid = sec.querySelector('[data-design-grid]');
  const originalMore = sec.querySelector('.more');
  const intros = [...sec.querySelectorAll('[data-category-intro]')];
  const projectGroups = [...sec.querySelectorAll('[data-project-cat]')];

  if (!sourceBar || sec.querySelector('.design-continuous')) return;

  originalTitle?.setAttribute('hidden', '');
  originalProjectNav?.setAttribute('hidden', '');
  if (originalGrid) originalGrid.hidden = true;
  if (originalMore) originalMore.hidden = true;

  const continuousRoot = document.createElement('div');
  continuousRoot.className = 'design-continuous';
  sourceBar.insertAdjacentElement('afterend', continuousRoot);

  const sections = new Map();
  categories.forEach(([cat, label], index) => {
    const section = document.createElement('section');
    section.className = 'design-discipline-section';
    section.id = 'design-discipline-' + cat;
    section.dataset.discipline = cat;
    section.innerHTML = '<header class="design-discipline-heading"><small>' +
      String(index + 1).padStart(2, '0') + ' · Spécialité design</small><h3>' +
      label + '</h3></header>';
    continuousRoot.appendChild(section);
    sections.set(cat, section);

    intros.filter(intro => intro.dataset.categoryIntro === cat).forEach(intro => {
      intro.hidden = false;
      section.appendChild(intro);
    });
    projectGroups.filter(group => group.dataset.projectCat === cat).forEach(group => {
      group.hidden = false;
      section.appendChild(group);
    });

    if (cat === 'affiches') {
      const disciplineGrid = document.createElement('div');
      disciplineGrid.className = 'grid design-continuous-grid';
      disciplineGrid.dataset.expanded = '1';
      section.appendChild(disciplineGrid);
      renderGrid(disciplineGrid, items, cat, null);
    }
  });

  const accessorySection = sections.get('maroquinerie');
  const typeFilterLabel = accessorySection.querySelector('.accessory-filter-panel__secondary');
  const typeFilters = accessorySection.querySelector('.accessory-subtabs--types');
  if (typeFilterLabel) typeFilterLabel.hidden = true;
  if (typeFilters) typeFilters.hidden = true;

  const accessoryProjects = [...accessorySection.querySelectorAll('[data-accessory-project]')];
  const accessoryButtons = [...accessorySection.querySelectorAll('.accessory-project-quicklink[data-accessory-subcat]')];
  const showAccessorySelection = (key, shouldScroll = true) => {
    if (!standaloneAccessoryProjects.includes(key)) return;
    accessoryProjects.forEach(project => {
      project.hidden = project.dataset.accessoryProject !== key;
    });
    accessoryButtons.forEach(button => {
      const active = button.dataset.accessorySubcat === key;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    const target = accessorySection.querySelector('[data-accessory-project="' + key + '"]');
    if (shouldScroll && target) window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 70);
  };
  accessoryButtons.forEach(button => button.addEventListener('click', () => {
    showAccessorySelection(button.dataset.accessorySubcat);
  }));
  accessoryProjects.forEach(project => { project.hidden = true; });

  const furnitureSection = sections.get('mobilier');
  const standaloneFurnitureProjects = ['grand-palais', 'carod', 'ere-de-je', 'ego'];
  const furnitureProjects = [...furnitureSection.querySelectorAll('[data-furniture-project]')];
  const furnitureButtons = [...furnitureSection.querySelectorAll('[data-furniture-project-key]')];
  const showFurnitureSelection = (key, shouldScroll = true) => {
    if (!standaloneFurnitureProjects.includes(key)) return;
    furnitureProjects.forEach(project => {
      project.hidden = project.dataset.furnitureProject !== key;
    });
    furnitureButtons.forEach(button => {
      const active = button.dataset.furnitureProjectKey === key;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    const target = furnitureSection.querySelector('[data-furniture-project="' + key + '"]');
    if (shouldScroll && target) window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 70);
  };
  furnitureButtons.forEach(button => button.addEventListener('click', () => {
    showFurnitureSelection(button.dataset.furnitureProjectKey);
  }));
  furnitureProjects.forEach(project => { project.hidden = true; });

  const allBars = [sourceBar];
  let floatingBar = document.querySelector('.design-tabs-floating');
  if (!floatingBar) {
    floatingBar = sourceBar.cloneNode(true);
    floatingBar.classList.add('design-tabs-floating');
    floatingBar.setAttribute('aria-label', 'Accès permanent aux sept disciplines de Design et création');
    document.body.appendChild(floatingBar);
  }
  allBars.push(floatingBar);

  const setActiveDiscipline = cat => {
    allBars.forEach(bar => bar.querySelectorAll('[data-cat]').forEach(button => {
      const active = button.dataset.cat === cat;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    }));
  };
  allBars.forEach(bar => bar.querySelectorAll('[data-cat]').forEach(button => {
    button.addEventListener('click', () => {
      const target = sections.get(button.dataset.cat);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveDiscipline(button.dataset.cat);
    });
  }));

  let scrollTick = false;
  const updateContinuousNavigation = () => {
    const bounds = sec.getBoundingClientRect();
    const visible = bounds.top <= 76 && bounds.bottom > 150;
    floatingBar.classList.toggle('is-visible', visible);
    floatingBar.setAttribute('aria-hidden', visible ? 'false' : 'true');

    let activeCat = categories[0][0];
    categories.forEach(([cat]) => {
      const discipline = sections.get(cat);
      if (discipline && discipline.getBoundingClientRect().top <= 180) activeCat = cat;
    });
    setActiveDiscipline(activeCat);
  };
  const requestContinuousUpdate = () => {
    if (scrollTick) return;
    scrollTick = true;
    requestAnimationFrame(() => {
      updateContinuousNavigation();
      scrollTick = false;
    });
  };
  window.addEventListener('scroll', requestContinuousUpdate, { passive: true });
  window.addEventListener('resize', requestContinuousUpdate);
  updateContinuousNavigation();
  window.setTimeout(updateContinuousNavigation, 180);

  const requestedProject = new URLSearchParams(window.location.search).get('project');
  if (standaloneAccessoryProjects.includes(requestedProject)) {
    showAccessorySelection(requestedProject, false);
    window.setTimeout(() => {
      accessorySection.querySelector('[data-accessory-project="' + requestedProject + '"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 180);
  } else if (standaloneFurnitureProjects.includes(requestedProject)) {
    showFurnitureSelection(requestedProject, false);
    window.setTimeout(() => {
      furnitureSection.querySelector('[data-furniture-project="' + requestedProject + '"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 180);
  }
}

function setupTabs(sectionId, items) {
  const sec = document.getElementById(sectionId);
  if (sectionId === 'design') {
    setupContinuousDesign(sec, items);
    return;
  }
  const grid = sec.querySelector('.grid');
  const more = sec.querySelector('.more button');
  const tabs = sec.querySelectorAll('.tab');
  const projectGroups = sec.querySelectorAll('[data-project-cat]');
  const categoryIntros = sec.querySelectorAll('[data-category-intro]');
  const categoryTitle = sec.querySelector('[data-category-title]');
  const accessoryTabs = sec.querySelectorAll('[data-accessory-subcat]');
  const accessoryProjects = sec.querySelectorAll('[data-accessory-project]');
  const disciplineProjectNav = sec.querySelector('[data-discipline-project-nav]');
  const disciplineProjectLinks = sec.querySelector('[data-discipline-project-links]');
  const standaloneAccessoryProjects = ['lemarys', 'mulberry', 'alme', 'celine', 'bally', 'fendi', 'place-vendome', 'maison-rinceau', 'lunetterie', 'croquis-recherches'];
  const scrollTo = target => {
    if (!target) return;
    window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 70);
  };
  const updateProjectNav = cat => {
    if (!disciplineProjectNav || !disciplineProjectLinks) return;
    if (cat === 'maroquinerie') {
      disciplineProjectNav.hidden = true;
      return;
    }
    disciplineProjectNav.hidden = false;
    if (cat === 'horlogerie') {
      const links = [...projectGroups].filter(group => group.dataset.projectCat === 'horlogerie');
      disciplineProjectLinks.innerHTML = links.map((link, index) => {
        const label = link.querySelector('.project-group-copy strong')?.textContent.trim() || 'Projet ' + (index + 1);
        return '<a class="discipline-project-link" href="' + link.getAttribute('href') + '"><span>' + String(index + 1).padStart(2, '0') + '</span><strong>' + label + '</strong><b aria-hidden="true">↗</b></a>';
      }).join('');
      return;
    }
    if (cat === 'joaillerie') {
      const entries = [
        ['Collection Interstice', '.jewelry-work'],
        ['Porte-cartes sécurisé', '.jewelry-cardholder-gallery']
      ];
      disciplineProjectLinks.innerHTML = entries.map((entry, index) => '<button class="discipline-project-link" type="button" data-project-target="' + entry[1] + '"><span>' + String(index + 1).padStart(2, '0') + '</span><strong>' + entry[0] + '</strong><b aria-hidden="true">↓</b></button>').join('');
    } else if (cat === 'mobilier') {
      const entries = [
        ['Grand Palais · Mobilier & assises', '.grand-palais-project-feature'],
        ['Piano Carod · Le son prend forme', '.carod-project-feature'],
        ['Ère de je · Mobilier modulable', '.ere-de-je-project-feature'],
        ['Ego · Assise', '[data-project-key="assise"]']
      ];
      disciplineProjectLinks.innerHTML = entries.map((entry, index) => '<button class="discipline-project-link" type="button" data-project-target="' + entry[1] + '"><span>' + String(index + 1).padStart(2, '0') + '</span><strong>' + entry[0] + '</strong><b aria-hidden="true">↓</b></button>').join('');
    } else {
      const seen = new Set();
      const entries = items.filter(item => item.cat === cat).filter(item => {
        const key = projectKey(item.client || item.title);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      disciplineProjectLinks.innerHTML = entries.map((item, index) => {
        const label = item.client || item.title;
        return '<button class="discipline-project-link" type="button" data-project-key="' + projectKey(label) + '"><span>' + String(index + 1).padStart(2, '0') + '</span><strong>' + label + '</strong><b aria-hidden="true">↓</b></button>';
      }).join('');
    }
    disciplineProjectLinks.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      const selector = button.dataset.projectTarget;
      if (selector) {
        scrollTo(sec.querySelector(selector));
        return;
      }
      grid.dataset.expanded = '1';
      renderGrid(grid, items, cat, more);
      scrollTo(grid.querySelector('[data-project-key="' + button.dataset.projectKey + '"]'));
    }));
  };
  const showAccessoryProject = key => {
    accessoryProjects.forEach(project => { project.hidden = key !== project.dataset.accessoryProject; });
    grid.hidden = standaloneAccessoryProjects.includes(key);
  };
  const resetAccessoryTabs = () => {
    grid.dataset.subcat = 'all';
    accessoryTabs.forEach(button => button.classList.toggle('active', button.dataset.accessorySubcat === 'all'));
    showAccessoryProject('all');
  };
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => {
      x.classList.remove('active');
      x.setAttribute('aria-pressed', 'false');
    });
    t.classList.add('active');
    t.setAttribute('aria-pressed', 'true');
    projectGroups.forEach(group => { group.hidden = group.dataset.projectCat !== t.dataset.cat; });
    categoryIntros.forEach(intro => { intro.hidden = intro.dataset.categoryIntro !== t.dataset.cat; });
    if (categoryTitle) categoryTitle.textContent = t.textContent.trim();
    if (grid.hasAttribute('data-design-grid')) grid.hidden = t.dataset.cat === 'horlogerie';
    grid.dataset.expanded = '0';
    if (t.dataset.cat === 'maroquinerie') resetAccessoryTabs();
    renderGrid(grid, items, t.dataset.cat, more);
    updateProjectNav(t.dataset.cat);
    scrollTo(categoryTitle?.closest('.design-category-title'));
  }));
  accessoryTabs.forEach(button => button.addEventListener('click', () => {
    accessoryTabs.forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    grid.dataset.subcat = button.dataset.accessorySubcat;
    grid.dataset.expanded = '0';
    showAccessoryProject(button.dataset.accessorySubcat);
    renderGrid(grid, items, 'maroquinerie', more);
    if (button.classList.contains('accessory-project-quicklink')) {
      scrollTo(sec.querySelector('[data-accessory-project="' + button.dataset.accessorySubcat + '"]'));
    }
  }));
  const initialCat = sec.querySelector('.tab.active').dataset.cat;
  if (categoryTitle) categoryTitle.textContent = sec.querySelector('.tab.active').textContent.trim();
  if (grid.hasAttribute('data-design-grid')) grid.hidden = initialCat === 'horlogerie';
  categoryIntros.forEach(intro => { intro.hidden = intro.dataset.categoryIntro !== initialCat; });
  tabs.forEach(tab => tab.setAttribute('aria-pressed', tab.classList.contains('active') ? 'true' : 'false'));
  accessoryTabs.forEach(tab => tab.setAttribute('aria-pressed', tab.classList.contains('active') ? 'true' : 'false'));
  renderGrid(grid, items, initialCat, more);
  updateProjectNav(initialCat);

  if (sectionId === 'design') {
    const requestedProject = new URLSearchParams(window.location.search).get('project');
    const availableProjects = ['lemarys', 'mulberry', 'alme', 'celine', 'bally', 'fendi', 'place-vendome', 'maison-rinceau', 'lunetterie', 'croquis-recherches'];
    if (availableProjects.includes(requestedProject)) {
      const maroquinerieTab = sec.querySelector('[data-cat="maroquinerie"]');
      const projectTab = sec.querySelector(`[data-accessory-subcat="${requestedProject}"]`);
      maroquinerieTab?.click();
      projectTab?.click();
      window.setTimeout(() => {
        sec.querySelector(`[data-accessory-project="${requestedProject}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }

    const sourceBar = sec.querySelector('.design-tabs');
    if (sourceBar && !document.querySelector('.design-tabs-floating')) {
      const floatingBar = sourceBar.cloneNode(true);
      floatingBar.classList.add('design-tabs-floating');
      floatingBar.setAttribute('aria-label', 'Accès permanent aux sept disciplines de Design et création');
      document.body.appendChild(floatingBar);

      const floatingButtons = floatingBar.querySelectorAll('[data-cat]');
      const syncFloatingBar = () => {
        const activeCat = sec.querySelector('.design-tabs .tab.active')?.dataset.cat;
        floatingButtons.forEach(button => {
          const active = button.dataset.cat === activeCat;
          button.classList.toggle('active', active);
          button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
      };
      floatingButtons.forEach(button => button.addEventListener('click', () => {
        sec.querySelector('.design-tabs [data-cat="' + button.dataset.cat + '"]')?.click();
        syncFloatingBar();
      }));
      tabs.forEach(tab => tab.addEventListener('click', syncFloatingBar));

      let floatingTick = false;
      const updateFloatingBar = () => {
        const bounds = sec.getBoundingClientRect();
        const visible = bounds.top <= 76 && bounds.bottom > 150;
        floatingBar.classList.toggle('is-visible', visible);
        floatingBar.setAttribute('aria-hidden', visible ? 'false' : 'true');
      };
      const requestFloatingUpdate = () => {
        if (floatingTick) return;
        floatingTick = true;
        requestAnimationFrame(() => {
          updateFloatingBar();
          floatingTick = false;
        });
      };
      window.addEventListener('scroll', requestFloatingUpdate, { passive: true });
      window.addEventListener('resize', requestFloatingUpdate);
      syncFloatingBar();
      updateFloatingBar();
      window.setTimeout(updateFloatingBar, 180);
    }
  }
}

function renderFineArtSeries() {
  const root = document.querySelector('[data-fineart-series]');
  if (!root) return;
  const fineArtWorks = key => key === 'encres' ? INK_WORKS : ART.filter(item => item.cat === key);
  const series = [
    { key: 'sea', title: 'By the sea', intro: 'Marseille, la mer, les corps au soleil et la lumière méditerranéenne.' },
    { key: 'encres', title: 'Mes dernières encres', intro: 'Illustrations au feutre et à l’encre, le plus souvent au format A4, qui saisissent des moments de vie marseillais et d’ailleurs ainsi que des lieux auxquels je suis particulièrement attaché. Une signature graphique fondée sur la complémentarité du bleu et de l’orange, dans des compositions souvent inspirées par la géométrie du Bauhaus.' },
    { key: 'voyage', title: 'Carnets de voyage', intro: 'Scènes, visages et paysages rapportés d’Asie, d’Inde et d’ailleurs.' },
    { key: 'animales', title: 'Lignes animales', intro: 'Bestiaire graphique en acrylique et plâtre, entre mouvement et matière.' },
    { key: 'nus', title: 'Nus', intro: 'Études du corps à l’encre et à l’aquarelle.' }
  ];
  root.innerHTML = series.map((serie, seriesIndex) => {
    const works = fineArtWorks(serie.key);
    return `
      <section class="fineart-series" aria-labelledby="fineart-series-${serie.key}">
        <header class="fineart-series__head">
          <span>${String(seriesIndex + 1).padStart(2, '0')}</span>
          <div><h3 id="fineart-series-${serie.key}">${serie.title}</h3><p>${serie.intro}</p></div>
          <small>${works.length ? works.length + (works.length > 1 ? " œuvres" : " œuvre") : "Visuels à venir"}</small>
        </header>
        <div class="grid fineart-series__grid" data-fineart-series-grid="${serie.key}">
          ${works.map((item, index) => `
            <figure class="card" data-i="${index}">
              <img src="${item.src}" alt="${item.title}${item.client ? ', ' + item.client : ''}" loading="lazy" decoding="async" referrerpolicy="no-referrer">
              <figcaption><b>${item.title}</b><span>${item.client}</span></figcaption>
            </figure>`).join('')}
        </div>
      </section>`;
  }).join('');
  series.forEach(serie => {
    const works = fineArtWorks(serie.key);
    const grid = root.querySelector('[data-fineart-series-grid="' + serie.key + '"]');
    grid.querySelectorAll('figure.card').forEach(card => card.addEventListener('click', () => openLb(works, +card.dataset.i)));
    observeCards(grid);
  });
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
renderFineArtSeries();
