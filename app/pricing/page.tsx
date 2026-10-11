import { PageHero, ClosingNote } from "../shared";
import { PricingSelector } from "../pricing";
import { services } from "../content";
import { TransitionLink } from "../transitions";
import { pageMetadata } from "../meta";
export const metadata = pageMetadata(
  "Pricing",
  "NST services start at $2,000. Startup engagements are capped at $50,000; funded companies have no fixed upper budget limit.",
  "/pricing",
);
export default function PricingPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        label="CLEAR SCOPE. CLEAR INVESTMENT."
        title="Ambitious work. Sensible scope."
        text="Every service starts at $2,000. The brief, deliverables, and complexity set the investment. We agree the scope and quote before the work begins."
      />
      <section className="pricing-page-grid wrap">
        <div>
          <span className="eyebrow">YOUR COMPANY STAGE</span>
          <h2>
            Made for
            <br />
            your next move.
          </h2>
          <p>
            Startup engagements are capped at $50,000. Funded companies can
            scope larger, more connected engagements with no fixed upper limit.
          </p>
          <p className="small-code">ALL PRICES IN USD / SCOPED INDIVIDUALLY</p>
        </div>
        <PricingSelector />
      </section>
      <section className="pricing-services-list wrap">
        <span className="eyebrow">
          ONE DISCIPLINE OR A CONNECTED ENGAGEMENT
        </span>
        <h2>Where we can help.</h2>
        {services.map((service) => (
          <TransitionLink key={service.slug} href={`/services/${service.slug}`}>
            <span>{service.name}</span>
            <span>From $2,000 ↗</span>
          </TransitionLink>
        ))}
      </section>
      <section className="pricing-faq wrap">
        <h2>A little more clarity.</h2>
        <div>
          {[
            [
              "Can we combine services?",
              "Yes. We scope connected disciplines together so the brand, experience, content, and build support one another.",
            ],
            [
              "What sets the final quote?",
              "The deliverables, complexity, formats, integrations, and review needs. A focused brief and a full launch require different levels of work.",
            ],
            [
              "Is $2,000 a complete website package?",
              "It is the starting investment for a service engagement. The exact deliverables are defined in your scope and quote.",
            ],
            [
              "How long will a project take?",
              "We agree a schedule around your brief and dependencies. The process page shows an example of an eight-week combined engagement.",
            ],
            [
              "What happens after an enquiry?",
              "We review the brief you send and discuss what you need. The next step is a considered scope and quote.",
            ],
          ].map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ClosingNote title="Let’s find the right scope." />
    </main>
  );
}
