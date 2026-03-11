"use client";

import { useRef, useState } from "react";
import Image from "next/image";
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
    { value: "1-2", range: "1 – 2", tag: "Just us", Icon: Heart, hint: "Perfect for couples & solo" },
    { value: "3-5", range: "3 – 5", tag: "Family", Icon: Users, hint: "Ideal for families" },
    { value: "6-10", range: "6 – 10", tag: "Friends", Icon: Users2, hint: "Small group adventure" },
    { value: "11-20", range: "11 – 20", tag: "Large group", Icon: Briefcase, hint: "Extended families & tours" },
    { value: "21-30", range: "21 – 30", tag: "Corporate", Icon: Globe, hint: "Corporate & incentive trips" },
    { value: "30+", range: "30+", tag: "Grand tour", Icon: PartyPopper, hint: "Big events & celebrations" },
];

/* ─── Destination options ─────────────────────────────────── */
const DESTINATIONS = [
    { name: "Sigiriya", region: "Cultural Triangle" },
    { name: "Kandy", region: "Hill Country" },
    { name: "Galle", region: "Southern Coast" },
    { name: "Ella", region: "Highlands" },
    { name: "Nuwara Eliya", region: "Tea Country" },
    { name: "Polonnaruwa", region: "Ancient Kingdom" },
    { name: "Anuradhapura", region: "Sacred City" },
    { name: "Bentota", region: "West Coast" },
    { name: "Mirissa", region: "Whale Watching" },
    { name: "Yala", region: "Wildlife" },
];

/* ─── Vehicle options ─────────────────────────────────────── */
const VEHICLE_CATEGORIES = [
    {
        id: "sedan-suv",
        name: "Private Sedan & SUV",
        icon: Car,
        tagline: "Sleek, air-conditioned comfort with a professional chauffeur.",
        options: [
            { value: "private-sedan", name: "Private Sedan", pax: "Max 2 passengers", badge: "Most popular" },
            { value: "suv", name: "Luxury SUV", pax: "3 – 4 passengers", badge: "" },
        ],
    },
    {
        id: "van",
        name: "Executive Van",
        icon: Users2,
        tagline: "Spacious interior, reclining seats & onboard Wi-Fi.",
        options: [
            { value: "kdh-flatroof", name: "KDH Flatroof", pax: "Max 6 passengers", badge: "" },
            { value: "kdh-highroof", name: "KDH Highroof", pax: "Max 8 passengers", badge: "" },
        ],
    },
    {
        id: "coach",
        name: "Luxury Coach & Bus",
        icon: Globe,
        tagline: "First-class touring coach for large groups & corporate travel.",
        options: [
            { value: "mini-coach", name: "Mini Coach", pax: "Max 14 passengers", badge: "" },
            { value: "long-coach", name: "Long Coach", pax: "Max 16 passengers", badge: "" },
            { value: "luxury-coach", name: "Luxury Coach", pax: "Max 25 passengers", badge: "" },
            { value: "premium-coach", name: "Premium Coach", pax: "Max 30 passengers", badge: "" },
            { value: "grand-coach", name: "Grand Coach", pax: "Max 40 passengers", badge: "" },
        ],
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
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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
            <section className="relative pt-24 pb-[4cm] overflow-hidden" id="tour-builder">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/design your dream journey.png"
                        alt="Design Your Dream Journey"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/80 via-transparent to-[var(--color-primary)]/80" />
                </div>

                <div className="container-luxury relative z-10 text-center">
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
                        <h2 className="!text-white mb-3 text-3xl sm:text-4xl">Your journey begins here.</h2>
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
            className="relative bg-[var(--color-primary)] pt-24 pb-0 overflow-hidden"
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/design your dream journey.png"
                    alt="Design Your Dream Journey"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/80 via-transparent to-[var(--color-primary)]/80" />
            </div>

            <div className="container-luxury relative z-10 flex flex-col items-center">

                {/* ── Header ───────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20 sm:mb-32"
                >
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Private Tour Builder
                    </span>
                    <h2 className="!text-white mt-1 mb-4">
                        Design Your{" "}
                        <span className="text-gradient-gold">Dream Journey</span>
                    </h2>
                    <p className="!text-white/55 max-w-md mx-auto text-base">
                        Tell us about your perfect trip and we&apos;ll craft a bespoke
                        itinerary tailored just for you.
                    </p>
                </motion.div>

                {/* ── Step bar ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="flex items-start justify-center gap-2 sm:gap-4 mb-20 sm:mb-24"
                >
                    {STEPS.map(({ id, label, Icon }, i) => {
                        const done = step > id;
                        const active = step === id;
                        return (
                            <div key={id} className="flex items-center">
                                <div className="flex flex-col items-center gap-1.5">
                                    <div
                                        className={`
                                            w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                                            border-2 transition-all duration-400
                                            ${done
                                                ? "bg-[var(--color-gold)] border-[var(--color-gold)]"
                                                : active
                                                    ? "bg-transparent border-[var(--color-gold)] ring-4 ring-[var(--color-gold)]/20"
                                                    : "bg-transparent border-white/15"
                                            }
                                        `}
                                    >
                                        {done
                                            ? <Check size={14} className="text-white" strokeWidth={2.5} />
                                            : <Icon size={14} className={active ? "text-[var(--color-gold)]" : "text-white/30"} strokeWidth={1.8} />
                                        }
                                    </div>
                                    <span className={`text-[11px] font-medium hidden sm:block transition-colors duration-300
                                        ${done || active ? "text-white/80" : "text-white/25"}`}>
                                        {label}
                                    </span>
                                </div>

                                {/* Connector */}
                                {i < STEPS.length - 1 && (
                                    <div className="mx-1 sm:mx-2 mb-5 w-8 sm:w-14 h-px bg-white/10 relative overflow-hidden">
                                        <motion.div
                                            animate={{ scaleX: step > id ? 1 : 0 }}
                                            initial={{ scaleX: 0 }}
                                            transition={{ duration: 0.4 }}
                                            style={{ originX: 0 }}
                                            className="absolute inset-0 bg-[var(--color-gold)]"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </motion.div>

                {/* ── Card ─────────────────────────────────────────── */}
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl w-full mx-auto">
                    <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -18 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="rounded-3xl border border-white/10 bg-white/[0.055] backdrop-blur-lg
                                       p-7 sm:p-10 shadow-xl shadow-black/20"
                        >

                            {/* ── Step 1 – Travelers ───────────────── */}
                            {step === 1 && (
                                <div>
                                    <StepHeading Icon={Users} title="How many travelers?" sub="We'll match your group to the ideal vehicle & accommodations." />
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10">
                                        {TRAVELER_OPTIONS.map(({ value, range, tag, Icon: TIcon, hint }) => {
                                            const sel = travelers === value;
                                            return (
                                                <label
                                                    key={value}
                                                    className={`
                                                        relative cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-250 border
                                                        flex flex-col items-center text-center
                                                        ${sel
                                                            ? "border-[var(--color-gold)] bg-[var(--color-gold)]/12 shadow-md shadow-[var(--color-gold)]/15"
                                                            : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
                                                        }
                                                    `}
                                                >
                                                    <input type="radio" value={value} {...register("travelers")} className="sr-only" />

                                                    {/* Check badge */}
                                                    {sel && (
                                                        <motion.span
                                                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                                                            className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full
                                                                       bg-[var(--color-gold)] flex items-center justify-center"
                                                        >
                                                            <Check size={10} className="text-white" strokeWidth={3} />
                                                        </motion.span>
                                                    )}

                                                    <TIcon
                                                        size={22}
                                                        strokeWidth={1.6}
                                                        className={`mb-3 transition-colors duration-250
                                                            ${sel ? "text-[var(--color-gold)]" : "text-white/35"}`}
                                                    />
                                                    <p className={`text-xl font-bold leading-none mb-0.5 transition-colors
                                                        ${sel ? "text-white" : "text-white/75"}`}>
                                                        {range}
                                                    </p>
                                                    <p className={`text-[11px] font-semibold uppercase tracking-widest mb-2 transition-colors
                                                        ${sel ? "text-[var(--color-gold)]" : "text-white/30"}`}>
                                                        {tag}
                                                    </p>
                                                    <p className={`text-[11px] leading-tight transition-colors
                                                        ${sel ? "text-white/60" : "text-white/25"}`}>
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

                            {/* ── Step 2 – Dates ───────────────────── */}
                            {step === 2 && (
                                <div>
                                    <StepHeading Icon={CalendarDays} title="When are you traveling?" sub="Choose your dates and we'll plan every day to perfection." />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 sm:mt-10">
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

                            {/* ── Step 3 – Destinations ────────────── */}
                            {step === 3 && (
                                <div>
                                    <StepHeading Icon={MapPin} title="Where would you like to go?" sub="Pick any destinations that spark your interest — we'll weave them into a seamless route." />
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10">
                                        {DESTINATIONS.map(({ name, region }) => {
                                            const sel = selectedDests.includes(name);
                                            return (
                                                <button
                                                    key={name}
                                                    type="button"
                                                    onClick={() => toggleDest(name)}
                                                    className={`
                                                        relative text-center rounded-xl px-4 py-4 sm:py-5 border transition-all duration-250 cursor-pointer group
                                                        ${sel
                                                            ? "border-[var(--color-gold)] bg-[var(--color-gold)]/12"
                                                            : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
                                                        }
                                                    `}
                                                >
                                                    <MapPin
                                                        size={13}
                                                        strokeWidth={2}
                                                        className={`absolute top-3 right-3 transition-colors
                                                            ${sel ? "text-[var(--color-gold)]" : "text-white/10 group-hover:text-white/25"}`}
                                                    />
                                                    <p className={`text-sm font-semibold leading-tight transition-colors
                                                        ${sel ? "text-white" : "text-white/70"}`}>
                                                        {name}
                                                    </p>
                                                    <p className={`text-[11px] mt-0.5 transition-colors
                                                        ${sel ? "text-[var(--color-gold)]/70" : "text-white/25"}`}>
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

                            {/* ── Step 4 – Vehicle ─────────────────── */}
                            {step === 4 && (
                                <div>
                                    <StepHeading Icon={Car} title="Choose your vehicle" sub="Every vehicle includes a professional chauffeur and complimentary Wi-Fi." />
                                    <div className="space-y-5 sm:space-y-6 mt-8 sm:mt-10">
                                        {VEHICLE_CATEGORIES.map((cat) => {
                                            const isCatSelected = selectedCategory === cat.id;
                                            return (
                                                <div key={cat.id} className="space-y-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedCategory(isCatSelected ? null : cat.id)}
                                                        className={`
                                                            w-full flex flex-col items-center gap-3 rounded-2xl px-5 py-7 sm:py-8 border cursor-pointer
                                                            transition-all duration-300 relative overflow-hidden group text-center
                                                            ${isCatSelected
                                                                ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10 shadow-lg shadow-[var(--color-gold)]/5"
                                                                : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
                                                            }
                                                        `}
                                                    >
                                                        <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500
                                                            ${isCatSelected ? "bg-[var(--color-gold)] text-white" : "bg-white/5 text-white/30 group-hover:text-white/50"}`}>
                                                            <cat.icon size={24} strokeWidth={1.5} />
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="flex flex-col items-center gap-1">
                                                                <span className={`text-base font-bold transition-colors
                                                                    ${isCatSelected ? "text-white" : "text-white/80"}`}>
                                                                    {cat.name}
                                                                </span>
                                                                <ArrowRight size={16} className={`transition-all duration-400
                                                                    ${isCatSelected ? "rotate-90 text-[var(--color-gold)]" : "text-white/10 group-hover:text-white/25"}`} />
                                                            </div>
                                                            <p className={`text-xs mt-1 leading-relaxed transition-colors max-w-[200px] mx-auto
                                                                ${isCatSelected ? "text-white/60" : "text-white/30"}`}>
                                                                {cat.tagline}
                                                            </p>
                                                        </div>
                                                    </button>

                                                    <AnimatePresence>
                                                        {isCatSelected && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                                                className="overflow-hidden bg-white/[0.02] rounded-2xl border border-white/5"
                                                            >
                                                                <div className="p-3 space-y-2">
                                                                    {cat.options.map((opt) => {
                                                                        const isSelected = vehicleType === opt.value;
                                                                        return (
                                                                            <label
                                                                                key={opt.value}
                                                                                className={`
                                                                                    flex flex-col items-center gap-2 rounded-xl px-4 py-4 border cursor-pointer
                                                                                    transition-all duration-200 text-center
                                                                                    ${isSelected
                                                                                        ? "border-[var(--color-gold)]/40 bg-[var(--color-gold)]/15"
                                                                                        : "border-transparent bg-transparent hover:bg-white/5"
                                                                                    }
                                                                                `}
                                                                            >
                                                                                <input type="radio" value={opt.value} {...register("vehicleType")} className="sr-only" />
                                                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all mb-1
                                                                                    ${isSelected ? "border-[var(--color-gold)] bg-[var(--color-gold)]" : "border-white/20"}`}>
                                                                                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex flex-col items-center gap-1">
                                                                                        <span className={`text-sm font-semibold ${isSelected ? "text-white" : "text-white/70"}`}>
                                                                                            {opt.name}
                                                                                        </span>
                                                                                        <div className="flex items-center gap-2">
                                                                                            <span className={`text-[10px] uppercase tracking-wider font-bold ${isSelected ? "text-[var(--color-gold)]" : "text-white/25"}`}>
                                                                                                {opt.pax}
                                                                                            </span>
                                                                                            {opt.badge && (
                                                                                                <span className="text-[10px] bg-[var(--color-gold)]/20 text-[var(--color-gold)] px-1.5 py-0.5 rounded leading-none font-bold">
                                                                                                    {opt.badge}
                                                                                                </span>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* ── Step 5 – Contact details ──────────── */}
                            {step === 5 && (
                                <div>
                                    <StepHeading Icon={Mail} title="Last step — your details" sub="Our travel experts will reach out with your bespoke itinerary." />
                                    <div className="space-y-6 mt-8 sm:mt-10">
                                        <FormField label="Full name" id="name" type="text" placeholder="Your full name" register={register("name")} error={errors.name?.message} />
                                        <FormField label="Email address" id="email" type="email" placeholder="you@example.com" register={register("email")} error={errors.email?.message} />
                                        <div>
                                            <FieldLabel label="Special requests" optional />
                                            <textarea
                                                {...register("specialRequests")}
                                                rows={4}
                                                placeholder="Dietary needs, special celebrations, accessibility…"
                                                className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/[0.055]
                                                           text-white text-sm placeholder:text-white/25 outline-none resize-none text-center
                                                           focus:border-[var(--color-gold)] focus:bg-white/[0.08] transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* ── Navigation bar ───────────────────────────── */}
                    <div className="relative z-30 mt-32 sm:mt-44 mb-0 h-16 isolate flex flex-col items-center">
                        <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-bold mb-8 pointer-events-none">
                            Step {step} of {STEPS.length}
                        </span>

                        <div className="w-full relative flex items-center justify-center">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sm text-white/50 hover:text-white/90
                                               transition-colors duration-200 font-medium px-1 py-2"
                                >
                                    <ArrowLeft size={15} strokeWidth={2} />
                                    Back
                                </button>
                            ) : null}

                            {step < 5 ? (
                                <button
                                    type="button"
                                    onClick={() => canProceed() && setStep(step + 1)}
                                    disabled={!canProceed()}
                                    className="btn-primary
                                               !bg-gradient-to-r !from-[var(--color-gold)] !to-amber-500 !border-transparent !text-white
                                               !py-3.5 !px-8 disabled:opacity-35 disabled:cursor-not-allowed
                                               shadow-[0_12px_34px_rgba(198,167,94,0.5)] hover:shadow-[0_16px_40px_rgba(198,167,94,0.65)]
                                               hover:!from-amber-500 hover:!to-[var(--color-gold)] hover:scale-[1.03]"
                                >
                                    Continue
                                    <ArrowRight size={15} strokeWidth={2.2} />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={submitting || !canProceed()}
                                    className="btn-primary
                                               !bg-gradient-to-r !from-[var(--color-gold)] !to-amber-500 !border-transparent !text-white
                                               !py-3.5 !px-8 disabled:opacity-35 disabled:cursor-not-allowed
                                               shadow-[0_12px_34px_rgba(198,167,94,0.5)] hover:shadow-[0_16px_40px_rgba(198,167,94,0.65)]
                                               hover:!from-amber-500 hover:!to-[var(--color-gold)] hover:scale-[1.03]"
                                >
                                    {submitting ? (
                                        <><Loader2 size={15} className="animate-spin" /> Sending…</>
                                    ) : (
                                        <>Submit inquiry <Send size={14} strokeWidth={2} /></>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="h-32" aria-hidden="true" />
                </form>
            </div>
        </section>
    );
}

/* ─── Small reusable sub-components ──────────────────────── */

function StepHeading({ Icon, title, sub }: { Icon: React.ElementType; title: string; sub: string }) {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/30
                            flex items-center justify-center">
                <Icon size={22} className="text-[var(--color-gold)]" strokeWidth={1.8} />
            </div>
            <div>
                <h3 className="!text-white text-xl sm:text-2xl !font-semibold m-0 leading-tight">{title}</h3>
                <p className="text-white/45 text-sm mt-2 leading-relaxed max-w-md mx-auto">{sub}</p>
            </div>
        </div>
    );
}

function Tip({ children }: { children: React.ReactNode }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-sm text-white/50 text-center"
        >
            {children}
        </motion.p>
    );
}

function FieldLabel({ label, optional }: { label: string; optional?: boolean }) {
    return (
        <label className="block text-sm text-white/60 font-medium mb-2 text-center">
            {label}{" "}
            {optional && <span className="text-white/25 font-normal">(optional)</span>}
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
                className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/[0.055]
                           text-white text-sm outline-none focus:border-[var(--color-gold)] text-center
                           focus:bg-white/[0.08] transition-all [color-scheme:dark]"
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
                className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/[0.055]
                           text-white text-sm placeholder:text-white/25 outline-none text-center
                           focus:border-[var(--color-gold)] focus:bg-white/[0.08] transition-all"
            />
            {error && <p className="text-red-400 text-xs mt-1.5 text-center">{error}</p>}
        </div>
    );
}
