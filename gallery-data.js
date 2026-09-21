/* =====================================================================
   GALERIES PHOTOS — c'est ici que vous ajoutez vos commentaires
   ---------------------------------------------------------------------
   Pour chaque photo :
     src      : chemin de la photo (grande version)
     thumb    : miniature (barre du bas de la visionneuse)
     alt      : description courte (accessibilité, non affichée)
     caption  : COMMENTAIRE affiché sous la photo, dans 3 langues.
                Laissez '' pour ne rien afficher.
                Si une langue est vide, le français est utilisé.

   Exemple :
     caption: {
       fr: "La Torre Latinoamericana vue depuis l'Alameda Central.",
       en: "The Torre Latinoamericana seen from the Alameda Central.",
       es: "La Torre Latinoamericana vista desde la Alameda Central."
     }


   POSITION SUR LA MAQUETTE 3D (galerie 'teotihuacan' uniquement) :
     pos: { u, v, dir }   (h est facultatif : altitude de l'œil en mètres)
       u   = mètres vers le nord de l'axe du site (Teotihuacán : le long de l'Avenue
             des Morts, 0 = Pyramide de la Lune, négatif vers le sud ; Monte Albán :
             0 = centre de la Grande Place)
       v   = mètres à l'est (+) ou à l'ouest (−) de l'axe de l'avenue
       dir = direction de la prise de vue en degrés, 0 = nord de l'avenue,
             90 = est, 180 = sud, 270 = ouest (facultatif)
     Les appareils photo de ces clichés n'enregistraient pas de GPS : ces positions
     sont ESTIMÉES d'après le contenu des photos. Pour les corriger facilement,
     ouvrez le site avec  ?editer3d  à la fin de l'adresse, cliquez sur le sol de la
     maquette 3D pour replacer chaque photo, puis copiez le code généré ici.

   Pour ajouter une photo : copiez-collez un bloc { ... }, changez src/thumb.
   Pour changer l'ordre : déplacez les blocs.
   Pour une nouvelle galerie (ex. 'oaxaca') : ajoutez une clé dans GALERIES
   puis un bouton  <button class="gallery-btn" data-gallery="oaxaca"> dans
   index.html.
   ===================================================================== */

const GALLERIES = {

  'mexico-city': {
    title: { fr: 'Photos de Mexico City', en: 'Mexico City photos', es: 'Fotos de Ciudad de México' },
    photos: [
      { src: 'photos/mexico-city/01.jpg', thumb: 'photos/mexico-city/thumbs/01.jpg',
        alt: "Façade de la Catedral Metropolitana",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/02.jpg', thumb: 'photos/mexico-city/thumbs/02.jpg',
        alt: "Rue animée du centre historique avec un cycliste et un agent de circulation",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/03.jpg', thumb: 'photos/mexico-city/thumbs/03.jpg',
        alt: "Rue du centre historique avec la Torre Latinoamericana au fond",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/04.jpg', thumb: 'photos/mexico-city/thumbs/04.jpg',
        alt: "Torre Latinoamericana, fontaine et sculpture ailée",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/05.jpg', thumb: 'photos/mexico-city/thumbs/05.jpg',
        alt: "Mariachi en costume de charro chantant sur la place",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/06.jpg', thumb: 'photos/mexico-city/thumbs/06.jpg',
        alt: "Mariachis : violon, trompettes et chanteur",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/07.jpg', thumb: 'photos/mexico-city/thumbs/07.jpg',
        alt: "Deux mariachis jouant de la guitare",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/08.jpg', thumb: 'photos/mexico-city/thumbs/08.jpg',
        alt: "Violoniste et trompettistes mariachis",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/09.jpg', thumb: 'photos/mexico-city/thumbs/09.jpg',
        alt: "Deux violonistes mariachis souriants",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/10.jpg', thumb: 'photos/mexico-city/thumbs/10.jpg',
        alt: "Colonne sculptée sous l'immense auvent du Museo Nacional de Antropología",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/11.jpg', thumb: 'photos/mexico-city/thumbs/11.jpg',
        alt: "Reconstitution d'une maison traditionnelle au musée",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/12.jpg', thumb: 'photos/mexico-city/thumbs/12.jpg',
        alt: "Grande pierre circulaire sculptée de scènes de guerriers",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/13.jpg', thumb: 'photos/mexico-city/thumbs/13.jpg',
        alt: "Pierre du Soleil (calendrier aztèque) au musée d'Anthropologie",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mexico-city/14.jpg', thumb: 'photos/mexico-city/thumbs/14.jpg',
        alt: "Promenade dans une allée arborée",
        caption: { fr: '', en: '', es: '' } },

      // --- Emplacements prêts jusqu'à 25 photos : décommentez et
      // remplacez src/thumb/alt pour ajouter une photo ---
      // { src: 'photos/mexico-city/15.jpg', thumb: 'photos/mexico-city/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/16.jpg', thumb: 'photos/mexico-city/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/17.jpg', thumb: 'photos/mexico-city/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/18.jpg', thumb: 'photos/mexico-city/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/19.jpg', thumb: 'photos/mexico-city/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/20.jpg', thumb: 'photos/mexico-city/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/21.jpg', thumb: 'photos/mexico-city/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/22.jpg', thumb: 'photos/mexico-city/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/23.jpg', thumb: 'photos/mexico-city/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/24.jpg', thumb: 'photos/mexico-city/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mexico-city/25.jpg', thumb: 'photos/mexico-city/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'teotihuacan': {
    title: { fr: 'Photos de Teotihuacán', en: 'Teotihuacán photos', es: 'Fotos de Teotihuacán' },
    photos: [
      { src: 'photos/teotihuacan/01.jpg', thumb: 'photos/teotihuacan/thumbs/01.jpg',
        alt: "Sur l'Avenue des Morts, bras ouverts, avec les pyramides de la Lune et du Soleil au loin",
        pos: { u: -790, v: 0, dir: 0 },   // sur l'Avenue des Morts, face au nord
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/02.jpg', thumb: 'photos/teotihuacan/thumbs/02.jpg',
        alt: "Voladores tout en haut du grand mât, avant le vol",
        pos: { u: -430, v: -260 },   // voladores (parking à l'ouest de la Pyramide du Soleil)
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/03.jpg', thumb: 'photos/teotihuacan/thumbs/03.jpg',
        alt: "Un volador grimpant au mât par les échelons de corde",
        pos: { u: -445, v: -248 },   // voladores
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/04.jpg', thumb: 'photos/teotihuacan/thumbs/04.jpg',
        alt: "Voladores suspendus la tête en bas, tournant autour du mât",
        pos: { u: -418, v: -270 },   // voladores
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/05.jpg', thumb: 'photos/teotihuacan/thumbs/05.jpg',
        alt: "Pyramide du Soleil vue de face depuis l'esplanade",
        pos: { u: -400, v: 55, dir: 90 },   // place du Soleil, face à la pyramide
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/06.jpg', thumb: 'photos/teotihuacan/thumbs/06.jpg',
        alt: "Escalier de la Pyramide du Soleil, couvert de visiteurs",
        pos: { u: -405, v: 75, dir: 90 },   // place du Soleil
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/07.jpg', thumb: 'photos/teotihuacan/thumbs/07.jpg',
        alt: "Portrait au pied de la Pyramide du Soleil",
        pos: { u: -415, v: 92, dir: 90 },   // pied de l'escalier
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/08.jpg', thumb: 'photos/teotihuacan/thumbs/08.jpg',
        alt: "Gros plan devant la Pyramide du Soleil",
        pos: { u: -422, v: 96, dir: 90 },   // pied de l'escalier
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/09.jpg', thumb: 'photos/teotihuacan/thumbs/09.jpg',
        alt: "Vue depuis le sommet sur l'Avenue des Morts et la grande place",
        pos: { u: -430, v: 206, dir: 270 },   // sommet de la Pyramide du Soleil, face à l'ouest
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/10.jpg', thumb: 'photos/teotihuacan/thumbs/10.jpg',
        alt: "Vue plongeante depuis la pyramide sur la place et les visiteurs",
        pos: { u: -430, v: 170, dir: 270 },   // haut de l'escalier, face à l'ouest
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/11.jpg', thumb: 'photos/teotihuacan/thumbs/11.jpg',
        alt: "Accroché à la paroi de pierre de la pyramide",
        pos: { u: -548, v: 250, dir: 0 },   // base de la face sud
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/12.jpg', thumb: 'photos/teotihuacan/thumbs/12.jpg',
        alt: "Arête de la Pyramide du Soleil sous les nuages, visiteurs au sommet",
        pos: { u: -590, v: 70, dir: 45 },   // angle sud-ouest
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/13.jpg', thumb: 'photos/teotihuacan/thumbs/13.jpg',
        alt: "Au pied de la Pyramide du Soleil, chapeau à la main",
        pos: { u: -598, v: 80, dir: 45 },   // angle sud-ouest
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/14.jpg', thumb: 'photos/teotihuacan/thumbs/14.jpg',
        alt: "Grand escalier de la Pyramide du Soleil, foule et vendeurs sur l'esplanade",
        pos: { u: -445, v: 84, dir: 90 },   // devant le grand escalier
        caption: { fr: '', en: '', es: '' } },

      // --- Emplacements prêts jusqu'à 25 photos : décommentez et
      // remplacez src/thumb/alt pour ajouter une photo ---
      // { src: 'photos/teotihuacan/15.jpg', thumb: 'photos/teotihuacan/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/16.jpg', thumb: 'photos/teotihuacan/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/17.jpg', thumb: 'photos/teotihuacan/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/18.jpg', thumb: 'photos/teotihuacan/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/19.jpg', thumb: 'photos/teotihuacan/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/20.jpg', thumb: 'photos/teotihuacan/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/21.jpg', thumb: 'photos/teotihuacan/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/22.jpg', thumb: 'photos/teotihuacan/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/23.jpg', thumb: 'photos/teotihuacan/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/24.jpg', thumb: 'photos/teotihuacan/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotihuacan/25.jpg', thumb: 'photos/teotihuacan/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'oaxaca': {
    title: { fr: "Photos d'Oaxaca", en: 'Oaxaca photos', es: 'Fotos de Oaxaca' },
    photos: [
      { src: 'photos/oaxaca/01.jpg', thumb: 'photos/oaxaca/thumbs/01.jpg',
        alt: "Jardin tropical vu depuis une galerie couverte, avec des tables",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/oaxaca/02.jpg', thumb: 'photos/oaxaca/thumbs/02.jpg',
        alt: "Intérieur baroque d'une église : voûte sculptée et dorée, nef et retable au fond",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/oaxaca/03.jpg', thumb: 'photos/oaxaca/thumbs/03.jpg',
        alt: "Retable doré du chœur d'une église, avec des bouquets de fleurs blanches",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/oaxaca/04.jpg', thumb: 'photos/oaxaca/thumbs/04.jpg',
        alt: "Rue pavée du centre historique d'Oaxaca, façades colorées et montagnes dans la brume",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/oaxaca/05.jpg', thumb: 'photos/oaxaca/thumbs/05.jpg',
        alt: "Promenade sur le trottoir d'une rue du centre historique d'Oaxaca",
        caption: { fr: '', en: '', es: '' } },

      // --- Emplacements prêts jusqu'à 25 photos : décommentez et
      // remplacez src/thumb/alt pour ajouter une photo ---
      // { src: 'photos/oaxaca/06.jpg', thumb: 'photos/oaxaca/thumbs/06.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/07.jpg', thumb: 'photos/oaxaca/thumbs/07.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/08.jpg', thumb: 'photos/oaxaca/thumbs/08.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/09.jpg', thumb: 'photos/oaxaca/thumbs/09.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/10.jpg', thumb: 'photos/oaxaca/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/11.jpg', thumb: 'photos/oaxaca/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/12.jpg', thumb: 'photos/oaxaca/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/13.jpg', thumb: 'photos/oaxaca/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/14.jpg', thumb: 'photos/oaxaca/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/15.jpg', thumb: 'photos/oaxaca/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/16.jpg', thumb: 'photos/oaxaca/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/17.jpg', thumb: 'photos/oaxaca/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/18.jpg', thumb: 'photos/oaxaca/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/19.jpg', thumb: 'photos/oaxaca/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/20.jpg', thumb: 'photos/oaxaca/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/21.jpg', thumb: 'photos/oaxaca/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/22.jpg', thumb: 'photos/oaxaca/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/23.jpg', thumb: 'photos/oaxaca/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/24.jpg', thumb: 'photos/oaxaca/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/oaxaca/25.jpg', thumb: 'photos/oaxaca/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'monte-alban': {
    title: { fr: 'Photos de Monte Albán', en: 'Monte Albán photos', es: 'Fotos de Monte Albán' },
    photos: [
      { src: 'photos/monte-alban/01.jpg', thumb: 'photos/monte-alban/thumbs/01.jpg',
        alt: "Vue sur la vallée d'Oaxaca depuis la colline de Monte Albán",
        pos: { u: -160, v: 340, dir: 90 },   // sentier sur la pente est, face à la vallée d'Oaxaca
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/02.jpg', thumb: 'photos/monte-alban/thumbs/02.jpg',
        alt: "Devant un escalier et une rampe de pierre du site archéologique",
        pos: { u: -5, v: -72, dir: 270 },   // Grande Place, côté ouest du groupe central
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/03.jpg', thumb: 'photos/monte-alban/thumbs/03.jpg',
        alt: "Terrain de jeu de balle aux talus inclinés, sur l'herbe verte",
        pos: { u: -44, v: 78, dir: 0 },   // extrémité sud du jeu de balle, face au nord
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/04.jpg', thumb: 'photos/monte-alban/thumbs/04.jpg',
        alt: "Plateforme de pierre et son grand escalier",
        pos: { u: 100, v: 0, dir: 0 },   // Grande Place, face à la Plateforme Nord
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/05.jpg', thumb: 'photos/monte-alban/thumbs/05.jpg',
        alt: "Bâtiment de pierre avec une porte à linteau, derrière l'esplanade",
        pos: { u: 112, v: -40, dir: 0 },   // Grande Place, face à la Plateforme Nord
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/06.jpg', thumb: 'photos/monte-alban/thumbs/06.jpg',
        alt: "Montée d'un escalier de pierre, avec l'esplanade et un tertre en contrebas",
        pos: { u: -160, v: 8, dir: 0 },   // grand escalier de la Plateforme Sud, face au nord
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/07.jpg', thumb: 'photos/monte-alban/thumbs/07.jpg',
        alt: "Accroupi dans un étroit passage de pierre",
        pos: { u: -25, v: -58, dir: 0 },   // passage de pierre près de l'Édifice des Danzantes
        caption: { fr: '', en: '', es: '' } },

      // --- Emplacements prêts jusqu'à 25 photos : décommentez et
      // remplacez src/thumb/alt pour ajouter une photo ---
      // { src: 'photos/monte-alban/08.jpg', thumb: 'photos/monte-alban/thumbs/08.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/09.jpg', thumb: 'photos/monte-alban/thumbs/09.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/10.jpg', thumb: 'photos/monte-alban/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/11.jpg', thumb: 'photos/monte-alban/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/12.jpg', thumb: 'photos/monte-alban/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/13.jpg', thumb: 'photos/monte-alban/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/14.jpg', thumb: 'photos/monte-alban/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/15.jpg', thumb: 'photos/monte-alban/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/16.jpg', thumb: 'photos/monte-alban/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/17.jpg', thumb: 'photos/monte-alban/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/18.jpg', thumb: 'photos/monte-alban/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/19.jpg', thumb: 'photos/monte-alban/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/20.jpg', thumb: 'photos/monte-alban/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/21.jpg', thumb: 'photos/monte-alban/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/22.jpg', thumb: 'photos/monte-alban/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/23.jpg', thumb: 'photos/monte-alban/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/24.jpg', thumb: 'photos/monte-alban/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/monte-alban/25.jpg', thumb: 'photos/monte-alban/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'teotitlan': {
    title: { fr: 'Photos de Teotitlán del Valle', en: 'Teotitlán del Valle photos', es: 'Fotos de Teotitlán del Valle' },
    photos: [
      { src: 'photos/teotitlan/01.jpg', thumb: 'photos/teotitlan/thumbs/01.jpg',
        alt: "Autobus beige n° 52 « Central » qui dessert le Tule, sur un chemin de terre",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotitlan/02.jpg', thumb: 'photos/teotitlan/thumbs/02.jpg',
        alt: "Chemin de terre qui monte dans un village, colline verte au fond",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotitlan/03.jpg', thumb: 'photos/teotitlan/thumbs/03.jpg',
        alt: "Grand métier à tisser traditionnel en bois",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotitlan/04.jpg', thumb: 'photos/teotitlan/thumbs/04.jpg',
        alt: "Fils de chaîne jaunes tendus et rouleau de fil blanc sur le métier",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotitlan/05.jpg', thumb: 'photos/teotitlan/thumbs/05.jpg',
        alt: "Artisan au travail devant un dévidoir de laine, échevettes teintes accrochées au mur",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotitlan/06.jpg', thumb: 'photos/teotitlan/thumbs/06.jpg',
        alt: "Atelier de tissage : échevettes de laine teintes de toutes les couleurs et métiers à tisser",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotitlan/07.jpg', thumb: 'photos/teotitlan/thumbs/07.jpg',
        alt: "Attelage de bœufs décoré de feuillages entrant par un portail",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotitlan/08.jpg', thumb: 'photos/teotitlan/thumbs/08.jpg',
        alt: "Rue pavée animée de passants, vue d'en haut",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotitlan/09.jpg', thumb: 'photos/teotitlan/thumbs/09.jpg',
        alt: "Rue aux façades colorées, vue d'en haut, en fin de journée",
        caption: { fr: '', en: '', es: '' } },

      // --- Emplacements prêts jusqu'à 25 photos : décommentez et
      // remplacez src/thumb/alt pour ajouter une photo ---
      // { src: 'photos/teotitlan/10.jpg', thumb: 'photos/teotitlan/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/11.jpg', thumb: 'photos/teotitlan/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/12.jpg', thumb: 'photos/teotitlan/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/13.jpg', thumb: 'photos/teotitlan/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/14.jpg', thumb: 'photos/teotitlan/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/15.jpg', thumb: 'photos/teotitlan/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/16.jpg', thumb: 'photos/teotitlan/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/17.jpg', thumb: 'photos/teotitlan/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/18.jpg', thumb: 'photos/teotitlan/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/19.jpg', thumb: 'photos/teotitlan/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/20.jpg', thumb: 'photos/teotitlan/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/21.jpg', thumb: 'photos/teotitlan/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/22.jpg', thumb: 'photos/teotitlan/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/23.jpg', thumb: 'photos/teotitlan/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/24.jpg', thumb: 'photos/teotitlan/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/teotitlan/25.jpg', thumb: 'photos/teotitlan/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'puerto-escondido': {
    title: { fr: 'Photos de Puerto Escondido', en: 'Puerto Escondido photos', es: 'Fotos de Puerto Escondido' },
    photos: [
      { src: 'photos/puerto-escondido/01.jpg', thumb: 'photos/puerto-escondido/thumbs/01.jpg',
        alt: "Escalier de pierre qui descend vers l'océan, bordé de hautes herbes",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/puerto-escondido/02.jpg', thumb: 'photos/puerto-escondido/thumbs/02.jpg',
        alt: "Crique bordée de falaises verdoyantes et de rochers, vue d'en haut",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/puerto-escondido/03.jpg', thumb: 'photos/puerto-escondido/thumbs/03.jpg',
        alt: "Sur un belvédère de pierre au-dessus de la crique",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/puerto-escondido/04.jpg', thumb: 'photos/puerto-escondido/thumbs/04.jpg',
        alt: "Plage de sable, vagues et drapeau rouge, deux promeneuses",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/puerto-escondido/05.jpg', thumb: 'photos/puerto-escondido/thumbs/05.jpg',
        alt: "Attablé dans un bar de plage au toit de chaume, carnet ouvert",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/puerto-escondido/06.jpg', thumb: 'photos/puerto-escondido/thumbs/06.jpg',
        alt: "Crique de sable bordée de végétation, avec parasols bleus et paillote",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/puerto-escondido/07.jpg', thumb: 'photos/puerto-escondido/thumbs/07.jpg',
        alt: "Chemin de pierre descendant vers une plage de sable doré, vagues sur les rochers",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/puerto-escondido/08.jpg', thumb: 'photos/puerto-escondido/thumbs/08.jpg',
        alt: "Plage bordée de paillotes et de palmiers, vue depuis des rochers",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/puerto-escondido/09.jpg', thumb: 'photos/puerto-escondido/thumbs/09.jpg',
        alt: "Plage de sable avec bateaux et palmiers, vue depuis les rochers",
        caption: { fr: '', en: '', es: '' } },

      // --- Emplacements prêts jusqu'à 25 photos : décommentez et
      // remplacez src/thumb/alt pour ajouter une photo ---
      // { src: 'photos/puerto-escondido/10.jpg', thumb: 'photos/puerto-escondido/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/11.jpg', thumb: 'photos/puerto-escondido/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/12.jpg', thumb: 'photos/puerto-escondido/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/13.jpg', thumb: 'photos/puerto-escondido/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/14.jpg', thumb: 'photos/puerto-escondido/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/15.jpg', thumb: 'photos/puerto-escondido/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/16.jpg', thumb: 'photos/puerto-escondido/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/17.jpg', thumb: 'photos/puerto-escondido/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/18.jpg', thumb: 'photos/puerto-escondido/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/19.jpg', thumb: 'photos/puerto-escondido/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/20.jpg', thumb: 'photos/puerto-escondido/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/21.jpg', thumb: 'photos/puerto-escondido/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/22.jpg', thumb: 'photos/puerto-escondido/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/23.jpg', thumb: 'photos/puerto-escondido/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/24.jpg', thumb: 'photos/puerto-escondido/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/puerto-escondido/25.jpg', thumb: 'photos/puerto-escondido/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'mazunte': {
    title: { fr: 'Photos de Mazunte', en: 'Mazunte photos', es: 'Fotos de Mazunte' },
    photos: [
      { src: 'photos/mazunte/01.jpg', thumb: 'photos/mazunte/thumbs/01.jpg',
        alt: "Tortue marine à demi enfouie dans le sable, au bord de son nid",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mazunte/02.jpg', thumb: 'photos/mazunte/thumbs/02.jpg',
        alt: "Traces de tortue sur le sable, au crépuscule, menant vers la végétation",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mazunte/03.jpg', thumb: 'photos/mazunte/thumbs/03.jpg',
        alt: "Œufs de tortue blancs au fond du nid, éclairés par une lampe",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mazunte/04.jpg', thumb: 'photos/mazunte/thumbs/04.jpg',
        alt: "Œufs de tortue dans le nid, vus de plus près",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mazunte/05.jpg', thumb: 'photos/mazunte/thumbs/05.jpg',
        alt: "Vagues déferlant sur la plage à la tombée de la nuit",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mazunte/06.jpg', thumb: 'photos/mazunte/thumbs/06.jpg',
        alt: "Vagues et écume dans la pénombre bleutée",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mazunte/07.jpg', thumb: 'photos/mazunte/thumbs/07.jpg',
        alt: "Ciel nocturne nuageux troué d'une éclaircie, au-dessus des vagues",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mazunte/08.jpg', thumb: 'photos/mazunte/thumbs/08.jpg',
        alt: "Trouée de lumière dans les nuages, au-dessus de l'océan à la nuit tombée",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/mazunte/09.jpg', thumb: 'photos/mazunte/thumbs/09.jpg',
        alt: "Tortue marine posée sur le sable, vue de face",
        caption: { fr: '', en: '', es: '' } },

      // --- Emplacements prêts jusqu'à 25 photos : décommentez et
      // remplacez src/thumb/alt pour ajouter une photo ---
      // { src: 'photos/mazunte/10.jpg', thumb: 'photos/mazunte/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/11.jpg', thumb: 'photos/mazunte/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/12.jpg', thumb: 'photos/mazunte/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/13.jpg', thumb: 'photos/mazunte/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/14.jpg', thumb: 'photos/mazunte/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/15.jpg', thumb: 'photos/mazunte/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/16.jpg', thumb: 'photos/mazunte/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/17.jpg', thumb: 'photos/mazunte/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/18.jpg', thumb: 'photos/mazunte/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/19.jpg', thumb: 'photos/mazunte/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/20.jpg', thumb: 'photos/mazunte/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/21.jpg', thumb: 'photos/mazunte/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/22.jpg', thumb: 'photos/mazunte/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/23.jpg', thumb: 'photos/mazunte/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/24.jpg', thumb: 'photos/mazunte/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/mazunte/25.jpg', thumb: 'photos/mazunte/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'san-cristobal': {
    title: { fr: 'Photos de San Cristóbal de las Casas', en: 'San Cristóbal de las Casas photos', es: 'Fotos de San Cristóbal de las Casas' },
    // Prêt pour jusqu'à 25 photos : dupliquez/décommentez les lignes ci-dessous,
    // remplissez src/thumb/alt, et déplacez chaque bloc hors des commentaires
    // (dans le tableau photos: [...]) au fur et à mesure que vous ajoutez des images
    // dans photos/san-cristobal/ (grande version) et photos/san-cristobal/thumbs/ (miniature 220x160).
      // { src: 'photos/san-cristobal/01.jpg', thumb: 'photos/san-cristobal/thumbs/01.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/02.jpg', thumb: 'photos/san-cristobal/thumbs/02.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/03.jpg', thumb: 'photos/san-cristobal/thumbs/03.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/04.jpg', thumb: 'photos/san-cristobal/thumbs/04.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/05.jpg', thumb: 'photos/san-cristobal/thumbs/05.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/06.jpg', thumb: 'photos/san-cristobal/thumbs/06.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/07.jpg', thumb: 'photos/san-cristobal/thumbs/07.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/08.jpg', thumb: 'photos/san-cristobal/thumbs/08.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/09.jpg', thumb: 'photos/san-cristobal/thumbs/09.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/10.jpg', thumb: 'photos/san-cristobal/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/11.jpg', thumb: 'photos/san-cristobal/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/12.jpg', thumb: 'photos/san-cristobal/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/13.jpg', thumb: 'photos/san-cristobal/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/14.jpg', thumb: 'photos/san-cristobal/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/15.jpg', thumb: 'photos/san-cristobal/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/16.jpg', thumb: 'photos/san-cristobal/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/17.jpg', thumb: 'photos/san-cristobal/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/18.jpg', thumb: 'photos/san-cristobal/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/19.jpg', thumb: 'photos/san-cristobal/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/20.jpg', thumb: 'photos/san-cristobal/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/21.jpg', thumb: 'photos/san-cristobal/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/22.jpg', thumb: 'photos/san-cristobal/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/23.jpg', thumb: 'photos/san-cristobal/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/24.jpg', thumb: 'photos/san-cristobal/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/25.jpg', thumb: 'photos/san-cristobal/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    photos: []
  },

  'palenque': {
    title: { fr: 'Photos de Palenque', en: 'Palenque photos', es: 'Fotos de Palenque' },
    // Prêt pour jusqu'à 25 photos : dupliquez/décommentez les lignes ci-dessous,
    // remplissez src/thumb/alt, et déplacez chaque bloc hors des commentaires
    // (dans le tableau photos: [...]) au fur et à mesure que vous ajoutez des images
    // dans photos/palenque/ (grande version) et photos/palenque/thumbs/ (miniature 220x160).
      // { src: 'photos/palenque/01.jpg', thumb: 'photos/palenque/thumbs/01.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/02.jpg', thumb: 'photos/palenque/thumbs/02.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/03.jpg', thumb: 'photos/palenque/thumbs/03.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/04.jpg', thumb: 'photos/palenque/thumbs/04.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/05.jpg', thumb: 'photos/palenque/thumbs/05.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/06.jpg', thumb: 'photos/palenque/thumbs/06.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/07.jpg', thumb: 'photos/palenque/thumbs/07.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/08.jpg', thumb: 'photos/palenque/thumbs/08.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/09.jpg', thumb: 'photos/palenque/thumbs/09.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/10.jpg', thumb: 'photos/palenque/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/11.jpg', thumb: 'photos/palenque/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/12.jpg', thumb: 'photos/palenque/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/13.jpg', thumb: 'photos/palenque/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/14.jpg', thumb: 'photos/palenque/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/15.jpg', thumb: 'photos/palenque/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/16.jpg', thumb: 'photos/palenque/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/17.jpg', thumb: 'photos/palenque/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/18.jpg', thumb: 'photos/palenque/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/19.jpg', thumb: 'photos/palenque/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/20.jpg', thumb: 'photos/palenque/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/21.jpg', thumb: 'photos/palenque/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/22.jpg', thumb: 'photos/palenque/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/23.jpg', thumb: 'photos/palenque/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/24.jpg', thumb: 'photos/palenque/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/25.jpg', thumb: 'photos/palenque/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    photos: []
  },

  'flores-tikal': {
    title: { fr: 'Photos de Flores & Tikal', en: 'Flores & Tikal photos', es: 'Fotos de Flores y Tikal' },
    // Prêt pour jusqu'à 25 photos : dupliquez/décommentez les lignes ci-dessous,
    // remplissez src/thumb/alt, et déplacez chaque bloc hors des commentaires
    // (dans le tableau photos: [...]) au fur et à mesure que vous ajoutez des images
    // dans photos/flores-tikal/ (grande version) et photos/flores-tikal/thumbs/ (miniature 220x160).
      // { src: 'photos/flores-tikal/01.jpg', thumb: 'photos/flores-tikal/thumbs/01.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/02.jpg', thumb: 'photos/flores-tikal/thumbs/02.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/03.jpg', thumb: 'photos/flores-tikal/thumbs/03.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/04.jpg', thumb: 'photos/flores-tikal/thumbs/04.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/05.jpg', thumb: 'photos/flores-tikal/thumbs/05.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/06.jpg', thumb: 'photos/flores-tikal/thumbs/06.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/07.jpg', thumb: 'photos/flores-tikal/thumbs/07.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/08.jpg', thumb: 'photos/flores-tikal/thumbs/08.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/09.jpg', thumb: 'photos/flores-tikal/thumbs/09.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/10.jpg', thumb: 'photos/flores-tikal/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/11.jpg', thumb: 'photos/flores-tikal/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/12.jpg', thumb: 'photos/flores-tikal/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/13.jpg', thumb: 'photos/flores-tikal/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/14.jpg', thumb: 'photos/flores-tikal/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/15.jpg', thumb: 'photos/flores-tikal/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/16.jpg', thumb: 'photos/flores-tikal/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/17.jpg', thumb: 'photos/flores-tikal/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/18.jpg', thumb: 'photos/flores-tikal/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/19.jpg', thumb: 'photos/flores-tikal/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/20.jpg', thumb: 'photos/flores-tikal/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/21.jpg', thumb: 'photos/flores-tikal/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/22.jpg', thumb: 'photos/flores-tikal/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/23.jpg', thumb: 'photos/flores-tikal/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/24.jpg', thumb: 'photos/flores-tikal/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/25.jpg', thumb: 'photos/flores-tikal/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    photos: []
  },

  'belize': {
    title: { fr: 'Photos du Belize', en: 'Belize photos', es: 'Fotos de Belice' },
    // Prêt pour jusqu'à 25 photos : dupliquez/décommentez les lignes ci-dessous,
    // remplissez src/thumb/alt, et déplacez chaque bloc hors des commentaires
    // (dans le tableau photos: [...]) au fur et à mesure que vous ajoutez des images
    // dans photos/belize/ (grande version) et photos/belize/thumbs/ (miniature 220x160).
      // { src: 'photos/belize/01.jpg', thumb: 'photos/belize/thumbs/01.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/02.jpg', thumb: 'photos/belize/thumbs/02.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/03.jpg', thumb: 'photos/belize/thumbs/03.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/04.jpg', thumb: 'photos/belize/thumbs/04.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/05.jpg', thumb: 'photos/belize/thumbs/05.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/06.jpg', thumb: 'photos/belize/thumbs/06.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/07.jpg', thumb: 'photos/belize/thumbs/07.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/08.jpg', thumb: 'photos/belize/thumbs/08.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/09.jpg', thumb: 'photos/belize/thumbs/09.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/10.jpg', thumb: 'photos/belize/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/11.jpg', thumb: 'photos/belize/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/12.jpg', thumb: 'photos/belize/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/13.jpg', thumb: 'photos/belize/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/14.jpg', thumb: 'photos/belize/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/15.jpg', thumb: 'photos/belize/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/16.jpg', thumb: 'photos/belize/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/17.jpg', thumb: 'photos/belize/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/18.jpg', thumb: 'photos/belize/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/19.jpg', thumb: 'photos/belize/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/20.jpg', thumb: 'photos/belize/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/21.jpg', thumb: 'photos/belize/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/22.jpg', thumb: 'photos/belize/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/23.jpg', thumb: 'photos/belize/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/24.jpg', thumb: 'photos/belize/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/25.jpg', thumb: 'photos/belize/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    photos: []
  },

  'tulum': {
    title: { fr: 'Photos de Tulum', en: 'Tulum photos', es: 'Fotos de Tulum' },
    // Prêt pour jusqu'à 25 photos : dupliquez/décommentez les lignes ci-dessous,
    // remplissez src/thumb/alt, et déplacez chaque bloc hors des commentaires
    // (dans le tableau photos: [...]) au fur et à mesure que vous ajoutez des images
    // dans photos/tulum/ (grande version) et photos/tulum/thumbs/ (miniature 220x160).
      // { src: 'photos/tulum/01.jpg', thumb: 'photos/tulum/thumbs/01.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/02.jpg', thumb: 'photos/tulum/thumbs/02.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/03.jpg', thumb: 'photos/tulum/thumbs/03.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/04.jpg', thumb: 'photos/tulum/thumbs/04.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/05.jpg', thumb: 'photos/tulum/thumbs/05.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/06.jpg', thumb: 'photos/tulum/thumbs/06.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/07.jpg', thumb: 'photos/tulum/thumbs/07.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/08.jpg', thumb: 'photos/tulum/thumbs/08.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/09.jpg', thumb: 'photos/tulum/thumbs/09.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/10.jpg', thumb: 'photos/tulum/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/11.jpg', thumb: 'photos/tulum/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/12.jpg', thumb: 'photos/tulum/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/13.jpg', thumb: 'photos/tulum/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/14.jpg', thumb: 'photos/tulum/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/15.jpg', thumb: 'photos/tulum/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/16.jpg', thumb: 'photos/tulum/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/17.jpg', thumb: 'photos/tulum/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/18.jpg', thumb: 'photos/tulum/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/19.jpg', thumb: 'photos/tulum/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/20.jpg', thumb: 'photos/tulum/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/21.jpg', thumb: 'photos/tulum/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/22.jpg', thumb: 'photos/tulum/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/23.jpg', thumb: 'photos/tulum/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/24.jpg', thumb: 'photos/tulum/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/25.jpg', thumb: 'photos/tulum/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    photos: []
  },

  'cancun': {
    title: { fr: 'Photos de Cancún', en: 'Cancún photos', es: 'Fotos de Cancún' },
    // Prêt pour jusqu'à 25 photos : dupliquez/décommentez les lignes ci-dessous,
    // remplissez src/thumb/alt, et déplacez chaque bloc hors des commentaires
    // (dans le tableau photos: [...]) au fur et à mesure que vous ajoutez des images
    // dans photos/cancun/ (grande version) et photos/cancun/thumbs/ (miniature 220x160).
      // { src: 'photos/cancun/01.jpg', thumb: 'photos/cancun/thumbs/01.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/02.jpg', thumb: 'photos/cancun/thumbs/02.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/03.jpg', thumb: 'photos/cancun/thumbs/03.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/04.jpg', thumb: 'photos/cancun/thumbs/04.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/05.jpg', thumb: 'photos/cancun/thumbs/05.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/06.jpg', thumb: 'photos/cancun/thumbs/06.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/07.jpg', thumb: 'photos/cancun/thumbs/07.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/08.jpg', thumb: 'photos/cancun/thumbs/08.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/09.jpg', thumb: 'photos/cancun/thumbs/09.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/10.jpg', thumb: 'photos/cancun/thumbs/10.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/11.jpg', thumb: 'photos/cancun/thumbs/11.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/12.jpg', thumb: 'photos/cancun/thumbs/12.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/13.jpg', thumb: 'photos/cancun/thumbs/13.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/14.jpg', thumb: 'photos/cancun/thumbs/14.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/15.jpg', thumb: 'photos/cancun/thumbs/15.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/16.jpg', thumb: 'photos/cancun/thumbs/16.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/17.jpg', thumb: 'photos/cancun/thumbs/17.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/18.jpg', thumb: 'photos/cancun/thumbs/18.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/19.jpg', thumb: 'photos/cancun/thumbs/19.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/20.jpg', thumb: 'photos/cancun/thumbs/20.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/21.jpg', thumb: 'photos/cancun/thumbs/21.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/22.jpg', thumb: 'photos/cancun/thumbs/22.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/23.jpg', thumb: 'photos/cancun/thumbs/23.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/24.jpg', thumb: 'photos/cancun/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/25.jpg', thumb: 'photos/cancun/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    photos: []
  }

};
