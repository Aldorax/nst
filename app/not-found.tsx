import { PageHero } from "./shared";
import { TransitionLink } from "./transitions";
export default function NotFound() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        label="404 / AN UNEXPECTED TURN"
        title="Nothing here. Plenty ahead."
        text="We couldn’t find that page. Explore the work, find a discipline, or start a conversation with the team."
      />
      <div className="page-closing wrap">
        <TransitionLink href="/work" className="pill-button">
          Explore the work ↗
        </TransitionLink>
        <TransitionLink href="/services" className="text-link">
          Find your discipline ↗
        </TransitionLink>
      </div>
    </main>
  );
}
