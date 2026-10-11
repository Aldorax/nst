import { services } from "../content";
import { PageHero, ClosingNote } from "../shared";
import { TransitionLink } from "../transitions";
import { PortfolioScene } from "../portfolio";
import { pageMetadata } from "../meta";
export const metadata = pageMetadata(
  "Services",
  "Branding, website development, UI/UX, motion videos, copy, and technical writing from one connected NST team.",
  "/services",
);
export default function ServicesPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        label="FIVE DISCIPLINES. ONE CONNECTED TEAM."
        title="From the first impression to the final detail."
        text="Come to us for one discipline or bring the whole ambition. We connect design, technology, motion, and language around what your business needs."
      />
      <section className="service-directory wrap">
        {services.map((service, i) => (
          <article key={service.slug}>
            <div className="service-directory-copy">
              <span className="eyebrow">0{i + 1} / FROM $2,000</span>
              <h2>{service.name}</h2>
              <p>{service.intro}</p>
              <ul>
                {service.outputs.slice(0, 3).map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
              <TransitionLink
                href={`/services/${service.slug}`}
                className="text-link"
              >
                Explore {service.name.toLowerCase()} ↗
              </TransitionLink>
            </div>
            <TransitionLink
              href={`/services/${service.slug}`}
              className="service-directory-art"
              aria-label={`Explore ${service.name}`}
            >
              <PortfolioScene project={service.visual} />
            </TransitionLink>
          </article>
        ))}
      </section>
      <section className="editorial-split wrap">
        <h2>
          One brief.
          <br />
          Many possibilities.
        </h2>
        <div>
          <p>
            A new identity can lead to a new website. A product interface can
            need a clearer voice. We scope the disciplines together so each part
            supports the next.
          </p>
          <TransitionLink href="/process" className="text-link">
            How we collaborate ↗
          </TransitionLink>
        </div>
      </section>
      <ClosingNote />
    </main>
  );
}
