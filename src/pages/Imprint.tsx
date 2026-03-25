import { Link, useSearchParams } from "react-router-dom";

const contentDE = {
  heading: "Alexander Böckel",
  email: "alexander.boeckel@posteo.de",
  source: "Quelle:",
  copyright: "Alle Abbildungen © Alexander Böckel",
  text: "Diese Website wurde von Alexander Böckel gestaltet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers (Alexander Böckel). Downloads und Kopien dieser Seite sind weder für den privaten, noch für den kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Diese Website kann Links zu anderen Websites enthalten, die nicht von mir betrieben werden. Wenn Sie auf einen Link eines Drittanbieters klicken, werden Sie auf die Website dieses Drittanbieters weitergeleitet. Ich empfehle Ihnen dringend, die Datenschutzrichtlinien aller von Ihnen besuchten Websites zu überprüfen. Ich habe keine Kontrolle über und übernehme keine Verantwortung für den Inhalt, die Datenschutzrichtlinien oder die Praktiken von Websites oder Diensten Dritter.",
};

const contentEN = {
  heading: "Alexander Böckel",
  email: "alexander.boeckel@posteo.de",
  source: "Source:",
  copyright: "All images © Alexander Böckel",
  text: "This website was designed by Alexander Böckel. Reproduction, editing, distribution, and any type of exploitation outside the limits of copyright law require the written consent of the respective author or creator (Alexander Böckel). Downloads and copies of this site are not permitted for private or commercial use. To the extent that the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. This website may contain links to other websites that are not operated by me. If you click on a third-party link, you will be redirected to that third-party website. I strongly recommend that you review the privacy policies of every website you visit. I have no control over, and assume no responsibility for, the content, privacy policies, or practices of third-party websites or services.",
};

const Imprint = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") === "EN" ? "EN" : "DE";
  const content = lang === "DE" ? contentDE : contentEN;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Close button */}
      <Link
        to={`/info?lang=${lang}`}
        className="fixed top-6 right-6 md:right-[25%] text-2xl text-foreground z-50 hover:opacity-60 transition-opacity no-underline"
      >
        x
      </Link>

      <main className="flex-1 px-6 md:px-[25%] pb-16">
        <section className="mt-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">
            {content.heading}
          </h1>
          <a
            href={`mailto:${content.email}`}
            className="text-sm text-foreground hover:opacity-60 transition-opacity"
          >
            {content.email}
          </a>
        </section>

        <section className="mt-8">
          <p className="text-sm text-foreground mb-1">
            {content.source}{" "}
            <a
              href="http://www.e-recht24.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-60 transition-opacity"
            >
              http://www.e-recht24.de
            </a>
          </p>
        </section>

        <section className="mt-8">
          <p className="text-sm text-foreground mb-4">{content.copyright}</p>
          <p className="text-sm text-foreground leading-relaxed">{content.text}</p>
        </section>
      </main>
    </div>
  );
};

export default Imprint;