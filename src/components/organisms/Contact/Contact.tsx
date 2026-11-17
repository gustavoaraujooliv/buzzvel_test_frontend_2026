"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { FormField } from "@/components/molecules/FormField";
import { ContactItem } from "@/components/molecules/ContactItem";
import { CONTACT_INFO_ITEMS } from "@/data/mockData";
import { ContactFormData } from "@/types";
import { cn } from "@/lib/utils";

export interface ContactProps {
  className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    question: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.question.trim()) {
      newErrors.question = "Please enter your question or message";
    } else if (formData.question.trim().length < 10) {
      newErrors.question = "Please enter at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={cn("site-section bg-white border-y border-brand-border/40", className)}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Info (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="eyebrow mb-3 block">CONTACT</span>

            <h2 id="contact-heading" className="heading-section text-brand-dark">Get in touch</h2>

            <p className="body-large text-brand-muted mt-4 max-w-xl">
              Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.
            </p>

            <address className="m-0 mt-8 w-full max-w-[480px] not-italic">
              <ul className="m-0 flex list-none flex-col gap-4 p-0" role="list">
                {CONTACT_INFO_ITEMS.map((item) => (
                  <li key={item.label}>
                    <ContactItem item={item} />
                  </li>
                ))}
              </ul>
            </address>
          </div>

          {/* Right Column: Form (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-xl border border-brand-border-light bg-white p-5 shadow-[0px_12px_32px_0px_#171B2C0A] sm:p-8">
              <div className="mb-6">
                <h3 id="contact-form-heading" className="heading-card text-brand-dark">Contact us</h3>
                <p className="body-small text-brand-muted mt-1">
                  Fill out the fields and we will get in touch.
                </p>
              </div>

              {isSuccess ? (
                <div
                  className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center animate-in fade-in duration-300"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-950 font-heading">
                    Message sent successfully!
                  </h4>
                  <p className="text-sm text-emerald-800 mt-1.5">
                    Thank you, {formData.fullName}. Our team will review your inquiry and reply within 24 business hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-5"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ fullName: "", email: "", question: "" });
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-labelledby="contact-form-heading"
                  className="flex flex-col gap-5"
                >
                  <FormField
                    id="contact-fullName"
                    label="Full name"
                    placeholder="Your name"
                    required
                    value={formData.fullName}
                    error={errors.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                  />

                  <FormField
                    id="contact-email"
                    type="email"
                    label="Email"
                    placeholder="youremail@example.com"
                    required
                    value={formData.email}
                    error={errors.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />

                  <FormField
                    id="contact-question"
                    textarea
                    rows={4}
                    label="Your question"
                    placeholder="Tell us how we can help..."
                    required
                    value={formData.question}
                    error={errors.question}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, question: e.target.value }))
                    }
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isSubmitting}
                      className="w-full justify-center"
                    >
                      Send message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
