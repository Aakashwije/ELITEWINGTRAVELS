"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, ChevronLeft } from "lucide-react";
import { fleet, FleetVehicle } from "@/lib/data";

const MAIN_CATEGORIES = [
    { id: "Buses", name: "Luxury Buses", image: "/fleet/coach-41.jpg", desc: "5 Vehicle Types" },
    { id: "Vans", name: "Luxury Vans", image: "/fleet/kdh-highroof.jpg", desc: "2 Vehicle Types" },
    { id: "Cars & SUVs", name: "Luxury Cars & SUVs", image: "/fleet/prado.jpg", desc: "Sedans & SUVs" },
];

const SUV_SUBCATEGORIES = [
    { id: "Sedan Cars", name: "Sedan Cars", image: "/fleet/mercedes-c200.jpg", desc: "4 Vehicle Types" },
    { id: "SUVs", name: "SUVs", image: "/fleet/prado.jpg", desc: "2 Vehicle Types" },
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
        <section className="py-20 bg-[var(--color-bg)]">
            <div className="container-luxury">
                {/* Header / Breadcrumbs */}
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-light mb-4 text-[var(--color-dark)]">
                            {activeCategory ? activeCategory : "Our Vehicle Categories"}
                            {activeSubCategory && <span className="text-[var(--color-gold)]"> / {activeSubCategory}</span>}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            {!activeCategory && "Select a category to explore our diverse range of luxury vehicles."}
                            {activeCategory === "Buses" && "Explore our premium selection of coaches and buses."}
                            {activeCategory === "Vans" && "Comfortable and spacious vans for family and small groups."}
                            {activeCategory === "Cars & SUVs" && !activeSubCategory && "Choose between our elegant sedans and rugged SUVs."}
                            {activeSubCategory === "Sedan Cars" && "Experience ultimate luxury with our premium sedan collection."}
                            {activeSubCategory === "SUVs" && "Commanding, capable, and luxurious SUVs for all terrains."}
                        </p>
                    </div>
                    {activeCategory && (
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Back</span>
                        </button>
                    )}
                </div>

                {/* View: Main Categories */}
                {!activeCategory && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {MAIN_CATEGORIES.map((cat) => (
                            <div
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 z-20 transform transition-transform duration-500">
                                    <span className="text-[var(--color-gold)] font-medium mb-2 block">{cat.desc}</span>
                                    <h3 className="text-3xl font-semibold text-white mb-4">{cat.name}</h3>
                                    <div className="flex items-center gap-2 text-white font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        Explore <MoveRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* View: Cars & SUVs Subcategories */}
                {activeCategory === "Cars & SUVs" && !activeSubCategory && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {SUV_SUBCATEGORIES.map((cat) => (
                            <div
                                key={cat.id}
                                onClick={() => setActiveSubCategory(cat.id)}
                                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                                    <span className="text-[var(--color-gold)] font-medium mb-2 block">{cat.desc}</span>
                                    <h3 className="text-3xl font-semibold text-white mb-4">{cat.name}</h3>
                                    <div className="flex items-center gap-2 text-white font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        View Vehicles <MoveRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* View: Vehicle Grid */}
                {(activeVehicles.length > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activeVehicles.map((vehicle) => (
                            <Link href={`/fleet/${vehicle.slug}`} key={vehicle.slug} className="block group">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    {/* Image Container with Hover Details */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                            <h4 className="text-[var(--color-gold)] font-bold mb-4 border-b border-[var(--color-gold)] pb-2">Basic Info</h4>
                                            <ul className="text-white space-y-2 text-sm text-center">
                                                <li><span className="text-gray-400">Capacity:</span> {vehicle.capacity}</li>
                                                {vehicle.features.slice(0, 3).map(f => (
                                                    <li key={f} className="truncate w-full"><span className="text-gray-400">•</span> {f}</li>
                                                ))}
                                                <li className="mt-4 text-[var(--color-gold)] flex items-center gap-1 font-semibold">
                                                    Click for Full Details <MoveRight className="w-4 h-4" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-[var(--color-dark)] group-hover:text-[var(--color-gold)] transition-colors">
                                                {vehicle.name}
                                            </h3>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full whitespace-nowrap">
                                                {vehicle.capacity}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                                            {vehicle.description}
                                        </p>
                                        <div className="flex items-center text-[var(--color-primary)] font-semibold text-sm">
                                            View Vehicle Details <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
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
