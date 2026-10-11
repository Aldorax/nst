import { PageHero } from "../shared";
import { EnquiryFlow } from "./form";
import { pageMetadata } from "../meta";
import { Suspense } from "react";
export const metadata = pageMetadata(
  "Contact",
  "Tell NST about your project across branding, development, UI/UX, motion, copy, and technical writing.",
  "/contact",
);
export default function ContactPage() {
  return (
    <main id="main" className="inner-page contact-page">
      <PageHero
        label="LET’S MAKE SOMETHING WORTH REMEMBERING"
        title="Your ambition. Our next conversation."
        text="A few details are all we need to start understanding your project. Choose the disciplines, share the brief, and prepare an email to the team."
      />
      <Suspense
        fallback={
          <div className="wrap contact-loading" role="status">
            Preparing your enquiry form…
          </div>
        }
      >
        <EnquiryFlow />
      </Suspense>
      <section className="contact-direct wrap">
        <span className="eyebrow">PREFER A SIMPLE EMAIL?</span>
        <a href="mailto:legadax@outlook.com">legadax@outlook.com ↗</a>
        <p>Tell us what you’re building and where you need a hand.</p>
      </section>
    </main>
  );
}
