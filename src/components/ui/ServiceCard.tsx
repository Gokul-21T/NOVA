import type { Service } from "@/types";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <Link className="service-card-link" href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>
      <div className="service-meta"><span>0{service.number}</span><span>NOVA® / SERVICE</span></div>
      <div className="service-icon"><Icon aria-hidden="true" size={20} strokeWidth={1.6} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="service-card-more">Explore service <ArrowUpRight aria-hidden="true" size={14} /></span>
      </Link>
    </article>
  );
}
