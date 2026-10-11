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
          Startups <span>↗</span>
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
          Funded companies <span>↗</span>
        </button>
      </div>
      <div
        className="investment-content"
        role="tabpanel"
        id="investment-panel"
        aria-labelledby={funded ? "funded-tab" : "startup-tab"}
      >
        <span className="eyebrow">
          {funded
            ? "BUILT FOR YOUR NEXT CHAPTER"
            : "A STRONG START. ROOM TO GROW."}
        </span>
        <div className="investment-price" key={funded ? "funded" : "startup"}>
          <span>FROM</span>
          <strong>$2,000</strong>
          <p>
            {funded
              ? "No upper limit. Just the right scope."
              : "Up to $50,000. Ambition, within reach."}
          </p>
        </div>
        <div className="investment-line" />
        <p className="investment-description">
          {funded
            ? "An established product. A bigger vision. A new market. We bring the team and the craft your next chapter needs, with an investment shaped around your goals."
            : "From your first identity to a complete digital launch. We’ll find the most valuable way to move your business forward, within a clear project budget."}
        </p>
        <ul>
          <li>One team across design, code, motion & words</li>
          <li>A scope and quote before we start</li>
          <li>Collaboration from first idea to launch</li>
        </ul>
        <ContactButton className="pill-button">
          {funded
            ? "Let’s shape your next chapter"
            : "Let’s find your starting point"}
          <span>↗</span>
        </ContactButton>
        <span className="investment-note">
          PROJECT PRICING · NO ONE-SIZE-FITS-ALL PACKAGES
        </span>
      </div>
    </div>
  );
}
