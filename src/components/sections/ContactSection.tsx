import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <SectionHeading eyebrow="Your next move"><span id="contact-title">Have a good</span><br /><em>feeling?</em></SectionHeading>
          <p className="contact-description">The best work starts with a conversation. Tell us what you’re building, and we’ll take it from there.</p>
          <p className="contact-email-label">Or write us directly</p>
          <a className="contact-email" href="mailto:hello@nova.studio">hello@nova.studio <ArrowUpRight aria-hidden="true" size={18} /></a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
