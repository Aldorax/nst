"use client";

import { useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { radialPath } from "./forms";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function MotionExperience({ children }: { children: ReactNode }) {
  useEffect(() => {
    let disposed = false;
    const media = gsap.matchMedia();
    const cleanups: (() => void)[] = [];
    document.fonts.ready.then(() => {
      if (disposed) return;
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".scroll-meter i", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });
        const splits: SplitText[] = [];
        const hero = SplitText.create("#hero-title", {
          type: "chars,words",
          mask: "words",
          aria: "none",
        });
        splits.push(hero);
        gsap.from(hero.chars, {
          yPercent: 115,
          rotate: 5,
          opacity: 0,
          stagger: 0.028,
          duration: 1.05,
          ease: "power4.out",
          delay: 0.12,
        });
        gsap.from(
          ".hero-topline, .hero-copy > p, .hero-copy > button, .hero-bottom",
          {
            y: 22,
            opacity: 0,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.55,
          },
        );
        gsap.from(".sculpture", {
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        });
        gsap.utils
          .toArray<HTMLElement>(
            ".section-heading h2, .services-intro h2, .team-center h2, .pricing-intro h2",
          )
          .forEach((title) => {
            const split = SplitText.create(title, {
              type: "words,chars",
              mask: "words",
              aria: "none",
            });
            splits.push(split);
            gsap.from(split.chars, {
              yPercent: 105,
              opacity: 0,
              rotate: 4,
              duration: 0.8,
              stagger: 0.018,
              ease: "power3.out",
              scrollTrigger: {
                trigger: title,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            });
          });
        gsap.utils
          .toArray<HTMLElement>(
            ".section-top, .project-caption, .concept-note, .services-list details, .team-center > p, .team-center > button, .pricing-panel",
          )
          .forEach((element) =>
            gsap.from(element, {
              y: 35,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 93%",
                toggleActions: "play none none none",
              },
            }),
          );
        gsap.utils.toArray<HTMLElement>(".project-visual").forEach((element) =>
          gsap.from(element, {
            y: 65,
            scale: 0.95,
            clipPath: "inset(12% 0 12% 0)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }),
        );
        gsap.utils.toArray<HTMLElement>(".craft-card").forEach((card, i) => {
          gsap.from(card, {
            y: 80,
            rotation: i % 2 ? 9 : -9,
            opacity: 0,
            duration: 1,
            delay: i * 0.055,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".team-section",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
          if (window.matchMedia("(min-width: 900px)").matches) {
            gsap.to(card, {
              y: Number(card.dataset.speed) * 45,
              ease: "none",
              scrollTrigger: {
                trigger: ".team-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.3,
              },
            });
          }
        });
        gsap.utils
          .toArray<SVGPathElement>(".craft-mark path")
          .forEach((path, i) => {
            gsap.to(path, {
              attr: { d: radialPath(i + 4, 22, Math.PI / 2) },
              duration: 4 + i,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              scrollTrigger: {
                trigger: ".team-section",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play pause resume pause",
              },
            });
          });
        gsap.to(".orbit-shape", {
          y: -18,
          rotation: -14,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".project-orbit",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause",
          },
        });
        gsap.to(".pulse-waves i", {
          scaleY: 0.55,
          duration: 1.8,
          stagger: { each: 0.09, repeat: -1, yoyo: true },
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".project-pulse",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause",
          },
        });
        gsap.utils.toArray<HTMLElement>(".timeline-phase").forEach((phase, i) =>
          gsap.from(phase, {
            x: -65,
            opacity: 0,
            duration: 0.9,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: phase,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }),
        );
        gsap.from(".contact-big", {
          y: 70,
          opacity: 0,
          rotate: -3,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
        gsap.to(".ticker > div", {
          xPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: ".ticker",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        const onDisclosure = () => ScrollTrigger.refresh();
        document
          .querySelectorAll("details")
          .forEach((detail) => detail.addEventListener("toggle", onDisclosure));
        cleanups.push(() =>
          document
            .querySelectorAll("details")
            .forEach((detail) =>
              detail.removeEventListener("toggle", onDisclosure),
            ),
        );
        return () => {
          cleanups.splice(0).forEach((clean) => clean());
          splits.forEach((split) => split.revert());
        };
      });
      ScrollTrigger.refresh();
    });
    return () => {
      disposed = true;
      media.revert();
    };
  }, []);
  return (
    <>
      {children}
      <div className="scroll-meter" aria-hidden="true">
        <i />
      </div>
    </>
  );
}
