import { PageHero, ClosingNote } from "../shared";
import { TeamSection } from "../sections";
import { TransitionLink } from "../transitions";
import { pageMetadata } from "../meta";
export const metadata = pageMetadata(
  "The studio",
  "Meet NST’s approach: four specialists connecting design, development, motion, and writing through direct collaboration.",
  "/studio",
);
export default function StudioPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        label="NST / NON STANDARD TEAM"
        title="Independent minds. Shared ambition."
        text="We’re a team of four bringing different perspectives to one table. Designers, developers, and storytellers working together around the same brief."
      />
      <TeamSection />
      <section className="editorial-split wrap">
        <h2>
          Small by design.
          <br />
          Connected by nature.
        </h2>
        <div>
          <p>
            Work directly with the people shaping your project. Share the
            ambition, challenge the thinking, and review the work while there’s
            still room to make it better.
          </p>
          <p>
            Our disciplines overlap. The design considers the build. The writing
            shapes the interface. The motion belongs to the identity.
          </p>
        </div>
      </section>
      <section className="studio-principles wrap">
        <span className="eyebrow">WHAT YOU CAN EXPECT</span>
        <div>
          {[
            [
              "Direct collaboration",
              "A connected team and a shared understanding of the brief.",
            ],
            [
              "A clear scope",
              "Deliverables, responsibilities, and investment agreed before we start.",
            ],
            [
              "Room to explore",
              "Creative directions with reasons behind them, refined together.",
            ],
            [
              "A useful handover",
              "The agreed files, documentation, and knowledge to put the work to use.",
            ],
          ].map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="editorial-split wrap">
        <h2>
          Standard was
          <br />
          never the plan.
        </h2>
        <div>
          <p>
            We like work with a point of view. A distinctive identity, a
            thoughtful interface, an unexpected interaction, or a sentence that
            makes something click.
          </p>
          <TransitionLink href="/work" className="text-link">
            Explore our creative range ↗
          </TransitionLink>
        </div>
      </section>
      <ClosingNote title="Bring your perspective to the table." />
    </main>
  );
}
