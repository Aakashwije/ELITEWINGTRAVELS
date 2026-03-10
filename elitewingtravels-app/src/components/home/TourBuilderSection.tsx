"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Users,
    CalendarDays,
    MapPin,
    Car,
    Mail,
    Check,
    ArrowRight,
    ArrowLeft,
    Send,
    Loader2,
    CheckCircle2,
    Heart,
    Briefcase,
    Users2,
    PartyPopper,
    Globe,
    Star,
    Sparkles,
} from "lucide-react";

/* ─── Schema ──────────────────────────────────────────────── */
const tourSchema = z.object({
    travelers: z.string().min(1, "Please select group size"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    destinations: z.array(z.string()).min(1, "Select at least one destination"),
    vehicleType: z.string().min(1, "Select a vehicle type"),
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email required"),
    specialRequests: z.string().optional(),
    honeypot: z.string().max(0),
});
type TourFormData = z.infer<typeof tourSchema>;

/* ─── Step metadata ───────────────────────────────────────── */
const STEPS = [
    { id: 1, label: "Travelers", Icon: Users },
    { id: 2, label: "Dates", Icon: CalendarDays },
    { id: 3, label: "Destinations", Icon: MapPin },
    { id: 4, label: "Vehicle", Icon: Car },
    { id: 5, label: "Details", Icon: Mail },
];

/* ─── Traveler options ────────────────────────────────────── */
const TRAVELER_OPTIONS = [
    { value: "1-2",   range: "1 – 2",  tag: "Just Us",       Icon: Heart,       hint: "Perfect for couples & solo" },
    { value: "3-5",   range: "3 – 5",  tag: "Family",        Icon: Users,       hint: "Ideal for families" },
    { value: "6-10",  range: "6 – 10", tag: "Friends",       Icon: Users2,      hint: "Small group adventure" },
    { value: "11-20", range: "11–20",  tag: "Large Group",   Icon: Briefcase,   hint: "Extended families & tours" },
    { value: "21-30", range: "21–30",  tag: "Corporate",     Icon: Globe,       hint: "Corporate & incentive trips" },
    { value: "30+",   range: "30+",    tag: "Grand Tour",    Icon: PartyPopper, hint: "Big events & celebrations" },
];

/* ─── Destination options ─────────────────────────────────── */
const DESTINATIONS = [
    { name: "Sigiriya",     region: "Cultural Triangle" },
    { name: "Kandy",        region: "Hill Country" },
    { name: "Galle",        region: "Southern Coast" },
    { name: "Ella",         region: "Highlands" },
    { name: "Nuwara Eliya", region: "Tea Country" },
    { name: "Polonnaruwa",  region: "Ancient Kingdom" },
    { name: "Anuradhapura", region: "Sacred City" },
    { name: "Bentota",      region: "West Coast" },
    { name: "Mirissa",      region: "Whale Watching" },
    { name: "Yala",         region: "Wildlife" },
];

/* ─── Vehicle options ─────────────────────────────────────── */
const VEHICLES = [
    {
        value:   "sedan",
        name:    "Private Sedan",
        pax:     "1 – 3 passengers",
        tagline: "Sleek, air-conditioned comfort with a professional chauffeur.",
        badge:   "Most popular",
        emoji:   "🚗",
    },
    {
        value:   "van",
        name:    "Executive Van",
        pax:     "6 – 14 passengers",
        tagline: "Spacious interior, reclining seats & onboard Wi-Fi.",
        badge:   "",
        emoji:   "🚐",
    },
    {
        value:   "coach",
        name:    "Luxury Coach",
        pax:     "24 – 45 passengers",
        tagline: "First-class touring coach for large groups & corporate travel.",
        badge:   "",
        emoji:   "🚌",
    },
];

/* ─── Helpers ─────────────────────────────────────────────── */
function daysBetween(a: string, b: string) {
    if (!a || !b) return 0;
    const diff = new Date(b).getTime() - new Date(a).getTime();
    return Math.max(0, Math.floor(diff / 86_400_000));
}

/* ─── Component ───────────────────────────────────────────── */
export default function TourBuilderSection() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const { register, handleSubmit, setValue, watch, formState: { errors } } =
        useForm<TourFormData>({
            resolver: zodResolver(tourSchema),
            defaultValues: {
                travelers: "", startDate: "", endDate: "",
                destinations: [], vehicleType: "",
                name: "", email: "", specialRequests: "", honeypot: "",
            },
        });

    const selectedDests = watch("destinations") || [];
    const travelers = watch("travelers");
    const vehicleType = watch("vehicleType");
    const startDate = watch("startDate");
    const endDate = watch("endDate");

    const toggleDest = (name: string) => {
        const next = selectedDests.includes(name)
            ? selectedDests.filter((d) => d !== name)
            : [...selectedDests, name];
        setValue("destinations", next);
    };

    const canProceed = () => {
        switch (step) {
            case 1: return !!travelers;
            case 2: return !!startDate && !!endDate;
            case 3: return selectedDests.length > 0;
            case 4: return !!vehicleType;
            case 5: return !!watch("name") && !!watch("email");
            default: return false;
        }
    };

    const onSubmit = async (data: TourFormData) => {
        if (data.honeypot) return;
        setSubmitting(true);
        try {
            const response = await fetch("/api/tour-inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = (await response.json().catch(() => null)) as { error?: string } | null;
                throw new Error(result?.error || "Failed to submit inquiry.");
            }

            setSubmitted(true);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
            alert(message);
        } finally {
            setSubmitting(false);
        }
    };

    /* ── Success screen ───────────────────────────────────── */
    if (submitted) {
        return (
            <section className="section-luxury-lg bg-[var(--color-primary)]" id="tour-builder">
                <div className="container-luxury text-center">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 180, damping: 14 }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full
                                   bg-[var(--color-gold)] mb-8 shadow-2xl shadow-[var(--color-gold)]/30"
                    >
                        <CheckCircle2 size={44} className="text-white" strokeWidth={1.5} />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                        <h2 className="!text-white mb-3">Your journey begins here.</h2>
                        <p className="!text-white/65 text-lg max-w-lg mx-auto leading-relaxed">
                            We&apos;ve received your request. Our team will craft a personalised
                            itinerary and reach out within{" "}
                            <span className="text-[var(--color-gold)] font-semibold">24 hours</span>.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    /* ── Main form ────────────────────────────────────────── */
    return (
        <section
            id="tour-builder"
            ref={ref}
            className="relative bg-[var(--color-primary)] py-28 overflow-hidden"
        >
            {/* ── Background decoration ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full
                                bg-[var(--color-gold)]/5 blur-[130px] -translate-x-1/2 -translate-y-1/3" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full
                                bg-white/[0.025] blur-[110px] translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full
                                bg-[var(--color-gold)]/[0.04] blur-[90px] -translate-x-1/2 -translate-y-1/2" />
                {/* Subtle grid lines */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }} />
            </div>

            <div className="container-luxury relative z-10">

                {/* ── Header ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                                    border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/8 mb-5">
                        <Sparkles size={12} className="text-[var(--color-gold)]" />
                        <span className="text-[var(--color-gold)] text-xs font-semibold tracking-[0.15em] uppercase">
                            Private Tour Builder
                        </span>
                        <Sparkles size={12} className="text-[var(--color-gold)]" />
                    </div>
                    <h2 className="!text-white mt-1 mb-4">
                        Design Your{" "}
                        <span className="text-gradient-gold">Dream Journey</span>
                    </h2>
                    <p className="!text-white/50 max-w-md mx-auto text-base leading-relaxed">
                        Tell us about your perfect trip and we&apos;ll craft a bespoke
                        itinerary tailored just for you.
                    </p>
                </motion.div>

                {/* ── Outer premium wrapper ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.08 }}
                    className="max-w-2xl mx-auto"
                >
                    {/* Golden top-border accent */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/60 to-transparent mb-0 rounded-t-3xl" />

                    <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl
                                    shadow-2xl shadow-black/40 overflow-hidden">

                        {/* ── Step progress bar (top of card) ─────── */}
                        <div className="px-8 pt-8 pb-6 border-b border-white/[0.06]">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[var(--color-gold)] text-xs font-semibold tracking-widest uppercase">
                                    Step {step} of {STEPS.length}
                                </span>
                                <span className="text-white/30 text-xs">
                                    {Math.round(((step - 1) / (STEPS.length - 1)) * 100)}% complete
                                </span>
                            </div>
                            {/* Track */}
                            <div className="relative h-1 bg-white/[0.07] rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute inset-y-0 left-0 rounded-full"
                                    style={{
                                        background: "linear-gradient(90deg, var(--color-gold), #f59e0b)",
                                        boxShadow: "0 0 8px rgba(var(--color-gold-rgb, 180,134,60),0.7)",
                                    }}
                                />
                            </div>

                            {/* Step dots */}
                            <div className="flex items-center justify-between mt-4">
                                {STEPS.map(({ id, label, Icon }) => {
                                    const done   = step > id;
                                    const active = step === id;
                                    return (
                                        <div key={id} className="flex flex-col items-center gap-1.5">
                                            <motion.div
                                                animate={{
                                                    scale: active ? 1.15 : 1,
                                                    borderColor: done
                                                        ? "var(--color-gold)"
                                                        : active
                                                            ? "var(--color-gold)"
                                                            : "rgba(255,255,255,0.12)",
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className={`
                                                    w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors
                                                    ${done
                                                        ? "bg-[var(--color-gold)]"
                                                        : active
                                                            ? "bg-[var(--color-gold)]/15"
                                                            : "bg-transparent"
                                                    }
                                                `}
                                            >
                                                {done
                                                    ? <Check size={12} className="text-white" strokeWidth={3} />
                                                    : <Icon size={12} className={active ? "text-[var(--color-gold)]" : "text-white/25"} strokeWidth={1.8} />
                                                }
                                            </motion.div>
                                            <span className={`text-[10px] font-medium hidden sm:block transition-colors
                                                ${done || active ? "text-white/70" : "text-white/20"}`}>
                                                {label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ── Form content ─────────────────────────── */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.28, ease: "easeOut" }}
                                    className="p-8 sm:p-10"
                                >
                                    {/* ── Step 1 – Travelers ─────────── */}
                                    {step === 1 && (
                                        <div>
                                            <StepHeading Icon={Users} title="How many travelers?" sub="We'll match your group to the ideal vehicle & accommodations." />
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                                                {TRAVELER_OPTIONS.map(({ value, range, tag, Icon: TIcon, hint }) => {
                                                    const sel = travelers === value;
                                                    return (
                                                        <label
                                                            key={value}
                                                            className={`
                                                                relative cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-300
                                                                border group overflow-hidden
                                                                ${sel
                                                                    ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10 shadow-lg shadow-[var(--color-gold)]/10"
                                                                    : "border-white/8 bg-white/[0.03] hover:border-white/18 hover:bg-white/[0.06]"
                                                                }
                                                            `}
                                                        >
                                                            <input type="radio" value={value} {...register("travelers")} className="sr-only" />

                                                            {/* Shimmer bg on selected */}
                                                            {sel && (
                                                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 to-transparent pointer-events-none" />
                                                            )}

                                                            {/* Check badge */}
                                                            {sel && (
                                                                <motion.span
                                                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                                                    className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full
                                                                               bg-[var(--color-gold)] flex items-center justify-center shadow-md"
                                                                >
                                                                    <Check size={10} className="text-white" strokeWidth={3} />
                                                                </motion.span>
                                                            )}

                                                            <TIcon
                                                                size={22}
                                                                strokeWidth={1.6}
                                                                className={`mb-3 transition-colors duration-300
                                                                    ${sel ? "text-[var(--color-gold)]" : "text-white/30 group-hover:text-white/50"}`}
                                                            />
                                                            <p className={`text-xl font-bold leading-none mb-0.5 transition-colors
                                                                ${sel ? "text-white" : "text-white/75"}`}>
                                                                {range}
                                                            </p>
                                                            <p className={`text-[10px] font-bold uppercase tracking-[0.12em] mb-2 transition-colors
                                                                ${sel ? "text-[var(--color-gold)]" : "text-white/28"}`}>
                                                                {tag}
                                                            </p>
                                                            <p className={`text-[11px] leading-tight transition-colors
                                                                ${sel ? "text-white/55" : "text-white/22"}`}>
                                                                {hint}
                                                            </p>
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                            {travelers && (
                                                <Tip>
                                                    Perfect — we&apos;ll curate the ideal Sri Lanka experience for{" "}
                                                    <strong className="text-[var(--color-gold)]">{travelers} guests</strong>.
                                                </Tip>
                                            )}
                                        </div>
                                    )}

                                    {/* ── Step 2 – Dates ─────────────── */}
                                    {step === 2 && (
                                        <div>
                                            <StepHeading Icon={CalendarDays} title="When are you traveling?" sub="Choose your dates and we'll plan every day to perfection." />
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                                                <DateField label="Departure date" id="startDate" {...register("startDate")} />
                                                <DateField label="Return date" id="endDate" {...register("endDate")} />
                                            </div>
                                            {startDate && endDate && daysBetween(startDate, endDate) > 0 && (
                                                <Tip>
                                                    Your journey spans{" "}
                                                    <strong className="text-[var(--color-gold)]">{daysBetween(startDate, endDate)} days</strong>{" "}
                                                    of unforgettable experiences.
                                                </Tip>
                                            )}
                                        </div>
                                    )}

                                    {/* ── Step 3 – Destinations ──────── */}
                                    {step === 3 && (
                                        <div>
                                            <StepHeading Icon={MapPin} title="Where would you like to go?" sub="Pick any destinations that spark your interest — we'll weave them into a seamless route." />
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-8">
                                                {DESTINATIONS.map(({ name, region }) => {
                                                    const sel = selectedDests.includes(name);
                                                    return (
                                                        <button
                                                            key={name}
                                                            type="button"
                                                            onClick={() => toggleDest(name)}
                                                            className={`
                                                                relative text-left rounded-xl px-4 py-3.5 border transition-all duration-250
                                                                cursor-pointer group overflow-hidden
                                                                ${sel
                                                                    ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10 shadow-md shadow-[var(--color-gold)]/10"
                                                                    : "border-white/8 bg-white/[0.03] hover:border-white/18 hover:bg-white/[0.06]"
                                                                }
                                                            `}
                                                        >
                                                            {sel && (
                                                                <motion.div
                                                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                                                    className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full
                                                                               bg-[var(--color-gold)] flex items-center justify-center"
                                                                >
                                                                    <Check size={8} className="text-white" strokeWidth={3} />
                                                                </motion.div>
                                                            )}
                                                            <p className={`text-sm font-semibold leading-tight transition-colors
                                                                ${sel ? "text-white" : "text-white/65"}`}>
                                                                {name}
                                                            </p>
                                                            <p className={`text-[11px] mt-0.5 transition-colors
                                                                ${sel ? "text-[var(--color-gold)]/75" : "text-white/22"}`}>
                                                                {region}
                                                            </p>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                            {selectedDests.length > 0 && (
                                                <Tip>
                                                    <strong className="text-[var(--color-gold)]">{selectedDests.length}</strong>{" "}
                                                    destination{selectedDests.length > 1 ? "s" : ""} selected.
                                                </Tip>
                                            )}
                                        </div>
                                    )}

                                    {/* ── Step 4 – Vehicle ───────────── */}
                                    {step === 4 && (
                                        <div>
                                            <StepHeading Icon={Car} title="Choose your vehicle" sub="Every vehicle includes a professional chauffeur and complimentary Wi-Fi." />
                                            <div className="space-y-3 mt-8">
                                                {VEHICLES.map(({ value, name, pax, tagline, badge, emoji }) => {
                                                    const sel = vehicleType === value;
                                                    return (
                                                        <label
                                                            key={value}
                                                            className={`
                                                                flex items-center gap-4 rounded-2xl px-5 py-4 border cursor-pointer
                                                                transition-all duration-300 group relative overflow-hidden
                                                                ${sel
                                                                    ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10 shadow-lg shadow-[var(--color-gold)]/10"
                                                                    : "border-white/8 bg-white/[0.03] hover:border-white/18 hover:bg-white/[0.06]"
                                                                }
                                                            `}
                                                        >
                                                            <input type="radio" value={value} {...register("vehicleType")} className="sr-only" />

                                                            {sel && (
                                                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold)]/5 to-transparent pointer-events-none" />
                                                            )}

                                                            {/* Emoji icon */}
                                                            <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
                                                                transition-all duration-300
                                                                ${sel ? "bg-[var(--color-gold)]/20" : "bg-white/5 group-hover:bg-white/8"}`}>
                                                                {emoji}
                                                            </div>

                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center flex-wrap gap-2 mb-0.5">
                                                                    <span className={`text-sm font-bold transition-colors
                                                                        ${sel ? "text-white" : "text-white/80"}`}>
                                                                        {name}
                                                                    </span>
                                                                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium border transition-all
                                                                        ${sel
                                                                            ? "bg-[var(--color-gold)]/15 text-[var(--color-gold)] border-[var(--color-gold)]/20"
                                                                            : "bg-white/5 text-white/30 border-white/8"}`}>
                                                                        {pax}
                                                                    </span>
                                                                    {badge && (
                                                                        <span className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full
                                                                                        bg-[var(--color-gold)]/15 text-[var(--color-gold)] font-medium border border-[var(--color-gold)]/20">
                                                                            <Star size={9} className="fill-[var(--color-gold)]" />
                                                                            {badge}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <p className={`text-xs leading-relaxed transition-colors
                                                                    ${sel ? "text-white/55" : "text-white/28"}`}>
                                                                    {tagline}
                                                                </p>
                                                            </div>

                                                            {/* Radio indicator */}
                                                            <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                                                                ${sel ? "border-[var(--color-gold)] bg-[var(--color-gold)]" : "border-white/20"}`}>
                                                                {sel && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                                                                    className="w-2 h-2 rounded-full bg-white" />}
                                                            </div>
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* ── Step 5 – Contact details ───── */}
                                    {step === 5 && (
                                        <div>
                                            <StepHeading Icon={Mail} title="Last step — your details" sub="Our travel experts will reach out with your bespoke itinerary." />
                                            <div className="space-y-5 mt-8">
                                                <FormField label="Full name" id="name" type="text" placeholder="Your full name" register={register("name")} error={errors.name?.message} />
                                                <FormField label="Email address" id="email" type="email" placeholder="you@example.com" register={register("email")} error={errors.email?.message} />
                                                <div>
                                                    <FieldLabel label="Special requests" optional />
                                                    <textarea
                                                        {...register("specialRequests")}
                                                        rows={4}
                                                        placeholder="Dietary needs, special celebrations, accessibility…"
                                                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04]
                                                                   text-white text-sm placeholder:text-white/20 outline-none resize-none
                                                                   focus:border-[var(--color-gold)]/60 focus:bg-white/[0.07] transition-all
                                                                   focus:shadow-[0_0_0_3px_rgba(180,134,60,0.12)]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* ── Navigation bar ────────────────────── */}
                            <div className="flex items-center justify-between px-8 pb-8 sm:px-10">
                                {step > 1 ? (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step - 1)}
                                        className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80
                                                   transition-all duration-200 font-medium px-3 py-2 rounded-lg
                                                   hover:bg-white/[0.05] border border-transparent hover:border-white/8"
                                    >
                                        <ArrowLeft size={14} strokeWidth={2} />
                                        Back
                                    </button>
                                ) : <div />}

                                {step < 5 ? (
                                    <button
                                        type="button"
                                        onClick={() => canProceed() && setStep(step + 1)}
                                        disabled={!canProceed()}
                                        className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold
                                                   text-white transition-all duration-300
                                                   disabled:opacity-30 disabled:cursor-not-allowed
                                                   shadow-lg shadow-[var(--color-gold)]/20
                                                   disabled:shadow-none"
                                        style={{
                                            background: canProceed()
                                                ? "linear-gradient(135deg, var(--color-gold), #d97706)"
                                                : "rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        Continue
                                        <ArrowRight size={14} strokeWidth={2.2} />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={submitting || !canProceed()}
                                        className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold
                                                   text-white transition-all duration-300
                                                   disabled:opacity-30 disabled:cursor-not-allowed
                                                   shadow-lg shadow-[var(--color-gold)]/20"
                                        style={{
                                            background: "linear-gradient(135deg, var(--color-gold), #d97706)",
                                        }}
                                    >
                                        {submitting ? (
                                            <><Loader2 size={14} className="animate-spin" /> Sending…</>
                                        ) : (
                                            <>Submit inquiry <Send size={13} strokeWidth={2} /></>
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Golden bottom-border accent */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent mt-0" />

                    {/* Trust badges below card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center justify-center gap-6 mt-6 flex-wrap"
                    >
                        {[
                            { icon: "🔒", label: "Secure & Private" },
                            { icon: "💬", label: "Reply within 24h" },
                            { icon: "✨", label: "No commitment" },
                        ].map(({ icon, label }) => (
                            <div key={label} className="flex items-center gap-1.5 text-white/28 text-xs">
                                <span className="text-sm">{icon}</span>
                                <span>{label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

/* ─── Small reusable sub-components ──────────────────────── */

function StepHeading({ Icon, title, sub }: { Icon: React.ElementType; title: string; sub: string }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
            <div className="shrink-0 w-11 h-11 rounded-2xl bg-[var(--color-gold)]/12 border border-[var(--color-gold)]/25
                            flex items-center justify-center mt-0.5 shadow-lg shadow-[var(--color-gold)]/10">
                <Icon size={18} className="text-[var(--color-gold)]" strokeWidth={1.8} />
            </div>
            <div>
                <h3 className="!text-white text-xl sm:text-2xl !font-semibold m-0 leading-tight">{title}</h3>
                <p className="text-white/40 text-sm mt-1 leading-relaxed">{sub}</p>
            </div>
        </div>
    );
}

function Tip({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 flex items-center justify-center gap-2 text-sm text-white/45 text-center
                       bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3"
        >
            <Sparkles size={12} className="text-[var(--color-gold)]/70 shrink-0" />
            <span>{children}</span>
        </motion.div>
    );
}

function FieldLabel({ label, optional }: { label: string; optional?: boolean }) {
    return (
        <label className="block text-xs text-white/55 font-semibold tracking-wider uppercase mb-2.5">
            {label}{" "}
            {optional && <span className="text-white/22 font-normal normal-case tracking-normal">(optional)</span>}
        </label>
    );
}

function DateField({ label, id, ...rest }: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div>
            <FieldLabel label={label} />
            <input
                type="date"
                id={id}
                {...rest}
                className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04]
                           text-white text-sm outline-none focus:border-[var(--color-gold)]/60
                           focus:bg-white/[0.07] transition-all [color-scheme:dark]
                           focus:shadow-[0_0_0_3px_rgba(180,134,60,0.12)]"
            />
        </div>
    );
}

function FormField({
    label, id, type, placeholder, register, error,
}: {
    label: string; id: string; type: string;
    placeholder: string; register: object; error?: string;
}) {
    return (
        <div>
            <FieldLabel label={label} />
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                {...register}
                className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.04]
                           text-white text-sm placeholder:text-white/20 outline-none
                           focus:border-[var(--color-gold)]/60 focus:bg-white/[0.07] transition-all
                           focus:shadow-[0_0_0_3px_rgba(180,134,60,0.12)]"
            />
            {error && <p className="text-red-400/90 text-xs mt-1.5 flex items-center gap-1">⚠ {error}</p>}
        </div>
    );
}
