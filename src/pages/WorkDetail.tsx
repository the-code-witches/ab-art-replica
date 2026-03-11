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
  const descriptions = lang === "DE" ? work.descriptionDE : work.descriptionEN;
  const credit = lang === "DE" ? work.creditDE : work.creditEN;
  const exhibition = lang === "DE" ? work.exhibitionDE : work.exhibitionEN;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Close button */}
      <Link
        to={`/?lang=${lang}`}
        className="fixed top-6 right-8 text-3xl font-light text-foreground z-50 hover:opacity-60 transition-opacity no-underline"
      >
        ✕
      </Link>

      <main className="px-8 md:px-16 lg:px-24 py-12 max-w-5xl mx-auto">
        {/* Title + Subtitle */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-normal">
            {title}, {work.year}
          </h1>
          <p className="text-lg md:text-xl italic text-foreground opacity-90 mt-1">
            {subtitle}
          </p>
        </div>

        {/* Hero image */}
        <div className="mb-6">
          <img
            src={work.images[0]}
            alt={title}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Image grid - pairs of images side by side */}
        {work.images.length > 1 && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {work.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} ${i + 2}`}
                className="w-full h-auto object-contain"
              />
            ))}
          </div>
        )}

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
