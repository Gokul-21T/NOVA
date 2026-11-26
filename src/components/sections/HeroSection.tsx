import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-kicker"><span className="status-dot" /> Independent digital studio</div>
          <h1 id="hero-title">Make brands <span>impossible</span> to ignore.</h1>
          <div className="hero-bottom">
            <p className="hero-copy">Strategy, identity, and digital experiences.</p>
            <div className="hero-actions">
              <Button href="#work">Explore our work</Button>
              <Button href="#contact" variant="secondary">Let’s talk</Button>
            </div>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring" /><div className="orbit-ring" /><div className="orbit-core" /><div className="orbit-spark" />
        </div>
        <div className="hero-footer"><span>Design with intent</span><span>Scroll to explore <ArrowDownRight size={14} /></span></div>
      </div>
    </section>
  );
}
