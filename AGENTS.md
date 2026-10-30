# Site Atelier WR : consignes pour l'assistant

Tu travailles pour **William Rigoulet**, designer et directeur artistique à Marseille (Atelier WR).
William n'est pas développeur. Il te parle en français, comme à un assistant.

## Comment travailler avec William

William te parle depuis Codex, dans ChatGPT (chatgpt.com/codex ou l'application ChatGPT sur son téléphone). Il ne touche jamais au code : c'est toi qui fais toutes les modifications.

- Réponds en français, simplement, sans jargon. Si un mot technique est inévitable, explique-le en une phrase.
- Avant de modifier, dis en une ou deux phrases ce que tu vas changer.
- Une demande à la fois. Si la demande est floue, pose une question avant d'agir.
- Pour un texte, propose la nouvelle version avant de l'appliquer si William le demande ou si le changement est important.
- Ne supprime jamais une image ou un fichier sans qu'il l'ait demandé explicitement.
- William peut joindre une image à sa demande (croquis, capture d'un site qui lui plaît). Inspire-toi de l'intention, en gardant la direction artistique ci-dessous.

## Le circuit d'une modification

Le dépôt de travail est `PanameAutomatiseU/atelierwr`. Le dépôt de publication est `Willsky69/atelierwr`, relié à Cloudflare. Le workflow `.github/workflows/sync-upstream.yml` synchronise automatiquement les deux dépôts toutes les cinq minutes, puis Cloudflare publie la branche `main`.

1. Modifie et vérifie les fichiers dans `PanameAutomatiseU/atelierwr`, sur la branche `main`.
2. Enregistre directement la modification dans ce dépôt. William a demandé le déploiement automatique : ne lui demande pas de créer ou de fusionner une pull request pour une modification courante.
3. Laisse le workflow synchroniser `Willsky69/atelierwr`. Utilise la synchronisation ou une pull request manuelle uniquement comme solution de secours si le workflow échoue.
4. Vérifie ensuite le résultat sur `https://atelierwr.william-rigoulet.workers.dev/` et résume simplement ce qui a changé.
5. Si le site publié est cassé, annule le dernier commit ou remets en ligne la publication Cloudflare précédente.

## Les photos

William dépose ses photos dans le dossier `a-integrer/` du dépôt, depuis l'interface web de GitHub.
Quand il te demande de les intégrer : redimensionne-les à 1400 pixels maximum sur le plus grand côté, en JPEG qualité 82
(Python avec Pillow, ou ImageMagick s'il est disponible), vise moins de 500 Ko par image,
range-les dans `assets/work/` avec le bon nom, ajoute les légendes, puis supprime-les de `a-integrer/`.
Si aucun outil ne te permet de redimensionner, dis-le à William au lieu d'ajouter les images en pleine taille.

## Comment le site est construit

Un site d'une seule page, sans outil de construction : du HTML, du CSS et du JavaScript simples.
Cloudflare publie les fichiers tels quels, sans étape de construction.

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

## Raconter un projet

William veut que ses projets soient racontés, pas seulement montrés : le moodboard, les recherches, l'ADN et les codes de la marque, le résultat.
Quand il te demande d'écrire sur un projet, pose-lui d'abord tes questions, puis propose le texte avant de l'intégrer.
N'invente aucun fait sur un client ou un projet.

## Direction artistique à respecter

- Papier crème `#f3eee3`, encre bleue `#1d3c8c`, soleil orange `#e8742e`, encre noire `#151515`.
- Police Archivo. Titres en capitales, très gras.
- Pas de nouvelle couleur ni de nouvelle police sans que William le demande.

## Règles d'écriture

- Français avec tous les accents.
- Pas de tiret cadratin (le tiret long). Utilise une virgule, deux-points ou deux phrases.
- Ton direct, à la première personne, phrases courtes. Pas de formules publicitaires.

## Ne pas toucher

- `vercel.json` (réglage de l'ancienne version de démonstration, sans effet sur Cloudflare).
- Le dossier `.git` (l'historique des versions).
