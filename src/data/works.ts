export interface Work {
  slug: string;
  titleDE: string;
  titleEN: string;
  year: string;
  subtitleDE: string;
  subtitleEN: string;
  preambleDE?: string[];
  preambleEN?: string[];
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
    slug: "shop-lift-to-fill-the-void",
    titleDE: "shop lift - to fill the void",
    titleEN: "shop lift - to fill the void",
    year: "2024",
    subtitleDE: "Shop Lift, Holz, Pappe, Geschenkpapier, Blech, Minicomputer, Taster, Matrix, Roboter, Sound, 260x190x20 cm\nMeltdown Gems, \"gestohlene Bilder\", Digitaldruck auf Plexiglas, Maße variabel\nFaded Glory, \"gestohlene Bilder\", 3D-Druck aus PLA, Digitaldruck auf Silikon, Maße variabel\nNeverfull, Digitaldruck auf PVC, 31x28x14 cm",
    subtitleEN: "Shop lift, wood, cardboard, wrapping paper, sheet metal, minicomputer, pushbutton, matrix, robot, sound, 260x190x20 cm\nMeltdown Gems, \"stolen pictures\", digital print on plexiglass, dimensions variable\nFaded Glory, \"stolen images\", 3D print made of PLA, digital print on silicone, dimensions variable\nNeverfull, digital print on PVC, 31x28x14 cm",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: [
      `„shoplift – to fill the void" erforscht die Mechanismen von Konsum und sozialer Mobilität. Die Arbeit thematisiert den Rausch des Kaufens, die Verheißung von Besitz und den Moment, in dem die Erfüllung ins Leere läuft. Was passiert, wenn das Begehren nachlässt und Objekte ihre Bedeutung verlieren?`,
      "Mittels Imitation von wertvollen Luxusobjekten durch gestohlene Bilder hinterfragt die Installation, wie gesellschaftliche Strukturen unsere Wünsche formen und welchen Preis wir für Zugehörigkeit zahlen.",
    ],
    descriptionEN: [
      "\"Shoplift – To Fill the Void\" explores the mechanisms of consumption and social mobility. The work addresses the rush of buying, the promise of possession, and the moment when fulfillment runs into the void. What happens when desire fades and objects lose their meaning?",
      "By imitating valuable luxury objects through stolen images, the installation questions how social structures shape our desires and the price we pay for belonging.",
    ],
    exhibitionDE: "Diplomausstellung, Montagehalle HBK, Braunschweig",
    exhibitionEN: "Diploma exhibition, assembly hall HBK, Braunschweig",
  },
  {
    slug: "ode-toilette",
    titleDE: "Ode Toilette",
    titleEN: "Ode Toilet",
    year: "2023",
    subtitleDE: "Baustahl, Styropor, Polymergips, Kunststoff, Lack, Springbrunnenpumpe, 200x60x455 cm",
    subtitleEN: "Structural steel, Styrofoam, polymer gypsum, plastic, varnish, fountain pump, 200x60x455 cm",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: [
      "Sanitärinfrastrukturen spiegeln gesellschaftliche Machtverhältnisse wider. Wer hat freien Zugang, wer wird ausgeschlossen? Geschlecht, Mobilität und finanzielle Mittel entscheiden darüber, ob ein Grundbedürfnis erfüllt werden kann.",
      "Toiletten sind existenziell, universell – und gerade deshalb ein wirkungsvolles Instrument sozialer Kontrolle. Die Arbeit macht die Unerreichbarkeit grundlegender Infrastruktur erfahrbar und verdeutlicht, wie tief soziale Spaltungen in die Stadt eingeschrieben sind und wie grundlegende Bedürfnisse durch ökonomische und politische Strukturen reguliert werden.",
    ],
    descriptionEN: [
      "Sanitation infrastructures reflect social power relations. Who has free access, and who is excluded? Gender, mobility, and financial means determine whether a basic need can be met.",
      "Toilets are existential, universal – and precisely for this reason, an effective instrument of social control. The work makes the inaccessibility of basic infrastructure tangible and illustrates how deeply social divisions are inscribed in the city and how basic needs are regulated by economic and political structures.",
    ],
    exhibitionDE: "Außenbereich Blumenstraße, Braunschweig",
    exhibitionEN: "Outdoor area Blumenstraße, Braunschweig",
  },
  {
    slug: "ba-t",
    titleDE: "BA:T, Bevorstehender Abriss - Tischlerei",
    titleEN: "BA:T, Upcoming Demolition - Carpentry",
    year: "2022",
    subtitleDE: "Kurzfilm, Super-8, 17:43 min",
    subtitleEN: "Short film, Super-8, 17:43 min",
    images: [],
    descriptionDE: [
      "BA:T: beleuchtet die Dynamik zwischen Kunst, Handwerk und wirtschaftlicher Verwertbarkeit. Produktionsprozesse erstrecken sich über lange, globale Ketten der Verantwortungsauslagerung, während kreative Arbeit oft zwischen Broterwerb und Selbstausbeutung schwankt. Was bedeutet Wertschöpfung in einem System, das künstlerische, manuelle und industrielle Arbeit gegeneinander ausspielt?",
      "Wer profitiert, wer trägt die Last? Die Arbeit hinterfragt Anerkennung, ökonomische Zwänge und die Bedingungen, unter denen künstlerische Praxis existiert.",
    ],
    descriptionEN: [
      "BA:T: explores the dynamics between art, craft, and economic viability. Production processes extend across long, global chains of outsourcing, while creative work often fluctuates between earning a living and self-exploitation. What does value creation mean in a system that pits artistic, manual, and industrial labor against each other?",
      "Who benefits, who bears the burden? The work questions recognition, economic constraints, and the conditions under which artistic practice exists.",
    ],
  },
  {
    slug: "auf-gegenleistung-gebaut",
    titleDE: "Auf Gegenleistung gebaut",
    titleEN: "Built on Return",
    year: "2021",
    subtitleDE: "Bauholz, Gießton (glasiert), Vertrag, 412x300x247 cm, 22x30x24 cm",
    subtitleEN: "Timber, cast clay (glazed), contract, 412x300x247 cm, 22x30x24 cm",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: [
      "Während der Ausstellungsdauer wurde versucht, die Auftragssumme von den Besucher*innen einzusammeln, in dem sie das Geld in den Schlitz im Kopf werfen sollten. Reichte das Geld nicht, musste A.B. die offene Rechnung mit der eigenen Arbeitskraft bei Zimmerei Dahms begleichen.",
      "Fazit:\n\nEs wurde nicht genug Geld gesammelt. A.B. hat die Rechnung im Anschluss beglichen und 3 Tage bei Zimmerei Dahms gearbeitet.",
      "Die Arbeit zeigt den Alltag von Handwerker*innen. Was ist so eine Arbeit oder auch ein Handwerk in der Kunst wert? Bei einem Tausch treten zwei Tauschende in Kontakt. Sie geben jeweils etwas von sich, mit der Absicht, eine Gegenleistung dafür zu erhalten.",
      "Dabei ist nicht fest geregelt, ob das Getauschte den gleichen Wert haben sollte. Auch entspricht es der moralischen Auffassung der Tauschenden, inwiefern sie sich auf einen fairen Tausch einlassen wollen. Mit einem Vertrag, der in schriftlicher oder mündlicher Form abgeschlossen werden kann, wird die Abmachung der verschiedenen Parteien festgehalten.",
    ],
    descriptionEN: [
      "During the exhibition, an attempt was made to collect the contract amount from visitors by asking them to drop money into the slot in the head. If the money wasn't enough, AB had to settle the outstanding invoice with his own labor at the Dahms carpentry shop.",
      "Conclusion:\n\nNot enough money was collected. AB subsequently paid the bill and worked for three days at Dahms Carpentry.",
      "The work depicts the everyday lives of artisans. What is the value of such work, or even of a craft in art? In an exchange, two exchangers come into contact. They each give something of themselves with the intention of receiving something in return.",
      "There are no strict rules about whether the exchanged items should have the same value. It also depends on the moral values of the exchangers as to the extent to which they want to engage in a fair exchange. A contract, which can be concluded in written or oral form, records the agreement between the various parties.",
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: [
      "Ein Raum, der die Schnittstelle zwischen Kunst und Handwerk zeigt, eine Wand, die Beide trennt. Das Handwerk im digitalen Zeitalter: Arbeitskraft online anbieten, anonyme Bewertungen, abstrakte Anfragen, wie: eine Wand gemeinsam zu bauen.",
      "Über den Bau von etwas Trennendem Gemeinsamkeiten herausfinden.",
      "Es kommt nicht dazu. Eine materielle Wand entsteht nicht. Weil es genau diese Wand in geistiger Form von Anfang an gegeben hat, der Raum bleibt leer und ungeteilt.",
    ],
    descriptionEN: [
      "A space that demonstrates the intersection between art and craft, a wall separating the two. Crafts in the digital age: offering labor online, anonymous evaluations, abstract requests, such as building a wall together.",
      "Finding commonalities through the construction of something that divides us.",
      "It does not happen. A material wall does not arise. Because this wall exists in spiritual form from the beginning, space remains empty and undivided.",
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: [
      "Wer beobachtet, wer wird beobachtet? Welchen Dominanzen sind wir im öffentlichen Raum ausgesetzt, wer wird verdrängt? Eine Polizeitstation am Berliner Alexanderplatz sollte vor 3 Jahren für Ordnung und Sicherheit sorgen. Seitdem überwachen Kameras rund um die Uhr die Umgebung.",
      "Während der Intervention wurde die Polizeitstation, das exekutive Subjekt, observiert, und damit die Subjekt-Objekt-Ordnung kurzzeitig umgekehrt. Die Beamt*innen reagierten mit Unruhe auf den Verlust der Subjekt-Position. Die \"Beobachtung 2. Ordnung\" wurde abgeführt.",
    ],
    descriptionEN: [
      "Who is watching, who is being watched? What dominance are we exposed to in public spaces, and who is being pushed out? Three years ago, a police station at Berlin's Alexanderplatz was supposed to ensure order and security. Since then, cameras have been monitoring the area around the clock.",
      "During the intervention, the police station, the executive subject, was observed, thus briefly reversing the subject-object order. The officers reacted with unease to the loss of subject position. The \"second-order observation\" was removed.",
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: [
      "Der kopierte Sockel von Goethe und Schiller wird auf den Kopf gestellt. Ihre Figuren sind unter der Erde verschwunden, während eine leere, verspiegelt Plattform zurückbleibt.",
      "Die Silhouette aus Bewehrungsstahl bleibt brüchig und unvollständig – eine gespiegelt-umgekehrte Präsenz.",
      "In der Abwesenheit entsteht ein Raum der Aneignung und Entwertung, in dem Macht und Besitz nicht mehr als gegeben, sondern als durchbrechbar und fragil erscheinen. Wer besitzt den Raum, wer bleibt unbenannt? Ein Monument der Umkehrung, das Geschichte und Erinnerung neu verhandelt.",
    ],
    descriptionEN: [
      "The copied pedestal of Goethe and Schiller is turned upside down. Their figures have disappeared underground, leaving an empty, mirrored platform.",
      "The silhouette of reinforcing steel remains fragile and incomplete – a mirrored, inverted presence.",
      "In absence, a space of appropriation and devaluation arises, in which power and possession no longer appear as given, but as breakable and fragile. Who owns the space, who remains unnamed? A monument of reversal, that renegotiates history and memory.",
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
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: [
      "Rauchen, Schwimmen, Denken, Mitteilen, Trinken – alltägliche Rituale, eingefangen in architektonischen Fragmenten. Die Pavillons sind offene Räume des Erlebens, kreisförmig, ohne Grenzen, ohne Ecken, ohne Versteck.",
      "Konkave und konvexe Formen fließen ineinander, Farben und Materialien treffen eklektisch aufeinander. Architektur wird zur Geste, zur stillen Einladung, zum Ort des Genusses und der Begegnung.",
    ],
    descriptionEN: [
      "Smoking, swimming, thinking, communicating, drinking – everyday rituals captured in architectural fragments. The pavilions are open spaces of experience, circular, without borders, without corners, without hiding places.",
      "Concave and convex forms flow into one another, colors and materials collide eclectically. Architecture becomes a gesture, a silent invitation, a place of enjoyment and encounter.",
    ],
  },
  {
    slug: "konstruktion-der-erinnerung",
    titleDE: "Konstruktion der Erinnerung",
    titleEN: "Construction of Memory",
    year: "2017",
    subtitleDE: "Fotocollagen, digital",
    subtitleEN: "Photo collages, digital",
    images: [
      "/src/assets/titlepicture.jpg",
      "/src/assets/1_Lücke.jpg",
      "/src/assets/1_Spur.jpg",
      "/src/assets/1_Treppe.jpg",
    ],
    descriptionDE: [
      "Spuren von Vergangenem wecken in uns Erinnerungen. Was passiert, wenn wir diesen Momenten besondere Aufmerksamkeit schenken? Wenn wir das Gedächtnis des Auges nutzen, um Neues zu erschaffen? Fragmentarische Erinnerungsbilder wurden an verschiedenen Orten festgehalten und zu fiktiven Realitäten montiert. Imaginäre Konstruktionen im Stadtraum.",
      "Neue Erinnerungen die zwischen Realität und Fiktion changieren. Fiktion ist dabei nicht unbedingt mit Fantasie gleichzusetzen. Sie zieht ihre Kraft vielmehr aus der Fähigkeit, eine Reflexion über die Realität anzustoßen.",
    ],
    descriptionEN: [
      "Traces of the past awaken memories in us. What happens when we pay special attention to these moments? When we use the memory of the eye to create something new? Fragmentary images of memories were captured at various locations and assembled into fictitious realities. Imaginary constructions in urban space.",
      "New memories that oscillate between reality and fiction. Fiction is not necessarily to be equated with fantasy. Rather, it draws its power from the ability to trigger a reflection on reality.",
    ],
  },
];
