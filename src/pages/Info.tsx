import { Link, useSearchParams } from "react-router-dom";
import { artistStatements } from "@/data/artistStatements";

const artistStatementLabelsDE = artistStatements.map((s) => ({
  label: s.labelDE,
  slug: s.slug,
}));

const artistStatementLabelsEN = artistStatements.map((s) => ({
  label: s.labelEN,
  slug: s.slug,
}));

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

const exhibitionsEN = [
  { year: "2024", desc: "Diploma, Assembly Hall HBK Braunschweig, Group Exhibition" },
  { year: "2023", desc: "Parental Leave" },
  { year: "2022", desc: "BauArt ohne Plan, Project Space 0rplid, Braunschweig, solo exhibition" },
  { year: "2022", desc: "Everything as usual, Fourth World, Berlin, stage design" },
  { year: "2021", desc: "kon.:takt, Project Space Make-up eV, Berlin, group exhibition" },
  { year: "2020", desc: "Politics / Poetics of Space, nbk, Berlin, group exhibition" },
  { year: "2019", desc: "Observation 2nd Order, Alexanderplatz, Berlin, performance in public space" },
  { year: "2018", desc: "Poets among us, Theaterplatz, Weimar, installation in public space" },
  { year: "2017", desc: "Genius Loci Festival, Weimar, participatory installation in public space" },
  { year: "2017", desc: "A Ghost Is Haunting..., Art Festival, Weimar, Audiowalk" },
];

const Info = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") === "EN" ? "EN" : "DE";

  const artistStatement = lang === "DE" ? artistStatementLabelsDE : artistStatementLabelsEN;
  const education = lang === "DE" ? educationDE : educationEN;
  const exhibitions = lang === "DE" ? exhibitionsDE : exhibitionsEN;

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
            {artistStatement.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/statement/${item.slug}?lang=${lang}`}
                  className="text-sm italic text-foreground hover:opacity-60 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h3 className="text-sm font-semibold tracking-wide mb-6 text-foreground">
            {lang === "DE" ? "Ausbilung / Studium" : "Training / studies"}
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

        {/* Footer links */}
        <div className="flex gap-6 text-sm mt-8">
          <Link to={`/imprint?lang=${lang}`} className="text-foreground hover:opacity-60 transition-opacity underline">
            {lang === "DE" ? "Impressum" : "Imprint"}
          </Link>
          <a href="#" className="text-foreground hover:opacity-60 transition-opacity underline">
            {lang === "DE" ? "Datenschutz" : "Privacy"}
          </a>
        </div>
      </main>
    </div>
  );
};

export default Info;