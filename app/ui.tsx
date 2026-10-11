"use client";

import { ArrowIcon, CloseIcon } from "./icons";
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
  stage,
}: {
  children: ReactNode;
  className?: string;
  stage?: "Startup" | "Funded company";
}) {
  return (
    <button
      className={className}
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("nst-contact", { detail: { stage } }),
        )
      }
    >
      <span className="button-label">{children}</span>
      <ArrowIcon />
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
        <CloseIcon />
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
        Discuss a similar project <ArrowIcon />
      </button>
    </dialog>
  );
}
export function ContactDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);
  const [companyStage, setCompanyStage] = useState("Startup");
  const [budget, setBudget] = useState("Let’s discuss");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    project: "",
    service: "Website development",
  });
  useEffect(() => {
    const open = (event: Event) => {
      setCompanyStage(
        (event as CustomEvent<{ stage?: string }>).detail?.stage || "Startup",
      );
      setBudget("Let’s discuss");
      setFormValues({
        name: "",
        email: "",
        project: "",
        service: "Website development",
      });
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
    setFormValues({
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      project: String(data.get("project") || ""),
      service: String(data.get("service") || ""),
    });
    const result = `NST — Project brief\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\nBudget: ${data.get("budget")}\nCompany stage: ${data.get("stage")}\n\nProject:\n${data.get("project")}\n`;
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
        <CloseIcon />
      </button>
      <span className="eyebrow">START A PROJECT / FROM $2,000</span>
      <h2 id="contact-dialog-title">
        {brief ? "Your email draft is ready." : "Tell us about your project."}
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
              Open email draft <ArrowIcon />
            </a>
            <button className="pill-button" onClick={downloadBrief}>
              Download details <ArrowIcon direction="down" />
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
              {copied ? "Copied ✓" : "Copy details"}
            </button>
          </div>
          <button className="text-link" onClick={() => setBrief("")}>
            Edit enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={prepareBrief}>
          <p>
            A few details to help us understand your business and what you need.
          </p>
          <div className="form-row">
            <label>
              Your name
              <input
                autoFocus
                name="name"
                defaultValue={formValues.name}
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
                defaultValue={formValues.email}
                placeholder="alex@company.com"
                autoComplete="email"
                required
                maxLength={200}
              />
            </label>
          </div>
          <label>
            Company stage
            <select
              name="stage"
              value={companyStage}
              onChange={(event) => {
                setCompanyStage(event.target.value);
                setBudget("Let’s discuss");
              }}
            >
              <option>Startup</option>
              <option>Funded company</option>
            </select>
          </label>
          <div className="form-row">
            <label>
              What do you need?
              <select name="service" defaultValue={formValues.service}>
                <option>Website development</option>
                <option>Branding & identity</option>
                <option>UI / UX design</option>
                <option>Motion & video</option>
                <option>Copy & technical writing</option>
                <option>Multiple services / help defining the scope</option>
              </select>
            </label>
            <label>
              Budget range
              <select
                name="budget"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
              >
                <option>Let’s discuss</option>
                <option>$2,000–$5,000</option>
                <option>$5,000–$15,000</option>
                <option>$15,000–$30,000</option>
                <option>$30,000–$50,000</option>
                {companyStage === "Funded company" && <option>$50,000+</option>}
              </select>
            </label>
          </div>

          <label>
            What are you building?
            <textarea
              name="project"
              defaultValue={formValues.project}
              placeholder="What does your business do? What do you need help with, and when would you like to launch?"
              required
              rows={4}
              maxLength={5000}
            />
          </label>
          <button className="pill-button" type="submit">
            Prepare email draft <ArrowIcon />
          </button>
          <p className="form-footnote">
            You’ll review and send the draft from your email app. Preparing it
            does not send your enquiry.
          </p>
        </form>
      )}
    </dialog>
  );
}
