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
            ? "Built for your next stage. Multi-disciplinary engagements with no fixed upper limit."
            : "Focused on what moves you forward. From a single service to a complete launch."}
        </p>
        <p className="investment-assurance">
          A clear scope. A considered process. Direct access to the team.
        </p>
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
