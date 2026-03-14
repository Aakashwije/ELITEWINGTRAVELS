import { Metadata } from "next";
import FleetShowcase from "@/components/fleet/FleetShowcase";

export const metadata: Metadata = {
    title: "Luxury Fleet | EliteWing Travels",
    description: "Travel in absolute luxury with EliteWing's premium fleet. Luxury coaches, executive vans, and private sedans for your Sri Lanka journey.",
};

export default function FleetPage() {
    return (
        <>
            {/* Hero */}
            <section
                className="relative h-[70vh] md:h-[80vh] min-h-[450px] md:min-h-[550px] flex items-center justify-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('/Vehicles/our_fleet.png')" }}
            >
                {/* Layered overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 z-0" />

                <div className="relative z-10 text-center container-luxury px-6">
                    {/* Section label */}
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-10 bg-[var(--color-gold)]" />
                        <span className="text-[var(--color-gold)] text-xs tracking-[0.4em] font-semibold uppercase">
                            Premium Transport
                        </span>
                        <div className="h-px w-10 bg-[var(--color-gold)]" />
                    </div>

                    <h1 className="!text-white text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
                        Our{" "}
                        <span className="text-gradient-gold font-bold">Luxury Fleet</span>
                    </h1>

                    <p className="!text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        Every vehicle in our fleet is meticulously maintained and equipped
                        with modern amenities for the ultimate travel comfort.
                    </p>
                    <div className="h-8" />

                    {/* Stats row */}
                    <div className="flex flex-row flex-nowrap justify-center items-center gap-8 md:gap-16">
                        {[
                            { value: "40+", label: "Premium Vehicles" },
                            { value: "100%", label: "Licensed Chauffeurs" },
                            { value: "21", label: "Years Experience" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl font-bold text-[var(--color-gold)]">{stat.value}</div>
                                <div className="text-white/60 text-sm mt-1 tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10" />
            </section>

            {/* Interactive Fleet Showcase */}
            <div className="pb-24 md:pb-28 lg:pb-32">
                <FleetShowcase />
            </div>

            {/* Fixed spacing requested: do not remove */}
            <div className="h-[3cm]" aria-hidden="true" />
        </>
    );
}
