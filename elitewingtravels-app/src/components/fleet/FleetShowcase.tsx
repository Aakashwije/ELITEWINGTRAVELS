"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, ChevronLeft, Bus, CarFront, Van } from "lucide-react";
import { fleet, FleetVehicle } from "@/lib/data";

const MAIN_CATEGORIES = [
    {
        id: "Buses",
        name: "Luxury Buses",
        image: "/Vehicles/Buses/Coaster 29 Seater/TOYOTA COASTER 29 SEATER.png",
        desc: "5 Vehicle Types",
        icon: Bus,
        accentColor: "from-black/40 via-transparent to-transparent",
        tagBg: "bg-amber-600",
    },
    {
        id: "Vans",
        name: "Luxury Vans",
        image: "/Vehicles/Vans/KDH Highroof 14 Seater/KFH HIGHROOF.png",
        desc: "2 Vehicle Types",
        icon: Van,
        accentColor: "from-black/40 via-transparent to-transparent",
        tagBg: "bg-blue-600",
    },
    {
        id: "Cars & SUVs",
        name: "Luxury Cars & SUVs",
        image: "/Vehicles/Cars/SUV/TOYOTA PRADO .png",
        desc: "Sedans & SUVs",
        icon: CarFront,
        accentColor: "from-black/40 via-transparent to-transparent",
        tagBg: "bg-emerald-700",
    },
];

const SUV_SUBCATEGORIES = [
    {
        id: "Sedan Cars",
        name: "Sedan Cars",
        image: "/Vehicles/Cars/Sedan/MERCEDES C200.png",
        desc: "4 Vehicle Types",
        accentColor: "from-black/40 via-transparent to-transparent",
    },
    {
        id: "SUVs",
        name: "SUVs",
        image: "/Vehicles/Cars/SUV/TOYOTA PRADO .png",
        desc: "2 Vehicle Types",
        accentColor: "from-black/40 via-transparent to-transparent",
    },
];

export default function FleetShowcase() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

    // Filter vehicles based on selections
    let activeVehicles: FleetVehicle[] = [];
    if (activeCategory === "Buses" || activeCategory === "Vans") {
        activeVehicles = fleet.filter(v => v.category === activeCategory);
    } else if (activeCategory === "Cars & SUVs" && activeSubCategory) {
        activeVehicles = fleet.filter(v => v.category === "Cars & SUVs" && v.subCategory === activeSubCategory);
    }

    const handleBack = () => {
        if (activeSubCategory) {
            setActiveSubCategory(null);
        } else {
            setActiveCategory(null);
        }
    };

    return (
        <section className="pt-24 pb-32 md:pb-36 bg-gradient-to-b from-[var(--color-bg)] via-slate-50 to-[var(--color-bg)]">
            <div className="container-luxury">
                {/* Header / Breadcrumbs */}
                <div className="mb-14 flex items-center justify-between gap-4">
                    <div>
                        {/* Breadcrumb trail */}
                        {activeCategory && (
                            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3 font-medium tracking-wide">
                                <button
                                    onClick={() => { setActiveCategory(null); setActiveSubCategory(null); }}
                                    className="hover:text-[var(--color-gold)] transition-colors"
                                >
                                    Categories
                                </button>
                                <span>/</span>
                                <span
                                    className={activeSubCategory ? "hover:text-[var(--color-gold)] transition-colors cursor-pointer" : "text-[var(--color-gold)]"}
                                    onClick={() => activeSubCategory && setActiveSubCategory(null)}
                                >
                                    {activeCategory}
                                </span>
                                {activeSubCategory && (
                                    <>
                                        <span>/</span>
                                        <span className="text-[var(--color-gold)]">{activeSubCategory}</span>
                                    </>
                                )}
                            </div>
                        )}
                        <div className="h-11" />
                        <h2 className="text-3xl md:text-5xl font-light text-[var(--color-dark)]">
                            {!activeCategory && (
                                <>Our <span className="text-gradient-gold font-semibold">Vehicle Categories</span></>
                            )}
                            {activeCategory && !activeSubCategory && activeCategory}
                            {activeSubCategory && activeSubCategory}
                        </h2>
                        <div className="h-1" />
                        <p className="text-lg text-gray-500 max-w-2xl mt-3">
                            {!activeCategory && "Select a category to explore our diverse range of premium vehicles."}
                            {activeCategory === "Buses" && "Explore our premium selection of coaches and luxury buses."}
                            {activeCategory === "Vans" && "Comfortable and spacious vans for families and small groups."}
                            {activeCategory === "Cars & SUVs" && !activeSubCategory && "Choose between our elegant sedans and rugged SUVs."}
                            {activeSubCategory === "Sedan Cars" && "Experience ultimate luxury with our premium sedan collection."}
                            {activeSubCategory === "SUVs" && "Commanding, capable, and luxurious SUVs for all terrains."}
                        </p>
                        <div className="h-9" />
                    </div>
                    {activeCategory && (
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)] transition-all duration-300 shadow-sm whitespace-nowrap text-sm font-medium"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Back
                        </button>
                    )}
                </div>

                {/* View: Main Categories */}
                {!activeCategory && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 md:mb-20">
                        {MAIN_CATEGORIES.map((cat, i) => {
                            const Icon = cat.icon;
                            return (
                                <div
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className="group relative h-[480px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />

                                    {/* Overlays */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.accentColor} z-10`} />

                                    {/* Gold shimmer border on hover */}
                                    <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-[var(--color-gold)]/60 transition-all duration-500 z-30 pointer-events-none" />

                                    {/* Top badge */}
                                    <div className="absolute top-5 left-5 z-20">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${cat.tagBg} text-white text-xs font-bold rounded-full shadow-lg`}>
                                            <Icon className="w-3.5 h-3.5" />
                                            {cat.desc}
                                        </span>
                                    </div>

                                    {/* Content at bottom */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                                        <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
                                            {cat.name}
                                        </h3>
                                        <div className="h-0.5 w-12 bg-[var(--color-gold)] mb-4 group-hover:w-24 transition-all duration-500" />
                                        <div className="flex items-center gap-2 text-white/90 font-medium text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-100">
                                            Explore Collection <MoveRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* View: Cars & SUVs Subcategories */}
                {activeCategory === "Cars & SUVs" && !activeSubCategory && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                        {SUV_SUBCATEGORIES.map((cat) => (
                            <div
                                key={cat.id}
                                onClick={() => setActiveSubCategory(cat.id)}
                                className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${cat.accentColor} z-10`} />
                                <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-[var(--color-gold)]/60 transition-all duration-500 z-30 pointer-events-none" />

                                <div className="absolute top-5 left-5 z-20">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-gold)] text-white text-xs font-bold rounded-full shadow-lg">
                                        {cat.desc}
                                    </span>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                                    <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">{cat.name}</h3>
                                    <div className="h-0.5 w-12 bg-[var(--color-gold)] mb-4 group-hover:w-20 transition-all duration-500" />
                                    <div className="flex items-center gap-2 text-white/90 font-medium text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-100">
                                        View Vehicles <MoveRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* View: Vehicle Grid */}
                {activeVehicles.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {activeVehicles.map((vehicle) => (
                            <Link href={`/fleet/${vehicle.slug}`} key={vehicle.slug} className="block group">
                                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100/80 h-full flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden bg-gray-50">
                                        <Image
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            fill
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm">
                                            <h4 className="text-[var(--color-gold)] font-bold mb-3 border-b border-[var(--color-gold)]/50 pb-2 text-sm tracking-wider uppercase">Quick Info</h4>
                                            <ul className="text-white space-y-2 text-sm text-center">
                                                <li><span className="text-gray-400">Capacity: </span>{vehicle.capacity}</li>
                                                {vehicle.features.slice(0, 3).map(f => (
                                                    <li key={f} className="truncate w-full text-gray-300"><span className="text-[var(--color-gold)] mr-1">•</span>{f}</li>
                                                ))}
                                                <li className="mt-4 text-[var(--color-gold)] flex items-center gap-1 font-semibold text-xs">
                                                    Click for Full Details <MoveRight className="w-3 h-3" />
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Category badge */}
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
                                                {vehicle.capacity}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-[var(--color-dark)] group-hover:text-[var(--color-gold)] transition-colors leading-tight">
                                                {vehicle.name}
                                            </h3>
                                        </div>
                                        <div className="h-0.5 w-8 bg-[var(--color-gold)]/30 group-hover:w-16 group-hover:bg-[var(--color-gold)] transition-all duration-400 mb-3" />
                                        <p className="text-gray-500 text-sm line-clamp-2 mb-5 flex-grow leading-relaxed">
                                            {vehicle.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {vehicle.features.slice(0, 3).map((f) => (
                                                <span
                                                    key={f}
                                                    className="px-2.5 py-1 bg-amber-50 text-amber-800 text-xs rounded-lg font-medium border border-amber-100"
                                                >
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center text-[var(--color-gold)] font-semibold text-sm pt-3 border-t border-gray-100">
                                            View Full Details <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
