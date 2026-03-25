import { useParams, useSearchParams, Link } from "react-router-dom";
import { artistStatements } from "@/data/artistStatements";
import NotFound from "./NotFound";

const ArtistStatement = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const lang = (searchParams.get("lang") as "DE" | "EN") || "DE";

  const statement = artistStatements.find((s) => s.slug === slug);

  if (!statement) return <NotFound />;

  const paragraphs = lang === "DE" ? statement.paragraphsDE : statement.paragraphsEN;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Close button */}
      <Link
        to={`/info?lang=${lang}`}
        className="fixed top-6 right-6 md:right-[25%] text-2xl text-foreground z-50 hover:opacity-60 transition-opacity no-underline"
      >
        x
      </Link>

      <main className="px-6 md:px-[25%] py-12">
        <div className="space-y-6 mt-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ArtistStatement;
