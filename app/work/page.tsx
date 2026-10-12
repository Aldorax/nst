import { PageHero, ClosingNote } from "../shared";
import { WorkGallery } from "../gallery";
import { pageMetadata } from "../meta";
export const metadata = pageMetadata(
  "Selected work",
  "Explore NST’s selected websites, product interfaces, redesigns, and editorial experiences.",
  "/work",
);
export default function WorkPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        label="OUR CREATIVE RANGE"
        title="Different ideas. Distinctive execution."
        text="Live websites. Product interfaces. Fresh perspectives on familiar experiences. Take a closer look at the work."
      />
      <WorkGallery />
      <ClosingNote title="Make your project the next conversation." />
    </main>
  );
}
