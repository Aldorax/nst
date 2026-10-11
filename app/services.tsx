"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { radialPath } from "./forms";
import { ArrowIcon } from "./icons";
import { ContactButton } from "./ui";

const disciplines = [
  {
    name: "Web development",
    word: "Build.",
    description:
      "Expressive websites. Powerful applications. Built to perform.",
    tags: "CREATIVE DEVELOPMENT / CMS / E-COMMERCE",
    symbol: "</>",
  },
  {
    name: "Branding & identity",
    word: "Stand out.",
    description:
      "A distinctive identity. A clear position. A brand worth remembering.",
    tags: "STRATEGY / IDENTITY / ART DIRECTION",
    symbol: "n",
  },
  {
    name: "UI / UX design",
    word: "Connect.",
    description:
      "Considered journeys and intuitive interfaces people want to use.",
    tags: "RESEARCH / PRODUCT DESIGN / PROTOTYPES",
    symbol: "↗",
  },
  {
    name: "Motion & video",
    word: "Move.",
    description: "Brand animation, product films, and ideas that come alive.",
    tags: "ANIMATION / PRODUCT FILMS / EXPLAINERS",
    symbol: "▶",
  },
  {
    name: "Copy & technical writing",
    word: "Say it.",
    description:
      "A clear voice for your brand. Useful words for your customers and developers.",
    tags: "BRAND VOICE / WEBSITE COPY / DEVELOPER DOCS",
    symbol: "Aa",
  },
];

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const path = useRef<SVGPathElement>(null);
  useEffect(() => {
    const tween = gsap.to(path.current, {
      attr: { d: radialPath(active + 3, 14 + active * 3, active) },
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 1.2,
      ease: "power3.inOut",
    });
    return () => {
      tween.kill();
    };
  }, [active]);
  const service = disciplines[active];
  return (
    <section
      className="services-section wrap"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="services-intro">
        <span className="eyebrow">01 / DIFFERENT DISCIPLINES. ONE TEAM.</span>
        <h2 id="services-title">
          Good ideas.
          <br />
          <em>Every dimension.</em>
        </h2>
      </div>
      <div className="discipline-layout">
        <div
          className="discipline-art"
          data-discipline={active}
          aria-hidden="true"
        >
          <span className="small-code">NST / CREATIVE ENGINE</span>
          <div className="discipline-object">
            <svg viewBox="0 0 200 200">
              <defs>
                <linearGradient id="service-metal" x1="0" x2="1" y2="1">
                  <stop stopColor="#fff" />
                  <stop offset=".26" stopColor="#b9a7fc" />
                  <stop offset=".45" stopColor="#504577" />
                  <stop offset=".53" stopColor="#f3dfff" />
                  <stop offset=".72" stopColor="#8b6cbd" />
                  <stop offset="1" stopColor="#ddff9b" />
                </linearGradient>
              </defs>
              <path
                ref={path}
                d={radialPath(3, 14)}
                fill="url(#service-metal)"
              />
            </svg>
            <span>{service.symbol}</span>
          </div>
          <strong>{service.word}</strong>
          <span className="small-code">
            FORM FOLLOWS AMBITION / 0{active + 1}
          </span>
        </div>
        <div className="discipline-menu">
          <div
            className="discipline-tabs"
            role="tablist"
            aria-label="Explore services"
            aria-orientation="vertical"
          >
            {disciplines.map((item, i) => (
              <button
                key={item.name}
                role="tab"
                aria-selected={active === i}
                id={`discipline-${i}`}
                aria-controls="discipline-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                    event.preventDefault();
                    const next =
                      (active + (event.key === "ArrowDown" ? 1 : 4)) % 5;
                    setActive(next);
                    document.getElementById(`discipline-${next}`)?.focus();
                  }
                }}
              >
                <span>0{i + 1}</span>
                {item.name}
                <ArrowIcon />
              </button>
            ))}
          </div>
          <div
            id="discipline-panel"
            role="tabpanel"
            aria-labelledby={`discipline-${active}`}
            tabIndex={0}
          >
            <p>{service.description}</p>
            <span className="small-code">{service.tags}</span>
            <div className="discipline-bottom">
              <span>FROM $2,000</span>
              <ContactButton className="pill-button">
                Let’s make it happen
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
