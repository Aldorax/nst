"use client";
import { useEffect, useState } from "react";
import { projects } from "./content";
import { PortfolioScene } from "./portfolio";
import { ProjectButton } from "./ui";
import { ArrowIcon } from "./icons";
const disciplines: Record<string, string[]> = {
  brand: ["Branding & identity"],
  digital: ["Website development", "UI / UX design"],
  motion: ["Motion & video"],
  words: ["Copy & technical writing"],
};
export function WorkGallery() {
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    window.dispatchEvent(new Event("nst-gallery-change"));
  }, [filter]);
  return (
    <section className="gallery-section wrap">
      <div className="gallery-filters" role="group" aria-label="Filter work">
        {[
          ["all", "All explorations"],
          ["brand", "Brand & editorial"],
          ["digital", "Digital & product"],
          ["motion", "Motion & identity"],
          ["words", "Copy & documentation"],
        ].map(([value, label]) => (
          <button
            key={value}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="work-grid">
        {projects
          .filter(
            (item) =>
              filter === "all" ||
              item.services.some((service) =>
                disciplines[filter]?.includes(service),
              ),
          )
          .map((item) => (
            <article className="project" key={item.slug}>
              <ProjectButton className="project-visual" project={item.slug}>
                <PortfolioScene project={item.slug} />
                <span className="project-open">
                  <ArrowIcon />
                </span>
              </ProjectButton>
              <div className="project-caption">
                <div>
                  <span className="project-type">SELF-INITIATED CONCEPT</span>
                  <h3>{item.title}</h3>
                  <p>{item.line}</p>
                </div>
                <span>{item.discipline}</span>
                <ProjectButton
                  project={item.slug}
                  className="project-story-link"
                >
                  Inside the exploration <ArrowIcon />
                </ProjectButton>
              </div>
            </article>
          ))}
      </div>
      <p className="concept-note">
        Self-initiated studies across NST’s disciplines.
      </p>
    </section>
  );
}
