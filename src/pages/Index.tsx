import { useState } from "react";
import { Link } from "react-router-dom";
import { works } from "@/data/works";
import placeholder from "/placeholder.svg";

const Index = () => {
  const [lang, setLang] = useState<"DE" | "EN">("DE");
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative">
      {/* Hover Image Overlay */}
      {hoveredWork && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
          <img
            src={placeholder}
            alt={hoveredWork}
            className="max-w-[60vw] max-h-[60vh] object-contain"
          />
        </div>
      )}

      {/* Language Toggle */}
      <nav className="flex justify-end gap-4 px-[25%] pt-4 text-sm tracking-wide relative z-20">
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-between px-[25%] relative z-20">
        {/* Project List */}
        <div className="flex-1 flex items-start">
          <ul className="space-y-1 py-4 mt-4">
            {works.map((work) => {
              const title = lang === "DE" ? work.titleDE : work.titleEN;
              return (
                <li key={work.slug}>
                  <Link
                    to={`/work/${work.slug}?lang=${lang}`}
                    className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground transition-all duration-200 cursor-pointer hover:italic no-underline"
                    onMouseEnter={() => setHoveredWork(title)}
                    onMouseLeave={() => setHoveredWork(null)}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Info Link — positioned right */}
        <div className="flex justify-end pb-8">
          <Link
            to={`/info?lang=${lang}`}
            className="text-lg md:text-xl text-foreground hover:opacity-60 transition-opacity duration-200"
          >
            {lang === "DE" ? "Info" : "info"}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-[25%] pb-6 pt-2">
        <p className="text-xs text-foreground opacity-50">
          {lang === "DE" ? "A.B. - Alexander Böckel" : "AB - Alexander Böckel"}
        </p>
      </footer>
    </div>
  );
};

export default Index;