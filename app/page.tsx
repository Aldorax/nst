import { SiteHeader } from "./navigation";
import { BrandLogo } from "./brand";
import { organization } from "./site";
import { MotionExperience } from "./motion";
import {
  BuildScene,
  TeamSection,
  TimelineSection,
  PricingSection,
} from "./sections";
import {
  ProjectButton,
  ProjectDialog,
  ContactButton,
  ContactDialog,
} from "./ui";

const services = [
  {
    name: "Website development",
    note: "Websites built for your business.",
    description:
      "Responsive websites and web applications with clear content, considered interactions, and a foundation your team can maintain.",
    tags: [
      "Creative development",
      "Web applications",
      "CMS & e-commerce",
      "Performance & SEO",
    ],
  },
  {
    name: "Branding & identity",
    note: "Give people a reason to remember you.",
    description:
      "Positioning, identity, and guidelines that make your business recognisable and consistent across every touchpoint.",
    tags: [
      "Brand strategy",
      "Visual identity",
      "Art direction",
      "Brand guidelines",
    ],
  },
  {
    name: "UI / UX design",
    note: "Make the next step feel obvious.",
    description:
      "Research, flows, and interfaces that help people understand your product and use it with confidence.",
    tags: ["User research", "Product design", "Prototyping", "Design systems"],
  },
  {
    name: "Motion & video",
    note: "Show what words alone cannot.",
    description:
      "Brand animation, product films, and explainers that give your ideas movement and clarity.",
    tags: [
      "Brand animation",
      "Explainer videos",
      "Product films",
      "Motion systems",
    ],
  },
  {
    name: "Copy & technical writing",
    note: "Say what matters. Make it clear.",
    description:
      "Website copy, brand voice, and technical documentation that help customers decide and developers get things done.",
    tags: [
      "Website copy",
      "Brand voice",
      "Developer docs",
      "Technical content",
    ],
  },
];

export default function Home() {
  return (
    <MotionExperience>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span>
              <i className="status-dot" /> Four people. One connected team.
            </span>
            <span className="small-code">
              BRANDING / WEBSITES / DIGITAL PRODUCTS
            </span>
          </div>
          <div className="hero-composition">
            <div className="hero-copy">
              <h1 id="hero-title" aria-label="Anything but standard.">
                Anything
                <br />
                but <span>standard.</span>
              </h1>
              <p>
                Branding, websites, and digital products that make your
                <br className="desktop-break" /> business easier to
                understand—and harder to overlook.
              </p>
              <ContactButton className="pill-button">
                Start a project
              </ContactButton>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-orbit" />
              <img className="knot" src="/knot.svg" alt="" />
              <span className="art-cross cross-one">+</span>
              <span className="art-cross cross-two">+</span>
              <span className="art-caption">FIG. 01 — NO STANDARD FORM</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span className="availability">
              <i className="status-dot" /> Projects from $2,000
            </span>
            <a href="#work">
              Explore our work <span className="circle-arrow">↓</span>
            </a>
            <span className="hero-index">SCROLL TO EXPLORE / 01</span>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <div>
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i}>
                STANDARD IS A STARTING POINT <b>✳</b> NOT A DESTINATION{" "}
                <b>✳</b>{" "}
              </span>
            ))}
          </div>
        </div>
        <section
          className="work-section wrap"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-top">
            <span className="eyebrow">01 / CONCEPT EXPLORATIONS</span>
            <span className="muted small-code">SELF-INITIATED CONCEPTS</span>
          </div>
          <div className="section-heading">
            <h2 id="work-title" aria-label="Ideas in action.">
              Ideas in action<span className="lime">.</span>
            </h2>
            <p>
              Three concepts exploring how strategy,
              <br />
              design, and development work together.
            </p>
          </div>
          <div className="work-grid">
            <article className="project project-orbit">
              <ProjectButton project="orbit" className="project-visual">
                <div className="mock-browser">
                  <div className="mock-nav">
                    <strong>
                      orbit<span>®</span>
                    </strong>
                    <span>Product&nbsp;&nbsp; Company&nbsp;&nbsp; ↗</span>
                  </div>
                  <div className="orbit-copy">
                    Your money.
                    <br />
                    <em>In a better orbit.</em>
                  </div>
                  <div className="orbit-sub">
                    A new perspective on everyday finance.
                  </div>
                  <span className="mock-cta">Find your orbit ↗</span>
                  <div className="orbit-shape">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="mock-bottom">
                    MAKE YOUR NEXT MOVE COUNT. <span>↗</span>
                  </div>
                </div>
                <span className="project-open">↗</span>
              </ProjectButton>
              <div className="project-caption">
                <div>
                  <span className="project-type">CONCEPT EXPLORATION</span>
                  <h3>Orbit</h3>
                  <p>Fintech, with a fresh perspective.</p>
                </div>
                <span>BRANDING / WEB DESIGN</span>
              </div>
            </article>
            <article className="project project-form">
              <ProjectButton project="form" className="project-visual">
                <div className="form-poster">
                  <span className="form-nav">
                    FORM & FIELD <span>OBJECTS FOR A LIFE WELL LIVED ↗</span>
                  </span>
                  <div className="chair-art">
                    <div className="chair-back" />
                    <div className="chair-seat" />
                    <div className="chair-leg leg-one" />
                    <div className="chair-leg leg-two" />
                    <div className="chair-shadow" />
                  </div>
                  <div className="form-title">
                    Less, but
                    <br />
                    <em>considered.</em>
                  </div>
                  <span className="form-caption">
                    THE EVERYDAY COLLECTION — 001
                  </span>
                  <span className="form-badge">
                    F<span>↗</span>
                  </span>
                </div>
                <span className="project-open">↗</span>
              </ProjectButton>
              <div className="project-caption">
                <div>
                  <span className="project-type">CONCEPT EXPLORATION</span>
                  <h3>Form & Field</h3>
                  <p>A digital home for considered living.</p>
                </div>
                <span>STRATEGY / E-COMMERCE</span>
              </div>
            </article>
            <article className="project project-pulse">
              <ProjectButton project="pulse" className="project-visual">
                <div className="pulse-poster">
                  <span className="pulse-nav">
                    PULSE® <span>TURN IT UP. FEEL SOMETHING.</span>
                  </span>
                  <div className="pulse-waves">
                    {Array.from({ length: 17 }, (_, i) => (
                      <i
                        key={i}
                        style={{ height: `${38 + Math.sin(i * 0.54) * 28}%` }}
                      />
                    ))}
                  </div>
                  <div className="pulse-title">
                    Feel the
                    <br />
                    <em>frequency.</em>
                  </div>
                  <span className="pulse-caption">
                    SOUND / CULTURE / CONNECTION
                  </span>
                </div>
                <span className="project-open">↗</span>
              </ProjectButton>
              <div className="project-caption">
                <div>
                  <span className="project-type">CONCEPT EXPLORATION</span>
                  <h3>Pulse</h3>
                  <p>An identity that moves to its own beat.</p>
                </div>
                <span>IDENTITY / MOTION</span>
              </div>
            </article>
          </div>
          <p className="concept-note">
            <span>↳</span> Concept explorations, not client case studies. A look
            at how we think and what we can build.
          </p>
        </section>
        <section
          className="services-section wrap"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="services-intro">
            <span className="eyebrow">02 / WHAT WE DO</span>
            <h2 id="services-title" aria-label="What do you need to build?">
              What do you
              <br />
              <span className="lime">need to build?</span>
            </h2>
            <p>
              Choose one service or bring us the whole project.
              <br />
              We connect strategy, design, technology, and words.
            </p>
            <ContactButton className="text-link">
              Discuss your project
            </ContactButton>
            <span className="service-asterisk" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="services-list">
            {services.map((service, i) => (
              <details key={service.name} name="services" open={i === 0}>
                <summary>
                  <span className="service-number">0{i + 1}</span>
                  <h3>{service.name}</h3>
                  <span className="service-starting">FROM $2,000</span>
                  <span className="expand-icon" />
                </summary>
                <div className="service-content">
                  <p className="service-note">{service.note}</p>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
        <BuildScene />
        <TimelineSection />
        <TeamSection />
        <PricingSection />
        <section className="contact-section" id="contact">
          <div className="wrap">
            <div className="contact-top">
              <span className="eyebrow">YOUR NEXT STEP</span>
              <span>FROM $2,000 / BUILT AROUND YOUR BUSINESS.</span>
            </div>
            <h2 className="contact-big">
              Have a project
              <br />
              in mind?
            </h2>
            <div className="contact-bottom">
              <p>
                Tell us what you’re building, what needs to change,
                <br />
                and the budget you have in mind.
              </p>
              <ContactButton className="dark-pill">
                Start a project
              </ContactButton>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
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
