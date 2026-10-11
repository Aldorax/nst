import { ContactButton } from "./ui";
import { PricingSelector } from "./pricing";

export function BuildScene() {
  return (
    <section
      className="build-section"
      id="approach"
      aria-labelledby="build-title"
    >
      <div className="build-pin wrap">
        <div className="build-top">
          <span className="eyebrow">01 / FROM WHAT IF TO WHAT’S NEXT</span>
          <span className="build-live">
            <i /> A LITTLE LOOK UNDER THE HOOD
          </span>
        </div>
        <div className="build-layout">
          <div className="build-story">
            <h2 id="build-title">
              Good ideas.
              <br />
              Made <em>real.</em>
            </h2>
            <p>
              Scroll through the making.
              <br />
              This is where different takes shape.
            </p>
            <div className="build-chapters">
              <div className="build-chapter">
                <span>01</span>
                <div>
                  <h3>Find the spark.</h3>
                  <p>A clear story. A different point of view.</p>
                </div>
              </div>
              <div className="build-chapter">
                <span>02</span>
                <div>
                  <h3>Give it a form.</h3>
                  <p>Design that makes the idea tangible.</p>
                </div>
              </div>
              <div className="build-chapter">
                <span>03</span>
                <div>
                  <h3>Make it move.</h3>
                  <p>Thoughtful code. Every detail, alive.</p>
                </div>
              </div>
            </div>
            <a href="#work" className="build-skip">
              Skip to the explorations ↘
            </a>
          </div>
          <div className="build-object" aria-hidden="true">
            <div className="blueprint-label">
              NST / DIGITAL ASSEMBLY <span>[ LIVE PREVIEW ]</span>
            </div>
            <div className="blueprint">
              <div className="blueprint-guides">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="blueprint-frame" />
              <div className="blueprint-block block-nav" />
              <div className="blueprint-block block-heading" />
              <div className="blueprint-block block-body" />
              <div className="blueprint-block block-button" />
              <div className="blueprint-block block-art" />
              <div className="blueprint-design">
                <div className="blueprint-nav">
                  <b>
                    nst<span>✳</span>
                  </b>
                  <span>DESIGNED TO BE DIFFERENT ↗</span>
                </div>
                <div className="blueprint-title">
                  A different
                  <br />
                  <em>kind of future.</em>
                </div>
                <p>
                  Extraordinary ideas deserve
                  <br />
                  extraordinary experiences.
                </p>
                <div className="blueprint-button">Make your move ↗</div>
                <div className="blueprint-flower">✳</div>
                <div className="blueprint-footer">
                  IMAGINED. DESIGNED. DEVELOPED. <span>01 / ∞</span>
                </div>
              </div>
              <span className="measure measure-x">↔ 100% YOU</span>
              <span className="measure measure-y">BUILT WITH INTENTION</span>
            </div>
            <div className="build-progress">
              <span>IDEA → IDENTITY → EXPERIENCE</span>
              <b>
                <span className="build-percentage">000</span>%
              </b>
            </div>
            <div className="build-progress-track">
              <i />
            </div>
          </div>
        </div>
        <div className="build-bottom">
          <span>NO SHORTCUTS. JUST THE GOOD STUFF.</span>
          <span>KEEP SCROLLING ↓</span>
        </div>
      </div>
    </section>
  );
}

const crafts = [
  {
    label: "Strategy",
    glyph: "↗",
    className: "craft-strategy",
    note: "ASK BETTER QUESTIONS",
  },
  {
    label: "Branding",
    glyph: "✳",
    className: "craft-brand",
    note: "MAKE YOUR MARK",
  },
  {
    label: "UI / UX",
    glyph: "◉",
    className: "craft-ux",
    note: "THINK HUMAN FIRST",
  },
  {
    label: "Development",
    glyph: "{ }",
    className: "craft-dev",
    note: "BUILD WITH INTENTION",
  },
  {
    label: "Motion",
    glyph: "≋",
    className: "craft-motion",
    note: "FEEL SOMETHING",
  },
  {
    label: "Words",
    glyph: "Aa",
    className: "craft-words",
    note: "SAY IT BETTER",
  },
  {
    label: "Curiosity",
    glyph: "?",
    className: "craft-curiosity",
    note: "NEVER STOP ASKING",
  },
  {
    label: "Craft",
    glyph: "+",
    className: "craft-detail",
    note: "SWEAT THE SMALL STUFF",
  },
];
export function TeamSection() {
  return (
    <section className="team-section" id="studio" aria-labelledby="team-title">
      <div className="team-top wrap">
        <span className="eyebrow">04 / THE NON STANDARD TEAM</span>
        <span className="small-code">INDEPENDENT MINDS. SHARED OBSESSION.</span>
      </div>
      <div className="team-canvas wrap">
        <div className="team-ghosts" aria-hidden="true">
          {Array.from({ length: 8 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        {crafts.map((craft, i) => (
          <div
            key={craft.label}
            className={`craft-card ${craft.className}`}
            data-speed={i % 2 === 0 ? "-1" : "1"}
          >
            <span className="craft-index">0{i + 1} / NST</span>
            <span className="craft-glyph" aria-hidden="true">
              {craft.glyph}
            </span>
            <div className="craft-name">
              {craft.label}
              <span>↗</span>
            </div>
            <span className="craft-note">{craft.note}</span>
          </div>
        ))}
        <div className="team-center">
          <span className="eyebrow">DIFFERENT PEOPLE. SAME ENERGY.</span>
          <h2 id="team-title">
            Many minds.
            <br />
            <em>One team.</em>
          </h2>
          <p>
            Designers, developers, and storytellers.
            <br />
            Bringing different perspectives to the same table.
            <br />
            From the first spark to the last pixel.
          </p>
          <ContactButton className="dark-pill">
            Meet your next creative partners <span>↗</span>
          </ContactButton>
        </div>
      </div>
      <div className="team-bottom wrap">
        <span>COLLABORATIVE BY NATURE.</span>
        <span>NON STANDARD, ALWAYS.</span>
      </div>
    </section>
  );
}

const phases = [
  {
    title: "Discovery & strategy",
    tag: "FIND THE DIFFERENCE",
    weeks: "WEEKS 1–2",
    icon: "◎",
    color: "amber",
    start: 1,
    end: 4,
    text: "Goals, audience, positioning, and a creative direction we believe in.",
  },
  {
    title: "Identity & experience design",
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
    title: "Refinement & quality assurance",
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
        <span className="eyebrow">05 / A PLAN, NOT A BLACK BOX</span>
        <span className="small-code muted">YOU’RE PART OF THE PROCESS.</span>
      </div>
      <div className="section-heading">
        <h2 id="timeline-title">
          How the good
          <br />
          stuff <em>gets made.</em>
        </h2>
        <p>
          A shared roadmap. Space to explore.
          <br />
          And a clear path to getting it live.
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
        <span>↳</span> An illustrative 8-week website & brand project. Your
        timeline is shaped around your scope. Tap a phase to look closer.
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
        <span className="eyebrow">06 / GOOD WORK. CLEAR INVESTMENT.</span>
        <h2 id="pricing-title">
          Big ambition.
          <br />
          <em>Fair starting point.</em>
        </h2>
        <p>
          Every service starts at <strong>$2,000.</strong>
          <br />
          The right scope, shaped around your next move.
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
              <span>FROM $2,000 ↗</span>
            </div>
          ))}
        </div>
        <p className="pricing-footnote">
          All prices in USD. Final investment depends on scope, deliverables,
          and complexity.
        </p>
      </div>
      <PricingSelector />
    </section>
  );
}
