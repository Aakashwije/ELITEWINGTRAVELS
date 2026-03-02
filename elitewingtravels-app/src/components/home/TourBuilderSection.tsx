"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

const tourSchema = z.object({
    travelers: z.string().min(1, "Number of travelers is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    destinations: z.array(z.string()).min(1, "Select at least one destination"),
    vehicleType: z.string().min(1, "Select a vehicle type"),
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    specialRequests: z.string().optional(),
    honeypot: z.string().max(0),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TourFormData = z.infer<typeof tourSchema>;

const steps = [
    { number: 1, title: "Travelers" },
    { number: 2, title: "Dates" },
    { number: 3, title: "Destinations" },
    { number: 4, title: "Vehicle" },
    { number: 5, title: "Details" },
];

const destinationOptions = [
    "Sigiriya", "Kandy", "Galle", "Ella", "Nuwara Eliya",
    "Polonnaruwa", "Anuradhapura", "Bentota", "Mirissa", "Yala",
];

const vehicleOptions = [
    { value: "sedan", label: "Private Sedan (1-3 pax)" },
    { value: "van", label: "Executive Van (6-14 pax)" },
    { value: "coach", label: "Luxury Coach (24-45 pax)" },
];

export default function TourBuilderSection() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<TourFormData>({
        defaultValues: {
            travelers: "",
            startDate: "",
            endDate: "",
            destinations: [],
            vehicleType: "",
            name: "",
            email: "",
            specialRequests: "",
            honeypot: "",
        },
    });

    const selectedDests = watch("destinations") || [];

    const toggleDest = (dest: string) => {
        const current = selectedDests;
        const updated = current.includes(dest)
            ? current.filter((d) => d !== dest)
            : [...current, dest];
        setValue("destinations", updated);
    };

    const onSubmit = async (data: TourFormData) => {
        if (data.honeypot) return;
        setSubmitting(true);
        try {
            await fetch("/api/tour-inquiry", {
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

    const canProceed = () => {
        switch (step) {
            case 1: return !!watch("travelers");
            case 2: return !!watch("startDate") && !!watch("endDate");
            case 3: return selectedDests.length > 0;
            case 4: return !!watch("vehicleType");
            case 5: return !!watch("name") && !!watch("email");
            default: return false;
        }
    };

    if (submitted) {
        return (
            <section className="section-luxury-lg bg-[var(--color-primary)]" id="tour-builder">
                <div className="container-luxury text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-24 h-24 rounded-full bg-green-500 mx-auto mb-6 flex items-center justify-center"
                    >
                        <svg width="48" height="48" fill="white" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                    </motion.div>
                    <h2 className="!text-white mb-4">Tour Request Received!</h2>
                    <p className="!text-white/80 text-lg max-w-xl mx-auto">
                        Thank you for choosing EliteWing Travels. Our team will craft your
                        perfect itinerary and contact you within 24 hours.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="section-luxury-lg bg-[var(--color-primary)]" id="tour-builder" ref={ref}>
            <div className="container-luxury">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Private Tour Builder
                    </span>
                    <h2 className="!text-white">
                        Design Your{" "}
                        <span className="text-gradient-gold">Dream Journey</span>
                    </h2>
                    <p className="!text-white/70 max-w-xl mx-auto mt-4">
                        Tell us about your perfect trip and we&apos;ll create a bespoke
                        itinerary tailored just for you.
                    </p>
                </motion.div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
                    {steps.map((s, i) => (
                        <div key={s.number} className="flex items-center gap-2">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step >= s.number
                                    ? "bg-[var(--color-gold)] text-white"
                                    : "bg-white/10 text-white/40"
                                    }`}
                            >
                                {step > s.number ? "✓" : s.number}
                            </div>
                            <span
                                className={`text-sm hidden sm:block ${step >= s.number ? "text-white" : "text-white/40"
                                    }`}
                            >
                                {s.title}
                            </span>
                            {i < steps.length - 1 && (
                                <div
                                    className={`w-8 h-0.5 mx-1 ${step > s.number ? "bg-[var(--color-gold)]" : "bg-white/10"
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
                    <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                        >
                            {/* Step 1: Travelers */}
                            {step === 1 && (
                                <div>
                                    <h3 className="!text-white text-2xl mb-6">How many travelers?</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        {["1-2", "3-5", "6-10", "11-20", "21-30", "30+"].map((opt) => (
                                            <label
                                                key={opt}
                                                className={`cursor-pointer rounded-2xl p-4 text-center transition-all duration-300 border-2 ${watch("travelers") === opt
                                                    ? "border-[var(--color-gold)] bg-[var(--color-gold)]/20 text-white"
                                                    : "border-white/10 text-white/70 hover:border-white/30"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    value={opt}
                                                    {...register("travelers")}
                                                    className="hidden"
                                                />
                                                <span className="text-lg font-bold block">{opt}</span>
                                                <span className="text-xs opacity-60">guests</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Dates */}
                            {step === 2 && (
                                <div>
                                    <h3 className="!text-white text-2xl mb-6">When are you traveling?</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="form-label !text-white/80">Start Date</label>
                                            <input type="date" {...register("startDate")} className="form-input" />
                                        </div>
                                        <div>
                                            <label className="form-label !text-white/80">End Date</label>
                                            <input type="date" {...register("endDate")} className="form-input" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Destinations */}
                            {step === 3 && (
                                <div>
                                    <h3 className="!text-white text-2xl mb-6">Where would you like to go?</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {destinationOptions.map((dest) => (
                                            <button
                                                key={dest}
                                                type="button"
                                                onClick={() => toggleDest(dest)}
                                                className={`rounded-2xl p-3 text-sm font-medium transition-all duration-300 border-2 cursor-pointer ${selectedDests.includes(dest)
                                                    ? "border-[var(--color-gold)] bg-[var(--color-gold)]/20 text-white"
                                                    : "border-white/10 text-white/70 hover:border-white/30 bg-transparent"
                                                    }`}
                                            >
                                                {dest}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Vehicle */}
                            {step === 4 && (
                                <div>
                                    <h3 className="!text-white text-2xl mb-6">Choose your vehicle</h3>
                                    <div className="space-y-4">
                                        {vehicleOptions.map((v) => (
                                            <label
                                                key={v.value}
                                                className={`cursor-pointer rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 border-2 ${watch("vehicleType") === v.value
                                                    ? "border-[var(--color-gold)] bg-[var(--color-gold)]/20"
                                                    : "border-white/10 hover:border-white/30"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    value={v.value}
                                                    {...register("vehicleType")}
                                                    className="hidden"
                                                />
                                                <div
                                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${watch("vehicleType") === v.value
                                                        ? "border-[var(--color-gold)]"
                                                        : "border-white/30"
                                                        }`}
                                                >
                                                    {watch("vehicleType") === v.value && (
                                                        <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-gold)]" />
                                                    )}
                                                </div>
                                                <span className="text-white font-medium">{v.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 5: Contact */}
                            {step === 5 && (
                                <div>
                                    <h3 className="!text-white text-2xl mb-6">Almost there! Your details</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="form-label !text-white/80">Full Name</label>
                                            <input type="text" {...register("name")} className="form-input" placeholder="Your full name" />
                                            {errors.name && <span className="form-error">{errors.name.message}</span>}
                                        </div>
                                        <div>
                                            <label className="form-label !text-white/80">Email Address</label>
                                            <input type="email" {...register("email")} className="form-input" placeholder="your@email.com" />
                                            {errors.email && <span className="form-error">{errors.email.message}</span>}
                                        </div>
                                        <div>
                                            <label className="form-label !text-white/80">Special Requests</label>
                                            <textarea
                                                {...register("specialRequests")}
                                                className="form-input min-h-[120px] resize-none"
                                                placeholder="Any special requirements, dietary needs, celebrations..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        {step > 1 ? (
                            <button
                                type="button"
                                onClick={() => setStep(step - 1)}
                                className="btn-secondary !border-white/30 !text-white hover:!bg-white/10"
                            >
                                Back
                            </button>
                        ) : (
                            <div />
                        )}

                        {step < 5 ? (
                            <button
                                type="button"
                                onClick={() => canProceed() && setStep(step + 1)}
                                className={`btn-primary ${!canProceed() ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                Continue
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={submitting || !canProceed()}
                                className={`btn-primary !bg-[var(--color-gold)] !border-[var(--color-gold)] ${submitting ? "opacity-50" : ""
                                    }`}
                            >
                                {submitting ? "Sending..." : "Submit Inquiry"}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
