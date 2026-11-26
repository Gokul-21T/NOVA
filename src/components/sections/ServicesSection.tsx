import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-intro">
          <SectionHeading eyebrow="What we do"><span id="services-title">Small team.</span><br />Big <em>ideas.</em></SectionHeading>
          <div className="section-intro-side"><p className="section-intro-copy">From the first sketch to the final pixel, we bring every part of your digital presence into focus.</p><Link className="section-list-link" href="/services">Explore all services <ArrowUpRight aria-hidden="true" size={14} /></Link></div>
        </div>
        <div className="service-grid">{services.map((service) => <ServiceCard key={service.number} service={service} />)}</div>
      </div>
    </section>
  );
}
