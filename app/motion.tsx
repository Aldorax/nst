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
    const scenes = document.querySelectorAll<HTMLElement>("main > section");
    let sceneFrame = 0;
    const updateScene = () => {
      sceneFrame = 0;
      const current = Array.from(scenes).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 130 && rect.bottom > 130;
      });
      if (current)
        document.documentElement.dataset.chapter = current.id || "hero";
    };
    const queueScene = () => {
      if (!sceneFrame) sceneFrame = requestAnimationFrame(updateScene);
    };
    window.addEventListener("scroll", queueScene, { passive: true });
    window.addEventListener("resize", queueScene);
    updateScene();
    document.fonts.ready.then(() => {
      if (disposed) return;
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const chapters = [
          "services",
          "work",
          "studio",
          "process",
          "pricing",
          "contact",
        ];
        let previous = {
          bg: "#090909",
          ink: "#f5f5f2",
          muted: "#aaaaaa",
          line: "#444444",
        };
        chapters.forEach((id) => {
          const light = ["work", "studio", "pricing"].includes(id);
          const palette = light
            ? {
                bg: "#f5f5f2",
                ink: "#111111",
                muted: "#606060",
                line: "#cccccc",
              }
            : {
                bg: "#090909",
                ink: "#f5f5f2",
                muted: "#aaaaaa",
                line: "#444444",
              };
          gsap.fromTo(
            `#${id}`,
            {
              backgroundColor: previous.bg,
              "--foreground": previous.ink,
              "--muted": previous.muted,
              "--accent-text": previous.ink,
              "--scene-ink": previous.ink,
              "--scene-muted": previous.muted,
              "--scene-accent": previous.ink,
              "--line": previous.line,
            },
            {
              backgroundColor: palette.bg,
              "--foreground": palette.ink,
              "--muted": palette.muted,
              "--accent-text": palette.ink,
              "--scene-ink": palette.ink,
              "--scene-muted": palette.muted,
              "--scene-accent": palette.ink,
              "--line": palette.line,
              ease: "none",
              scrollTrigger: {
                trigger: `#${id}`,
                start: "top 90%",
                end: "top 15%",
                scrub: 0.6,
              },
            },
          );
          previous = palette;
        });
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
          ".hero-topline, .hero-copy > p, .hero-copy > a, .hero-bottom",
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
        // Each scene responds to scroll in its own way, without pinning the page.
        gsap.utils
          .toArray<HTMLElement>(".project-visual")
          .forEach((visual, i) => {
            gsap.fromTo(
              visual,
              { borderRadius: "70px", rotation: i === 1 ? -3 : 2 },
              {
                borderRadius: "12px",
                rotation: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: visual,
                  start: "top 95%",
                  end: "top 35%",
                  scrub: 1,
                },
              },
            );
          });
        gsap.fromTo(
          ".field-backdrop, .sound-backdrop",
          { scale: 1.18, yPercent: -4 },
          {
            scale: 1,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: ".field-scene",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
        gsap.to(".discipline-object", {
          rotation: 35,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: "#services",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".process-orbits", {
          rotation: 120,
          ease: "none",
          scrollTrigger: {
            trigger: "#process",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 65%",
            end: "bottom 35%",
            onToggle: ({ isActive }) => {
              step.classList.toggle("is-current", isActive);
              if (isActive) {
                const counter = document.querySelector(".process-counter");
                if (counter) counter.textContent = `0${i + 1}—05`;
              }
            },
          });
        });
        gsap.utils.toArray<HTMLElement>(".craft-card").forEach((card, i) => {
          gsap.fromTo(
            card,
            { rotation: (i % 2 ? 1 : -1) * 8, y: i % 2 ? 25 : -25 },
            {
              rotation: (i % 2 ? -1 : 1) * 3,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: ".team-gallery",
                start: "top bottom",
                end: "bottom center",
                scrub: 1,
              },
            },
          );
        });
        gsap.utils
          .toArray<HTMLElement>(".project-visual, .craft-card")
          .forEach((card) => {
            const move = (event: PointerEvent) => {
              if (event.pointerType !== "mouse") return;
              const rect = card.getBoundingClientRect();
              gsap.to(card, {
                rotationY: ((event.clientX - rect.left) / rect.width - 0.5) * 6,
                rotationX:
                  -((event.clientY - rect.top) / rect.height - 0.5) * 6,
                transformPerspective: 1200,
                duration: 0.6,
                overwrite: "auto",
              });
            };
            const leave = () => {
              gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.6 });
            };
            card.addEventListener("pointermove", move);
            card.addEventListener("pointerleave", leave);
            cleanups.push(() => {
              card.removeEventListener("pointermove", move);
              card.removeEventListener("pointerleave", leave);
            });
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
        gsap.to(".orbit-credit", {
          y: -18,
          rotation: -14,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".orbit-scene",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause",
          },
        });
        gsap.to(".sound-bars i", {
          scaleY: 0.55,
          duration: 1.8,
          stagger: { each: 0.09, repeat: -1, yoyo: true },
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ".sound-scene",
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play pause resume pause",
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
        window.addEventListener("nst-gallery-change", onDisclosure);
        cleanups.push(() =>
          window.removeEventListener("nst-gallery-change", onDisclosure),
        );
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
      window.removeEventListener("scroll", queueScene);
      window.removeEventListener("resize", queueScene);
      cancelAnimationFrame(sceneFrame);
      delete document.documentElement.dataset.chapter;
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
