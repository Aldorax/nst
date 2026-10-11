import { PageHero, ClosingNote } from "../shared";
import { WorkGallery } from "../gallery";
import { pageMetadata } from "../meta";
export const metadata = pageMetadata(
  "Work & explorations",
  "Explore NST concepts across branding, development, product design, motion, copy, and documentation.",
  "/work",
);
export default function WorkPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        label="OUR CREATIVE RANGE"
        title="Different ideas. Distinctive execution."
        text="Brand systems, digital experiences, motion, and words. Five self-initiated explorations of what a non standard team can bring together."
      />
      <WorkGallery />
      <ClosingNote title="Make your project the next conversation." />
    </main>
  );
}
