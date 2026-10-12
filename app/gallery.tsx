"use client";
import { useEffect, useState } from 'react';
import { projects } from './content';
import { PortfolioScene } from './portfolio';
import { ProjectButton } from './ui';
import { ArrowIcon } from './icons';
import { TransitionLink } from './transitions';
const filters=[['all','All work'],['design','Website design'],['product','Product interfaces'],['website','Websites & apps'],['editorial','Editorial & documentation']];
export function WorkGallery({featured=false}:{featured?:boolean}) {
 const [filter,setFilter]=useState('all');
 useEffect(()=>{ window.dispatchEvent(new Event('nst-gallery-change')); },[filter]);
 const items=featured? projects.slice(0,6): projects.filter(p=>filter==='all'||p.category===filter);
 return <section className={`gallery-section real-work-gallery wrap ${featured?'featured-gallery':''}`}>
 {!featured && <div className="gallery-filters" role="group" aria-label="Filter work">{filters.map(([value,label])=><button key={value} aria-pressed={filter===value} onClick={()=>setFilter(value)}>{label}<span>{value==='all'?projects.length:projects.filter(p=>p.category===value).length}</span></button>)}</div>}
 <div className="work-grid">{items.map((item,i)=><article className="project" key={item.slug}>
 <ProjectButton className="project-visual" project={item.slug}><PortfolioScene project={item.slug}/><span className="project-open"><ArrowIcon/></span></ProjectButton>
 <div className="project-caption"><div><span className="project-type">{item.label} / {String(i+1).padStart(2,'0')}</span><h3>{item.title}</h3><p>{item.line}</p></div><ProjectButton project={item.slug} className="project-story-link">Explore project <ArrowIcon/></ProjectButton></div>
 </article>)}</div>
 {featured && <TransitionLink href="/work" className="pill-button gallery-all">View all {projects.length} projects <ArrowIcon/></TransitionLink>}
 </section>;
}
