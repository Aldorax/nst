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
          04 / A SMALL TEAM. A CONNECTED APPROACH.
        </span>
        <span className="small-code">NST / NON STANDARD TEAM</span>
      </div>
      <div className="team-canvas wrap">
        {crafts.map((craft, i) => (
          <div
            className={`craft-card ${craft.className}`}
            key={craft.label}
            data-speed={i % 2 ? -1 : 1}
          >
            <span className="craft-index">OUR CRAFT / 0{i + 1}</span>
            <span className="craft-glyph" aria-hidden="true">
              {craft.glyph}
            </span>
            <span className="craft-name">{craft.label}</span>
            <span className="craft-note">{craft.note}</span>
          </div>
        ))}
        <div className="team-center">
          <span className="eyebrow">FOUR PEOPLE. FIVE SERVICES.</span>
          <h2 id="team-title" aria-label="Four people. One connected team.">
            Four people.
            <br />
            <em>One connected team.</em>
          </h2>
          <p>
            We’re NST: Non Standard Team. A four-person agency bringing design,
            development, motion, and writing together around your project.
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
        <span className="eyebrow">03 / A CLEAR PATH TO LAUNCH</span>
        <span className="small-code muted">YOU’RE PART OF THE PROCESS.</span>
      </div>
      <div className="section-heading">
        <h2 id="timeline-title" aria-label="A clear path to launch.">
          A clear path
          <br />
          to <em>launch.</em>
        </h2>
        <p>
          See what happens, when decisions are needed,
          <br />
          and how the work comes together.
        </p>
      </div>
      <div className="timeline-scroll">
        <div className="timeline-weeks">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i}>{i === 0 ? "KICK-OFF" : `WEEK 0${i + 1}`}</span>
          ))}
        </div>
        <div className="timeline-board">
          {phases.map((phase, i) => (
            <details
              key={phase.title}
              className={`timeline-phase phase-${phase.color}`}
              style={{
                gridColumn: `${phase.start} / ${phase.end}`,
                gridRow: i + 1,
              }}
            >
              <summary>
                <div className="phase-meta">
                  <i />
                  <span>{phase.tag}</span>
                  <b>{phase.weeks}</b>
                  <i />
                </div>
                <div className="phase-title">
                  <span className="phase-icon">{phase.icon}</span>
                  <h3>{phase.title}</h3>
                  <span className="phase-expand">+</span>
                </div>
              </summary>
              <p>{phase.text}</p>
            </details>
          ))}
        </div>
      </div>
      <p className="timeline-note">
        <span>↳</span> An example eight-week brand and website project. We agree
        your schedule around the scope before work begins. Select a phase to
        learn more.
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
        <h2 id="pricing-title" aria-label="A starting price. A clear scope.">
          A starting price.
          <br />
          <em>A clear scope.</em>
        </h2>
        <p>
          Every service starts at <strong>$2,000.</strong>
          <br />
          Your quote reflects the deliverables, complexity, and support you
          need.
        </p>
        <div className="pricing-services">
          {[
            "Website development",
            "Branding & identity",
            "UI / UX design",
            "Motion & video",
            "Copy & technical writing",
          ].map((item) => (
            <div key={item}>
              <span>{item}</span>
              <span>FROM $2,000</span>
            </div>
          ))}
        </div>
        <p className="pricing-footnote">
          All prices in USD. Starting prices apply to individual services;
          combining services changes the total scope.
        </p>
      </div>
      <PricingSelector />
    </section>
  );
}
