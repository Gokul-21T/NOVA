import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link className="brand footer-brand" href="/#home"><span className="brand-mark" aria-hidden="true">N</span>NOVA®</Link>
          <p className="footer-note">Independent by nature. Intentional by design. Building what’s next, together.</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/#services">Services</Link><Link href="/#work">Work</Link><Link href="/#contact">Contact <ArrowUpRight aria-hidden="true" size={12} /></Link>
          </nav>
        </div>
        <div className="footer-bottom"><span>© 2026 NOVA® Studio</span><span>Made for what’s next</span></div>
      </div>
    </footer>
  );
}
