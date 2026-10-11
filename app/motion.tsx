"use client";

import { useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
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
        gsap.to(".knot", {
          rotation: 10,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
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
        gsap.from(".hero-art", {
          scale: 0.75,
          opacity: 0,
          rotate: -18,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.15,
        });
        gsap.to(".hero-art", {
          y: 90,
          rotation: 16,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.utils
          .toArray<HTMLElement>(
            ".section-heading h2, .services-intro h2, .team-center h2, .pricing-intro h2, .build-story h2",
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
            ".section-top, .project-caption, .concept-note, .services-list details, .pricing-services > div, .team-center > p, .team-center > button, .pricing-panel",
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
        gsap.to(".service-asterisk", {
          rotation: 240,
          ease: "none",
          scrollTrigger: {
            trigger: ".services-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
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
          gsap.to(card, {
            y: Number(card.dataset.speed) * 65,
            ease: "none",
            scrollTrigger: {
              trigger: ".team-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.3,
            },
          });
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
        const onPointer = (event: PointerEvent) => {
          if (event.pointerType !== "mouse") return;
          const art = document.querySelector<HTMLElement>(".knot");
          if (art) {
            gsap.to(art, {
              x: (event.clientX / innerWidth - 0.5) * 25,
              y: (event.clientY / innerHeight - 0.5) * 18,
              duration: 1.2,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };
        window.addEventListener("pointermove", onPointer, { passive: true });
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
          window.removeEventListener("pointermove", onPointer);
          cleanups.splice(0).forEach((clean) => clean());
          splits.forEach((split) => split.revert());
        };
      });
      media.add(
        {
          desktop: "(min-width: 900px)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          if (!context.conditions?.desktop || !context.conditions?.motion)
            return;
          const chapter = gsap.utils.toArray<HTMLElement>(".build-chapter");
          gsap.set(chapter.slice(1), { opacity: 0.45 });
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".build-section",
              start: "top top",
              end: "+=900",
              pin: ".build-pin",
              scrub: 1,
              anticipatePin: 1,
              onUpdate: (self) => {
                const percentage = document.querySelector(".build-percentage");
                if (percentage)
                  percentage.textContent = String(
                    Math.round(self.progress * 100),
                  ).padStart(3, "0");
              },
            },
          });
          timeline
            .from(
              ".blueprint-frame",
              { scaleX: 0, transformOrigin: "left", duration: 1, ease: "none" },
              0,
            )
            .from(".blueprint-guides", { opacity: 0, duration: 0.6 }, 0.3)
            .from(
              ".blueprint-block",
              {
                scaleY: 0,
                opacity: 0,
                transformOrigin: "top",
                stagger: 0.12,
                duration: 0.6,
              },
              0.7,
            )
            .to(chapter[0], { opacity: 0.45, duration: 0.3 }, 1.25)
            .to(chapter[1], { opacity: 1, duration: 0.3 }, 1.25)
            .from(
              ".blueprint-design",
              { opacity: 0, scale: 0.95, duration: 1 },
              1.6,
            )
            .to(
              ".blueprint-block, .blueprint-guides",
              { opacity: 0, duration: 0.5 },
              1.6,
            )
            .from(
              ".blueprint-flower",
              { rotation: -150, scale: 0.3, duration: 1.5, ease: "power2.out" },
              2,
            )
            .to(chapter[1], { opacity: 0.45, duration: 0.3 }, 2.5)
            .to(chapter[2], { opacity: 1, duration: 0.3 }, 2.5)
            .from(
              ".blueprint-button",
              { y: 25, opacity: 0, duration: 0.5 },
              2.6,
            )
            .to(
              ".build-progress-track i",
              { scaleX: 1, duration: 3.4, ease: "none" },
              0,
            );
          return () => {};
        },
      );
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
