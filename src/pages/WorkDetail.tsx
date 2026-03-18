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
        className="fixed top-6 right-6 md:right-[25%] text-3xl font-light text-foreground z-50 hover:opacity-60 transition-opacity no-underline"
      >
        ✕
      </Link>

      <main className="px-6 md:px-[25%] py-12">
        {/* Title + Subtitle */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-normal">
            {title}, {work.year}
          </h1>
          <p className="text-lg md:text-xl italic text-foreground opacity-90 mt-1 whitespace-pre-line">
            {subtitle}
          </p>
        </div>

        {/* Video embed */}
        {work.videoUrl && (
          <div className="mb-8 aspect-video">
            <iframe
              src={work.videoUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </div>
        )}

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
        {work.images.length > 0 && work.imageGroups ? (
          <div className="space-y-6 mb-8">
            {(() => {
              const elements: React.ReactNode[] = [];
              let idx = 0;
              for (let g = 0; g < work.imageGroups.length; g++) {
                const count = work.imageGroups[g];
                if (count === 1 && work.images[idx]) {
                  elements.push(
                    <img key={idx} src={work.images[idx]} alt={`${title} ${idx + 1}`} className="w-full h-auto object-contain" />
                  );
                  idx++;
                } else if (count === 2) {
                  elements.push(
                    <div key={`pair-${idx}`} className="grid grid-cols-2 gap-4">
                      {work.images[idx] && <img src={work.images[idx]} alt={`${title} ${idx + 1}`} className="w-full h-auto object-contain" />}
                      {work.images[idx + 1] && <img src={work.images[idx + 1]} alt={`${title} ${idx + 2}`} className="w-full h-auto object-contain" />}
                    </div>
                  );
                  idx += 2;
                }
              }
              return elements;
            })()}
          </div>
        ) : work.images.length > 0 && work.imageLayout === "paired-with-full" ? (
          <div className="space-y-6 mb-8">
            {(() => {
              const elements: React.ReactNode[] = [];
              for (let i = 0; i < work.images.length; i += 3) {
                elements.push(
                  <div key={`pair-${i}`} className="grid grid-cols-2 gap-4">
                    {work.images[i] && <img src={work.images[i]} alt={`${title} ${i + 1}`} className="w-full h-auto object-contain" />}
                    {work.images[i + 1] && <img src={work.images[i + 1]} alt={`${title} ${i + 2}`} className="w-full h-auto object-contain" />}
                  </div>
                );
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
              <img key={i} src={img} alt={`${title} ${i + 1}`} className="w-full h-auto object-contain" />
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
