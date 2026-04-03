import { useState } from "react";
import { Link } from "react-router-dom";
import { works } from "@/data/works";

const SECTION1_SLUGS = [
  "augmented-pleasure",
  "shop-lift-to-fill-the-void",
  "apex",
  "ode-toilette",
];

const SECTION2_SLUGS = [
  "dichter-unter-uns",
  "beobachtung-2-ordnung",
  "auf-gegenleistung-gebaut",
  "b-l-auarbeit-positionen-1-wand",
  "ba-t",
  "follies-of-quiet-desires",
  "konstruktion-der-erinnerung",
];

const Index = () => {
  const [lang, setLang] = useState<"DE" | "EN">("DE");
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);
  const [comingSoon, setComingSoon] = useState(false);

  const section1Works = SECTION1_SLUGS.map((slug) => works.find((w) => w.slug === slug)!).filter(Boolean);
  const section2Works = SECTION2_SLUGS.map((slug) => works.find((w) => w.slug === slug)!).filter(Boolean);

  const hoveredWorkData = works.find(
    (w) => (lang === "DE" ? (w.listTitleDE || w.titleDE) : (w.listTitleEN || w.titleEN)) === hoveredWork
  );
  const hoverImage = hoveredWorkData?.titleImage || hoveredWorkData?.images?.[0];

  const renderWorkItem = (work: typeof works[0], small?: boolean) => {
    const title = lang === "DE" ? (work.listTitleDE || work.titleDE) : (work.listTitleEN || work.titleEN);
    const textClass = small
      ? "text-sm md:text-base lg:text-lg leading-snug"
      : "text-lg md:text-xl lg:text-2xl leading-relaxed";

    if (work.comingSoon) {
      return (
        <li key={work.slug}>
          <button
            onClick={() => setComingSoon(true)}
            className={`${textClass} text-foreground transition-all duration-200 cursor-pointer hover:italic text-left`}
            onMouseEnter={() => setHoveredWork(title)}
            onMouseLeave={() => setHoveredWork(null)}
          >
            {title}
          </button>
        </li>
      );
    }
    return (
      <li key={work.slug}>
        <Link
          to={`/work/${work.slug}?lang=${lang}`}
          className={`${textClass} text-foreground transition-all duration-200 cursor-pointer hover:italic no-underline`}
          onMouseEnter={() => setHoveredWork(title)}
          onMouseLeave={() => setHoveredWork(null)}
        >
          {title}
        </Link>
      </li>
    );
  };

  if (comingSoon) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex justify-end px-6 md:px-[25%] pt-6">
          <button
            onClick={() => setComingSoon(false)}
            className="text-2xl text-foreground hover:opacity-60 transition-opacity"
          >
            x
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-foreground text-2xl md:text-4xl tracking-wide">coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground flex flex-col relative">
      {/* Hover Image Overlay */}
      {hoveredWork && hoverImage && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
          <img
            src={hoverImage}
            alt={hoveredWork}
            className="max-w-[420px] max-h-[420px] object-contain"
          />
        </div>
      )}

      {/* Language Toggle */}
      <nav className="flex justify-end gap-4 px-6 md:px-[25%] pt-4 text-sm tracking-wide relative z-20">
        <button
          onClick={() => setLang("DE")}
          className={lang === "DE" ? "text-accent opacity-100 transition-opacity" : "text-foreground opacity-60 hover:opacity-100 transition-opacity"}
        >
          DE
        </button>
        <button
          onClick={() => setLang("EN")}
          className={lang === "EN" ? "text-accent opacity-100 transition-opacity" : "text-foreground opacity-60 hover:opacity-100 transition-opacity"}
        >
          EN
        </button>
      </nav>

      {/* Section 1 — Current Works */}
      <section className="min-h-screen flex flex-col px-6 md:px-[25%] relative z-20">
        <div className="flex-1 flex items-start pt-[18vh]">
          <ul className="space-y-1">
            {section1Works.map((work) => renderWorkItem(work))}
          </ul>
        </div>

        <div className="pb-12 text-center">
          <span className="text-xs text-foreground/40 tracking-widest">
            {lang === "DE" ? "weitere arbeiten" : "more works"}
          </span>
        </div>
      </section>

      {/* Section 2 — Earlier Works */}
      <section className="px-6 md:px-[25%] pt-8 pb-4 relative z-20">
        <ul className="space-y-0.5">
          {section2Works.map((work) => renderWorkItem(work, true))}
        </ul>
      </section>

      {/* Info Link */}
      <div className="flex justify-end px-6 md:px-[25%] pb-8 relative z-20">
        <Link
          to={`/info?lang=${lang}`}
          className="text-lg md:text-xl text-foreground hover:opacity-60 transition-opacity duration-200"
        >
          {lang === "DE" ? "Info" : "info"}
        </Link>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-[25%] pb-6 pt-2">
        <p className="text-xs text-foreground">
          {lang === "DE" ? "A.B. - Alexander Böckel" : "AB - Alexander Böckel"}
        </p>
      </footer>
    </div>
  );
};

export default Index;
