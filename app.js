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

function setupTabs(sectionId, items) {
  const sec = document.getElementById(sectionId);
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
  const series = [
    { key: 'sea', title: 'By the sea', intro: 'Marseille, la mer, les corps au soleil et la lumière méditerranéenne.' },
    { key: 'voyage', title: 'Carnets de voyage', intro: 'Scènes, visages et paysages rapportés d’Asie, d’Inde et d’ailleurs.' },
    { key: 'animales', title: 'Lignes animales', intro: 'Bestiaire graphique en acrylique et plâtre, entre mouvement et matière.' },
    { key: 'nus', title: 'Nus', intro: 'Études du corps à l’encre et à l’aquarelle.' }
  ];
  root.innerHTML = series.map((serie, seriesIndex) => {
    const works = ART.filter(item => item.cat === serie.key);
    return `
      <section class="fineart-series" aria-labelledby="fineart-series-${serie.key}">
        <header class="fineart-series__head">
          <span>${String(seriesIndex + 1).padStart(2, '0')}</span>
          <div><h3 id="fineart-series-${serie.key}">${serie.title}</h3><p>${serie.intro}</p></div>
          <small>${works.length} œuvres</small>
        </header>
        <div class="grid fineart-series__grid" data-fineart-series-grid="${serie.key}">
          ${works.map((item, index) => `
            <figure class="card" data-i="${index}">
              <img src="${item.src}" alt="${item.title}${item.client ? ', ' + item.client : ''}" loading="lazy" decoding="async">
              <figcaption><b>${item.title}</b><span>${item.client}</span></figcaption>
            </figure>`).join('')}
        </div>
      </section>`;
  }).join('');
  series.forEach(serie => {
    const works = ART.filter(item => item.cat === serie.key);
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

/* instagram strip */
const igGrid = document.querySelector('.ig-grid');
const archivedIgItems = IG_FILES.map((f, i) => { const [title, client] = IG_ARCHIVE[i].split(' · '); return { src: `assets/ig/${f}.jpg`, title, client }; });
const igItems = [...new Map(IG_LATEST.map(item => [item.postUrl || item.src, item])).values()];
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
renderFineArtSeries();
