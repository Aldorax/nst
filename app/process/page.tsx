import { PageHero, ClosingNote } from "../shared";
import { TimelineSection } from "../sections";
import { pageMetadata } from "../meta";
export const metadata = pageMetadata(
  "Our process",
  "A clear NST collaboration process from discovery and direction through design, development, refinement, and handover.",
  "/process",
);
export default function ProcessPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        label="A PLAN, NOT A BLACK BOX"
        title="A shared direction. A clear way forward."
        text="We agree the scope, create the direction, and review the work together. You know what’s happening and where your input matters."
      />
      <TimelineSection />
      <section className="editorial-split wrap">
        <h2>
          Know the plan.
          <br />
          Shape the work.
        </h2>
        <div>
          <p>
            The eight-week roadmap is an example of a combined engagement. A
            focused writing project and a complete brand-and-website launch have
            different needs.
          </p>
          <p>
            We agree your timeline around the scope, dependencies, review
            points, and delivery formats. Feedback and decisions stay part of
            the plan.
          </p>
        </div>
      </section>
      <section className="studio-principles wrap">
        <span className="eyebrow">BEFORE WE START</span>
        <div>
          {[
            [
              "The brief",
              "What your business needs, who it serves, and what success should mean.",
            ],
            [
              "The scope",
              "The disciplines, deliverables, and boundaries of the engagement.",
            ],
            [
              "The investment",
              "A quote based on the agreed work, with the startup cap considered.",
            ],
            [
              "The collaboration",
              "Who reviews the work, when decisions happen, and how handover works.",
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
      <ClosingNote title="Start with a conversation." />
    </main>
  );
}
