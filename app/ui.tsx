"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type FormEvent,
} from "react";

const projectDetails = {
  orbit: {
    title: "Orbit",
    category: "BRANDING / WEB DESIGN",
    text: "A self-initiated concept for a friendlier financial future. Orbit explores how confident typography, a soft violet palette, and playful forms can make everyday finance feel approachable.",
    deliverables:
      "Visual identity · Landing page direction · Interface exploration",
    idea: "Make a complex product feel simple, human, and full of possibility.",
  },
  form: {
    title: "Form & Field",
    category: "STRATEGY / E-COMMERCE",
    text: "A self-initiated digital concept for a considered furniture brand. Warm tones, editorial typography, and sculptural product presentation put craftsmanship at the centre of the experience.",
    deliverables: "Art direction · E-commerce concept · Brand storytelling",
    idea: "Give beautifully made objects a digital experience with the same attention to detail.",
  },
  pulse: {
    title: "Pulse",
    category: "IDENTITY / MOTION",
    text: "A self-initiated identity concept at the intersection of sound and culture. Electric colour, rhythmic forms, and expressive typography create a visual language that feels alive.",
    deliverables: "Visual identity · Motion direction · Campaign concept",
    idea: "Translate the energy of sound into a brand you can feel.",
  },
};
type Project = keyof typeof projectDetails;

export function ContactButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={className}
      onClick={() => window.dispatchEvent(new Event("nst-contact"))}
    >
      {children}
    </button>
  );
}
export function ProjectButton({
  children,
  className,
  project,
}: {
  children: ReactNode;
  className?: string;
  project: Project;
}) {
  return (
    <button
      className={className}
      aria-label={`Explore ${projectDetails[project].title} concept`}
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("nst-project", { detail: project }),
        )
      }
    >
      {children}
    </button>
  );
}
export function ProjectDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [project, setProject] = useState<Project>("orbit");
  useEffect(() => {
    const open = (event: Event) => {
      setProject((event as CustomEvent<Project>).detail);
      dialog.current?.showModal();
    };
    window.addEventListener("nst-project", open);
    return () => window.removeEventListener("nst-project", open);
  }, []);
  const item = projectDetails[project];
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}
    >
      <button
        autoFocus
        className="dialog-close"
        onClick={() => dialog.current?.close()}
        aria-label="Close project"
      >
        ×
      </button>
      <span className="eyebrow">SELF-INITIATED CONCEPT / {item.category}</span>
      <h2 id="project-dialog-title">
        {item.title}
        <span className="lime">.</span>
      </h2>
      <p>{item.text}</p>
      <h3>The idea</h3>
      <p>{item.idea}</p>
      <h3>The exploration</h3>
      <p>{item.deliverables}</p>
      <button
        className="pill-button"
        onClick={() => {
          dialog.current?.close();
          window.dispatchEvent(new Event("nst-contact"));
        }}
      >
        Build something like this <span>↗</span>
      </button>
    </dialog>
  );
}
export function ContactDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const open = () => {
      setBrief("");
      setCopied(false);
      dialog.current?.showModal();
    };
    window.addEventListener("nst-contact", open);
    return () => window.removeEventListener("nst-contact", open);
  }, []);
  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = `NST — Project brief\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\nBudget: ${data.get("budget")}\n\nProject:\n${data.get("project")}\n`;
    setBrief(result);
  }
  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "NST-project-brief.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  }
  return (
    <dialog
      ref={dialog}
      className="contact-dialog"
      aria-labelledby="contact-dialog-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}
    >
      <button
        className="dialog-close"
        onClick={() => dialog.current?.close()}
        aria-label="Close enquiry"
      >
        ×
      </button>
      <span className="eyebrow">THE FIRST STEP TO SOMETHING DIFFERENT</span>
      <h2 id="contact-dialog-title">
        {brief ? "Great things start here." : "What’s on your mind?"}
        <span className="lime">↗</span>
      </h2>
      {brief ? (
        <div aria-live="polite">
          <p>
            Your enquiry is ready. Open your email app to review and send it to
            legadax@outlook.com, or download a copy.
          </p>
          <pre className="brief-preview">{brief}</pre>
          <div className="brief-actions">
            <a
              className="pill-button"
              href={`mailto:legadax@outlook.com?subject=${encodeURIComponent("New project enquiry — NST")}&body=${encodeURIComponent(brief)}`}
            >
              Open email draft <span>↗</span>
            </a>
            <button className="pill-button" onClick={downloadBrief}>
              Download brief <span>↓</span>
            </button>
            <button
              className="text-link"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(brief);
                  setCopied(true);
                } catch {
                  downloadBrief();
                }
              }}
            >
              {copied ? "Copied ✓" : "Copy brief ↗"}
            </button>
          </div>
          <button className="text-link" onClick={() => setBrief("")}>
            Start another brief
          </button>
        </div>
      ) : (
        <form onSubmit={prepareBrief}>
          <p>A few details to get the conversation started.</p>
          <div className="form-row">
            <label>
              Your name
              <input
                autoFocus
                name="name"
                placeholder="Alex Taylor"
                autoComplete="name"
                required
                maxLength={100}
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="alex@company.com"
                autoComplete="email"
                required
                maxLength={200}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              What do you need?
              <select name="service">
                <option>Website development</option>
                <option>Branding & identity</option>
                <option>UI / UX design</option>
                <option>Motion & video</option>
                <option>Copy & technical writing</option>
                <option>A bit of everything</option>
              </select>
            </label>
            <label>
              Budget range
              <select name="budget">
                <option>Let’s discuss</option>
                <option>Under $5,000</option>
                <option>$5,000–$15,000</option>
                <option>$15,000–$30,000</option>
                <option>$30,000+</option>
              </select>
            </label>
          </div>
          <label>
            Tell us about your idea
            <textarea
              name="project"
              placeholder="What are you making, and what would you like to do differently?"
              required
              rows={4}
              maxLength={5000}
            />
          </label>
          <button className="pill-button" type="submit">
            Create enquiry <span>↗</span>
          </button>
          <p className="form-footnote">
            We’ll prepare an email draft for you to review and send.
          </p>
        </form>
      )}
    </dialog>
  );
}
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "☰"}
      </button>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation">
          {["Work", "Services", "Studio"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item} ↗
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new Event("nst-contact"));
            }}
          >
            Let’s talk ↗
          </button>
        </nav>
      )}
    </div>
  );
}
