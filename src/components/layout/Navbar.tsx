"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", section: "home" },
  { label: "Services", section: "services" },
  { label: "Work", section: "work" },
  { label: "Contact", section: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sectionHref = (section: string) => pathname === "/" ? `#${section}` : `/#${section}`;

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="brand" href={sectionHref("home")} aria-label="NOVA home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">N</span>NOVA<span aria-hidden="true">®</span>
        </a>
        <nav className="nav-links" id="main-navigation" aria-label="Main navigation" data-open={isOpen}>
          {links.map((link) => <a key={link.section} href={sectionHref(link.section)} onClick={() => setIsOpen(false)}>{link.label}</a>)}
        </nav>
        <a className="nav-cta" href={sectionHref("contact")}>Start a project <ArrowUpRight aria-hidden="true" size={14} /></a>
        <button className="mobile-toggle" type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="main-navigation" onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
