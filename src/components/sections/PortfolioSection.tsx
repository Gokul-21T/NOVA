import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export function PortfolioSection() {
  return (
    <section className="portfolio" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="portfolio-head">
          <SectionHeading eyebrow="Selected work"><span id="work-title">Made to</span><br /><em>move you.</em></SectionHeading>
          <div className="portfolio-head-links"><Link className="text-link" href="/work">View all concepts <ArrowUpRight aria-hidden="true" size={15} /></Link><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight aria-hidden="true" size={15} /></a></div>
        </div>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
      </div>
    </section>
  );
}
