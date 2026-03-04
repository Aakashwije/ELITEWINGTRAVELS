// ===== SITE DATA =====

export const siteConfig = {
    name: "EliteWing Travels",
    tagline: "Experience Sri Lanka Like Never Before",
    subTagline: "Private Tours. Luxury Fleet. Authentic Hospitality.",
    phone: "+94 77 123 4567",
    email: "info@elitewingtravels.com",
    whatsapp: "https://wa.me/94771234567",
    address: "42 Galle Road, Colombo 03, Sri Lanka",
    established: 2005,
    social: {
        facebook: "https://facebook.com/elitewingtravels",
        instagram: "https://instagram.com/elitewingtravels",
        youtube: "https://youtube.com/elitewingtravels",
        tripadvisor: "https://tripadvisor.com/elitewingtravels",
    },
};

export const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Fleet", href: "/fleet" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const stats = [
    { value: 10000, suffix: "+", label: "Happy Travelers" },
    { value: 500, suffix: "+", label: "Tours Completed Annually" },
    { value: 100, suffix: "%", label: "Licensed Chauffeurs" },
    { value: 21, suffix: "", label: "Years of Excellence" },
];

export interface Destination {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    image: string;
    bestTime: string;
    highlights: string[];
    hotels: string[];
    gallery: string[];
}

export const destinations: Destination[] = [
    {
        slug: "sigiriya",
        name: "Sigiriya",
        tagline: "The Lion Rock Fortress",
        description:
            "Rising dramatically from the central plains, the ancient rock citadel of Sigiriya is a UNESCO World Heritage Site and one of Sri Lanka's most iconic landmarks. Marvel at the ancient frescoes, ascend the lion's stairway, and explore the sprawling royal gardens.",
        image: "/destinations/sigiriya.jpg",
        bestTime: "January - April",
        highlights: [
            "Lion Rock Fortress",
            "Ancient Frescoes",
            "Royal Gardens",
            "Pidurangala Rock",
            "Village Safari",
        ],
        hotels: [
            "Jetwing Vil Uyana",
            "Water Garden Sigiriya",
            "Aliya Resort & Spa",
        ],
        gallery: [
            "/destinations/sigiriya.jpg",
            "/destinations/sigiriya-2.jpg",
            "/destinations/sigiriya-3.jpg",
        ],
    },
    {
        slug: "galle",
        name: "Galle",
        tagline: "Colonial Charm Meets Coastal Beauty",
        description:
            "The historic Galle Fort, a UNESCO World Heritage Site, blends Dutch colonial architecture with vibrant Sri Lankan culture. Wander cobblestone streets lined with boutique shops, art galleries, and oceanfront cafés in this enchanting coastal gem.",
        image: "/destinations/galle.jpg",
        bestTime: "December - April",
        highlights: [
            "Galle Fort",
            "Dutch Reformed Church",
            "Maritime Museum",
            "Unawatuna Beach",
            "Whale Watching",
        ],
        hotels: [
            "Amangalla",
            "Fort Bazaar",
            "KK Beach",
        ],
        gallery: [
            "/destinations/galle.jpg",
            "/destinations/galle-2.jpg",
            "/destinations/galle-3.jpg",
        ],
    },
    {
        slug: "bentota",
        name: "Bentota",
        tagline: "Golden Sands & Turquoise Waters",
        description:
            "Bentota is Sri Lanka's premier beach resort destination, offering pristine golden sands, world-class water sports, and luxurious beachfront villas. A paradise for romance and relaxation on the southwestern coast.",
        image: "/destinations/bentota.jpg",
        bestTime: "November - April",
        highlights: [
            "Bentota Beach",
            "Brief Garden",
            "Madu River Safari",
            "Turtle Hatchery",
            "Water Sports",
        ],
        hotels: [
            "Taj Bentota Resort & Spa",
            "Saman Villas",
            "Vivanta by Taj",
        ],
        gallery: [
            "/destinations/bentota.jpg",
            "/destinations/bentota-2.jpg",
            "/destinations/bentota-3.jpg",
        ],
    },
    {
        slug: "polonnaruwa",
        name: "Polonnaruwa",
        tagline: "The Medieval Capital",
        description:
            "Once the thriving capital of the island, Polonnaruwa is a treasure trove of ancient ruins, sacred temples, and stunning Buddha statues. This UNESCO World Heritage Site showcases the pinnacle of ancient Sinhalese civilization.",
        image: "/destinations/polonnaruwa.jpg",
        bestTime: "May - September",
        highlights: [
            "Gal Vihara",
            "Royal Palace",
            "Parakrama Samudra",
            "Vatadage",
            "Lankatilaka",
        ],
        hotels: [
            "The Lake Polonnaruwa",
            "Deer Park Hotel",
            "Fresco Water Villa",
        ],
        gallery: [
            "/destinations/polonnaruwa.jpg",
            "/destinations/polonnaruwa-2.jpg",
            "/destinations/polonnaruwa-3.jpg",
        ],
    },
];

export interface Tour {
    slug: string;
    name: string;
    duration: string;
    price: string;
    tagline: string;
    description: string;
    image: string;
    highlights: string[];
    itinerary: { day: number; title: string; description: string }[];
    includes: string[];
    excludes: string[];
    faq: { question: string; answer: string }[];
    gallery: string[];
}

export const tours: Tour[] = [
    {
        slug: "luxury-cultural-heritage",
        name: "Luxury Cultural Heritage Journey",
        duration: "7 Days / 6 Nights",
        price: "From $2,499",
        tagline: "Discover Ancient Kingdoms & Sacred Temples",
        description:
            "Embark on an immersive journey through Sri Lanka's cultural triangle. Explore ancient kingdoms, sacred temples, and UNESCO World Heritage Sites while traveling in absolute luxury and comfort.",
        image: "/tours/cultural-heritage.jpg",
        highlights: [
            "Sigiriya Rock Fortress",
            "Temple of the Tooth",
            "Dambulla Cave Temple",
            "Polonnaruwa Ancient City",
            "Minneriya Safari",
        ],
        itinerary: [
            { day: 1, title: "Arrival in Colombo", description: "Airport pickup in luxury vehicle. Transfer to Colombo 5-star hotel. Welcome dinner at the Gallery Café." },
            { day: 2, title: "Colombo to Anuradhapura", description: "Drive to the ancient city of Anuradhapura. Visit Sri Maha Bodhi and Ruwanwelisaya Stupa." },
            { day: 3, title: "Anuradhapura to Sigiriya", description: "Morning visit to Aukana Buddha. Afternoon ascent of Sigiriya Rock Fortress." },
            { day: 4, title: "Sigiriya & Polonnaruwa", description: "Full day exploring Polonnaruwa ancient ruins. Evening Minneriya elephant safari." },
            { day: 5, title: "Dambulla to Kandy", description: "Visit Dambulla Cave Temple. Scenic drive to Kandy through spice gardens." },
            { day: 6, title: "Kandy City Tour", description: "Temple of the Tooth, Royal Botanical Gardens, Kandy cultural show." },
            { day: 7, title: "Departure", description: "Scenic train ride to Colombo. Airport transfer." },
        ],
        includes: [
            "Luxury vehicle with professional chauffeur",
            "5-star hotel accommodations",
            "Daily breakfast & select dinners",
            "All entrance fees & activities",
            "English-speaking guide",
            "Airport transfers",
        ],
        excludes: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Meals not mentioned",
            "Tips & gratuities",
        ],
        faq: [
            { question: "What is the best time for this tour?", answer: "January to April offers the best weather for the Cultural Triangle region." },
            { question: "Can the itinerary be customized?", answer: "Absolutely! All tours can be tailored to your preferences." },
            { question: "What is the group size?", answer: "This is a private tour, exclusively for your party." },
        ],
        gallery: ["/tours/cultural-1.jpg", "/tours/cultural-2.jpg", "/tours/cultural-3.jpg"],
    },
    {
        slug: "wildlife-beach-escape",
        name: "Private Wildlife & Beach Escape",
        duration: "10 Days / 9 Nights",
        price: "From $3,299",
        tagline: "Safari Adventures & Coastal Paradise",
        description:
            "Combine thrilling wildlife encounters at Yala National Park with blissful beach relaxation along Sri Lanka's stunning southern coast. The perfect balance of adventure and luxury.",
        image: "/tours/wildlife-beach.jpg",
        highlights: [
            "Yala National Park Safari",
            "Whale Watching in Mirissa",
            "Galle Fort Heritage Walk",
            "Unawatuna Beach",
            "Udawalawe Elephant Transit",
        ],
        itinerary: [
            { day: 1, title: "Arrival in Colombo", description: "Luxury airport transfer. Evening at Galle Face Hotel." },
            { day: 2, title: "Colombo to Udawalawe", description: "Drive south. Visit Elephant Transit Home. Evening safari." },
            { day: 3, title: "Udawalawe Safari", description: "Full-day jeep safari in Udawalawe National Park." },
            { day: 4, title: "Udawalawe to Yala", description: "Transfer to Yala. Afternoon leopard-tracking safari." },
            { day: 5, title: "Yala Safari", description: "Dawn and dusk safaris. Search for leopards, elephants, and sloth bears." },
            { day: 6, title: "Yala to Mirissa", description: "Coastal drive to Mirissa. Relax at luxury beach villa." },
            { day: 7, title: "Whale Watching", description: "Early morning whale watching excursion. Afternoon free." },
            { day: 8, title: "Mirissa to Galle", description: "Explore Galle Fort. Boutique shopping and dining." },
            { day: 9, title: "Unawatuna Beach Day", description: "Full day at one of Asia's best beaches." },
            { day: 10, title: "Departure", description: "Coastal highway to airport. Departure." },
        ],
        includes: [
            "Luxury 4x4 safari vehicles",
            "Boutique hotel accommodations",
            "All safari park fees",
            "Whale watching excursion",
            "Professional naturalist guide",
            "All transfers",
        ],
        excludes: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Optional activities",
        ],
        faq: [
            { question: "Will we definitely see leopards?", answer: "Yala has the highest density of leopards in the world. While sightings can't be guaranteed, your chances are excellent." },
            { question: "Is the whale watching seasonal?", answer: "Blue whale watching in Mirissa runs from November to April." },
        ],
        gallery: ["/tours/wildlife-1.jpg", "/tours/wildlife-2.jpg", "/tours/wildlife-3.jpg"],
    },
    {
        slug: "romantic-honeymoon",
        name: "Romantic Honeymoon in Sri Lanka",
        duration: "8 Days / 7 Nights",
        price: "From $3,799",
        tagline: "Love, Luxury & Tropical Bliss",
        description:
            "Create unforgettable memories with your loved one on this romantic journey through Sri Lanka's most enchanting destinations. From misty hill country to sun-kissed beaches, every moment is curated for romance.",
        image: "/tours/honeymoon.jpg",
        highlights: [
            "Private Tea Estate Stay",
            "Scenic Train Ride",
            "Couples Spa Retreat",
            "Candlelight Beach Dinner",
            "Hot Air Balloon – Sigiriya",
        ],
        itinerary: [
            { day: 1, title: "Arrival & Welcome", description: "Airport VIP welcome. Luxury transfer to Colombo. Rooftop welcome dinner." },
            { day: 2, title: "Colombo to Kandy", description: "Scenic drive to Kandy. Couples spa treatment. Traditional dance show." },
            { day: 3, title: "Kandy to Nuwara Eliya", description: "Tea estate tour. Private tea tasting. Stay at colonial-era boutique hotel." },
            { day: 4, title: "Hill Country", description: "Scenic train ride through tea plantations. Waterfall visit. Evening bonfire." },
            { day: 5, title: "Ella", description: "Nine Arches Bridge sunrise. Ella Rock hike. Cooking class together." },
            { day: 6, title: "Ella to Bentota", description: "Transfer to the beach. Luxury beachfront villa check-in." },
            { day: 7, title: "Beach Romance", description: "Couples spa. Water sports. Private candlelight dinner on the beach." },
            { day: 8, title: "Departure", description: "Leisurely morning. Airport transfer." },
        ],
        includes: [
            "Luxury private vehicle",
            "5-star & boutique accommodations",
            "Couples spa treatments",
            "Private candlelight dinners",
            "Scenic train tickets (first class)",
            "All transfers & activities",
        ],
        excludes: [
            "International flights",
            "Travel insurance",
            "Personal shopping",
            "Optional hot air balloon",
        ],
        faq: [
            { question: "Can you arrange special surprises?", answer: "We love making honeymoons extra special. Room decorations, cakes, and surprise activities can all be arranged." },
            { question: "What is the best season for a honeymoon?", answer: "December to March offers the best weather across most regions." },
        ],
        gallery: ["/tours/honeymoon-1.jpg", "/tours/honeymoon-2.jpg", "/tours/honeymoon-3.jpg"],
    },
];

export interface FleetVehicle {
    slug: string;
    name: string;
    category: string;
    capacity: string;
    image: string;
    features: string[];
    safety: string[];
    description: string;
    gallery: string[];
}

export const fleet: FleetVehicle[] = [
    {
        slug: "luxury-coach",
        name: "Premium Luxury Coach",
        category: "Luxury Coaches",
        capacity: "24-45 Passengers",
        image: "/fleet/luxury-coach.jpg",
        features: [
            "Reclining leather seats",
            "Air conditioning with individual controls",
            "On-board WiFi & entertainment",
            "Panoramic windows",
            "Refrigerator & refreshments",
            "USB charging ports",
        ],
        safety: [
            "ABS braking system",
            "GPS tracking",
            "First aid kit",
            "Fire extinguisher",
            "Licensed professional driver",
        ],
        description:
            "Our premium luxury coaches offer the ultimate in group travel comfort. Perfect for large parties, corporate retreats, and extended tours across Sri Lanka.",
        gallery: ["/fleet/coach-1.jpg", "/fleet/coach-2.jpg"],
    },
    {
        slug: "executive-van",
        name: "Executive KDH Van",
        category: "Executive Vans",
        capacity: "6-14 Passengers",
        image: "/fleet/executive-van.jpg",
        features: [
            "Premium interior",
            "Air conditioning",
            "Large luggage space",
            "Entertainment system",
            "Tinted privacy windows",
            "Individual reading lights",
        ],
        safety: [
            "Safety belts all seats",
            "GPS tracking",
            "Regular maintenance records",
            "Comprehensive insurance",
            "Licensed chauffeur",
        ],
        description:
            "Our executive vans are the perfect choice for family groups and small parties. Spacious, comfortable, and equipped with modern amenities for a smooth journey.",
        gallery: ["/fleet/van-1.jpg", "/fleet/van-2.jpg"],
    },
    {
        slug: "private-sedan",
        name: "Mercedes-Benz E-Class",
        category: "Private Sedans",
        capacity: "1-3 Passengers",
        image: "/fleet/sedan.jpg",
        features: [
            "Premium leather interior",
            "Climate control",
            "Bose sound system",
            "Rear seat entertainment",
            "Complimentary water & refreshments",
            "USB-C & wireless charging",
        ],
        safety: [
            "Advanced driver assist",
            "360° cameras",
            "GPS tracking",
            "Pre-trip inspection",
            "Executive chauffeur",
        ],
        description:
            "Experience Sri Lanka in absolute luxury with our Mercedes-Benz E-Class sedan. Ideal for couples and discerning solo travelers seeking the finest travel experience.",
        gallery: ["/fleet/sedan-1.jpg", "/fleet/sedan-2.jpg"],
    },
];

export const testimonials = [
    {
        name: "Emma & James Thompson",
        country: "United Kingdom",
        rating: 5,
        quote:
            "EliteWing made our honeymoon absolutely magical. Every detail was perfectly arranged – from the luxury vehicle to the handpicked hotels. Sri Lanka exceeded all our expectations!",
        image: "/testimonials/couple-1.jpg",
    },
    {
        name: "Hans Mueller",
        country: "Germany",
        rating: 5,
        quote:
            "I've traveled extensively across Asia, and the service provided by EliteWing is in a league of its own. Professional, punctual, and incredibly knowledgeable guides.",
        image: "/testimonials/person-2.jpg",
    },
    {
        name: "Sarah Chen",
        country: "Australia",
        rating: 5,
        quote:
            "The wildlife safari was the highlight of our trip. Our guide knew exactly where to find the leopards at Yala. The luxury lodge was breathtaking. Truly a once-in-a-lifetime experience.",
        image: "/testimonials/person-3.jpg",
    },
    {
        name: "Ahmed Al-Rashid",
        country: "UAE",
        rating: 5,
        quote:
            "From the moment we landed to our departure, everything was seamless. The private tour of Sri Lanka's cultural sites was educational, comfortable, and luxury at its finest.",
        image: "/testimonials/person-4.jpg",
    },
    {
        name: "Yuki Tanaka",
        country: "Japan",
        rating: 5,
        quote:
            "The attention to detail is remarkable. Our chauffeur was incredibly professional, and the curated itinerary showed us the real Sri Lanka. Will definitely return with EliteWing!",
        image: "/testimonials/person-5.jpg",
    },
];

export const mapHotspots = [
    { id: "mirissa", label: "Mirissa", category: "Beaches", x: 40.56, y: 115.05, description: "Pristine beaches & whale watching paradise" },
    { id: "kandy", label: "Kandy", category: "Culture", x: 45.54, y: 76.93, description: "Sacred city of the Temple of the Tooth" },
    { id: "anuradhapura", label: "Anuradhapura", category: "Heritage", x: 39.05, y: 47.87, description: "Ancient capital & sacred Buddhist city" },
    { id: "nuwara-eliya", label: "Nuwara Eliya", category: "Hill Country", x: 49.74, y: 86.62, description: "Misty highlands & colonial tea estates" },
    { id: "ella", label: "Ella", category: "Adventure", x: 57.18, y: 88.98, description: "Mountain trails & the famous Nine Arches Bridge" },
];
