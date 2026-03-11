import { useParams, useSearchParams, Link } from "react-router-dom";
import { works } from "@/data/works";
import NotFound from "./NotFound";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get("lang") as "DE" | "EN") || "DE";

  const work = works.find((w) => w.slug === slug);

  if (!work) return <NotFound />;

  const title = lang === "DE" ? work.titleDE : work.titleEN;
  const subtitle = lang === "DE" ? work.subtitleDE : work.subtitleEN;
  const preamble = lang === "DE" ? work.preambleDE : work.preambleEN;
  const descriptions = lang === "DE" ? work.descriptionDE : work.descriptionEN;
  const credit = lang === "DE" ? work.creditDE : work.creditEN;
  const exhibition = lang === "DE" ? work.exhibitionDE : work.exhibitionEN;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Close button */}
      <Link
        to={`/?lang=${lang}`}
        className="fixed top-6 right-[25%] text-3xl font-light text-foreground z-50 hover:opacity-60 transition-opacity no-underline"
      >
        ✕
      </Link>

      <main className="px-[25%] py-12">
        {/* Title + Subtitle */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-normal">
            {title}, {work.year}
          </h1>
          <p className="text-lg md:text-xl italic text-foreground opacity-90 mt-1 whitespace-pre-line">
            {subtitle}
          </p>
        </div>

        {/* Preamble (poem-like text before images, e.g. B(l)auarbeit) */}
        {preamble && preamble.length > 0 && (
          <div className="mb-8 space-y-1">
            {preamble.map((line, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        )}

        {/* Images */}
        {work.images.length > 0 && work.imageLayout === "paired-with-full" ? (
          <div className="space-y-6 mb-8">
            {(() => {
              const elements: React.ReactNode[] = [];
              for (let i = 0; i < work.images.length; i += 3) {
                // Pair of two side by side
                elements.push(
                  <div key={`pair-${i}`} className="grid grid-cols-2 gap-4">
                    {work.images[i] && (
                      <img src={work.images[i]} alt={`${title} ${i + 1}`} className="w-full h-auto object-contain" />
                    )}
                    {work.images[i + 1] && (
                      <img src={work.images[i + 1]} alt={`${title} ${i + 2}`} className="w-full h-auto object-contain" />
                    )}
                  </div>
                );
                // Full-width image
                if (work.images[i + 2]) {
                  elements.push(
                    <img key={`full-${i}`} src={work.images[i + 2]} alt={`${title} ${i + 3}`} className="w-full h-auto object-contain" />
                  );
                }
              }
              return elements;
            })()}
          </div>
        ) : work.images.length > 0 ? (
          <div className="space-y-6 mb-8">
            {work.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} ${i + 1}`}
                className="w-full h-auto object-contain"
              />
            ))}
          </div>
        ) : null}

        {/* Description text */}
        <div className="max-w-3xl space-y-6 mt-10 mb-8">
          {descriptions.map((paragraph, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Credit */}
        {credit && (
          <p className="text-sm text-foreground opacity-70 whitespace-pre-line mt-8">
            {credit}
          </p>
        )}

        {/* Exhibition */}
        {exhibition && (
          <p className="text-sm text-foreground opacity-70 mt-4 mb-12">
            {exhibition}
          </p>
        )}
      </main>
    </div>
  );
};

export default WorkDetail;
