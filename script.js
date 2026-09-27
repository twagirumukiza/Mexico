/* ============================================
   CARTE DE VOYAGE — TWAGIRUMUKIZA
   Interactive map, i18n, theme, font size
   ============================================ */

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.map": "Carte",
    "nav.itinerary": "Itinéraire",
    "nav.stories": "Récits",
    "nav.about": "À propos",
    "nav.stages": "Étapes du voyage",
    "hero.subtitle": "Août – Septembre 2010",
    "hero.title": "Carnet de Voyage<br>Mexique • Guatemala • Belize",
    "hero.desc": "2 620 km d'aventures, de rencontres et de merveilles à travers l'Amérique centrale.",
    "hero.cta": "Explorer la carte",
    "map.title": "Carte Interactive",
    "map.desc": "Cliquez sur une ville visitée pour découvrir le récit de cette étape.",
    "popup.see": "Voir le récit complet",
    "map.hint": "Ctrl + molette ou boutons + / − pour zoomer • glisser pour se déplacer",
    "poster.title": "Le voyage en un coup d'œil",
    "poster.desc": "Toutes les étapes, les distances et les photos sur une seule carte. Cliquez pour l'agrandir et zoomer.",
    "poster.zoom": "Cliquer pour zoomer",
    "poster.hint": "Molette ou boutons pour zoomer • glisser pour se déplacer • double-clic pour zoomer",
    "gallery.mexico.btn": "Voir les photos de Mexico City",
    "gallery.photos": "photos",
    "gallery.close": "Fermer",
    "gallery.prev": "Photo précédente",
    "gallery.next": "Photo suivante",
    "gallery.zoomin": "Zoom avant",
    "gallery.zoomout": "Zoom arrière",
    "gallery.fit": "Taille d'origine (ajuster)",
    "gallery.photo": "Photo",
    "gallery.mexico.title": "Photos de Mexico City",
    "gallery.teotihuacan.btn": "Voir les photos de Teotihuacán",
    "gallery.oaxaca.btn": "Voir les photos d'Oaxaca",
    "gallery.montealban.btn": "Voir les photos de Monte Albán",
    "t3.btn": "Explorer Teotihuacán en 3D",
    "t3.montealban.btn": "Explorer Monte Albán en 3D",
      "t3.palenque.btn": "Explorer Palenque en 3D",
    "gallery.teotitlan.btn": "Voir les photos de Teotitlán del Valle",
    "gallery.puertoescondido.btn": "Voir les photos de Puerto Escondido",
    "gallery.mazunte.btn": "Voir les photos de Mazunte",
    "gallery.sancristobal.btn": "Voir les photos de San Cristóbal",
    "gallery.palenque.btn": "Voir les photos de Palenque",

     "t3.tikal.btn": "Explorer Tikal en 3D",
    "t3.tulum.btn": "Explorer Tulum en 3D",
    "gallery.florestikal.btn": "Voir les photos de Flores & Tikal",
    "gallery.belize.btn": "Voir les photos du Belize",
    "gallery.tulum.btn": "Voir les photos de Tulum",
    "gallery.cancun.btn": "Voir les photos de Cancún",
    "t3.sub": "Carte 3D interactive avec les points-photos",
    "gallery.hint": "← → naviguer • molette ou pincer pour zoomer • double-clic • Échap pour fermer",
    "itinerary.title": "Itinéraire",
    "itinerary.km": "Kilomètres",
    "itinerary.days": "Jours",
    "itinerary.countries": "Pays",
    "itin.mexico": "Arrivée, Teotihuacán, Coyoacán, Chapultepec, métro & nuit Condesa",
    "itin.oaxaca": "Oaxaca, Monte Albán, Teotitlán, Puerto Escondido, Mazunte",
    "itin.chiapas": "San Cristóbal, Agua Azul, Mizol-Ha, checkpoint zapatiste, Palenque",
    "itin.guatemala": "Traversée río Suchiate, Flores, Tikal",
    "itin.belize": "Passage frontière & route vers le Yucatán",
    "itin.yucatan": "Tulum, ruines, plages & Cancún",
    "stories.title": "Récits du voyage",
    "about.title": "À propos",
    "about.text": "Ce carnet de voyage retrace l'aventure de 2 620 km à travers le Mexique, le Guatemala et le Belize en août-septembre 2010. Rencontres humaines, sites archéologiques majestueux, plages turbulentes et jungle mystérieuse… autant de souvenirs gravés à jamais.",
    "about.prague": "Si le Mexique vous a plu, poursuivez le voyage : un week-end à Prague — pavés, légendes et une autre façon de ressentir une ville.",
    "mobile.elsewhere": "Ailleurs",
    "footer.note": "Site réalisé avec passion",
    // Mexico City
    "mc.arrival": "Arrivée",
    "mc.p1": "Après un long vol, nous avons enfin atterri à Mexico City, le cœur palpitant du Mexique. L'air chargé de la mégapole nous a frappés dès la sortie de l'aéroport.",
    "mc.housing": "Hébergement",
    "mc.p2": "Nous avons été accueillis par Claire et Cynthia, qui nous ont généreusement offert l'hospitalité dans leur appartement.",
    "mc.outing": "Sortie",
    "mc.p3": "Pour notre première soirée, nous nous sommes rendus à la Cantina de los Remedios, un endroit emblématique où nous avons dégusté des plats traditionnels mexicains dans une ambiance conviviale.",
    "mc.p4": "Ce jour-là, nous nous sommes aventurés dans l'ancienne cité de Teotihuacán. Marcher sur l'Avenue des Morts et gravir la Pyramide du Soleil ont été des moments inoubliables. Nous avons parcouru 40 km depuis Mexico City.",
    "mc.slums": "Bidonvilles",
    "mc.p5": "Plus tard, nous avons visité certains bidonvilles de Mexico. Cette expérience contrastante a révélé une autre facette de la ville, marquée par les difficultés mais aussi par la résilience des habitants.",
    "mc.p6": "Début de journée à Coyoacán : Plaza Hidalgo, Jardin del Centenario, Museo Frida Kahlo. Puis Plaza Garibaldi pour les mariachi, la Catedral Metropolitana, le quartier bohème de San Ángel et El Ángel de la Independencia.",
    "mc.p7": "Matinée au Bosque de Chapultepec : Monumento de los Niños Héroes et Museo Nacional de Antropología. Exploration du métro (wagons réservés aux femmes). Soirée au Bar Pride dans le quartier de Condesa.",
    "teo.p1": "L'un des sites archéologiques les plus impressionnants du Mexique. Marcher sur l'Avenue des Morts et gravir la Pyramide du Soleil restent des moments gravés à jamais. 40 km de Mexico City.",
    "oax.two-worlds": "Deux mondes se découvrent",
    "oax.p1": "Sur la route sinueuse d'Oaxaca, notre voyage nous conduit dans un petit village indien. Je réalise que je suis le seul noir dans cet endroit reculé. Peu à peu, un groupe d'Indiens se forme autour de moi, leurs yeux brillants d'une curiosité respectueuse. Ils me parlent dans leur langue, une mélodie douce mais incompréhensible. Je réponds en espagnol, mais ils ne comprennent pas.",
    "oax.p2": "Ils commencent à me toucher doucement, avec une sorte de vénération. Leurs mains effleurent mon bras, ma main. Aucune violence, seulement une curiosité pure, presque enfantine. L'un d'eux parvient enfin à dire en espagnol : « C'est la première fois que nous voyons un homme noir. » Ce moment, si simple et pourtant si intense, devient magique. Une véritable communion entre deux mondes.",
    "oax.housing": "Logement",
    "oax.p3": "Casa Paulina, une demeure au charme authentique.",
    "oax.visits": "Visites",
    "oax.p4": "Zócalo, Catedral de Nuestra Señora de la Asunción, Iglesia de Santo Domingo, Palacio de Gobierno, Mercado Juárez, Mercado de Artesanías et la coopérative MARO (300 femmes artisans).",
    "ma.p1": "L'un des sites archéologiques les plus emblématiques de la Méso-Amérique. Perchée sur une colline surplombant la vallée d'Oaxaca, cette ancienne cité zapotèque nous a transportés des siècles en arrière. Pyramides, terrasses et temples majestueux, érodés par le temps mais toujours impressionnants.",
    "teo2.p1": "Village célèbre pour ses tisserands. Chaque maison est un atelier où les mains expertes transforment la laine brute en tapis colorés selon des méthodes ancestrales. Visite du mercado de artesanías.",
    "pe.housing": "Logement",
    "pe.p1": "Mayflower Hotel, charmant établissement près des plages.",
    "pe.pacific": "Un océan Pacifique pas si pacifique…",
    "pe.p2": "À Playa Carrizalillo, sous un soleil éclatant, nous nous installons sur des transats près de la buvette. Les vagues chatouillent nos pieds. Je me dis naïvement : « S'ils ont mis les sièges ici, c'est que les vagues ne risquent pas de nous atteindre. »",
    "pe.p3": "À peine ai-je porté mon verre aux lèvres qu'une vague immense déferle. Tout est emporté : bancs, transats… et nous. Trempés jusqu'aux os, nous regagnons le rivage. Le tenancier reste impassible, récupère les sièges flottants et nous demande calmement si nous voulons « reprendre la même chose ».",
    "pe.p4": "Le lendemain, à Playa Principal, pour passer de l'autre côté, on nous indique d'escalader un rocher de 3 m. À peine descendu du premier rocher, une vague de plus de 4 m m'engloutit, me projette contre les rochers. Instinct de survie : je m'agrippe. Quand la mer se retire, je sors épuisé. Personne n'a bougé. « Ce Pacifique n'a de pacifique que le nom… Je crois bien qu'il ne m'aime pas. »",
    "maz.p1": "Sous le ciel étoilé, nous avons été témoins du majestueux rituel des tortues géantes venant déposer leurs œufs dans le sable doré.",
    "sc.housing": "Logement",
    "sc.p1": "Planet Hostel et Casa Carmelita.",
    "sc.visits": "Visites",
    "sc.p2": "Museo de las Culturas Populares de Chiapas, Casa del Jade, Mercado Municipal, Templo y Ex-Convento de Santo Domingo, Museo del Ámbar de Chiapas. Restaurants : Margarita, Todo Natural, Casa de Chiapas.",
    "sc.p3": "Cascades d'Agua Azul (eaux turquoise) et de Mizol-Ha. Sur la route de Palenque, barrage zapatiste : hommes cagoulés et armés demandent un « impôt révolutionnaire ». Fermes mais respectueux. Nous payons et continuons, conscients d'avoir touché l'âme résistante du Chiapas.",
    "pal.p1": "Un des plus beaux endroits du monde que j'aie jamais visités. Joyau niché au cœur de la jungle, lumière magique, temples majestueux.",
    "pal.mosquitoes": "L'attaque des moustiques",
    "pal.p2": "Erreur : short et manches courtes. Les moustiques de Palenque sont indifférents à la crème. Pourtant la soif de découverte l'emporte.",
    "pal.monkeys": "Des singes malicieux",
    "pal.p3": "Des singes m'attirent par leurs cris… puis me pissent dessus en riant comme des humains. « Méfiez-vous, c'est leur spécialité », me confie un guide.",
    "pal.view": "Un panorama sublime",
    "pal.p4": "Escalade d'une pyramide via une échelle vertigineuse. Au sommet, la vallée s'étend à perte de vue. Vertige partagé avec d'autres visiteurs en larmes. Descente magique.",
    "pal.labyrinth": "Le labyrinthe de vert",
    "pal.p5": "Perdus dans la jungle dense. Crépuscule, peur d'un jaguar… puis les gardes forestiers nous retrouvent. Soulagement immense. Palenque restera gravé à jamais.",
    "pal.housing": "Logement : Hostel Catedral.",
    "gua.crossing": "Traversée du río Suchiate",
    "gua.p1": "Des Indiens nous proposent de franchir la frontière en barque. 30 minutes de clapotis. Accueillis par l'armée guatémaltèque, contrôle dans un camp militaire, taxes et visas. Camion militaire puis bus jusqu'à Flores, île sur le lac Petén Itzá.",
    "gua.p2": "L'un des plus grands sites mayas. Pyramides surgissant de la canopée. Chants d'oiseaux et cris de singes hurleurs. Vue à couper le souffle depuis le sommet. Connexion profonde avec une civilisation qui continue de parler à travers la forêt.",
    "bel.p1": "Sans visa et pas encore citoyen français, je redoute un refoulement. Tour de passe-passe : je me fais passer pour un fonctionnaire français en mission. Traitement de faveur. Le Belize se révèle un joyau de paysages à couper le souffle.",
    "tul.p1": "Logement : Lobo Inn Hostel. Exploration de la ville, ruines de Tulum surplombant la mer des Caraïbes, farniente à Playa Zazil-Kin et balades à vélo.",
    "can.p1": "Un seul mot d'ordre : farniente. Au Q Bay Hotel, le directeur, émerveillé par notre origine parisienne, nous offre une suite all-inclusive au prix d'une chambre standard. Hôtel quasi vide hors saison. Piscine et plage pour nous seuls. Un véritable palace déserté.",
    "nav.cuisine": "Cuisine",
    "gallery.cuisine.btn": "Voir les photos de la cuisine",
    "cuisine.date": "Découverte culinaire",
    "cuisine.title": "La cuisine mexicaine",
    "cuisine.intro.title": "La cuisine mexicaine, une vraie découverte",
    "cuisine.intro.p1": "La cuisine mexicaine a été pour moi un véritable dépaysement… mais pas seulement pour les yeux ! Les odeurs et surtout les goûts m’ont parfois complètement surpris.",
    "cuisine.intro.p2": "Pourtant, je suis omnivore, je mange de tout et je ne suis généralement pas difficile. Mais là, j’ai vraiment accusé le coup. La cuisine est riche, généreuse, épicée et pleine de saveurs auxquelles mon palais n’est pas forcément habitué. Il m’a fallu un petit temps d’adaptation.",
    "cuisine.intro.p3": "Le mole a probablement été ma plus grande surprise. On m’avait présenté ce plat comme l’un des grands emblèmes de la cuisine mexicaine. J’étais curieux de le découvrir… mais je dois avouer que je n’ai pas réussi à terminer mon assiette !",
    "cuisine.intro.p4": "À l’inverse, j’ai eu un véritable coup de cœur pour le ceviche de poisson : frais, acidulé, léger… exactement le genre de saveurs que j’ai adorées.",
    "cuisine.intro.p5": "Et puis il y a eu le mezcal. Là encore, découverte totale ! Une boisson avec un goût très particulier, très différent de ce que je connaissais.",
    "cuisine.intro.p6": "Au final, la cuisine mexicaine m’aura autant surpris qu’elle m’aura fait voyager. Et c’est aussi ça, découvrir un pays : accepter que nos habitudes soient parfois un peu bousculées.",
    "cuisine.mole.title": "Le mole : une rencontre surprenante avec le chocolat",
    "cuisine.mole.caption": "Mole poblano – poulet, sauce aux piments, épices et chocolat, sésame et riz rouge",
    "cuisine.mole.p1": "Le mole poblano, c’est un poulet nappé d’une sauce épaisse, sombre et onctueuse, préparée notamment avec des piments, des épices, des graines et du chocolat noir, puis parsemée de sésame. Le tout est servi avec du riz rouge mexicain parfumé et des tortillas de maïs, parfois bleues, conservées bien au chaud dans un panier.",
    "cuisine.mole.p2": "Sur le papier, c’était une découverte culinaire qui m’intriguait. Mais en bouche, le mélange du chocolat et des épices m’a vraiment déstabilisé. Je suis pourtant habitué à manger de tout, mais je dois reconnaître que je n’ai pas réussi à terminer mon assiette. Une expérience qui m’a rappelé que voyager, c’est aussi accepter de sortir de sa zone de confort… même à table !",
    "cuisine.ceviche.title": "Le ceviche de poisson : mon coup de cœur",
    "cuisine.ceviche.caption": "Ceviche de poisson – mariné au citron vert, avocat, jalapeños et coriandre",
    "cuisine.ceviche.p1": "Le ceviche a été une tout autre expérience. Ici, le poisson est cru, mais mariné dans du jus de citron vert. L’acidité du citron transforme sa texture et lui donne cette sensation de fraîcheur, sans cuisson à la chaleur.",
    "cuisine.ceviche.p2": "Le poisson est accompagné de tomates, d’oignons rouges, de piments jalapeños, d’avocat fondant et de coriandre fraîche. Le tout est servi avec des chips de maïs croustillantes, parfaites pour accompagner chaque bouchée.",
    "cuisine.ceviche.p3": "C’est sans doute l’un de mes grands coups de cœur culinaires au Mexique. Frais, acidulé, parfumé et plein de contrastes : cette fois, mes papilles ont complètement adhéré !",
    "cuisine.mezcal.title": "Mezcal, tequila & sotol : les spiritueux du Mexique",
    "cuisine.mezcal.caption": "Mezcal d’Oaxaca, tequila reposado & blanco, sotol de Chihuahua",
    "cuisine.mezcal.p1": "Et puis il y a eu le mezcal. Une découverte totale : un goût fumé, complexe, très différent de tout ce que je connaissais. Une boisson qui raconte le Mexique autant que les plats.",
    "nav.faq": "FAQ",
    "faq.title": "FAQ — Mon voyage au Mexique, au Guatemala et au Belize",
    "faq.desc": "Questions fréquentes sur ce carnet de voyage : itinéraire, étapes, rencontres et conseils.",
    "faq.cat.voyage": "Le voyage",
    "faq.q1": "Quel était l’itinéraire de ce voyage ?",
    "faq.a1a": "Ce voyage m’a conduit pendant 20 jours à travers le Mexique, le Guatemala et le Belize, sur environ 2 620 kilomètres. Je suis parti de Mexico City avant de descendre progressivement vers Oaxaca, la côte Pacifique et le Chiapas, puis de poursuivre vers le Guatemala et le Belize. Je suis finalement revenu au Mexique par Tulum avant de terminer le voyage à Cancún.",
    "faq.a1b": "C’était un voyage itinérant, avec beaucoup de kilomètres, mais surtout beaucoup de changements de paysages, de cultures et d’ambiances.",
    "faq.q2": "Combien de temps a duré le voyage ?",
    "faq.a2a": "Le voyage s’est déroulé sur environ 20 jours, du 14 août au 2 septembre 2010.",
    "faq.a2b": "Vingt jours peuvent sembler courts pour trois pays, mais le rythme était volontairement assez soutenu. L’objectif n’était pas de rester longtemps au même endroit, mais de découvrir un maximum de régions et d’ambiances.",
    "faq.q3": "Quels pays avez-vous visités ?",
    "faq.a3a": "J’ai traversé trois pays : le Mexique, le Guatemala et le Belize.",
    "faq.a3b": "La plus grande partie du voyage s’est déroulée au Mexique, avec des étapes très différentes entre Mexico City, Oaxaca, le Chiapas et la péninsule du Yucatán.",
    "faq.q4": "Combien de kilomètres avez-vous parcourus ?",
    "faq.a4a": "Environ 2 620 kilomètres.",
    "faq.a4b": "Avec le recul, c’est probablement l’un des éléments qui caractérise le mieux ce voyage. Les kilomètres faisaient vraiment partie de l’expérience : routes, bus, frontières et changements permanents de paysages.",
    "faq.cat.mexico": "Mexico et le centre du Mexique",
    "faq.q5": "Que retenez-vous de Mexico City ?",
    "faq.a5a": "Mexico City m’a immédiatement impressionné par sa taille, son énergie et ses contrastes.",
    "faq.a5b": "J’y ai découvert le centre historique, Coyoacán, San Ángel, Chapultepec, la Plaza Garibaldi et le Museo Nacional de Antropología. Mais au-delà des monuments, je me souviens surtout de l’impression d’être plongé dans une ville immense, vivante et parfois surprenante.",
    "faq.q6": "Qu’avez-vous découvert à Teotihuacán ?",
    "faq.a6a": "Teotihuacán a été l’une des premières grandes découvertes archéologiques du voyage.",
    "faq.a6b": "Je me souviens particulièrement de l’immensité de l’Avenue des Morts et de la Pyramide du Soleil. Après avoir vu les photos du site, on pense connaître l’endroit ; pourtant, une fois devant les pyramides, l’échelle réelle est assez impressionnante.",
    "faq.q7": "Pourquoi Oaxaca vous a-t-elle marqué ?",
    "faq.a7a": "Oaxaca a été une étape particulièrement humaine du voyage.",
    "faq.a7b": "J’y ai découvert le Zócalo, Santo Domingo, les marchés et l’artisanat local, mais ce sont surtout les rencontres qui m’ont marqué. Une visite dans un village de la région m’a permis d’échanger avec des habitants et de découvrir leur savoir-faire.",
    "faq.a7c": "C’est probablement ce type de rencontre qui donne au voyage une dimension différente d’un simple circuit touristique.",
    "faq.q8": "Que découvrir autour d’Oaxaca ?",
    "faq.a8a": "La région d’Oaxaca permet de combiner patrimoine, artisanat et découverte des villages.",
    "faq.a8b": "J’ai notamment découvert Monte Albán et Teotitlán del Valle. Monte Albán m’a impressionné par son emplacement et son histoire, tandis que Teotitlán m’a permis de mieux comprendre l’importance de l’artisanat dans la vie locale.",
    "faq.cat.pacific": "La côte Pacifique",
    "faq.q9": "Comment avez-vous vécu Puerto Escondido ?",
    "faq.a9a": "Puerto Escondido a apporté un changement radical après les visites culturelles et archéologiques.",
    "faq.a9b": "Je me souviens surtout de l’océan Pacifique et de la puissance des vagues. C’est une étape où l’on comprend rapidement que la mer peut être magnifique tout en imposant le respect.",
    "faq.q10": "Pourquoi avoir choisi Mazunte ?",
    "faq.a10a": "Mazunte représentait une étape plus tranquille et plus proche de la nature.",
    "faq.a10b": "Le souvenir qui reste est surtout celui des tortues venant pondre sur la plage de Las Tortugas. Observer ce moment dans la nuit donnait au voyage une atmosphère complètement différente.",
    "faq.q11": "Quelle place la nature occupe-t-elle dans ce voyage ?",
    "faq.a11": "Elle est omniprésente. Entre l’océan Pacifique, les cascades du Chiapas, la jungle de Palenque, la forêt autour de Tikal et la mer des Caraïbes, le voyage ne se résume jamais aux villes et aux monuments.",
    "faq.cat.chiapas": "Le Chiapas",
    "faq.q12": "Pourquoi visiter San Cristóbal de las Casas ?",
    "faq.a12a": "San Cristóbal de las Casas m’a permis de découvrir une autre facette du Mexique.",
    "faq.a12b": "J’y ai notamment visité le marché municipal, le Templo y Ex-Convento de Santo Domingo, le Museo del Ámbar et la Casa del Jade. J’ai surtout apprécié l’atmosphère de la ville et la place occupée par les traditions et l’artisanat.",
    "faq.q13": "Que découvrir entre San Cristóbal et Palenque ?",
    "faq.a13a": "Le trajet vers Palenque est lui-même une partie importante du voyage.",
    "faq.a13b": "J’ai découvert les cascades d’Agua Azul et de Mizol-Ha, au milieu d’un environnement beaucoup plus tropical. Ce sont ces changements progressifs de paysages qui rendent cette partie du parcours particulièrement intéressante.",
    "faq.q14": "Que retenez-vous de Palenque ?",
    "faq.a14a": "Palenque est probablement l’une des étapes les plus fortes du voyage.",
    "faq.a14b": "Les temples mayas apparaissent au milieu de la jungle, avec une végétation dense et les cris des singes hurleurs. Ce qui m’a marqué, c’est cette impression que la jungle fait véritablement partie du site archéologique.",
    "faq.a14c": "Palenque, ce n’est donc pas seulement la visite de ruines mayas : c’est aussi une expérience de jungle.",
    "faq.cat.guatemala": "Guatemala et Belize",
    "faq.q15": "Pourquoi avoir poursuivi le voyage jusqu’au Guatemala ?",
    "faq.a15a": "Après Palenque, continuer vers le Guatemala permettait de prolonger la découverte du monde maya.",
    "faq.a15b": "Le passage de la frontière a aussi donné au voyage une nouvelle dimension : on change de pays, de paysages et d’ambiance tout en restant dans une région culturellement liée à l’histoire mésoaméricaine.",
    "faq.q16": "Que retenez-vous de Flores ?",
    "faq.a16a": "Flores a constitué une étape avant la découverte de Tikal.",
    "faq.a16b": "J’ai particulièrement apprécié son environnement autour du lac Petén Itzá. Après les longues étapes précédentes, cette étape permettait aussi de ralentir un peu avant de repartir vers le site archéologique.",
    "faq.q17": "Pourquoi Tikal est-il un souvenir important ?",
    "faq.a17a": "Tikal m’a particulièrement marqué par son environnement.",
    "faq.a17b": "Les pyramides apparaissent au milieu de la forêt tropicale et certaines dominent littéralement la canopée. Avec les singes hurleurs et les bruits de la jungle, la visite donne une sensation très différente de celle d’un site archéologique classique.",
    "faq.q18": "Quelle différence avez-vous ressentie entre Palenque et Tikal ?",
    "faq.a18a": "Les deux sites sont liés au monde maya, mais l’expérience vécue est différente.",
    "faq.a18b": "À Palenque, j’ai surtout ressenti le contraste entre les temples et la jungle toute proche. À Tikal, la forêt semble encore plus omniprésente et donne au site une dimension presque mystérieuse.",
    "faq.q19": "Que vous a apporté l’étape au Belize ?",
    "faq.a19a": "Le Belize a constitué une courte étape de transition dans le voyage.",
    "faq.a19b": "Après le Mexique et le Guatemala, cela permettait de découvrir un troisième pays et de poursuivre progressivement vers la péninsule du Yucatán.",
    "faq.cat.yucatan": "Retour au Mexique",
    "faq.q20": "Pourquoi visiter Tulum ?",
    "faq.a20a": "Tulum est une étape très différente de Palenque ou Tikal.",
    "faq.a20b": "Les ruines mayas sont installées au-dessus de la mer des Caraïbes. J’ai aimé cette association assez particulière entre patrimoine archéologique et paysage maritime.",
    "faq.a20c": "La découverte du site pouvait ensuite être prolongée par un moment plus tranquille à la plage.",
    "faq.q21": "Comment avez-vous vécu la fin du voyage à Tulum ?",
    "faq.a21a": "Tulum marquait progressivement la transition vers la fin du voyage.",
    "faq.a21b": "Après les nombreux déplacements et les sites archéologiques, le rythme devenait plus détendu. Les plages et les déplacements à vélo apportaient une forme de respiration avant la dernière étape.",
    "faq.q22": "Pourquoi terminer à Cancún ?",
    "faq.a22a": "Cancún était la dernière étape du parcours.",
    "faq.a22b": "Après vingt jours de déplacements, de visites et de découvertes, la fin du voyage était davantage consacrée au repos, à la plage et à la piscine.",
    "faq.a22c": "C’était une manière assez naturelle de terminer un voyage aussi dense.",
    "faq.cat.culture": "Culture et rencontres",
    "faq.q23": "Quelle place la cuisine mexicaine a-t-elle occupée dans le voyage ?",
    "faq.a23a": "La cuisine fait évidemment partie de la découverte du Mexique.",
    "faq.a23b": "Mais ce que je retiens surtout, c’est la diversité des plats et des habitudes selon les régions traversées. Le voyage permet de découvrir une cuisine bien plus variée que l’image parfois simplifiée que l’on peut en avoir depuis l’Europe.",
    "faq.q24": "Quel souvenir gardez-vous de l’artisanat ?",
    "faq.a24a": "L’artisanat est très présent dans plusieurs étapes du voyage, notamment autour d’Oaxaca et de San Cristóbal de las Casas.",
    "faq.a24b": "Ce qui m’a intéressé, ce n’est pas seulement l’objet acheté ou observé, mais le savoir-faire qui se trouve derrière. Les rencontres avec les artisans donnent beaucoup plus de sens à ce que l’on découvre sur les marchés.",
    "faq.q25": "Les rencontres ont-elles été importantes ?",
    "faq.a25a": "Oui, probablement davantage que je ne l’avais imaginé avant de partir.",
    "faq.a25b": "Certains monuments restent dans les photographies, mais certaines rencontres restent dans la mémoire. C’est notamment le cas de la rencontre vécue dans la région d’Oaxaca.",
    "faq.q26": "Quel a été le moment le plus surprenant ?",
    "faq.a26a": "Il est difficile d’en choisir un seul.",
    "faq.a26b": "Le voyage est rempli de moments inattendus : les rencontres, les routes, les passages de frontières, la jungle de Palenque, les singes hurleurs, les tortues de Mazunte ou encore l’immensité de Tikal.",
    "faq.a26c": "C’est justement cette succession de surprises qui fait partie du souvenir du voyage.",
    "faq.cat.prepare": "Préparer un voyage similaire",
    "faq.q27": "Peut-on refaire exactement ce voyage aujourd’hui ?",
    "faq.a27a": "On peut s’inspirer de cet itinéraire, mais il ne faut pas le considérer comme un guide pratique actualisé.",
    "faq.a27b": "Le voyage présenté ici a été réalisé en 2010. Les transports, les prix, les formalités, les conditions d’accès aux sites et certaines réalités locales ont pu changer depuis.",
    "faq.a27c": "Le site raconte avant tout une expérience de voyage vécue, à une période donnée.",
    "faq.q28": "Cet itinéraire convient-il à un voyageur qui aime bouger ?",
    "faq.a28a": "Oui, mais il faut aimer les déplacements.",
    "faq.a28b": "En vingt jours et avec environ 2 620 kilomètres parcourus, le rythme était assez soutenu. Il faut accepter de passer du temps sur les routes pour pouvoir enchaîner autant de régions et de pays.",
    "faq.q29": "Faut-il prévoir beaucoup de temps pour les transports ?",
    "faq.a29a": "Oui.",
    "faq.a29b": "Les distances sont importantes et les déplacements constituent une partie réelle du voyage. C’est un élément à intégrer dès la préparation : vouloir découvrir plusieurs régions du Mexique et plusieurs pays voisins signifie nécessairement consacrer du temps aux trajets.",
    "faq.q30": "Quel type de voyage est-ce finalement ?",
    "faq.a30a": "C’est avant tout un voyage itinérant mêlant culture, patrimoine, nature et rencontres.",
    "faq.a30b": "On y trouve des grandes villes, des sites archéologiques, des villages, de l’artisanat, des plages, de la jungle et plusieurs passages de frontières.",
    "faq.a30c": "Mais au-delà de l’itinéraire, ce carnet raconte surtout une manière de voyager : avancer, découvrir, rencontrer et accepter de ne pas toujours savoir exactement ce que l’on va trouver.",
    "faq.cat.last": "Une dernière question…",
    "faq.q31": "Si vous deviez résumer ce voyage en quelques mots, lesquels choisiriez-vous ?",
    "faq.a31a": "20 jours, 2 620 kilomètres, 3 pays et une multitude de souvenirs.",
    "faq.a31b": "Mais si je devais vraiment résumer ce voyage, je dirais surtout : un voyage de découvertes et de rencontres, du Mexique au Belize, à travers les cultures, les paysages et le monde maya."

  },

  en: {
    "nav.home": "Home",
    "nav.map": "Map",
    "nav.itinerary": "Itinerary",
    "nav.stories": "Stories",
    "nav.about": "About",
    "nav.stages": "Journey stages",
    "hero.subtitle": "August – September 2010",
    "hero.title": "Travel Journal<br>Mexico • Guatemala • Belize",
    "hero.desc": "2,620 km of adventures, encounters and wonders across Central America.",
    "hero.cta": "Explore the map",
    "map.title": "Interactive Map",
    "map.desc": "Click on a city you visited to discover the story of that stage.",
    "popup.see": "Read the full story",
    "map.hint": "Ctrl + scroll or the + / − buttons to zoom • drag to move",
    "poster.title": "The trip at a glance",
    "poster.desc": "All the stops, distances and photos on a single map. Click to enlarge and zoom.",
    "poster.zoom": "Click to zoom",
    "poster.hint": "Scroll or buttons to zoom • drag to move • double-click to zoom",
    "gallery.mexico.btn": "See the Mexico City photos",
    "gallery.photos": "photos",
    "gallery.close": "Close",
    "gallery.prev": "Previous photo",
    "gallery.next": "Next photo",
    "gallery.zoomin": "Zoom in",
    "gallery.zoomout": "Zoom out",
    "gallery.fit": "Fit to screen",
    "gallery.photo": "Photo",
    "gallery.mexico.title": "Mexico City photos",
    "gallery.teotihuacan.btn": "See the Teotihuacán photos",
    "gallery.oaxaca.btn": "See the Oaxaca photos",
    "gallery.montealban.btn": "See the Monte Albán photos",
    "t3.btn": "Explore Teotihuacán in 3D",
    "t3.montealban.btn": "Explore Monte Albán in 3D",
     "t3.palenque.btn": "Explore Palenque in 3D",
      "t3.tikal.btn": "Explore Tikal in 3D",
         "t3.tulum.btn": "Explore Tulum in 3D",


    "gallery.teotitlan.btn": "See the Teotitlán del Valle photos",
    "gallery.puertoescondido.btn": "See the Puerto Escondido photos",
    "gallery.mazunte.btn": "See the Mazunte photos",
    "gallery.sancristobal.btn": "See the San Cristóbal photos",
    "gallery.palenque.btn": "See the Palenque photos",
    "gallery.florestikal.btn": "See the Flores & Tikal photos",
    "gallery.belize.btn": "See the Belize photos",
    "gallery.tulum.btn": "See the Tulum photos",
    "gallery.cancun.btn": "See the Cancún photos",
    "t3.sub": "Interactive 3D map with photo points",
    "gallery.hint": "← → navigate • scroll or pinch to zoom • double-click • Esc to close",
    "itinerary.title": "Itinerary",
    "itinerary.km": "Kilometers",
    "itinerary.days": "Days",
    "itinerary.countries": "Countries",
    "itin.mexico": "Arrival, Teotihuacán, Coyoacán, Chapultepec, metro & Condesa night",
    "itin.oaxaca": "Oaxaca, Monte Albán, Teotitlán, Puerto Escondido, Mazunte",
    "itin.chiapas": "San Cristóbal, Agua Azul, Mizol-Ha, Zapatista checkpoint, Palenque",
    "itin.guatemala": "Río Suchiate crossing, Flores, Tikal",
    "itin.belize": "Border crossing & road to Yucatán",
    "itin.yucatan": "Tulum, ruins, beaches & Cancún",
    "stories.title": "Travel Stories",
    "about.title": "About",
    "about.text": "This travel journal recounts a 2,620 km adventure through Mexico, Guatemala and Belize in August-September 2010. Human encounters, majestic archaeological sites, turbulent beaches and mysterious jungle… memories etched forever.",
    "about.prague": "If you enjoyed Mexico, keep travelling: a weekend in Prague — cobblestones, legends and another way of feeling a city.",
    "mobile.elsewhere": "Elsewhere",
    "footer.note": "Made with passion",
    "mc.arrival": "Arrival",
    "mc.p1": "After a long flight, we finally landed in Mexico City, the beating heart of Mexico. The megacity's charged air hit us as soon as we left the airport.",
    "mc.housing": "Accommodation",
    "mc.p2": "We were welcomed by Claire and Cynthia, who generously offered us hospitality in their apartment.",
    "mc.outing": "Outing",
    "mc.p3": "For our first evening we went to Cantina de los Remedios, an iconic place where we tasted traditional Mexican dishes in a lively atmosphere.",
    "mc.p4": "That day we ventured into the ancient city of Teotihuacán. Walking the Avenue of the Dead and climbing the Pyramid of the Sun were unforgettable moments. We covered 40 km from Mexico City.",
    "mc.slums": "Shantytowns",
    "mc.p5": "Later we visited some of Mexico City's shantytowns. This contrasting experience revealed another face of the city, marked by hardship but also by the resilience of its people.",
    "mc.p6": "Morning in Coyoacán: Plaza Hidalgo, Jardin del Centenario, Frida Kahlo Museum. Then Plaza Garibaldi for mariachi, the Metropolitan Cathedral, the bohemian San Ángel district and El Ángel de la Independencia.",
    "mc.p7": "Morning at Chapultepec Park: Monument to the Child Heroes and National Anthropology Museum. Exploring the metro (women-only carriages). Evening at Bar Pride in the Condesa neighbourhood.",
    "teo.p1": "One of Mexico's most impressive archaeological sites. Walking the Avenue of the Dead and climbing the Pyramid of the Sun remain moments etched forever. 40 km from Mexico City.",
    "oax.two-worlds": "Two worlds discover each other",
    "oax.p1": "On the winding road to Oaxaca, our journey leads us into a small indigenous village. I realise I am the only Black person in this remote place. Gradually a group of Indians forms around me, their eyes shining with respectful curiosity. They speak to me in their language, a soft melody I cannot understand. I reply in Spanish, but they do not understand.",
    "oax.p2": "They begin to touch me gently, with a kind of reverence. Their hands brush my arm, my hand. No violence, only pure, almost childlike curiosity. One of them finally manages to say in Spanish: “This is the first time we have seen a Black man.” This moment, so simple yet so intense, becomes magical. A true communion between two worlds.",
    "oax.housing": "Accommodation",
    "oax.p3": "Casa Paulina, a house with authentic charm.",
    "oax.visits": "Visits",
    "oax.p4": "Zócalo, Cathedral of Our Lady of the Assumption, Santo Domingo Church, Government Palace, Juárez Market, Handicraft Market and the MARO cooperative (300 women artisans).",
    "ma.p1": "One of the most emblematic archaeological sites of Mesoamerica. Perched on a hill overlooking the Oaxaca Valley, this ancient Zapotec city took us back centuries. Majestic pyramids, terraces and temples, eroded by time yet still impressive.",
    "teo2.p1": "Village famous for its weavers. Every house is a workshop where skilled hands turn raw wool into colourful rugs using ancestral methods. Visit to the handicraft market.",
    "pe.housing": "Accommodation",
    "pe.p1": "Mayflower Hotel, a charming place near the beaches.",
    "pe.pacific": "A Pacific Ocean that is not so pacific…",
    "pe.p2": "At Playa Carrizalillo, under a blazing sun, we settle on loungers near the beach bar. Waves tickle our feet. I naively think: “If they put the seats here, the waves can't reach us.”",
    "pe.p3": "Barely have I raised my glass when a huge wave crashes. Everything is swept away: benches, loungers… and us. Soaking wet, we scramble back. The bartender remains impassive, retrieves the floating seats and calmly asks if we want “the same again”.",
    "pe.p4": "The next day at Playa Principal, to get to the other side we are told to climb a 3 m rock. Barely down the first rock, a wave over 4 m engulfs me, smashing me against the rocks. Survival instinct: I cling on. When the sea withdraws I emerge exhausted. No one moved. “This Pacific is pacific in name only… I think it doesn't like me.”",
    "maz.p1": "Under a starry sky we witnessed the majestic ritual of giant turtles coming to lay their eggs in the golden sand.",
    "sc.housing": "Accommodation",
    "sc.p1": "Planet Hostel and Casa Carmelita.",
    "sc.visits": "Visits",
    "sc.p2": "Museum of Popular Cultures of Chiapas, House of Jade, Municipal Market, Santo Domingo Church & former convent, Amber Museum of Chiapas. Restaurants: Margarita, Todo Natural, Casa de Chiapas.",
    "sc.p3": "Agua Azul waterfalls (turquoise waters) and Mizol-Ha. On the road to Palenque, a Zapatista checkpoint: masked and armed men demand a “revolutionary tax”. Firm but respectful. We pay and continue, aware of having touched the resistant soul of Chiapas.",
    "pal.p1": "One of the most beautiful places I have ever visited. A jewel nestled in the heart of the jungle, magical light, majestic temples.",
    "pal.mosquitoes": "The mosquito attack",
    "pal.p2": "Mistake: shorts and short sleeves. Palenque mosquitoes are indifferent to cream. Yet the thirst for discovery wins.",
    "pal.monkeys": "Mischievous monkeys",
    "pal.p3": "Monkeys attract me with their calls… then pee on me while laughing like humans. “Watch out, that's their speciality,” a guide whispers.",
    "pal.view": "A sublime panorama",
    "pal.p4": "Climbing a pyramid via a dizzying ladder. At the top the valley stretches as far as the eye can see. Vertigo shared with other visitors in tears. Magical descent.",
    "pal.labyrinth": "The green labyrinth",
    "pal.p5": "Lost in the dense jungle. Dusk, fear of a jaguar… then forest rangers find us. Immense relief. Palenque will remain etched forever.",
    "pal.housing": "Accommodation: Hostel Catedral.",
    "gua.crossing": "Crossing the Río Suchiate",
    "gua.p1": "Indigenous people offer to take us across the border by boat. 30 minutes of gentle lapping. Greeted by the Guatemalan army, checked in a military camp, taxes and visas. Military truck then bus to Flores, an island on Lake Petén Itzá.",
    "gua.p2": "One of the greatest Maya sites. Pyramids rising from the canopy. Birdsong and howler monkey cries. Breathtaking view from the top. Deep connection with a civilisation that still speaks through the forest.",
    "bel.p1": "Without a visa and not yet a French citizen, I fear being turned back. A bold move: I pass myself off as a French official on mission. Preferential treatment. Belize reveals itself as a jewel of breathtaking landscapes.",
    "tul.p1": "Accommodation: Lobo Inn Hostel. Exploring the town, Tulum ruins overlooking the Caribbean Sea, lounging at Playa Zazil-Kin and bike rides.",
    "can.p1": "Only one watchword: rest. At Q Bay Hotel the manager, delighted by our Parisian origin, offers us an all-inclusive suite at the price of a standard room. Almost empty hotel out of season. Pool and beach all to ourselves. A true deserted palace.",
    "nav.cuisine": "Cuisine",
    "gallery.cuisine.btn": "See the cuisine photos",
    "cuisine.date": "Culinary discovery",
    "cuisine.title": "Mexican cuisine",
    "cuisine.intro.title": "Mexican cuisine, a real discovery",
    "cuisine.intro.p1": "Mexican cuisine was a true change of scenery for me… and not just for the eyes! The smells and especially the tastes sometimes completely surprised me.",
    "cuisine.intro.p2": "Yet I am an omnivore, I eat everything and I am not usually picky. But this time it really hit me. The cuisine is rich, generous, spicy and full of flavours my palate is not necessarily used to. It took me a little time to adapt.",
    "cuisine.intro.p3": "Mole was probably my biggest surprise. It had been presented to me as one of the great emblems of Mexican cuisine. I was curious to try it… but I must admit I could not finish my plate!",
    "cuisine.intro.p4": "On the other hand, I truly fell in love with the fish ceviche: fresh, tangy, light… exactly the kind of flavours I adored.",
    "cuisine.intro.p5": "And then there was mezcal. Another total discovery! A drink with a very particular taste, very different from anything I knew.",
    "cuisine.intro.p6": "In the end, Mexican cuisine surprised me as much as it made me travel. And that is also what discovering a country is about: accepting that our habits are sometimes a little shaken up.",
    "cuisine.mole.title": "Mole: a surprising encounter with chocolate",
    "cuisine.mole.caption": "Mole poblano – chicken, chilli-spice-chocolate sauce, sesame and red rice",
    "cuisine.mole.p1": "Mole poblano is chicken covered in a thick, dark, silky sauce made with chillies, spices, seeds and dark chocolate, then sprinkled with sesame. It is served with fragrant Mexican red rice and corn tortillas, sometimes blue, kept warm in a basket.",
    "cuisine.mole.p2": "On paper it was a culinary discovery that intrigued me. But in the mouth, the mix of chocolate and spices really unsettled me. I am used to eating everything, yet I have to admit I could not finish my plate. An experience that reminded me that travelling also means accepting to leave one’s comfort zone… even at the table!",
    "cuisine.ceviche.title": "Fish ceviche: my favourite",
    "cuisine.ceviche.caption": "Fish ceviche – lime-marinated, avocado, jalapeños and coriander",
    "cuisine.ceviche.p1": "The ceviche was a completely different experience. Here the fish is raw but marinated in lime juice. The acidity transforms its texture and gives it that sensation of freshness, without any heat cooking.",
    "cuisine.ceviche.p2": "The fish is accompanied by tomatoes, red onions, jalapeño peppers, soft avocado and fresh coriander. It is served with crispy corn chips, perfect with every bite.",
    "cuisine.ceviche.p3": "It is without doubt one of my great culinary favourites in Mexico. Fresh, tangy, fragrant and full of contrasts: this time my taste buds completely approved!",
    "cuisine.mezcal.title": "Mezcal, tequila & sotol: Mexico’s spirits",
    "cuisine.mezcal.caption": "Oaxaca mezcal, reposado & blanco tequila, Chihuahua sotol",
    "cuisine.mezcal.p1": "And then there was mezcal. A total discovery: a smoky, complex taste, very different from anything I knew. A drink that tells the story of Mexico as much as the dishes do.",
    "nav.faq": "FAQ",
    "faq.title": "FAQ — My trip to Mexico, Guatemala and Belize",
    "faq.desc": "Frequently asked questions about this travel journal: itinerary, stages, encounters and tips.",
    "faq.cat.voyage": "The journey",
    "faq.q1": "What was the itinerary of this trip?",
    "faq.a1a": "This trip took me for 20 days through Mexico, Guatemala and Belize, covering about 2,620 kilometres. I started in Mexico City before heading south to Oaxaca, the Pacific coast and Chiapas, then continued to Guatemala and Belize. I finally returned to Mexico via Tulum before ending the trip in Cancún.",
    "faq.a1b": "It was an itinerant journey, with many kilometres, but above all many changes of landscapes, cultures and atmospheres.",
    "faq.q2": "How long did the trip last?",
    "faq.a2a": "The trip lasted about 20 days, from 14 August to 2 September 2010.",
    "faq.a2b": "Twenty days may seem short for three countries, but the pace was deliberately quite brisk. The goal was not to stay long in one place, but to discover as many regions and atmospheres as possible.",
    "faq.q3": "Which countries did you visit?",
    "faq.a3a": "I crossed three countries: Mexico, Guatemala and Belize.",
    "faq.a3b": "Most of the trip took place in Mexico, with very different stages between Mexico City, Oaxaca, Chiapas and the Yucatán Peninsula.",
    "faq.q4": "How many kilometres did you cover?",
    "faq.a4a": "About 2,620 kilometres.",
    "faq.a4b": "In hindsight, this is probably one of the elements that best characterises this trip. The kilometres were truly part of the experience: roads, buses, borders and constant changes of landscape.",
    "faq.cat.mexico": "Mexico and central Mexico",
    "faq.q5": "What do you remember from Mexico City?",
    "faq.a5a": "Mexico City immediately impressed me with its size, energy and contrasts.",
    "faq.a5b": "I discovered the historic centre, Coyoacán, San Ángel, Chapultepec, Plaza Garibaldi and the National Anthropology Museum. Beyond the monuments, I mainly remember the feeling of being immersed in a huge, lively and sometimes surprising city.",
    "faq.q6": "What did you discover at Teotihuacán?",
    "faq.a6a": "Teotihuacán was one of the first major archaeological discoveries of the trip.",
    "faq.a6b": "I particularly remember the immensity of the Avenue of the Dead and the Pyramid of the Sun. After seeing photos of the site, you think you know the place; yet once in front of the pyramids, the real scale is quite impressive.",
    "faq.q7": "Why did Oaxaca leave a mark on you?",
    "faq.a7a": "Oaxaca was a particularly human stage of the trip.",
    "faq.a7b": "I discovered the Zócalo, Santo Domingo, the markets and local crafts, but it was above all the encounters that marked me. A visit to a village in the region allowed me to talk with residents and discover their know-how.",
    "faq.a7c": "It is probably this kind of encounter that gives the journey a different dimension from a simple tourist circuit.",
    "faq.q8": "What is there to discover around Oaxaca?",
    "faq.a8a": "The Oaxaca region combines heritage, crafts and village discovery.",
    "faq.a8b": "I notably discovered Monte Albán and Teotitlán del Valle. Monte Albán impressed me with its location and history, while Teotitlán helped me better understand the importance of crafts in local life.",
    "faq.cat.pacific": "The Pacific coast",
    "faq.q9": "How did you experience Puerto Escondido?",
    "faq.a9a": "Puerto Escondido brought a radical change after the cultural and archaeological visits.",
    "faq.a9b": "I mainly remember the Pacific Ocean and the power of the waves. It is a stage where you quickly understand that the sea can be magnificent while commanding respect.",
    "faq.q10": "Why did you choose Mazunte?",
    "faq.a10a": "Mazunte represented a quieter stage, closer to nature.",
    "faq.a10b": "The lasting memory is mainly that of the turtles coming to lay eggs on Playa de las Tortugas. Observing that moment at night gave the trip a completely different atmosphere.",
    "faq.q11": "What place does nature hold in this trip?",
    "faq.a11": "It is omnipresent. Between the Pacific Ocean, the waterfalls of Chiapas, the jungle of Palenque, the forest around Tikal and the Caribbean Sea, the journey is never limited to cities and monuments.",
    "faq.cat.chiapas": "Chiapas",
    "faq.q12": "Why visit San Cristóbal de las Casas?",
    "faq.a12a": "San Cristóbal de las Casas allowed me to discover another side of Mexico.",
    "faq.a12b": "I notably visited the municipal market, the Santo Domingo church and former convent, the Amber Museum and the House of Jade. I especially appreciated the atmosphere of the town and the place given to traditions and crafts.",
    "faq.q13": "What is there to discover between San Cristóbal and Palenque?",
    "faq.a13a": "The journey to Palenque is itself an important part of the trip.",
    "faq.a13b": "I discovered the Agua Azul and Mizol-Ha waterfalls, in a much more tropical environment. It is these gradual changes of landscape that make this part of the route particularly interesting.",
    "faq.q14": "What do you remember from Palenque?",
    "faq.a14a": "Palenque is probably one of the strongest stages of the trip.",
    "faq.a14b": "The Maya temples appear in the middle of the jungle, with dense vegetation and the cries of howler monkeys. What struck me was the feeling that the jungle truly forms part of the archaeological site.",
    "faq.a14c": "Palenque is therefore not only a visit to Maya ruins: it is also a jungle experience.",
    "faq.cat.guatemala": "Guatemala and Belize",
    "faq.q15": "Why did you continue the trip as far as Guatemala?",
    "faq.a15a": "After Palenque, continuing to Guatemala made it possible to extend the discovery of the Maya world.",
    "faq.a15b": "Crossing the border also gave the trip a new dimension: you change country, landscapes and atmosphere while remaining in a region culturally linked to Mesoamerican history.",
    "faq.q16": "What do you remember from Flores?",
    "faq.a16a": "Flores was a stage before discovering Tikal.",
    "faq.a16b": "I particularly appreciated its setting around Lake Petén Itzá. After the long previous stages, this stop also made it possible to slow down a little before heading to the archaeological site.",
    "faq.q17": "Why is Tikal an important memory?",
    "faq.a17a": "Tikal particularly struck me with its environment.",
    "faq.a17b": "The pyramids appear in the middle of the tropical forest and some literally dominate the canopy. With the howler monkeys and the sounds of the jungle, the visit gives a very different feeling from a classic archaeological site.",
    "faq.q18": "What difference did you feel between Palenque and Tikal?",
    "faq.a18a": "Both sites are linked to the Maya world, but the experience is different.",
    "faq.a18b": "At Palenque, I mainly felt the contrast between the temples and the nearby jungle. At Tikal, the forest seems even more omnipresent and gives the site an almost mysterious dimension.",
    "faq.q19": "What did the Belize stage bring you?",
    "faq.a19a": "Belize was a short transition stage in the trip.",
    "faq.a19b": "After Mexico and Guatemala, it made it possible to discover a third country and continue gradually towards the Yucatán Peninsula.",
    "faq.cat.yucatan": "Back to Mexico",
    "faq.q20": "Why visit Tulum?",
    "faq.a20a": "Tulum is a very different stage from Palenque or Tikal.",
    "faq.a20b": "The Maya ruins sit above the Caribbean Sea. I liked this rather particular combination of archaeological heritage and maritime landscape.",
    "faq.a20c": "Discovering the site could then be extended by a quieter moment at the beach.",
    "faq.q21": "How did you experience the end of the trip in Tulum?",
    "faq.a21a": "Tulum gradually marked the transition towards the end of the trip.",
    "faq.a21b": "After many journeys and archaeological sites, the pace became more relaxed. The beaches and bike rides brought a form of breathing space before the last stage.",
    "faq.q22": "Why end in Cancún?",
    "faq.a22a": "Cancún was the last stage of the journey.",
    "faq.a22b": "After twenty days of travel, visits and discoveries, the end of the trip was more devoted to rest, the beach and the pool.",
    "faq.a22c": "It was a fairly natural way to end such a dense journey.",
    "faq.cat.culture": "Culture and encounters",
    "faq.q23": "What place did Mexican cuisine hold in the trip?",
    "faq.a23a": "Cuisine is of course part of discovering Mexico.",
    "faq.a23b": "But what I mainly remember is the diversity of dishes and habits according to the regions crossed. The trip allows you to discover a cuisine far more varied than the sometimes simplified image one may have from Europe.",
    "faq.q24": "What memory do you keep of the crafts?",
    "faq.a24a": "Crafts are very present in several stages of the trip, especially around Oaxaca and San Cristóbal de las Casas.",
    "faq.a24b": "What interested me was not only the object bought or observed, but the know-how behind it. Encounters with artisans give much more meaning to what one discovers in the markets.",
    "faq.q25": "Were the encounters important?",
    "faq.a25a": "Yes, probably more than I had imagined before leaving.",
    "faq.a25b": "Some monuments remain in photographs, but some encounters remain in memory. That is notably the case of the encounter in the Oaxaca region.",
    "faq.q26": "What was the most surprising moment?",
    "faq.a26a": "It is hard to choose only one.",
    "faq.a26b": "The trip is full of unexpected moments: the encounters, the roads, the border crossings, the jungle of Palenque, the howler monkeys, the turtles of Mazunte or the immensity of Tikal.",
    "faq.a26c": "It is precisely this succession of surprises that forms part of the memory of the trip.",
    "faq.cat.prepare": "Planning a similar trip",
    "faq.q27": "Can one redo exactly this trip today?",
    "faq.a27a": "One can draw inspiration from this itinerary, but it should not be considered an up-to-date practical guide.",
    "faq.a27b": "The trip presented here was made in 2010. Transport, prices, formalities, site access conditions and some local realities may have changed since then.",
    "faq.a27c": "The site mainly tells a lived travel experience, at a given time.",
    "faq.q28": "Is this itinerary suitable for a traveller who likes to keep moving?",
    "faq.a28a": "Yes, but you have to enjoy travel itself.",
    "faq.a28b": "In twenty days and with about 2,620 kilometres covered, the pace was quite brisk. You have to accept spending time on the road in order to link so many regions and countries.",
    "faq.q29": "Should one plan a lot of time for transport?",
    "faq.a29a": "Yes.",
    "faq.a29b": "Distances are significant and travel is a real part of the journey. This is something to build into preparation from the start: wanting to discover several regions of Mexico and neighbouring countries necessarily means dedicating time to journeys.",
    "faq.q30": "What kind of trip is this ultimately?",
    "faq.a30a": "It is above all an itinerant journey mixing culture, heritage, nature and encounters.",
    "faq.a30b": "You find large cities, archaeological sites, villages, crafts, beaches, jungle and several border crossings.",
    "faq.a30c": "But beyond the itinerary, this journal mainly tells a way of travelling: moving forward, discovering, meeting people and accepting not always knowing exactly what one will find.",
    "faq.cat.last": "One last question…",
    "faq.q31": "If you had to sum up this trip in a few words, which would you choose?",
    "faq.a31a": "20 days, 2,620 kilometres, 3 countries and a multitude of memories.",
    "faq.a31b": "But if I really had to sum up this trip, I would mainly say: a journey of discoveries and encounters, from Mexico to Belize, through cultures, landscapes and the Maya world."

  },

  es: {
    "nav.home": "Inicio",
    "nav.map": "Mapa",
    "nav.itinerary": "Itinerario",
    "nav.stories": "Relatos",
    "nav.about": "Acerca de",
    "nav.stages": "Etapas del viaje",
    "hero.subtitle": "Agosto – Septiembre 2010",
    "hero.title": "Diario de Viaje<br>México • Guatemala • Belice",
    "hero.desc": "2 620 km de aventuras, encuentros y maravillas a través de Centroamérica.",
    "hero.cta": "Explorar el mapa",
    "map.title": "Mapa Interactivo",
    "map.desc": "Haz clic en una ciudad visitada para descubrir el relato de esa etapa.",
    "popup.see": "Ver el relato completo",
    "map.hint": "Ctrl + rueda o botones + / − para hacer zoom • arrastra para moverte",
    "poster.title": "El viaje de un vistazo",
    "poster.desc": "Todas las etapas, distancias y fotos en un solo mapa. Haz clic para ampliar y hacer zoom.",
    "poster.zoom": "Clic para hacer zoom",
    "poster.hint": "Rueda o botones para zoom • arrastra para moverte • doble clic para ampliar",
    "gallery.mexico.btn": "Ver las fotos de Ciudad de México",
    "gallery.photos": "fotos",
   

    "gallery.close": "Cerrar",
    "gallery.prev": "Foto anterior",
    "gallery.next": "Foto siguiente",
    "gallery.zoomin": "Acercar",
    "gallery.zoomout": "Alejar",
    "gallery.fit": "Ajustar a la pantalla",
    "gallery.photo": "Foto",
    "gallery.mexico.title": "Fotos de Ciudad de México",
    "gallery.teotihuacan.btn": "Ver las fotos de Teotihuacán",
    "gallery.oaxaca.btn": "Ver las fotos de Oaxaca",
    "gallery.montealban.btn": "Ver las fotos de Monte Albán",
    "t3.btn": "Explorar Teotihuacán en 3D",
    "t3.montealban.btn": "Explorar Monte Albán en 3D",
     "t3.palenque.btn": "Explorar Palenque en 3D",
          "t3.tikal.btn": "Explorar Tikal en 3D",
    "t3.tulum.btn": "Explorar Tulum en 3D",
    "gallery.teotitlan.btn": "Ver las fotos de Teotitlán del Valle",
    "gallery.puertoescondido.btn": "Ver las fotos de Puerto Escondido",
    "gallery.mazunte.btn": "Ver las fotos de Mazunte",
    "gallery.sancristobal.btn": "Ver las fotos de San Cristóbal",
    "gallery.palenque.btn": "Ver las fotos de Palenque",
    "gallery.florestikal.btn": "Ver las fotos de Flores y Tikal",
    "gallery.belize.btn": "Ver las fotos de Belice",
    "gallery.tulum.btn": "Ver las fotos de Tulum",
    "gallery.cancun.btn": "Ver las fotos de Cancún",
    "t3.sub": "Mapa 3D interactivo con puntos de fotos",
    "gallery.hint": "← → navegar • rueda o pellizcar para zoom • doble clic • Esc para cerrar",
    "itinerary.title": "Itinerario",
    "itinerary.km": "Kilómetros",
    "itinerary.days": "Días",
    "itinerary.countries": "Países",
    "itin.mexico": "Llegada, Teotihuacán, Coyoacán, Chapultepec, metro y noche en Condesa",
    "itin.oaxaca": "Oaxaca, Monte Albán, Teotitlán, Puerto Escondido, Mazunte",
    "itin.chiapas": "San Cristóbal, Agua Azul, Mizol-Ha, retén zapatista, Palenque",
    "itin.guatemala": "Cruce del río Suchiate, Flores, Tikal",
    "itin.belize": "Paso fronterizo y ruta hacia Yucatán",
    "itin.yucatan": "Tulum, ruinas, playas y Cancún",
    "stories.title": "Relatos del viaje",
    "about.title": "Acerca de",
    "about.text": "Este diario de viaje relata la aventura de 2 620 km a través de México, Guatemala y Belice en agosto-septiembre de 2010. Encuentros humanos, sitios arqueológicos majestuosos, playas turbulentas y selva misteriosa… recuerdos grabados para siempre.",
    "about.prague": "Si México te gustó, sigue el viaje: un fin de semana en Praga — adoquines, leyendas y otra forma de sentir una ciudad.",
    "mobile.elsewhere": "En otros lugares",
    "footer.note": "Hecho con pasión",
    "mc.arrival": "Llegada",
    "mc.p1": "Después de un largo vuelo, por fin aterrizamos en Ciudad de México, el corazón palpitante de México. El aire cargado de la megaciudad nos golpeó al salir del aeropuerto.",
    "mc.housing": "Alojamiento",
    "mc.p2": "Fuimos recibidos por Claire y Cynthia, quienes generosamente nos ofrecieron hospitalidad en su apartamento.",
    "mc.outing": "Salida",
    "mc.p3": "Para nuestra primera noche fuimos a la Cantina de los Remedios, un lugar emblemático donde degustamos platos tradicionales mexicanos en un ambiente alegre.",
    "mc.p4": "Ese día nos aventuramos en la antigua ciudad de Teotihuacán. Caminar por la Avenida de los Muertos y subir la Pirámide del Sol fueron momentos inolvidables. Recorrimos 40 km desde Ciudad de México.",
    "mc.slums": "Barrios marginales",
    "mc.p5": "Más tarde visitamos algunos barrios marginales de México. Esta experiencia contrastante reveló otra faceta de la ciudad, marcada por las dificultades pero también por la resiliencia de los habitantes.",
    "mc.p6": "Mañana en Coyoacán: Plaza Hidalgo, Jardín del Centenario, Museo Frida Kahlo. Luego Plaza Garibaldi para los mariachis, la Catedral Metropolitana, el barrio bohemio de San Ángel y El Ángel de la Independencia.",
    "mc.p7": "Mañana en el Bosque de Chapultepec: Monumento a los Niños Héroes y Museo Nacional de Antropología. Exploración del metro (vagones exclusivos para mujeres). Noche en el Bar Pride en el barrio de Condesa.",
    "teo.p1": "Uno de los sitios arqueológicos más impresionantes de México. Caminar por la Avenida de los Muertos y subir la Pirámide del Sol permanecen como momentos grabados para siempre. 40 km de Ciudad de México.",
    "oax.two-worlds": "Dos mundos se descubren",
    "oax.p1": "En la carretera sinuosa hacia Oaxaca, nuestro viaje nos lleva a un pequeño pueblo indígena. Me doy cuenta de que soy el único negro en este lugar remoto. Poco a poco se forma un grupo de indígenas a mi alrededor, con ojos brillantes de curiosidad respetuosa. Me hablan en su lengua, una melodía suave pero incomprensible. Respondo en español, pero no entienden.",
    "oax.p2": "Empiezan a tocarme suavemente, con una especie de veneración. Sus manos rozan mi brazo, mi mano. Ninguna violencia, solo curiosidad pura, casi infantil. Uno de ellos logra decir en español: «Es la primera vez que vemos a un hombre negro.» Este momento, tan simple y sin embargo tan intenso, se vuelve mágico. Una verdadera comunión entre dos mundos.",
    "oax.housing": "Alojamiento",
    "oax.p3": "Casa Paulina, una morada de encanto auténtico.",
    "oax.visits": "Visitas",
    "oax.p4": "Zócalo, Catedral de Nuestra Señora de la Asunción, Iglesia de Santo Domingo, Palacio de Gobierno, Mercado Juárez, Mercado de Artesanías y la cooperativa MARO (300 mujeres artesanas).",
    "ma.p1": "Uno de los sitios arqueológicos más emblemáticos de Mesoamérica. En lo alto de una colina con vistas al valle de Oaxaca, esta antigua ciudad zapoteca nos transportó siglos atrás. Pirámides, terrazas y templos majestuosos, erosionados por el tiempo pero aún impresionantes.",
    "teo2.p1": "Pueblo famoso por sus tejedores. Cada casa es un taller donde manos expertas transforman la lana cruda en tapices coloridos según métodos ancestrales. Visita al mercado de artesanías.",
    "pe.housing": "Alojamiento",
    "pe.p1": "Mayflower Hotel, un establecimiento encantador cerca de las playas.",
    "pe.pacific": "Un océano Pacífico no tan pacífico…",
    "pe.p2": "En Playa Carrizalillo, bajo un sol radiante, nos instalamos en tumbonas cerca del chiringuito. Las olas nos rozan los pies. Pienso ingenuamente: «Si han puesto los asientos aquí, es que las olas no nos alcanzarán.»",
    "pe.p3": "Apenas llevo el vaso a los labios cuando una ola inmensa se abate. Todo es arrastrado: bancos, tumbonas… y nosotros. Empapados hasta los huesos, recuperamos la orilla. El camarero permanece impasible, recoge los asientos flotantes y nos pregunta tranquilamente si queremos «lo mismo otra vez».",
    "pe.p4": "Al día siguiente, en Playa Principal, para pasar al otro lado nos indican escalar una roca de 3 m. Apenas bajo de la primera roca, una ola de más de 4 m me engulle y me estrella contra las rocas. Instinto de supervivencia: me aferro. Cuando el mar se retira, salgo exhausto. Nadie se movió. «Este Pacífico solo tiene de pacífico el nombre… Creo que no me quiere.»",
    "maz.p1": "Bajo el cielo estrellado fuimos testigos del majestuoso ritual de las tortugas gigantes que vienen a depositar sus huevos en la arena dorada.",
    "sc.housing": "Alojamiento",
    "sc.p1": "Planet Hostel y Casa Carmelita.",
    "sc.visits": "Visitas",
    "sc.p2": "Museo de las Culturas Populares de Chiapas, Casa del Jade, Mercado Municipal, Templo y Ex-Convento de Santo Domingo, Museo del Ámbar de Chiapas. Restaurantes: Margarita, Todo Natural, Casa de Chiapas.",
    "sc.p3": "Cascadas de Agua Azul (aguas turquesas) y Mizol-Ha. En el camino a Palenque, un retén zapatista: hombres encapuchados y armados piden un «impuesto revolucionario». Firmes pero respetuosos. Pagamos y seguimos, conscientes de haber tocado el alma resistente de Chiapas.",
    "pal.p1": "Uno de los lugares más hermosos que he visitado jamás. Una joya enclavada en el corazón de la selva, luz mágica, templos majestuosos.",
    "pal.mosquitoes": "El ataque de los mosquitos",
    "pal.p2": "Error: pantalones cortos y mangas cortas. Los mosquitos de Palenque son indiferentes a la crema. Sin embargo, la sed de descubrimiento vence.",
    "pal.monkeys": "Monos maliciosos",
    "pal.p3": "Unos monos me atraen con sus gritos… y luego me orinan encima riéndose como humanos. «Cuidado, es su especialidad», me confía un guía.",
    "pal.view": "Un panorama sublime",
    "pal.p4": "Subida a una pirámide por una escalera vertiginosa. En la cima el valle se extiende hasta donde alcanza la vista. Vértigo compartido con otras visitantes llorando. Descenso mágico.",
    "pal.labyrinth": "El laberinto de verde",
    "pal.p5": "Perdidos en la densa selva. Atardecer, miedo a un jaguar… luego los guardabosques nos encuentran. Alivio inmenso. Palenque quedará grabado para siempre.",
    "pal.housing": "Alojamiento: Hostel Catedral.",
    "gua.crossing": "Cruce del río Suchiate",
    "gua.p1": "Indígenas nos proponen cruzar la frontera en barca. 30 minutos de chapoteo. Recibidos por el ejército guatemalteco, control en un campamento militar, tasas y visados. Camión militar y luego bus hasta Flores, isla en el lago Petén Itzá.",
    "gua.p2": "Uno de los mayores sitios mayas. Pirámides que emergen del dosel. Cantos de pájaros y gritos de monos aulladores. Vista impresionante desde la cima. Conexión profunda con una civilización que sigue hablando a través del bosque.",
    "bel.p1": "Sin visado y aún no ciudadano francés, temo un rechazo. Un truco audaz: me hago pasar por funcionario francés en misión oficial. Trato de favor. Belice se revela como una joya de paisajes de ensueño.",
    "tul.p1": "Alojamiento: Lobo Inn Hostel. Exploración de la ciudad, ruinas de Tulum con vistas al mar Caribe, ocio en Playa Zazil-Kin y paseos en bicicleta.",
    "can.p1": "Una sola consigna: descanso. En el Q Bay Hotel el director, maravillado por nuestro origen parisino, nos ofrece una suite todo incluido al precio de una habitación estándar. Hotel casi vacío fuera de temporada. Piscina y playa solo para nosotros. Un verdadero palacio desierto.",
    "nav.cuisine": "Cocina",
    "gallery.cuisine.btn": "Ver las fotos de la cocina",
    "cuisine.date": "Descubrimiento culinario",
    "cuisine.title": "La cocina mexicana",
    "cuisine.intro.title": "La cocina mexicana, un verdadero descubrimiento",
    "cuisine.intro.p1": "La cocina mexicana fue para mí un verdadero cambio de escenario… ¡y no solo para los ojos! Los olores y sobre todo los sabores a veces me sorprendieron por completo.",
    "cuisine.intro.p2": "Sin embargo soy omnívoro, como de todo y no soy especialmente exigente. Pero esta vez me costó. La cocina es rica, generosa, picante y llena de sabores a los que mi paladar no está necesariamente acostumbrado. Necesité un pequeño tiempo de adaptación.",
    "cuisine.intro.p3": "El mole fue probablemente mi mayor sorpresa. Me lo habían presentado como uno de los grandes emblemas de la cocina mexicana. Tenía curiosidad por probarlo… ¡pero debo admitir que no pude terminar el plato!",
    "cuisine.intro.p4": "En cambio, me enamoré de verdad del ceviche de pescado: fresco, ácido, ligero… exactamente el tipo de sabores que adoré.",
    "cuisine.intro.p5": "Y luego estuvo el mezcal. ¡Otro descubrimiento total! Una bebida con un sabor muy particular, muy diferente a todo lo que conocía.",
    "cuisine.intro.p6": "Al final, la cocina mexicana me sorprendió tanto como me hizo viajar. Y eso también es descubrir un país: aceptar que a veces nuestras costumbres se vean un poco sacudidas.",
    "cuisine.mole.title": "El mole: un encuentro sorprendente con el chocolate",
    "cuisine.mole.caption": "Mole poblano – pollo, salsa de chiles, especias y chocolate, sésamo y arroz rojo",
    "cuisine.mole.p1": "El mole poblano es un pollo cubierto con una salsa espesa, oscura y sedosa, preparada con chiles, especias, semillas y chocolate negro, y espolvoreada con sésamo. Se sirve con arroz rojo mexicano perfumado y tortillas de maíz, a veces azules, guardadas calientes en una canasta.",
    "cuisine.mole.p2": "Sobre el papel era un descubrimiento culinario que me intrigaba. Pero en la boca, la mezcla de chocolate y especias me desconcertó de verdad. Aunque estoy acostumbrado a comer de todo, debo reconocer que no pude terminar el plato. Una experiencia que me recordó que viajar también es aceptar salir de la zona de confort… ¡incluso en la mesa!",
    "cuisine.ceviche.title": "El ceviche de pescado: mi favorito",
    "cuisine.ceviche.caption": "Ceviche de pescado – marinado en limón, aguacate, jalapeños y cilantro",
    "cuisine.ceviche.p1": "El ceviche fue una experiencia completamente distinta. Aquí el pescado está crudo, pero marinado en jugo de limón. La acidez transforma su textura y le da esa sensación de frescura, sin cocción al calor.",
    "cuisine.ceviche.p2": "El pescado va acompañado de tomates, cebolla roja, chiles jalapeños, aguacate tierno y cilantro fresco. Se sirve con totopos de maíz crujientes, perfectos para cada bocado.",
    "cuisine.ceviche.p3": "Sin duda es uno de mis grandes favoritos culinarios en México. Fresco, ácido, aromático y lleno de contrastes: ¡esta vez mis papilas lo aprobaron por completo!",
    "cuisine.mezcal.title": "Mezcal, tequila y sotol: los destilados de México",
    "cuisine.mezcal.caption": "Mezcal de Oaxaca, tequila reposado y blanco, sotol de Chihuahua",
    "cuisine.mezcal.p1": "Y luego estuvo el mezcal. Un descubrimiento total: un sabor ahumado, complejo, muy diferente a todo lo que conocía. Una bebida que cuenta México tanto como los platos.",
    "nav.faq": "FAQ",
    "faq.title": "FAQ — Mi viaje a México, Guatemala y Belice",
    "faq.desc": "Preguntas frecuentes sobre este diario de viaje: itinerario, etapas, encuentros y consejos.",
    "faq.cat.voyage": "El viaje",
    "faq.q1": "¿Cuál fue el itinerario de este viaje?",
    "faq.a1a": "Este viaje me llevó durante 20 días a través de México, Guatemala y Belice, cubriendo unos 2 620 kilómetros. Partí de Ciudad de México antes de bajar progresivamente hacia Oaxaca, la costa del Pacífico y Chiapas, y luego continuar hacia Guatemala y Belice. Finalmente volví a México por Tulum antes de terminar el viaje en Cancún.",
    "faq.a1b": "Fue un viaje itinerante, con muchos kilómetros, pero sobre todo con muchos cambios de paisajes, culturas y ambientes.",
    "faq.q2": "¿Cuánto tiempo duró el viaje?",
    "faq.a2a": "El viaje se desarrolló a lo largo de unos 20 días, del 14 de agosto al 2 de septiembre de 2010.",
    "faq.a2b": "Veinte días pueden parecer pocos para tres países, pero el ritmo fue deliberadamente bastante intenso. El objetivo no era quedarse mucho tiempo en el mismo lugar, sino descubrir el máximo de regiones y ambientes.",
    "faq.q3": "¿Qué países visitaste?",
    "faq.a3a": "Atravesé tres países: México, Guatemala y Belice.",
    "faq.a3b": "La mayor parte del viaje se desarrolló en México, con etapas muy diferentes entre Ciudad de México, Oaxaca, Chiapas y la península de Yucatán.",
    "faq.q4": "¿Cuántos kilómetros recorriste?",
    "faq.a4a": "Unos 2 620 kilómetros.",
    "faq.a4b": "Con el tiempo, es probablemente uno de los elementos que mejor caracteriza este viaje. Los kilómetros formaban realmente parte de la experiencia: carreteras, autobuses, fronteras y cambios permanentes de paisaje.",
    "faq.cat.mexico": "México y el centro de México",
    "faq.q5": "¿Qué recuerdas de Ciudad de México?",
    "faq.a5a": "Ciudad de México me impresionó de inmediato por su tamaño, su energía y sus contrastes.",
    "faq.a5b": "Descubrí el centro histórico, Coyoacán, San Ángel, Chapultepec, la Plaza Garibaldi y el Museo Nacional de Antropología. Más allá de los monumentos, recuerdo sobre todo la impresión de estar inmerso en una ciudad inmensa, viva y a veces sorprendente.",
    "faq.q6": "¿Qué descubriste en Teotihuacán?",
    "faq.a6a": "Teotihuacán fue uno de los primeros grandes descubrimientos arqueológicos del viaje.",
    "faq.a6b": "Recuerdo especialmente la inmensidad de la Avenida de los Muertos y la Pirámide del Sol. Después de ver fotos del sitio, uno cree conocer el lugar; sin embargo, una vez frente a las pirámides, la escala real es bastante impresionante.",
    "faq.q7": "¿Por qué te marcó Oaxaca?",
    "faq.a7a": "Oaxaca fue una etapa particularmente humana del viaje.",
    "faq.a7b": "Descubrí el Zócalo, Santo Domingo, los mercados y la artesanía local, pero sobre todo me marcaron los encuentros. Una visita a un pueblo de la región me permitió intercambiar con habitantes y descubrir su saber hacer.",
    "faq.a7c": "Probablemente es este tipo de encuentro el que da al viaje una dimensión distinta de un simple circuito turístico.",
    "faq.q8": "¿Qué descubrir alrededor de Oaxaca?",
    "faq.a8a": "La región de Oaxaca permite combinar patrimonio, artesanía y descubrimiento de pueblos.",
    "faq.a8b": "Descubrí en particular Monte Albán y Teotitlán del Valle. Monte Albán me impresionó por su ubicación y su historia, mientras que Teotitlán me permitió comprender mejor la importancia de la artesanía en la vida local.",
    "faq.cat.pacific": "La costa del Pacífico",
    "faq.q9": "¿Cómo viviste Puerto Escondido?",
    "faq.a9a": "Puerto Escondido aportó un cambio radical después de las visitas culturales y arqueológicas.",
    "faq.a9b": "Recuerdo sobre todo el océano Pacífico y la potencia de las olas. Es una etapa en la que se entiende rápidamente que el mar puede ser magnífico al mismo tiempo que impone respeto.",
    "faq.q10": "¿Por qué elegiste Mazunte?",
    "faq.a10a": "Mazunte representaba una etapa más tranquila y más cercana a la naturaleza.",
    "faq.a10b": "El recuerdo que queda es sobre todo el de las tortugas que vienen a poner huevos en la playa de Las Tortugas. Observar ese momento en la noche daba al viaje una atmósfera completamente distinta.",
    "faq.q11": "¿Qué lugar ocupa la naturaleza en este viaje?",
    "faq.a11": "Es omnipresente. Entre el océano Pacífico, las cascadas de Chiapas, la selva de Palenque, el bosque alrededor de Tikal y el mar Caribe, el viaje nunca se resume a las ciudades y los monumentos.",
    "faq.cat.chiapas": "Chiapas",
    "faq.q12": "¿Por qué visitar San Cristóbal de las Casas?",
    "faq.a12a": "San Cristóbal de las Casas me permitió descubrir otra faceta de México.",
    "faq.a12b": "Visité en particular el mercado municipal, el Templo y Ex-Convento de Santo Domingo, el Museo del Ámbar y la Casa del Jade. Aprecié sobre todo la atmósfera de la ciudad y el lugar que ocupan las tradiciones y la artesanía.",
    "faq.q13": "¿Qué descubrir entre San Cristóbal y Palenque?",
    "faq.a13a": "El trayecto hacia Palenque es en sí mismo una parte importante del viaje.",
    "faq.a13b": "Descubrí las cascadas de Agua Azul y de Mizol-Ha, en un entorno mucho más tropical. Son estos cambios progresivos de paisaje los que hacen esta parte del recorrido particularmente interesante.",
    "faq.q14": "¿Qué recuerdas de Palenque?",
    "faq.a14a": "Palenque es probablemente una de las etapas más fuertes del viaje.",
    "faq.a14b": "Los templos mayas aparecen en medio de la selva, con una vegetación densa y los gritos de los monos aulladores. Lo que me marcó fue esa impresión de que la selva forma verdaderamente parte del sitio arqueológico.",
    "faq.a14c": "Palenque no es solo la visita de ruinas mayas: es también una experiencia de selva.",
    "faq.cat.guatemala": "Guatemala y Belice",
    "faq.q15": "¿Por qué continuaste el viaje hasta Guatemala?",
    "faq.a15a": "Después de Palenque, continuar hacia Guatemala permitía prolongar el descubrimiento del mundo maya.",
    "faq.a15b": "El paso de la frontera también dio al viaje una nueva dimensión: se cambia de país, de paisajes y de ambiente sin dejar una región culturalmente ligada a la historia mesoamericana.",
    "faq.q16": "¿Qué recuerdas de Flores?",
    "faq.a16a": "Flores constituyó una etapa antes del descubrimiento de Tikal.",
    "faq.a16b": "Aprecié especialmente su entorno alrededor del lago Petén Itzá. Después de las largas etapas anteriores, esta parada también permitía ralentizar un poco antes de partir hacia el sitio arqueológico.",
    "faq.q17": "¿Por qué Tikal es un recuerdo importante?",
    "faq.a17a": "Tikal me marcó especialmente por su entorno.",
    "faq.a17b": "Las pirámides aparecen en medio del bosque tropical y algunas dominan literalmente el dosel. Con los monos aulladores y los ruidos de la selva, la visita da una sensación muy distinta a la de un sitio arqueológico clásico.",
    "faq.q18": "¿Qué diferencia sentiste entre Palenque y Tikal?",
    "faq.a18a": "Ambos sitios están ligados al mundo maya, pero la experiencia vivida es distinta.",
    "faq.a18b": "En Palenque, sentí sobre todo el contraste entre los templos y la selva tan cercana. En Tikal, el bosque parece aún más omnipresente y da al sitio una dimensión casi misteriosa.",
    "faq.q19": "¿Qué te aportó la etapa en Belice?",
    "faq.a19a": "Belice constituyó una corta etapa de transición en el viaje.",
    "faq.a19b": "Después de México y Guatemala, permitía descubrir un tercer país y continuar progresivamente hacia la península de Yucatán.",
    "faq.cat.yucatan": "Regreso a México",
    "faq.q20": "¿Por qué visitar Tulum?",
    "faq.a20a": "Tulum es una etapa muy distinta de Palenque o Tikal.",
    "faq.a20b": "Las ruinas mayas están situadas sobre el mar Caribe. Me gustó esa asociación bastante particular entre patrimonio arqueológico y paisaje marítimo.",
    "faq.a20c": "El descubrimiento del sitio podía luego prolongarse con un momento más tranquilo en la playa.",
    "faq.q21": "¿Cómo viviste el final del viaje en Tulum?",
    "faq.a21a": "Tulum marcaba progresivamente la transición hacia el final del viaje.",
    "faq.a21b": "Después de tantos desplazamientos y sitios arqueológicos, el ritmo se volvía más relajado. Las playas y los paseos en bicicleta aportaban una forma de respiro antes de la última etapa.",
    "faq.q22": "¿Por qué terminar en Cancún?",
    "faq.a22a": "Cancún era la última etapa del recorrido.",
    "faq.a22b": "Después de veinte días de desplazamientos, visitas y descubrimientos, el final del viaje se dedicaba más al descanso, la playa y la piscina.",
    "faq.a22c": "Era una manera bastante natural de terminar un viaje tan denso.",
    "faq.cat.culture": "Cultura y encuentros",
    "faq.q23": "¿Qué lugar ocupó la cocina mexicana en el viaje?",
    "faq.a23a": "La cocina forma evidentemente parte del descubrimiento de México.",
    "faq.a23b": "Pero lo que más recuerdo es la diversidad de platos y hábitos según las regiones atravesadas. El viaje permite descubrir una cocina mucho más variada que la imagen a veces simplificada que se puede tener desde Europa.",
    "faq.q24": "¿Qué recuerdo guardas de la artesanía?",
    "faq.a24a": "La artesanía está muy presente en varias etapas del viaje, en particular alrededor de Oaxaca y San Cristóbal de las Casas.",
    "faq.a24b": "Lo que me interesó no fue solo el objeto comprado u observado, sino el saber hacer que hay detrás. Los encuentros con los artesanos dan mucho más sentido a lo que se descubre en los mercados.",
    "faq.q25": "¿Fueron importantes los encuentros?",
    "faq.a25a": "Sí, probablemente más de lo que había imaginado antes de partir.",
    "faq.a25b": "Algunos monumentos quedan en las fotografías, pero algunos encuentros quedan en la memoria. Es en particular el caso del encuentro vivido en la región de Oaxaca.",
    "faq.q26": "¿Cuál fue el momento más sorprendente?",
    "faq.a26a": "Es difícil elegir solo uno.",
    "faq.a26b": "El viaje está lleno de momentos inesperados: los encuentros, las carreteras, los pasos de frontera, la selva de Palenque, los monos aulladores, las tortugas de Mazunte o la inmensidad de Tikal.",
    "faq.a26c": "Es precisamente esa sucesión de sorpresas la que forma parte del recuerdo del viaje.",
    "faq.cat.prepare": "Preparar un viaje similar",
    "faq.q27": "¿Se puede rehacer exactamente este viaje hoy?",
    "faq.a27a": "Uno puede inspirarse en este itinerario, pero no debe considerarse una guía práctica actualizada.",
    "faq.a27b": "El viaje presentado aquí se realizó en 2010. Los transportes, los precios, los trámites, las condiciones de acceso a los sitios y algunas realidades locales pueden haber cambiado desde entonces.",
    "faq.a27c": "El sitio cuenta ante todo una experiencia de viaje vivida, en un momento dado.",
    "faq.q28": "¿Este itinerario conviene a un viajero al que le gusta moverse?",
    "faq.a28a": "Sí, pero hay que disfrutar de los desplazamientos.",
    "faq.a28b": "En veinte días y con unos 2 620 kilómetros recorridos, el ritmo era bastante intenso. Hay que aceptar pasar tiempo en las carreteras para poder encadenar tantas regiones y países.",
    "faq.q29": "¿Hay que prever mucho tiempo para los transportes?",
    "faq.a29a": "Sí.",
    "faq.a29b": "Las distancias son importantes y los desplazamientos constituyen una parte real del viaje. Es un elemento a integrar desde la preparación: querer descubrir varias regiones de México y varios países vecinos significa necesariamente dedicar tiempo a los trayectos.",
    "faq.q30": "¿Qué tipo de viaje es finalmente?",
    "faq.a30a": "Es ante todo un viaje itinerante que mezcla cultura, patrimonio, naturaleza y encuentros.",
    "faq.a30b": "Se encuentran grandes ciudades, sitios arqueológicos, pueblos, artesanía, playas, selva y varios pasos de frontera.",
    "faq.a30c": "Pero más allá del itinerario, este diario cuenta sobre todo una manera de viajar: avanzar, descubrir, encontrar y aceptar no saber siempre exactamente lo que uno va a encontrar.",
    "faq.cat.last": "Una última pregunta…",
    "faq.q31": "Si tuvieras que resumir este viaje en pocas palabras, ¿cuáles elegirías?",
    "faq.a31a": "20 días, 2 620 kilómetros, 3 países y una multitud de recuerdos.",
    "faq.a31b": "Pero si realmente tuviera que resumir este viaje, diría sobre todo: un viaje de descubrimientos y encuentros, de México a Belice, a través de las culturas, los paisajes y el mundo maya."

  }
};

// City previews for popup
const cityPreviews = {
  fr: {
    "mexico-city": "Arrivée à Mexico, hospitalité de Claire & Cynthia, Cantina de los Remedios, exploration de la capitale…",
    "teotihuacan": "Pyramide du Soleil, Avenue des Morts — 40 km de Mexico City.",
    "oaxaca": "Rencontre magique dans un village indien, Zócalo, marchés, coopérative MARO…",
    "monte-alban": "Cité zapotèque perchée, pyramides et vue imprenable sur la vallée.",
    "teotitlan": "Village de tisserands, tapis colorés et savoir-faire ancestral.",
    "puerto-escondido": "Vagues du Pacifique, Mayflower Hotel, aventures à Carrizalillo et Playa Principal.",
    "mazunte": "Rituel nocturne des tortues géantes sur Playa de las Tortugas.",
    "san-cristobal": "Chiapas : musées, marchés, cascades d'Agua Azul et checkpoint zapatiste.",
    "palenque": "Jungle, temples mayas, moustiques, singes espiègles et labyrinthe de vert.",
    "flores-tikal": "Traversée du río Suchiate, Flores et les pyramides de Tikal.",
    "belize": "Passage de frontière inventif et paysages de rêve.",
    "tulum": "Ruines surplombant la mer des Caraïbes, farniente et balades à vélo.",
    "cancun": "Suite all-inclusive offerte, piscine et plage pour nous seuls."
  },
  en: {
    "mexico-city": "Arrival in Mexico City, Claire & Cynthia's hospitality, Cantina de los Remedios, exploring the capital…",
    "teotihuacan": "Pyramid of the Sun, Avenue of the Dead — 40 km from Mexico City.",
    "oaxaca": "Magical encounter in an indigenous village, Zócalo, markets, MARO cooperative…",
    "monte-alban": "Hilltop Zapotec city, pyramids and breathtaking valley views.",
    "teotitlan": "Weavers' village, colourful rugs and ancestral craftsmanship.",
    "puerto-escondido": "Pacific waves, Mayflower Hotel, adventures at Carrizalillo and Playa Principal.",
    "mazunte": "Night-time ritual of giant turtles on Playa de las Tortugas.",
    "san-cristobal": "Chiapas: museums, markets, Agua Azul waterfalls and Zapatista checkpoint.",
    "palenque": "Jungle, Maya temples, mosquitoes, mischievous monkeys and green labyrinth.",
    "flores-tikal": "Río Suchiate crossing, Flores and the pyramids of Tikal.",
    "belize": "Inventive border crossing and dream landscapes.",
    "tulum": "Ruins overlooking the Caribbean Sea, lounging and bike rides.",
    "cancun": "Complimentary all-inclusive suite, pool and beach all to ourselves."
  },
  es: {
    "mexico-city": "Llegada a Ciudad de México, hospitalidad de Claire y Cynthia, Cantina de los Remedios, exploración de la capital…",
    "teotihuacan": "Pirámide del Sol, Avenida de los Muertos — 40 km de Ciudad de México.",
    "oaxaca": "Encuentro mágico en un pueblo indígena, Zócalo, mercados, cooperativa MARO…",
    "monte-alban": "Ciudad zapoteca en lo alto, pirámides y vistas impresionantes del valle.",
    "teotitlan": "Pueblo de tejedores, tapices coloridos y saber ancestral.",
    "puerto-escondido": "Olas del Pacífico, Mayflower Hotel, aventuras en Carrizalillo y Playa Principal.",
    "mazunte": "Ritual nocturno de las tortugas gigantes en Playa de las Tortugas.",
    "san-cristobal": "Chiapas: museos, mercados, cascadas de Agua Azul y retén zapatista.",
    "palenque": "Selva, templos mayas, mosquitos, monos traviesos y laberinto de verde.",
    "flores-tikal": "Cruce del río Suchiate, Flores y las pirámides de Tikal.",
    "belize": "Paso fronterizo inventivo y paisajes de ensueño.",
    "tulum": "Ruinas con vistas al mar Caribe, ocio y paseos en bicicleta.",
    "cancun": "Suite todo incluido de cortesía, piscina y playa solo para nosotros."
  }
};

// State
let currentLang = 'fr';
let fontSize = 16;

// DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initFontSize();
  initBurger();
  initMap();
  initMapZoom();
  initPosterViewer();
  initGalleries();
  initTeo3D();
  initTimeline();
  initSmoothScroll();
});

// Theme
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'light';
  setTheme(saved);

  btn.addEventListener('click', () => {
    const next = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
    setTheme(next);
  });
}

function setTheme(theme) {
  document.body.classList.remove('theme-dark', 'theme-light');
  document.body.classList.add(`theme-${theme}`);
  document.querySelector('.theme-icon').textContent = theme === 'dark' ? '☾' : '☀';
  localStorage.setItem('theme', theme);
}

// Language
function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyTranslations();
      localStorage.setItem('lang', currentLang);
    });
  });

  const saved = localStorage.getItem('lang');
  if (saved && translations[saved]) {
    currentLang = saved;
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === saved);
    });
  }
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
  document.documentElement.lang = currentLang;
}

// Font size
function initFontSize() {
  const saved = localStorage.getItem('fontSize');
  if (saved) {
    fontSize = parseInt(saved, 10);
    document.documentElement.style.setProperty('--font-base', fontSize + 'px');
  }

  document.getElementById('font-plus').addEventListener('click', () => {
    if (fontSize < 22) {
      fontSize += 1;
      document.documentElement.style.setProperty('--font-base', fontSize + 'px');
      localStorage.setItem('fontSize', fontSize);
    }
  });

  document.getElementById('font-minus').addEventListener('click', () => {
    if (fontSize > 13) {
      fontSize -= 1;
      document.documentElement.style.setProperty('--font-base', fontSize + 'px');
      localStorage.setItem('fontSize', fontSize);
    }
  });
}

// Burger menu
function initBurger() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      menu.classList.remove('open');
    });
  });
}

// Interactive map + popup
function initMap() {
  const popup = document.getElementById('popup');
  const title = document.getElementById('popup-title');
  const preview = document.getElementById('popup-preview');
  const link = document.getElementById('popup-link');
  const closeBtn = popup.querySelector('.popup-close');

  document.querySelectorAll('.marker').forEach(marker => {
    marker.addEventListener('click', () => {
      const city = marker.dataset.city;
      const name = marker.dataset.name;
      title.textContent = name;
      preview.textContent = (cityPreviews[currentLang] && cityPreviews[currentLang][city]) || '';
      link.href = '#' + city;
      popup.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
  popup.addEventListener('click', e => {
    if (e.target === popup) popup.classList.add('hidden');
  });

  link.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}

// Timeline click → scroll
function initTimeline() {
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
      const city = item.dataset.city;
      const target = document.getElementById(city);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Smooth scroll for nav
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}


// Zoom / déplacement de la carte
function initMapZoom() {
  const wrapper = document.getElementById('map-wrapper');
  const stage = document.getElementById('map-stage');
  if (!wrapper || !stage) return;
  const view = { z: 1, tx: 0, ty: 0 };

  function apply(animate) {
    const W = wrapper.clientWidth, H = wrapper.clientHeight;
    view.z = Math.max(1, Math.min(5, view.z));
    view.tx = Math.min(0, Math.max(W - W * view.z, view.tx));
    view.ty = Math.min(0, Math.max(H - H * view.z, view.ty));
    stage.classList.toggle('anim', !!animate);
    stage.style.setProperty('--z', view.z);
    stage.style.transform = 'translate(' + view.tx + 'px,' + view.ty + 'px) scale(' + view.z + ')';
    wrapper.classList.toggle('zoomed', view.z >= 2);
  }

  function zoomAt(factor, cx, cy, animate) {
    const nz = Math.max(1, Math.min(5, view.z * factor));
    const k = nz / view.z;
    view.tx = cx - (cx - view.tx) * k;
    view.ty = cy - (cy - view.ty) * k;
    view.z = nz;
    apply(animate);
  }

  // Les boutons zooment vers la zone du voyage (sud-est de la carte)
  const cx = () => wrapper.clientWidth * 0.72, cy = () => wrapper.clientHeight * 0.82;
  document.getElementById('zoom-in').addEventListener('click', () => zoomAt(1.7, cx(), cy(), true));
  document.getElementById('zoom-out').addEventListener('click', () => zoomAt(1 / 1.7, cx(), cy(), true));
  document.getElementById('zoom-reset').addEventListener('click', () => { view.z = 1; view.tx = 0; view.ty = 0; apply(true); });

  wrapper.addEventListener('wheel', e => {
    if (!(e.ctrlKey || e.metaKey)) return;
    e.preventDefault();
    const r = wrapper.getBoundingClientRect();
    zoomAt(e.deltaY < 0 ? 1.25 : 0.8, e.clientX - r.left, e.clientY - r.top, false);
  }, { passive: false });

  let drag = null;
  wrapper.addEventListener('pointerdown', e => {
    if (e.target.closest('.marker, .map-controls')) return;
    drag = { x: e.clientX, y: e.clientY, tx: view.tx, ty: view.ty };
    wrapper.setPointerCapture(e.pointerId);
  });
  wrapper.addEventListener('pointermove', e => {
    if (!drag || view.z === 1) return;
    wrapper.classList.add('dragging');
    view.tx = drag.tx + (e.clientX - drag.x);
    view.ty = drag.ty + (e.clientY - drag.y);
    apply(false);
  });
  const end = () => { drag = null; wrapper.classList.remove('dragging'); };
  wrapper.addEventListener('pointerup', end);
  wrapper.addEventListener('pointercancel', end);
  window.addEventListener('resize', () => apply(false));

  // Clic sur un marqueur : zoom sur l'étape (les étapes proches deviennent visibles)
  document.querySelectorAll('.marker').forEach(marker => {
    marker.addEventListener('click', () => {
      const W = wrapper.clientWidth, H = wrapper.clientHeight;
      const px = parseFloat(marker.style.left) / 100 * W;
      const py = parseFloat(marker.style.top) / 100 * H;
      view.z = marker.classList.contains('minor') ? 4 : Math.max(view.z, 3);
      view.tx = W / 2 - px * view.z;
      view.ty = H / 2 - py * view.z;
      apply(true);
    });
  });
}


// Visionneuse plein écran zoomable pour l'image récapitulative
function initPosterViewer() {
  const viewer = document.getElementById('poster-viewer');
  const stage = document.getElementById('pv-stage');
  const img = document.getElementById('pv-img');
  const openBtn = document.getElementById('poster-open');
  if (!viewer || !openBtn) return;

  let z = 1, tx = 0, ty = 0, fit = 1;
  const MAX = 6;

  function natural() { return { w: img.naturalWidth || 1, h: img.naturalHeight || 1 }; }

  function apply() {
    const n = natural();
    const W = stage.clientWidth, H = stage.clientHeight;
    const sw = n.w * fit * z, sh = n.h * fit * z;
    tx = sw <= W ? (W - sw) / 2 : Math.min(0, Math.max(W - sw, tx));
    ty = sh <= H ? (H - sh) / 2 : Math.min(0, Math.max(H - sh, ty));
    img.style.width = n.w + 'px';
    img.style.height = n.h + 'px';
    img.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + (fit * z) + ')';
  }

  function fitToScreen() {
    const n = natural();
    fit = Math.min(stage.clientWidth / n.w, stage.clientHeight / n.h);
    z = 1; tx = 0; ty = 0;
    apply();
  }

  function zoomAt(factor, cx, cy) {
    const nz = Math.max(1, Math.min(MAX, z * factor));
    const k = nz / z;
    tx = cx - (cx - tx) * k;
    ty = cy - (cy - ty) * k;
    z = nz;
    apply();
  }

  function open() {
    viewer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (img.complete && img.naturalWidth) fitToScreen();
    else img.addEventListener('load', fitToScreen, { once: true });
  }
  function close() {
    viewer.classList.add('hidden');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', open);
  document.getElementById('pv-close').addEventListener('click', close);
  document.getElementById('pv-fit').addEventListener('click', fitToScreen);
  document.getElementById('pv-in').addEventListener('click', () => zoomAt(1.6, stage.clientWidth / 2, stage.clientHeight / 2));
  document.getElementById('pv-out').addEventListener('click', () => zoomAt(1 / 1.6, stage.clientWidth / 2, stage.clientHeight / 2));
  document.addEventListener('keydown', e => {
    if (viewer.classList.contains('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === '+' || e.key === '=') document.getElementById('pv-in').click();
    if (e.key === '-') document.getElementById('pv-out').click();
  });

  stage.addEventListener('wheel', e => {
    e.preventDefault();
    const r = stage.getBoundingClientRect();
    zoomAt(e.deltaY < 0 ? 1.25 : 0.8, e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });

  stage.addEventListener('dblclick', e => {
    const r = stage.getBoundingClientRect();
    if (z > 1.5) fitToScreen(); else zoomAt(2.5, e.clientX - r.left, e.clientY - r.top);
  });

  // Pointeurs : glisser (1 doigt) et pincer pour zoomer (2 doigts)
  const pts = new Map();
  let last = null, pinch = 0;
  stage.addEventListener('pointerdown', e => {
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    stage.setPointerCapture(e.pointerId);
    last = { x: e.clientX, y: e.clientY };
    if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      pinch = Math.hypot(a.x - b.x, a.y - b.y);
    }
    stage.classList.add('dragging');
  });
  stage.addEventListener('pointermove', e => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const r = stage.getBoundingClientRect();
      if (pinch) zoomAt(d / pinch, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
      pinch = d;
    } else if (pts.size === 1 && last) {
      tx += e.clientX - last.x;
      ty += e.clientY - last.y;
      apply();
    }
    last = { x: e.clientX, y: e.clientY };
  });
  const up = e => {
    pts.delete(e.pointerId);
    pinch = 0;
    last = pts.size === 1 ? [...pts.values()][0] : null;
    if (!pts.size) stage.classList.remove('dragging');
  };
  stage.addEventListener('pointerup', up);
  stage.addEventListener('pointercancel', up);
  window.addEventListener('resize', () => { if (!viewer.classList.contains('hidden')) fitToScreen(); });
}


// ===== Galeries photos (diaporama plein écran, zoomable) =====
// Les photos et leurs commentaires se règlent dans gallery-data.js
function initGalleries() {
  if (typeof GALLERIES === 'undefined') return;
  const T = k => (translations[currentLang] && translations[currentLang][k]) || translations.fr[k] || '';

  document.querySelectorAll('[data-gallery-count]').forEach(el => {
    const btn = el.closest('[data-gallery]');
    const g = btn && GALLERIES[btn.dataset.gallery];
    if (g) el.textContent = g.photos.length;
  });

  let root = null, stage, img, spinner, counter, capBox, capText, thumbs, zoomLbl, bIn, bOut;
  let photos = [], idx = 0, z = 1, fit = 1, tx = 0, ty = 0, swipeDx = 0;
  let loadToken = 0, lastFocus = null, isOpen = false, pushed = false;
  const MAX = 6;

  function build() {
    root = document.createElement('div');
    root.className = 'gv';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.innerHTML =
      '<div class="gv-top">' +
        '<div class="gv-count"><span class="gv-cur">1</span><span class="gv-sep">/</span><span class="gv-total"></span></div>' +
        '<div class="gv-hint"></div>' +
        '<div class="gv-tools">' +
          '<span class="gv-zoomlbl">×1</span>' +
          '<button type="button" class="gv-out">−</button>' +
          '<button type="button" class="gv-in">+</button>' +
          '<button type="button" class="gv-fit">⤢</button>' +
          '<button type="button" class="gv-close">×</button>' +
        '</div>' +
      '</div>' +
      '<div class="gv-stage">' +
        '<div class="gv-spinner"></div>' +
        '<img class="gv-img" alt="" draggable="false">' +
        '<button type="button" class="gv-nav gv-prev">‹</button>' +
        '<button type="button" class="gv-nav gv-next">›</button>' +
      '</div>' +
      '<div class="gv-caption"><p></p></div>' +
      '<div class="gv-thumbs"></div>';
    document.body.appendChild(root);

    stage = root.querySelector('.gv-stage');
    img = root.querySelector('.gv-img');
    spinner = root.querySelector('.gv-spinner');
    counter = root.querySelector('.gv-cur');
    capBox = root.querySelector('.gv-caption');
    capText = capBox.querySelector('p');
    thumbs = root.querySelector('.gv-thumbs');
    zoomLbl = root.querySelector('.gv-zoomlbl');
    bIn = root.querySelector('.gv-in');
    bOut = root.querySelector('.gv-out');

    root.querySelector('.gv-close').addEventListener('click', () => close());
    root.querySelector('.gv-prev').addEventListener('click', () => go(-1));
    root.querySelector('.gv-next').addEventListener('click', () => go(1));
    bIn.addEventListener('click', () => zoomAt(1.6, stage.clientWidth / 2, stage.clientHeight / 2, true));
    bOut.addEventListener('click', () => zoomAt(1 / 1.6, stage.clientWidth / 2, stage.clientHeight / 2, true));
    root.querySelector('.gv-fit').addEventListener('click', () => fitImage(true));

    // Molette : zoom autour du curseur
    stage.addEventListener('wheel', e => {
      e.preventDefault();
      const r = stage.getBoundingClientRect();
      zoomAt(e.deltaY < 0 ? 1.2 : 1 / 1.2, e.clientX - r.left, e.clientY - r.top, false);
    }, { passive: false });

    // Pointeurs : déplacement, glissé pour changer de photo, pincement, double-tap
    const pts = new Map();
    let last = null, pinch = 0, downAt = 0, moved = 0, lastTap = 0, lastTapPos = null;
    stage.addEventListener('pointerdown', e => {
      if (e.target.closest('.gv-nav')) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      stage.setPointerCapture(e.pointerId);
      last = { x: e.clientX, y: e.clientY };
      downAt = Date.now(); moved = 0; swipeDx = 0;
      if (pts.size === 2) {
        const [a, b] = [...pts.values()];
        pinch = Math.hypot(a.x - b.x, a.y - b.y);
      }
      img.classList.remove('anim');
      stage.classList.add('dragging');
    });
    stage.addEventListener('pointermove', e => {
      if (!pts.has(e.pointerId)) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 2) {
        const [a, b] = [...pts.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const r = stage.getBoundingClientRect();
        if (pinch) zoomAt(d / pinch, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top, false);
        pinch = d; moved += 10;
      } else if (pts.size === 1 && last) {
        const dx = e.clientX - last.x, dy = e.clientY - last.y;
        moved += Math.abs(dx) + Math.abs(dy);
        if (z > 1.02) { tx += dx; ty += dy; }
        else { swipeDx += dx; }
        render(false);
      }
      last = { x: e.clientX, y: e.clientY };
    });
    const up = e => {
      if (!pts.has(e.pointerId)) return;
      const wasSingle = pts.size === 1;
      pts.delete(e.pointerId);
      pinch = 0;
      last = pts.size === 1 ? [...pts.values()][0] : null;
      if (pts.size) return;
      stage.classList.remove('dragging');
      if (!wasSingle) return;
      const r = stage.getBoundingClientRect();
      const px = e.clientX - r.left, py = e.clientY - r.top;
      // Glissé horizontal pour changer de photo (uniquement non zoomé)
      if (z <= 1.02 && Math.abs(swipeDx) > 70 && photos.length > 1) {
        const d = swipeDx < 0 ? 1 : -1; swipeDx = 0; go(d); return;
      }
      swipeDx = 0;
      // Double clic / double tap : zoom ou retour
      if (moved < 8 && Date.now() - downAt < 350) {
        const now = Date.now();
        if (now - lastTap < 320 && lastTapPos && Math.hypot(px - lastTapPos.x, py - lastTapPos.y) < 40) {
          if (z > 1.3) fitImage(true); else zoomAt(2.6, px, py, true);
          lastTap = 0;
        } else { lastTap = now; lastTapPos = { x: px, y: py }; }
      }
      render(true);
    };
    stage.addEventListener('pointerup', up);
    stage.addEventListener('pointercancel', up);

    document.addEventListener('keydown', e => {
      if (!isOpen) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowRight') { go(1); }
      else if (e.key === 'ArrowLeft') { go(-1); }
      else if (e.key === '+' || e.key === '=') { bIn.click(); }
      else if (e.key === '-') { bOut.click(); }
      else if (e.key === '0') { fitImage(true); }
      else if (e.key === 'Home') { show(0); }
      else if (e.key === 'End') { show(photos.length - 1); }
      else if (e.key === 'Tab') { // piège à focus
        const f = [...root.querySelectorAll('button')].filter(b => b.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first.focus(); }
      }
    });

    window.addEventListener('resize', () => { if (isOpen) fitImage(false); });
    window.addEventListener('popstate', () => { if (isOpen) { pushed = false; close(true); } });
  }

  function labels(g) {
    const gt = g && g.title ? (g.title[currentLang] || g.title.fr) : '';
    root.setAttribute('aria-label', gt || T('gallery.mexico.title'));
    root.querySelector('.gv-close').setAttribute('aria-label', T('gallery.close'));
    root.querySelector('.gv-close').title = T('gallery.close');
    root.querySelector('.gv-prev').setAttribute('aria-label', T('gallery.prev'));
    root.querySelector('.gv-next').setAttribute('aria-label', T('gallery.next'));
    bIn.setAttribute('aria-label', T('gallery.zoomin')); bIn.title = T('gallery.zoomin');
    bOut.setAttribute('aria-label', T('gallery.zoomout')); bOut.title = T('gallery.zoomout');
    root.querySelector('.gv-fit').setAttribute('aria-label', T('gallery.fit'));
    root.querySelector('.gv-fit').title = T('gallery.fit');
    root.querySelector('.gv-hint').textContent = T('gallery.hint');
  }

  function render(animate) {
    const nw = img.naturalWidth || 1, nh = img.naturalHeight || 1;
    const W = stage.clientWidth, H = stage.clientHeight;
    const sw = nw * fit * z, sh = nh * fit * z;
    tx = sw <= W ? (W - sw) / 2 : Math.min(0, Math.max(W - sw, tx));
    ty = sh <= H ? (H - sh) / 2 : Math.min(0, Math.max(H - sh, ty));
    img.classList.toggle('anim', !!animate);
    img.style.width = nw + 'px';
    img.style.height = nh + 'px';
    img.style.transform = 'translate(' + (tx + (z <= 1.02 ? swipeDx : 0)) + 'px,' + ty + 'px) scale(' + (fit * z) + ')';
    zoomLbl.textContent = '×' + z.toFixed(1);
    bIn.disabled = z >= MAX - 0.01;
    bOut.disabled = z <= 1.01;
    stage.classList.toggle('zoomed', z > 1.02);
  }

  function fitImage(animate) {
    const nw = img.naturalWidth || 1, nh = img.naturalHeight || 1;
    fit = Math.min(stage.clientWidth / nw, stage.clientHeight / nh);
    z = 1; tx = 0; ty = 0; swipeDx = 0;
    render(animate);
  }

  function zoomAt(f, cx, cy, animate) {
    const nz = Math.max(1, Math.min(MAX, z * f));
    const k = nz / z;
    tx = cx - (cx - tx) * k;
    ty = cy - (cy - ty) * k;
    z = nz;
    render(animate);
  }

  function caption(p) {
    const c = p.caption || {};
    return (c[currentLang] || c.fr || '').trim();
  }

  function show(i) {
    idx = (i + photos.length) % photos.length;
    const p = photos[idx];
    const token = ++loadToken;
    counter.textContent = idx + 1;
    const txt = caption(p);
    capText.textContent = txt;
    capBox.classList.toggle('has-text', !!txt);
    thumbs.querySelectorAll('.gv-thumb').forEach((b, n) => {
      b.classList.toggle('active', n === idx);
      b.setAttribute('aria-current', n === idx ? 'true' : 'false');
    });
    const active = thumbs.children[idx];
    if (active) thumbs.scrollTo({ left: active.offsetLeft - thumbs.clientWidth / 2 + active.clientWidth / 2, behavior: 'smooth' });

    img.classList.add('loading');
    spinner.classList.add('on');
    img.alt = p.alt || '';
    img.onload = () => {
      if (token !== loadToken) return;
      spinner.classList.remove('on');
      fitImage(false);
      requestAnimationFrame(() => img.classList.remove('loading'));
    };
    img.onerror = () => { if (token === loadToken) spinner.classList.remove('on'); };
    img.src = p.src;
    // Précharge les voisines
    [idx + 1, idx - 1].forEach(n => { const q = photos[(n + photos.length) % photos.length]; if (q) new Image().src = q.src; });
    root.querySelector('.gv-prev').style.display = root.querySelector('.gv-next').style.display = photos.length > 1 ? '' : 'none';
  }

  function go(d) { if (photos.length > 1) show(idx + d); }

  function open(id, trigger, startIndex) {
    const g = GALLERIES[id];
    if (!g || !g.photos.length) return;
    if (!root) build();
    photos = g.photos;
    lastFocus = trigger || document.activeElement;
    labels(g);
    root.querySelector('.gv-total').textContent = photos.length;
    thumbs.innerHTML = '';
    photos.forEach((p, n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'gv-thumb';
      b.setAttribute('aria-label', T('gallery.photo') + ' ' + (n + 1));
      const im = document.createElement('img');
      im.src = p.thumb || p.src; im.alt = ''; im.loading = 'lazy'; im.draggable = false;
      b.appendChild(im);
      b.addEventListener('click', () => show(n));
      thumbs.appendChild(b);
    });
    root.classList.add('open');
    isOpen = true;
    document.body.style.overflow = 'hidden';
    try { history.pushState({ gv: 1 }, ''); pushed = true; } catch (e) { pushed = false; }
    show(startIndex > 0 ? startIndex : 0);
    root.querySelector('.gv-close').focus({ preventScroll: true });
  }

  function close(fromPop) {
    if (!isOpen) return;
    isOpen = false;
    root.classList.remove('open');
    document.body.style.overflow = document.body.classList.contains('t3-open') ? 'hidden' : '';
    loadToken++;
    if (pushed && !fromPop) { pushed = false; try { history.back(); } catch (e) {} }
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  window.openGallery = open;

  document.querySelectorAll('[data-gallery]').forEach(btn => {
    // Masque le bouton tant que la galerie ne contient aucune photo
    // (les galeries prêtes mais vides sont dans gallery-data.js, à remplir plus tard).
    const g = GALLERIES[btn.dataset.gallery];
    if (!g || !g.photos.length) { const cta = btn.closest('.gallery-cta'); if (cta) cta.style.display = 'none'; return; }
    btn.addEventListener('click', () => open(btn.dataset.gallery, btn));
  });
}


// ===== Cartes 3D (Teotihuacán, Monte Albán) — chargées à la demande =====
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src; el.onload = resolve; el.onerror = reject;
    document.head.appendChild(el);
  });
}
function initTeo3D() {
  document.querySelectorAll('[data-open3d]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.open3d || 'teotihuacan';
      try {
        if (!window.Site3D) { btn.classList.add('loading'); await loadScript('site3d.js'); }
        if (!window.Site3D.has(id)) { btn.classList.add('loading'); await loadScript(id + '-3d.js'); }
        window.Site3D.open(id, btn);
      } catch (e) { console.error(e); }
      btn.classList.remove('loading');
    });
  });
}
