import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Work — NOVA® Digital Design Studio",
  description: "Explore four illustrative design concepts from NOVA® across commerce, brand identity, digital products, and product design.",
};

export default function WorkPage() {
  return (
    <div className="site-shell listing-site listing-work">
      <Navbar />
      <main>
        <section className="listing-hero" aria-labelledby="listing-title">
          <div className="container">
            <Link className="listing-back" href="/#work"><ArrowLeft aria-hidden="true" size={14} /> Back to home</Link>
            <span className="eyebrow">Selected work / concept studies</span>
            <h1 id="listing-title">A few ideas,<br /><em>fully considered.</em></h1>
            <p>Four fictional explorations in how thoughtful design can give a good idea a world of its own.</p>
          </div>
        </section>
        <section className="listing-content" aria-label="Selected project concepts">
          <div className="container"><div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div>
        </section>
        <section className="detail-cta"><div className="container"><span className="eyebrow">Have something in mind?</span><h2>Let’s make a little <em>noise.</em></h2><Link className="button-primary" href="/#contact">Start a conversation <ArrowLeft aria-hidden="true" size={16} /></Link></div></section>
      </main>
      <Footer />
    </div>
  );
}
