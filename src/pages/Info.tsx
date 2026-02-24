import { Link } from "react-router-dom";

const artistStatementLinks = [
  { label: "bürokratische Sprache", href: "#" },
  { label: "institutionelle Sprache", href: "#" },
  { label: "nicht-akademische Sprache", href: "#" },
  { label: "hippe Sprache", href: "#" },
];

const education = [
  { years: "2024-2025", desc: "Meisterschüler bei Nasan Tur, Hochschule der Bildenden Künste Braunschweig" },
  { years: "2020-2024", desc: "Studium Freie Kunst, Hochschule der Bildenden Künste Braunschweig, Klasse Rentmeister, Diplom (Auszeichnung)" },
  { years: "2018-2020", desc: "Studium Raumstrategien, Weißensee Kunsthochschule Berlin" },
  { years: "2016-2017", desc: "Studium LUCA School of Arts, Gent" },
  { years: "2015-2018", desc: "Studium Architektur, Bauhaus-Universität Weimar, M.Sc." },
  { years: "2010-2014", desc: "Studium Bauing., Techn. Hochschule Mittelhessen, B.Eng." },
  { years: "2010-2014", desc: "Studium Architektur, Techn. Hochsch. Mittelhessen, B.Eng." },
];

const exhibitions = [
  { year: "2024", desc: "Diplom, Montagehalle HBK Braunschweig, Gruppenausstellung" },
  { year: "2023", desc: "Elternzeit" },
  { year: "2022", desc: "BauArt ohne Plan, Projektraum 0rplid, Braunschweig, Einzelausstellung" },
  { year: "2022", desc: "Alles wie gewohnt, Vierte Welt, Berlin, Bühnenbild" },
  { year: "2021", desc: "kon.:takt, Projektraum Make-up e.V., Berlin, Gruppenausstellung" },
  { year: "2020", desc: "Politik / Poetik des Raumes, n.b.k., Berlin, Gruppenausstellung" },
  { year: "2019", desc: "Beobachtung 2. Ordnung, Alexanderplatz, Berlin, Performance im öffentlichen Raum" },
  { year: "2018", desc: "Dichter unter uns, Theaterplatz, Weimar, Installation im öffentlichen Raum" },
  { year: "2017", desc: "Genius Loci Festival, Weimar, partizipative Installation im öffentlichen Raum" },
  { year: "2017", desc: "Ein Gespenst geht um.., Kunstfest, Weimar, Audiowalk" },
];

const Info = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Close button */}
      <div className="flex justify-end px-8 pt-6">
        <Link
          to="/"
          className="text-2xl text-foreground hover:opacity-60 transition-opacity"
        >
          x
        </Link>
      </div>

      <main className="flex-1 px-8 md:px-16 lg:px-24 pb-16">
        {/* Artist Statement */}
        <section className="mt-8 mb-16">
          <h3 className="text-sm font-semibold tracking-wide mb-2 text-foreground">
            Artist Statement:
          </h3>
          <ul className="space-y-0.5">
            {artistStatementLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm italic text-foreground hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h3 className="text-sm font-semibold tracking-wide mb-6 text-foreground">
            Ausbilung / Studium
          </h3>
          <div className="space-y-2">
            {education.map((item, i) => (
              <div key={i} className="flex gap-4 text-sm">
                <span className="shrink-0 w-24 text-foreground">{item.years}</span>
                <span className="text-foreground">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Exhibitions */}
        <section className="mb-16">
          <h3 className="text-sm font-semibold tracking-wide mb-6 text-foreground">
            Ausgewählte Ausstellungen und Installationen
          </h3>
          <div className="space-y-0.5">
            {exhibitions.map((item, i) => (
              <div key={i} className="flex gap-4 text-sm">
                <span className="shrink-0 w-12 text-foreground">{item.year}</span>
                <span className="text-foreground">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer links */}
        <div className="flex gap-6 text-sm mt-8">
          <a href="#" className="text-foreground hover:opacity-60 transition-opacity underline">
            Imprint
          </a>
          <a href="#" className="text-foreground hover:opacity-60 transition-opacity underline">
            Privacy
          </a>
        </div>
      </main>
    </div>
  );
};

export default Info;
