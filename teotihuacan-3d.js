/* =====================================================================
   TEOTIHUACÁN EN 3D — maquette schématique (données du site)
   Le moteur est dans site3d.js. Chargé à la demande.
   Repère : u = mètres le long de l'Avenue des Morts (0 = Pyramide de la Lune,
   négatif vers le sud / la Ciudadela) ; v = mètres à l'est (+) / à l'ouest (−) de l'axe.
   ===================================================================== */
(function () {
  'use strict';
  var K = Site3D.kit, Mesh = K.Mesh, T = K.T, frustum = K.frustum, box = K.box, ub = K.ub, pyramid = K.pyramid, stair = K.stair,
    cone = K.cone, hill = K.hill, mulberry = K.mulberry, hash2 = K.hash2;

  /* Monuments : u,v = position ; y = altitude de l'étiquette ; d = distance de la caméra ; walk = point de départ à pied */
  var MON = [
    { id: 'moon', u: 0, v: 0, y: 46, d: 420, yaw: 0, main: true, walk: { u: -240, v: 0, dir: 0 },
      name: { fr: 'Pyramide de la Lune', en: 'Pyramid of the Moon', es: 'Pirámide de la Luna' },
      desc: { fr: "Au nord de l'avenue, environ 43 m de haut. Elle fait face à la Place de la Lune et répond à la silhouette du Cerro Gordo, derrière elle.",
              en: 'At the north end of the avenue, about 43 m high. It faces the Plaza of the Moon and echoes the outline of Cerro Gordo behind it.',
              es: 'En el extremo norte de la calzada, de unos 43 m de altura. Mira hacia la Plaza de la Luna y evoca la silueta del Cerro Gordo que se alza detrás.' } },
    { id: 'moonplaza', u: -180, v: 0, y: 8, d: 380, yaw: 0, minor: true, walk: { u: -290, v: 0, dir: 0 },
      name: { fr: 'Place de la Lune', en: 'Plaza of the Moon', es: 'Plaza de la Luna' },
      desc: { fr: 'Grande place entourée de petites plateformes-temples, avec un autel au centre.',
              en: 'A large plaza framed by small temple platforms, with an altar at its centre.',
              es: 'Gran plaza rodeada de pequeñas plataformas-templo, con un altar en el centro.' } },
    { id: 'palace', u: -70, v: -170, y: 14, d: 260, yaw: 0.6, minor: true, walk: { u: -70, v: -80, dir: 270 },
      name: { fr: 'Palais de Quetzalpapálotl', en: 'Quetzalpapálotl Palace', es: 'Palacio de Quetzalpapálotl' },
      desc: { fr: "Résidence près de la Place de la Lune, connue pour sa cour à piliers sculptés de motifs d'oiseau-papillon.",
              en: 'A residence beside the Plaza of the Moon, known for its courtyard of pillars carved with bird-butterfly motifs.',
              es: 'Residencia junto a la Plaza de la Luna, conocida por su patio de pilares tallados con motivos de ave-mariposa.' } },
    { id: 'sun', u: -430, v: 225, y: 70, d: 560, yaw: 1.15, main: true, walk: { u: -430, v: 60, dir: 90 },
      name: { fr: 'Pyramide du Soleil', en: 'Pyramid of the Sun', es: 'Pirámide del Sol' },
      desc: { fr: "La plus grande du site : environ 65 m de haut pour une base d'environ 225 m de côté. Son grand escalier, sur la face ouest, compte environ 250 marches.",
              en: 'The largest at the site: about 65 m high with a base of roughly 225 m per side. Its great stairway, on the west face, has about 250 steps.',
              es: 'La mayor del sitio: unos 65 m de altura y una base de unos 225 m por lado. Su gran escalinata, en la cara oeste, tiene unos 250 escalones.' } },
    { id: 'avenue', u: -820, v: 0, y: 6, d: 1500, yaw: 0, pitch: -0.32, main: true, walk: { u: -1480, v: 0, dir: 0 },
      name: { fr: 'Avenue des Morts', en: 'Avenue of the Dead', es: 'Calzada de los Muertos' },
      desc: { fr: 'Axe majeur de la cité, long d’environ 2 km, tourné de 15,5° vers l’est par rapport au nord.',
              en: 'The main axis of the city, about 2 km long, rotated 15.5° east of north.',
              es: 'Eje principal de la ciudad, de unos 2 km de largo, girado 15,5° al este del norte.' } },
    { id: 'gc', u: -1350, v: -200, y: 14, d: 650, yaw: 0.8, minor: true, walk: { u: -1350, v: -30, dir: 270 },
      name: { fr: 'Gran Conjunto', en: 'Gran Conjunto', es: 'Gran Conjunto' },
      desc: { fr: 'Vaste ensemble de plateformes et de places, en face de la Ciudadela.',
              en: 'A vast complex of platforms and plazas, opposite the Ciudadela.',
              es: 'Vasto conjunto de plataformas y plazas, frente a la Ciudadela.' } },
    { id: 'citadel', u: -1350, v: 260, y: 12, d: 760, yaw: 0.7, main: true, walk: { u: -1350, v: 40, dir: 90 },
      name: { fr: 'Ciudadela', en: 'Ciudadela', es: 'Ciudadela' },
      desc: { fr: "Vaste enceinte d'environ 400 m de côté, à l'extrémité sud de l'avenue, autour d'une grande place.",
              en: 'A vast enclosure about 400 m on each side at the south end of the avenue, around a great plaza.',
              es: 'Vasto recinto de unos 400 m por lado, en el extremo sur de la calzada, en torno a una gran plaza.' } },
    { id: 'quetz', u: -1350, v: 345, y: 26, d: 300, yaw: 1.1, minor: true, walk: { u: -1350, v: 230, dir: 90 },
      name: { fr: 'Temple de Quetzalcóatl', en: 'Temple of Quetzalcóatl', es: 'Templo de Quetzalcóatl' },
      desc: { fr: 'Pyramide à gradins ornée de têtes de serpents à plumes, au cœur de la Ciudadela.',
              en: 'A stepped pyramid adorned with feathered-serpent heads, at the heart of the Ciudadela.',
              es: 'Pirámide escalonada adornada con cabezas de serpientes emplumadas, en el corazón de la Ciudadela.' } },
    { id: 'cerro', u: 1900, v: 300, y: 600, d: 3800, yaw: 0, pitch: -0.15, minor: true, hideNear: 1500,
      name: { fr: 'Cerro Gordo', en: 'Cerro Gordo', es: 'Cerro Gordo' },
      desc: { fr: 'Montagne tutélaire au nord du site, visible derrière la Pyramide de la Lune.',
              en: 'The guardian mountain north of the site, seen behind the Pyramid of the Moon.',
              es: 'Montaña tutelar al norte del sitio, visible detrás de la Pirámide de la Luna.' } }
  ];

  var VIEWS = {
    overview: { t: [-700, 0, 120], d: 2000, yaw: 0.3, pitch: -0.95 },
    avenue:   { t: [-800, 0, 0],   d: 1500, yaw: 0,    pitch: -0.3 },
    sun:      { t: [-430, 24, 225], d: 560, yaw: 1.15, pitch: -0.32 },
    moon:     { t: [0, 16, 0],     d: 420,  yaw: 0.25, pitch: -0.3 },
    citadel:  { t: [-1350, 4, 260], d: 780, yaw: 0.7,  pitch: -0.55 }
  };

  /* ------------------------------------------------------------------ */
  /* Construction du site                                                */
  /* ------------------------------------------------------------------ */
  var STONE = [0.62, 0.55, 0.45], SAND = [0.78, 0.72, 0.58], TAN = [0.72, 0.62, 0.48], RED = [0.68, 0.42, 0.30];
  var EXCL = [[-1620, 120, -95, 95], [-330, 130, -270, 150], [-625, -240, -10, 345], [-1640, -1060, 15, 525], [-1570, -1130, -410, -30]];
  function inExcl(u, v) { for (var i = 0; i < EXCL.length; i++) { var e = EXCL[i]; if (u > e[0] && u < e[1] && v > e[2] && v < e[3]) return true; } return false; }
  function blockAt(i, j) {   // îlots d'habitations de la cité (grille de 100 m)
    var u = -1720 + i * 100, v = -760 + j * 100;
    if (u > -150 || u < -1760 || Math.abs(v) > 760) return null;
    if (inExcl(u - 40, v - 40) || inExcl(u + 40, v + 40) || inExcl(u - 40, v + 40) || inExcl(u + 40, v - 40)) return null;
    var h = hash2(i, j); if (h > 0.8) return null;
    return { u: u, v: v, h: 2.2 + hash2(j, i) * 2.6, k: hash2(i + 9, j + 4) };
  }

  function buildScene() {
    var m = K.begin(), rnd = mulberry(20100815), i, j;
    var G = 16000;
    m.quad([-G, 0, -G], [G, 0, -G], [G, 0, G], [-G, 0, G], [0.58, 0.58, 0.38], [0, -1, 0]);
    box(m, -900, 900, 0, 0.3, -2000, 500, [0.66, 0.62, 0.44], null);                   // sol poussiéreux autour du site
    // Avenue
    ub(m, -900, 0, 1250, 44, 0, 0.6, [0.76, 0.72, 0.62]);
    // Place de la Lune
    ub(m, -190, 0, 260, 230, 0, 0.6, [0.77, 0.72, 0.6]);
    ub(m, -165, 0, 24, 24, 0, 4, TAN);
    for (i = 0; i < 6; i++) { var uu = -70 - i * 45; ub(m, uu, -108, 28, 28, 0, 6.5, T(STONE, 0.95)); ub(m, uu, 108, 28, 28, 0, 6.5, T(STONE, 0.95)); }
    for (i = -2; i <= 2; i++) if (i) ub(m, -300, i * 45, 28, 28, 0, 6.5, T(STONE, 0.95));
    // Palais de Quetzalpapálotl
    ub(m, -70, -170, 95, 62, 0, 7, RED); ub(m, -70, -170, 55, 30, 7, 10, T(RED, 0.9)); ub(m, -70, -170, 30, 14, 7, 7.3, [0.45, 0.32, 0.25]);
    // Pyramide de la Lune
    ub(m, -92, 0, 34, 62, 0, 8, T(STONE, 1.06));
    var mo = pyramid(m, 0, 0, [140, 112, 84, 56], [150, 120, 90, 62], [12, 11, 10, 10], 40, 44, 4, STONE);
    for (i = 0; i < mo.length; i++) stair(m, mo[i], 'S', 13, 6, [0.5, 0.45, 0.38], [0.66, 0.6, 0.5]);
    // Avenue : plateformes latérales
    for (var side = -1; side <= 1; side += 2) for (var u = -330; u > -1420; u -= 95) {
      if (side > 0 && ((u < -230 && u > -620) || (u < -1090 && u > -1640))) continue;
      if (side < 0 && u < -1130 && u > -1570) continue;
      ub(m, u, side * 58, 70, 52, 0, 4.5 + hash2(u, side) * 2, T(STONE, 0.9 + hash2(side, u) * 0.2));
      ub(m, u, side * 58, 30, 22, 4.5, 9 + hash2(u, 3) * 2.5, T(TAN, 0.95));
    }
    // Pyramide du Soleil
    ub(m, -430, 60, 260, 100, 0, 0.6, [0.77, 0.72, 0.6]);           // place du Soleil
    ub(m, -430, 62, 24, 24, 0, 3.5, TAN);
    ub(m, -318, 62, 34, 70, 0, 4.2, T(STONE, 0.95)); ub(m, -542, 62, 34, 70, 0, 4.2, T(STONE, 0.95));
    var su = pyramid(m, -430, 225, [225, 187, 149, 111, 73], [222, 184, 146, 108, 70], [16, 14, 13, 12, 10], 42, 40, 4, STONE);
    for (i = 0; i < su.length; i++) stair(m, su[i], 'W', 16, 10, [0.45, 0.4, 0.34], [0.66, 0.6, 0.5]);
    frustum(m, 89.5, 491, 46, 100, 40, 94, 0, 10, T(STONE, 1.03), 2);  // plateforme adossée (Adosada)
    // Ciudadela
    var cu = -1350, cv = 260;
    ub(m, cu, cv, 400, 400, 0, 0.6, [0.76, 0.71, 0.58]);
    ub(m, cu + 177.5, cv, 45, 400, 0, 6, T(STONE, 0.95)); ub(m, cu - 177.5, cv, 45, 400, 0, 6, T(STONE, 0.95));
    ub(m, cu, cv - 177.5, 400, 45, 0, 6, T(STONE, 0.95)); ub(m, cu, cv + 177.5, 400, 45, 0, 6, T(STONE, 0.95));
    for (i = 0; i < 4; i++) { var o = -135 + i * 90;
      ub(m, cu + 177.5, cv + o, 16, 18, 6, 12.5, TAN); ub(m, cu - 177.5, cv + o, 16, 18, 6, 12.5, TAN);
      ub(m, cu + o, cv - 177.5, 18, 16, 6, 12.5, TAN); ub(m, cu + o, cv + 177.5, 18, 16, 6, 12.5, TAN); }
    ub(m, cu, 300, 60, 26, 0, 4.5, T(STONE, 1.04));
    pyramid(m, cu, 345, [66, 59, 52, 45, 38, 31], [66, 59, 52, 45, 38, 31], [3.4, 3.4, 3.4, 3.4, 3.4, 3.4], 26, 26, 2, [0.72, 0.52, 0.4]);
    // Gran Conjunto
    var gu = -1350, gv = -200;
    ub(m, gu, gv, 290, 270, 0, 0.6, [0.76, 0.71, 0.58]);
    ub(m, gu + 130, gv, 30, 270, 0, 5, T(RED, 1.05)); ub(m, gu - 130, gv, 30, 270, 0, 5, T(RED, 1.05));
    ub(m, gu, gv - 120, 290, 30, 0, 5, T(RED, 1.05)); ub(m, gu, gv + 120, 290, 30, 0, 5, T(RED, 1.05));
    ub(m, gu, gv, 70, 60, 0, 6.5, T(RED, 0.95)); ub(m, gu + 60, gv - 55, 50, 50, 0, 4.5, T(RED, 1)); ub(m, gu - 60, gv + 55, 50, 50, 0, 4.5, T(RED, 1));
    // Îlots d'habitations
    for (i = 0; i < 18; i++) for (j = 0; j < 16; j++) {
      var b = blockAt(i, j); if (!b) continue;
      var bc = T(TAN, 0.82 + b.k * 0.32);
      ub(m, b.u, b.v, 66, 66, 0, b.h, bc, T(SAND, 0.98));
      if (b.k > 0.55) ub(m, b.u + 10, b.v - 10, 22, 22, b.h, b.h + 2.2, T(bc, 0.92));
    }
    // Arbres
    var placed = 0, tries = 0;
    while (placed < 320 && tries < 4000) {
      tries++;
      var tu = -1950 + rnd() * 2250, tv = -1000 + rnd() * 2000;
      if (inExcl(tu, tv)) continue;
      var bi = Math.round((tu + 1720) / 100), bj = Math.round((tv + 760) / 100);
      if (blockAt(bi, bj) && Math.abs(tu - (-1720 + bi * 100)) < 40 && Math.abs(tv - (-760 + bj * 100)) < 40) continue;
      var r = 3 + rnd() * 4, gcol = [0.28 + rnd() * 0.16, 0.42 + rnd() * 0.16, 0.2 + rnd() * 0.1];
      box(m, tv - 0.3, tv + 0.3, 0, r * 0.9, -tu - 0.3, -tu + 0.3, [0.4, 0.3, 0.22], [0.4, 0.3, 0.22]);
      cone(m, tv, r * 0.7, -tu, r * 1.15, r * 1.6, gcol, 6);
      placed++;
    }
    // Reliefs : Cerro Gordo et collines lointaines
    hill(m, 300, -1900, 1500, 560, [0.42, 0.5, 0.31], 11);
    hill(m, -500, -2500, 1100, 330, [0.46, 0.52, 0.34], 12);
    var hr = mulberry(77);
    for (i = 0; i < 12; i++) { var a = i / 12 * 6.2832 + hr() * 0.4, dist = 6200 + hr() * 1400;
      hill(m, 100 + Math.cos(a) * dist, 700 + Math.sin(a) * dist, 1700 + hr() * 1200, 260 + hr() * 320, [0.44, 0.51, 0.36], 100 + i); }
    return K.end(m);
  }


  Site3D.register('teotihuacan', {
    gid: 'teotihuacan', axisDeg: 15.5, sky: [0.66, 0.80, 0.92],
    text: { title: { fr: 'Teotihuacán en 3D', en: 'Teotihuacán in 3D', es: 'Teotihuacán en 3D' } },
    mon: MON, views: VIEWS, initial: 'overview',
    viewButtons: [
      { key: 'overview', label: { fr: "Vue d'ensemble", en: 'Overview', es: 'Vista general' } },
      { key: 'avenue', label: { fr: 'Avenue', en: 'Avenue', es: 'Calzada' } },
      { key: 'sun', label: { fr: 'Soleil', en: 'Sun', es: 'Sol' } },
      { key: 'moon', label: { fr: 'Lune', en: 'Moon', es: 'Luna' } },
      { key: 'citadel', label: { fr: 'Ciudadela', en: 'Ciudadela', es: 'Ciudadela' } }
    ],
    build: buildScene, ground: null, bounds: 5000, dMin: 15, dMax: 5000, fog: [0.9e-4, 1.5e-4],
    pinLift: 7, wedge: 55, stem: 0.55, labelFar: 1400, labelWalk: 900, walkSpeed: 26
  });
})();
