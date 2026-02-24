import { useState } from "react";

const works = [
  "shop lift - to fill the void",
  "Ode Toilette",
  "BA:T",
  "Auf Gegenleistung gebaut",
  "B(l)auarbeit - Positionen 1 Wand",
  "Beobachtung 2. Ordnung",
  "Dichter unter uns",
  "Follies of Quiet Desires",
  "Konstruktion der Erinnerung",
];

const Index = () => {
  const [lang, setLang] = useState<"DE" | "EN">("DE");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Language Toggle */}
      <nav className="flex justify-end gap-4 px-8 pt-4 text-sm tracking-wide">
        <button
          onClick={() => setLang("DE")}
          className={`transition-opacity ${lang === "DE" ? "text-accent opacity-100" : "text-foreground opacity-60 hover:opacity-100"}`}
        >
          DE
        </button>
        <button
          onClick={() => setLang("EN")}
          className={`transition-opacity ${lang === "EN" ? "text-accent opacity-100" : "text-foreground opacity-60 hover:opacity-100"}`}
        >
          EN
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-between px-8 md:px-16 lg:px-24">
        {/* Works Label */}
        <div className="mt-4 mb-2">
          <h2 className="text-sm tracking-widest uppercase text-foreground opacity-60">
            Works
          </h2>
        </div>

        {/* Project List */}
        <div className="flex-1 flex items-start">
          <ul className="space-y-1 py-4">
            {works.map((title) => (
              <li key={title}>
                <a
                  href="#"
                  className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground hover:opacity-60 transition-opacity duration-200 cursor-pointer"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Link — positioned right */}
        <div className="flex justify-end pb-8">
          <a
            href="#"
            className="text-lg md:text-xl text-foreground hover:opacity-60 transition-opacity duration-200"
          >
            Info
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 pb-6 pt-2">
        <p className="text-xs text-foreground opacity-50">
          A.B. - Alexander Böckel
        </p>
      </footer>
    </div>
  );
};

export default Index;
