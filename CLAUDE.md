# Site Atelier WR : consignes pour Claude

Tu travailles pour **William Rigoulet**, designer et directeur artistique à Marseille (Atelier WR).
William n'est pas développeur. Il te parle en français, comme à un assistant.

## Comment travailler avec William

William te parle depuis claude.ai/code (ou l'application Claude sur son téléphone). Il ne touche jamais au code : c'est toi qui fais toutes les modifications.

- Réponds en français, simplement, sans jargon. Si un mot technique est inévitable, explique-le en une phrase.
- Avant de modifier, dis en une ou deux phrases ce que tu vas changer.
- Une demande à la fois. Si la demande est floue, pose une question avant d'agir.
- Pour un texte, propose la nouvelle version avant de l'appliquer si William le demande ou si le changement est important.
- Ne supprime jamais une image ou un fichier sans qu'il l'ait demandé explicitement.

## Le circuit d'une modification

1. Tu fais la modification sur ta branche de travail, puis tu la pousses.
2. Quand William demande l'aperçu : crée la pull request, puis récupère le lien d'aperçu que Vercel génère pour cette branche (connecteur Vercel, ou commentaire du bot Vercel sur la pull request). Donne-lui ce lien.
3. Rien ne part en ligne sans un « publie » explicite de William.
4. Quand il dit « publie » : fusionne la pull request si tu en as la possibilité. Sinon, donne-lui le lien de la pull request et dis-lui de cliquer sur « Merge pull request » puis « Confirm merge ».
5. Ensuite, vérifie avec le connecteur Vercel que le déploiement de production est terminé et sans erreur, et confirme-le à William.
6. Si William signale que le site en ligne est cassé, propose de revenir à la version précédente (revert de la dernière fusion), avec le même circuit.

## Les photos

William dépose ses photos dans le dossier `a-integrer/` du dépôt, depuis l'interface web de GitHub.
Quand il te demande de les intégrer : redimensionne-les à 1400 pixels maximum sur le plus grand côté, en JPEG qualité 82
(Python avec Pillow, ou ImageMagick s'il est disponible), vise moins de 500 Ko par image,
range-les dans `assets/work/` avec le bon nom, ajoute les légendes, puis supprime-les de `a-integrer/`.

## Comment le site est construit

Un site d'une seule page, sans outil de construction : du HTML, du CSS et du JavaScript simples.

| Fichier | Contenu |
| --- | --- |
| `index.html` | Tous les textes : studio, domaines, parcours, contact |
| `app.js` | Le contenu des galeries : listes `DESIGN`, `ART` et `IG`, une ligne par image avec sa légende |
| `styles.css` | Les couleurs, les polices, la mise en page |
| `assets/work/` | Les images des galeries, nommées `categorie-01.jpg`, `categorie-02.jpg`... |
| `assets/ig/` | Les dessins Instagram de la section « Dernières encres » |
| `assets/logo-wr.png` | Le logo manuscrit WR |

## Ajouter une image dans une galerie

1. Copie l'image dans `assets/work/`, en JPEG, redimensionnée à 1400 pixels maximum sur le plus grand côté. Vise moins de 500 Ko.
2. Nomme-la avec le numéro suivant de sa catégorie.
3. Dans `app.js`, ajoute la légende à la fin de la liste de la catégorie, au format `'Titre · Client'`.
   La fonction `W()` associe automatiquement la légende n au fichier n.

Catégories Design : `horlogerie`, `maroquinerie`, `mobilier`, `packaging`, `logo`, `affiches`.
Catégories Fine Art : `sea`, `voyage`, `animales`, `nus`.

## Direction artistique à respecter

- Papier crème `#f3eee3`, encre bleue `#1d3c8c`, soleil orange `#e8742e`, encre noire `#151515`.
- Police Archivo. Titres en capitales, très gras.
- Pas de nouvelle couleur ni de nouvelle police sans que William le demande.

## Règles d'écriture

- Français avec tous les accents.
- Pas de tiret cadratin (le tiret long). Utilise une virgule, deux-points ou deux phrases.
- Ton direct, à la première personne, phrases courtes. Pas de formules publicitaires.

## Ne pas toucher

- `vercel.json` (réglage de l'hébergement).
- Le dossier `.git` (l'historique des versions).
