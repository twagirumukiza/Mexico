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
  }

};
