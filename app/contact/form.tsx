"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { services } from "../content";
import { ArrowIcon } from "../icons";
import { AsciiForm } from "../intro";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const titles = [
  "First, a little about you.",
  "What can we help you make?",
  "Let’s find the right scope.",
  "Tell us about the ambition.",
  "Your brief, at a glance.",
];
export function EnquiryFlow() {
  const requested = useSearchParams().get("stage");
  return (
    <EnquiryForm
      key={requested || "Startup"}
      initialStage={requested === "Funded company" ? requested : "Startup"}
    />
  );
}
function EnquiryForm({ initialStage }: { initialStage: string }) {
  const [step, setStep] = useState(0),
    [ready, setReady] = useState(false),
    [error, setError] = useState("");
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [selected, setSelected] = useState<string[]>([]),
    [stage, setStage] = useState(initialStage),
    [budget, setBudget] = useState("Let’s discuss"),
    [project, setProject] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const previousView = useRef("0:false");
  useEffect(() => {
    const currentView = `${step}:${ready}`;
    if (previousView.current === currentView) return;
    previousView.current = currentView;
    heading.current?.focus({ preventScroll: true });
    const bounds = heading.current?.getBoundingClientRect();
    if (bounds && (bounds.top < 115 || bounds.top > window.innerHeight * 0.5))
      heading.current?.scrollIntoView({
        block: "start",
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
  }, [step, ready]);
  const brief = `NST — Project enquiry\n\nName: ${name}\nEmail: ${email}\nServices: ${selected.join(", ")}\nCompany stage: ${stage}\nBudget: ${budget}\n\nProject:\n${project}\n`;
  const draft = `mailto:legadax@outlook.com?subject=${encodeURIComponent("New project enquiry — NST")}&body=${encodeURIComponent(brief)}`;
  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1 && !selected.length) {
      setError(
        "Choose at least one service, or select help defining the scope.",
      );
      return;
    }
    setError("");
    if (step < 4) setStep(step + 1);
    else setReady(true);
  }
  function download() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "NST-project-enquiry.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <section className="contact-layout wrap">
      <aside className={`contact-board ${ready ? "is-ready" : ""}`}>
        <div className="contact-screen">
          <span className="small-code">NST / YOUR NEXT CHAPTER</span>
          {ready ? (
            <div className="contact-complete">
              <Image src="/icon.svg" alt="NST" width={85} height={85} />
              <strong>
                Ready when
                <br />
                you are.
              </strong>
              <span>Your brief is ready to send.</span>
            </div>
          ) : (
            <>
              <AsciiForm />
              <strong>
                Ideas become
                <br />
                real here.
              </strong>
            </>
          )}
          <span className="screen-baseline">
            DESIGN / CODE / MOTION / WORDS
          </span>
        </div>
        <p>
          One team across five disciplines.
          <br />
          Direct collaboration from the first conversation.
        </p>
      </aside>
      <div className="enquiry-card">
        {ready ? (
          <div className="enquiry-ready" aria-live="polite">
            <span className="eyebrow">YOUR EMAIL DRAFT IS READY</span>
            <h2 ref={heading} tabIndex={-1}>
              A good start,
              <br />
              {name.split(" ")[0]}.
            </h2>
            <p>
              Review and send this brief to <strong>legadax@outlook.com</strong>{" "}
              from your email app. You can also download it and send it
              manually.
            </p>
            <div className="ready-summary">
              <span>{selected.join(" / ")}</span>
              <span>
                {stage} · {budget}
              </span>
            </div>
            <a className="pill-button" href={draft}>
              Open email draft <ArrowIcon />
            </a>
            <button className="text-link" onClick={download}>
              Download your brief ↓
            </button>
            <button className="text-link" onClick={() => setReady(false)}>
              Edit your brief ←
            </button>
            <p className="form-footnote">
              Preparing this draft does not send an enquiry.
            </p>
          </div>
        ) : (
          <form onSubmit={next}>
            <div
              className="enquiry-progress"
              aria-label={`Step ${step + 1} of 5`}
            >
              {titles.map((title, i) => (
                <span key={title} className={i <= step ? "complete" : ""} />
              ))}
            </div>
            <span className="eyebrow">START A CONVERSATION / 0{step + 1}</span>
            <h2 ref={heading} tabIndex={-1}>
              {titles[step]}
            </h2>
            <div className="enquiry-fields" key={step}>
              {step === 0 && (
                <>
                  <label>
                    Your name
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Alex Morgan"
                      autoComplete="name"
                      required
                      maxLength={100}
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="alex@company.com"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={200}
                    />
                  </label>
                </>
              )}
              {step === 1 && (
                <fieldset>
                  <legend>Choose one or more disciplines.</legend>
                  {[
                    ...services.map((item) => item.name),
                    "Help defining the scope",
                  ].map((service) => (
                    <label className="service-choice" key={service}>
                      <input
                        type="checkbox"
                        checked={selected.includes(service)}
                        onChange={(event) =>
                          setSelected(
                            event.target.checked
                              ? [...selected, service]
                              : selected.filter((item) => item !== service),
                          )
                        }
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </fieldset>
              )}
              {step === 2 && (
                <>
                  <label>
                    Company stage
                    <select
                      value={stage}
                      onChange={(event) => {
                        setStage(event.target.value);
                        setBudget("Let’s discuss");
                      }}
                    >
                      <option>Startup</option>
                      <option>Funded company</option>
                    </select>
                  </label>
                  <label>
                    Budget range
                    <select
                      value={budget}
                      onChange={(event) => setBudget(event.target.value)}
                    >
                      <option>Let’s discuss</option>
                      <option>$2,000–$5,000</option>
                      <option>$5,000–$15,000</option>
                      <option>$15,000–$30,000</option>
                      <option>$30,000–$50,000</option>
                      {stage === "Funded company" && <option>$50,000+</option>}
                    </select>
                  </label>
                  <p className="enquiry-hint">
                    Every service starts at $2,000. Startup engagements are
                    capped at $50,000. Funded companies have no fixed upper
                    limit.
                  </p>
                </>
              )}
              {step === 3 && (
                <label>
                  What are you building?
                  <textarea
                    value={project}
                    onChange={(event) => setProject(event.target.value)}
                    placeholder="Your business, the challenge, what you need, and any timing we should know about."
                    rows={7}
                    required
                    maxLength={5000}
                  />
                </label>
              )}
              {step === 4 && (
                <dl className="enquiry-review">
                  <dt>You</dt>
                  <dd>
                    {name}
                    <br />
                    {email}
                  </dd>
                  <dt>The scope</dt>
                  <dd>{selected.join(", ")}</dd>
                  <dt>The investment</dt>
                  <dd>
                    {stage} / {budget}
                  </dd>
                  <dt>The ambition</dt>
                  <dd className="review-project">{project}</dd>
                </dl>
              )}
            </div>
            {error && (
              <p role="alert" className="form-error">
                {error}
              </p>
            )}
            <div className="enquiry-actions">
              <span className="step-position">
                {step + 1}
                <i>/5</i>
              </span>
              {step > 0 && (
                <button
                  type="button"
                  className="text-link"
                  onClick={() => {
                    setError("");
                    setStep(step - 1);
                  }}
                >
                  Back
                </button>
              )}
              <button className="pill-button" type="submit">
                {step === 4 ? "Prepare email draft" : "Continue"}
                <ArrowIcon />
              </button>
            </div>
            {step === 4 && (
              <p className="form-footnote">
                You’ll review and send the draft from your email app.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
