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
  "ba-t",
  "beobachtung-2-ordnung",
  "auf-gegenleistung-gebaut",
  "b-l-auarbeit-positionen-1-wand",
  "follies-of-quiet-desires",
  "konstruktion-der-erinnerung",
];

const Index = () => {
  const [lang, setLang] = useState<"DE" | "EN">("DE");
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);
  const [comingSoon, setComingSoon] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const section1Works = SECTION1_SLUGS.map((slug) => works.find((w) => w.slug === slug)!).filter(Boolean);
  const section2Works = SECTION2_SLUGS.map((slug) => works.find((w) => w.slug === slug)!).filter(Boolean);

  const hoveredWorkData = works.find(
    (w) => (lang === "DE" ? (w.listTitleDE || w.titleDE) : (w.listTitleEN || w.titleEN)) === hoveredWork
  );
  const hoverImage = hoveredWorkData?.titleImage || hoveredWorkData?.images?.[0];

  const renderWorkItem = (work: typeof works[0]) => {
    const title = lang === "DE" ? (work.listTitleDE || work.titleDE) : (work.listTitleEN || work.titleEN);
    const textClass = "text-lg md:text-xl lg:text-2xl leading-relaxed";

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
    <div className="min-h-screen bg-background text-foreground flex flex-col relative">
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

      {/* Close button (visible when additional works are shown) */}
      {showMore && (
        <button
          onClick={() => setShowMore(false)}
          className="fixed top-6 right-6 md:right-[25%] text-2xl text-foreground z-50 hover:opacity-60 transition-opacity cursor-pointer"
        >
          x
        </button>
      )}

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

      {/* Works List */}
      <div className="flex-1 flex items-center px-6 md:px-[25%] relative z-20">
        <ul className="space-y-1">
          {section1Works.map((work) => renderWorkItem(work))}

          {/* Weitere Arbeiten trigger */}
          {!showMore && (
            <li className="pt-4">
              <button
                onClick={() => setShowMore(true)}
                className="text-[0.7em] md:text-[0.7em] lg:text-[0.7em] leading-relaxed text-foreground transition-opacity duration-200 hover:opacity-60 text-left cursor-pointer"
                style={{ fontSize: '70%' }}
              >
                {lang === "DE" ? "weitere arbeiten" : "more works"}
              </button>
            </li>
          )}

          {/* Additional works */}
          {showMore && section2Works.map((work) => renderWorkItem(work))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-end px-6 md:px-[25%] pb-6 pt-2 relative z-20">
        <p className="text-xs text-foreground">
          {lang === "DE" ? "A.B. – Alexander Böckel" : "AB – Alexander Böckel"}
        </p>
        <Link
          to={`/info?lang=${lang}`}
          className="text-lg md:text-xl text-foreground hover:opacity-60 transition-opacity duration-200 no-underline"
        >
          {lang === "DE" ? "Info" : "info"}
        </Link>
      </footer>
    </div>
  );
};

export default Index;
