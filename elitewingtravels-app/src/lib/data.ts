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
    {
        slug: "anuradhapura",
        name: "Anuradhapura",
        tagline: "The Ancient Sacred City",
        description:
            "A UNESCO World Heritage site showcasing the majestic remnants of Sri Lanka's first capital, featuring colossal stupas and the sacred Sri Maha Bodhi tree.",
        image: "/destinations/anuradhapura.jpg",
        bestTime: "May - September",
        highlights: ["Sri Maha Bodhi", "Ruwanwelisaya", "Jetavanaramaya", "Abhayagiri Dagoba", "Mihintale"],
        hotels: ["Ulagalla by Uga Escapes", "Kapuruge Hotel", "Heritage Hotel"],
        gallery: ["/destinations/anuradhapura.jpg", "/destinations/anuradhapura-2.jpg", "/destinations/anuradhapura-3.jpg"],
    },
    {
        slug: "arugambay",
        name: "Arugam Bay",
        tagline: "Surfer's Paradise",
        description:
            "Renowned as one of the best surfing destinations in the world, Arugam Bay offers laid-back coastal vibes, thrilling waves, and nearby wildlife safaris.",
        image: "/destinations/arugambay.jpg",
        bestTime: "May - September",
        highlights: ["Surfing Point", "Kumana National Park", "Muhudu Maha Viharaya", "Elephant Rock", "Whiskey Point"],
        hotels: ["Jetwing Surf", "Hideaway Resort", "Kottukal Beach House"],
        gallery: ["/destinations/arugambay.jpg", "/destinations/arugambay-2.jpg", "/destinations/arugambay-3.jpg"],
    },
    {
        slug: "colombo",
        name: "Colombo",
        tagline: "The Vibrant Commercial Capital",
        description:
            "A bustling metropolis where colonial heritage meets modern development. Explore bustling markets, world-class dining, and exciting urban culture.",
        image: "/destinations/colombo.jpg",
        bestTime: "January - March",
        highlights: ["Galle Face Green", "Gangaramaya Temple", "National Museum", "Pettah Market", "Lotus Tower"],
        hotels: ["Shangri-La Colombo", "Cinnamon Grand", "Galle Face Hotel"],
        gallery: ["/destinations/colombo.jpg", "/destinations/colombo-2.jpg", "/destinations/colombo-3.jpg"],
    },
    {
        slug: "dambulla",
        name: "Dambulla",
        tagline: "The Cave Temple Complex",
        description:
            "Famous for its stunning UNESCO World Heritage cave temples, Dambulla is a spiritual and historical marvel at the heart of the cultural triangle.",
        image: "/destinations/dambulla.jpg",
        bestTime: "January - April",
        highlights: ["Golden Temple", "Dambulla Cave Temple", "Popham's Arboretum", "Minneriya Safari", "Ibbankatuwa Megalithic Tombs"],
        hotels: ["Heritance Kandalama", "Amaya Lake", "Jetwing Lake"],
        gallery: ["/destinations/dambulla.jpg", "/destinations/dambulla-2.jpg", "/destinations/dambulla-3.jpg"],
    },
    {
        slug: "ella",
        name: "Ella",
        tagline: "Nature's Masterpiece",
        description:
            "A misty, mountain-clad village surrounded by tea plantations, cascading waterfalls, and breathtaking hiking trails like Ella Rock and Little Adam's Peak.",
        image: "/destinations/ella.jpg",
        bestTime: "January - May",
        highlights: ["Nine Arches Bridge", "Ella Rock", "Little Adam's Peak", "Ravana Falls", "Tea Factories"],
        hotels: ["98 Acres Resort & Spa", "Ekho Ella", "Mountain Heavens"],
        gallery: ["/destinations/ella.jpg", "/destinations/ella-2.jpg", "/destinations/ella-3.jpg"],
    },
    {
        slug: "habarana",
        name: "Habarana",
        tagline: "The Safari Hub",
        description:
            "The perfect starting point for wildlife enthusiasts looking to explore the gathering of wild elephants at nearby Minneriya and Kaudulla National Parks.",
        image: "/destinations/habarana.jpg",
        bestTime: "July - September",
        highlights: ["Minneriya National Park", "Kaudulla National Park", "Hurulu Eco Park", "Habarana Lake", "Village Safaris"],
        hotels: ["Cinnamon Lodge", "Habarana Village", "Aliya Resort"],
        gallery: ["/destinations/habarana.jpg", "/destinations/habarana-2.jpg", "/destinations/habarana-3.jpg"],
    },
    {
        slug: "hatton",
        name: "Hatton",
        tagline: "Heart of the Tea Country",
        description:
            "Set amidst lush, rolling hills of vibrant green tea estates, Hatton is the epitome of Sri Lanka's colonial tea heritage and cool central highlands.",
        image: "/destinations/hatton.jpg",
        bestTime: "December - April",
        highlights: ["Ceylon Tea Trails", "Castlereagh Reservoir", "Adam's Peak", "Devon Falls", "St. Clair's Falls"],
        hotels: ["Ceylon Tea Trails", "Dickoya by Zinc Journeys", "Argyle"],
        gallery: ["/destinations/hatton.jpg", "/destinations/hatton-2.jpg", "/destinations/hatton-3.jpg"],
    },
    {
        slug: "hikkaduwa",
        name: "Hikkaduwa",
        tagline: "Vibrant Coastal Town",
        description:
            "Known for its excellent coral sanctuary, vibrant nightlife, and surfing opportunities, Hikkaduwa is a lively beach town with an energetic atmosphere.",
        image: "/destinations/hikkaduwa.jpg",
        bestTime: "November - April",
        highlights: ["Coral Sanctuary", "Hikkaduwa Beach", "Turtle Hatchery", "Surfing Points", "Seenigama Vihara"],
        hotels: ["Hikka Tranz by Cinnamon", "Riff Hikkaduwa", "Citrus Hikkaduwa"],
        gallery: ["/destinations/hikkaduwa.jpg", "/destinations/hikkaduwa-2.jpg", "/destinations/hikkaduwa-3.jpg"],
    },
    {
        slug: "jaffna",
        name: "Jaffna",
        tagline: "Northern Cultural Tapestry",
        description:
            "A city shaped by unique Tamil culture, resilient history, and flavorful cuisine. Explore ancient forts, sacred kovils, and pristine northern islands.",
        image: "/destinations/jaffna.jpg",
        bestTime: "January - September",
        highlights: ["Nallur Kandaswamy Temple", "Jaffna Fort", "Delft Island", "Casuarina Beach", "Jaffna Public Library"],
        hotels: ["Jetwing Jaffna", "Fox Resorts", "Valampuri Hotel"],
        gallery: ["/destinations/jaffna.jpg", "/destinations/jaffna-2.jpg", "/destinations/jaffna-3.jpg"],
    },
    {
        slug: "kalpitiya",
        name: "Kalpitiya",
        tagline: "Kite Surfing & Dolphins",
        description:
            "A scenic peninsula famous for ideal kite surfing winds, abundant dolphin watching, and undiscovered pristine beaches on the north-western coast.",
        image: "/destinations/kalpitiya.jpg",
        bestTime: "November - April",
        highlights: ["Dolphin Watching", "Kite Surfing", "Kalpitiya Fort", "Bar Reef", "Alankuda Beach"],
        hotels: ["Bar Reef Resort", "Palagama Beach", "Kite Surfing Lanka"],
        gallery: ["/destinations/kalpitiya.jpg", "/destinations/kalpitiya-2.jpg", "/destinations/kalpitiya-3.jpg"],
    },
    {
        slug: "kandy",
        name: "Kandy",
        tagline: "The Sacred Mountain City",
        description:
            "The cultural capital of Sri Lanka and home to the sacred Temple of the Tooth. Kandy is nestled among mist-covered hills and a tranquil central lake.",
        image: "/destinations/kandy.jpg",
        bestTime: "December - April",
        highlights: ["Temple of the Tooth", "Royal Botanical Gardens", "Kandy Lake", "Udawatta Kele Sanctuary", "Cultural Dance Shows"],
        hotels: ["The Golden Crown", "Earl's Regency", "OZO Kandy"],
        gallery: ["/destinations/kandy.jpg", "/destinations/kandy-2.jpg", "/destinations/kandy-3.jpg"],
    },
    {
        slug: "kithulgala",
        name: "Kitulgala",
        tagline: "Adventure & Rapids",
        description:
            "Sri Lanka's adventure capital, offering thrilling white-water rafting, lush rainforest trekking, and cinematic history along the Kelani River.",
        image: "/destinations/kithulgala.jpg",
        bestTime: "January - March",
        highlights: ["White Water Rafting", "Kelani River", "Makandawa Forest Reserve", "Belilena Cave", "Canyoning"],
        hotels: ["Palmstone Retreat", "Borderlands", "Kitulgala Rest House"],
        gallery: ["/destinations/kithulgala.jpg", "/destinations/kithulgala-2.jpg", "/destinations/kithulgala-3.jpg"],
    },
    {
        slug: "mirissa",
        name: "Mirissa",
        tagline: "Whale Watching Capital",
        description:
            "A stunning crescent-shaped beach that serves as one of the world's best locations for spotting majestic blue whales and playful dolphins.",
        image: "/destinations/mirissa.jpg",
        bestTime: "November - April",
        highlights: ["Whale Watching", "Secret Beach", "Coconut Tree Hill", "Parrot Rock", "Surfing"],
        hotels: ["Weligama Bay Marriott", "Sri Sharavi Beach Villas", "Ubuntu Beach Villas"],
        gallery: ["/destinations/mirissa.jpg", "/destinations/mirissa-2.jpg", "/destinations/mirissa-3.jpg"],
    },
    {
        slug: "negombo",
        name: "Negombo",
        tagline: "The Coastal Gateway",
        description:
            "Located near the airport, Negombo features historic Dutch canals, grand Catholic churches, bustling fish markets, and wide sandy beaches.",
        image: "/destinations/negombo.jpg",
        bestTime: "December - April",
        highlights: ["Negombo Beach", "Dutch Fort", "Fish Market", "Muthurajawela Marsh", "St. Mary's Church"],
        hotels: ["Jetwing Blue", "Heritance Negombo", "Amagi Aria"],
        gallery: ["/destinations/negombo.jpg", "/destinations/negombo-2.jpg", "/destinations/negombo-3.jpg"],
    },
    {
        slug: "nuwaraeliya",
        name: "Nuwara Eliya",
        tagline: "Little England",
        description:
            "The highest town in Sri Lanka, boasting crisp weather, colonial-style architecture, manicured gardens, and endless carpets of emerald tea.",
        image: "/destinations/nuwaraeliya.jpg",
        bestTime: "February - May",
        highlights: ["Horton Plains", "Gregory Lake", "Victoria Park", "Pedro Tea Estate", "Hakgala Botanical Garden"],
        hotels: ["The Grand Hotel", "Heritance Tea Factory", "Araliya Green Hills"],
        gallery: ["/destinations/nuwaraeliya.jpg", "/destinations/nuwaraeliya-2.jpg", "/destinations/nuwaraeliya-3.jpg"],
    },
    {
        slug: "pasisikudah",
        name: "Pasikudah",
        tagline: "Shallow Coastal Waters",
        description:
            "Famous for its remarkably shallow and calm waters, Pasikudah is a pristine eastern beach resort perfect for swimming and ultimate luxury relaxation.",
        image: "/destinations/pasisikudah.jpg",
        bestTime: "May - September",
        highlights: ["Pasikudah Bay", "Kalkudah Beach", "Water Sports", "Snorkeling", "Batticaloa Fort"],
        hotels: ["Uga Bay", "Amethyst Resort", "Sun Aqua Pasikudah"],
        gallery: ["/destinations/pasisikudah.jpg", "/destinations/pasisikudah-2.jpg", "/destinations/pasisikudah-3.jpg"],
    },
    {
        slug: "sinharaja",
        name: "Sinharaja",
        tagline: "The Rainforest Retreat",
        description:
            "A UNESCO World Heritage nature reserve and Sri Lanka's last viable area of primary tropical rainforest featuring high endemism of flora and fauna.",
        image: "/destinations/sinharaja.jpg",
        bestTime: "December - early April",
        highlights: ["Bird Watching", "Jungle Trekking", "Endemic Wildlife", "Waterfalls", "Moulawella Peak"],
        hotels: ["Rainforest Eco Lodge", "Blue Magpie Lodge", "Jansen's Bungalow"],
        gallery: ["/destinations/sinharaja.jpg", "/destinations/sinharaja-2.jpg", "/destinations/sinharaja-3.jpg"],
    },
    {
        slug: "tamgalle",
        name: "Tangalle",
        tagline: "Serene Southern Beaches",
        description:
            "An upscale hideaway boasting sweeping untouched bays, romantic coves, and luxury resorts along the deep blue Indian Ocean.",
        image: "/destinations/tamgalle.jpg",
        bestTime: "November - April",
        highlights: ["Goyambokka Beach", "Mulkirigala Rock Temple", "Rekawa Turtle Watch", "Hummanaya Blowhole", "Marakolliya Beach"],
        hotels: ["Amanwella", "Anantara Peace Haven", "Cinnamon Nature Trails"],
        gallery: ["/destinations/tamgalle.jpg", "/destinations/tamgalle-2.jpg", "/destinations/tamgalle-3.jpg"],
    },
    {
        slug: "trincomalee",
        name: "Trincomalee",
        tagline: "East Coast Elegance",
        description:
            "Boasting one of the world's finest natural harbors, Trincomalee features breathtaking deep-water beaches and rich multicultural history.",
        image: "/destinations/trincomalee.jpg",
        bestTime: "May - October",
        highlights: ["Pigeon Island", "Nilaveli Beach", "Koneswaram Temple", "Fort Fredrick", "Marble Beach"],
        hotels: ["Trinco Blu by Cinnamon", "Uga Jungle Beach", "Amaranthe Bay"],
        gallery: ["/destinations/trincomalee.jpg", "/destinations/trincomalee-2.jpg", "/destinations/trincomalee-3.jpg"],
    },
    {
        slug: "udawalawe",
        name: "Udawalawe",
        tagline: "The Elephant Sanctuary",
        description:
            "One of the best places in Sri Lanka to see herds of wild elephants up close, offering reliable sightings against the spectacular backdrop of the central hills.",
        image: "/destinations/udawalawe.jpg",
        bestTime: "October - April",
        highlights: ["Udawalawe National Park", "Elephant Transit Home", "Udawalawe Reservoir", "Bird Watching", "Safari Camping"],
        hotels: ["Grand Udawalawe Safari Resort", "Kalu's Hideaway", "Athgira River Camp"],
        gallery: ["/destinations/udawalawe.jpg", "/destinations/udawalawe-2.jpg", "/destinations/udawalawe-3.jpg"],
    },
    {
        slug: "unawatuna",
        name: "Unawatuna",
        tagline: "The Curved Bay",
        description:
            "A popular horseshoe-shaped beach with calm swimmable waters, lively beach bars, and vibrant coral reefs waiting to be explored.",
        image: "/destinations/unawatuna.jpg",
        bestTime: "December - April",
        highlights: ["Unawatuna Beach", "Japanese Peace Pagoda", "Jungle Beach", "Rumassala Sanctuary", "Scuba Diving"],
        hotels: ["Cantaloupe Aqua", "Thaproban Pavilion", "Araliya Beach Resort"],
        gallery: ["/destinations/unawatuna.jpg", "/destinations/unawatuna-2.jpg", "/destinations/unawatuna-3.jpg"],
    },
    {
        slug: "weligama",
        name: "Weligama",
        tagline: "Sandy Surfing Bays",
        description:
            "A magnificent sandy bay and an ideal destination for beginner surfers, featuring charming boutique hotels and traditional stilt fishermen.",
        image: "/destinations/weligama.jpg",
        bestTime: "November - May",
        highlights: ["Surfing Lessons", "Taprobane Island", "Stilt Fishing", "Kushtarajagala Statue", "Midigama Beach"],
        hotels: ["Cape Weligama", "W Marriott", "W15 Weligama"],
        gallery: ["/destinations/weligama.jpg", "/destinations/weligama-2.jpg", "/destinations/weligama-3.jpg"],
    },
    {
        slug: "wellawaya",
        name: "Wellawaya",
        tagline: "Gateway to the East",
        description:
            "An untouched region of stunning natural beauty wrapped in history, featuring giant rock carvings, roaring waterfalls, and extensive eco-resorts.",
        image: "/destinations/wellawaya.jpg",
        bestTime: "January - March",
        highlights: ["Buduruwagala", "Diyaluma Falls", "Ella Gap", "Handapanagala Lake", "Bambaragama Falls"],
        hotels: ["Jetwing Kaduruketha", "Living Heritage Koslanda", "Melheim Resort"],
        gallery: ["/destinations/wellawaya.jpg", "/destinations/wellawaya-2.jpg", "/destinations/wellawaya-3.jpg"],
    },
    {
        slug: "wilpattu",
        name: "Wilpattu",
        tagline: "Land of Lakes and Leopards",
        description:
            "Sri Lanka's largest and oldest national park, characterized by unique natural lakes (villus) and diverse wildlife, including elusive leopards and sloth bears.",
        image: "/destinations/wilpattu.jpg",
        bestTime: "February - October",
        highlights: ["Wilpattu National Park", "Leopard Safari", "Natural Villus", "Bird Watching", "Ancient Ruins"],
        hotels: ["Mahoora Tented Safari", "Big Game Camp", "Thamaravila"],
        gallery: ["/destinations/wilpattu.jpg", "/destinations/wilpattu-2.jpg", "/destinations/wilpattu-3.jpg"],
    },
    {
        slug: "yala",
        name: "Yala",
        tagline: "The Leopard Country",
        description:
            "The most visited national park in Sri Lanka, offering incredible biodiversity and renowned for having one of the highest leopard densities in the world.",
        image: "/destinations/yala.jpg",
        bestTime: "February - July",
        highlights: ["Leopard Tracking", "Sithulpawwa", "Magul Maha Viharaya", "Sloth Bear Watching", "Birding"],
        hotels: ["Wild Coast Tented Lodge", "Cinnamon Wild", "Jetwing Yala"],
        gallery: ["/destinations/yala.jpg", "/destinations/yala-2.jpg", "/destinations/yala-3.jpg"],
    }
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
    category: "Buses" | "Vans" | "Cars & SUVs";
    subCategory?: "Sedan Cars" | "SUVs";
    capacity: string;
    image: string;
    features: string[];
    safety: string[];
    description: string;
    gallery: string[];
    driverName?: string;
    driverExperience?: string;
    driverLanguages?: string[];
    driverImage?: string;
}

export const fleet: FleetVehicle[] = [
    // --- BUSES ---
    {
        slug: "toyota-coaster-29-seater",
        name: "Toyota Coaster",
        category: "Buses",
        capacity: "29 Seater",
        image: "/fleet/coaster.jpg",
        features: ["Air conditioning", "Reclining seats", "On-board microphone", "Curtains for privacy", "Ample legroom"],
        safety: ["ABS braking", "Safety belts", "First aid kit", "Experienced driver"],
        description: "Perfect for medium-sized groups, the Toyota Coaster offers a smooth and comfortable ride with excellent visibility for sightseeing.",
        gallery: [],
        driverName: "To be assigned",
        driverExperience: "10+ Years",
        driverLanguages: ["English", "Sinhala"],
        driverImage: "/fleet/driver-placeholder.jpg"
    },
    {
        slug: "mitsubishi-rosa-33-seater",
        name: "Mitsubishi Rosa",
        category: "Buses",
        capacity: "33 Seater",
        image: "/fleet/rosa.jpg",
        features: ["Spacious interior", "High roof", "PA system", "Climate control", "Reading lights"],
        safety: ["Dual airbags", "ABS", "Fire extinguisher", "Regularly maintained"],
        description: "A reliable and spacious choice for larger tourist groups, the Mitsubishi Rosa is built for comfort during long journeys across Sri Lanka.",
        gallery: [],
    },
    {
        slug: "under-luggage-bus-37-seater",
        name: "Luxury Coach (Under Luggage)",
        category: "Buses",
        capacity: "37 Seater",
        image: "/fleet/coach-37.jpg",
        features: ["Massive under-floor luggage", "Reclining leather seats", "Entertainment system", "Panoramic windows", "USB charging"],
        safety: ["Speed limiter", "GPS tracking", "Air brakes", "Professional chauffeur"],
        description: "Designed for ultimate touring comfort, this luxury coach features immense under-luggage space, perfect for groups with heavy baggage.",
        gallery: [],
    },
    {
        slug: "under-luggage-bus-41-seater",
        name: "Premium Coach (Under Luggage)",
        category: "Buses",
        capacity: "41 Seater",
        image: "/fleet/coach-41.jpg",
        features: ["Premium seating", "Under-floor baggage compartments", "On-board WiFi", "TV/DVD", "Microphone"],
        safety: ["Comprehensive insurance", "Air suspension", "First aid kit", "Licensed driver"],
        description: "Travel in uncompromised luxury with our 41-seater premium coach, offering exceptional space and modern amenities for extensive tours.",
        gallery: [],
    },
    {
        slug: "under-luggage-bus-51-seater",
        name: "Grand Coach (Under Luggage)",
        category: "Buses",
        capacity: "51 Seater",
        image: "/fleet/coach-51.jpg",
        features: ["Maximum capacity", "Extensive luggage holds", "Dual climate zones", "Reclining ergonomic seats", "Entertainment screens"],
        safety: ["Advanced braking system", "GPS tracking", "24/7 roadside assistance", "Expert driver"],
        description: "Our largest luxury coach. The 51-seater is the ideal solution for large corporate tours, school groups, and grand excursions with vast luggage needs.",
        gallery: [],
    },

    // --- VANS ---
    {
        slug: "kdh-highroof-van-14-seater",
        name: "KDH Highroof Van",
        category: "Vans",
        capacity: "14 Seater",
        image: "/fleet/kdh-highroof.jpg",
        features: ["High roof clearance", "Dual A/C", "Tinted windows", "Adjustable seats", "Generous legroom"],
        safety: ["Safety belts", "ABS", "Airbags", "First aid kit"],
        description: "The KDH Highroof provides exceptional headroom and comfort, making it the supreme choice for family vacations and small group tours.",
        gallery: [],
    },
    {
        slug: "kdh-flatroof-van-9-seater",
        name: "KDH Flatroof Van",
        category: "Vans",
        capacity: "9 Seater",
        image: "/fleet/kdh-flatroof.jpg",
        features: ["Luxury interior", "Captain seats", "Rear A/C", "Premium sound system", "Sliding doors"],
        safety: ["Safety belts", "Reverse camera", "Airbags", "Regularly serviced"],
        description: "A compact yet luxurious van perfect for small families or VIP transfers, offering a nimble and extremely comfortable ride.",
        gallery: [],
    },

    // --- CARS & SUVS (Sedans) ---
    {
        slug: "mercedes-c-200",
        name: "Mercedes C200",
        category: "Cars & SUVs",
        subCategory: "Sedan Cars",
        capacity: "1-3 Passengers",
        image: "/fleet/mercedes-c200.jpg",
        features: ["Premium leather interior", "Climate control", "Burmester sound system", "Ambient lighting", "Rear sunshades"],
        safety: ["Advanced driver assist", "Attention assist", "Pre-safe system", "Multiple airbags"],
        description: "Experience absolute luxury and prestige with the Mercedes C200, the perfect sedan for business executives or honeymoon couples.",
        gallery: [],
    },
    {
        slug: "toyota-prius",
        name: "Toyota Prius",
        category: "Cars & SUVs",
        subCategory: "Sedan Cars",
        capacity: "1-3 Passengers",
        image: "/fleet/prius.jpg",
        features: ["Hybrid engine", "Quiet cabin", "Automatic climate control", "Spacious trunk", "Comfortable seating"],
        safety: ["Toyota Safety Sense", "Lane departure alert", "Multiple airbags", "ABS"],
        description: "Eco-friendly, quiet, and extremely reliable. The Prius is an excellent choice for efficient and comfortable travel across the island.",
        gallery: [],
    },
    {
        slug: "honda-grace",
        name: "Honda Grace",
        category: "Cars & SUVs",
        subCategory: "Sedan Cars",
        capacity: "1-3 Passengers",
        image: "/fleet/grace.jpg",
        features: ["Hybrid efficiency", "Rear AC vents", "Ergonomic seats", "Spacious boot", "Touchscreen infotainment"],
        safety: ["Honda Sensing", "VSA", "Airbags", "Emergency stop signal"],
        description: "A stylish and modern hybrid sedan that offers excellent fuel efficiency and surprisingly spacious legroom for maximum passenger comfort.",
        gallery: [],
    },
    {
        slug: "wagon-r",
        name: "Suzuki Wagon R",
        category: "Cars & SUVs",
        subCategory: "Sedan Cars",
        capacity: "1-3 Passengers",
        image: "/fleet/wagon-r.jpg",
        features: ["Tall boy design", "Excellent headroom", "Compact size for city", "Fuel efficient", "Easy ingress/egress"],
        safety: ["Dual airbags", "ABS with EBD", "Speed alert", "Seatbelt reminder"],
        description: "The ideal compact car for city tours and narrow scenic routes. Its unique tall design ensures great headroom and a very airy cabin feel.",
        gallery: [],
    },

    // --- CARS & SUVS (SUVs) ---
    {
        slug: "toyota-prado",
        name: "Toyota Prado",
        category: "Cars & SUVs",
        subCategory: "SUVs",
        capacity: "4-6 Passengers",
        image: "/fleet/prado.jpg",
        features: ["4x4 Capability", "Premium seating", "Tri-zone climate control", "Cool box", "Panoramic sunroof (optional)"],
        safety: ["Kinetic Dynamic Suspension", "Multi-terrain monitor", "Crawl control", "Comprehensive airbags"],
        description: "The ultimate luxury SUV for Sri Lanka's diverse terrain. Conquer off-road trails and cruise highways in absolute comfort and commanding style.",
        gallery: [],
    },
    {
        slug: "mitsubishi-montero",
        name: "Mitsubishi Montero",
        category: "Cars & SUVs",
        subCategory: "SUVs",
        capacity: "4-6 Passengers",
        image: "/fleet/montero.jpg",
        features: ["Super Select 4WD", "Spacious 7-seat capability", "Rear A/C", "Leather interior", "Premium audio"],
        safety: ["ASTC (Active Stability)", "Reinforced Impact Safety Evolution", "Heavy-duty brakes", "Airbags"],
        description: "A legendary robust SUV that balances rugged off-road prowess with a refined, spacious interior for the ultimate adventure safari experience.",
        gallery: [],
    }
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
