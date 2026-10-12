import Image from 'next/image';
import { projects, type ProjectSlug } from './content';
export function PortfolioScene({ project }: {
    project: ProjectSlug;
}) {
    if (project === 'motion-capability')
        return <div className="motion-capability" aria-label="Animated motion design capability study"><span>MOTION / THE POSSIBILITIES</span><div className="motion-capability-shape"/><strong>Make it<br />move.</strong><small>GENERATIVE MOTION STUDY</small></div>;
    const item = projects.find(p => p.slug === project);
    if (!item)
        return null;
    const image = item.images[0];
    return <div className={`portfolio-scene supplied-scene ${image ? '' : 'typographic-scene'}`} style={{ background: item.color }}>
 {image ? <Image src={image.src} alt={image.caption} fill sizes="(max-width: 700px) 100vw, 70vw" className={image.height / image.width > 2 ? 'tall-work-preview' : ''}/> : <><span className="eyebrow">{item.label}</span><strong>{item.title}</strong><span>{item.discipline}</span><small>{item.slug === 'hireus' ? 'EXPLORE THE PUBLISHED CASE STUDY' : 'EXPLORE THE WEB APPLICATION'}</small></>}
 </div>;
}
