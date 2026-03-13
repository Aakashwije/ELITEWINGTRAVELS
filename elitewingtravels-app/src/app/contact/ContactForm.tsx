"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
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
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = (await response.json().catch(() => null)) as { error?: string } | null;
                throw new Error(result?.error || "Failed to submit form.");
            }

            setSubmitted(true);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
            alert(message);
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="card-luxury p-12 text-center relative overflow-hidden flex flex-col items-center justify-center"
            >
                {/* Animated background glow */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.08 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at 50% 40%, var(--color-primary) 0%, transparent 70%)",
                    }}
                />

                {/* Decorative floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20, scale: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            y: [20, -60 - i * 15],
                            scale: [0, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            delay: 0.5 + i * 0.15,
                            ease: "easeOut",
                        }}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${20 + i * 12}%`,
                            top: "50%",
                            width: `${6 + (i % 3) * 3}px`,
                            height: `${6 + (i % 3) * 3}px`,
                            borderRadius: "50%",
                            background: i % 2 === 0 ? "var(--color-primary)" : "var(--color-accent, #f59e0b)",
                        }}
                    />
                ))}

                {/* Checkmark icon with ring animation */}
                <div className="relative mx-auto mb-8" style={{ width: 88, height: 88 }}>
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{
                            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)",
                            border: "2px solid rgba(16, 185, 129, 0.3)",
                        }}
                    >
                        <motion.svg
                            width="40"
                            height="40"
                            fill="none"
                            viewBox="0 0 24 24"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <motion.path
                                d="M5 13l4 4L19 7"
                                stroke="#10b981"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                            />
                        </motion.svg>
                    </motion.div>

                    {/* Pulse ring */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: [0.8, 1.4], opacity: [0.4, 0] }}
                        transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ border: "2px solid rgba(16, 185, 129, 0.4)" }}
                    />
                </div>

                {/* Text content with staggered animation */}
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-2xl font-semibold mb-2"
                    style={{ letterSpacing: "-0.02em" }}
                >
                    Message Sent Successfully!
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.5 }}
                    className="text-base mb-6"
                    style={{ color: "var(--color-muted)", maxWidth: 360, margin: "0 auto 24px" }}
                >
                    Thank you for reaching out! Our travel experts will get back to you within 24 hours.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSubmitted(false)}
                    className="btn-primary mx-auto"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Send Another Message
                </motion.button>
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
