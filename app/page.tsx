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
  MobileMenu,
} from "./ui";

const services = [
  {
    name: "Website development",
    note: "Built to make an impression. Engineered to last.",
    description:
      "Fast, accessible websites and custom web experiences. We bring design to life with thoughtful interactions, clean code, and a foundation that grows with your business.",
    tags: [
      "Creative development",
      "Web applications",
      "CMS & e-commerce",
      "Performance & SEO",
    ],
  },
  {
    name: "Branding & identity",
    note: "A point of view people recognise.",
    description:
      "We turn what makes you different into a visual identity with a clear voice. From your first mark to a complete brand system, every detail tells the same story.",
    tags: [
      "Brand strategy",
      "Visual identity",
      "Art direction",
      "Brand guidelines",
    ],
  },
  {
    name: "UI / UX design",
    note: "Good looks. Even better experiences.",
    description:
      "Useful, intuitive digital products built around real people. We connect research, structure, and considered interfaces to make every interaction feel effortless.",
    tags: ["User research", "Product design", "Prototyping", "Design systems"],
  },
  {
    name: "Motion & video",
    note: "Ideas that refuse to stand still.",
    description:
      "Bring your story into motion with expressive brand animation, product films, and motion systems that hold attention and make complex ideas easy to understand.",
    tags: [
      "Brand animation",
      "Explainer videos",
      "Product films",
      "Motion systems",
    ],
  },
  {
    name: "Copy & technical writing",
    note: "The right words do the heavy lifting.",
    description:
      "A sharp headline. A story that connects. Documentation that actually helps. We translate your ideas into clear, purposeful words for your customers and your developers.",
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
      <header className="site-header wrap">
        <a className="wordmark" href="#" aria-label="NST home">
          <BrandLogo />
        </a>
        <span className="brand-caption">
          NON STANDARD
          <br />
          TEAM
        </span>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">
            Work <sup>03</sup>
          </a>
          <a href="#services">Services</a>
          <a href="#studio">Studio</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <ContactButton className="header-contact">
          Let’s talk <span>↗</span>
        </ContactButton>
        <MobileMenu />
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span>
              <i className="status-dot" /> Independent minds. One collective.
            </span>
            <span className="small-code">
              DESIGN × TECHNOLOGY × A LITTLE REBELLION
            </span>
          </div>
          <div className="hero-composition">
            <div className="hero-copy">
              <h1 id="hero-title">
                Anything
                <br />
                but <span>standard.</span>
                <span className="heading-period" aria-hidden="true">
                  ✳
                </span>
              </h1>
              <p>
                We build brands, websites, and digital experiences
                <br className="desktop-break" /> for those who dare to do things
                differently.
              </p>
              <ContactButton className="pill-button">
                Make something different <span>↗</span>
              </ContactButton>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-orbit" />
              <img className="knot" src="/knot.svg" alt="" />
              <span className="art-cross cross-one">+</span>
              <span className="art-cross cross-two">+</span>
              <span className="art-caption">FIG. 01 — NO STANDARD FORM</span>
              <div className="art-coordinate">
                [ N / S / T ]<br />
                ALWAYS IN THE MAKING
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span className="availability">
              <i className="status-dot" /> Open for good collaborations
            </span>
            <a href="#work">
              A little less ordinary <span className="circle-arrow">↓</span>
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
        <BuildScene />
        <section
          className="work-section wrap"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-top">
            <span className="eyebrow">02 / CREATIVE EXPLORATIONS</span>
            <span className="muted small-code">
              A GLIMPSE OF WHAT’S POSSIBLE
            </span>
          </div>
          <div className="section-heading">
            <h2 id="work-title">
              Different by design<span className="lime">.</span>
            </h2>
            <p>
              Fresh perspectives. Thoughtful execution.
              <br />
              Here’s where our ideas take shape.
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
                  <h3>Pulse</h3>
                  <p>An identity that moves to its own beat.</p>
                </div>
                <span>IDENTITY / MOTION</span>
              </div>
            </article>
          </div>
          <p className="concept-note">
            <span>↳</span> Self-initiated concepts. A space to explore,
            experiment, and push the craft.
          </p>
        </section>
        <section
          className="services-section wrap"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="services-intro">
            <span className="eyebrow">03 / WHAT WE DO</span>
            <h2 id="services-title">
              From first idea
              <br />
              to <span className="lime">what’s next.</span>
            </h2>
            <p>
              Designers. Developers. Storytellers.
              <br />
              One team connecting all the dots.
            </p>
            <ContactButton className="text-link">
              Find your next move <span>↗</span>
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
        <TeamSection />
        <TimelineSection />
        <PricingSection />
        <section className="contact-section" id="contact">
          <div className="wrap">
            <div className="contact-top">
              <span className="eyebrow">GOT SOMETHING IN MIND?</span>
              <span>GOOD THINGS START WITH A CONVERSATION.</span>
            </div>
            <ContactButton className="contact-big">
              Let’s make
              <br />
              some noise<span>↗</span>
            </ContactButton>
            <div className="contact-bottom">
              <p>
                Your next big thing deserves
                <br />a non standard team.
              </p>
              <ContactButton className="dark-pill">
                Tell us about it <span>↗</span>
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
