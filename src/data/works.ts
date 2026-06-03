import augmentedPleasureTitle from "@/assets/augmented-pleasure/title.jpg";
import augmentedPleasure1 from "@/assets/augmented-pleasure/1.jpg";
import augmentedPleasure2 from "@/assets/augmented-pleasure/2.jpg";
import shopfliftTitlePic from "@/assets/shopflift/titlepicture.jpg";
import shopflift1 from "@/assets/shopflift/1.jpg";
import shopflift2 from "@/assets/shopflift/2.jpg";
import shopflift3 from "@/assets/shopflift/3.jpg";
import shopflift4 from "@/assets/shopflift/4.jpg";
import shopflift5 from "@/assets/shopflift/5.jpg";
import shopflift6 from "@/assets/shopflift/6.jpg";
import shopflift7 from "@/assets/shopflift/7.jpg";
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
import apex1_6 from "@/assets/apex/1-6.jpg";
import apex2_8 from "@/assets/apex/2-8.jpg";
import apex3_8 from "@/assets/apex/3-8.jpg";
import apex4_7 from "@/assets/apex/4-7.jpg";
import apex5 from "@/assets/apex/5.jpg";
import apex6 from "@/assets/apex/6.jpg";

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
      "Augmented Pleasure verbindet Film, Duft, Sound und Objekt zu einer räumlichen Situation zwischen Genuss und Erschöpfung.",
      "Künstliche Stimmen, Obstfiguren und Stillleben erscheinen präzise organisiert, bleiben jedoch körperlich leer.",
      "Ein deformierter 3D-Druck eines Eisbechers verweist auf Genuss als Versprechen, das sich im Moment seiner Einlösung auflöst.",
    ],
    descriptionEN: [
      "Augmented Pleasure combines film, scent, sound, and object into a spatial situation between pleasure and exhaustion.",
      "Artificial voices, fruit figures, and still lifes appear precisely organized, yet remain physically empty.",
      "A deformed 3D print of an ice cream sundae points to pleasure as a promise that dissolves at the moment of its fulfillment.",
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
    images: [shopflift1, shopflift2, shopflift3, shopflift4, shopflift5, shopflift6, shopflift7],
    descriptionDE: [
      "Die Installation greift die Ästhetik von Luxusdisplays auf. Auf schwarzen Präsentationstischen liegen transparente Objekte, die aus Bildern von Schmuck und Luxusartikeln generiert wurden.",
      "Die Formen wirken fragil und entleert. Sie verweisen auf Konsum und Besitz, ohne selbst funktionale Objekte zu sein. Der Raum bewegt sich zwischen Boutique, Ausstellung und Bühne.",
      "Werkbestandteile",
      "Shop Lift\nHolz, Pappe, Geschenkpapier, Blech, Minicomputer, Taster, Matrix, Roboter, Sound\n260 × 190 × 20 cm",
      "Meltdown Gems\n\u201Egestohlene Bilder\u201C, Digitaldruck auf Plexiglas\nMa\u00DFe variabel",
      "Faded Glory\n\u201Egestohlene Bilder\u201C, 3D-Druck aus PLA, Digitaldruck auf Silikon\nMa\u00DFe variabel",
      "Neverfull\nDigitaldruck auf PVC\n31 × 28 × 14 cm",
    ],
    descriptionEN: [
      "The installation takes up the aesthetics of luxury displays. On black presentation tables lie transparent objects generated from images of jewelry and luxury goods.",
      "The forms appear fragile and emptied. They reference consumption and ownership without being functional objects themselves. The space moves between boutique, exhibition, and stage.",
      "Work components",
      "Shop Lift\nWood, cardboard, wrapping paper, sheet metal, minicomputer, pushbutton, matrix, robot, sound\n260 × 190 × 20 cm",
      "Meltdown Gems\n\"stolen images\", digital print on plexiglass\nDimensions variable",
      "Faded Glory\n\"stolen images\", 3D print made of PLA, digital print on silicone\nDimensions variable",
      "Neverfull\nDigital print on PVC\n31 × 28 × 14 cm",
    ],
  },
  {
    slug: "apex",
    titleDE: "apex",
    titleEN: "apex",
    year: "2026",
    subtitleDE: "Gips, Stoff, Edelstahl, Stahl, Elektronik\nca 330 × 50 × 50 cm",
    subtitleEN: "Plaster, fabric, stainless steel, steel, electronics\nApprox. 330 × 50 × 50 cm",
    images: [apex1_6, apex2_8, apex3_8, apex4_7, apex5, apex6],
    descriptionDE: [
      "apex besteht aus drei übereinander angeordneten Unterkörpern in weißer Arbeitskleidung. Die Figuren stehen auf Edelstahlkochtöpfen, die den vertikalen Aufbau provisorisch stabilisieren.",
      "Sichtbare Haltesysteme, Sensorik, Licht und Vibration halten die Konstruktion in Betrieb.",
      "Die Arbeit zeigt keinen Aufstieg als Ziel, sondern als Zustand permanenter Korrektur.",
    ],
    descriptionEN: [
      "apex consists of three lower bodies in white work clothing arranged on top of each other. The figures stand on stainless steel cooking pots that provisionally stabilize the vertical structure.",
      "Visible support systems, sensors, light, and vibration keep the construction in operation.",
      "The work shows ascent not as a goal but as a state of permanent correction.",
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
      "Die Arbeit verbindet Waschbecken und Toilette über ein verzweigtes Kupferrohrsystem zu einer erhöhten Konstruktion. Wasser zirkuliert durch die Struktur und tritt als kleiner Brunnen aus der Toilettenschüssel aus.",
      "Die Elemente wirken vertraut, bleiben jedoch unbenutzbar: zu hoch, zu weit entfernt, verschoben.",
    ],
    descriptionEN: [
      "The work connects sink and toilet via a branching copper pipe system into an elevated construction. Water circulates through the structure and emerges as a small fountain from the toilet bowl.",
      "The elements appear familiar yet remain unusable: too high, too far away, displaced.",
    ],
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
      "BA:T basiert auf Aufnahmen einer Tischlerei kurz vor ihrem Abriss. Zwischen Werkstatt, Baustelle und Alltag entsteht ein fragmentierter Blick auf Arbeit und Produktion.",
      "Bilder aus Handwerk, Bau und industrieller Umgebung treffen auf Textfragmente zu Arbeit, Profit und Abhängigkeit.",
      "Die Rollen von Künstler, Arbeiter und Produzent bleiben bewusst unklar.",
    ],
    descriptionEN: [
      "BA:T is based on footage of a carpentry workshop shortly before its demolition. Between workshop, construction site, and everyday life, a fragmented view of work and production emerges.",
      "Images from craft, construction, and industrial surroundings meet text fragments on labor, profit, and dependency.",
      "The roles of artist, worker, and producer are deliberately left unclear.",
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
      "Für die Arbeit wurde eine Dachkonstruktion auf Grundlage eines realen Vertrags gefertigt.",
      "Während der Ausstellung konnten Besucher*innen versuchen, die Produktionskosten zu decken, indem sie Geld in einen Schlitz im Sockel eines Kopfes warfen.",
      "Die Summe wurde nicht erreicht. Die offene Rechnung wurde anschließend durch eigene Arbeitsleistung beglichen.",
    ],
    descriptionEN: [
      "For the work, a roof construction was made based on a real contract.",
      "During the exhibition, visitors could try to cover the production costs by dropping money into a slot in the base of a head.",
      "The sum was not reached. The outstanding bill was subsequently settled through the artist's own labor.",
    ],
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
      "Über eine Online-Plattform für Handwerksdienstleistungen wurde der Bau einer Wand ausgeschrieben. Es folgten Angebote, Preisberechnungen und standardisierte Kommunikation.",
      "Aus Chats, Dokumenten und Angeboten entstand eine Installation und Videoarbeit. Die Wand selbst wird nie gebaut.",
    ],
    descriptionEN: [
      "The construction of a wall was put out for tender via an online platform for craft services. Offers, price calculations, and standardized communication followed.",
      "From chats, documents, and offers, an installation and video work emerged. The wall itself is never built.",
    ],
  },
  {
    slug: "beobachtung-2-ordnung",
    titleDE: "Beobachtung 2. Ordnung",
    titleEN: "2nd order observation",
    year: "2019",
    subtitleDE: "Performance, Protokolle, Zusammenarbeit mit Jakob Margit Wirth\nAlexanderplatz, Berlin",
    subtitleEN: "Performance, protocols, collaboration with Jakob Margit Wirth\nAlexanderplatz, Berlin",
    titleImage: beobachtungTitlePic,
    imageGroups: [1, 1, 1, 2, 2, 2],
    images: [beobachtung1, beobachtung2, beobachtung3, beobachtung4, beobachtung5, beobachtung6, beobachtung7, beobachtung8, beobachtung9],
    descriptionDE: [
      "Vor einer temporären Polizeiwache am Berliner Alexanderplatz wurde eine Beobachtungssituation eingerichtet. Auf einem Klappstuhl sitzend protokollierte eine Person die Aktivitäten der Polizeistation und ihrer Umgebung.",
      "Grundlage war ein Formular, das an polizeiliche Beobachtungsprotokolle angelehnt ist. Bewegungen und Reaktionen wurden systematisch erfasst.",
      "Die Situation endete mit dem Abführen der beobachtenden Person.",
    ],
    descriptionEN: [
      "An observation situation was set up in front of a temporary police station at Berlin's Alexanderplatz. Sitting on a folding chair, a person documented the activities of the police station and its surroundings.",
      "The basis was a form modeled on police observation protocols. Movements and reactions were systematically recorded.",
      "The situation ended with the observer being taken away.",
    ],
  },
  {
    slug: "dichter-unter-uns",
    titleDE: "Dichter unter uns",
    titleEN: "Poets Among Us",
    year: "2018",
    subtitleDE: "Holz, Bewehrungsstahl, Spiegelblech, 480x400x250 cm\nTheaterplatz, Weimar",
    subtitleEN: "Wood, reinforcing steel, mirror sheet, 480x400x250 cm\nTheaterplatz, Weimar",
    titleImage: dichterTitlePic,
    imageGroups: [1, 1, 1, 1, 2, 1],
    images: [dichter1216, dichter1222, dichter1217, dichter6472, dichterMG1426, dichterMG1267, dichter6456],
    descriptionDE: [
      "Die Arbeit greift das Goethe-Schiller-Denkmal in Weimar auf und kehrt seine Struktur um. Der Sockel wird kopiert und auf den Kopf gestellt, die Figuren verschwinden im Boden.",
      "Zurück bleibt eine verspiegelte Plattform und eine Konstruktion aus Bewehrungsstahl, die den ursprünglichen Aufbau nur noch andeutet.",
    ],
    descriptionEN: [
      "The work takes up the Goethe-Schiller monument in Weimar and reverses its structure. The pedestal is copied and turned upside down, the figures disappear into the ground.",
      "What remains is a mirrored platform and a construction of reinforcing steel that only hints at the original structure.",
    ],
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
      "Die Reihe entwickelt architektonische Pavillons aus einfachen Handlungen wie Rauchen, Schwimmen oder Warten. Die Strukturen funktionieren wie reduzierte Bühnen ohne feste Abläufe oder eindeutige Nutzung. Sie bewegen sich zwischen Architektur, Skulptur und temporärer Situation.",
    ],
    descriptionEN: [
      "The series develops architectural pavilions from simple actions such as smoking, swimming, or waiting. The structures function as reduced stages without fixed sequences or unambiguous use. They move between architecture, sculpture, and temporary situation.",
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
      "Die Arbeiten basieren auf Fotografien urbaner Räume, die fragmentiert und neu zusammengesetzt werden. Architektonische Elemente lösen sich aus ihrem ursprünglichen Zusammenhang und bilden Konstruktionen, die vertraut wirken, aber nicht existieren können. Die Bilder bewegen sich zwischen Dokumentation und Konstruktion.",
    ],
    descriptionEN: [
      "The works are based on photographs of urban spaces that are fragmented and reassembled. Architectural elements detach from their original context and form constructions that appear familiar but cannot exist. The images move between documentation and construction.",
    ],
  },
];
