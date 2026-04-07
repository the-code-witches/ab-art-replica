import augmentedPleasureTitle from "@/assets/augmented-pleasure/title.jpg";
import augmentedPleasure1 from "@/assets/augmented-pleasure/1.jpg";
import augmentedPleasure2 from "@/assets/augmented-pleasure/2.jpg";
import shopfliftTitlePic from "@/assets/shopflift/titlepicture.jpg";
import shopflift1 from "@/assets/shopflift/1.jpg";
import shopflift2 from "@/assets/shopflift/2.jpg";
import titlepicture from "@/assets/titlepicture.jpg";
import luecke from "@/assets/1_Lücke.jpg";
import spur from "@/assets/1_Spur.jpg";
import treppe from "@/assets/1_Treppe.jpg";
import folliesTitlePic from "@/assets/follies/titlepicture.jpg";
import follies11 from "@/assets/follies/entenhausen_11.jpg";
import follies12 from "@/assets/follies/entenhausen_12.jpg";
import follies13 from "@/assets/follies/entenhausen_13.jpg";
import follies14 from "@/assets/follies/entenhausen_14.jpg";
import folliesDSC1032 from "@/assets/follies/DSC_1032.jpg";
import folliesDSC1096 from "@/assets/follies/DSC_1096.jpg";
import folliesDSC1108 from "@/assets/follies/DSC_1108.jpg";
import folliesDSC1114 from "@/assets/follies/DSC_1114.jpg";
import follies03 from "@/assets/follies/entenhausen_03.jpg";
import follies04 from "@/assets/follies/entenhausen_04.jpg";
import follies09 from "@/assets/follies/entenhausen_09.jpg";
import follies10 from "@/assets/follies/entenhausen_10.jpg";
import dichter1216 from "@/assets/dichter/1216.jpg";
import dichter1222 from "@/assets/dichter/1222.jpg";
import dichter1217 from "@/assets/dichter/1217.jpg";
import dichter6472 from "@/assets/dichter/6472.jpg";
import dichterMG1426 from "@/assets/dichter/MG_1426.jpg";
import dichterMG1267 from "@/assets/dichter/MG_1267.jpg";
import dichter6456 from "@/assets/dichter/6456.jpg";
import dichterTitlePic from "@/assets/dichter/titlepicture.jpg";
import beobachtung1 from "@/assets/beobachtung/1.jpg";
import beobachtung2 from "@/assets/beobachtung/2.jpg";
import beobachtung3 from "@/assets/beobachtung/3.jpg";
import beobachtung4 from "@/assets/beobachtung/4.jpg";
import beobachtung5 from "@/assets/beobachtung/5.jpg";
import beobachtung6 from "@/assets/beobachtung/6.jpg";
import beobachtung7 from "@/assets/beobachtung/7.jpg";
import beobachtung8 from "@/assets/beobachtung/8.jpg";
import beobachtung9 from "@/assets/beobachtung/9.jpg";
import beobachtungTitlePic from "@/assets/beobachtung/titlepicture.jpg";
import blauarbeitTitlePic from "@/assets/blauarbeit/titlepicture.jpg";
import blauarbeit7 from "@/assets/blauarbeit/7_blauarbeit_7.jpg";
import blauarbeit8 from "@/assets/blauarbeit/7_blauarbeit_8.jpg";
import blauarbeit11 from "@/assets/blauarbeit/7_blauarbeit_11.jpg";
import blauarbeit12 from "@/assets/blauarbeit/7_blauarbeit_12.jpg";
import blauarbeit13 from "@/assets/blauarbeit/7_blauarbeit_13.jpg";
import blauarbeit14 from "@/assets/blauarbeit/7_blauarbeit_14.jpg";
import blauarbeit15 from "@/assets/blauarbeit/7_blauarbeit_15.jpg";
import blauarbeit16 from "@/assets/blauarbeit/7_blauarbeit_16.jpg";
import pos1TitlePic from "@/assets/blauarbeit/pos1_titlepicture.jpg";
import pos1_1 from "@/assets/blauarbeit/pos1_1.jpg";
import pos1_2 from "@/assets/blauarbeit/pos1_2.jpg";
import pos1_3 from "@/assets/blauarbeit/pos1_3.jpg";
import pos1_4 from "@/assets/blauarbeit/pos1_4.jpg";
import pos1_5 from "@/assets/blauarbeit/pos1_5.jpg";
import pos1_6 from "@/assets/blauarbeit/pos1_6.jpg";
import pos1_7 from "@/assets/blauarbeit/pos1_7.jpg";
import pos1_8 from "@/assets/blauarbeit/pos1_8.jpg";
import batTitlePic from "@/assets/bat/titlepicture.jpg";
import gegenleistung1 from "@/assets/gegenleistung/1.jpg";
import gegenleistung2 from "@/assets/gegenleistung/2.jpg";
import gegenleistung3 from "@/assets/gegenleistung/3.jpg";
import gegenleistung4 from "@/assets/gegenleistung/4.jpg";
import gegenleistung5 from "@/assets/gegenleistung/5.jpg";
import gegenleistungTitlePic from "@/assets/gegenleistung/titlepicture.jpg";
import odeToiletteTitlePic from "@/assets/ode-toilette/titlepicture.jpg";
import odeToilette1 from "@/assets/ode-toilette/1.jpg";
import odeToilette2 from "@/assets/ode-toilette/2.jpg";
import odeToilette3 from "@/assets/ode-toilette/3.jpg";
import odeToilette4 from "@/assets/ode-toilette/4.jpg";
import odeToilette5 from "@/assets/ode-toilette/5.jpg";
import odeToilette6 from "@/assets/ode-toilette/6.jpg";

export interface Work {
  slug: string;
  titleDE: string;
  titleEN: string;
  listTitleDE?: string;
  listTitleEN?: string;
  comingSoon?: boolean;
  year: string;
  subtitleDE: string;
  subtitleEN: string;
  preambleDE?: string[];
  preambleEN?: string[];
  titleImage?: string;
  imageLayout?: "stacked" | "paired-with-full";
  imageGroups?: number[];
  videoUrl?: string;
  images: string[];
  descriptionDE: string[];
  descriptionEN: string[];
  creditDE?: string;
  creditEN?: string;
  exhibitionDE?: string;
  exhibitionEN?: string;
}

export const works: Work[] = [
  {
    slug: "augmented-pleasure",
    titleDE: "Augmented Pleasure",
    titleEN: "Augmented Pleasure",
    year: "2025",
    subtitleDE: "Kurzfilm, 4K, 6:30 min",
    subtitleEN: "Short film, 4K, 6:30 min",
    videoUrl: "https://player.vimeo.com/video/1172953475",
    titleImage: augmentedPleasureTitle,
    images: [augmentedPleasure1, augmentedPleasure2],
    descriptionDE: [
      "Augmented Pleasure untersucht das Verhältnis von digitaler Perfektion und körperlicher Wahrnehmung.",
      "Fragmentierte Szenen zeigen künstliche Stimmen, Obstfiguren und Stillleben zwischen Oberfläche und Materialität.",
      "Der Film wird auf ein Schaufenster projiziert, Duft und Mehrkanalsound erweitern die Situation in den Raum.",
      "Ein deformierter 3D-Druck eines Eisbechers verweist auf den Ausgangspunkt: Genuss als Versprechen, das sich im Moment seiner Einlösung auflöst.",
    ],
    descriptionEN: [
      "Augmented Pleasure examines the relationship between digital perfection and physical perception.",
      "Fragmented scenes show artificial voices, fruit figures, and still lifes between surface and materiality.",
      "The film is projected onto a shop window, scent and multi-channel sound extend the situation into the space.",
      "A deformed 3D print of an ice cream sundae refers to the starting point: pleasure as a promise that dissolves at the moment of its fulfillment.",
    ],
  },
  {
    slug: "shop-lift-to-fill-the-void",
    titleDE: "shop lift – to fill the void",
    titleEN: "shop lift – to fill the void",
    year: "2024",
    titleImage: shopfliftTitlePic,
    subtitleDE: "Installation\nHolz, Pappe, Geschenkpapier, Blech, Elektronik, Digitaldruck, 3D-Druck, Sound\n260 × 190 × 20 cm + variable Elemente",
    subtitleEN: "Installation\nWood, cardboard, wrapping paper, sheet metal, electronics, digital print, 3D print, sound\n260 × 190 × 20 cm + variable elements",
    preambleDE: [
      "Shop Lift\nHolz, Pappe, Geschenkpapier, Blech, Minicomputer, Taster, Matrix, Roboter, Sound\n260 × 190 × 20 cm",
      "Meltdown Gems\n\u201Egestohlene Bilder\u201C, Digitaldruck auf Plexiglas\nMa\u00DFe variabel",
      "Faded Glory\n\u201Egestohlene Bilder\u201C, 3D-Druck aus PLA, Digitaldruck auf Silikon\nMa\u00DFe variabel",
      "Neverfull\nDigitaldruck auf PVC\n31 × 28 × 14 cm",
    ],
    preambleEN: [
      "Shop Lift\nWood, cardboard, wrapping paper, sheet metal, minicomputer, pushbutton, matrix, robot, sound\n260 × 190 × 20 cm",
      "Meltdown Gems\n\"stolen images\", digital print on plexiglass\nDimensions variable",
      "Faded Glory\n\"stolen images\", 3D print made of PLA, digital print on silicone\nDimensions variable",
      "Neverfull\nDigital print on PVC\n31 × 28 × 14 cm",
    ],
    images: [shopflift1],
    descriptionDE: [
      "Die Installation greift die Ästhetik von Luxusdisplays auf. Auf schwarzen Präsentationstischen liegen transparente Objekte, die aus gestohlenen Bildern von Schmuck und Luxusartikeln generiert wurden.",
      "Die Formen wirken fragil und entleert. Sie verweisen auf Objekte, ohne diese tatsächlich zu sein.",
      "Der Raum bewegt sich zwischen Boutique, Ausstellung und Bühne. Betrachtung und Bewertung finden statt, Besitz bleibt aus.",
    ],
    descriptionEN: [
      "The installation adopts the aesthetics of luxury displays. On black presentation tables lie transparent objects generated from stolen images of jewelry and luxury goods.",
      "The forms appear fragile and emptied. They reference objects without actually being them.",
      "The space moves between boutique, exhibition, and stage. Viewing and evaluation take place, possession remains absent.",
    ],
    exhibitionDE: "Diplomausstellung, Montagehalle HBK, Braunschweig",
    exhibitionEN: "Diploma exhibition, assembly hall HBK, Braunschweig",
  },
  {
    slug: "apex",
    titleDE: "apex",
    titleEN: "apex",
    comingSoon: true,
    year: "2024",
    subtitleDE: "",
    subtitleEN: "",
    images: [],
    descriptionDE: [
      "apex besteht aus drei übereinander angeordneten Unterkörpern in weißer Arbeitskleidung. Die Figuren stehen auf Edelstahlkochtöpfen, die wie provisorische Stufen einen vertikalen Aufbau bilden.",
      "Die Körperspannung steigert sich von unten nach oben und kippt in eine instabile Haltung.",
      "Sichtbare Haltesysteme stabilisieren die Konstruktion. Sensorik, Licht und Vibration reagieren auf Nähe.",
      "Die Arbeit erscheint als System im Dauerbetrieb, das nur durch permanente Korrektur aufrechterhalten wird.",
    ],
    descriptionEN: [
      "apex consists of three lower bodies in white work clothing arranged on top of each other. The figures stand on stainless steel cooking pots that form a vertical structure like makeshift steps.",
      "The body tension increases from bottom to top and tips into an unstable posture.",
      "Visible support systems stabilize the construction. Sensors, light, and vibration react to proximity.",
      "The work appears as a system in continuous operation, maintained only through permanent correction.",
    ],
  },
  {
    slug: "ode-toilette",
    titleDE: "Ode Toilette",
    titleEN: "Ode Toilet",
    year: "2023",
    subtitleDE: "Baustahl, Styropor, Polymergips, Kunststoff, Lack, Springbrunnenpumpe, 200x60x455 cm",
    subtitleEN: "Structural steel, Styrofoam, polymer gypsum, plastic, varnish, fountain pump, 200x60x455 cm",
    titleImage: odeToiletteTitlePic,
    images: [odeToilette1, odeToilette2, odeToilette3, odeToilette4, odeToilette5, odeToilette6],
    imageGroups: [1, 1, 1, 1, 2],
    descriptionDE: [
      "Die Arbeit verbindet Waschbecken und Toilette über ein verzweigtes Kupferrohr zu einer erhöhten Struktur. Wasser zirkuliert durch das System und tritt als kleiner Brunnen aus der Toilettenschüssel aus.",
      "Die Elemente wirken vertraut, sind jedoch verschoben: zu hoch, zu weit entfernt, nicht nutzbar.",
      "Infrastruktur wird sichtbar, bleibt aber dem Zugriff entzogen.",
    ],
    descriptionEN: [
      "The work connects sink and toilet via a branching copper pipe into an elevated structure. Water circulates through the system and emerges as a small fountain from the toilet bowl.",
      "The elements appear familiar yet displaced: too high, too far away, unusable.",
      "Infrastructure becomes visible but remains beyond reach.",
    ],
    exhibitionDE: "Außenbereich Blumenstraße, Braunschweig",
    exhibitionEN: "Outdoor area Blumenstraße, Braunschweig",
  },
  {
    slug: "ba-t",
    titleDE: "BA:T, Bevorstehender Abriss - Tischlerei",
    titleEN: "BA:T, Upcoming Demolition - Carpentry",
    listTitleDE: "BA:T",
    listTitleEN: "BA:T",
    year: "2022",
    subtitleDE: "Kurzfilm, Super-8, 17:43 min",
    subtitleEN: "Short film, Super-8, 17:43 min",
    videoUrl: "https://player.vimeo.com/video/681392972",
    titleImage: batTitlePic,
    images: [],
    descriptionDE: [
      "BA:T basiert auf Aufnahmen einer Tischlerei kurz vor ihrem Abriss. Zwischen Werkstatt, Baustelle und Alltag entsteht ein fragmentierter Blick auf manuelle Arbeit und Produktionsbedingungen.",
      "Bilder aus Handwerk, Bau und industrieller Umgebung treffen auf Textfragmente zu Arbeit, Profit und Abhängigkeit.",
      "Die Rollen von Künstler, Arbeiter und Produzent verschieben sich. Zuständigkeiten bleiben unklar, Verantwortungen verteilt.",
    ],
    descriptionEN: [
      "BA:T is based on footage of a carpentry workshop shortly before its demolition. Between workshop, construction site, and everyday life, a fragmented view of manual labor and production conditions emerges.",
      "Images from craft, construction, and industrial surroundings meet text fragments on labor, profit, and dependency.",
      "The roles of artist, worker, and producer shift. Responsibilities remain unclear, accountability distributed.",
    ],
  },
  {
    slug: "auf-gegenleistung-gebaut",
    titleDE: "Auf Gegenleistung gebaut",
    titleEN: "Built on Return",
    year: "2021",
    subtitleDE: "Bauholz, Gießton (glasiert), Vertrag, 412x300x247 cm, 22x30x24 cm",
    subtitleEN: "Timber, cast clay (glazed), contract, 412x300x247 cm, 22x30x24 cm",
    titleImage: gegenleistungTitlePic,
    imageGroups: [1, 2, 2],
    images: [gegenleistung1, gegenleistung2, gegenleistung3, gegenleistung4, gegenleistung5],
    descriptionDE: [
      "Für die Arbeit wurde eine Dachkonstruktion von einer Zimmerei auf Grundlage eines realen Vertrags gefertigt.",
      "Während der Ausstellung konnten Besucher*innen versuchen, die Kosten zu decken, indem sie Geld in einen Schlitz im Sockel eines Kopfes warfen.",
      "Die Summe wurde nicht erreicht. Die offene Rechnung wurde im Anschluss durch eigene Arbeitsleistung im Betrieb beglichen.",
      "Die Arbeit setzt einen ökonomischen Prozess in Gang, dessen Ausgang nicht kontrolliert wird.",
    ],
    descriptionEN: [
      "For the work, a roof construction was built by a carpentry workshop based on a real contract.",
      "During the exhibition, visitors could try to cover the costs by dropping money into a slot in the base of a head.",
      "The sum was not reached. The outstanding bill was subsequently settled through the artist's own labor at the workshop.",
      "The work sets an economic process in motion whose outcome is not controlled.",
    ],
    creditDE: "aus Ausstellungskatalog, verfasst von\nMonja Remmers, Alice Tiralongo, Melina Rudolf, Anna Mosemann, Alrun Aßmus",
    creditEN: "from the exhibition catalogue, written by\nMonja Remmers, Alice Tiralongo, Melina Rudolf, Anna Mosemann, Alrun Aßmus",
    exhibitionDE: "Ausstellung \"kon.:takt\", Kunstproduktionsraum Make-up, Berlin",
    exhibitionEN: "Exhibition \"kon.:takt\", art production space Make-up, Berlin",
  },
  {
    slug: "b-l-auarbeit-positionen-1-wand",
    titleDE: "B(l)auarbeit - Positionen 1 Wand",
    titleEN: "B(l)auarbeit - Positions 1 Wall",
    year: "2020",
    subtitleDE: "Videoanimation, Austausch / Angebote",
    subtitleEN: "Video animation, exchange / offers",
     titleImage: pos1TitlePic,
    videoUrl: "https://player.vimeo.com/video/510338690",
    preambleDE: [
      "B(u)ilder schicken",
      "im Klo hinunter gespült werden",
      "wenn ich in den Spiegel schaue",
      "den Helm in der Hand",
      "bewegen und denke vielleicht",
      "lös ich mich in Luft auf",
      "meinen Platz find ich",
      "manchmal wirklich nass",
      "wie Staub herunterfallen",
      "und das Ende nicht erkennen",
      "während ich das Brett entlang gehe",
      "in einen anderen Raum",
      "verliere das Gleichgewicht",
      "beim ins Licht sehen",
      "das Licht ausmachen",
      "warten auf Arbeit",
    ],
    preambleEN: [
      "Send pictures",
      "be flushed down the toilet",
      "when I look in the mirror",
      "the helmet in hand",
      "move and think maybe",
      "I vanish into thin air",
      "I find my place",
      "sometimes really wet",
      "fall like dust",
      "and do not recognize the end",
      "as I walk along the board",
      "into another room",
      "lose balance",
      "when looking into the light",
      "turn off the light",
      "waiting for work",
    ],
    imageGroups: [2, 2, 2, 2],
    images: [pos1_1, pos1_2, pos1_3, pos1_4, pos1_5, pos1_6, pos1_7, pos1_8],
    descriptionDE: [
      "Über eine Online-Plattform für Handwerksdienstleistungen wurde ein Auftrag ausgeschrieben: der Bau einer Wand.",
      "Es folgten Angebote, Preisberechnungen und standardisierte Kommunikation. Die Interaktion blieb anonym und funktional.",
      "Aus den Angeboten, Chats und Dokumenten entstand eine Videoarbeit und Installation.",
      "Die Wand bildet den Ausgangspunkt der Arbeit – gebaut wird sie nie. Sie existiert ausschließlich als Projekt, als Angebot und als Kommunikation. Der Raum bleibt leer.",
    ],
    descriptionEN: [
      "A job was posted on an online platform for craft services: the construction of a wall.",
      "Offers, price calculations, and standardized communication followed. The interaction remained anonymous and functional.",
      "From the offers, chats, and documents, a video work and installation emerged.",
      "The wall forms the starting point of the work – it is never built. It exists solely as a project, as an offer, and as communication. The space remains empty.",
    ],
    exhibitionDE: "Ausstellung, nbk Berlin, Berlin",
    exhibitionEN: "Exhibition, nbk Berlin, Berlin",
  },
  {
    slug: "beobachtung-2-ordnung",
    titleDE: "Beobachtung 2. Ordnung",
    titleEN: "2nd order observation",
    year: "2019",
    subtitleDE: "Performance, Protokolle, Zusammenarbeit mit Jakob Wirth",
    subtitleEN: "Performance, protocols, collaboration with Jakob Wirth",
    titleImage: beobachtungTitlePic,
    imageGroups: [1, 1, 1, 2, 2, 2],
    images: [beobachtung1, beobachtung2, beobachtung3, beobachtung4, beobachtung5, beobachtung6, beobachtung7, beobachtung8, beobachtung9],
    descriptionDE: [
      "Vor einer temporären Polizeiwache am Berliner Alexanderplatz wurde eine Beobachtungssituation eingerichtet. Auf einem Klappstuhl sitzend protokollierte eine Person die Aktivitäten der Polizeistation und ihrer Umgebung.",
      "Grundlage war ein Formular, das an polizeiliche Beobachtungsprotokolle angelehnt ist. Bewegungen, Verhalten und Reaktionen wurden systematisch erfasst.",
      "Die gewohnte Ordnung kehrte sich kurzfristig um: Die überwachende Instanz wurde selbst beobachtet. Die Situation führte zu Irritationen und endete mit dem Abführen der beobachtenden Person.",
    ],
    descriptionEN: [
      "An observation situation was set up in front of a temporary police station at Berlin's Alexanderplatz. Sitting on a folding chair, a person documented the activities of the police station and its surroundings.",
      "The basis was a form modeled on police observation protocols. Movements, behavior, and reactions were systematically recorded.",
      "The usual order was briefly reversed: the monitoring authority itself became the subject of observation. The situation led to irritation and ended with the observer being taken away.",
    ],
    exhibitionDE: "Alexanderplatz, Berlin",
    exhibitionEN: "Alexanderplatz, Berlin",
  },
  {
    slug: "dichter-unter-uns",
    titleDE: "Dichter unter uns",
    titleEN: "Poets Among Us",
    year: "2018",
    subtitleDE: "Holz, Bewehrungsstahl, Spiegelblech, 480x400x250 cm",
    subtitleEN: "Wood, reinforcing steel, mirror sheet, 480x400x250 cm",
    titleImage: dichterTitlePic,
    imageGroups: [1, 1, 1, 1, 2, 1],
    images: [dichter1216, dichter1222, dichter1217, dichter6472, dichterMG1426, dichterMG1267, dichter6456],
    descriptionDE: [
      "Die Arbeit greift das Goethe-Schiller-Denkmal in Weimar auf und kehrt seine Struktur um. Der Sockel wird kopiert und auf den Kopf gestellt, die Figuren verschwinden im Boden.",
      "Zurück bleibt eine leere, verspiegelte Plattform und eine fragile Konstruktion aus Bewehrungsstahl, die den ursprünglichen Aufbau nur noch andeutet.",
      "Das Monument erscheint als Umkehrung seiner selbst: offen, instabil und ohne klare Zuschreibung. Die Plattform wird zur Projektionsfläche, auf der sich die Frage nach Sichtbarkeit und Autorität neu stellt.",
    ],
    descriptionEN: [
      "The work takes up the Goethe-Schiller monument in Weimar and reverses its structure. The pedestal is copied and turned upside down, the figures disappear into the ground.",
      "What remains is an empty, mirrored platform and a fragile construction of reinforcing steel that only hints at the original structure.",
      "The monument appears as a reversal of itself: open, unstable, and without clear attribution. The platform becomes a projection surface on which the question of visibility and authority is posed anew.",
    ],
    exhibitionDE: "Theaterplatz, Weimar",
    exhibitionEN: "Theaterplatz, Weimar",
  },
  {
    slug: "follies-of-quiet-desires",
    titleDE: "Follies of Quiet Desires",
    titleEN: "Follies of Quiet Desires",
    year: "2017",
    subtitleDE: "Zeichnungen, digital",
    subtitleEN: "Drawings, digital",
    titleImage: folliesTitlePic,
    imageLayout: "paired-with-full",
    images: [
      follies13, follies14, folliesDSC1114,
      follies11, follies12, folliesDSC1108,
      follies09, follies10, folliesDSC1096,
      follies03, follies04, folliesDSC1032,
    ],
    descriptionDE: [
      "Die Reihe entwickelt architektonische Pavillons aus einfachen Handlungen wie Rauchen, Schwimmen oder Warten. Die Strukturen sind offen, kreisförmig und ohne eindeutige Ausrichtung.",
      "Sie funktionieren wie reduzierte Bühnen, die keine festen Abläufe vorgeben. Aufenthalt, Beobachtung und Handlung bleiben gleichwertig.",
      "Formen, Materialien und Maßstäbe entstehen aus den jeweiligen Situationen heraus. Die Pavillons sind weder Gebäude noch Skulptur, sondern temporäre Anordnungen für minimale, wiederkehrende Handlungen.",
    ],
    descriptionEN: [
      "The series develops architectural pavilions from simple actions such as smoking, swimming, or waiting. The structures are open, circular, and without clear orientation.",
      "They function as reduced stages that do not prescribe fixed sequences. Staying, observing, and acting remain equivalent.",
      "Forms, materials, and scales emerge from the respective situations. The pavilions are neither buildings nor sculptures, but temporary arrangements for minimal, recurring actions.",
    ],
  },
  {
    slug: "konstruktion-der-erinnerung",
    titleDE: "Konstruktion der Erinnerung",
    titleEN: "Construction of Memory",
    year: "2017",
    subtitleDE: "Fotocollagen, digital",
    subtitleEN: "Photo collages, digital",
    titleImage: titlepicture,
    images: [luecke, spur, treppe],
    descriptionDE: [
      "Die Arbeiten basieren auf Fotografien von Orten im Stadtraum, die fragmentiert und neu zusammengesetzt werden. Einzelne architektonische Elemente lösen sich aus ihrem ursprünglichen Kontext und bilden Konstruktionen, die vertraut wirken und zugleich nicht existieren können.",
      "Perspektiven kippen, Räume verschieben sich, Gebäude greifen ineinander. Es entstehen Situationen, die sich wie Erinnerungen lesen lassen, ohne je stattgefunden zu haben.",
      "Die Bilder bewegen sich zwischen Dokument und Konstruktion. Vertraute Orte bleiben erkennbar, entziehen sich jedoch einer eindeutigen Zuordnung.",
    ],
    descriptionEN: [
      "The works are based on photographs of places in urban space that are fragmented and reassembled. Individual architectural elements detach from their original context and form constructions that appear familiar yet cannot exist.",
      "Perspectives tilt, spaces shift, buildings interlock. Situations emerge that can be read like memories without ever having taken place.",
      "The images move between document and construction. Familiar places remain recognizable yet elude clear identification.",
    ],
  },
];
