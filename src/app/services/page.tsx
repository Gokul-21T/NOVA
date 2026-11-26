import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — NOVA® Digital Design Studio",
  description: "Explore NOVA® services in experience design, web development, branding, and digital strategy.",
};

export default function ServicesPage() {
  return (
    <div className="site-shell listing-site">
      <Navbar />
      <main>
        <section className="listing-hero" aria-labelledby="listing-title">
          <div className="container">
            <Link className="listing-back" href="/#services"><ArrowLeft aria-hidden="true" size={14} /> Back to home</Link>
            <span className="eyebrow">Our services</span>
            <h1 id="listing-title">Good thinking.<br /><em>Thoughtfully made.</em></h1>
            <p>One small studio, all the right disciplines. Find the expertise that helps your next idea move forward.</p>
          </div>
        </section>
        <section className="listing-content" aria-label="Available services">
          <div className="container"><div className="service-grid listing-service-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div>
        </section>
        <section className="detail-cta"><div className="container"><span className="eyebrow">Not sure where to begin?</span><h2>Start with a <em>conversation.</em></h2><Link className="button-primary" href="/#contact">Tell us what you’re building <ArrowLeft aria-hidden="true" size={16} /></Link></div></section>
      </main>
      <Footer />
    </div>
  );
}
