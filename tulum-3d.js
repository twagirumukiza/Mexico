/* =====================================================================
   TULUM EN 3D — maquette schématique (données du site)
   Le moteur est dans site3d.js. Chargé à la demande.
   Repère : u = mètres vers le nord (0 = centre du site) ;
            v = mètres vers l'est (+, côté mer des Caraïbes) / l'ouest (−).
   ===================================================================== */
(function () {
  'use strict';
  var K = Site3D.kit, T = K.T, frustum = K.frustum, box = K.box, ub = K.ub, pyramid = K.pyramid, stair = K.stair,
    cone = K.cone, hill = K.hill, mulberry = K.mulberry, hash2 = K.hash2;

  var STONE = [0.72, 0.68, 0.58], SAND = [0.86, 0.8, 0.62], TAN = [0.78, 0.7, 0.52], SEA = [0.16, 0.56, 0.62], SEA2 = [0.22, 0.68, 0.7];

  /* ---------------- monuments (étiquettes) ---------------- */
  var MON = [
    { id: 'castillo', u: 10, v: 75, y: 22, d: 220, yaw: 0.3, main: true, walk: { u: 10, v: 20, dir: 90 },
      name: { fr: 'El Castillo', en: 'El Castillo', es: 'El Castillo' },
      desc: { fr: "Le temple principal, dressé au bord de la falaise face à la mer des Caraïbes ; il servait aussi de repère pour les navigateurs mayas.",
              en: "The main temple, standing on the cliff edge facing the Caribbean; it also served as a landmark for Maya navigators.",
              es: 'El templo principal, en el borde del acantilado frente al mar Caribe; también servía de referencia para los navegantes mayas.' } },
    { id: 'viento', u: -25, v: 88, y: 12, d: 150, yaw: 3.6, minor: true, walk: { u: -25, v: 40, dir: 90 },
      name: { fr: 'Templo del Dios del Viento', en: 'Temple of the Wind God', es: 'Templo del Dios del Viento' },
      desc: { fr: 'Petit temple perché sur un promontoire rocheux, juste au sud d’El Castillo, dédié au dieu du vent.',
              en: 'A small temple perched on a rocky outcrop just south of El Castillo, dedicated to the wind god.',
              es: 'Pequeño templo encaramado en un promontorio rocoso, justo al sur de El Castillo, dedicado al dios del viento.' } },
    { id: 'pinturas', u: 15, v: 20, y: 16, d: 180, yaw: 1.1, main: true, walk: { u: -20, v: 20, dir: 90 },
      name: { fr: 'Templo de las Pinturas', en: 'Temple of the Frescoes', es: 'Templo de las Pinturas' },
      desc: { fr: "L'un des bâtiments les mieux conservés du site, avec une galerie à colonnes et des fresques murales à l'intérieur.",
              en: "One of the best-preserved buildings at the site, with a colonnaded gallery and interior murals.",
              es: 'Uno de los edificios mejor conservados del sitio, con una galería de columnas y murales en su interior.' } },
    { id: 'cenote', u: 40, v: -90, y: 6, d: 150, yaw: 2.2, minor: true, walk: { u: 40, v: -60, dir: 270 },
      name: { fr: 'Casa del Cenote', en: 'Casa del Cenote', es: 'Casa del Cenote' },
      desc: { fr: "Petite structure près d'un cenote, source d'eau douce sacrée typique du Yucatán, non loin de l'entrée du site.",
              en: 'A small structure by a cenote, the sacred freshwater sinkhole typical of the Yucatán, near the site entrance.',
              es: 'Pequeña estructura junto a un cenote, la sagrada dolina de agua dulce típica de Yucatán, cerca de la entrada del sitio.' } },
    { id: 'muralla', u: 0, v: -110, y: 6, d: 260, yaw: 0, minor: true, walk: { u: 0, v: -60, dir: 90 },
      name: { fr: 'La Muraille', en: 'The City Wall', es: 'La Muralla' },
      desc: { fr: "Tulum est l'une des rares cités mayas fortifiées : un mur de pierre l'entoure sur trois côtés, la mer formant la quatrième défense naturelle.",
              en: 'Tulum is one of the few walled Maya cities: a stone wall encloses it on three sides, with the sea as the fourth, natural defence.',
              es: 'Tulum es una de las pocas ciudades mayas amuralladas: un muro de piedra la rodea por tres lados, con el mar como cuarta defensa natural.' } },
    { id: 'mar', u: 10, v: 160, y: -6, d: 320, yaw: 0.9, pitch: -0.2, main: true, walk: { u: 10, v: 90, dir: 90 },
      name: { fr: 'La Mer des Caraïbes', en: 'The Caribbean Sea', es: 'El Mar Caribe' },
      desc: { fr: "Depuis la falaise, un escalier de pierre descend vers une petite crique de sable blanc et l'eau turquoise des Caraïbes.",
              en: 'From the cliff, a stone stairway leads down to a small white-sand cove and the turquoise Caribbean water.',
              es: 'Desde el acantilado, una escalinata de piedra baja hacia una pequeña cala de arena blanca y el agua turquesa del Caribe.' } }
  ];

  var VIEWS = {
    overview: { t: [0, 20, 10],  d: 340, yaw: 0.9, pitch: -0.55 },
    castillo: { t: [10, 14, 75], d: 170, yaw: 0.3, pitch: -0.32 },
    pinturas: { t: [15, 8, 20],  d: 140, yaw: 1.1, pitch: -0.3 },
    muralla:  { t: [0, 4, -60], d: 220, yaw: 0,   pitch: -0.25 },
    playa:    { t: [10, -8, 110], d: 200, yaw: 0.9, pitch: -0.18 }
  };

  var CORE = [-118, 118, -113, 102];   // intérieur des murailles, gardé dégagé
  var EXCL = [[-30, 50, 60, 92], [-45, -5, 78, 100], [-2, 32, 4, 36], [22, 58, -108, -72]];
  function inExcl(u, v) { for (var i = 0; i < EXCL.length; i++) { var e = EXCL[i]; if (u > e[0] && u < e[1] && v > e[2] && v < e[3]) return true; } return false; }
  function inBox(u, v, b) { return u > b[0] && u < b[1] && v > b[2] && v < b[3]; }

  function buildScene() {
    var m = K.begin(), rnd = mulberry(20100830), i;
    var G = 9000;
    m.quad([-G, 0, -G], [G, 0, -G], [G, 0, G], [-G, 0, G], [0.3, 0.44, 0.24], [0, -1, 0]);
    box(m, -230, 230, 0, 0.3, -240, 100, [0.72, 0.66, 0.5], null);   // sol clair du secteur central

    /* --- Falaise et mer, côté est --- */
    m.quad([98, 0, -240], [98, 0, 240], [112, -14, 240], [112, -14, -240], T(STONE, 0.7), [105, 20, 0]);      // face de falaise
    m.quad([112, -14, -240], [112, -14, 240], [122, -14.5, 240], [122, -14.5, -240], SAND, [117, 10, 0]);      // plage étroite
    m.quad([122, -14.5, -1800], [122, -14.5, 1800], [4000, -14.5, 1800], [4000, -14.5, -1800], SEA, [200, 20, 0]);
    m.quad([135, -12.5, -260], [135, -12.5, 260], [400, -12.8, 260], [400, -12.8, -260], SEA2, [180, 40, 0]);  // reflet lagon peu profond
    // escalier d'accès à la crique
    var esc = { cx: 108, cz: -105, w0: 10, d0: 4, w1: 10, d1: 4, y0: -14, y1: 0 };
    stair(m, esc, 'W', 5, 8, [0.55, 0.5, 0.42], [0.75, 0.68, 0.56]);

    /* --- Muraille (trois côtés, la mer fermant le quatrième) --- */
    ub(m, 0, -113, 232, 4.5, 0, 3.2, STONE);            // mur ouest
    ub(m, 113, -12, 4.5, 210, 0, 3.2, STONE);           // mur nord
    ub(m, -113, -12, 4.5, 210, 0, 3.2, STONE);          // mur sud
    ub(m, 60, -113, 6, 6, 0, 4.5, T(STONE, 0.92));      // petite structure d'entrée
    ub(m, -60, -113, 6, 6, 0, 4.5, T(STONE, 0.92));

    /* --- El Castillo --- */
    var cas = pyramid(m, 10, 75, [36, 25], [28, 19], [5.5, 5], 15, 11, 2, STONE);
    for (i = 0; i < cas.length; i++) stair(m, cas[i], 'W', 8, 6, [0.55, 0.5, 0.42], [0.78, 0.7, 0.56]);
    ub(m, 10, 75, 14, 10, 10.4, 16, T(SAND, 0.95));
    ub(m, 10, 71.5, 3, 2, 10.4, 14, T([0.5, 0.46, 0.4], 0.9)); ub(m, 10, 78.5, 3, 2, 10.4, 14, T([0.5, 0.46, 0.4], 0.9)); // colonnes de la façade

    /* --- Templo del Dios del Viento --- */
    var vie = pyramid(m, -25, 88, [16, 11], [13, 9], [3, 2.6], 8, 6, 1.5, STONE);
    for (i = 0; i < vie.length; i++) stair(m, vie[i], 'W', 3.5, 4, [0.55, 0.5, 0.42], [0.78, 0.7, 0.56]);
    ub(m, -25, 88, 7, 5, 5.6, 9, T(SAND, 0.95));

    /* --- Templo de las Pinturas --- */
    ub(m, 15, 20, 30, 24, 0, 4, T(STONE, 0.95));
    ub(m, 15, 20, 22, 16, 4, 8, T(SAND, 0.95));
    for (i = -2; i <= 2; i++) ub(m, 15, 20 + i * 8, 2.2, 2.2, 4, 8.4, T([0.55, 0.5, 0.42], 0.95));  // colonnade
    ub(m, 15, 20, 12, 9, 8, 10.5, T(TAN, 0.9));

    /* --- Casa del Cenote --- */
    ub(m, 40, -90, 12, 10, 0, 3.2, T(STONE, 0.92));
    m.quad([-96, -0.6, -34], [-84, -0.6, -34], [-84, -0.6, -46], [-96, -0.6, -46], [0.2, 0.5, 0.58], [-90, -10, -40]);

    /* --- Végétation : dégagée à l'intérieur des murs, dense au-dehors --- */
    var placed = 0, tries = 0;
    while (placed < 360 && tries < 7000) {
      tries++;
      var tu = -230 + rnd() * 460, tv = -230 + rnd() * 460;
      if (inBox(tu, tv, CORE)) continue;
      if (tv > 96) continue;   // pas d'arbres sur la falaise / la mer
      var r = 2.6 + rnd() * 3.6, gcol = [0.22 + rnd() * 0.12, 0.42 + rnd() * 0.16, 0.2 + rnd() * 0.08];
      box(m, tv - 0.25, tv + 0.25, 0, r * 0.85, -tu - 0.25, -tu + 0.25, [0.35, 0.28, 0.18], [0.35, 0.28, 0.18]);
      cone(m, tv, r * 0.65, -tu, r * 1.1, r * 1.5, gcol, 6);
      placed++;
    }
    // quelques palmiers isolés à l'intérieur de l'enceinte
    placed = 0; tries = 0;
    while (placed < 22 && tries < 1500) {
      tries++;
      var au = -105 + rnd() * 210, av = -100 + rnd() * 190;
      if (inExcl(au, av) || !inBox(au, av, CORE)) continue;
      box(m, av - 0.2, av + 0.2, 0, 5.5, -au - 0.2, -au + 0.2, [0.5, 0.42, 0.28], [0.5, 0.42, 0.28]);
      cone(m, av, 5.2, -au, 2.6, 3, [0.28, 0.5, 0.26], 6);
      placed++;
    }

    return K.end(m);
  }

  Site3D.register('tulum', {
    gid: 'tulum', axisDeg: 0, sky: [0.5, 0.78, 0.93],
    text: { title: { fr: 'Tulum en 3D', en: 'Tulum in 3D', es: 'Tulum en 3D' } },
    mon: MON, views: VIEWS, initial: 'overview',
    viewButtons: [
      { key: 'overview', label: { fr: "Vue d'ensemble", en: 'Overview', es: 'Vista general' } },
      { key: 'castillo', label: { fr: 'El Castillo', en: 'El Castillo', es: 'El Castillo' } },
      { key: 'pinturas', label: { fr: 'Templo de las Pinturas', en: 'Temple of the Frescoes', es: 'Templo de las Pinturas' } },
      { key: 'muralla', label: { fr: 'La Muraille', en: 'City Wall', es: 'La Muralla' } },
      { key: 'playa', label: { fr: 'La Crique', en: 'The Cove', es: 'La Cala' } }
    ],
    build: buildScene, ground: null, bounds: 1400, dMin: 6, dMax: 1400, fog: [1.6e-4, 2.4e-4],
    pinLift: 4, wedge: 26, stem: 0.32, labelFar: 500, labelWalk: 320, walkSpeed: 12
  });
})();
