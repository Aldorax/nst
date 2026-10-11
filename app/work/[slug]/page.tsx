import { Suspense } from "react";
import { notFound } from "next/navigation";
import { projects } from "../../content";
import { PortfolioScene } from "../../portfolio";
import { TransitionLink } from "../../transitions";
import { ClosingNote } from "../../shared";
import { pageMetadata } from "../../meta";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? pageMetadata(project.title, project.line, `/work/${slug}`)
    : {};
}
async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = projects.find((project) => project.slug === slug);
  if (!item) notFound();
  const next = projects[(projects.indexOf(item) + 1) % projects.length];
  return (
    <main id="main" className="inner-page case-page">
      <header className="case-hero wrap">
        <TransitionLink href="/work" className="text-link">
          ← All explorations
        </TransitionLink>
        <span className="eyebrow">
          SELF-INITIATED CONCEPT / {item.discipline}
        </span>
        <h1>
          {item.title}
          <span style={{ color: item.color }}>.</span>
        </h1>
        <p>{item.line}</p>
        <div className="case-services">
          {item.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </header>
      <div className="case-art wrap">
        <PortfolioScene project={item.slug} />
      </div>
      <section className="case-story wrap">
        <span className="eyebrow">01 / THE BRIEF</span>
        <h2>{item.brief}</h2>
        <p>{item.note}</p>
      </section>
      <section className="case-approach wrap">
        <div>
          <span className="eyebrow">02 / THE CREATIVE DIRECTION</span>
          <h2>{item.principle}</h2>
          <p>{item.approach}</p>
          <p>{item.detail}</p>
        </div>
        <div className="case-system" style={{ background: item.color }}>
          <span>DESIGN SYSTEM / EXPLORATION</span>
          <strong>{item.slug === "fieldnotes" ? "Aa →" : "Aa"}</strong>
          <span>{item.type}</span>
          <div className="case-swatches">
            <i />
            <i />
            <i style={{ background: item.color }} />
          </div>
        </div>
      </section>
      <section className="case-delivery wrap">
        <div>
          <span className="eyebrow">03 / WHAT WE EXPLORED</span>
          <h2>
            One idea.
            <br />A connected system.
          </h2>
        </div>
        <ol>
          {item.outputs.map((output, i) => (
            <li key={output}>
              <span>0{i + 1}</span>
              {output}
            </li>
          ))}
        </ol>
      </section>
      <ClosingNote title="A similar ambition? Let’s talk." />
      <TransitionLink className="next-project wrap" href={`/work/${next.slug}`}>
        <span className="eyebrow">NEXT EXPLORATION / {next.discipline}</span>
        <strong>{next.title} ↗</strong>
      </TransitionLink>
    </main>
  );
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main id="main" className="inner-page">
          <div className="wrap route-loading" role="status">
            Opening the exploration…
          </div>
        </main>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}
