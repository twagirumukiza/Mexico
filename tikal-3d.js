/* =====================================================================
   TIKAL EN 3D — maquette schématique (données du site)
   Le moteur est dans site3d.js. Chargé à la demande.
   Repère : u = mètres vers le nord (0 = centre de la Gran Plaza) ;
            v = mètres vers l'est (+) / l'ouest (−).
   ===================================================================== */
(function () {
  'use strict';
  var K = Site3D.kit, T = K.T, frustum = K.frustum, box = K.box, ub = K.ub, pyramid = K.pyramid, stair = K.stair,
    cone = K.cone, hill = K.hill, mulberry = K.mulberry, hash2 = K.hash2;

  var STONE = [0.6, 0.55, 0.44], SAND = [0.76, 0.7, 0.55], TAN = [0.68, 0.6, 0.44], DARK = [0.46, 0.42, 0.34];

  /* ---------------- monuments (étiquettes) ---------------- */
  var MON = [
    { id: 'templo1', u: 0, v: 35, y: 52, d: 260, yaw: 1.7, main: true, walk: { u: 0, v: -10, dir: 90 },
      name: { fr: 'Templo I (Gran Jaguar)', en: 'Temple I (Great Jaguar)', es: 'Templo I (Gran Jaguar)' },
      desc: { fr: "Le plus célèbre temple de Tikal, environ 47 m de haut, dressé sur le côté est de la Gran Plaza ; il abrite la tombe du souverain Jasaw Chan K'awiil.",
              en: "Tikal's most famous temple, about 47 m tall, standing on the east side of the Gran Plaza; it houses the tomb of ruler Jasaw Chan K'awiil.",
              es: 'El templo más famoso de Tikal, de unos 47 m de altura, en el lado este de la Gran Plaza; alberga la tumba del gobernante Jasaw Chan K’awiil.' } },
    { id: 'templo2', u: 0, v: -35, y: 42, d: 240, yaw: 4.9, main: true, walk: { u: 0, v: 5, dir: 270 },
      name: { fr: 'Templo II (Máscaras)', en: 'Temple II (Masks)', es: 'Templo II (Máscaras)' },
      desc: { fr: "Face au Templo I, sur le côté ouest de la Gran Plaza, environ 38 m de haut, nommé d'après les masques sculptés de sa façade.",
              en: 'Facing Temple I on the west side of the Gran Plaza, about 38 m tall, named for the carved masks on its façade.',
              es: 'Frente al Templo I, en el lado oeste de la Gran Plaza, de unos 38 m de altura, nombrado por las máscaras talladas en su fachada.' } },
    { id: 'acronorte', u: 38, v: 0, y: 20, d: 220, yaw: 0, main: true, walk: { u: 10, v: 0, dir: 0 },
      name: { fr: 'Acrópolis Norte', en: 'North Acropolis', es: 'Acrópolis Norte' },
      desc: { fr: "Un enchevêtrement de plus de cent structures superposées au fil des siècles, sur le côté nord de la Gran Plaza.",
              en: 'A tangle of more than a hundred structures layered over the centuries, on the north side of the Gran Plaza.',
              es: 'Un entramado de más de cien estructuras superpuestas a lo largo de los siglos, en el lado norte de la Gran Plaza.' } },
    { id: 'acrocentral', u: -38, v: 0, y: 14, d: 220, yaw: 3.1, minor: true, walk: { u: -10, v: 0, dir: 180 },
      name: { fr: 'Acrópolis Central', en: 'Central Acropolis', es: 'Acrópolis Central' },
      desc: { fr: 'Un vaste labyrinthe de cours et de palais royaux, au sud de la Gran Plaza.',
              en: 'A vast maze of courtyards and royal palaces, south of the Gran Plaza.',
              es: 'Un vasto laberinto de patios y palacios reales, al sur de la Gran Plaza.' } },
    { id: 'templo4', u: 15, v: -230, y: 78, d: 420, yaw: 4.8, main: true, walk: { u: 15, v: -160, dir: 270 },
      name: { fr: 'Templo IV', en: 'Temple IV', es: 'Templo IV' },
      desc: { fr: "Le plus haut édifice de Tikal, environ 70 m, relié à la Gran Plaza par une chaussée à travers la jungle ; son sommet domine la canopée.",
              en: "Tikal's tallest structure, about 70 m high, linked to the Gran Plaza by a causeway through the jungle; its summit rises above the canopy.",
              es: 'La estructura más alta de Tikal, de unos 70 m, unida a la Gran Plaza por una calzada a través de la selva; su cima domina el dosel.' } },
    { id: 'templo5', u: -130, v: 25, y: 60, d: 300, yaw: 2.2, main: true, walk: { u: -95, v: 25, dir: 270 },
      name: { fr: 'Templo V', en: 'Temple V', es: 'Templo V' },
      desc: { fr: 'Environ 58 m de haut, aux angles arrondis inhabituels, au sud de l’Acrópolis Central.',
              en: 'About 58 m tall, with unusually rounded corners, south of the Central Acropolis.',
              es: 'De unos 58 m de altura, con esquinas redondeadas inusuales, al sur de la Acrópolis Central.' } },
    { id: 'templo6', u: -70, v: 100, y: 26, d: 230, yaw: 5.4, minor: true, walk: { u: -70, v: 65, dir: 90 },
      name: { fr: 'Templo VI (Inscripciones)', en: 'Temple VI (Inscriptions)', es: 'Templo VI (Inscripciones)' },
      desc: { fr: "Une toiture-peigne couverte d'un long texte hiéroglyphique, presque aussi haute que le temple lui-même.",
              en: 'A roof comb covered with a long hieroglyphic text, nearly as tall as the temple itself.',
              es: 'Una crestería cubierta con un largo texto jeroglífico, casi tan alta como el propio templo.' } },
    { id: 'mundoperdido', u: -95, v: -100, y: 34, d: 260, yaw: 0.9, main: true, walk: { u: -95, v: -50, dir: 270 },
      name: { fr: 'Mundo Perdido', en: 'Lost World', es: 'Mundo Perdido' },
      desc: { fr: "La Gran Pirámide, large plateforme à degrés d'environ 32 m, au cœur du plus ancien complexe astronomique du site.",
              en: 'The Gran Pirámide, a broad 32 m stepped platform, at the heart of the site’s oldest astronomical complex.',
              es: 'La Gran Pirámide, una amplia plataforma escalonada de unos 32 m, en el corazón del complejo astronómico más antiguo del sitio.' } },
    { id: 'siete', u: -65, v: -65, y: 14, d: 170, yaw: 0.5, minor: true, walk: { u: -80, v: -65, dir: 90 },
      name: { fr: 'Plaza de los Siete Templos', en: 'Plaza of the Seven Temples', es: 'Plaza de los Siete Templos' },
      desc: { fr: "Une rangée de sept petits temples identiques, près du Mundo Perdido.",
              en: 'A row of seven identical small temples, near the Lost World.',
              es: 'Una hilera de siete templos pequeños e idénticos, cerca del Mundo Perdido.' } }
  ];

  var VIEWS = {
    overview:   { t: [-20, 30, 0], d: 500, yaw: 0.7, pitch: -0.55 },
    plaza:      { t: [0, 18, 0],   d: 220, yaw: 0.6, pitch: -0.35 },
    templo4:    { t: [15, 30, -230], d: 340, yaw: 4.8, pitch: -0.3 },
    templo5:    { t: [-130, 22, 25], d: 260, yaw: 2.2, pitch: -0.32 },
    mundoperdido: { t: [-95, 14, -100], d: 220, yaw: 0.9, pitch: -0.35 }
  };

  var CLR = [ [-55, 55, -55, 55], [-20, 55, -255, -195], [-155, -100, -5, 55], [-120, -70, -125, -60],
              [-90, -40, 60, 125], [-125, -65, -45, 30] ];   // clairières : Gran Plaza, Templo IV, Templo V, Mundo Perdido/7 Templos, Templo VI, chaussée sud
  function inClr(u, v) { for (var i = 0; i < CLR.length; i++) { var c = CLR[i]; if (u > c[0] && u < c[1] && v > c[2] && v < c[3]) return true; } return false; }
  var EXCL = [[-8, 8, 25, 45], [-8, 8, -45, -25], [28, 48, -10, 10], [-48, -28, -10, 10], [5, 25, -240, -220],
              [-140, -120, 15, 35], [-80, -60, 90, 110], [-105, -85, -110, -90], [-72, -58, -72, -58]];
  function inExcl(u, v) { for (var i = 0; i < EXCL.length; i++) { var e = EXCL[i]; if (u > e[0] && u < e[1] && v > e[2] && v < e[3]) return true; } return false; }

  function buildScene() {
    var m = K.begin(), rnd = mulberry(20100828), i;
    var G = 12000;
    m.quad([-G, 0, -G], [G, 0, -G], [G, 0, G], [-G, 0, G], [0.2, 0.36, 0.2], [0, -1, 0]);
    box(m, -280, 280, 0, 0.3, -280, 280, [0.62, 0.58, 0.42], null);

    /* --- Gran Plaza : Templo I & II --- */
    var t1 = pyramid(m, 0, 35, [34, 26, 19, 13, 9, 6], [30, 23, 17, 12, 8, 6], [4.6, 4.4, 4.3, 4.2, 4.1, 4], 16, 13, 1.5, STONE);
    for (i = 0; i < t1.length; i++) stair(m, t1[i], 'W', 6, 6, [0.5, 0.44, 0.36], [0.68, 0.6, 0.48]);
    ub(m, 0, 35, 13, 10, 25.6, 33, T(SAND, 0.95)); ub(m, 0, 35, 8, 3, 33, 44, T(SAND, 0.88));   // toiture-peigne
    var t2 = pyramid(m, 0, -35, [30, 22, 16, 11], [26, 19, 14, 10], [5.2, 5, 4.8, 4.6], 14, 11, 1.5, STONE);
    for (i = 0; i < t2.length; i++) stair(m, t2[i], 'E', 6, 6, [0.5, 0.44, 0.36], [0.68, 0.6, 0.48]);
    ub(m, 0, -35, 12, 9, 19.6, 26, T(SAND, 0.95)); ub(m, 0, -35, 7, 3, 26, 33, T(SAND, 0.88));

    /* --- Acrópolis Norte : plateforme + petits temples --- */
    ub(m, 38, 0, 56, 70, 0, 6, T(STONE, 0.95));
    for (i = -2; i <= 2; i++) { var vv = i * 13; ub(m, 46, vv, 12, 9, 6, 6 + 5 + Math.abs(i), T(STONE, 0.9 + 0.03 * i)); }

    /* --- Acrópolis Central : labyrinthe de cours --- */
    ub(m, -34, -18, 40, 28, 0, 5, T(TAN, 0.95)); ub(m, -34, 16, 38, 26, 0, 6.5, T(TAN, 0.9));
    ub(m, -46, 0, 20, 16, 0, 4, T(TAN, 0.85));

    /* --- Templo IV --- */
    var t4 = pyramid(m, 15, -230, [40, 30, 22, 15], [34, 26, 19, 13], [6, 5.6, 5.4, 5], 18, 14, 2, STONE);
    for (i = 0; i < t4.length; i++) stair(m, t4[i], 'W', 8, 6, [0.5, 0.44, 0.36], [0.68, 0.6, 0.48]);
    ub(m, 15, -230, 15, 11, 22, 30, T(SAND, 0.95)); ub(m, 15, -230, 9, 3, 30, 42, T(SAND, 0.86));

    /* --- Templo V (angles arrondis, pas de toiture-peigne marquée) --- */
    var t5 = pyramid(m, -130, 25, [34, 25, 18, 12], [30, 22, 16, 11], [5.6, 5.3, 5, 4.8], 15, 12, 1.6, T(STONE, 0.97));
    for (i = 0; i < t5.length; i++) stair(m, t5[i], 'E', 6, 5, [0.5, 0.44, 0.36], [0.68, 0.6, 0.48]);
    ub(m, -130, 25, 13, 10, 20.7, 27, T(SAND, 0.93));

    /* --- Templo VI : toiture-peigne géante inscrite --- */
    var t6 = pyramid(m, -70, 100, [22, 16], [18, 13], [3.6, 3.4], 9, 7, 1.5, STONE);
    for (i = 0; i < t6.length; i++) stair(m, t6[i], 'S', 4, 4, [0.5, 0.44, 0.36], [0.68, 0.6, 0.48]);
    ub(m, -70, 100, 8, 6, 7, 11, T(SAND, 0.95)); ub(m, -70, 100, 12, 2, 11, 24, T(TAN, 0.85));

    /* --- Mundo Perdido : Gran Pirámide --- */
    var mp = pyramid(m, -95, -100, [58, 46, 36, 27, 19], [58, 46, 36, 27, 19], [3.4, 3.3, 3.2, 3.1, 3], 15, 15, 2, T(STONE, 0.94));
    for (i = 0; i < mp.length; i++) stair(m, mp[i], 'E', 8, 4, [0.5, 0.44, 0.36], [0.68, 0.6, 0.48]);

    /* --- Plaza de los Siete Templos --- */
    for (i = 0; i < 7; i++) { var vv2 = -65 - 30 + i * 10; ub(m, -60, vv2, 10, 6, 0, 4 + (i % 2), T(STONE, 0.92 + 0.02 * i)); }

    /* --- Chaussées (clairières reliant les complexes) --- */
    box(m, -5, 5, 0, 0.25, -195, -70, T(SAND, 1.05), null);
    box(m, -100, -70, 0, 0.25, 15, 55, T(SAND, 1.05), null);
    box(m, -90, -70, 0, 0.25, -50, -10, T(SAND, 1.05), null);
    box(m, -55, -40, 0, 0.25, 40, 65, T(SAND, 1.05), null);

    /* --- Canopée dense, clairières dégagées --- */
    var placed = 0, tries = 0;
    while (placed < 620 && tries < 12000) {
      tries++;
      var tu = -280 + rnd() * 560, tv = -280 + rnd() * 560;
      if (inClr(tu, tv)) continue;
      var r = 5 + rnd() * 15, gcol = [0.18 + rnd() * 0.12, 0.36 + rnd() * 0.18, 0.16 + rnd() * 0.1];
      box(m, tv - 0.3, tv + 0.3, 0, r * 0.75, -tu - 0.3, -tu + 0.3, [0.32, 0.24, 0.16], [0.32, 0.24, 0.16]);
      cone(m, tv, r * 0.55, -tu, r * 1.15, r * 1.7, gcol, 6);
      placed++;
    }
    // arbres isolés dans les clairières
    placed = 0; tries = 0;
    while (placed < 40 && tries < 2500) {
      tries++;
      var au = -270 + rnd() * 540, av = -270 + rnd() * 540;
      if (inExcl(au, av) || !inClr(au, av)) continue;
      var r2 = 2 + rnd() * 2.4, gcol2 = [0.22 + rnd() * 0.12, 0.42 + rnd() * 0.14, 0.2 + rnd() * 0.08];
      box(m, av - 0.25, av + 0.25, 0, r2 * 0.9, -au - 0.25, -au + 0.25, [0.35, 0.26, 0.18], [0.35, 0.26, 0.18]);
      cone(m, av, r2 * 0.7, -au, r2 * 1.1, r2 * 1.5, gcol2, 6);
      placed++;
    }
    // collines lointaines
    var hr = mulberry(2809);
    for (i = 0; i < 14; i++) { var a = i / 14 * 6.2832 + hr() * 0.4, dist = 3400 + hr() * 1000;
      hill(m, Math.cos(a) * dist, -Math.sin(a) * dist, 560 + hr() * 420, 220 + hr() * 220, [0.2, 0.38, 0.2], 500 + i); }

    return K.end(m);
  }

  Site3D.register('tikal', {
    gid: 'flores-tikal', axisDeg: 0, sky: [0.58, 0.76, 0.86],
    text: { title: { fr: 'Tikal en 3D', en: 'Tikal in 3D', es: 'Tikal en 3D' } },
    mon: MON, views: VIEWS, initial: 'overview',
    viewButtons: [
      { key: 'overview', label: { fr: "Vue d'ensemble", en: 'Overview', es: 'Vista general' } },
      { key: 'plaza', label: { fr: 'Gran Plaza', en: 'Gran Plaza', es: 'Gran Plaza' } },
      { key: 'templo4', label: { fr: 'Templo IV', en: 'Temple IV', es: 'Templo IV' } },
      { key: 'templo5', label: { fr: 'Templo V', en: 'Temple V', es: 'Templo V' } },
      { key: 'mundoperdido', label: { fr: 'Mundo Perdido', en: 'Lost World', es: 'Mundo Perdido' } }
    ],
    build: buildScene, ground: null, bounds: 3200, dMin: 8, dMax: 3200, fog: [0.9e-4, 1.5e-4],
    pinLift: 5, wedge: 30, stem: 0.4, labelFar: 900, labelWalk: 500, walkSpeed: 16
  });
})();
