"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type FormValues = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.message.trim()) errors.message = "Tell us a little about your project.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setHasError(true);
      setStatus("Please check the highlighted fields and try again.");
      return;
    }
    setHasError(false);
    setStatus("Thanks for reaching out. Your message is ready — this demo does not send email.");
    setValues(initialValues);
  }

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <h3 className="form-heading">Tell us what you’re thinking.</h3>
      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-name">Full name</label>
          <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" value={values.name} required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} onChange={(event) => updateField("name", event.target.value)} />
          {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" value={values.email} required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} onChange={(event) => updateField("email", event.target.value)} />
          {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-message">Project message</label>
        <textarea id="contact-message" name="message" placeholder="A little about your project…" value={values.message} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} onChange={(event) => updateField("message", event.target.value)} />
        {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
      </div>
      <button className="button-primary form-submit" type="submit">Send your inquiry <ArrowUpRight aria-hidden="true" size={16} /></button>
      <p className="form-status" data-error={hasError} role="status" aria-live="polite">{status}</p>
    </form>
  );
}
