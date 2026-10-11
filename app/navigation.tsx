"use client";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./brand";
import { CloseIcon } from "./icons";
import { ContactButton } from "./ui";

const links = [
  { label: "Work", target: "work" },
  { label: "Services", target: "services" },
  { label: "Studio", target: "studio" },
  { label: "Pricing", target: "pricing" },
];
export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const sync = () =>
      setTheme(document.documentElement.dataset.theme || "dark");
    sync();
    window.addEventListener("nst-theme", sync);
    return () => window.removeEventListener("nst-theme", sync);
  }, []);
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("nst-theme", next);
    } catch {}
    window.dispatchEvent(new Event("nst-theme"));
  }
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {theme === "dark" ? (
          <>
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
function MobileMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("main");
  useEffect(() => {
    const sync = () => setActive(window.location.hash.slice(1) || "main");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const menuLinks = [
    { label: "Home", target: "main" },
    { label: "Work", target: "work" },
    { label: "Services", target: "services" },
    { label: "Studio", target: "studio" },
    { label: "Pricing", target: "pricing" },
  ];
  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        aria-label="Open navigation menu"
        aria-haspopup="dialog"
        aria-controls="navigation-dialog"
        aria-expanded={open}
        onClick={() => {
          setOpen(true);
          dialog.current?.showModal();
        }}
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 8h18M3 16h18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <dialog
        ref={dialog}
        id="navigation-dialog"
        className="navigation-dialog"
        aria-label="Site navigation"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="menu-heading">
          <a
            className="wordmark"
            href="#"
            aria-label="NST home"
            onClick={() => dialog.current?.close()}
          >
            <BrandLogo />
          </a>
          <div>
            <button
              autoFocus
              className="menu-close"
              aria-label="Close navigation menu"
              onClick={() => dialog.current?.close()}
            >
              <CloseIcon />
              <span>Close</span>
            </button>
          </div>
        </div>
        <nav aria-label="Mobile navigation">
          {menuLinks.map((link, i) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              aria-current={active === link.target ? "location" : undefined}
              onClick={() => dialog.current?.close()}
            >
              <span className="menu-link-label">{link.label}</span>
              <span className="menu-number">0{i + 1}</span>
            </a>
          ))}
          <button
            className="menu-contact"
            onClick={() => {
              dialog.current?.close();
              window.dispatchEvent(new Event("nst-contact"));
            }}
          >
            <span className="menu-link-label">Contact</span>
            <span className="menu-number">06</span>
          </button>
        </nav>
        <div className="menu-footer">
          <a href="mailto:legadax@outlook.com">legadax@outlook.com</a>
          <p>NON STANDARD TEAM / WORLDWIDE</p>
        </div>
      </dialog>
    </div>
  );
}
export function SiteHeader() {
  return (
    <header className="header-shell">
      <div className="site-header wrap">
        <a className="wordmark" href="#" aria-label="NST home">
          <BrandLogo />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.target} href={`#${link.target}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <ContactButton className="header-contact">Let’s talk</ContactButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
