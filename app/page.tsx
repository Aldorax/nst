import { PortfolioScene } from "./portfolio";
import { StudioIntro, ReplayIntro } from "./intro";
import { ServicesShowcase } from "./services";
import { Sculpture } from "./sculpture";
import { ArrowIcon } from "./icons";
import { SiteHeader } from "./navigation";
import { BrandLogo } from "./brand";
import { organization } from "./site";
import { MotionExperience } from "./motion";
import { TeamSection, TimelineSection, PricingSection } from "./sections";
import {
  ProjectButton,
  ProjectDialog,
  ContactButton,
  ContactDialog,
} from "./ui";

export default function Home() {
  return (
    <MotionExperience>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <StudioIntro />
      <SiteHeader />
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
                IDEAS WITHOUT LIMITS <b>✳</b> BUILT WITHOUT SHORTCUTS{" "}
                <b>✳</b>{" "}
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
          <div className="work-grid">
            <article className="project project-orbit">
              <ProjectButton project="orbit" className="project-visual">
                <PortfolioScene project="orbit" />
                <span className="project-open" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </ProjectButton>
              <div className="project-caption">
                <div>
                  <span className="project-type">CONCEPT EXPLORATION</span>
                  <h3>Orbit</h3>
                  <p>Fintech, with a fresh perspective.</p>
                </div>
                <span>BRANDING / WEB DESIGN</span>
                <ProjectButton project="orbit" className="project-story-link">
                  Explore the concept <ArrowIcon />
                </ProjectButton>
              </div>
            </article>
            <article className="project project-form">
              <ProjectButton project="form" className="project-visual">
                <PortfolioScene project="form" />
                <span className="project-open" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </ProjectButton>
              <div className="project-caption">
                <div>
                  <span className="project-type">CONCEPT EXPLORATION</span>
                  <h3>Form & Field</h3>
                  <p>A digital home for considered living.</p>
                </div>
                <span>STRATEGY / E-COMMERCE</span>
                <ProjectButton project="form" className="project-story-link">
                  Explore the concept <ArrowIcon />
                </ProjectButton>
              </div>
            </article>
            <article className="project project-pulse">
              <ProjectButton project="pulse" className="project-visual">
                <PortfolioScene project="pulse" />
                <span className="project-open" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </ProjectButton>
              <div className="project-caption">
                <div>
                  <span className="project-type">CONCEPT EXPLORATION</span>
                  <h3>Pulse</h3>
                  <p>An identity that moves to its own beat.</p>
                </div>
                <span>IDENTITY / MOTION</span>
                <ProjectButton project="pulse" className="project-story-link">
                  Explore the concept <ArrowIcon />
                </ProjectButton>
              </div>
            </article>
          </div>
          <p className="concept-note">
            <span>↳</span> Self-initiated concepts. A look at our creative
            range.
          </p>
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
            <div className="contact-emblem" aria-hidden="true">
              ✳
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
      <footer className="site-footer wrap">
        <div className="footer-display" aria-hidden="true">
          non standard<span>✳</span>
        </div>
        <a href="#" className="wordmark">
          <BrandLogo />
        </a>
        <span className="footer-manifesto">
          NON STANDARD TEAM.
          <br />
          STANDARD WAS NEVER THE PLAN.
        </span>
        <a className="footer-email" href="mailto:legadax@outlook.com">
          legadax@outlook.com ↗
        </a>
        <span>© 2026 NST</span>
        <a href="#main">Back to top ↑</a>
        <ReplayIntro />
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
      <ProjectDialog />
      <ContactDialog />
    </MotionExperience>
  );
}
