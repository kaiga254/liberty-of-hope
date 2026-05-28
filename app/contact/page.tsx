"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { fadeInUp, fadeInLeft, fadeInRight, stagger } from "@/lib/animations";
import { contactInfo, defaultMapQuery } from "@/lib/contact";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

const subjectOptions = [
  "General Inquiry",
  "Volunteering",
  "Donation Support",
  "Partnership",
  "Report an Elder in Need",
];

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: subjectOptions[0],
  message: "",
};

const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

const isEmailJsConfigured = Boolean(
  emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey
);

const mapsApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY?.trim() ?? "";
const mapsQuery =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_QUERY?.trim() || defaultMapQuery;
const encodedMapsQuery = encodeURIComponent(mapsQuery);
const isGoogleMapsConfigured = Boolean(mapsApiKey);
const googleMapsEmbedSrc = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
  mapsApiKey
)}&q=${encodedMapsQuery}&zoom=14`;
const googleMapsSearchHref = `https://www.google.com/maps/search/?api=1&query=${encodedMapsQuery}`;

function validateContactForm(formData: ContactFormData) {
  const errors: ContactFormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!emailPattern.test(formData.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formData.subject.trim()) {
    errors.subject = "Please choose a subject.";
  }

  if (formData.message.trim().length < 10) {
    errors.message = "Please add a little more detail.";
  }

  return errors;
}

async function sendEmailJsMessage(formData: ContactFormData) {
  if (!isEmailJsConfigured) {
    throw new Error("EmailJS is not configured.");
  }

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: emailJsConfig.serviceId,
      template_id: emailJsConfig.templateId,
      user_id: emailJsConfig.publicKey,
      template_params: {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        phone: formData.phone.trim() || "Not provided",
        subject: formData.subject,
        message: formData.message.trim(),
        submitted_at: new Date().toISOString(),
      },
    }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "EmailJS request failed.");
  }
}

function fieldClassName(hasError?: boolean) {
  return `w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 ${
    hasError
      ? "border-accent-rose bg-rose-50 focus:ring-accent-rose/40"
      : "border-gray-300 focus:ring-primary"
  }`;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleFieldChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const fieldName = event.target.name as keyof ContactFormData;
    const fieldValue = event.target.value;

    setFormData((current) => ({ ...current, [fieldName]: fieldValue }));
    setFieldErrors((current) => ({ ...current, [fieldName]: undefined }));

    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateContactForm(formData);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setFeedback("Please check the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      await sendEmailJsMessage(formData);
      setStatus("success");
      setFeedback("Thank you. Your message has been sent successfully.");
      setFormData(initialFormData);
    } catch (error) {
      if (isEmailJsConfigured) {
        console.error("EmailJS contact form submission failed.", error);
      }

      setStatus("error");
      setFeedback(
        isEmailJsConfigured
          ? `We could not send your message. Please email us directly at ${contactInfo.email.label}.`
          : `The online form is being connected. Please email us directly at ${contactInfo.email.label}.`
      );
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-teal-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/medical-camp.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold font-heading mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-teal-100 leading-relaxed"
            >
              Whether you want to volunteer, donate, or know an elder in need —
              we&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:w-2/5"
            >
              <h2 className="text-3xl font-bold font-heading text-secondary mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                We&apos;re here to answer your questions and hear your stories.
                Reach out through any of the channels below, or fill out the
                form.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">
                      Visit Us
                    </h4>
                    <p className="text-gray-600">
                      {contactInfo.address.line1}
                      <br />
                      {contactInfo.address.line2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">
                      Email Us
                    </h4>
                    <a
                      href={contactInfo.email.href}
                      className="text-gray-600 transition-colors hover:text-primary"
                    >
                      {contactInfo.email.label}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">
                      Call Us
                    </h4>
                    <a
                      href={contactInfo.phone.href}
                      className="text-gray-600 transition-colors hover:text-primary"
                    >
                      {contactInfo.phone.label}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-lg">
                      Office Hours
                    </h4>
                    <p className="text-gray-600">
                      {contactInfo.officeHours[0]}
                      <br />
                      {contactInfo.officeHours[1]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-slate-100 shadow-sm">
                <div className="h-72">
                  {isGoogleMapsConfigured ? (
                    <iframe
                      title="Google Map showing Liberty of Hope in Thika, Kenya"
                      src={googleMapsEmbedSrc}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative flex h-full items-center justify-center overflow-hidden bg-sage">
                      <div
                        className="absolute inset-0 opacity-70"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(15, 118, 110, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 118, 110, 0.14) 1px, transparent 1px)",
                          backgroundSize: "42px 42px",
                        }}
                      />
                      <div className="relative max-w-xs rounded-xl border border-white/80 bg-white/90 px-6 py-5 text-center shadow-lg backdrop-blur">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <p className="font-semibold text-secondary">
                          {contactInfo.address.line1}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          {contactInfo.address.line2}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-4 border-t border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-secondary">
                      Liberty of Hope on Google Maps
                    </p>
                    <p className="text-sm text-gray-500">
                      {contactInfo.address.line1}, {contactInfo.address.line2}
                    </p>
                  </div>
                  <a
                    href={googleMapsSearchHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary"
                  >
                    Open Map
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:w-3/5"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-secondary mb-8 font-heading">
                  Send Us a Message
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="text-sm font-medium text-gray-700 mb-1.5 block"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="c-name"
                        name="name"
                        value={formData.name}
                        onChange={handleFieldChange}
                        className={fieldClassName(Boolean(fieldErrors.name))}
                        placeholder="Jane Doe"
                        autoComplete="name"
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={
                          fieldErrors.name ? "c-name-error" : undefined
                        }
                        required
                      />
                      {fieldErrors.name ? (
                        <p
                          id="c-name-error"
                          className="mt-2 text-sm text-accent-rose"
                        >
                          {fieldErrors.name}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="c-email"
                        className="text-sm font-medium text-gray-700 mb-1.5 block"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        name="email"
                        value={formData.email}
                        onChange={handleFieldChange}
                        className={fieldClassName(Boolean(fieldErrors.email))}
                        placeholder="jane@example.com"
                        autoComplete="email"
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={
                          fieldErrors.email ? "c-email-error" : undefined
                        }
                        required
                      />
                      {fieldErrors.email ? (
                        <p
                          id="c-email-error"
                          className="mt-2 text-sm text-accent-rose"
                        >
                          {fieldErrors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="c-subject"
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Subject
                    </label>
                    <select
                      id="c-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFieldChange}
                      className={`${fieldClassName(
                        Boolean(fieldErrors.subject)
                      )} bg-white`}
                      aria-invalid={Boolean(fieldErrors.subject)}
                      aria-describedby={
                        fieldErrors.subject ? "c-subject-error" : undefined
                      }
                      required
                    >
                      {subjectOptions.map((subject) => (
                        <option key={subject}>{subject}</option>
                      ))}
                    </select>
                    {fieldErrors.subject ? (
                      <p
                        id="c-subject-error"
                        className="mt-2 text-sm text-accent-rose"
                      >
                        {fieldErrors.subject}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="c-phone"
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="c-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFieldChange}
                      className={fieldClassName(Boolean(fieldErrors.phone))}
                      placeholder="+254 700 000 000"
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="c-message"
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      value={formData.message}
                      onChange={handleFieldChange}
                      rows={5}
                      className={`${fieldClassName(
                        Boolean(fieldErrors.message)
                      )} resize-none`}
                      placeholder="How can we help?"
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={
                        fieldErrors.message ? "c-message-error" : undefined
                      }
                      required
                    />
                    {fieldErrors.message ? (
                      <p
                        id="c-message-error"
                        className="mt-2 text-sm text-accent-rose"
                      >
                        {fieldErrors.message}
                      </p>
                    ) : null}
                  </div>

                  {feedback ? (
                    <div
                      role={status === "error" ? "alert" : "status"}
                      className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
                        status === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                          : "border-rose-200 bg-rose-50 text-rose-800"
                      }`}
                    >
                      {status === "success" ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      ) : (
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                      )}
                      <span>{feedback}</span>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-white shadow-lg transition-all duration-300 hover:bg-teal-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
