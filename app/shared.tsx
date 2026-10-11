import { BrandLogo } from "./brand";
import { TransitionLink } from "./transitions";
import { ContactButton } from "./ui";
import { ReplayIntro } from "./intro";
export function SiteFooter() {
  return (
    <footer className="global-footer wrap">
      <div className="footer-heading">
        <TransitionLink href="/" className="wordmark" aria-label="NST home">
          <BrandLogo />
        </TransitionLink>
        <p>
          Independent minds.
          <br />
          Shared ambition.
        </p>
      </div>
      <div className="footer-grid">
        <div>
          <span className="small-code">START A CONVERSATION</span>
          <a href="mailto:legadax@outlook.com">legadax@outlook.com ↗</a>
        </div>
        <nav aria-label="Footer navigation">
          {["work", "services", "studio", "process", "pricing", "contact"].map(
            (item) => (
              <TransitionLink key={item} href={`/${item}`}>
                {item}
              </TransitionLink>
            ),
          )}
        </nav>
      </div>
      <div className="footer-base">
        <span>© 2026 NST — Non Standard Team</span>
        <ReplayIntro />
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}
export function PageHero({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <header className="page-hero wrap">
      <span className="eyebrow">{label}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  );
}
export function ClosingNote({
  title = "Your next chapter starts here.",
}: {
  title?: string;
}) {
  return (
    <section className="page-closing wrap">
      <h2>{title}</h2>
      <ContactButton className="pill-button">Tell us about it</ContactButton>
    </section>
  );
}
