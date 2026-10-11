import { radialPath } from "./forms";
import { ContactButton } from "./ui";
import { PricingSelector } from "./pricing";

const crafts = [
  {
    label: "Design & identity",
    glyph: "✳",
    className: "craft-brand",
    note: "RECOGNISABLE BY DESIGN",
  },
  {
    label: "Development",
    glyph: "{ }",
    className: "craft-dev",
    note: "BUILT TO WORK",
  },
  {
    label: "Motion & video",
    glyph: "≋",
    className: "craft-motion",
    note: "IDEAS IN MOTION",
  },
  {
    label: "Copy & strategy",
    glyph: "Aa",
    className: "craft-words",
    note: "CLARITY IN EVERY WORD",
  },
];
export function TeamSection() {
  return (
    <section className="team-section" id="studio" aria-labelledby="team-title">
      <div className="team-top wrap">
        <span className="eyebrow">
          03 / A SMALL TEAM. A CONNECTED APPROACH.
        </span>
        <span className="small-code">NST / NON STANDARD TEAM</span>
      </div>
      <div className="team-canvas team-gallery wrap">
        {crafts.map((craft, i) => (
          <div
            className={`craft-card ${craft.className}`}
            key={craft.label}
            data-speed={i % 2 ? -1 : 1}
          >
            <span className="craft-index">OUR CRAFT / 0{i + 1}</span>
            <span className="craft-glyph" aria-hidden="true">
              {i === 3 ? (
                craft.glyph
              ) : (
                <svg className="craft-mark" viewBox="0 0 200 200" fill="none">
                  <path
                    data-form={i}
                    d={radialPath(i + 3, i === 1 ? 8 : 18)}
                    fill="currentColor"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r={i === 1 ? 31 : 15}
                    fill={i === 1 ? "#232d1a" : i === 0 ? "#c3f85c" : "#ffc0a8"}
                  />
                </svg>
              )}
            </span>
            <span className="craft-name">{craft.label}</span>
            <span className="craft-note">{craft.note}</span>
          </div>
        ))}
        <div className="team-center">
          <span className="eyebrow">FOUR PEOPLE. FIVE SERVICES.</span>
          <h2 id="team-title" aria-label="Small team. Uncommon ambition.">
            Small team.
            <br />
            <em>Uncommon ambition.</em>
          </h2>
          <p>
            Four specialists. Direct collaboration.
            <br />
            Design, code, motion, and words in sync.
          </p>
          <ContactButton className="dark-pill">Start a project</ContactButton>
        </div>
      </div>
    </section>
  );
}

const phases = [
  {
    title: "Discovery & direction",
    tag: "FIND THE DIFFERENCE",
    weeks: "WEEKS 1–2",
    icon: "◎",
    color: "amber",
    start: 1,
    end: 4,
    text: "Goals, audience, positioning, and a creative direction we believe in.",
  },
  {
    title: "Brand & interface design",
    tag: "GIVE IT A FORM",
    weeks: "WEEKS 2–4",
    icon: "✳",
    color: "lime",
    start: 2,
    end: 6,
    text: "Brand exploration, wireframes, high-fidelity design, and a cohesive system.",
  },
  {
    title: "Development & motion",
    tag: "BRING IT TO LIFE",
    weeks: "WEEKS 3–6",
    icon: "⌘",
    color: "cyan",
    start: 3,
    end: 8,
    text: "Thoughtful engineering, purposeful interactions, and content integration.",
  },
  {
    title: "Testing & refinement",
    tag: "SWEAT THE DETAILS",
    weeks: "WEEKS 5–7",
    icon: "✓",
    color: "green",
    start: 5,
    end: 9,
    text: "Testing across devices, accessibility checks, and performance refinement.",
  },
  {
    title: "Launch & handover",
    tag: "HELLO, WORLD",
    weeks: "WEEKS 7–8",
    icon: "↗",
    color: "violet",
    start: 7,
    end: 9,
    text: "A confident launch, documentation, and a clear handover to your team.",
  },
];
export function TimelineSection() {
  return (
    <section
      className="timeline-section wrap"
      id="process"
      aria-labelledby="timeline-title"
    >
      <div className="section-top">
        <span className="eyebrow">04 / A CLEAR PATH TO LAUNCH</span>
        <span className="small-code muted">YOU’RE PART OF THE PROCESS.</span>
      </div>
      <div className="section-heading">
        <h2 id="timeline-title" aria-label="A clear path to launch.">
          A clear path
          <br />
          to <em>launch.</em>
        </h2>
        <p>
          Clear milestones.
          <br />A shared vision from day one.
        </p>
      </div>
      <div className="process-layout">
        <div className="process-graphic" aria-hidden="true">
          <span className="process-counter">01—05</span>
          <div className="process-orbits">
            <i />
            <i />
            <i />
            <b>✳</b>
          </div>
          <span className="small-code">A SHARED DIRECTION. EVERY STEP.</span>
        </div>
        <div className="process-steps">
          {phases.map((phase, i) => (
            <details key={phase.title} className="process-step" open={i === 0}>
              <summary>
                <span className="step-number">0{i + 1}</span>
                <div>
                  <span className="small-code">{phase.weeks}</span>
                  <h3>{phase.title}</h3>
                </div>
                <span className="step-plus">+</span>
              </summary>
              <p>{phase.text}</p>
            </details>
          ))}
        </div>
      </div>
      <p className="timeline-note">
        <span>↳</span> An example eight-week engagement. Your schedule is agreed
        around your scope.
      </p>
    </section>
  );
}

export function PricingSection() {
  return (
    <section
      className="pricing-section wrap"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="pricing-intro">
        <span className="eyebrow">05 / GOOD WORK. CLEAR INVESTMENT.</span>
        <h2 id="pricing-title" aria-label="Ambitious work. Clear investment.">
          Ambitious work.
          <br />
          <em>Clear investment.</em>
        </h2>
        <p>
          Every service starts at <strong>$2,000.</strong>
          <br />
          A focused brief or a complete launch.
          <br />
          The scope sets the investment.
        </p>
        <p className="pricing-footnote">
          All prices in USD. Each engagement is scoped individually.
        </p>
      </div>
      <div className="pricing-composition">
        <div className="investment-sculpture" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>
            Great work.
            <br />
            Within reach.
          </span>
        </div>
        <PricingSelector />
      </div>
    </section>
  );
}
