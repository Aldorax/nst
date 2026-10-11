"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, type ComponentProps, type ReactNode } from "react";
import { gsap } from "gsap";

export function TransitionLink(props: ComponentProps<typeof Link>) {
  const router = useRouter();
  return (
    <Link
      {...props}
      prefetch={props.prefetch ?? true}
      onNavigate={(event) => {
        props.onNavigate?.(event);
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const href = String(props.href);
        if (
          href.startsWith("#") ||
          new URL(href, location.origin).pathname === location.pathname ||
          !href.startsWith("/")
        )
          return;
        const curtain = document.querySelector(".page-curtain");
        if (!curtain) return;
        event.preventDefault();
        window.dispatchEvent(new Event("nst-navigating"));
        gsap.set(curtain, { transformOrigin: "bottom" });
        gsap.to(curtain, {
          scaleY: 1,
          duration: 0.3,
          ease: "power3.inOut",
          onComplete: () => router.push(href),
        });
      }}
    />
  );
}
export function PageTransition() {
  const path = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const safety = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const begin = () => {
      if (safety.current) clearTimeout(safety.current);
      safety.current = setTimeout(
        () => gsap.set(curtain.current, { scaleY: 0 }),
        3500,
      );
    };
    window.addEventListener("nst-navigating", begin);
    return () => {
      window.removeEventListener("nst-navigating", begin);
      if (safety.current) clearTimeout(safety.current);
    };
  }, []);
  useEffect(() => {
    if (safety.current) clearTimeout(safety.current);
    const tween = gsap.to(curtain.current, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.55,
      ease: "power3.inOut",
    });
    return () => {
      tween.kill();
    };
  }, [path]);
  return (
    <div ref={curtain} className="page-curtain" aria-hidden="true">
      <span>non standard team.</span>
    </div>
  );
}
export function PageEntrance({ children }: { children: ReactNode }) {
  const path = usePathname();
  const node = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        node.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1 },
      );
    }, node);
    return () => {
      context.revert();
    };
  }, [path]);
  return (
    <div ref={node} className="page-content">
      {children}
    </div>
  );
}
