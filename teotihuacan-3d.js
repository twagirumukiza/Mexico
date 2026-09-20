/* =====================================================================
   TEOTIHUACÁN EN 3D — maquette schématique interactive (WebGL, sans librairie)
   Chargé à la demande depuis le bouton « Explorer Teotihuacán en 3D ».
   Les points-photos viennent de gallery-data.js (champ `pos` de chaque photo).

   Repère du site (mètres) :
     u = distance le long de l'Avenue des Morts  (0 = Pyramide de la Lune,
         valeurs négatives vers le sud / la Ciudadela)
     v = distance latérale à l'axe de l'avenue    (+ = est, − = ouest)
   Dans la scène 3D : X = v, Z = −u, Y = altitude (le nord de l'avenue est « en haut »).
   ===================================================================== */
(function () {
  'use strict';
  if (window.Teo3D) return;

  var GID = 'teotihuacan';
  var AXIS_DEG = 15.5;                       // l'avenue est tournée de ~15,5° à l'est du nord
  var EDIT = /[?&]editer3d/.test(location.search);

  /* ------------------------------------------------------------------ */
  /* Textes                                                              */
  /* ------------------------------------------------------------------ */
  var I18N = {
    fr: {
      title: 'Teotihuacán en 3D', sub: 'Maquette schématique',
      close: 'Fermer', overview: "Vue d'ensemble", avenue: 'Avenue', sun: 'Soleil', moon: 'Lune', citadel: 'Ciudadela',
      photos: 'Photos', walk: 'Marcher', aerial: 'Vue aérienne',
      hintOrbit: 'Glisser : tourner • Clic droit ou Maj + glisser : déplacer • Molette : zoom • Cliquez un point pour voir la photo',
      hintTouch: '1 doigt : tourner • 2 doigts : zoom et déplacement • Touchez un point pour voir la photo',
      hintWalk: 'Glisser : regarder • ZQSD / flèches ou boutons : avancer',
      note: 'Modèle schématique : proportions approximatives. Emplacements des photos estimés.',
      openPhoto: 'Ouvrir la photo', viewFrom: 'Voir depuis ce point', explore: 'Explorer', walkHere: 'Marcher ici',
      photo: 'Photo', of: 'sur', noWebgl: "Votre navigateur n'affiche pas la 3D (WebGL indisponible).",
      heightM: 'Hauteur', zoomIn: 'Zoom avant', zoomOut: 'Zoom arrière', forward: 'Avancer', back: 'Reculer', north: 'Nord',
      editTitle: 'Éditeur de positions', editHelp: 'Choisissez une photo puis cliquez sur le sol pour la placer.',
      copy: 'Copier le code', copied: 'Copié !', dir: 'Direction (°)'
    },
    en: {
      title: 'Teotihuacán in 3D', sub: 'Schematic model',
      close: 'Close', overview: 'Overview', avenue: 'Avenue', sun: 'Sun', moon: 'Moon', citadel: 'Ciudadela',
      photos: 'Photos', walk: 'Walk', aerial: 'Aerial view',
      hintOrbit: 'Drag: rotate • Right-click or Shift + drag: pan • Wheel: zoom • Click a point to see the photo',
      hintTouch: '1 finger: rotate • 2 fingers: zoom and pan • Tap a point to see the photo',
      hintWalk: 'Drag: look around • WASD / arrows or buttons: move',
      note: 'Schematic model: approximate proportions. Photo locations are estimated.',
      openPhoto: 'Open the photo', viewFrom: 'View from this spot', explore: 'Explore', walkHere: 'Walk here',
      photo: 'Photo', of: 'of', noWebgl: 'Your browser cannot display 3D (WebGL unavailable).',
      heightM: 'Height', zoomIn: 'Zoom in', zoomOut: 'Zoom out', forward: 'Forward', back: 'Back', north: 'North',
      editTitle: 'Position editor', editHelp: 'Pick a photo, then click the ground to place it.',
      copy: 'Copy code', copied: 'Copied!', dir: 'Direction (°)'
    },
    es: {
      title: 'Teotihuacán en 3D', sub: 'Maqueta esquemática',
      close: 'Cerrar', overview: 'Vista general', avenue: 'Calzada', sun: 'Sol', moon: 'Luna', citadel: 'Ciudadela',
      photos: 'Fotos', walk: 'Caminar', aerial: 'Vista aérea',
      hintOrbit: 'Arrastrar: girar • Clic derecho o Mayús + arrastrar: mover • Rueda: zoom • Haz clic en un punto para ver la foto',
      hintTouch: '1 dedo: girar • 2 dedos: zoom y desplazamiento • Toca un punto para ver la foto',
      hintWalk: 'Arrastrar: mirar • WASD / flechas o botones: avanzar',
      note: 'Modelo esquemático: proporciones aproximadas. Ubicaciones de las fotos estimadas.',
      openPhoto: 'Abrir la foto', viewFrom: 'Ver desde este punto', explore: 'Explorar', walkHere: 'Caminar aquí',
      photo: 'Foto', of: 'de', noWebgl: 'Tu navegador no puede mostrar 3D (WebGL no disponible).',
      heightM: 'Altura', zoomIn: 'Acercar', zoomOut: 'Alejar', forward: 'Avanzar', back: 'Retroceder', north: 'Norte',
      editTitle: 'Editor de posiciones', editHelp: 'Elige una foto y haz clic en el suelo para colocarla.',
      copy: 'Copiar código', copied: '¡Copiado!', dir: 'Dirección (°)'
    }
  };
  function L(k) { var d = I18N[currentLang] || I18N.fr; return d[k] != null ? d[k] : I18N.fr[k]; }
  function pick(o) { return o ? (o[currentLang] || o.fr || '') : ''; }

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
    { id: 'cerro', u: 1900, v: 300, y: 600, d: 3800, yaw: 0, pitch: -0.15, minor: true, noFly: false,
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
  /* Maths                                                               */
  /* ------------------------------------------------------------------ */
  var M = {
    persp: function (f, a, n, r) { var t = 1 / Math.tan(f / 2), nf = 1 / (n - r);
      return [t / a, 0, 0, 0, 0, t, 0, 0, 0, 0, (r + n) * nf, -1, 0, 0, 2 * r * n * nf, 0]; },
    look: function (e, c, u) {
      var zx = e[0] - c[0], zy = e[1] - c[1], zz = e[2] - c[2], l = Math.hypot(zx, zy, zz) || 1; zx /= l; zy /= l; zz /= l;
      var xx = u[1] * zz - u[2] * zy, xy = u[2] * zx - u[0] * zz, xz = u[0] * zy - u[1] * zx; l = Math.hypot(xx, xy, xz) || 1; xx /= l; xy /= l; xz /= l;
      var yx = zy * xz - zz * xy, yy = zz * xx - zx * xz, yz = zx * xy - zy * xx;
      return [xx, yx, zx, 0, xy, yy, zy, 0, xz, yz, zz, 0,
        -(xx * e[0] + xy * e[1] + xz * e[2]), -(yx * e[0] + yy * e[1] + yz * e[2]), -(zx * e[0] + zy * e[1] + zz * e[2]), 1];
    },
    mul: function (a, b) { var o = new Array(16); for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) { var s = 0; for (var k = 0; k < 4; k++) s += a[k * 4 + j] * b[i * 4 + k]; o[i * 4 + j] = s; } return o; },
    inv: function (m) {
      var a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3], a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7],
        a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11], a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15];
      var b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
      var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06; if (!det) return null; det = 1 / det;
      return [(a11 * b11 - a12 * b10 + a13 * b09) * det, (a02 * b10 - a01 * b11 - a03 * b09) * det, (a31 * b05 - a32 * b04 + a33 * b03) * det, (a22 * b04 - a21 * b05 - a23 * b03) * det,
        (a12 * b08 - a10 * b11 - a13 * b07) * det, (a00 * b11 - a02 * b08 + a03 * b07) * det, (a32 * b02 - a30 * b05 - a33 * b01) * det, (a20 * b05 - a22 * b02 + a23 * b01) * det,
        (a10 * b10 - a11 * b08 + a13 * b06) * det, (a01 * b08 - a00 * b10 - a03 * b06) * det, (a30 * b04 - a31 * b02 + a33 * b00) * det, (a21 * b02 - a20 * b04 - a23 * b00) * det,
        (a11 * b07 - a10 * b09 - a12 * b06) * det, (a00 * b09 - a01 * b07 + a02 * b06) * det, (a31 * b01 - a30 * b03 - a32 * b00) * det, (a20 * b03 - a21 * b01 + a22 * b00) * det];
    },
    xform: function (m, x, y, z, w) { return [m[0] * x + m[4] * y + m[8] * z + m[12] * w, m[1] * x + m[5] * y + m[9] * z + m[13] * w,
      m[2] * x + m[6] * y + m[10] * z + m[14] * w, m[3] * x + m[7] * y + m[11] * z + m[15] * w]; }
  };
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function lerp3(a, b, t) { return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]; }
  function angDiff(a, b) { var d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; }
  function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function fwd(yaw, pitch) { var cp = Math.cos(pitch); return [Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp]; }
  function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function hash2(i, j) { var h = (Math.imul(i, 374761393) + Math.imul(j, 668265263)) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }

  /* ------------------------------------------------------------------ */
  /* Maillage                                                            */
  /* ------------------------------------------------------------------ */
  function Mesh() { this.p = []; this.n = []; this.c = []; }
  Mesh.prototype.tri = function (a, b, c, col, ref) {
    var ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    var nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx, l = Math.hypot(nx, ny, nz);
    if (l < 1e-9) return; nx /= l; ny /= l; nz /= l;
    if (ref) { var dx = (a[0] + b[0] + c[0]) / 3 - ref[0], dy = (a[1] + b[1] + c[1]) / 3 - ref[1], dz = (a[2] + b[2] + c[2]) / 3 - ref[2];
      if (nx * dx + ny * dy + nz * dz < 0) { nx = -nx; ny = -ny; nz = -nz; } }
    var vs = [a, b, c];
    for (var i = 0; i < 3; i++) { this.p.push(vs[i][0], vs[i][1], vs[i][2]); this.n.push(nx, ny, nz); this.c.push(col[0], col[1], col[2]); }
  };
  Mesh.prototype.quad = function (a, b, c, d, col, ref) { this.tri(a, b, c, col, ref); this.tri(a, c, d, col, ref); };
  function T(c, f) { return [Math.min(1, c[0] * f), Math.min(1, c[1] * f), Math.min(1, c[2] * f)]; }

  var SOL = [];   // solides pour le suivi du relief à pied
  function addSolid(cx, cz, w0, d0, w1, d1, y0, y1) { if (y1 - y0 > 0.9) SOL.push([cx, cz, w0, d0, w1, d1, y0, y1]); }
  function heightAt(x, z) {
    var best = 0;
    for (var i = 0; i < SOL.length; i++) {
      var s = SOL[i], dx = Math.abs(x - s[0]), dz = Math.abs(z - s[1]);
      if (dx > s[2] / 2 || dz > s[3] / 2) continue;
      var sx = s[2] - s[4] > 1e-6 ? (s[2] - 2 * dx) / (s[2] - s[4]) : 9, sz = s[3] - s[5] > 1e-6 ? (s[3] - 2 * dz) / (s[3] - s[5]) : 9;
      var t = clamp(Math.min(sx, sz, 1), 0, 1), y = s[6] + (s[7] - s[6]) * t;
      if (y > best) best = y;
    }
    return best;
  }

  function frustum(m, cx, cz, w0, d0, w1, d1, y0, y1, col, strips, topCol) {
    var ref = [cx, (y0 + y1) / 2, cz];
    var B = [[cx - w0 / 2, y0, cz - d0 / 2], [cx + w0 / 2, y0, cz - d0 / 2], [cx + w0 / 2, y0, cz + d0 / 2], [cx - w0 / 2, y0, cz + d0 / 2]];
    var Tp = [[cx - w1 / 2, y1, cz - d1 / 2], [cx + w1 / 2, y1, cz - d1 / 2], [cx + w1 / 2, y1, cz + d1 / 2], [cx - w1 / 2, y1, cz + d1 / 2]];
    strips = strips || 1;
    for (var s = 0; s < 4; s++) {
      var b0 = B[s], b1 = B[(s + 1) % 4], t0 = Tp[s], t1 = Tp[(s + 1) % 4];
      for (var i = 0; i < strips; i++) {
        var f0 = i / strips, f1 = (i + 1) / strips, c = strips > 1 ? T(col, i % 2 ? 0.92 : 1.05) : col;
        m.quad(lerp3(b0, t0, f0), lerp3(b1, t1, f0), lerp3(b1, t1, f1), lerp3(b0, t0, f1), c, ref);
      }
    }
    m.quad(Tp[0], Tp[1], Tp[2], Tp[3], topCol || T(col, 1.12), ref);
    addSolid(cx, cz, w0, d0, w1, d1, y0, y1);
  }
  function box(m, x0, x1, y0, y1, z0, z1, col, top) {
    frustum(m, (x0 + x1) / 2, (z0 + z1) / 2, x1 - x0, z1 - z0, x1 - x0, z1 - z0, y0, y1, col, 1, top);
  }
  function ub(m, u, v, su, sv, y0, y1, col, top) { box(m, v - sv / 2, v + sv / 2, y0, y1, -u - su / 2, -u + su / 2, col, top); }

  function pyramid(m, u, v, bw, bd, hs, lastW, lastD, ledge, col) {
    var cx = v, cz = -u, y = 0, out = [];
    for (var i = 0; i < hs.length; i++) {
      var tw = i < hs.length - 1 ? bw[i + 1] + 2 * ledge : lastW, td = i < hs.length - 1 ? bd[i + 1] + 2 * ledge : lastD;
      var f = { cx: cx, cz: cz, w0: bw[i], d0: bd[i], w1: tw, d1: td, y0: y, y1: y + hs[i] };
      frustum(m, cx, cz, f.w0, f.d0, f.w1, f.d1, f.y0, f.y1, T(col, 1 - i * 0.03), 4);
      out.push(f); y += hs[i];
    }
    return out;
  }
  function stair(m, f, face, half, n, ca, cb) {
    var ref = [f.cx, (f.y0 + f.y1) / 2, f.cz];
    for (var i = 0; i < n; i++) {
      var s0 = i / n, s1 = (i + 1) / n, y0 = f.y0 + (f.y1 - f.y0) * s0, y1 = f.y0 + (f.y1 - f.y0) * s1, c = i % 2 ? ca : cb, a, b, c2, d;
      var w0 = f.w0 + (f.w1 - f.w0) * s0, w1 = f.w0 + (f.w1 - f.w0) * s1, d0 = f.d0 + (f.d1 - f.d0) * s0, d1 = f.d0 + (f.d1 - f.d0) * s1;
      if (face === 'W') { var x0 = f.cx - w0 / 2 - 0.35, x1 = f.cx - w1 / 2 - 0.35; a = [x0, y0, f.cz - half]; b = [x0, y0, f.cz + half]; c2 = [x1, y1, f.cz + half]; d = [x1, y1, f.cz - half]; }
      else { var z0 = f.cz + d0 / 2 + 0.35, z1 = f.cz + d1 / 2 + 0.35; a = [f.cx - half, y0, z0]; b = [f.cx + half, y0, z0]; c2 = [f.cx + half, y1, z1]; d = [f.cx - half, y1, z1]; }
      m.quad(a, b, c2, d, c, ref);
    }
  }
  function cone(m, x, y, z, r, h, col, sides) {
    sides = sides || 6; var ref = [x, y + h * 0.3, z], top = [x, y + h, z];
    for (var i = 0; i < sides; i++) {
      var a0 = i / sides * 6.2832, a1 = (i + 1) / sides * 6.2832;
      m.tri([x + Math.cos(a0) * r, y, z + Math.sin(a0) * r], [x + Math.cos(a1) * r, y, z + Math.sin(a1) * r], top, col, ref);
    }
  }
  function hill(m, cx, cz, R, H, col, seed) {
    var rnd = mulberry(seed), rings = 7, seg = 26, g = [];
    for (var r = 0; r <= rings; r++) { g[r] = []; var k = r / rings;
      for (var s = 0; s < seg; s++) { var a = s / seg * 6.2832, rr = R * k * (0.9 + 0.2 * rnd()), h = H * Math.pow(Math.max(0, 1 - k * k), 1.4) * (0.82 + 0.36 * rnd()) * (r === 0 ? 1 : 1);
        g[r][s] = [cx + Math.cos(a) * rr, h, cz + Math.sin(a) * rr]; } }
    for (var r2 = 0; r2 < rings; r2++) for (var s2 = 0; s2 < seg; s2++) {
      var s3 = (s2 + 1) % seg, a = g[r2][s2], b = g[r2][s3], c = g[r2 + 1][s3], d = g[r2 + 1][s2];
      var ck = T(col, 0.88 + 0.28 * (1 - r2 / rings) * rnd() + 0.05 * r2 / rings);
      if (r2 === 0) m.tri(a, c, d, ck, [cx, -50, cz]); else m.quad(a, b, c, d, ck, [cx, -50, cz]);
    }
  }

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
    SOL = [];
    var m = new Mesh(), rnd = mulberry(20100815), i, j;
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
    return m;
  }

  /* ------------------------------------------------------------------ */
  /* État                                                                */
  /* ------------------------------------------------------------------ */
  var root, canvas, gl, prog, U = {}, A = {}, over, stageEl, sceneBuf, ovBuf, sceneCount = 0, ovCount = 0, ovMesh;
  var built = false, isOpen = false, raf = 0, pushed = false, lastFocus = null, lastT = 0;
  var cam = { mode: 'orbit', t: [-700, 0, 100], d: 2700, yaw: 0.35, pitch: -0.75, pos: [0, 2, 0], anim: null };
  var lastPose = null, VP = null, iVP = null, W = 1, H = 1, dpr = 1, eyeNow = [0, 0, 0], dirty = true;
  var photos = [], pinEls = [], labelEls = [], stripEls = [], showPins = true, selected = -1, selMon = null, keys = {}, held = {}, walkY = 2;
  var cardEl, hintEl, compassEl, walkPad, tools = {};

  function P(u, v) { return [v, -u]; }
  function groundAt(u, v) { var p = P(u, v); return heightAt(p[0], p[1]); }

  function eyeOf(c) {
    if (c.mode === 'walk') return { x: c.pos[0], y: c.pos[1], z: c.pos[2], yaw: c.yaw, pitch: c.pitch, dist: 25 };
    var f = fwd(c.yaw, c.pitch);
    return { x: c.t[0] - f[0] * c.d, y: c.t[1] - f[1] * c.d, z: c.t[2] - f[2] * c.d, yaw: c.yaw, pitch: c.pitch, dist: c.d };
  }
  function viewTarget(v) { // tableau [u,y,v] → point 3D
    return [v.t[2], v.t[1], -v.t[0]];
  }

  /* ------------------------------------------------------------------ */
  /* WebGL                                                               */
  /* ------------------------------------------------------------------ */
  var VS = 'attribute vec3 aPos;attribute vec3 aNor;attribute vec3 aCol;uniform mat4 uVP;uniform float uLit;varying vec3 vCol;varying vec3 vPos;' +
    'void main(){vec3 L=normalize(vec3(0.42,0.78,0.46));float d=max(dot(aNor,L),0.0);float l=0.46+0.62*d+0.10*aNor.y;vCol=mix(aCol,aCol*l,uLit);vPos=aPos;gl_Position=uVP*vec4(aPos,1.0);}';
  var FS = '#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n' +
    'varying vec3 vCol;varying vec3 vPos;uniform vec3 uEye;uniform vec3 uFogCol;uniform float uFog;uniform float uAlpha;' +
    'void main(){float x=length(vPos-uEye)*uFog;float f=clamp(1.0-exp(-x*x),0.0,1.0);gl_FragColor=vec4(mix(vCol,uFogCol,f),uAlpha);}';
  var SKY = [0.66, 0.80, 0.92];

  function shader(t, s) { var o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o);
    if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o)); return o; }
  function initGL() {
    gl = canvas.getContext('webgl', { antialias: true, alpha: false }) || canvas.getContext('experimental-webgl');
    if (!gl) return false;
    prog = gl.createProgram(); gl.attachShader(prog, shader(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    ['uVP', 'uEye', 'uLit', 'uFogCol', 'uFog', 'uAlpha'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
    ['aPos', 'aNor', 'aCol'].forEach(function (n) { A[n] = gl.getAttribLocation(prog, n); });
    gl.enable(gl.DEPTH_TEST); gl.clearColor(SKY[0], SKY[1], SKY[2], 1);
    return true;
  }
  function upload(mesh) {
    var b = { p: gl.createBuffer(), n: gl.createBuffer(), c: gl.createBuffer(), count: mesh.p.length / 3 };
    gl.bindBuffer(gl.ARRAY_BUFFER, b.p); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.p), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, b.n); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.n), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, b.c); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.c), gl.STATIC_DRAW);
    return b;
  }
  function drawBuf(b) {
    if (!b || !b.count) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, b.p); gl.enableVertexAttribArray(A.aPos); gl.vertexAttribPointer(A.aPos, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, b.n); gl.enableVertexAttribArray(A.aNor); gl.vertexAttribPointer(A.aNor, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, b.c); gl.enableVertexAttribArray(A.aCol); gl.vertexAttribPointer(A.aCol, 3, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, b.count);
  }

  /* Couche « photos » : tiges + cônes de direction */
  function photoPos(i) {
    var ph = photos[i], p = ph.pos, X = p.v, Z = -p.u, g = heightAt(X, Z), eye = p.h != null ? p.h : g + 1.7;
    return { X: X, Z: Z, g: g, eye: eye, head: eye + 7 };
  }
  function buildOverlay() {
    var m = new Mesh(), yel = [1, 0.8, 0.12];
    photos.forEach(function (ph, i) {
      if (!ph.pos) return;
      var q = photoPos(i), sel = i === selected, col = sel ? [0.2, 0.9, 0.85] : yel;
      if (sel && (cam.mode === 'walk' || (cam.anim && cam.anim.dest.mode === 'walk'))) return;
      box(m, q.X - 0.55, q.X + 0.55, q.g, q.head, q.Z - 0.55, q.Z + 0.55, col, col);
      if (ph.pos.dir != null) {
        var y0 = ph.pos.dir * Math.PI / 180, half = 0.42, len = sel ? 75 : 55, seg = 8, apex = [q.X, q.eye, q.Z], prev = null;
        for (var s = 0; s <= seg; s++) { var a = y0 - half + (2 * half) * s / seg, pt = [q.X + Math.sin(a) * len, q.eye, q.Z - Math.cos(a) * len];
          if (prev) m.tri(apex, prev, pt, col, [q.X, q.eye - 5, q.Z]); prev = pt; }
      }
    });
    ovMesh = m;
    if (gl) { ovBuf = upload(m); }
  }
  /* ------------------------------------------------------------------ */
  /* Rendu                                                               */
  /* ------------------------------------------------------------------ */
  function resize() {
    if (!stageEl) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = stageEl.clientWidth || 1; H = stageEl.clientHeight || 1;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    dirty = true;
  }
  function currentPose(now) {
    if (cam.anim) {
      var a = cam.anim, t = clamp((now - a.t0) / a.dur, 0, 1), e = ease(t), f = a.from, to = a.to;
      var pose = { x: lerp(f.x, to.x, e), y: lerp(f.y, to.y, e), z: lerp(f.z, to.z, e), yaw: f.yaw + angDiff(f.yaw, to.yaw) * e,
        pitch: lerp(f.pitch, to.pitch, e), dist: lerp(f.dist, to.dist, e) };
      if (t >= 1) { finishAnim(); }
      return pose;
    }
    return eyeOf(cam);
  }
  function finishAnim() {
    var d = cam.anim.dest; cam.anim = null;
    cam.mode = d.mode; cam.yaw = d.yaw; cam.pitch = d.pitch;
    if (d.mode === 'walk') { cam.pos = d.pos.slice(); walkY = d.pos[1]; } else { cam.t = d.t.slice(); cam.d = d.d; }
    syncUI();
  }
  function flyTo(dest, dur) {
    var from = eyeOf(cam), tmp = { mode: dest.mode, yaw: dest.yaw, pitch: dest.pitch, t: dest.t, d: dest.d, pos: dest.pos };
    var to = eyeOf(tmp);
    var dist = Math.hypot(to.x - from.x, to.y - from.y, to.z - from.z);
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    cam.anim = { from: from, to: to, dest: dest, t0: performance.now(), dur: reduce ? 1 : clamp(500 + dist * 0.35, 600, 1800) };
    if (dest.mode === 'walk') { syncUI(); }
    dirty = true; loop();
  }

  function draw(now) {
    var dt = Math.min(0.05, (now - lastT) / 1000 || 0.016); lastT = now;
    // déplacements clavier / boutons
    if (!cam.anim) stepControls(dt);
    var p = currentPose(now); lastPose = p; eyeNow = [p.x, p.y, p.z];
    var f = fwd(p.yaw, p.pitch), aspect = W / H;
    var near = cam.anim || cam.mode === 'orbit' ? clamp(p.dist * 0.03, 1, 120) : 0.8, far = 24000;
    var proj = M.persp(1.0, aspect, near, far), view = M.look([p.x, p.y, p.z], [p.x + f[0], p.y + f[1], p.z + f[2]], [0, 1, 0]);
    VP = M.mul(proj, view); iVP = M.inv(VP);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.uniformMatrix4fv(U.uVP, false, new Float32Array(VP)); gl.uniform3f(U.uEye, p.x, p.y, p.z);
    gl.uniform3f(U.uFogCol, SKY[0], SKY[1], SKY[2]);
    gl.uniform1f(U.uFog, cam.mode === 'walk' ? 1.5e-4 : 0.9e-4);
    gl.uniform1f(U.uLit, 1); gl.uniform1f(U.uAlpha, 1);
    gl.disable(gl.BLEND); gl.depthMask(true);
    drawBuf(sceneBuf);
    if (showPins && ovBuf) {
      gl.uniform1f(U.uLit, 0); gl.uniform1f(U.uAlpha, cam.mode === 'walk' ? 0.22 : 0.5);
      gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); gl.depthMask(false);
      drawBuf(ovBuf); gl.depthMask(true); gl.disable(gl.BLEND);
    }
    updateOverlay(p);
  }

  function project(x, y, z) {
    var c = M.xform(VP, x, y, z, 1);
    if (c[3] <= 0.01) return null;
    var nx = c[0] / c[3], ny = c[1] / c[3], nz = c[2] / c[3];
    if (nz > 1 || nz < -1) return null;
    return { x: (nx * 0.5 + 0.5) * W, y: (1 - (ny * 0.5 + 0.5)) * H, w: c[3] };
  }
  function updateOverlay(p) {
    var i, s;
    for (i = 0; i < pinEls.length; i++) {
      var el = pinEls[i]; if (!el) continue;
      var q = photoPos(i); s = showPins ? project(q.X, q.head, q.Z) : null;
      if (!s || s.x < -40 || s.x > W + 40 || s.y < -40 || s.y > H + 40) { el.style.display = 'none'; continue; }
      el.style.display = ''; el.style.transform = 'translate(' + s.x.toFixed(1) + 'px,' + s.y.toFixed(1) + 'px)';
      el.style.zIndex = String(Math.max(2, 900 - Math.round(s.w / 6))); if (i === selected) el.style.zIndex = 5000;
      el.classList.toggle('flip', s.y < 150); el.classList.toggle('right', s.x > W - 160); el.classList.toggle('left', s.x < 160);
    }
    for (i = 0; i < labelEls.length; i++) {
      var mo = MON[i], lb = labelEls[i], sp = project(mo.v, mo.y, -mo.u);
      var dist = sp ? sp.w : 1e9, hide = !sp || (mo.minor && dist > 1400 && cam.mode !== 'walk') || (cam.mode === 'walk' && dist > 900);
      if (mo.id === 'cerro' && cam.mode !== 'walk' && dist < 1500) hide = true;
      if (hide || sp.x < -60 || sp.x > W + 60 || sp.y < -30 || sp.y > H + 30) { lb.style.display = 'none'; continue; }
      lb.style.display = ''; lb.style.transform = 'translate(' + sp.x.toFixed(1) + 'px,' + sp.y.toFixed(1) + 'px)';
      lb.style.zIndex = String(Math.max(1, 400 - Math.round(dist / 10)));
    }
    // boussole : le nord vrai est à 15,5° à gauche de l'axe de l'avenue
    if (compassEl) compassEl.firstElementChild.style.transform = 'rotate(' + (-AXIS_DEG - p.yaw * 180 / Math.PI).toFixed(1) + 'deg)';
  }

  function loop() {
    if (raf || !isOpen) return;
    raf = requestAnimationFrame(function tick(now) {
      raf = 0; if (!isOpen) return;
      draw(now);
      var moving = cam.anim || Object.keys(held).length || anyKey();
      if (moving || dirty) { dirty = false; raf = requestAnimationFrame(tick); }
    });
  }
  function anyKey() { for (var k in keys) if (keys[k]) return true; return false; }

  /* ------------------------------------------------------------------ */
  /* Contrôles                                                           */
  /* ------------------------------------------------------------------ */
  function stepControls(dt) {
    if (cam.mode === 'walk') {
      var sp = (keys.shift ? 90 : 26) * dt, fx = Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = Math.sin(cam.yaw), mv = 0, st = 0;
      if (keys.w || keys.up || held.fwd) mv += 1; if (keys.s || keys.down || held.back) mv -= 1;
      if (keys.d) st += 1; if (keys.a) st -= 1;
      if (keys.left) { cam.yaw -= 1.4 * dt; } if (keys.right) { cam.yaw += 1.4 * dt; }
      if (mv || st) { cam.pos[0] = clamp(cam.pos[0] + (fx * mv + rx * st) * sp, -5000, 5000); cam.pos[2] = clamp(cam.pos[2] + (fz * mv + rz * st) * sp, -5000, 5000); }
      var ty = heightAt(cam.pos[0], cam.pos[2]) + 1.75; walkY += (ty - walkY) * Math.min(1, dt * 9); cam.pos[1] = walkY;
    } else {
      if (keys.left) cam.yaw -= 1.1 * dt; if (keys.right) cam.yaw += 1.1 * dt;
      if (keys.up) cam.pitch = clamp(cam.pitch + 0.8 * dt, -1.5, -0.03); if (keys.down) cam.pitch = clamp(cam.pitch - 0.8 * dt, -1.5, -0.03);
      if (keys.plus || held.zin) cam.d = clamp(cam.d * Math.exp(-1.6 * dt), 15, 5000); if (keys.minus || held.zout) cam.d = clamp(cam.d * Math.exp(1.6 * dt), 15, 5000);
    }
  }

  function setupPointer() {
    var pts = {}, n = 0, last = null, pinch = 0, mid = null, moved = 0, downAt = 0, btn = 0, shift = false;
    function pan(dx, dy) {
      var k = cam.d * 0.0019, r = [Math.cos(cam.yaw), Math.sin(cam.yaw)], f = [Math.sin(cam.yaw), -Math.cos(cam.yaw)];
      cam.t[0] = clamp(cam.t[0] - r[0] * dx * k + f[0] * dy * k, -5000, 5000); cam.t[2] = clamp(cam.t[2] - r[1] * dx * k + f[1] * dy * k, -5000, 5000);
    }
    canvas.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    canvas.addEventListener('pointerdown', function (e) {
      if (cam.anim) interruptAnim();
      pts[e.pointerId] = { x: e.clientX, y: e.clientY }; n = Object.keys(pts).length;
      canvas.setPointerCapture(e.pointerId); last = { x: e.clientX, y: e.clientY }; moved = 0; downAt = performance.now(); btn = e.button; shift = e.shiftKey;
      if (n === 2) { var a = Object.keys(pts).map(function (k) { return pts[k]; }); pinch = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); mid = { x: (a[0].x + a[1].x) / 2, y: (a[0].y + a[1].y) / 2 }; }
      canvas.classList.add('drag'); dirty = true; loop();
    });
    canvas.addEventListener('pointermove', function (e) {
      if (!pts[e.pointerId]) return; pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      if (n >= 2) {
        var a = Object.keys(pts).map(function (k) { return pts[k]; }), d = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y), m2 = { x: (a[0].x + a[1].x) / 2, y: (a[0].y + a[1].y) / 2 };
        if (cam.mode === 'orbit') { if (pinch) cam.d = clamp(cam.d * pinch / d, 15, 5000); if (mid) pan(m2.x - mid.x, m2.y - mid.y); }
        else if (pinch) { moveForward((d - pinch) * 0.4); }
        pinch = d; mid = m2; moved += 20; dirty = true; loop(); return;
      }
      var dx = e.clientX - last.x, dy = e.clientY - last.y; moved += Math.abs(dx) + Math.abs(dy); last = { x: e.clientX, y: e.clientY };
      if (cam.mode === 'walk') { cam.yaw -= dx * 0.0035; cam.pitch = clamp(cam.pitch + dy * 0.0035, -1.4, 1.4); }
      else if (btn === 2 || shift || e.shiftKey) pan(dx, dy);
      else { cam.yaw += dx * 0.005; cam.pitch = clamp(cam.pitch - dy * 0.0042, -1.5, -0.03); }
      dirty = true; loop();
    });
    function up(e) {
      if (!pts[e.pointerId]) return; delete pts[e.pointerId]; n = Object.keys(pts).length; pinch = 0; mid = null;
      if (n === 1) { var k = Object.keys(pts)[0]; last = { x: pts[k].x, y: pts[k].y }; }
      if (n === 0) {
        canvas.classList.remove('drag');
        if (EDIT && moved < 6 && performance.now() - downAt < 400) editClick(e);
      }
    }
    canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('wheel', function (e) {
      e.preventDefault(); if (cam.anim) return;
      if (cam.mode === 'walk') moveForward(-e.deltaY * 0.06);
      else cam.d = clamp(cam.d * Math.exp(e.deltaY * 0.0012), 15, 5000);
      dirty = true; loop();
    }, { passive: false });
  }
  function interruptAnim() {
    var d = cam.anim.dest, p = lastPose || eyeOf(cam); cam.anim = null;
    cam.yaw = p.yaw; cam.pitch = p.pitch;
    if (d.mode === 'walk') { cam.mode = 'walk'; cam.pos = [p.x, p.y, p.z]; walkY = p.y; }
    else { var f = fwd(p.yaw, p.pitch), dd = clamp(p.dist, 15, 5000); cam.mode = 'orbit'; cam.d = dd; cam.t = [p.x + f[0] * dd, p.y + f[1] * dd, p.z + f[2] * dd]; }
    syncUI();
  }
  function moveForward(dist) {
    cam.pos[0] += Math.sin(cam.yaw) * dist; cam.pos[2] += -Math.cos(cam.yaw) * dist; dirty = true;
  }
  function onKey(e, down) {
    if (!isOpen || document.querySelector('.gv.open')) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName || '')) return;
    var k = e.key, map = { w: 'w', z: 'w', W: 'w', Z: 'w', s: 's', S: 's', a: 'a', q: 'a', A: 'a', Q: 'a', d: 'd', D: 'd',
      ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', '+': 'plus', '=': 'plus', '-': 'minus', Shift: 'shift' };
    var name = map[k]; if (!name) return;
    if (cam.mode === 'orbit' && (name === 'w' || name === 's' || name === 'a' || name === 'd')) return;
    if (cam.mode === 'walk' && (name === 'plus' || name === 'minus')) return;
    e.preventDefault(); keys[name] = down; if (down) { dirty = true; loop(); }
  }
  document.addEventListener('keydown', function (e) {
    if (isOpen && e.key === 'Escape' && !document.querySelector('.gv.open')) { e.preventDefault(); close(); return; }
    onKey(e, true);
  });
  document.addEventListener('keyup', function (e) { onKey(e, false); });

  /* ------------------------------------------------------------------ */
  /* Interface                                                           */
  /* ------------------------------------------------------------------ */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function buildDOM() {
    root = document.createElement('div');
    root.className = 't3'; root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true');
    root.innerHTML =
      '<div class="t3-bar">' +
        '<div class="t3-title"><strong data-k="title"></strong><small data-k="sub"></small></div>' +
        '<div class="t3-views"></div>' +
        '<div class="t3-tools">' +
          '<button type="button" class="t3-tog" data-tool="pins" aria-pressed="true"><span class="ico">📷</span><span data-k="photos"></span></button>' +
          '<button type="button" class="t3-tog" data-tool="walk" aria-pressed="false"><span class="ico">🚶</span><span data-k="walk"></span></button>' +
          '<button type="button" class="t3-x" data-tool="close">×</button>' +
        '</div>' +
      '</div>' +
      '<div class="t3-stage">' +
        '<canvas></canvas><div class="t3-over"></div>' +
        '<div class="t3-compass"><svg viewBox="0 0 40 40" width="46" height="46"><g><polygon points="20,3 26,22 20,18 14,22" fill="#f7c948"/><polygon points="20,37 14,22 20,26 26,22" fill="#777"/></g><circle cx="20" cy="20" r="18" fill="none" stroke="#f7c948" stroke-opacity=".5"/></svg><span data-k="north"></span></div>' +
        '<div class="t3-zoom"><button type="button" data-hold="zin">+</button><button type="button" data-hold="zout">−</button></div>' +
        '<div class="t3-walkpad"><button type="button" data-hold="fwd">▲</button><button type="button" data-hold="back">▼</button></div>' +
        '<div class="t3-hint"></div><div class="t3-note" data-k="note"></div>' +
        '<div class="t3-card"></div><div class="t3-nogl"></div>' +
      '</div>' +
      '<div class="t3-strip"></div>';
    document.body.appendChild(root);
    canvas = root.querySelector('canvas'); stageEl = root.querySelector('.t3-stage'); over = root.querySelector('.t3-over');
    cardEl = root.querySelector('.t3-card'); hintEl = root.querySelector('.t3-hint'); compassEl = root.querySelector('.t3-compass'); walkPad = root.querySelector('.t3-walkpad');

    // vues prédéfinies
    var vh = ''; [['overview', 'overview'], ['avenue', 'avenue'], ['sun', 'sun'], ['moon', 'moon'], ['citadel', 'citadel']].forEach(function (p) {
      vh += '<button type="button" class="t3-view" data-view="' + p[0] + '" data-k="' + p[1] + '"></button>'; });
    root.querySelector('.t3-views').innerHTML = vh;
    root.querySelectorAll('[data-view]').forEach(function (b) { b.addEventListener('click', function () { var v = VIEWS[b.dataset.view]; flyTo({ mode: 'orbit', t: viewTarget(v), d: v.d, yaw: v.yaw, pitch: v.pitch }); selMon = null; showCard(null); }); });
    root.querySelector('[data-tool="close"]').addEventListener('click', function () { close(); });
    root.querySelector('[data-tool="pins"]').addEventListener('click', function (e) { showPins = !showPins; e.currentTarget.setAttribute('aria-pressed', showPins); over.classList.toggle('nopins', !showPins); strip.classList.toggle('hidden', !showPins); dirty = true; loop(); });
    root.querySelector('[data-tool="walk"]').addEventListener('click', function () { toggleWalk(); });
    root.querySelectorAll('[data-hold]').forEach(function (b) {
      var k = b.dataset.hold;
      function on(e) { e.preventDefault(); held[k] = true; b.classList.add('on'); dirty = true; loop(); }
      function off() { delete held[k]; b.classList.remove('on'); }
      b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointerleave', off); b.addEventListener('pointercancel', off);
    });

    // étiquettes des monuments
    MON.forEach(function (mo, i) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 't3-label' + (mo.main ? ' main' : '') + (mo.minor ? ' minor' : '');
      b.innerHTML = '<span></span>'; b.addEventListener('click', function () { selectMonument(i); });
      over.appendChild(b); labelEls.push(b);
    });
    // points-photos
    photos.forEach(function (ph, i) {
      if (!ph.pos) { pinEls.push(null); return; }
      var b = document.createElement('button'); b.type = 'button'; b.className = 't3-pin';
      b.innerHTML = '<span class="dot">' + (i + 1) + '</span><span class="tip"><img alt="" src="' + esc(ph.thumb || ph.src) + '"><span class="tt"></span></span>';
      b.addEventListener('click', function (e) { e.stopPropagation(); onPin(i, b); });
      over.appendChild(b); pinEls.push(b);
    });
    // bande de vignettes
    var st = root.querySelector('.t3-strip'); window.__t3strip = st;
    photos.forEach(function (ph, i) {
      if (!ph.pos) { stripEls.push(null); return; }
      var b = document.createElement('button'); b.type = 'button'; b.className = 't3-th'; b.innerHTML = '<img alt="" src="' + esc(ph.thumb || ph.src) + '"><span>' + (i + 1) + '</span>';
      b.addEventListener('click', function () { selectPhoto(i, true); }); st.appendChild(b); stripEls.push(b);
    });
    if (EDIT) buildEditor();
  }
  var strip = { classList: { toggle: function (c, on) { var s = window.__t3strip; if (s) s.classList.toggle(c, on); } } };

  function texts() {
    root.querySelectorAll('[data-k]').forEach(function (el) { el.textContent = L(el.dataset.k); });
    root.querySelector('[data-tool="close"]').setAttribute('aria-label', L('close'));
    root.querySelector('[data-hold="zin"]').setAttribute('aria-label', L('zoomIn')); root.querySelector('[data-hold="zout"]').setAttribute('aria-label', L('zoomOut'));
    root.querySelector('[data-hold="fwd"]').setAttribute('aria-label', L('forward')); root.querySelector('[data-hold="back"]').setAttribute('aria-label', L('back'));
    root.setAttribute('aria-label', L('title'));
    MON.forEach(function (mo, i) { labelEls[i].firstChild.textContent = pick(mo.name); });
    photos.forEach(function (ph, i) { if (!pinEls[i]) return; var t = pickCaption(ph) || ph.alt || ''; pinEls[i].querySelector('.tt').textContent = t; pinEls[i].setAttribute('aria-label', L('photo') + ' ' + (i + 1) + (t ? ' — ' + t : '')); });
    syncUI();
  }
  function pickCaption(ph) { var c = ph.caption || {}; return (c[currentLang] || c.fr || '').trim(); }
  function touchDevice() { return window.matchMedia && window.matchMedia('(pointer:coarse)').matches; }
  function syncUI() {
    var walk = cam.mode === 'walk' || (cam.anim && cam.anim.dest.mode === 'walk');
    root.classList.toggle('walking', !!walk);
    root.querySelector('[data-tool="walk"] span:last-child').textContent = walk ? L('aerial') : L('walk');
    root.querySelector('[data-tool="walk"] .ico').textContent = walk ? '🛰' : '🚶';
    root.querySelector('[data-tool="walk"]').setAttribute('aria-pressed', walk ? 'true' : 'false');
    if (gl && ovBuf) buildOverlay();
    hintEl.textContent = walk ? L('hintWalk') : (touchDevice() ? L('hintTouch') : L('hintOrbit'));
  }
  function toggleWalk() {
    if (cam.mode === 'walk' && !cam.anim) {
      var f = fwd(cam.yaw, 0), t = [cam.pos[0] + f[0] * 130, 0, cam.pos[2] + f[2] * 130];
      flyTo({ mode: 'orbit', t: t, d: 300, yaw: cam.yaw, pitch: -0.5 });
    } else {
      // se poser au pied du point visé
      var e = eyeOf(cam), tx = cam.t[0], tz = cam.t[2], g = heightAt(tx, tz);
      flyTo({ mode: 'walk', pos: [tx, g + 1.75, tz], yaw: cam.yaw, pitch: -0.03 });
    }
  }
  function showCard(html) {
    if (!html) { cardEl.classList.remove('show'); return; }
    cardEl.innerHTML = html + '<button type="button" class="c-x" aria-label="' + esc(L('close')) + '">×</button>';
    cardEl.classList.add('show');
    cardEl.querySelector('.c-x').addEventListener('click', function () { showCard(null); selMon = null; if (selected >= 0) { selected = -1; refreshSel(); } });
    return cardEl;
  }
  function selectMonument(i) {
    var mo = MON[i]; selMon = i; selected = -1; refreshSel();
    var html = '<div class="c-body"><h4>' + esc(pick(mo.name)) + '</h4><p>' + esc(pick(mo.desc)) + '</p>' +
      '<div class="c-act"><button type="button" data-a="fly">' + esc(L('explore')) + '</button>' + (mo.walk ? '<button type="button" data-a="walk">🚶 ' + esc(L('walkHere')) + '</button>' : '') + '</div></div>';
    showCard(html);
    cardEl.querySelector('[data-a="fly"]').addEventListener('click', function () { flyMon(mo); });
    var w = cardEl.querySelector('[data-a="walk"]'); if (w) w.addEventListener('click', function () { walkTo(mo.walk.u, mo.walk.v, mo.walk.dir); });
    flyMon(mo);
  }
  function flyMon(mo) {
    var g = groundAt(mo.u, mo.v);
    flyTo({ mode: 'orbit', t: [mo.v, Math.max(g, mo.y * 0.35), -mo.u], d: mo.d, yaw: mo.yaw != null ? mo.yaw : cam.yaw, pitch: mo.pitch != null ? mo.pitch : -0.4 });
  }
  function walkTo(u, v, dirDeg) {
    var p = P(u, v), g = heightAt(p[0], p[1]);
    flyTo({ mode: 'walk', pos: [p[0], g + 1.75, p[1]], yaw: (dirDeg || 0) * Math.PI / 180, pitch: -0.03 });
  }
  function refreshSel() {
    pinEls.forEach(function (el, i) { if (el) el.classList.toggle('on', i === selected); });
    stripEls.forEach(function (el, i) { if (el) el.classList.toggle('on', i === selected); });
    if (ovMesh || gl) buildOverlay(); dirty = true; loop();
  }
  function selectPhoto(i, fly) {
    var ph = photos[i]; if (!ph || !ph.pos) return; selected = i; selMon = null; refreshSel();
    var t = pickCaption(ph) || ph.alt || '', q = photoPos(i);
    var html = '<div class="c-photo"><img alt="" src="' + esc(ph.thumb || ph.src) + '"><div class="c-body"><h4>' + esc(L('photo')) + ' ' + (i + 1) + ' ' + esc(L('of')) + ' ' + photos.length + '</h4><p>' + esc(t) + '</p>' +
      '<div class="c-act"><button type="button" data-a="open">🖼 ' + esc(L('openPhoto')) + '</button><button type="button" data-a="view">👁 ' + esc(L('viewFrom')) + '</button></div></div></div>';
    showCard(html);
    cardEl.querySelector('[data-a="open"]').addEventListener('click', function () { openPhoto(i, this); });
    cardEl.querySelector('[data-a="view"]').addEventListener('click', function () { viewFromPhoto(i); });
    var se = stripEls[i]; if (se && se.scrollIntoView) { var st = se.parentNode; st.scrollTo({ left: se.offsetLeft - st.clientWidth / 2 + se.clientWidth / 2, behavior: 'smooth' }); }
    if (fly) {
      if (cam.mode === 'walk') viewFromPhoto(i);
      else flyTo({ mode: 'orbit', t: [q.X, q.g, q.Z], d: 170, yaw: cam.yaw, pitch: -0.5 });
    }
  }
  function viewFromPhoto(i) {
    var ph = photos[i], q = photoPos(i);
    flyTo({ mode: 'walk', pos: [q.X, q.eye, q.Z], yaw: (ph.pos.dir != null ? ph.pos.dir : 0) * Math.PI / 180, pitch: -0.03 });
  }
  function openPhoto(i, trigger) {
    if (typeof window.openGallery === 'function') window.openGallery(GID, trigger || root, i);
  }
  function onPin(i, el) {
    if (EDIT) { selectPhoto(i, false); editSelect(i); return; }
    selectPhoto(i, false);
    openPhoto(i, el);
  }

  /* ---- éditeur de positions (?editer3d) ---- */
  var edEl, edSel = 0;
  function buildEditor() {
    edEl = document.createElement('div'); edEl.className = 't3-edit';
    edEl.innerHTML = '<strong>' + esc(L('editTitle')) + '</strong><p>' + esc(L('editHelp')) + '</p>' +
      '<select></select><label>u <input type="number" data-f="u"></label><label>v <input type="number" data-f="v"></label><label>' + esc(L('dir')) + ' <input type="number" data-f="dir"></label>' +
      '<button type="button" data-a="copy">' + esc(L('copy')) + '</button><textarea readonly rows="6"></textarea>';
    root.querySelector('.t3-stage').appendChild(edEl);
    var sel = edEl.querySelector('select');
    photos.forEach(function (ph, i) { if (!ph.pos) return; var o = document.createElement('option'); o.value = i; o.textContent = (i + 1) + ' — ' + (ph.alt || '').slice(0, 40); sel.appendChild(o); });
    sel.addEventListener('change', function () { editSelect(+sel.value); selectPhoto(+sel.value, true); });
    edEl.querySelectorAll('input').forEach(function (inp) { inp.addEventListener('input', function () {
      var ph = photos[edSel]; if (!ph) return; var v = parseFloat(inp.value); if (isNaN(v)) return; ph.pos[inp.dataset.f] = v; refreshSel(); editOut(); }); });
    edEl.querySelector('[data-a="copy"]').addEventListener('click', function () { var ta = edEl.querySelector('textarea'); ta.select(); try { document.execCommand('copy'); } catch (e) {} this.textContent = L('copied'); var b = this; setTimeout(function () { b.textContent = L('copy'); }, 1500); });
    editSelect(photos.findIndex(function (p) { return p.pos; })); editOut();
  }
  function editSelect(i) {
    if (!edEl || i < 0) return; edSel = i; var ph = photos[i]; edEl.querySelector('select').value = i;
    edEl.querySelector('[data-f="u"]').value = Math.round(ph.pos.u); edEl.querySelector('[data-f="v"]').value = Math.round(ph.pos.v); edEl.querySelector('[data-f="dir"]').value = ph.pos.dir != null ? Math.round(ph.pos.dir) : '';
  }
  function editOut() {
    if (!edEl) return;
    edEl.querySelector('textarea').value = photos.map(function (ph, i) { if (!ph.pos) return ''; var p = ph.pos;
      return '// photo ' + (i + 1) + '\npos: { u: ' + Math.round(p.u) + ', v: ' + Math.round(p.v) + (p.dir != null ? ', dir: ' + Math.round(p.dir) : '') + (p.h != null ? ', h: ' + p.h : '') + ' },'; }).join('\n');
  }
  function editClick(e) {
    var r = canvas.getBoundingClientRect(), nx = ((e.clientX - r.left) / r.width) * 2 - 1, ny = 1 - ((e.clientY - r.top) / r.height) * 2;
    var a = M.xform(iVP, nx, ny, -1, 1), b = M.xform(iVP, nx, ny, 1, 1), p0 = [a[0] / a[3], a[1] / a[3], a[2] / a[3]], p1 = [b[0] / b[3], b[1] / b[3], b[2] / b[3]];
    var dy = p1[1] - p0[1]; if (Math.abs(dy) < 1e-9) return; var t = -p0[1] / dy; if (t < 0) return;
    var X = p0[0] + (p1[0] - p0[0]) * t, Z = p0[2] + (p1[2] - p0[2]) * t, ph = photos[edSel]; if (!ph) return;
    ph.pos.u = -Z; ph.pos.v = X; editSelect(edSel); editOut(); refreshSel();
  }

  /* ------------------------------------------------------------------ */
  /* Ouverture / fermeture                                               */
  /* ------------------------------------------------------------------ */
  function loadPhotos() {
    var g = (typeof GALLERIES !== 'undefined' && GALLERIES[GID]) ? GALLERIES[GID].photos : [];
    photos = g;
  }
  function open(trigger) {
    loadPhotos(); lastFocus = trigger || document.activeElement;
    if (!built) {
      buildDOM();
      var ok = false;
      try { ok = initGL(); } catch (err) { ok = false; if (window.console) console.error(err); }
      if (!ok) { root.querySelector('.t3-nogl').textContent = L('noWebgl'); root.classList.add('nogl'); }
      else { var mesh = buildScene(); sceneBuf = upload(mesh); sceneCount = mesh.p.length / 3; buildOverlay(); setupPointer(); }
      new (window.ResizeObserver || function () { return { observe: function () { window.addEventListener('resize', resize); } }; })(function () { resize(); }).observe(stageEl);
      built = true;
    }
    texts();
    root.classList.add('open'); isOpen = true; document.body.classList.add('t3-open'); document.body.style.overflow = 'hidden';
    try { history.pushState({ t3: 1 }, ''); pushed = true; } catch (e) { pushed = false; }
    if (gl) {
      var v = VIEWS.overview; cam.mode = 'orbit'; cam.anim = null; cam.t = viewTarget(v); cam.d = v.d * 1.5; cam.yaw = v.yaw - 0.5; cam.pitch = -1.0;
      resize(); dirty = true; loop();
      setTimeout(function () { if (isOpen) flyTo({ mode: 'orbit', t: viewTarget(v), d: v.d, yaw: v.yaw, pitch: v.pitch }, 1); }, 60);
    }
    root.querySelector('[data-tool="close"]').focus({ preventScroll: true });
  }
  function close(fromPop) {
    if (!isOpen) return; isOpen = false; root.classList.remove('open'); keys = {}; held = {};
    document.body.classList.remove('t3-open'); document.body.style.overflow = '';
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    if (pushed && !fromPop) { pushed = false; try { history.back(); } catch (e) {} }
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  window.addEventListener('popstate', function (e) { if (isOpen && !(e.state && e.state.t3)) { pushed = false; close(true); } });

  window.Teo3D = { open: open, close: close, _dbg: function () { return { cam: cam, heightAt: heightAt, photos: photos }; } };
})();
