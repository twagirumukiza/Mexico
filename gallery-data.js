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
        caption: { fr: '', en: '', es: '' } }
    ]
  },

  'teotihuacan': {
    title: { fr: 'Photos de Teotihuacán', en: 'Teotihuacán photos', es: 'Fotos de Teotihuacán' },
    photos: [
      { src: 'photos/teotihuacan/01.jpg', thumb: 'photos/teotihuacan/thumbs/01.jpg',
        alt: "Sur l'Avenue des Morts, bras ouverts, avec les pyramides de la Lune et du Soleil au loin",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/02.jpg', thumb: 'photos/teotihuacan/thumbs/02.jpg',
        alt: "Voladores tout en haut du grand mât, avant le vol",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/03.jpg', thumb: 'photos/teotihuacan/thumbs/03.jpg',
        alt: "Un volador grimpant au mât par les échelons de corde",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/04.jpg', thumb: 'photos/teotihuacan/thumbs/04.jpg',
        alt: "Voladores suspendus la tête en bas, tournant autour du mât",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/05.jpg', thumb: 'photos/teotihuacan/thumbs/05.jpg',
        alt: "Pyramide du Soleil vue de face depuis l'esplanade",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/06.jpg', thumb: 'photos/teotihuacan/thumbs/06.jpg',
        alt: "Escalier de la Pyramide du Soleil, couvert de visiteurs",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/07.jpg', thumb: 'photos/teotihuacan/thumbs/07.jpg',
        alt: "Portrait au pied de la Pyramide du Soleil",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/08.jpg', thumb: 'photos/teotihuacan/thumbs/08.jpg',
        alt: "Gros plan devant la Pyramide du Soleil",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/09.jpg', thumb: 'photos/teotihuacan/thumbs/09.jpg',
        alt: "Vue depuis le sommet sur l'Avenue des Morts et la grande place",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/10.jpg', thumb: 'photos/teotihuacan/thumbs/10.jpg',
        alt: "Vue plongeante depuis la pyramide sur la place et les visiteurs",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/11.jpg', thumb: 'photos/teotihuacan/thumbs/11.jpg',
        alt: "Accroché à la paroi de pierre de la pyramide",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/12.jpg', thumb: 'photos/teotihuacan/thumbs/12.jpg',
        alt: "Arête de la Pyramide du Soleil sous les nuages, visiteurs au sommet",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/13.jpg', thumb: 'photos/teotihuacan/thumbs/13.jpg',
        alt: "Au pied de la Pyramide du Soleil, chapeau à la main",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/teotihuacan/14.jpg', thumb: 'photos/teotihuacan/thumbs/14.jpg',
        alt: "Grand escalier de la Pyramide du Soleil, foule et vendeurs sur l'esplanade",
        caption: { fr: '', en: '', es: '' } }
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
        caption: { fr: '', en: '', es: '' } }
    ]
  },

  'monte-alban': {
    title: { fr: 'Photos de Monte Albán', en: 'Monte Albán photos', es: 'Fotos de Monte Albán' },
    photos: [
      { src: 'photos/monte-alban/01.jpg', thumb: 'photos/monte-alban/thumbs/01.jpg',
        alt: "Vue sur la vallée d'Oaxaca depuis la colline de Monte Albán",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/02.jpg', thumb: 'photos/monte-alban/thumbs/02.jpg',
        alt: "Devant un escalier et une rampe de pierre du site archéologique",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/03.jpg', thumb: 'photos/monte-alban/thumbs/03.jpg',
        alt: "Terrain de jeu de balle aux talus inclinés, sur l'herbe verte",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/04.jpg', thumb: 'photos/monte-alban/thumbs/04.jpg',
        alt: "Plateforme de pierre et son grand escalier",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/05.jpg', thumb: 'photos/monte-alban/thumbs/05.jpg',
        alt: "Bâtiment de pierre avec une porte à linteau, derrière l'esplanade",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/06.jpg', thumb: 'photos/monte-alban/thumbs/06.jpg',
        alt: "Montée d'un escalier de pierre, avec l'esplanade et un tertre en contrebas",
        caption: { fr: '', en: '', es: '' } },

      { src: 'photos/monte-alban/07.jpg', thumb: 'photos/monte-alban/thumbs/07.jpg',
        alt: "Accroupi dans un étroit passage de pierre",
        caption: { fr: '', en: '', es: '' } }
    ]
  }

};
