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
    // Prêt pour jusqu'à 99 photos : dupliquez/décommentez les lignes ci-dessous,
    // remplissez src/thumb/alt, et déplacez chaque bloc hors des commentaires
    // (dans le tableau photos: [...]) au fur et à mesure que vous ajoutez des images
    // dans photos/san-cristobal/ (grande version) et photos/san-cristobal/thumbs/ (miniature 220x160).
     photos: [ 
     { src: 'photos/san-cristobal/01.jpg', thumb: 'photos/san-cristobal/thumbs/01.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

        { src: 'photos/san-cristobal/02.jpg', thumb: 'photos/san-cristobal/thumbs/02.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/03.jpg', thumb: 'photos/san-cristobal/thumbs/03.jpg',
       alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/04.jpg', thumb: 'photos/san-cristobal/thumbs/04.jpg',
         alt: "",
       caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/05.jpg', thumb: 'photos/san-cristobal/thumbs/05.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/06.jpg', thumb: 'photos/san-cristobal/thumbs/06.jpg',
         alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/07.jpg', thumb: 'photos/san-cristobal/thumbs/07.jpg',
         alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/08.jpg', thumb: 'photos/san-cristobal/thumbs/08.jpg',
        alt: "",
       caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/09.jpg', thumb: 'photos/san-cristobal/thumbs/09.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/10.jpg', thumb: 'photos/san-cristobal/thumbs/10.jpg',
       alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/11.jpg', thumb: 'photos/san-cristobal/thumbs/11.jpg',
        alt: "",
      caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/12.jpg', thumb: 'photos/san-cristobal/thumbs/12.jpg',
        alt: "",
      caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/13.jpg', thumb: 'photos/san-cristobal/thumbs/13.jpg',
       alt: "",
      caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/14.jpg', thumb: 'photos/san-cristobal/thumbs/14.jpg',
        alt: "",
      caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/15.jpg', thumb: 'photos/san-cristobal/thumbs/15.jpg',
        alt: "",
      caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/16.jpg', thumb: 'photos/san-cristobal/thumbs/16.jpg',
        alt: "",
     caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/17.jpg', thumb: 'photos/san-cristobal/thumbs/17.jpg',
       alt: "",
       caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/18.jpg', thumb: 'photos/san-cristobal/thumbs/18.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/19.jpg', thumb: 'photos/san-cristobal/thumbs/19.jpg',
        alt: "san-crostobal",
         caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/20.jpg', thumb: 'photos/san-cristobal/thumbs/20.jpg',
         alt: "",
       caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/21.jpg', thumb: 'photos/san-cristobal/thumbs/21.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/22.jpg', thumb: 'photos/san-cristobal/thumbs/22.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/23.jpg', thumb: 'photos/san-cristobal/thumbs/23.jpg',
       alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/24.jpg', thumb: 'photos/san-cristobal/thumbs/24.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/25.jpg', thumb: 'photos/san-cristobal/thumbs/25.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/26.jpg', thumb: 'photos/san-cristobal/thumbs/26.jpg',
         alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/27.jpg', thumb: 'photos/san-cristobal/thumbs/27.jpg',
         alt: "",
       caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/28.jpg', thumb: 'photos/san-cristobal/thumbs/28.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/29.jpg', thumb: 'photos/san-cristobal/thumbs/29.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/30.jpg', thumb: 'photos/san-cristobal/thumbs/30.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/31.jpg', thumb: 'photos/san-cristobal/thumbs/31.jpg',
       alt: "",
         caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/32.jpg', thumb: 'photos/san-cristobal/thumbs/32.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/33.jpg', thumb: 'photos/san-cristobal/thumbs/33.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/34.jpg', thumb: 'photos/san-cristobal/thumbs/34.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/35.jpg', thumb: 'photos/san-cristobal/thumbs/35.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/36.jpg', thumb: 'photos/san-cristobal/thumbs/36.jpg',
       alt: "",
      caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/37.jpg', thumb: 'photos/san-cristobal/thumbs/37.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

     { src: 'photos/san-cristobal/38.jpg', thumb: 'photos/san-cristobal/thumbs/38.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/39.jpg', thumb: 'photos/san-cristobal/thumbs/39.jpg',
         alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/40.jpg', thumb: 'photos/san-cristobal/thumbs/40.jpg',
       alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/41.jpg', thumb: 'photos/san-cristobal/thumbs/41.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/42.jpg', thumb: 'photos/san-cristobal/thumbs/42.jpg',
        alt: "",
       caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/43.jpg', thumb: 'photos/san-cristobal/thumbs/43.jpg',
      alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/44.jpg', thumb: 'photos/san-cristobal/thumbs/44.jpg',
        alt: "",
      caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/45.jpg', thumb: 'photos/san-cristobal/thumbs/45.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/46.jpg', thumb: 'photos/san-cristobal/thumbs/46.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/47.jpg', thumb: 'photos/san-cristobal/thumbs/47.jpg',
      alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/48.jpg', thumb: 'photos/san-cristobal/thumbs/48.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/49.jpg', thumb: 'photos/san-cristobal/thumbs/49.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/50.jpg', thumb: 'photos/san-cristobal/thumbs/50.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/san-cristobal/51.jpg', thumb: 'photos/san-cristobal/thumbs/51.jpg',
       alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/san-cristobal/52.jpg', thumb: 'photos/san-cristobal/thumbs/52.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/53.jpg', thumb: 'photos/san-cristobal/thumbs/53.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/54.jpg', thumb: 'photos/san-cristobal/thumbs/54.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/55.jpg', thumb: 'photos/san-cristobal/thumbs/55.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/56.jpg', thumb: 'photos/san-cristobal/thumbs/56.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/57.jpg', thumb: 'photos/san-cristobal/thumbs/57.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/58.jpg', thumb: 'photos/san-cristobal/thumbs/58.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/59.jpg', thumb: 'photos/san-cristobal/thumbs/59.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/60.jpg', thumb: 'photos/san-cristobal/thumbs/60.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/61.jpg', thumb: 'photos/san-cristobal/thumbs/61.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/62.jpg', thumb: 'photos/san-cristobal/thumbs/62.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/63.jpg', thumb: 'photos/san-cristobal/thumbs/63.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/64.jpg', thumb: 'photos/san-cristobal/thumbs/64.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/65.jpg', thumb: 'photos/san-cristobal/thumbs/65.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/66.jpg', thumb: 'photos/san-cristobal/thumbs/66.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/67.jpg', thumb: 'photos/san-cristobal/thumbs/67.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/68.jpg', thumb: 'photos/san-cristobal/thumbs/68.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/69.jpg', thumb: 'photos/san-cristobal/thumbs/69.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/70.jpg', thumb: 'photos/san-cristobal/thumbs/70.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/71.jpg', thumb: 'photos/san-cristobal/thumbs/71.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/72.jpg', thumb: 'photos/san-cristobal/thumbs/72.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/73.jpg', thumb: 'photos/san-cristobal/thumbs/73.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/74.jpg', thumb: 'photos/san-cristobal/thumbs/74.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/75.jpg', thumb: 'photos/san-cristobal/thumbs/75.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/76.jpg', thumb: 'photos/san-cristobal/thumbs/76.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/77.jpg', thumb: 'photos/san-cristobal/thumbs/77.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/78.jpg', thumb: 'photos/san-cristobal/thumbs/78.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/79.jpg', thumb: 'photos/san-cristobal/thumbs/79.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/80.jpg', thumb: 'photos/san-cristobal/thumbs/80.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/81.jpg', thumb: 'photos/san-cristobal/thumbs/81.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/82.jpg', thumb: 'photos/san-cristobal/thumbs/82.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/83.jpg', thumb: 'photos/san-cristobal/thumbs/83.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/84.jpg', thumb: 'photos/san-cristobal/thumbs/84.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/85.jpg', thumb: 'photos/san-cristobal/thumbs/85.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/86.jpg', thumb: 'photos/san-cristobal/thumbs/86.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/87.jpg', thumb: 'photos/san-cristobal/thumbs/87.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/88.jpg', thumb: 'photos/san-cristobal/thumbs/88.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/89.jpg', thumb: 'photos/san-cristobal/thumbs/89.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/90.jpg', thumb: 'photos/san-cristobal/thumbs/90.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/91.jpg', thumb: 'photos/san-cristobal/thumbs/91.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/92.jpg', thumb: 'photos/san-cristobal/thumbs/92.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/93.jpg', thumb: 'photos/san-cristobal/thumbs/93.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/94.jpg', thumb: 'photos/san-cristobal/thumbs/94.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/95.jpg', thumb: 'photos/san-cristobal/thumbs/95.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/96.jpg', thumb: 'photos/san-cristobal/thumbs/96.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/97.jpg', thumb: 'photos/san-cristobal/thumbs/97.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/98.jpg', thumb: 'photos/san-cristobal/thumbs/98.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/san-cristobal/99.jpg', thumb: 'photos/san-cristobal/thumbs/99.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'palenque': {
    title: { fr: 'Photos de Palenque', en: 'Palenque photos', es: 'Fotos de Palenque' },
     photos: [
    // Prêt pour jusqu'à 99 photos : dupliquez/décommentez les lignes ci-dessous,
    // remplissez src/thumb/alt, et déplacez chaque bloc hors des commentaires
    // (dans le tableau photos: [...]) au fur et à mesure que vous ajoutez des images
    // dans photos/palenque/ (grande version) et photos/palenque/thumbs/ (miniature 220x160).
      { src: 'photos/palenque/01.jpg', thumb: 'photos/palenque/thumbs/01.jpg', alt: 'Vue d’ensemble de la Gran Plaza et de la tour du Palais',
      caption: { fr: 'Vue d’ensemble de la Gran Plaza et de la tour du Palais, sous un ciel d’orage.',
                 en: 'Overview of the Gran Plaza and the Palace tower, under stormy skies.',
                 es: 'Vista general de la Gran Plaza y la torre del Palacio, bajo un cielo de tormenta.' },
      pos: { u: -70, v: -55, dir: 40 } },
    { src: 'photos/palenque/02.jpg', thumb: 'photos/palenque/thumbs/02.jpg', alt: 'Temple secondaire envahi par la végétation',
      caption: { fr: 'Temple secondaire envahi par la végétation, à l’écart des groupes restaurés.',
                 en: 'A secondary temple overgrown with vegetation, away from the restored groups.',
                 es: 'Templo secundario invadido por la vegetación, apartado de los grupos restaurados.' },
      pos: { u: -165, v: -95, dir: 0 } },
    { src: 'photos/palenque/03.jpg', thumb: 'photos/palenque/thumbs/03.jpg', alt: 'Vue depuis les hauteurs vers El Palacio',
      caption: { fr: 'Vue depuis les hauteurs vers El Palacio et sa tour, toit de chaume au premier plan.',
                 en: 'View from the heights toward El Palacio and its tower, thatched roof in the foreground.',
                 es: 'Vista desde lo alto hacia El Palacio y su torre, techo de palma en primer plano.' },
      pos: { u: -60, v: -40, dir: 35 } },
    { src: 'photos/palenque/04.jpg', thumb: 'photos/palenque/thumbs/04.jpg', alt: 'Templo de las Inscripciones de trois quarts',
      caption: { fr: 'Le Templo de las Inscripciones, vu de trois quarts.',
                 en: 'The Temple of the Inscriptions, seen from a three-quarter angle.',
                 es: 'El Templo de las Inscripciones, visto de tres cuartos.' },
      pos: { u: -40, v: -50, dir: 235 } },
    { src: 'photos/palenque/05.jpg', thumb: 'photos/palenque/thumbs/05.jpg', alt: 'Gros plan sur la tour du Palais',
      caption: { fr: 'Gros plan sur la tour à quatre niveaux du Palais.',
                 en: 'Close-up of the Palace’s four-storey tower.',
                 es: 'Primer plano de la torre de cuatro niveles del Palacio.' },
      pos: { u: 10, v: -8, dir: 0 } },
    { src: 'photos/palenque/07.jpg', thumb: 'photos/palenque/thumbs/07.jpg', alt: 'Temple aperçu depuis le pont sur l’Otulum',
      caption: { fr: 'Un temple du Groupe des Croix aperçu depuis le pont sur l’Otulum, près des vendeurs d’artisanat.',
                 en: 'A Cross Group temple glimpsed from the bridge over the Otulum, near the craft vendors.',
                 es: 'Un templo del Grupo de las Cruces visto desde el puente sobre el Otulum, cerca de los vendedores de artesanía.' },
      pos: { u: -25, v: 60, dir: 90 } },
    { src: 'photos/palenque/08.jpg', thumb: 'photos/palenque/thumbs/08.jpg', alt: 'Passage voûté noirci par la suie',
      caption: { fr: 'Passage voûté noirci par la suie à l’intérieur du Palais.',
                 en: 'A vaulted passage blackened with soot inside the Palace.',
                 es: 'Pasaje abovedado ennegrecido por el hollín en el interior del Palacio.' },
      pos: { u: 5, v: 5, dir: 90, h: 1.6 } },
    { src: 'photos/palenque/09.jpg', thumb: 'photos/palenque/thumbs/09.jpg', alt: 'Descente dans les passages souterrains du Palais',
      caption: { fr: 'Descente dans les passages souterrains du Palais.',
                 en: 'Descending into the Palace’s underground passages.',
                 es: 'Descenso a los pasadizos subterráneos del Palacio.' },
      pos: { u: -10, v: 10, dir: 180, h: 1.6 } },
    { src: 'photos/palenque/10.jpg', thumb: 'photos/palenque/thumbs/10.jpg', alt: 'Chemin ombragé près du Templo de las Inscripciones',
      caption: { fr: 'Sur le chemin ombragé menant au Templo de las Inscripciones.',
                 en: 'On the shaded path leading to the Temple of the Inscriptions.',
                 es: 'En el camino sombreado hacia el Templo de las Inscripciones.' },
      pos: { u: -55, v: -30, dir: 210 } },
    { src: 'photos/palenque/11.jpg', thumb: 'photos/palenque/thumbs/11.jpg', alt: 'Plateforme du Groupe des Croix, vue sur la canopée',
      caption: { fr: 'Sur une plateforme du Groupe des Croix, vue sur la canopée à perte de vue.',
                 en: 'On a platform of the Cross Group, with the canopy stretching to the horizon.',
                 es: 'En una plataforma del Grupo de las Cruces, con el dosel extendiéndose hasta el horizonte.' },
      pos: { u: -30, v: 150, dir: 60 } },
    { src: 'photos/palenque/12.jpg', thumb: 'photos/palenque/thumbs/12.jpg', alt: 'Vue plongeante sur l’accès souterrain du Palais',
      caption: { fr: 'Vue plongeante sur l’accès à une chambre souterraine du Palais.',
                 en: 'A view straight down into an underground chamber of the Palace.',
                 es: 'Vista en picado hacia el acceso a una cámara subterránea del Palacio.' },
      pos: { u: -8, v: 8, dir: 180, h: 1.6 } },
    { src: 'photos/palenque/13.jpg', thumb: 'photos/palenque/thumbs/13.jpg', alt: 'Marches d’un temple blanchi sur un monticule',
      caption: { fr: 'Pause sur les marches d’un temple blanchi, au sommet d’un monticule envahi par l’herbe.',
                 en: 'A pause on the steps of a whitewashed temple atop a grass-covered mound.',
                 es: 'Pausa en las gradas de un templo encalado, en lo alto de un montículo cubierto de hierba.' },
      pos: { u: -155, v: -85, dir: 10 } },
    { src: 'photos/palenque/14.jpg', thumb: 'photos/palenque/thumbs/14.jpg', alt: 'Façade du Templo de las Inscripciones',
      caption: { fr: 'Façade du Templo de las Inscripciones, sanctuaire à cinq portes visible au sommet.',
                 en: 'Façade of the Temple of the Inscriptions, its five-doorway sanctuary visible at the top.',
                 es: 'Fachada del Templo de las Inscripciones, con el santuario de cinco puertas visible en la cima.' },
      pos: { u: -30, v: -75, dir: 250 } },
    { src: 'photos/palenque/15.jpg', thumb: 'photos/palenque/thumbs/15.jpg', alt: 'Cour du Palais, escalier orné de bas-reliefs',
      caption: { fr: 'Cour du Palais et son escalier orné de bas-reliefs.',
                 en: 'The Palace courtyard and its stairway decorated with bas-reliefs.',
                 es: 'Patio del Palacio y su escalinata decorada con bajorrelieves.' },
      pos: { u: 15, v: -20, dir: 300 } },
    { src: 'photos/palenque/16.jpg', thumb: 'photos/palenque/thumbs/16.jpg', alt: 'Vue d’ensemble du Groupe des Croix',
      caption: { fr: 'Vue d’ensemble du Groupe des Croix, avec la tour du Palais à l’arrière-plan.',
                 en: 'Overview of the Cross Group, with the Palace tower in the background.',
                 es: 'Vista general del Grupo de las Cruces, con la torre del Palacio al fondo.' },
      pos: { u: -45, v: 100, dir: 300 } },
    { src: 'photos/palenque/17.jpg', thumb: 'photos/palenque/thumbs/17.jpg', alt: 'Sentier entre les groupes de bâtiments',
      caption: { fr: 'Sur un sentier reliant les groupes de bâtiments du site.',
                 en: 'On a path connecting the site’s different building groups.',
                 es: 'En un sendero que conecta los distintos grupos de edificios del sitio.' },
      pos: { u: -15, v: 70, dir: 30 } },
    { src: 'photos/palenque/18.jpg', thumb: 'photos/palenque/thumbs/18.jpg', alt: 'Marches d’accès à un temple secondaire moussu',
      caption: { fr: 'Assis sur les marches d’accès à un temple secondaire recouvert de mousse et de lianes.',
                 en: 'Sitting on the steps up to a secondary temple covered in moss and vines.',
                 es: 'Sentado en las gradas de acceso a un templo secundario cubierto de musgo y lianas.' },
      pos: { u: -160, v: -100, dir: 350 } },
    { src: 'photos/palenque/19.jpg', thumb: 'photos/palenque/thumbs/19.jpg', alt: 'Mur de pierre moussu aux abords du Groupe des Croix',
      caption: { fr: 'Aux abords du Groupe des Croix, mur de pierre envahi par la mousse.',
                 en: 'Near the Cross Group, a stone wall overrun with moss.',
                 es: 'Cerca del Grupo de las Cruces, un muro de piedra cubierto de musgo.' },
      pos: { u: -60, v: 130, dir: 200 } },
    { src: 'photos/palenque/20.jpg', thumb: 'photos/palenque/thumbs/20.jpg', alt: 'Panneau sculpté de dignitaires mayas',
      caption: { fr: 'Panneau sculpté représentant plusieurs dignitaires mayas, protégé par un auvent, dans le Palais.',
                 en: 'A carved panel depicting several Maya dignitaries, sheltered under an awning, in the Palace.',
                 es: 'Panel esculpido que representa a varios dignatarios mayas, protegido por un tejadillo, en el Palacio.' },
      pos: { u: 20, v: -15, dir: 300 } },
    { src: 'photos/palenque/21.jpg', thumb: 'photos/palenque/thumbs/21.jpg', alt: 'Cour intérieure du Groupe des Croix',
      caption: { fr: 'Dans une cour intérieure du Groupe des Croix.',
                 en: 'In an inner courtyard of the Cross Group.',
                 es: 'En un patio interior del Grupo de las Cruces.' },
      pos: { u: -20, v: 135, dir: 150 } }



      //{ src: 'photos/palenque/22.jpg', thumb: 'photos/palenque/thumbs/22.jpg',
     //   alt: "",
       // caption: { fr: '', en: '', es: '' } },

       //{ src: 'photos/palenque/23.jpg', thumb: 'photos/palenque/thumbs/23.jpg',
       //  alt: "",
       //  caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/24.jpg', thumb: 'photos/palenque/thumbs/24.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/25.jpg', thumb: 'photos/palenque/thumbs/25.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/26.jpg', thumb: 'photos/palenque/thumbs/26.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/27.jpg', thumb: 'photos/palenque/thumbs/27.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/28.jpg', thumb: 'photos/palenque/thumbs/28.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/29.jpg', thumb: 'photos/palenque/thumbs/29.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/30.jpg', thumb: 'photos/palenque/thumbs/30.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/31.jpg', thumb: 'photos/palenque/thumbs/31.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/32.jpg', thumb: 'photos/palenque/thumbs/32.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/33.jpg', thumb: 'photos/palenque/thumbs/33.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/34.jpg', thumb: 'photos/palenque/thumbs/34.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/35.jpg', thumb: 'photos/palenque/thumbs/35.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/36.jpg', thumb: 'photos/palenque/thumbs/36.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/37.jpg', thumb: 'photos/palenque/thumbs/37.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/38.jpg', thumb: 'photos/palenque/thumbs/38.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/39.jpg', thumb: 'photos/palenque/thumbs/39.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/40.jpg', thumb: 'photos/palenque/thumbs/40.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/41.jpg', thumb: 'photos/palenque/thumbs/41.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/42.jpg', thumb: 'photos/palenque/thumbs/42.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/43.jpg', thumb: 'photos/palenque/thumbs/43.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/44.jpg', thumb: 'photos/palenque/thumbs/44.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/45.jpg', thumb: 'photos/palenque/thumbs/45.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/46.jpg', thumb: 'photos/palenque/thumbs/46.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/47.jpg', thumb: 'photos/palenque/thumbs/47.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/48.jpg', thumb: 'photos/palenque/thumbs/48.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/49.jpg', thumb: 'photos/palenque/thumbs/49.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/50.jpg', thumb: 'photos/palenque/thumbs/50.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/51.jpg', thumb: 'photos/palenque/thumbs/51.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/52.jpg', thumb: 'photos/palenque/thumbs/52.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/53.jpg', thumb: 'photos/palenque/thumbs/53.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/54.jpg', thumb: 'photos/palenque/thumbs/54.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/55.jpg', thumb: 'photos/palenque/thumbs/55.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/56.jpg', thumb: 'photos/palenque/thumbs/56.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/57.jpg', thumb: 'photos/palenque/thumbs/57.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/58.jpg', thumb: 'photos/palenque/thumbs/58.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/59.jpg', thumb: 'photos/palenque/thumbs/59.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/60.jpg', thumb: 'photos/palenque/thumbs/60.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/61.jpg', thumb: 'photos/palenque/thumbs/61.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/62.jpg', thumb: 'photos/palenque/thumbs/62.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/63.jpg', thumb: 'photos/palenque/thumbs/63.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/64.jpg', thumb: 'photos/palenque/thumbs/64.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/65.jpg', thumb: 'photos/palenque/thumbs/65.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/66.jpg', thumb: 'photos/palenque/thumbs/66.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/67.jpg', thumb: 'photos/palenque/thumbs/67.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/68.jpg', thumb: 'photos/palenque/thumbs/68.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/69.jpg', thumb: 'photos/palenque/thumbs/69.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/70.jpg', thumb: 'photos/palenque/thumbs/70.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/71.jpg', thumb: 'photos/palenque/thumbs/71.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/72.jpg', thumb: 'photos/palenque/thumbs/72.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/73.jpg', thumb: 'photos/palenque/thumbs/73.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/74.jpg', thumb: 'photos/palenque/thumbs/74.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/75.jpg', thumb: 'photos/palenque/thumbs/75.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/76.jpg', thumb: 'photos/palenque/thumbs/76.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/77.jpg', thumb: 'photos/palenque/thumbs/77.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/78.jpg', thumb: 'photos/palenque/thumbs/78.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/79.jpg', thumb: 'photos/palenque/thumbs/79.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/80.jpg', thumb: 'photos/palenque/thumbs/80.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/81.jpg', thumb: 'photos/palenque/thumbs/81.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/82.jpg', thumb: 'photos/palenque/thumbs/82.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/83.jpg', thumb: 'photos/palenque/thumbs/83.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/84.jpg', thumb: 'photos/palenque/thumbs/84.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/85.jpg', thumb: 'photos/palenque/thumbs/85.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/86.jpg', thumb: 'photos/palenque/thumbs/86.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/87.jpg', thumb: 'photos/palenque/thumbs/87.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/88.jpg', thumb: 'photos/palenque/thumbs/88.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/89.jpg', thumb: 'photos/palenque/thumbs/89.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/90.jpg', thumb: 'photos/palenque/thumbs/90.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/91.jpg', thumb: 'photos/palenque/thumbs/91.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/92.jpg', thumb: 'photos/palenque/thumbs/92.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/93.jpg', thumb: 'photos/palenque/thumbs/93.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/94.jpg', thumb: 'photos/palenque/thumbs/94.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/95.jpg', thumb: 'photos/palenque/thumbs/95.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/96.jpg', thumb: 'photos/palenque/thumbs/96.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/97.jpg', thumb: 'photos/palenque/thumbs/97.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/98.jpg', thumb: 'photos/palenque/thumbs/98.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/palenque/99.jpg', thumb: 'photos/palenque/thumbs/99.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'flores-tikal': {
    title: { fr: 'Photos de Flores & Tikal', en: 'Flores & Tikal photos', es: 'Fotos de Flores y Tikal' },
     photos: [
    // Prêt pour jusqu'à 99 photos : dupliquez/décommentez les lignes ci-dessous,
    // remplissez src/thumb/alt, et déplacez chaque bloc hors des commentaires
    // (dans le tableau photos: [...]) au fur et à mesure que vous ajoutez des images
    // dans photos/flores-tikal/ (grande version) et photos/flores-tikal/thumbs/ (miniature 220x160).
    { src: 'photos/flores-tikal/01.jpg', thumb: 'photos/flores-tikal/thumbs/01.jpg',
         alt: "",
       caption: { fr: '', en: '', es: '' } },

      { src: 'photos/flores-tikal/02.jpg', thumb: 'photos/flores-tikal/thumbs/02.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/03.jpg', thumb: 'photos/flores-tikal/thumbs/03.jpg',
         alt: "",
       caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/04.jpg', thumb: 'photos/flores-tikal/thumbs/04.jpg',
       alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/05.jpg', thumb: 'photos/flores-tikal/thumbs/05.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/06.jpg', thumb: 'photos/flores-tikal/thumbs/06.jpg',
         alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/flores-tikal/07.jpg', thumb: 'photos/flores-tikal/thumbs/07.jpg',
         alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/08.jpg', thumb: 'photos/flores-tikal/thumbs/08.jpg',
         alt: "",
      /  caption: { fr: '', en: '', es: '' } },

    { src: 'photos/flores-tikal/09.jpg', thumb: 'photos/flores-tikal/thumbs/09.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/10.jpg', thumb: 'photos/flores-tikal/thumbs/10.jpg',
         alt: "",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/flores-tikal/11.jpg', thumb: 'photos/flores-tikal/thumbs/11.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/12.jpg', thumb: 'photos/flores-tikal/thumbs/12.jpg',
        alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/13.jpg', thumb: 'photos/flores-tikal/thumbs/13.jpg',
         alt: "",
        caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/14.jpg', thumb: 'photos/flores-tikal/thumbs/14.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/15.jpg', thumb: 'photos/flores-tikal/thumbs/15.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/16.jpg', thumb: 'photos/flores-tikal/thumbs/16.jpg',
         alt: "",
        caption: { fr: '', en: '', es: '' } },

    { src: 'photos/flores-tikal/17.jpg', thumb: 'photos/flores-tikal/thumbs/17.jpg',
        alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/18.jpg', thumb: 'photos/flores-tikal/thumbs/18.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

    { src: 'photos/flores-tikal/19.jpg', thumb: 'photos/flores-tikal/thumbs/19.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

       { src: 'photos/flores-tikal/20.jpg', thumb: 'photos/flores-tikal/thumbs/20.jpg',
         alt: "",
         caption: { fr: '', en: '', es: '' } },

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

      // { src: 'photos/flores-tikal/26.jpg', thumb: 'photos/flores-tikal/thumbs/26.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/27.jpg', thumb: 'photos/flores-tikal/thumbs/27.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/28.jpg', thumb: 'photos/flores-tikal/thumbs/28.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/29.jpg', thumb: 'photos/flores-tikal/thumbs/29.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/30.jpg', thumb: 'photos/flores-tikal/thumbs/30.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/31.jpg', thumb: 'photos/flores-tikal/thumbs/31.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/32.jpg', thumb: 'photos/flores-tikal/thumbs/32.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/33.jpg', thumb: 'photos/flores-tikal/thumbs/33.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/34.jpg', thumb: 'photos/flores-tikal/thumbs/34.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/35.jpg', thumb: 'photos/flores-tikal/thumbs/35.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/36.jpg', thumb: 'photos/flores-tikal/thumbs/36.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/37.jpg', thumb: 'photos/flores-tikal/thumbs/37.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/38.jpg', thumb: 'photos/flores-tikal/thumbs/38.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/39.jpg', thumb: 'photos/flores-tikal/thumbs/39.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/40.jpg', thumb: 'photos/flores-tikal/thumbs/40.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/41.jpg', thumb: 'photos/flores-tikal/thumbs/41.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/42.jpg', thumb: 'photos/flores-tikal/thumbs/42.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/43.jpg', thumb: 'photos/flores-tikal/thumbs/43.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/44.jpg', thumb: 'photos/flores-tikal/thumbs/44.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/45.jpg', thumb: 'photos/flores-tikal/thumbs/45.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/46.jpg', thumb: 'photos/flores-tikal/thumbs/46.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/47.jpg', thumb: 'photos/flores-tikal/thumbs/47.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/48.jpg', thumb: 'photos/flores-tikal/thumbs/48.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/49.jpg', thumb: 'photos/flores-tikal/thumbs/49.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/50.jpg', thumb: 'photos/flores-tikal/thumbs/50.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/51.jpg', thumb: 'photos/flores-tikal/thumbs/51.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/52.jpg', thumb: 'photos/flores-tikal/thumbs/52.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/53.jpg', thumb: 'photos/flores-tikal/thumbs/53.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/54.jpg', thumb: 'photos/flores-tikal/thumbs/54.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/55.jpg', thumb: 'photos/flores-tikal/thumbs/55.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/56.jpg', thumb: 'photos/flores-tikal/thumbs/56.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/57.jpg', thumb: 'photos/flores-tikal/thumbs/57.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/58.jpg', thumb: 'photos/flores-tikal/thumbs/58.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/59.jpg', thumb: 'photos/flores-tikal/thumbs/59.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/60.jpg', thumb: 'photos/flores-tikal/thumbs/60.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/61.jpg', thumb: 'photos/flores-tikal/thumbs/61.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/62.jpg', thumb: 'photos/flores-tikal/thumbs/62.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/63.jpg', thumb: 'photos/flores-tikal/thumbs/63.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/64.jpg', thumb: 'photos/flores-tikal/thumbs/64.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/65.jpg', thumb: 'photos/flores-tikal/thumbs/65.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/66.jpg', thumb: 'photos/flores-tikal/thumbs/66.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/67.jpg', thumb: 'photos/flores-tikal/thumbs/67.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/68.jpg', thumb: 'photos/flores-tikal/thumbs/68.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/69.jpg', thumb: 'photos/flores-tikal/thumbs/69.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/70.jpg', thumb: 'photos/flores-tikal/thumbs/70.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/71.jpg', thumb: 'photos/flores-tikal/thumbs/71.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/72.jpg', thumb: 'photos/flores-tikal/thumbs/72.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/73.jpg', thumb: 'photos/flores-tikal/thumbs/73.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/74.jpg', thumb: 'photos/flores-tikal/thumbs/74.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/75.jpg', thumb: 'photos/flores-tikal/thumbs/75.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/76.jpg', thumb: 'photos/flores-tikal/thumbs/76.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/77.jpg', thumb: 'photos/flores-tikal/thumbs/77.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/78.jpg', thumb: 'photos/flores-tikal/thumbs/78.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/79.jpg', thumb: 'photos/flores-tikal/thumbs/79.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/80.jpg', thumb: 'photos/flores-tikal/thumbs/80.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/81.jpg', thumb: 'photos/flores-tikal/thumbs/81.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/82.jpg', thumb: 'photos/flores-tikal/thumbs/82.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/83.jpg', thumb: 'photos/flores-tikal/thumbs/83.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/84.jpg', thumb: 'photos/flores-tikal/thumbs/84.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/85.jpg', thumb: 'photos/flores-tikal/thumbs/85.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/86.jpg', thumb: 'photos/flores-tikal/thumbs/86.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/87.jpg', thumb: 'photos/flores-tikal/thumbs/87.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/88.jpg', thumb: 'photos/flores-tikal/thumbs/88.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/89.jpg', thumb: 'photos/flores-tikal/thumbs/89.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/90.jpg', thumb: 'photos/flores-tikal/thumbs/90.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/91.jpg', thumb: 'photos/flores-tikal/thumbs/91.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/92.jpg', thumb: 'photos/flores-tikal/thumbs/92.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/93.jpg', thumb: 'photos/flores-tikal/thumbs/93.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/94.jpg', thumb: 'photos/flores-tikal/thumbs/94.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/95.jpg', thumb: 'photos/flores-tikal/thumbs/95.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/96.jpg', thumb: 'photos/flores-tikal/thumbs/96.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/97.jpg', thumb: 'photos/flores-tikal/thumbs/97.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/98.jpg', thumb: 'photos/flores-tikal/thumbs/98.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/flores-tikal/99.jpg', thumb: 'photos/flores-tikal/thumbs/99.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    ]
  },

  'belize': {
    title: { fr: 'Photos du Belize', en: 'Belize photos', es: 'Fotos de Belice' },
    // Prêt pour jusqu'à 99 photos : dupliquez/décommentez les lignes ci-dessous,
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

      // { src: 'photos/belize/26.jpg', thumb: 'photos/belize/thumbs/26.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/27.jpg', thumb: 'photos/belize/thumbs/27.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/28.jpg', thumb: 'photos/belize/thumbs/28.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/29.jpg', thumb: 'photos/belize/thumbs/29.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/30.jpg', thumb: 'photos/belize/thumbs/30.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/31.jpg', thumb: 'photos/belize/thumbs/31.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/32.jpg', thumb: 'photos/belize/thumbs/32.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/33.jpg', thumb: 'photos/belize/thumbs/33.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/34.jpg', thumb: 'photos/belize/thumbs/34.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/35.jpg', thumb: 'photos/belize/thumbs/35.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/36.jpg', thumb: 'photos/belize/thumbs/36.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/37.jpg', thumb: 'photos/belize/thumbs/37.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/38.jpg', thumb: 'photos/belize/thumbs/38.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/39.jpg', thumb: 'photos/belize/thumbs/39.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/40.jpg', thumb: 'photos/belize/thumbs/40.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/41.jpg', thumb: 'photos/belize/thumbs/41.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/42.jpg', thumb: 'photos/belize/thumbs/42.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/43.jpg', thumb: 'photos/belize/thumbs/43.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/44.jpg', thumb: 'photos/belize/thumbs/44.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/45.jpg', thumb: 'photos/belize/thumbs/45.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/46.jpg', thumb: 'photos/belize/thumbs/46.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/47.jpg', thumb: 'photos/belize/thumbs/47.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/48.jpg', thumb: 'photos/belize/thumbs/48.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/49.jpg', thumb: 'photos/belize/thumbs/49.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/50.jpg', thumb: 'photos/belize/thumbs/50.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/51.jpg', thumb: 'photos/belize/thumbs/51.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/52.jpg', thumb: 'photos/belize/thumbs/52.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/53.jpg', thumb: 'photos/belize/thumbs/53.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/54.jpg', thumb: 'photos/belize/thumbs/54.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/55.jpg', thumb: 'photos/belize/thumbs/55.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/56.jpg', thumb: 'photos/belize/thumbs/56.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/57.jpg', thumb: 'photos/belize/thumbs/57.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/58.jpg', thumb: 'photos/belize/thumbs/58.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/59.jpg', thumb: 'photos/belize/thumbs/59.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/60.jpg', thumb: 'photos/belize/thumbs/60.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/61.jpg', thumb: 'photos/belize/thumbs/61.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/62.jpg', thumb: 'photos/belize/thumbs/62.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/63.jpg', thumb: 'photos/belize/thumbs/63.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/64.jpg', thumb: 'photos/belize/thumbs/64.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/65.jpg', thumb: 'photos/belize/thumbs/65.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/66.jpg', thumb: 'photos/belize/thumbs/66.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/67.jpg', thumb: 'photos/belize/thumbs/67.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/68.jpg', thumb: 'photos/belize/thumbs/68.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/69.jpg', thumb: 'photos/belize/thumbs/69.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/70.jpg', thumb: 'photos/belize/thumbs/70.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/71.jpg', thumb: 'photos/belize/thumbs/71.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/72.jpg', thumb: 'photos/belize/thumbs/72.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/73.jpg', thumb: 'photos/belize/thumbs/73.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/74.jpg', thumb: 'photos/belize/thumbs/74.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/75.jpg', thumb: 'photos/belize/thumbs/75.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/76.jpg', thumb: 'photos/belize/thumbs/76.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/77.jpg', thumb: 'photos/belize/thumbs/77.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/78.jpg', thumb: 'photos/belize/thumbs/78.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/79.jpg', thumb: 'photos/belize/thumbs/79.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/80.jpg', thumb: 'photos/belize/thumbs/80.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/81.jpg', thumb: 'photos/belize/thumbs/81.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/82.jpg', thumb: 'photos/belize/thumbs/82.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/83.jpg', thumb: 'photos/belize/thumbs/83.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/84.jpg', thumb: 'photos/belize/thumbs/84.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/85.jpg', thumb: 'photos/belize/thumbs/85.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/86.jpg', thumb: 'photos/belize/thumbs/86.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/87.jpg', thumb: 'photos/belize/thumbs/87.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/88.jpg', thumb: 'photos/belize/thumbs/88.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/89.jpg', thumb: 'photos/belize/thumbs/89.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/90.jpg', thumb: 'photos/belize/thumbs/90.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/91.jpg', thumb: 'photos/belize/thumbs/91.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/92.jpg', thumb: 'photos/belize/thumbs/92.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/93.jpg', thumb: 'photos/belize/thumbs/93.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/94.jpg', thumb: 'photos/belize/thumbs/94.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/95.jpg', thumb: 'photos/belize/thumbs/95.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/96.jpg', thumb: 'photos/belize/thumbs/96.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/97.jpg', thumb: 'photos/belize/thumbs/97.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/98.jpg', thumb: 'photos/belize/thumbs/98.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/belize/99.jpg', thumb: 'photos/belize/thumbs/99.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    photos: []
  },

  'tulum': {
    title: { fr: 'Photos de Tulum', en: 'Tulum photos', es: 'Fotos de Tulum' },
    // Prêt pour jusqu'à 99 photos : dupliquez/décommentez les lignes ci-dessous,
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

      // { src: 'photos/tulum/26.jpg', thumb: 'photos/tulum/thumbs/26.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/27.jpg', thumb: 'photos/tulum/thumbs/27.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/28.jpg', thumb: 'photos/tulum/thumbs/28.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/29.jpg', thumb: 'photos/tulum/thumbs/29.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/30.jpg', thumb: 'photos/tulum/thumbs/30.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/31.jpg', thumb: 'photos/tulum/thumbs/31.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/32.jpg', thumb: 'photos/tulum/thumbs/32.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/33.jpg', thumb: 'photos/tulum/thumbs/33.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/34.jpg', thumb: 'photos/tulum/thumbs/34.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/35.jpg', thumb: 'photos/tulum/thumbs/35.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/36.jpg', thumb: 'photos/tulum/thumbs/36.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/37.jpg', thumb: 'photos/tulum/thumbs/37.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/38.jpg', thumb: 'photos/tulum/thumbs/38.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/39.jpg', thumb: 'photos/tulum/thumbs/39.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/40.jpg', thumb: 'photos/tulum/thumbs/40.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/41.jpg', thumb: 'photos/tulum/thumbs/41.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/42.jpg', thumb: 'photos/tulum/thumbs/42.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/43.jpg', thumb: 'photos/tulum/thumbs/43.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/44.jpg', thumb: 'photos/tulum/thumbs/44.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/45.jpg', thumb: 'photos/tulum/thumbs/45.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/46.jpg', thumb: 'photos/tulum/thumbs/46.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/47.jpg', thumb: 'photos/tulum/thumbs/47.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/48.jpg', thumb: 'photos/tulum/thumbs/48.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/49.jpg', thumb: 'photos/tulum/thumbs/49.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/50.jpg', thumb: 'photos/tulum/thumbs/50.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/51.jpg', thumb: 'photos/tulum/thumbs/51.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/52.jpg', thumb: 'photos/tulum/thumbs/52.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/53.jpg', thumb: 'photos/tulum/thumbs/53.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/54.jpg', thumb: 'photos/tulum/thumbs/54.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/55.jpg', thumb: 'photos/tulum/thumbs/55.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/56.jpg', thumb: 'photos/tulum/thumbs/56.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/57.jpg', thumb: 'photos/tulum/thumbs/57.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/58.jpg', thumb: 'photos/tulum/thumbs/58.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/59.jpg', thumb: 'photos/tulum/thumbs/59.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/60.jpg', thumb: 'photos/tulum/thumbs/60.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/61.jpg', thumb: 'photos/tulum/thumbs/61.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/62.jpg', thumb: 'photos/tulum/thumbs/62.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/63.jpg', thumb: 'photos/tulum/thumbs/63.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/64.jpg', thumb: 'photos/tulum/thumbs/64.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/65.jpg', thumb: 'photos/tulum/thumbs/65.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/66.jpg', thumb: 'photos/tulum/thumbs/66.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/67.jpg', thumb: 'photos/tulum/thumbs/67.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/68.jpg', thumb: 'photos/tulum/thumbs/68.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/69.jpg', thumb: 'photos/tulum/thumbs/69.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/70.jpg', thumb: 'photos/tulum/thumbs/70.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/71.jpg', thumb: 'photos/tulum/thumbs/71.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/72.jpg', thumb: 'photos/tulum/thumbs/72.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/73.jpg', thumb: 'photos/tulum/thumbs/73.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/74.jpg', thumb: 'photos/tulum/thumbs/74.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/75.jpg', thumb: 'photos/tulum/thumbs/75.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/76.jpg', thumb: 'photos/tulum/thumbs/76.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/77.jpg', thumb: 'photos/tulum/thumbs/77.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/78.jpg', thumb: 'photos/tulum/thumbs/78.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/79.jpg', thumb: 'photos/tulum/thumbs/79.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/80.jpg', thumb: 'photos/tulum/thumbs/80.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/81.jpg', thumb: 'photos/tulum/thumbs/81.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/82.jpg', thumb: 'photos/tulum/thumbs/82.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/83.jpg', thumb: 'photos/tulum/thumbs/83.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/84.jpg', thumb: 'photos/tulum/thumbs/84.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/85.jpg', thumb: 'photos/tulum/thumbs/85.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/86.jpg', thumb: 'photos/tulum/thumbs/86.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/87.jpg', thumb: 'photos/tulum/thumbs/87.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/88.jpg', thumb: 'photos/tulum/thumbs/88.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/89.jpg', thumb: 'photos/tulum/thumbs/89.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/90.jpg', thumb: 'photos/tulum/thumbs/90.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/91.jpg', thumb: 'photos/tulum/thumbs/91.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/92.jpg', thumb: 'photos/tulum/thumbs/92.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/93.jpg', thumb: 'photos/tulum/thumbs/93.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/94.jpg', thumb: 'photos/tulum/thumbs/94.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/95.jpg', thumb: 'photos/tulum/thumbs/95.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/96.jpg', thumb: 'photos/tulum/thumbs/96.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/97.jpg', thumb: 'photos/tulum/thumbs/97.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/98.jpg', thumb: 'photos/tulum/thumbs/98.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/tulum/99.jpg', thumb: 'photos/tulum/thumbs/99.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    photos: []
  },

  'cancun': {
    title: { fr: 'Photos de Cancún', en: 'Cancún photos', es: 'Fotos de Cancún' },
    // Prêt pour jusqu'à 99 photos : dupliquez/décommentez les lignes ci-dessous,
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

      // { src: 'photos/cancun/26.jpg', thumb: 'photos/cancun/thumbs/26.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/27.jpg', thumb: 'photos/cancun/thumbs/27.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/28.jpg', thumb: 'photos/cancun/thumbs/28.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/29.jpg', thumb: 'photos/cancun/thumbs/29.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/30.jpg', thumb: 'photos/cancun/thumbs/30.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/31.jpg', thumb: 'photos/cancun/thumbs/31.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/32.jpg', thumb: 'photos/cancun/thumbs/32.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/33.jpg', thumb: 'photos/cancun/thumbs/33.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/34.jpg', thumb: 'photos/cancun/thumbs/34.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/35.jpg', thumb: 'photos/cancun/thumbs/35.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/36.jpg', thumb: 'photos/cancun/thumbs/36.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/37.jpg', thumb: 'photos/cancun/thumbs/37.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/38.jpg', thumb: 'photos/cancun/thumbs/38.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/39.jpg', thumb: 'photos/cancun/thumbs/39.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/40.jpg', thumb: 'photos/cancun/thumbs/40.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/41.jpg', thumb: 'photos/cancun/thumbs/41.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/42.jpg', thumb: 'photos/cancun/thumbs/42.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/43.jpg', thumb: 'photos/cancun/thumbs/43.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/44.jpg', thumb: 'photos/cancun/thumbs/44.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/45.jpg', thumb: 'photos/cancun/thumbs/45.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/46.jpg', thumb: 'photos/cancun/thumbs/46.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/47.jpg', thumb: 'photos/cancun/thumbs/47.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/48.jpg', thumb: 'photos/cancun/thumbs/48.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/49.jpg', thumb: 'photos/cancun/thumbs/49.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/50.jpg', thumb: 'photos/cancun/thumbs/50.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/51.jpg', thumb: 'photos/cancun/thumbs/51.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/52.jpg', thumb: 'photos/cancun/thumbs/52.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/53.jpg', thumb: 'photos/cancun/thumbs/53.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/54.jpg', thumb: 'photos/cancun/thumbs/54.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/55.jpg', thumb: 'photos/cancun/thumbs/55.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/56.jpg', thumb: 'photos/cancun/thumbs/56.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/57.jpg', thumb: 'photos/cancun/thumbs/57.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/58.jpg', thumb: 'photos/cancun/thumbs/58.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/59.jpg', thumb: 'photos/cancun/thumbs/59.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/60.jpg', thumb: 'photos/cancun/thumbs/60.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/61.jpg', thumb: 'photos/cancun/thumbs/61.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/62.jpg', thumb: 'photos/cancun/thumbs/62.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/63.jpg', thumb: 'photos/cancun/thumbs/63.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/64.jpg', thumb: 'photos/cancun/thumbs/64.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/65.jpg', thumb: 'photos/cancun/thumbs/65.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/66.jpg', thumb: 'photos/cancun/thumbs/66.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/67.jpg', thumb: 'photos/cancun/thumbs/67.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/68.jpg', thumb: 'photos/cancun/thumbs/68.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/69.jpg', thumb: 'photos/cancun/thumbs/69.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/70.jpg', thumb: 'photos/cancun/thumbs/70.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/71.jpg', thumb: 'photos/cancun/thumbs/71.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/72.jpg', thumb: 'photos/cancun/thumbs/72.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/73.jpg', thumb: 'photos/cancun/thumbs/73.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/74.jpg', thumb: 'photos/cancun/thumbs/74.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/75.jpg', thumb: 'photos/cancun/thumbs/75.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/76.jpg', thumb: 'photos/cancun/thumbs/76.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/77.jpg', thumb: 'photos/cancun/thumbs/77.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/78.jpg', thumb: 'photos/cancun/thumbs/78.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/79.jpg', thumb: 'photos/cancun/thumbs/79.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/80.jpg', thumb: 'photos/cancun/thumbs/80.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/81.jpg', thumb: 'photos/cancun/thumbs/81.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/82.jpg', thumb: 'photos/cancun/thumbs/82.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/83.jpg', thumb: 'photos/cancun/thumbs/83.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/84.jpg', thumb: 'photos/cancun/thumbs/84.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/85.jpg', thumb: 'photos/cancun/thumbs/85.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/86.jpg', thumb: 'photos/cancun/thumbs/86.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/87.jpg', thumb: 'photos/cancun/thumbs/87.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/88.jpg', thumb: 'photos/cancun/thumbs/88.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/89.jpg', thumb: 'photos/cancun/thumbs/89.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/90.jpg', thumb: 'photos/cancun/thumbs/90.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/91.jpg', thumb: 'photos/cancun/thumbs/91.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/92.jpg', thumb: 'photos/cancun/thumbs/92.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/93.jpg', thumb: 'photos/cancun/thumbs/93.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/94.jpg', thumb: 'photos/cancun/thumbs/94.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/95.jpg', thumb: 'photos/cancun/thumbs/95.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/96.jpg', thumb: 'photos/cancun/thumbs/96.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/97.jpg', thumb: 'photos/cancun/thumbs/97.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/98.jpg', thumb: 'photos/cancun/thumbs/98.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },

      // { src: 'photos/cancun/99.jpg', thumb: 'photos/cancun/thumbs/99.jpg',
      //   alt: "",
      //   caption: { fr: '', en: '', es: '' } },
    photos: []
  }

};
