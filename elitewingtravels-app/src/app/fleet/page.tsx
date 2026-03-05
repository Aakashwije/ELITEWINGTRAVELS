import { Metadata } from "next";
import FleetShowcase from "@/components/fleet/FleetShowcase";

export const metadata: Metadata = {
    title: "Luxury Fleet",
    description: "Travel in absolute luxury with EliteWing's premium fleet. Luxury coaches, executive vans, and private sedans for your Sri Lanka journey.",
};

export default function FleetPage() {
    return (
        <>
            {/* Hero */}
            <section
                className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/images/fleet-hero.png)' }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 text-center container-luxury">
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Premium Transport
                    </span>
                    <h1 className="!text-white mb-4">
                        Our <span className="text-gradient-gold">Luxury Fleet</span>
                    </h1>
                    <p className="!text-white/70 text-lg max-w-2xl mx-auto">
                        Every vehicle in our fleet is meticulously maintained and equipped
                        with modern amenities for the ultimate travel comfort.
                    </p>
                </div>
            </section>

            {/* Interactive Fleet Showcase */}
            <FleetShowcase />
        </>
    );
}
