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
    "can.p1": "Un seul mot d'ordre : farniente. Au Q Bay Hotel, le directeur, émerveillé par notre origine parisienne, nous offre une suite all-inclusive au prix d'une chambre standard. Hôtel quasi vide hors saison. Piscine et plage pour nous seuls. Un véritable palace déserté."
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
    "can.p1": "Only one watchword: rest. At Q Bay Hotel the manager, delighted by our Parisian origin, offers us an all-inclusive suite at the price of a standard room. Almost empty hotel out of season. Pool and beach all to ourselves. A true deserted palace."
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
    "can.p1": "Una sola consigna: descanso. En el Q Bay Hotel el director, maravillado por nuestro origen parisino, nos ofrece una suite todo incluido al precio de una habitación estándar. Hotel casi vacío fuera de temporada. Piscina y playa solo para nosotros. Un verdadero palacio desierto."
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
  initTimeline();
  initSmoothScroll();
});

// Theme
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'dark';
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
