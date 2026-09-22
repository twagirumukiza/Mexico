/* =====================================================================
   PALENQUE EN 3D — maquette schématique (données du site)
   Le moteur est dans site3d.js. Chargé à la demande.
   Repère : u = mètres vers le nord (0 = centre d'El Palacio) ;
            v = mètres vers l'est (+) / l'ouest (−).
   ===================================================================== */
(function () {
  'use strict';
  var K = Site3D.kit, T = K.T, frustum = K.frustum, box = K.box, ub = K.ub, pyramid = K.pyramid, stair = K.stair,
    cone = K.cone, hill = K.hill, mulberry = K.mulberry, hash2 = K.hash2;

  var STONE = [0.62, 0.56, 0.46], SAND = [0.78, 0.72, 0.58], TAN = [0.7, 0.6, 0.46], DARK = [0.48, 0.44, 0.36], WATER = [0.32, 0.5, 0.56];

  /* ---------------- monuments (étiquettes) ---------------- */
  var MON = [
    { id: 'palacio', u: 0, v: 0, y: 22, d: 260, yaw: 0.5, main: true, walk: { u: -60, v: -20, dir: 55 },
      name: { fr: 'El Palacio', en: 'El Palacio', es: 'El Palacio' },
      desc: { fr: 'Vaste ensemble de cours et de galeries dominé par une tour à quatre niveaux, unique dans le monde maya. Des passages souterrains courent sous certaines de ses salles.',
              en: 'A vast complex of courtyards and galleries dominated by a four-storey tower, unique in the Maya world. Underground passages run beneath some of its rooms.',
              es: 'Vasto conjunto de patios y galerías dominado por una torre de cuatro niveles, única en el mundo maya. Pasadizos subterráneos recorren algunas de sus salas.' } },
    { id: 'inscripciones', u: -70, v: -70, y: 46, d: 300, yaw: 3.9, main: true, walk: { u: -30, v: -40, dir: 235 },
      name: { fr: 'Templo de las Inscripciones', en: 'Temple of the Inscriptions', es: 'Templo de las Inscripciones' },
      desc: { fr: 'La plus grande pyramide du site, élevée au-dessus de la tombe du souverain Pakal. Son sanctuaire porte l’un des plus longs textes hiéroglyphiques mayas connus.',
              en: "The site's largest pyramid, raised above the tomb of ruler Pakal. Its sanctuary bears one of the longest known Maya hieroglyphic texts.",
              es: 'La mayor pirámide del sitio, erigida sobre la tumba del gobernante Pakal. Su santuario porta uno de los textos jeroglíficos mayas más largos conocidos.' } },
    { id: 'sol', u: -40, v: 90, y: 32, d: 230, yaw: 2.6, main: true, walk: { u: -15, v: 60, dir: 60 },
      name: { fr: 'Templo del Sol', en: 'Temple of the Sun', es: 'Templo del Sol' },
      desc: { fr: 'Petit temple au toit-peigne bien conservé, dédié au dieu-jaguar solaire, à l’extrémité ouest du Groupe des Croix.',
              en: 'A small, well-preserved roof-comb temple dedicated to the solar jaguar god, at the west end of the Cross Group.',
              es: 'Pequeño templo de crestería bien conservado, dedicado al dios jaguar solar, en el extremo oeste del Grupo de las Cruces.' } },
    { id: 'cruz', u: 10, v: 130, y: 38, d: 260, yaw: 3.3, main: true, walk: { u: -20, v: 95, dir: 70 },
      name: { fr: 'Templo de la Cruz', en: 'Temple of the Cross', es: 'Templo de la Cruz' },
      desc: { fr: 'Le plus grand des trois temples du Groupe des Croix, au sommet d’une haute plateforme boisée, nommé d’après le panneau sculpté d’un arbre-croix trouvé à l’intérieur.',
              en: "The largest of the Cross Group's three temples, atop a tall wooded platform, named after the carved cross-tree panel found inside.",
              es: 'El mayor de los tres templos del Grupo de las Cruces, sobre una alta plataforma boscosa, llamado así por el panel tallado de un árbol-cruz hallado en su interior.' } },
    { id: 'foliada', u: -90, v: 120, y: 28, d: 220, yaw: 2.2, minor: true, walk: { u: -60, v: 90, dir: 45 },
      name: { fr: 'Templo de la Cruz Foliada', en: 'Temple of the Foliated Cross', es: 'Templo de la Cruz Foliada' },
      desc: { fr: 'Troisième temple du Groupe des Croix, au sud, conservant des restes de stuc peint dans son sanctuaire.',
              en: 'The third temple of the Cross Group, to the south, preserving traces of painted stucco in its sanctuary.',
              es: 'Tercer templo del Grupo de las Cruces, al sur, que conserva restos de estuco pintado en su santuario.' } },
    { id: 'rio', u: -20, v: 55, y: 6, d: 180, yaw: 1.5, minor: true, walk: { u: 5, v: 55, dir: 90 },
      name: { fr: "L'Otulum", en: 'The Otulum', es: 'El Otulum' },
      desc: { fr: "Petite rivière canalisée par les Mayas au moyen d'une voûte souterraine, qui sépare le Palais du Groupe des Croix.",
              en: 'A small stream channelled by the Maya through an underground vault, separating the Palace from the Cross Group.',
              es: 'Pequeño río canalizado por los mayas mediante una bóveda subterránea, que separa el Palacio del Grupo de las Cruces.' } },
    { id: 'norte', u: 130, v: 10, y: 18, d: 240, yaw: 0, minor: true, walk: { u: 70, v: 10, dir: 0 },
      name: { fr: 'Grupo Norte', en: 'North Group', es: 'Grupo Norte' },
      desc: { fr: 'Ensemble de temples et un jeu de balle au nord du Palais, sur une rangée de plateformes surplombant la plaine.',
              en: 'A group of temples and a ball court north of the Palace, on a row of platforms overlooking the plain.',
              es: 'Conjunto de templos y un juego de pelota al norte del Palacio, sobre una hilera de plataformas con vista a la llanura.' } },
    { id: 'annexe', u: -160, v: -95, y: 12, d: 200, yaw: 1.0, minor: true, walk: { u: -120, v: -95, dir: 90 },
      name: { fr: 'Temple annexe (jungle)', en: 'Outlying temple (jungle)', es: 'Templo secundario (selva)' },
      desc: { fr: 'Petite structure isolée, encore largement recouverte de végétation, au sud-ouest du centre restauré du site.',
              en: 'A small isolated structure, still largely covered by vegetation, southwest of the restored core of the site.',
              es: 'Pequeña estructura aislada, aún muy cubierta de vegetación, al suroeste del núcleo restaurado del sitio.' } }
  ];

  var VIEWS = {
    overview:      { t: [0, 10, 20],   d: 480, yaw: 0.5,  pitch: -0.62 },
    palacio:       { t: [0, 8, 0],     d: 210, yaw: 0.5,  pitch: -0.4 },
    inscripciones: { t: [-70, 16, -70], d: 260, yaw: 3.9, pitch: -0.35 },
    cruces:        { t: [-30, 14, 115], d: 300, yaw: 3.0, pitch: -0.38 },
    norte:         { t: [130, 6, 10],  d: 220, yaw: 0,    pitch: -0.35 }
  };

  var EXCL = [[-40, 40, -40, 40], [-115, -25, -115, -25], [-115, 50, 65, 175], [95, 165, -35, 55], [-190, -130, -125, -65]];
  function inExcl(u, v) { for (var i = 0; i < EXCL.length; i++) { var e = EXCL[i]; if (u > e[0] && u < e[1] && v > e[2] && v < e[3]) return true; } return false; }

  function buildScene() {
    var m = K.begin(), rnd = mulberry(20100826), i;
    var G = 9000;
    m.quad([-G, 0, -G], [G, 0, -G], [G, 0, G], [-G, 0, G], [0.24, 0.4, 0.24], [0, -1, 0]);
    box(m, -260, 260, 0, 0.4, -260, 260, [0.6, 0.58, 0.4], null);   // sol poussiéreux du secteur central

    /* --- El Palacio : plateforme, cours, tour --- */
    ub(m, 0, 0, 78, 58, 0, 6, STONE, T(SAND, 1.02));
    stair(m, { cx: 0, cz: 0, w0: 78, d0: 58, w1: 78, d1: 58, y0: 0, y1: 6 }, 'S', 22, 5, [0.5, 0.45, 0.38], [0.68, 0.62, 0.5]);
    ub(m, -14, -10, 30, 24, 6, 12, T(TAN, 0.95));   // aile ouest (Casas A/B)
    ub(m, 16, 12, 26, 20, 6, 11, T(TAN, 0.9));      // aile est (Casas C/D)
    ub(m, 4, -18, 14, 10, 6, 12.5, DARK);           // salle des passages souterrains
    // tour à quatre niveaux
    ub(m, 22, -8, 13, 13, 6, 15, T(STONE, 1.05));
    ub(m, 22, -8, 10.5, 10.5, 15, 22, T(STONE, 0.98));
    ub(m, 22, -8, 8, 8, 22, 28, T(STONE, 0.92));
    ub(m, 22, -8, 6, 6, 28, 33, T(STONE, 0.86), TAN);

    /* --- Templo de las Inscripciones : pyramide à 6 gradins --- */
    var ins = pyramid(m, -70, -70, [82, 68, 55, 43, 32, 22], [70, 58, 47, 37, 27, 18], [4.5, 4.3, 4.2, 4, 3.8, 3.6], 24, 20, 2, STONE);
    for (i = 0; i < ins.length; i++) stair(m, ins[i], 'N', 11, 6, [0.5, 0.45, 0.38], [0.68, 0.62, 0.5]);
    ub(m, -70, -70, 22, 18, 24.4, 30, T(TAN, 0.95));   // sanctuaire sommital

    /* --- Groupe des Croix --- */
    // Templo del Sol
    var sol = pyramid(m, -40, 90, [46, 36, 27], [40, 31, 23], [4.5, 4, 3.6], 20, 17, 2, STONE);
    for (i = 0; i < sol.length; i++) stair(m, sol[i], 'W', 8, 5, [0.5, 0.45, 0.38], [0.68, 0.62, 0.5]);
    ub(m, -40, 90, 18, 15, 12.1, 20, T(TAN, 0.95)); ub(m, -40, 90, 12, 4, 20, 25, T(TAN, 0.88));  // toit-peigne
    // Templo de la Cruz (le plus grand)
    var cruz = pyramid(m, 10, 130, [56, 44, 33, 23], [46, 36, 27, 19], [5, 4.6, 4.3, 4], 24, 19, 2, STONE);
    for (i = 0; i < cruz.length; i++) stair(m, cruz[i], 'W', 10, 6, [0.5, 0.45, 0.38], [0.68, 0.62, 0.5]);
    ub(m, 10, 130, 22, 17, 17.9, 27, T(TAN, 0.95)); ub(m, 10, 130, 14, 4, 27, 34, T(TAN, 0.86));
    // Templo de la Cruz Foliada
    var fol = pyramid(m, -90, 120, [42, 32, 24], [36, 28, 20], [4, 3.7, 3.4], 18, 15, 2, STONE);
    for (i = 0; i < fol.length; i++) stair(m, fol[i], 'N', 7, 5, [0.5, 0.45, 0.38], [0.68, 0.62, 0.5]);
    ub(m, -90, 120, 16, 13, 11.1, 18, T(TAN, 0.95)); ub(m, -90, 120, 10, 3.5, 18, 22.5, T(TAN, 0.88));

    /* --- Rivière Otulum --- */
    m.quad([46, 0.5, 40], [64, 0.5, -260], [70, 0.5, -260], [52, 0.5, 40], WATER, [58, -20, -100]);

    /* --- Grupo Norte --- */
    ub(m, 130, 10, 46, 30, 0, 4, T(STONE, 0.95));
    var nte = pyramid(m, 145, 10, [22, 17], [18, 14], [3.2, 3], 12, 10, 2, STONE);
    for (i = 0; i < nte.length; i++) stair(m, nte[i], 'S', 5, 4, [0.5, 0.45, 0.38], [0.68, 0.62, 0.5]);
    frustum(m, -8, -118, 8, 26, 3, 26, 0, 4.5, T(STONE, 1.05), 2); frustum(m, 22, -118, 8, 26, 3, 26, 0, 4.5, T(STONE, 1.05), 2); // jeu de balle (cx=v, cz=-u)

    /* --- Temple annexe recouvert de jungle --- */
    ub(m, -160, -95, 26, 22, 0, 3.5, T([0.5, 0.56, 0.4], 0.9));
    ub(m, -160, -95, 12, 9, 3.5, 8, T(SAND, 0.9), T(SAND, 0.85));

    /* --- Jungle : arbres denses --- */
    var placed = 0, tries = 0;
    while (placed < 700 && tries < 9000) {
      tries++;
      var tu = -260 + rnd() * 520, tv = -260 + rnd() * 520;
      if (inExcl(tu, tv)) continue;
      if (Math.abs(tv - 55) < 10 && tu > -260 && tu < 45) continue;   // laisse le lit de la rivière dégagé
      var r = 3 + rnd() * 4.5, gcol = [0.22 + rnd() * 0.14, 0.4 + rnd() * 0.18, 0.18 + rnd() * 0.1];
      box(m, tv - 0.3, tv + 0.3, 0, r * 0.9, -tu - 0.3, -tu + 0.3, [0.35, 0.26, 0.18], [0.35, 0.26, 0.18]);
      cone(m, tv, r * 0.7, -tu, r * 1.2, r * 1.7, gcol, 6);
      placed++;
    }
    // collines boisées environnantes (la jungle du Chiapas monte de tous côtés)
    var hr = mulberry(2608);
    for (i = 0; i < 14; i++) { var a = i / 14 * 6.2832 + hr() * 0.4, dist = 700 + hr() * 500;
      hill(m, Math.cos(a) * dist, -Math.sin(a) * dist, 900 + hr() * 700, 260 + hr() * 260, [0.24, 0.42, 0.24], 400 + i); }

    return K.end(m);
  }

  Site3D.register('palenque', {
    gid: 'palenque', axisDeg: 0, sky: [0.62, 0.74, 0.82],
    text: { title: { fr: 'Palenque en 3D', en: 'Palenque in 3D', es: 'Palenque en 3D' } },
    mon: MON, views: VIEWS, initial: 'overview',
    viewButtons: [
      { key: 'overview', label: { fr: "Vue d'ensemble", en: 'Overview', es: 'Vista general' } },
      { key: 'palacio', label: { fr: 'El Palacio', en: 'El Palacio', es: 'El Palacio' } },
      { key: 'inscripciones', label: { fr: 'Inscriptions', en: 'Inscriptions', es: 'Inscripciones' } },
      { key: 'cruces', label: { fr: 'Groupe des Croix', en: 'Cross Group', es: 'Grupo de las Cruces' } },
      { key: 'norte', label: { fr: 'Groupe Nord', en: 'North Group', es: 'Grupo Norte' } }
    ],
    build: buildScene, ground: null, bounds: 2600, dMin: 8, dMax: 2600, fog: [1.1e-4, 1.8e-4],
    pinLift: 5, wedge: 32, stem: 0.4, labelFar: 700, labelWalk: 450, walkSpeed: 15
  });
})();
