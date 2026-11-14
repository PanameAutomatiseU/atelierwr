# Refonte Design & création, version à valider

Aucune publication en production. Ne pas fusionner cette branche avant validation de William.

## Analyse du site existant

Le site est statique, sans dépendance ni étape de compilation. Le dépôt de travail est PanameAutomatiseU/atelierwr. Le dépôt Willsky69/atelierwr synchronise sa branche principale et publie automatiquement sur Cloudflare.

Les sept intitulés sont repris des menus et de setupContinuousDesign, à l'identique :

| Intitulé | Destination |
| --- | --- |
| Horlogerie | horlogerie.html |
| Joaillerie | joaillerie.html |
| Maroquinerie & accessoires | maroquinerie-accessoires.html, conservée |
| Mobilier & objets | mobilier-objets.html |
| Luminaires | luminaires.html |
| Packaging & vins | packaging-vins.html, conservée |
| Logo & identité | logos-identites.html, conservée |

L'entrée principale devient design-creation.html. Les anciennes ancres de l'accueil, les études de cas, leurs images et leurs galeries restent disponibles. Aucune URL n'est supprimée : aucune redirection 301 n'est nécessaire.

## Réalisation

Composition Bauhaus en aplats, sept liens HTML, logo et polices existants. Mouvement elliptique lent avec textes horizontaux. Ouverture en 760 ms par un cercle qui passe au centre et couvre la fenêtre ; transition entre documents de 100 ms sur les navigateurs compatibles. Le lien natif fonctionne sans JavaScript. Les touches modificatrices ouvrent normalement les liens dans un autre onglet.

Disposition fixe en grille jusqu'à 900 px afin d'éviter les chevauchements. Mouvements désactivés pour prefers-reduced-motion, économie de données et processeurs à deux cœurs ou moins. Suspension des mouvements dans un onglet masqué. Retour du navigateur pris en compte pour enlever le cercle de transition.

Menu principal avec sous-menus sur les pages de disciplines et liens de retour. Galeries de joaillerie et mobilier réutilisant la visionneuse existante ; navigation de mobilier par ancres accessibles sans script.

## Vérifications réalisées

- Syntaxe JavaScript : node --check sur app.js et design-orbital.js.
- git diff --check.
- H1 unique et identifiants uniques pour les huit pages concernées.
- Contrôle de toutes leurs références locales : aucun fichier ni lien interne manquant.
- Logo officiel présent sur chaque page ; aucun fichier d'image modifié.
- Conservation octet pour octet de l'accueil après le bandeau principal.
- Conservation des contenus principaux des trois pages existantes, hors normalisation demandée de leur H1.
- Sitemap enrichi, URLs canoniques et descriptions pour les nouvelles pages.

## Limite de vérification

L'environnement ne fournit pas cua_repl.js ni de navigateur de contrôle. Le rendu visuel, la fluidité réelle, les interactions tactiles et le passage entre documents restent à valider dans un navigateur avant toute mise en production. Aucun serveur de prévisualisation ni hébergement supplémentaire n'a été créé.
