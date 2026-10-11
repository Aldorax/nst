"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { radialPath } from "./forms";

export function AsciiForm({ paused = false }: { paused?: boolean }) {
  const output = useRef<HTMLPreElement>(null);
  useEffect(() => {
    const node = output.current;
    if (!node) return;
    let frame = 0,
      last = 0,
      angle = 0,
      visible = true;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const draw = () => {
      const width = 70,
        height = 32,
        chars = Array(width * height).fill(" "),
        depth = Array(width * height).fill(-99);
      for (let a = 0; a < Math.PI * 2; a += 0.08)
        for (let b = 0; b < Math.PI * 2; b += 0.09) {
          const radius = 1.1 + 0.4 * Math.cos(b),
            x = radius * Math.cos(a),
            y = radius * Math.sin(a),
            z = 0.4 * Math.sin(b);
          const tilt = angle * 0.45 + 0.6,
            yy = y * Math.cos(tilt) - z * Math.sin(tilt),
            zz = y * Math.sin(tilt) + z * Math.cos(tilt);
          const xx = x * Math.cos(angle) - zz * Math.sin(angle),
            z2 = x * Math.sin(angle) + zz * Math.cos(angle);
          const col = Math.round(width / 2 + xx * 19),
            row = Math.round(height / 2 + yy * 9);
          if (col < 0 || col >= width || row < 0 || row >= height) continue;
          const index = row * width + col;
          if (z2 > depth[index]) {
            depth[index] = z2;
            const light =
              (Math.cos(a + angle) * Math.cos(b) + Math.sin(b + tilt) + 2) / 4;
            chars[index] = " .,:;=+*#%@"[
              Math.min(10, Math.max(0, Math.floor(light * 10)))
            ];
          }
        }
      node.textContent = Array.from({ length: height }, (_, i) =>
        chars.slice(i * width, (i + 1) * width).join(""),
      ).join("\n");
    };
    const tick = (now: number) => {
      frame = 0;
      if (!visible || document.hidden) return;
      if (now - last > 65) {
        last = now;
        angle += 0.025;
        draw();
      }
      if (!paused && !reduced.matches) frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!frame && visible && !document.hidden && !paused && !reduced.matches)
        frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(node);
    document.addEventListener("visibilitychange", start);
    draw();
    start();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", start);
    };
  }, [paused]);
  return <pre ref={output} className="ascii-form" aria-hidden="true" />;
}

export function StudioIntro() {
  const [visible, setVisible] = useState(false);
  const screen = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const replay = () => {
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches)
        setVisible(true);
    };
    window.addEventListener("nst-intro", replay);
    return () => window.removeEventListener("nst-intro", replay);
  }, []);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("nst-intro-seen")) return;
      sessionStorage.setItem("nst-intro-seen", "1");
    } catch {}
    const timer = window.setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!visible || !screen.current) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ onComplete: () => setVisible(false) })
        .to(".intro-ascii", { opacity: 0, duration: 0.35 }, 0.65)
        .fromTo(
          ".intro-morph",
          { opacity: 0, scale: 0.75 },
          { opacity: 1, scale: 1, duration: 0.45 },
          0.65,
        )
        .to(
          ".intro-morph path",
          { attr: { d: radialPath(5, 25) }, duration: 0.65 },
          0.9,
        )
        .to(".intro-morph", { opacity: 0, duration: 0.3 }, 1.55)
        .to(".intro-ascii", { opacity: 1, duration: 0.3 }, 1.55)
        .to(screen.current, { opacity: 0, duration: 0.5 }, 2.15);
    }, screen);
    const timeout = setTimeout(() => setVisible(false), 3200);
    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, [visible]);
  if (!visible) return null;
  return (
    <div
      className="studio-intro"
      ref={screen}
      role="dialog"
      aria-label="NST opening animation"
      aria-modal="false"
    >
      <div className="intro-heading">
        <span>NON STANDARD TEAM</span>
        <button onClick={() => setVisible(false)}>Skip intro ↗</button>
      </div>
      <div className="intro-art">
        <div className="intro-ascii">
          <AsciiForm />
        </div>
        <svg className="intro-morph" viewBox="0 0 200 200" aria-hidden="true">
          <path d={radialPath(3, 12)} fill="white" />
        </svg>
      </div>
      <div className="intro-footer">
        <strong>nst</strong>
        <span>CODE → FORM → POSSIBILITY</span>
      </div>
    </div>
  );
}

export function ReplayIntro() {
  return (
    <button
      className="replay-intro"
      onClick={() => window.dispatchEvent(new Event("nst-intro"))}
    >
      Replay intro ↗
    </button>
  );
}
