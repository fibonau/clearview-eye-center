"use client";

import { FormEvent, useState } from "react";
import { CLINIC, SERVICE_OPTIONS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[\d\s+\-().]{7,20}$/.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.service) {
    errors.service = "Please select a service.";
  }

  if (!data.date) {
    errors.date = "Please choose a preferred date.";
  } else {
    const selected = new Date(data.date + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      errors.date = "Please choose a future date.";
    }
  }

  return errors;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-red-700" role="alert">
      {message}
    </p>
  );
}

const labelClass =
  "block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-espresso";

const inputClass =
  "mt-2 w-full rounded-sm border border-line bg-cream px-4 py-3 text-sm text-espresso outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-1 focus:ring-accent/40";

export default function AppointmentForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Book an Appointment"
            title="Schedule your visit"
            subtitle="Fill out the form below and our team will confirm your appointment within one business day."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <ScrollReveal className="lg:col-span-3">
            <div className="rounded-sm border border-line bg-cream-deep p-6 shadow-sm sm:p-9">
              {submitted ? (
                <div className="py-10 text-center" role="status">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent text-accent-dark">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-medium text-espresso">
                    Request received
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
                    Thank you, {form.fullName.split(" ")[0]}. We&apos;ll reach out
                    at {form.phone} or {form.email} to confirm your appointment
                    for {form.service}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                      setErrors({});
                    }}
                    className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-dark hover:text-espresso"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="fullName" className={labelClass}>
                        Full Name <span className="text-accent-dark">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        className={`${inputClass} ${errors.fullName ? "border-red-400" : ""}`}
                        placeholder="Juan Dela Cruz"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                      <FieldError message={errors.fullName} />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number <span className="text-accent-dark">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`}
                        placeholder="+63 9XX XXX XXXX"
                        aria-invalid={!!errors.phone}
                      />
                      <FieldError message={errors.phone} />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email <span className="text-accent-dark">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
                        placeholder="you@email.com"
                        aria-invalid={!!errors.email}
                      />
                      <FieldError message={errors.email} />
                    </div>

                    <div>
                      <label htmlFor="service" className={labelClass}>
                        Preferred Service <span className="text-accent-dark">*</span>
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        className={`${inputClass} ${errors.service ? "border-red-400" : ""}`}
                        aria-invalid={!!errors.service}
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <FieldError message={errors.service} />
                    </div>

                    <div>
                      <label htmlFor="date" className={labelClass}>
                        Preferred Date <span className="text-accent-dark">*</span>
                      </label>
                      <input
                        id="date"
                        type="date"
                        min={todayStr}
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        className={`${inputClass} ${errors.date ? "border-red-400" : ""}`}
                        aria-invalid={!!errors.date}
                      />
                      <FieldError message={errors.date} />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>
                        Message <span className="font-normal lowercase tracking-normal text-muted">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className={`${inputClass} resize-none`}
                        placeholder="Any special requests or questions..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-8 w-full rounded-full bg-accent px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-espresso transition-all hover:bg-accent-dark hover:text-cream disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? "Sending..." : "Request Appointment"}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-sm border border-line bg-cream-deep p-7 shadow-sm">
                <h3 className="font-heading text-2xl font-medium text-espresso">
                  Prefer to reach out directly?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Our front desk is happy to help you schedule over the phone or
                  through Facebook Messenger.
                </p>

                <a
                  href={CLINIC.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1877F2] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Message on Facebook
                </a>

                <a
                  href={CLINIC.phoneHref}
                  className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-full border border-taupe/50 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:border-accent hover:text-accent-dark"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call / Text
                </a>
              </div>

              <div className="rounded-sm bg-espresso p-7 text-cream">
                <h3 className="font-heading text-2xl font-medium">Walk-ins welcome</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  Appointments are recommended, but we do our best to accommodate
                  walk-in patients during clinic hours — especially for urgent
                  concerns.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
