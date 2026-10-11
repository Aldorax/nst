import { WorkGallery } from "./gallery";

import { ServicesShowcase } from "./services";
import { Sculpture } from "./sculpture";

import { organization } from "./site";
import { MotionExperience } from "./motion";
import { TeamSection, TimelineSection, PricingSection } from "./sections";
import { ContactButton } from "./ui";

export default function Home() {
  return (
    <MotionExperience>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span>
              <i className="status-dot" /> Independent minds. Shared ambition.
            </span>
            <span className="small-code">NST / DESIGN & DEVELOPMENT</span>
          </div>
          <div className="hero-composition">
            <div className="hero-copy">
              <h1 id="hero-title" aria-label="Anything but ordinary.">
                Anything
                <br />
                but <span>ordinary.</span>
              </h1>
              <p>
                Distinctive brands. Exceptional websites.
                <br />
                For businesses ready to stand apart.
              </p>
              <ContactButton className="pill-button">
                Start a project
              </ContactButton>
            </div>
            <Sculpture />
          </div>
          <div className="hero-bottom">
            <span className="availability">
              <i className="status-dot" /> Independent studio. Worldwide.
            </span>
            <a href="#work">
              Explore our work <span className="circle-arrow">↓</span>
            </a>
            <span className="hero-index">DESIGN WITHOUT DEFAULTS</span>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <div>
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i}>
                IDEAS WITHOUT LIMITS <b>/</b> BUILT WITHOUT SHORTCUTS{" "}
                <b>/</b>{" "}
              </span>
            ))}
          </div>
        </div>
        <ServicesShowcase />
        <section
          className="work-section wrap"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-top">
            <span className="eyebrow">02 / CONCEPT EXPLORATIONS</span>
            <span className="muted small-code">SELF-INITIATED CONCEPTS</span>
          </div>
          <div className="section-heading">
            <h2 id="work-title" aria-label="A different point of view.">
              A different
              <br />
              <em>point of view.</em>
            </h2>
            <p>
              Brand, digital, and motion.
              <br />
              Three self-initiated explorations.
            </p>
          </div>
          <div className="home-gallery">
            <WorkGallery />
          </div>
        </section>
        <TeamSection />
        <TimelineSection />
        <PricingSection />
        <section className="contact-section" id="contact">
          <div className="wrap">
            <div className="contact-top">
              <span className="eyebrow">YOUR NEXT STEP</span>
              <span>CREATIVE THINKING. CONSIDERED EXECUTION.</span>
            </div>

            <h2 className="contact-big">
              Make your
              <br />
              next move.
            </h2>
            <div className="contact-bottom">
              <p>
                Bring the ambition.
                <br />
                We’ll bring the team.
              </p>
              <ContactButton className="dark-pill">
                Start a project
              </ContactButton>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
    </MotionExperience>
  );
}
