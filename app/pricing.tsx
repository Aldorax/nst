"use client";
import { useState } from "react";
import { ContactButton } from "./ui";
export function PricingSelector() {
  const [funded, setFunded] = useState(false);
  return (
    <div className="pricing-panel">
      <div className="pricing-tabs" role="tablist" aria-label="Company stage">
        <button
          role="tab"
          id="startup-tab"
          aria-selected={!funded}
          aria-controls="investment-panel"
          tabIndex={funded ? -1 : 0}
          onClick={() => setFunded(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              setFunded(true);
              document.getElementById("funded-tab")?.focus();
            }
          }}
        >
          Startups
        </button>
        <button
          role="tab"
          id="funded-tab"
          aria-selected={funded}
          aria-controls="investment-panel"
          tabIndex={funded ? 0 : -1}
          onClick={() => setFunded(true)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              setFunded(false);
              document.getElementById("startup-tab")?.focus();
            }
          }}
        >
          Funded companies
        </button>
      </div>
      <div
        className="investment-content"
        role="tabpanel"
        id="investment-panel"
        aria-labelledby={funded ? "funded-tab" : "startup-tab"}
      >
        <span className="eyebrow">
          {funded ? "FOR FUNDED COMPANIES" : "FOR SELF-FUNDED STARTUPS"}
        </span>
        <div className="investment-price" key={funded ? "funded" : "startup"}>
          <span>FROM</span>
          <strong>$2,000</strong>
          <p>
            {funded
              ? "No fixed upper budget limit."
              : "Startup projects capped at $50,000."}
          </p>
        </div>
        <div className="investment-line" />
        <p className="investment-description">
          {funded
            ? "Larger engagements are scoped around your product, team, and goals. Projects start at $2,000, with no fixed upper limit."
            : "Startup projects range from $2,000 to $50,000. We shape the scope around your priorities and budget, from a single service to a complete launch."}
        </p>
        <ul>
          <li>Design, development, motion, and writing in one team</li>
          <li>Scope and quote agreed before work begins</li>
          <li>A clear process from direction to handover</li>
        </ul>
        <ContactButton
          className="pill-button"
          stage={funded ? "Funded company" : "Startup"}
        >
          Start a project
        </ContactButton>
        <span className="investment-note">
          ALL PRICES IN USD / PROJECTS SCOPED INDIVIDUALLY
        </span>
      </div>
    </div>
  );
}
