import { Link, useSearchParams } from "react-router-dom";

const artistStatementDE = [
  "Meine Arbeiten untersuchen Situationen, in denen Dinge weiter funktionieren, obwohl ihr ursprünglicher Sinn bereits verloren gegangen ist. Ausgangspunkt sind alltägliche Objekte, Räume und Infrastrukturen. In Installationen, Skulpturen und medialen Setups werden sie verschoben und neu angeordnet.",
  "Mich interessieren die Spuren, die Systeme in Körpern, Dingen und Räumen hinterlassen – und die Zustände, die entstehen, wenn Funktion bleibt, während Bedeutung, Genuss oder Entlastung verschwinden.",
];

const educationDE = [
  { years: "2024-2025", desc: "Meisterschüler bei Nasan Tur, Hochschule der Bildenden Künste Braunschweig" },
  { years: "2020-2024", desc: "Studium Freie Kunst, Hochschule der Bildenden Künste Braunschweig, Klasse Rentmeister, Diplom (Auszeichnung)" },
  { years: "2018-2020", desc: "Studium Raumstrategien, Weißensee Kunsthochschule Berlin" },
  { years: "2016-2017", desc: "Studium LUCA School of Arts, Gent" },
  { years: "2015-2018", desc: "Studium Architektur, Bauhaus-Universität Weimar, M.Sc." },
  { years: "2010-2014", desc: "Studium Bauing., Techn. Hochschule Mittelhessen, B.Eng." },
  { years: "2010-2014", desc: "Studium Architektur, Techn. Hochsch. Mittelhessen, B.Eng." },
];

const educationEN = [
  { years: "2024-2025", desc: "Master student with Nasan Tur, Braunschweig University of Fine Arts" },
  { years: "2020-2024", desc: "Studied fine arts, Braunschweig University of Art, Rentmeister class, diploma (distinction)" },
  { years: "2018-2020", desc: "Studied spatial strategies, Weißensee Academy of Art Berlin" },
  { years: "2016-2017", desc: "Studied at LUCA School of Arts, Ghent" },
  { years: "2015-2018", desc: "Studied Architecture, Bauhaus University Weimar, M.Sc." },
  { years: "2010-2014", desc: "Studied Civil Engineering, University of Applied Sciences Mittelhessen, B.Eng." },
  { years: "2010-2014", desc: "Studied Architecture, Techn. Hochsch. Mittelhessen, B.Eng." },
];

const exhibitionsDE = [
  { year: "2026", desc: "Wie möchtest du erinnert werden, Städtische Galerie KUBUS, Hannover, Gruppenausstellung" },
  { year: "2025", desc: "Europa ohne Ende - One Night Group Show, Spor Klübü, Berlin, Gruppenausstellung" },
  { year: "2025", desc: "Meisterschüler*innen-Ausstellung, Kunstverein Braunschweig, Braunschweig, Gruppenausstellung" },
  { year: "2024", desc: "Diplom, Montagehalle HBK Braunschweig, Braunschweig, Gruppenausstellung" },
  { year: "2023", desc: "Elternzeit" },
  { year: "2022", desc: "BauArt ohne Plan, Projektraum Orplid, Braunschweig, Einzelausstellung" },
  { year: "2022", desc: "Alles wie gewohnt, Vierte Welt, Berlin, Bühnenbild" },
  { year: "2021", desc: "kon.:takt, Projektraum Make-up e.V., Berlin, Gruppenausstellung" },
  { year: "2020", desc: "Politik / Poetik des Raumes, n.b.k., Berlin, Gruppenausstellung" },
  { year: "2019", desc: "Beobachtung 2. Ordnung, Alexanderplatz, Berlin, Performance im öffentlichen Raum" },
  { year: "2018", desc: "Dichter unter uns, Theaterplatz, Weimar, Installation im öffentlichen Raum" },
  { year: "2017", desc: "Genius Loci Festival, Weimar, partizipative Installation im öffentlichen Raum" },
  { year: "2017", desc: `Ein Gespenst geht um…, Kunstfest, Weimar, Audiowalk` },
];

const exhibitionsEN = [
  { year: "2026", desc: "How Do You Want to Be Remembered, Städtische Galerie KUBUS, Hannover, Group Exhibition" },
  { year: "2025", desc: "Europa ohne Ende - One Night Group Show, Spor Klübü, Berlin, Group Exhibition" },
  { year: "2025", desc: "Master Students Exhibition, Kunstverein Braunschweig, Braunschweig, Group Exhibition" },
  { year: "2024", desc: "Diploma, Assembly Hall HBK Braunschweig, Braunschweig, Group Exhibition" },
  { year: "2023", desc: "Parental Leave" },
  { year: "2022", desc: "BauArt ohne Plan, Project Space Orplid, Braunschweig, Solo Exhibition" },
  { year: "2022", desc: "Everything as usual, Fourth World, Berlin, Stage Design" },
  { year: "2021", desc: "kon.:takt, Project Space Make-up eV, Berlin, Group Exhibition" },
  { year: "2020", desc: "Politics / Poetics of Space, n.b.k., Berlin, Group Exhibition" },
  { year: "2019", desc: "Observation 2nd Order, Alexanderplatz, Berlin, Performance in Public Space" },
  { year: "2018", desc: "Poets Among Us, Theaterplatz, Weimar, Installation in Public Space" },
  { year: "2017", desc: "Genius Loci Festival, Weimar, Participatory Installation in Public Space" },
  { year: "2017", desc: "A Ghost Is Haunting…, Art Festival, Weimar, Audiowalk" },
];

const Info = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") === "EN" ? "EN" : "DE";

  const artistStatement = artistStatementDE;
  const education = lang === "DE" ? educationDE : educationEN;
  const exhibitions = lang === "DE" ? exhibitionsDE : exhibitionsEN;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Link
        to="/"
        className="fixed top-6 right-6 md:right-[25%] text-2xl text-foreground z-50 hover:opacity-60 transition-opacity no-underline"
      >
        x
      </Link>

      <main className="flex-1 px-6 md:px-[25%] pb-16">
        <section className="mt-8 mb-16">
          <h3 className="text-sm font-semibold tracking-wide mb-4 text-foreground">
            Artist Statement
          </h3>
          <div className="space-y-5 text-sm leading-relaxed text-foreground">
            {artistStatement.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-sm font-semibold tracking-wide mb-6 text-foreground">
            {lang === "DE" ? "Ausbildung" : "Education"}
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

        <section className="mb-16">
          <h3 className="text-sm font-semibold tracking-wide mb-6 text-foreground">
            {lang === "DE" ? "Ausgewählte Ausstellungen und Installationen" : "Selected exhibitions and installations:"}
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

        <section className="mb-16">
          <h3 className="text-sm font-semibold tracking-wide mb-3 text-foreground">
            {lang === "DE" ? "Kontakt" : "Contact"}
          </h3>
          <p className="text-sm text-foreground"><p className="text-sm text-foreground">alexander.boeckel@posteo.de</p></p>
        </section>
      </main>

      <footer className="px-6 md:px-[25%] pb-6">
        <div className="flex gap-6 text-sm">
          <Link
            to={`/imprint?lang=${lang}`}
            className="text-foreground hover:opacity-60 transition-opacity"
          >
            {lang === "DE" ? "Impressum" : "Imprint"}
          </Link>
          <Link
            to={`/privacy?lang=${lang}`}
            className="text-foreground hover:opacity-60 transition-opacity"
          >
            {lang === "DE" ? "Datenschutz" : "Privacy"}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Info;
