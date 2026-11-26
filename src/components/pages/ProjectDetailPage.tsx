import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DetailScene } from "@/components/visuals/DetailScene";
import type { Project } from "@/types";

export function ProjectDetailPage({ project, nextProject }: { project: Project; nextProject: Project }) {
  return (
    <div className={`site-shell detail-site project-detail-${project.tone}`}>
      <Navbar />
      <main>
        <section className="detail-hero project-detail-hero" aria-labelledby="detail-title">
          <div className="container">
            <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link href="/work"><ArrowLeft aria-hidden="true" size={14} /> Selected work</Link><span>/</span><span>{project.name}</span></nav>
            <div className="detail-hero-grid">
              <div className="detail-intro">
                <span className="detail-eyebrow">Concept study / {project.number} / 2026</span>
                <h1 id="detail-title">{project.name}<span className="detail-title-dot">.</span></h1>
                <h2 className="project-detail-tagline">{project.tagline}</h2>
                <p>{project.description}</p>
                <Link className="button-primary" href="/#contact">Create your next chapter <ArrowUpRight aria-hidden="true" size={16} /></Link>
              </div>
              <DetailScene variant={project.tone} label={`Animated 3D ${project.name} concept visual`} />
            </div>
            <div className="detail-meta-row"><span>{project.category.toUpperCase()}</span><span>ILLUSTRATIVE PROJECT / NOVA®</span></div>
          </div>
        </section>

        <section className="project-case-study" aria-labelledby="project-challenge">
          <div className="container">
            <div className="case-study-image">
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 900px) 100vw, 88vw" />
            </div>
            <div className="detail-story-grid case-study-story">
              <div><span className="eyebrow">The starting point</span><h2 id="project-challenge">A clear idea.<br /><em>A distinct feeling.</em></h2></div>
              <p className="detail-story-copy">{project.challenge}</p>
            </div>
            <div className="project-direction-grid"><span className="detail-column-label">THE DIRECTION</span><p>{project.direction}</p></div>
            <div className="detail-columns project-highlights">
              <div className="detail-column"><span className="detail-column-label">01 / EXPERIENCE HIGHLIGHTS</span><h3>Details that make it memorable.</h3><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="detail-column"><span className="detail-column-label">02 / DISCIPLINES</span><h3>One coherent world, built in layers.</h3><ul>{project.disciplines.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
            <p className="concept-note">NOVA® concept study. This project is an illustrative design exploration, not a commissioned client project.</p>
          </div>
        </section>

        <section className="next-project" aria-label="Next project">
          <div className="container"><span className="eyebrow">Next in the collection</span><Link className="next-project-link" href={`/work/${nextProject.slug}`}><span><small>{nextProject.category}</small><strong>{nextProject.name}</strong></span><ArrowUpRight aria-hidden="true" size={28} /></Link><Link className="text-link" href="/work">Back to all work <ArrowLeft aria-hidden="true" size={14} /></Link></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
