import { Suspense } from "react";
import { notFound } from "next/navigation";
import { services } from "../../content";
import { PageHero, ClosingNote } from "../../shared";
import { PortfolioScene } from "../../portfolio";
import { TransitionLink } from "../../transitions";
import { pageMetadata } from "../../meta";
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = services.find((service) => service.slug === slug);
  return item ? pageMetadata(item.name, item.intro, `/services/${slug}`) : {};
}
async function ServiceContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = services.find((service) => service.slug === slug);
  if (!item) notFound();
  return (
    <main id="main" className="inner-page">
      <PageHero
        label={`${item.name.toUpperCase()} / FROM $2,000`}
        title={item.short}
        text={item.intro}
      />
      <div className="case-art wrap">
        <PortfolioScene project={item.visual} />
      </div>
      <section className="editorial-split wrap">
        <div>
          <span className="eyebrow">THE APPROACH</span>
          <h2>
            Creative thinking.
            <br />
            Useful outcomes.
          </h2>
        </div>
        <p>{item.approach}</p>
      </section>
      <section className="scope-section wrap">
        <div>
          <span className="eyebrow">WHAT WE CAN MAKE</span>
          <h2>
            The right scope
            <br />
            for your ambition.
          </h2>
        </div>
        <ul>
          {item.outputs.map((output, i) => (
            <li key={output}>
              <span>0{i + 1}</span>
              {output}
            </li>
          ))}
        </ul>
      </section>
      <section className="service-steps wrap">
        <span className="eyebrow">HOW IT COMES TOGETHER</span>
        <div>
          {item.steps.map((step, i) => (
            <article key={step}>
              <span>0{i + 1}</span>
              <h3>
                {
                  ["Find the direction.", "Make it tangible.", "Get it ready."][
                    i
                  ]
                }
              </h3>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>
      {item.slug === "writing" && (
        <section className="writing-examples wrap">
          <span className="eyebrow">A SAMPLE OF THE THINKING</span>
          <h2>
            Clearer words.
            <br />A clearer next step.
          </h2>
          <div>
            <article>
              <span>LESS USEFUL</span>
              <p>
                Leverage our innovative platform to facilitate seamless workflow
                optimisation.
              </p>
            </article>
            <article>
              <span>MORE USEFUL</span>
              <p>
                Bring your team’s work into one place. See what matters. Move it
                forward.
              </p>
            </article>
          </div>
          <p className="small-code">ILLUSTRATIVE COPY / FICTIONAL PRODUCT</p>
        </section>
      )}
      <section className="related-study wrap">
        <div>
          <span className="eyebrow">EXPLORE THE DISCIPLINE</span>
          <h2>
            See the thinking
            <br />
            in action.
          </h2>
          <p>
            Explore selected websites, interfaces, and visual studies.
          </p>
        </div>
        <TransitionLink href="/work" className="pill-button">
          Browse the work ↗
        </TransitionLink>
      </section>
      <ClosingNote title={`Let’s talk ${item.name.toLowerCase()}.`} />
    </main>
  );
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main id="main" className="inner-page">
          <div className="wrap route-loading" role="status">
            Opening the discipline…
          </div>
        </main>
      }
    >
      <ServiceContent params={params} />
    </Suspense>
  );
}
