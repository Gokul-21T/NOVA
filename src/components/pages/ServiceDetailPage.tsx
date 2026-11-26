import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DetailScene } from "@/components/visuals/DetailScene";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import type { Service } from "@/types";

export function ServiceDetailPage({ service }: { service: Service }) {
  const relatedProjects = projects.slice(0, 2);

  return (
    <div className="site-shell detail-site">
      <Navbar />
      <main>
        <section className="detail-hero" aria-labelledby="detail-title">
          <div className="container">
            <nav className="detail-breadcrumb" aria-label="Breadcrumb"><Link href="/#services"><ArrowLeft aria-hidden="true" size={14} /> Services</Link><span>/</span><span>{service.title}</span></nav>
            <div className="detail-hero-grid">
              <div className="detail-intro">
                <span className="detail-eyebrow">Service / {service.number}</span>
                <h1 id="detail-title">{service.detailTitle}</h1>
                <p>{service.overview}</p>
                <Link className="button-primary" href="/#contact">Let’s make something <ArrowUpRight aria-hidden="true" size={16} /></Link>
              </div>
              <DetailScene variant={service.scene} label={`Animated 3D ${service.title} visual`} />
            </div>
            <div className="detail-meta-row"><span>NOVA® / DIGITAL DESIGN STUDIO</span><span>CLARITY IN EVERY DETAIL <ArrowRight aria-hidden="true" size={13} /></span></div>
          </div>
        </section>

        <section className="detail-content" aria-labelledby="service-approach">
          <div className="container">
            <div className="detail-story-grid">
              <div><span className="eyebrow">The intention</span><h2>{service.title},<br /><em>with purpose.</em></h2></div>
              <p className="detail-story-copy">{service.challenge}</p>
            </div>
            <div className="detail-columns" id="service-approach">
              <div className="detail-column"><span className="detail-column-label">01 / HOW WE THINK</span><h3>A clear path from first question to final detail.</h3><ul>{service.approach.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="detail-column"><span className="detail-column-label">02 / WHAT WE MAKE</span><h3>Useful outcomes your team can build on.</h3><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="related-work" aria-labelledby="related-work-title">
          <div className="container">
            <div className="related-work-heading"><div><span className="eyebrow">In practice</span><h2 id="related-work-title">Ideas made <em>real.</em></h2></div><Link className="text-link" href="/work">All projects <ArrowUpRight aria-hidden="true" size={15} /></Link></div>
            <div className="project-grid">{relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
          </div>
        </section>
        <section className="detail-cta"><div className="container"><span className="eyebrow">Have a good feeling?</span><h2>Let’s find your <em>next move.</em></h2><Link className="button-primary" href="/#contact">Start a conversation <ArrowUpRight aria-hidden="true" size={16} /></Link></div></section>
      </main>
      <Footer />
    </div>
  );
}
