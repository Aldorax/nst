import { type ReactNode } from "react";
import { ArrowIcon } from "./icons";
import { TransitionLink } from "./transitions";
import { projects, type ProjectSlug } from "./content";

export function ContactButton({
  children,
  className,
  stage,
}: {
  children: ReactNode;
  className?: string;
  stage?: "Startup" | "Funded company";
}) {
  return (
    <TransitionLink
      className={className}
      href={stage ? `/contact?stage=${encodeURIComponent(stage)}` : "/contact"}
    >
      <span className="button-label">{children}</span>
      <ArrowIcon />
    </TransitionLink>
  );
}
export function ProjectButton({
  children,
  className,
  project,
}: {
  children: ReactNode;
  className?: string;
  project: ProjectSlug;
}) {
  return (
    <TransitionLink
      className={className}
      href={`/work/${project}`}
      aria-label={`Explore ${projects.find((item) => item.slug === project)?.title} project`}
    >
      {children}
    </TransitionLink>
  );
}
