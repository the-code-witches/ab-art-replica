export interface Work {
  slug: string;
  titleDE: string;
  titleEN: string;
  year: string;
  subtitleDE: string;
  subtitleEN: string;
  images: string[]; // placeholder for now
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
    year: "2023",
    subtitleDE: "Mixed Media, variable Maße",
    subtitleEN: "Mixed media, variable dimensions",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: ["Beschreibung folgt."],
    descriptionEN: ["Description coming soon."],
  },
  {
    slug: "ode-toilette",
    titleDE: "Ode Toilette",
    titleEN: "Ode Toilet",
    year: "2023",
    subtitleDE: "Mixed Media, variable Maße",
    subtitleEN: "Mixed media, variable dimensions",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: ["Beschreibung folgt."],
    descriptionEN: ["Description coming soon."],
  },
  {
    slug: "ba-t",
    titleDE: "BA:T",
    titleEN: "BA:T",
    year: "2022",
    subtitleDE: "Mixed Media, variable Maße",
    subtitleEN: "Mixed media, variable dimensions",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: ["Beschreibung folgt."],
    descriptionEN: ["Description coming soon."],
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
    year: "2021",
    subtitleDE: "Mixed Media, variable Maße",
    subtitleEN: "Mixed media, variable dimensions",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: ["Beschreibung folgt."],
    descriptionEN: ["Description coming soon."],
  },
  {
    slug: "beobachtung-2-ordnung",
    titleDE: "Beobachtung 2. Ordnung",
    titleEN: "2nd order observation",
    year: "2020",
    subtitleDE: "Mixed Media, variable Maße",
    subtitleEN: "Mixed media, variable dimensions",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: ["Beschreibung folgt."],
    descriptionEN: ["Description coming soon."],
  },
  {
    slug: "dichter-unter-uns",
    titleDE: "Dichter unter uns",
    titleEN: "Poets among us",
    year: "2020",
    subtitleDE: "Mixed Media, variable Maße",
    subtitleEN: "Mixed media, variable dimensions",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: ["Beschreibung folgt."],
    descriptionEN: ["Description coming soon."],
  },
  {
    slug: "follies-of-quiet-desires",
    titleDE: "Follies of Quiet Desires",
    titleEN: "Follies of Quiet Desires",
    year: "2019",
    subtitleDE: "Mixed Media, variable Maße",
    subtitleEN: "Mixed media, variable dimensions",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: ["Beschreibung folgt."],
    descriptionEN: ["Description coming soon."],
  },
  {
    slug: "konstruktion-der-erinnerung",
    titleDE: "Konstruktion der Erinnerung",
    titleEN: "Construction of memory",
    year: "2019",
    subtitleDE: "Mixed Media, variable Maße",
    subtitleEN: "Mixed media, variable dimensions",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descriptionDE: ["Beschreibung folgt."],
    descriptionEN: ["Description coming soon."],
  },
];
