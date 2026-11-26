import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-${project.tone}`}>
      <Link className="project-link" href={`/work/${project.slug}`} aria-label={`View ${project.name}: ${project.category}`}>
      <div className="project-art">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 48vw"
        />
      </div>
      <div className="project-copy">
        <div><h3 className="project-title">{project.name}</h3><p className="project-category">{project.category}</p></div>
        <span className="project-card-end"><span className="project-number">/{project.number}</span><ArrowUpRight className="project-link-icon" aria-hidden="true" size={17} /></span>
      </div>
      </Link>
    </article>
  );
}
