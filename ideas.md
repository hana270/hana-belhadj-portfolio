# Direction artistique — Portfolio Hana Belhadj

## Trois pistes explorées

### Piste 1 — Editorial Data Atelier
Une identité éditoriale contemporaine qui mélange la précision d’un rapport de données et la chaleur d’un carnet de studio. L’expérience doit rendre lisible un parcours technique riche sans devenir froide ou institutionnelle.

**Probability:** 0.07

### Piste 2 — Coastal Systems
Une direction lumineuse inspirée de Hammamet, de la mer et des interfaces cartographiques : bleus minéraux, blancs salins, tracés fins et compositions aérées. L’objectif est de rendre le profil accessible et mémorable.

**Probability:** 0.04

### Piste 3 — Neon Runtime
Une interface nocturne de type laboratoire logiciel, avec panneaux sombres, accent électrique et micro-interactions plus immersives. Cette piste est volontairement plus technologique et plus expérimentale.

**Probability:** 0.02

## Approche choisie — Editorial Data Atelier

### Design Movement
Swiss editorial design contemporain, enrichi par la visualisation de données, les interfaces de produit et des détails inspirés des carnets de recherche.

### Core Principles
1. **Clarté éditoriale :** chaque information du CV devient un bloc lisible, hiérarchisé et scannable.
2. **Contraste maîtrisé :** grandes surfaces ivoire, texte bleu pétrole, accent corail réservé aux actions et aux points de progression.
3. **Asymétrie utile :** layouts en deux colonnes, rails latéraux et cartes décalées pour éviter une page générique centrée.
4. **Preuve par le projet :** chaque compétence est reliée à une expérience, une technologie ou un dépôt GitHub.

### Color Philosophy
L’ivoire crée une sensation de page éditoriale et met en valeur le contenu. Le bleu pétrole évoque la confiance, l’architecture logicielle et la profondeur analytique. Le corail cuivré rend visibles les actions, les statuts et les moments clés sans basculer vers une esthétique criarde. La couleur propriétaire est **Corail Hana — #E87961**.

### Layout Paradigm
Une navigation fixe minimaliste et un parcours vertical en chapitres. Le hero s’appuie sur une composition split : déclaration forte à gauche, carte de profil et index de compétences à droite. Les sections utilisent des rails numérotés, des cartes en quinconce et une grille éditoriale responsive plutôt qu’un empilement uniforme.

### Signature Elements
- Un fil vertical ponctué de marqueurs numérotés pour la trajectoire, les expériences et la formation.
- Des micro-étiquettes en capitales avec tracking large, comme des annotations de dossier.
- Un motif de points/grille technique très léger en arrière-plan pour évoquer les données et les systèmes.

### Interaction Philosophy
Les interactions doivent confirmer la structure : les boutons réagissent rapidement, les cartes de projet révèlent leur statut GitHub/Vercel, et les éléments apparaissent progressivement lors du scroll. Aucun effet décoratif ne doit gêner la lecture.

### Animation
Utiliser des entrées en opacity + translateY limitées à 24 px, avec des décalages de 50 à 80 ms pour les groupes. Les boutons utilisent une transition de 160 ms et un léger scale à l’activation. Les cartes de projet gagnent une ombre et un déplacement de 4 px au survol. Les animations non essentielles sont désactivées avec `prefers-reduced-motion`.

### Typography System
Titres : **DM Serif Display**, pour une voix éditoriale et mémorable. Interface, navigation et paragraphes : **Manrope**, pour sa lisibilité et sa précision numérique. Les titres utilisent une échelle fluide `clamp()`, tandis que les labels utilisent des capitales espacées et une taille réduite.

### Brand Essence
**Une développeuse Full-Stack et BI qui transforme des besoins complexes en produits web lisibles, robustes et utiles.**

Personnalité : **curieuse, structurée, inventive**.

### Brand Voice
Les titres sont directs, précis et légèrement narratifs. Les CTA sont des invitations concrètes, jamais des formules vagues. Les microcopies valorisent le chemin technique et la preuve.

Exemple de titre : « Je construis des interfaces qui rendent les systèmes compréhensibles. »

Exemple de CTA : « Explorer les preuves de code ».

### Wordmark & Logo
Le symbole reprend deux parenthèses angulaires qui entourent un point central : `⟨•⟩`. Il représente le code, la donnée et la capacité à créer une structure autour d’un problème. Le mot-symbole est traité en DM Serif Display avec une coupe corail sur le point du i de “Belhadj”.

### Signature Brand Color
**Corail Hana — #E87961**, utilisé uniquement pour les actions principales, les marqueurs de timeline et les détails de focalisation.

## Style Decisions

- Corail Hana `#E87961` est réservé aux actions principales, aux marqueurs de progression, aux preuves techniques et aux mots italiques de mise en avant.
- Les projets sont présentés comme des dossiers de preuve : statut, décision technique, stack et lien de vérification sont visibles dans chaque carte.
- Le lockup de marque affiche désormais `⟨•⟩ Hana Belhadj.` ; la version courte « Hana » est réservée à de futurs contextes très compacts.
- La composition reste éditoriale et asymétrique : le hero, le rail de trajectoire et les chapitres numérotés structurent toute la page.
