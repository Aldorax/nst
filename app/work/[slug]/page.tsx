import { Suspense } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '../../content';
import { PortfolioScene } from '../../portfolio';
import { TransitionLink } from '../../transitions';
import { ClosingNote } from '../../shared';
import { pageMetadata } from '../../meta';
import { ArrowIcon } from '../../icons';
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const item = projects.find(p => p.slug === slug);
    if (!item)
        return {};
    const meta = pageMetadata(item.title, item.line, `/work/${slug}`);
    const cover = item.images[0];
    if (cover) {
        meta.openGraph = { ...meta.openGraph, images: [{ url: cover.src.replace(".webp", "-share.webp"), width: 1200, height: 630, alt: cover.caption }] };
        meta.twitter = { ...meta.twitter, images: [cover.src.replace(".webp", "-share.webp")] };
    }
    return meta;
}
async function ProjectContent({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const item = projects.find(p => p.slug === slug);
    if (!item)
        notFound();
    const next = projects[(projects.indexOf(item) + 1) % projects.length];
    return <main id="main" className="inner-page case-page supplied-case">
 <header className="case-hero wrap">
 <TransitionLink href="/work" className="text-link">← All work</TransitionLink>
 <span className="eyebrow">{item.label} / {item.discipline}</span>
 <h1>{item.title}<span style={{ color: item.color }}>.</span></h1><p>{item.line}</p>
 <div className="case-services">{item.services.map(s => <span key={s}>{s}</span>)}</div>
 {item.source && <a className="pill-button project-source" href={item.source} target="_blank" rel="noopener noreferrer">{item.sourceLabel} <ArrowIcon /></a>}
 </header>
 <section className="project-overview wrap"><span className="eyebrow">THE PROJECT</span><p>{item.summary}</p><ul>{item.focus.map(f => <li key={f}>{f}</li>)}</ul></section>
 <section className="project-boards wrap" aria-label={`${item.title} design gallery`}>
 {item.images.length ? item.images.map((image, i) => <figure key={image.src} style={{ background: item.color }}><Image src={image.src} alt={image.caption} width={image.width} height={image.height} sizes="(max-width: 700px) 100vw, 90vw" preload={i === 0}/><figcaption><span>0{i + 1} / {item.label}</span>{image.caption}</figcaption></figure>) : <div className="project-link-board"><PortfolioScene project={item.slug}/><p>{item.slug === 'hireus' ? 'Explore the full design process and original artwork in the published case study.' : 'The public deployment opens on an account sign-in screen.'}</p>{item.source && <a href={item.source} target="_blank" rel="noopener noreferrer" className="text-link">{item.sourceLabel} ↗</a>}</div>}
 </section>
 {item.credit && <p className="project-credit wrap">{item.credit}</p>}
 <ClosingNote title="Have something ambitious in mind?"/>
 <TransitionLink className="next-project wrap" href={`/work/${next.slug}`}><span className="eyebrow">NEXT PROJECT / {next.discipline}</span><strong>{next.title} ↗</strong></TransitionLink>
 </main>;
}
export default function ProjectPage({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) { return <Suspense fallback={<main id="main" className="inner-page"><div className="wrap route-loading" role="status">Opening the project…</div></main>}><ProjectContent params={params}/></Suspense>; }
