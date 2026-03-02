"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().optional(),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    honeypot: z.string().max(0),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            honeypot: "",
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        if (data.honeypot) return;
        setSubmitting(true);
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            setSubmitted(true);
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-luxury p-12 text-center"
            >
                <div className="w-20 h-20 rounded-full bg-green-100 mx-auto mb-6 flex items-center justify-center">
                    <svg width="40" height="40" fill="none" stroke="var(--color-primary)" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                </div>
                <h3 className="text-2xl mb-3">Message Sent!</h3>
                <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
            </motion.div>
        );
    }

    return (
        <div className="card-luxury p-8">
            <h3 className="text-2xl mb-2">Send Us a Message</h3>
            <p className="text-sm mb-8">
                Fill out the form below and our travel experts will respond promptly.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="form-label">Full Name *</label>
                        <input type="text" {...register("name")} className="form-input" placeholder="Your name" />
                        {errors.name && <span className="form-error">{errors.name.message}</span>}
                    </div>
                    <div>
                        <label className="form-label">Email *</label>
                        <input type="email" {...register("email")} className="form-input" placeholder="your@email.com" />
                        {errors.email && <span className="form-error">{errors.email.message}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="form-label">Phone</label>
                        <input type="tel" {...register("phone")} className="form-input" placeholder="+1 234 567 890" />
                    </div>
                    <div>
                        <label className="form-label">Subject *</label>
                        <select {...register("subject")} className="form-input">
                            <option value="">Select a subject</option>
                            <option value="tour-inquiry">Tour Inquiry</option>
                            <option value="custom-tour">Custom Tour Request</option>
                            <option value="fleet-inquiry">Fleet Inquiry</option>
                            <option value="general">General Question</option>
                            <option value="feedback">Feedback</option>
                        </select>
                        {errors.subject && <span className="form-error">{errors.subject.message}</span>}
                    </div>
                </div>

                <div>
                    <label className="form-label">Message *</label>
                    <textarea
                        {...register("message")}
                        className="form-input min-h-[160px] resize-none"
                        placeholder="Tell us about your dream trip to Sri Lanka..."
                    />
                    {errors.message && <span className="form-error">{errors.message.message}</span>}
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className={`btn-primary w-full justify-center ${submitting ? "opacity-50" : ""}`}
                >
                    {submitting ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs text-center text-[var(--color-muted)]">
                    We respect your privacy. Your information will never be shared with third parties.
                </p>
            </form>
        </div>
    );
}
