/* =====================================================================
   MONTE ALBÁN EN 3D — maquette schématique (données du site)
   Le moteur est dans site3d.js. Chargé à la demande.
   Repère : u = mètres vers le nord (0 = centre de la Grande Place),
            v = mètres vers l'est (+) / l'ouest (−). Altitude 0 = sol de la place ;
   la vallée d'Oaxaca se trouve environ 420 m plus bas, à l'est.
   ===================================================================== */
(function () {
  'use strict';
  var K = Site3D.kit, T = K.T, frustum = K.frustum, box = K.box, ub = K.ub, pyramid = K.pyramid, stair = K.stair,
    cone = K.cone, hill = K.hill, prism = K.prism, mulberry = K.mulberry, hash2 = K.hash2, lerp = K.lerp;

  var VALLEY = -420;
  var STONE = [0.64, 0.58, 0.47], SAND = [0.80, 0.75, 0.62], TAN = [0.72, 0.63, 0.5], DARK = [0.5, 0.46, 0.38];

  /* ---------------- relief ---------------- */
  function sstep(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }
  function vnoise(u, v, s) {
    var x = u / s, y = v / s, i = Math.floor(x), j = Math.floor(y), fx = x - i, fy = y - j;
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
    return lerp(lerp(hash2(i, j), hash2(i + 1, j), fx), lerp(hash2(i, j + 1), hash2(i + 1, j + 1), fx), fy);
  }
  function terrainH(u, v) {
    var e = Math.sqrt((u / 650) * (u / 650) + (v / 300) * (v / 300)), d = e - 1;
    if (d <= 0) return 0;
    var t = sstep(d / 2.4), y = VALLEY * t;
    y += (vnoise(u, v, 170) - 0.5) * 2 * 45 * 4 * t * (1 - t);
    return y;
  }

  /* ---------------- monuments (étiquettes) ---------------- */
  var MON = [
    { id: 'plaza', u: 0, v: 0, y: 7, d: 520, yaw: 0.5, pitch: -0.5, main: true, walk: { u: -110, v: 0, dir: 0 },
      name: { fr: 'Grande Place', en: 'Main Plaza', es: 'Gran Plaza' },
      desc: { fr: 'Cœur cérémoniel de la cité zapotèque : une place d’environ 300 m sur 200 m, bordée de plateformes et d’un groupe central d’édifices.',
              en: 'The ceremonial heart of the Zapotec city: a plaza of about 300 m by 200 m, framed by platforms and a central group of buildings.',
              es: 'Corazón ceremonial de la ciudad zapoteca: una plaza de unos 300 m por 200 m, bordeada de plataformas y de un grupo central de edificios.' } },
    { id: 'north', u: 205, v: 0, y: 26, d: 380, yaw: 0.35, pitch: -0.4, main: true, walk: { u: 110, v: 0, dir: 0 },
      name: { fr: 'Plateforme Nord', en: 'North Platform', es: 'Plataforma Norte' },
      desc: { fr: 'Grand ensemble qui ferme la place au nord, avec une cour intérieure et un escalier monumental côté place.',
              en: 'A large complex closing the plaza to the north, with an inner court and a monumental stairway facing the plaza.',
              es: 'Gran conjunto que cierra la plaza por el norte, con un patio interior y una escalinata monumental hacia la plaza.' } },
    { id: 'south', u: -205, v: 0, y: 30, d: 380, yaw: 3.0, pitch: -0.4, main: true, walk: { u: -135, v: 0, dir: 180 },
      name: { fr: 'Plateforme Sud', en: 'South Platform', es: 'Plataforma Sur' },
      desc: { fr: 'Vaste plateforme pyramidale au sud de la place, accessible par un grand escalier ; on y monte pour la vue sur toute la place.',
              en: 'A vast pyramidal platform at the south of the plaza, reached by a great stairway; visitors climb it for the view over the whole plaza.',
              es: 'Vasta plataforma piramidal al sur de la plaza, con una gran escalinata; se sube para contemplar toda la plaza.' } },
    { id: 'court', u: -15, v: 78, y: 9, d: 150, yaw: 0.5, pitch: -0.5, minor: true, walk: { u: -48, v: 78, dir: 0 },
      name: { fr: 'Jeu de balle', en: 'Ball court', es: 'Juego de pelota' },
      desc: { fr: 'Terrain de jeu de balle mésoaméricain aux talus inclinés, près du centre de la place.',
              en: 'A Mesoamerican ball court with sloping walls, near the centre of the plaza.',
              es: 'Cancha mesoamericana del juego de pelota con muros inclinados, cerca del centro de la plaza.' } },
    { id: 'j', u: -72, v: -28, y: 8, d: 140, yaw: 0.7, pitch: -0.5, minor: true, walk: { u: -100, v: -28, dir: 0 },
      name: { fr: 'Édifice J', en: 'Building J', es: 'Edificio J' },
      desc: { fr: 'Bâtiment en forme de pointe de flèche, orienté différemment des autres, souvent interprété comme un observatoire astronomique.',
              en: 'An arrowhead-shaped building, oriented differently from the others and often interpreted as an astronomical observatory.',
              es: 'Edificio en forma de punta de flecha, orientado de forma distinta a los demás y a menudo interpretado como observatorio astronómico.' } },
    { id: 'danzantes', u: -8, v: -52, y: 8, d: 140, yaw: 0.6, pitch: -0.5, minor: true, walk: { u: -40, v: -52, dir: 0 },
      name: { fr: 'Édifice des Danzantes', en: 'Building of the Danzantes', es: 'Edificio de los Danzantes' },
      desc: { fr: 'Édifice orné de dalles gravées de figures appelées « danzantes » (danseurs), parmi les plus anciens témoignages d’écriture du Mexique.',
              en: 'A building decorated with carved slabs of figures called “danzantes” (dancers), among the oldest evidence of writing in Mexico.',
              es: 'Edificio decorado con lápidas grabadas con figuras llamadas «danzantes», entre los testimonios de escritura más antiguos de México.' } },
    { id: 'valley', u: -150, v: 2100, y: -330, d: 2600, yaw: 1.5, pitch: -0.3, minor: true, hideNear: 900, walk: { u: -160, v: 340, dir: 90 },
      name: { fr: "Vallée d'Oaxaca", en: 'Oaxaca Valley', es: 'Valle de Oaxaca' },
      desc: { fr: "À l'est, environ 400 m plus bas : la vallée d'Oaxaca et la ville, à quelques kilomètres de la colline.",
              en: 'To the east, about 400 m below: the Oaxaca valley and the city, a few kilometres from the hill.',
              es: 'Al este, unos 400 m más abajo: el valle de Oaxaca y la ciudad, a pocos kilómetros del cerro.' } }
  ];

  var VIEWS = {
    overview: { t: [0, -20, 170], d: 950, yaw: 1.0, pitch: -0.5 },
    plaza:    { t: [0, 0, 0],     d: 520,  yaw: 0.45, pitch: -0.55 },
    north:    { t: [205, 8, 0],   d: 330,  yaw: 0.3, pitch: -0.35 },
    south:    { t: [-205, 10, 0], d: 330,  yaw: 3.0, pitch: -0.35 },
    court:    { t: [-15, 3, 78],  d: 140,  yaw: 0.5, pitch: -0.5 },
    valley:   { t: [-100, -300, 1500], d: 2600, yaw: 1.55, pitch: -0.22 }
  };

  /* ---------------- construction ---------------- */
  function buildScene() {
    var m = K.begin(), rnd = mulberry(20100818), i, j;
    var GRASS = [0.66, 0.62, 0.4];

    // sol de la vallée (très grand) + relief
    var G = 16000;
    m.quad([-G, VALLEY - 6, -G], [G, VALLEY - 6, -G], [G, VALLEY - 6, G], [-G, VALLEY - 6, G], [0.66, 0.68, 0.44], [0, -1e4, 0]);
    var CS = 80, U0 = -2400, V0 = -1500, NU = 60, NV = 60, hh = [];
    for (i = 0; i <= NU; i++) { hh[i] = []; for (j = 0; j <= NV; j++) hh[i][j] = terrainH(U0 + i * CS, V0 + j * CS); }
    for (i = 0; i < NU; i++) for (j = 0; j < NV; j++) {
      var u0 = U0 + i * CS, v0 = V0 + j * CS, hc = (hh[i][j] + hh[i + 1][j] + hh[i][j + 1] + hh[i + 1][j + 1]) / 4, col;
      var k = hash2(i * 3 + 1, j * 7 + 2);
      if (hc > -4) col = T(GRASS, 0.92 + 0.14 * k);
      else if (hc > VALLEY + 25) { var f = sstep((-hc) / 380); col = [lerp(0.5, 0.34, f) * (0.9 + 0.2 * k), lerp(0.55, 0.47, f) * (0.9 + 0.2 * k), lerp(0.32, 0.26, f)]; }
      else col = k > 0.5 ? [0.72, 0.72, 0.44] : [0.62, 0.68, 0.4];
      var a = [v0, hh[i][j], -u0], b = [v0 + CS, hh[i][j + 1], -u0], c = [v0 + CS, hh[i + 1][j + 1], -(u0 + CS)], d = [v0, hh[i + 1][j], -(u0 + CS)];
      m.quad(a, b, c, d, col, [v0 + CS / 2, hc - 3000, -(u0 + CS / 2)]);
    }

    // Grande Place et plateformes
    ub(m, 0, 0, 300, 200, 0, 0.5, SAND);
    ub(m, 0, -145, 300, 90, 0, 8, STONE); ub(m, 0, 145, 300, 90, 0, 8, STONE);
    for (i = -2; i <= 2; i++) { ub(m, i * 55, -150, 30, 36, 8, 14, T(STONE, 0.95)); ub(m, i * 55, 150, 30, 36, 8, 14, T(STONE, 0.95)); }
    // Plateforme Nord (avec escalier vers la place)
    var fN = { cx: 0, cz: -205, w0: 240, d0: 110, w1: 240, d1: 110, y0: 0, y1: 14 };
    frustum(m, fN.cx, fN.cz, fN.w0, fN.d0, fN.w1, fN.d1, fN.y0, fN.y1, STONE, 1);
    stair(m, fN, 'S', 30, 14, [0.5, 0.45, 0.38], [0.68, 0.62, 0.52]);
    ub(m, 205, 0, 60, 120, 14, 14.4, DARK);
    ub(m, 236, -92, 26, 40, 14, 23, T(STONE, 0.95)); ub(m, 236, 92, 26, 40, 14, 23, T(STONE, 0.95)); ub(m, 236, 0, 24, 46, 14, 20, T(TAN, 0.95));
    ub(m, 175, -102, 22, 22, 14, 19, T(STONE, 1.02)); ub(m, 175, 102, 22, 22, 14, 19, T(STONE, 1.02));
    // Plateforme Sud
    var sf = pyramid(m, -205, 0, [110, 96, 82], [100, 86, 72], [8, 7, 7], 66, 56, 3, STONE);
    for (i = 0; i < sf.length; i++) stair(m, sf[i], 'N', 14, 8, [0.5, 0.45, 0.38], [0.68, 0.62, 0.52]);
    ub(m, -205, 0, 30, 34, 22, 27, T(TAN, 0.95));
    // Groupe central (bâtiments G, H, I), Danzantes, jeu de balle
    ub(m, 55, 0, 40, 34, 0, 5.5, T(STONE, 1.02)); ub(m, 55, 0, 26, 22, 5.5, 9, T(STONE, 0.95));
    ub(m, 10, 0, 26, 26, 0, 4.5, T(STONE, 1.02)); ub(m, 10, 0, 16, 16, 4.5, 7, T(STONE, 0.95));
    ub(m, -38, 0, 36, 30, 0, 5, T(STONE, 1.02)); ub(m, -38, 0, 22, 18, 5, 8, T(STONE, 0.95));
    ub(m, -8, -52, 34, 26, 0, 4.5, T(TAN, 1.0)); ub(m, -8, -52, 20, 14, 4.5, 7, T(TAN, 0.92));
    var alpha = 0.7, cu = -72, cv = -28, pts = [[0, 26], [15, -2], [9, -20], [-9, -20], [-15, -2]].map(function (p) {
      var a = p[0], b = p[1], e = a * Math.cos(alpha) + b * Math.sin(alpha), n = -a * Math.sin(alpha) + b * Math.cos(alpha);
      return [cv + e, -(cu + n)]; });
    prism(m, pts, 0, 4, T(STONE, 0.98));
    var pts2 = pts.map(function (p) { return [cv + (p[0] - cv) * 0.6, -(cu + (-p[1] - cu) * 0.6)]; });
    prism(m, pts2, 4, 6, T(STONE, 0.9));
    // jeu de balle
    frustum(m, 63, -(-15), 12, 46, 4, 46, 0, 6.5, T(STONE, 1.05), 3);
    frustum(m, 93, -(-15), 12, 46, 4, 46, 0, 6.5, T(STONE, 1.05), 3);
    ub(m, -38, 78, 12, 44, 0, 5, T(STONE, 0.98)); ub(m, 8, 78, 12, 44, 0, 5, T(STONE, 0.98));
    ub(m, -15, 78, 44, 16, 0, 0.7, [0.45, 0.6, 0.35]);
    // petits ensembles résidentiels sur le plateau
    var placed = 0, tries = 0;
    while (placed < 46 && tries < 600) {
      tries++;
      var pu = -560 + rnd() * 1120, pv = -260 + rnd() * 520;
      if (Math.abs(pu) < 330 && Math.abs(pv) < 215) continue;
      if (terrainH(pu, pv) < -1.5 || terrainH(pu + 22, pv + 22) < -1.5 || terrainH(pu - 22, pv - 22) < -1.5) continue;
      var hgt = 2.4 + rnd() * 2.6;
      ub(m, pu, pv, 34 + rnd() * 18, 30 + rnd() * 16, 0, hgt, T(STONE, 0.9 + rnd() * 0.2)); placed++;
    }
    // arbres sur les pentes et sur le plateau
    placed = 0; tries = 0;
    while (placed < 900 && tries < 8000) {
      tries++;
      var tu = -1900 + rnd() * 3800, tv = -900 + rnd() * 2300, th = terrainH(tu, tv);
      if (th > -8 && (Math.abs(tu) < 340 && Math.abs(tv) < 230)) continue;
      if (th < -395 || (th > -6 && rnd() > 0.15)) continue;
      var r = 2.6 + rnd() * 3.2, gc = [0.28 + rnd() * 0.14, 0.4 + rnd() * 0.14, 0.2 + rnd() * 0.08];
      box(m, tv - 0.3, tv + 0.3, th, th + r * 0.9, -tu - 0.3, -tu + 0.3, [0.4, 0.3, 0.22], [0.4, 0.3, 0.22]);
      cone(m, tv, th + r * 0.7, -tu, r * 1.1, r * 1.6, gc, 6);
      placed++;
    }
    // la ville d'Oaxaca dans la vallée
    for (var cu2 = -1900; cu2 <= 1900; cu2 += 110) for (var cv2 = 1150; cv2 <= 3150; cv2 += 110) {
      var h0 = hash2(Math.round(cu2 / 110) + 50, Math.round(cv2 / 110) + 30); if (h0 > 0.8) continue;
      var pu2 = cu2 + (hash2(cu2, cv2) - 0.5) * 20, pv2 = cv2 + (hash2(cv2, cu2) - 0.5) * 20;
      if (terrainH(pu2, pv2) > VALLEY + 20) continue;
      var bh = 5 + hash2(pu2 | 0, pv2 | 0) * 9, pal = [[0.86, 0.79, 0.66], [0.82, 0.58, 0.42], [0.92, 0.9, 0.82], [0.78, 0.7, 0.55]][Math.floor(hash2(cv2, cu2 + 5) * 4) % 4];
      ub(m, pu2, pv2, 68, 68, VALLEY, VALLEY + bh, pal, T(pal, 1.05));
    }
    // montagnes lointaines
    var hr = mulberry(91);
    for (i = 0; i < 16; i++) { var an = i / 16 * 6.2832 + hr() * 0.3, dist = 5500 + hr() * 2200;
      hill(m, 1300 + Math.cos(an) * dist, Math.sin(an) * dist, 1500 + hr() * 1500, 420 + hr() * 620, [0.46, 0.52, 0.38], 300 + i, VALLEY - 4); }
    return K.end(m);
  }

  Site3D.register('monte-alban', {
    gid: 'monte-alban', axisDeg: 0, sky: [0.66, 0.8, 0.93],
    text: { title: { fr: 'Monte Albán en 3D', en: 'Monte Albán in 3D', es: 'Monte Albán en 3D' } },
    mon: MON, views: VIEWS, initial: 'overview',
    viewButtons: [
      { key: 'overview', label: { fr: "Vue d'ensemble", en: 'Overview', es: 'Vista general' } },
      { key: 'plaza', label: { fr: 'Grande place', en: 'Main plaza', es: 'Gran plaza' } },
      { key: 'north', label: { fr: 'Plateforme nord', en: 'North platform', es: 'Plataforma norte' } },
      { key: 'south', label: { fr: 'Plateforme sud', en: 'South platform', es: 'Plataforma sur' } },
      { key: 'court', label: { fr: 'Jeu de balle', en: 'Ball court', es: 'Juego de pelota' } },
      { key: 'valley', label: { fr: 'Vallée', en: 'Valley', es: 'Valle' } }
    ],
    build: buildScene, ground: function (x, z) { return terrainH(-z, x); },
    bounds: 3500, dMin: 8, dMax: 4500, fog: [0.7e-4, 1.2e-4],
    pinLift: 5, wedge: 30, stem: 0.35, labelFar: 900, labelWalk: 500, walkSpeed: 14
  });
})();
