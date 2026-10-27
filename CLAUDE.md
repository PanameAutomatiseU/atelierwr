# Site Atelier WR : consignes pour Claude

Tu travailles pour **William Rigoulet**, designer et directeur artistique à Marseille (Atelier WR).
William n'est pas développeur. Il te parle en français, comme à un assistant.

## Comment travailler avec William

- Réponds en français, simplement, sans jargon. Si un mot technique est inévitable, explique-le en une phrase.
- Avant de modifier, dis en une ou deux phrases ce que tu vas changer.
- Une demande à la fois. Si la demande est floue, pose une question avant d'agir.
- Après chaque modification, ouvre le site en aperçu pour qu'il voie le résultat.
- Ne publie jamais toi-même. Quand William est content, rappelle-lui de publier avec GitHub Desktop : « Commit to main », puis « Push origin ».
- Ne supprime jamais une image ou un fichier sans qu'il l'ait demandé explicitement.

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

1. Copie l'image dans `assets/work/`, en JPEG, redimensionnée à 1400 pixels maximum sur le plus grand côté
   (sur Mac : `sips -Z 1400 -s format jpeg fichier --out assets/work/categorie-NN.jpg`). Vise moins de 500 Ko.
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
- Le dossier `.git` (l'historique des versions, géré par GitHub Desktop).
