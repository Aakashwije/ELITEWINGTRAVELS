// ===== SITE DATA =====

export const siteConfig = {
    name: "EliteWing Travels",
    tagline: "Experience Sri Lanka Like Never Before",
    subTagline: "Private Tours. Luxury Fleet. Authentic Hospitality.",
    phone: "+94740535418",
    email: "elitewingtravels@gmail.com",
    whatsapp: "https://wa.me/94740535418",
    address: "372/3, Kirillawala, Kadawatha, Sri Lanka",
    established: 2005,
    social: {
        facebook: "https://www.facebook.com/share/18Cf7t487G/",
        instagram: "https://www.instagram.com/elitewing_travels?igsh=cG12dm80bnByNjBx",
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
        image: "/Locations/Sigiriya/sigiriya_1.png",
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
            "/Locations/Sigiriya/sigiriya_1.png",
            "/Locations/Sigiriya/sigiriya_2.png",
            "/Locations/Sigiriya/sigiriya_3 .png",
            "/Locations/Sigiriya/Sigiriya_4.jpg"
        ],
    },
    {
        slug: "galle",
        name: "Galle",
        tagline: "Colonial Charm Meets Coastal Beauty",
        description:
            "The historic Galle Fort, a UNESCO World Heritage Site, blends Dutch colonial architecture with vibrant Sri Lankan culture. Wander cobblestone streets lined with boutique shops, art galleries, and oceanfront cafés in this enchanting coastal gem.",
        image: "/Locations/Galle/Galle_1.png",
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
            "/Locations/Galle/Galle_1.png",
            "/Locations/Galle/Galle_2.png",
            "/Locations/Galle/Galle_3.png",
            "/Locations/Galle/Galle_4.png"
        ],
    },
    {
        slug: "bentota",
        name: "Bentota",
        tagline: "Golden Sands & Turquoise Waters",
        description:
            "Bentota is Sri Lanka's premier beach resort destination, offering pristine golden sands, world-class water sports, and luxurious beachfront villas. A paradise for romance and relaxation on the southwestern coast.",
        image: "/Locations/Bentota/Bentota_1.png",
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
            "/Locations/Bentota/Bentota_1.png",
            "/Locations/Bentota/Bentota_2.png",
            "/Locations/Bentota/Bentota_3.png",
            "/Locations/Bentota/Bentota_4.png"
        ],
    },
    {
        slug: "polonnaruwa",
        name: "Polonnaruwa",
        tagline: "The Medieval Capital",
        description:
            "Once the thriving capital of the island, Polonnaruwa is a treasure trove of ancient ruins, sacred temples, and stunning Buddha statues. This UNESCO World Heritage Site showcases the pinnacle of ancient Sinhalese civilization.",
        image: "/Locations/Polonnaruwa/Polonnaruwa_1.jpg",
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
            "/Locations/Polonnaruwa/Polonnaruwa_1.jpg",
            "/Locations/Polonnaruwa/Polonnaruwa_2.jpg",
            "/Locations/Polonnaruwa/Polonnaruwa_3.JPG",
            "/Locations/Polonnaruwa/Polonnaruwa_4.jpg"
        ],
    },
    {
        slug: "anuradhapura",
        name: "Anuradhapura",
        tagline: "The Ancient Sacred City",
        description:
            "A UNESCO World Heritage site showcasing the majestic remnants of Sri Lanka's first capital, featuring colossal stupas and the sacred Sri Maha Bodhi tree.",
        image: "/Locations/Anuradhapura/Anuradhapura_1.png",
        bestTime: "May - September",
        highlights: ["Sri Maha Bodhi", "Ruwanwelisaya", "Jetavanaramaya", "Abhayagiri Sthupa", "Mihintale"],
        hotels: ["Ulagalla by Uga Escapes", "Kapuruge Hotel", "Heritage Hotel"],
        gallery: [
            "/Locations/Anuradhapura/Anuradhapura_1.png",
            "/Locations/Anuradhapura/Anuradhapura_2.jpg",
            "/Locations/Anuradhapura/Anuradhapura_3.png",
            "/Locations/Anuradhapura/Anuradhapura_4.png"
        ],
    },
    {
        slug: "arugambay",
        name: "Arugam Bay",
        tagline: "Surfer's Paradise",
        description:
            "Renowned as one of the best surfing destinations in the world, Arugam Bay offers laid-back coastal vibes, thrilling waves, and nearby wildlife safaris.",
        image: "/Locations/Arugambay/Arugambay_1.png",
        bestTime: "May - September",
        highlights: ["Surfing Point", "Kumana National Park", "Muhudu Maha Viharaya", "Elephant Rock", "Whiskey Point"],
        hotels: ["Jetwing Surf", "Hideaway Resort", "Kottukal Beach House"],
        gallery: [
            "/Locations/Arugambay/Arugambay_1.png",
            "/Locations/Arugambay/Arugambay_2.png",
            "/Locations/Arugambay/Arugambay_3.png",
            "/Locations/Arugambay/Arugambay_4.png"
        ],
    },
    {
        slug: "colombo",
        name: "Colombo",
        tagline: "The Vibrant Commercial Capital",
        description:
            "A bustling metropolis where colonial heritage meets modern development. Explore bustling markets, world-class dining, and exciting urban culture.",
        image: "/Locations/Colombo/Colombo_1.png",
        bestTime: "January - March",
        highlights: ["Galle Face Green", "Gangaramaya Temple", "National Museum", "Pettah Market", "Lotus Tower"],
        hotels: ["Shangri-La Colombo", "Cinnamon Grand", "Galle Face Hotel"],
        gallery: [
            "/Locations/Colombo/Colombo_1.png",
            "/Locations/Colombo/Colombo_2.png",
            "/Locations/Colombo/Colombo_3.png",
            "/Locations/Colombo/Colombo_4.png"
        ],
    },
    {
        slug: "dambulla",
        name: "Dambulla",
        tagline: "The Cave Temple Complex",
        description:
            "Famous for its stunning UNESCO World Heritage cave temples, Dambulla is a spiritual and historical marvel at the heart of the cultural triangle.",
        image: "/Locations/Dambulla/Dambulla_1.png",
        bestTime: "January - April",
        highlights: ["Golden Temple", "Dambulla Cave Temple", "Popham's Arboretum", "Minneriya Safari", "Ibbankatuwa Megalithic Tombs"],
        hotels: ["Heritance Kandalama", "Amaya Lake", "Jetwing Lake"],
        gallery: [
            "/Locations/Dambulla/Dambulla_1.png",
            "/Locations/Dambulla/Dambulla_2.png",
            "/Locations/Dambulla/Dambulla_3.png",
            "/Locations/Dambulla/Dambulla_4.png"
        ],
    },
    {
        slug: "ella",
        name: "Ella",
        tagline: "Nature's Masterpiece",
        description:
            "A misty, mountain-clad village surrounded by tea plantations, cascading waterfalls, and breathtaking hiking trails like Ella Rock and Little Adam's Peak.",
        image: "/Locations/Ella/Ella_4.png",
        bestTime: "January - May",
        highlights: ["Nine Arches Bridge", "Ella Rock", "Little Adam's Peak", "Ravana Falls", "Tea Factories"],
        hotels: ["98 Acres Resort & Spa", "Ekho Ella", "Mountain Heavens"],
        gallery: [
            "/Locations/Ella/Ella_1.png",
            "/Locations/Ella/Ella_2.png",
            "/Locations/Ella/Ella_3.png",
            "/Locations/Ella/Ella_4.png"
        ],
    },
    {
        slug: "habarana",
        name: "Habarana",
        tagline: "The Safari Hub",
        description:
            "The perfect starting point for wildlife enthusiasts looking to explore the gathering of wild elephants at nearby Minneriya and Kaudulla National Parks.",
        image: "/Locations/Habarana/Habarana_2.jpg",
        bestTime: "July - September",
        highlights: ["Minneriya National Park", "Kaudulla National Park", "Hurulu Eco Park", "Habarana Lake", "Village Safaris"],
        hotels: ["Cinnamon Lodge", "Habarana Village", "Aliya Resort"],
        gallery: [
            "/Locations/Habarana/Habarana_1.jpg",
            "/Locations/Habarana/Habarana_2.jpg",
            "/Locations/Habarana/Habarana_3.jpg",
            "/Locations/Habarana/Habarana_4jpg.jpg"
        ],
    },
    {
        slug: "hatton",
        name: "Hatton",
        tagline: "Heart of the Tea Country",
        description:
            "Set amidst lush, rolling hills of vibrant green tea estates, Hatton is the epitome of Sri Lanka's colonial tea heritage and cool central highlands.",
        image: "/Locations/Hatton/Hatton_1.jpg",
        bestTime: "December - April",
        highlights: ["Ceylon Tea Trails", "Castlereagh Reservoir", "Adam's Peak", "Devon Falls", "St. Clair's Falls"],
        hotels: ["Ceylon Tea Trails", "Dickoya by Zinc Journeys", "Argyle"],
        gallery: [
            "/Locations/Hatton/Hatton_1.jpg",
            "/Locations/Hatton/Hatton_2.JPG",
            "/Locations/Hatton/Hatton_3.jpg",
            "/Locations/Hatton/Hatton_4.jpg",
            "/Locations/Hatton/Hatton_5.jpg"
        ],
    },
    {
        slug: "hikkaduwa",
        name: "Hikkaduwa",
        tagline: "Vibrant Coastal Town",
        description:
            "Known for its excellent coral sanctuary, vibrant nightlife, and surfing opportunities, Hikkaduwa is a lively beach town with an energetic atmosphere.",
        image: "/Locations/Hikkaduwa/Hikkaduwa_2.jpg",
        bestTime: "November - April",
        highlights: ["Coral Sanctuary", "Hikkaduwa Beach", "Turtle Hatchery", "Surfing Points", "Seenigama Vihara"],
        hotels: ["Hikka Tranz by Cinnamon", "Riff Hikkaduwa", "Citrus Hikkaduwa"],
        gallery: [
            "/Locations/Hikkaduwa/Hikkaduwa_2.jpg",
            "/Locations/Hikkaduwa/Hikkaduwa_3.jpg",
            "/Locations/Hikkaduwa/Hikkaduwa_4.jpg",
            "/Locations/Hikkaduwa/Hikkaduwa_5.jpg"
        ],
    },
    {
        slug: "jaffna",
        name: "Jaffna",
        tagline: "Northern Cultural Tapestry",
        description:
            "A city shaped by unique Tamil culture, resilient history, and flavorful cuisine. Explore ancient forts, sacred kovils, and pristine northern islands.",
        image: "/Locations/Jaffna/Jaffna_1.jpg",
        bestTime: "January - September",
        highlights: ["Nallur Kandaswamy Temple", "Jaffna Fort", "Delft Island", "Casuarina Beach", "Jaffna Public Library"],
        hotels: ["Jetwing Jaffna", "Fox Resorts", "Valampuri Hotel"],
        gallery: [
            "/Locations/Jaffna/Jaffna_1.jpg",
            "/Locations/Jaffna/Jaffna_2.jpg",
            "/Locations/Jaffna/Jaffna_3.jpg",
            "/Locations/Jaffna/Jaffna_4.jpg",
            "/Locations/Jaffna/Jaffna_5.jpg"
        ],
    },
    {
        slug: "kalpitiya",
        name: "Kalpitiya",
        tagline: "Kite Surfing & Dolphins",
        description:
            "A scenic peninsula famous for ideal kite surfing winds, abundant dolphin watching, and undiscovered pristine beaches on the north-western coast.",
        image: "/Locations/Kalpitiya/Kalpitiya_1.jpg",
        bestTime: "November - April",
        highlights: ["Dolphin Watching", "Kite Surfing", "Kalpitiya Fort", "Bar Reef", "Alankuda Beach"],
        hotels: ["Bar Reef Resort", "Palagama Beach", "Kite Surfing Lanka"],
        gallery: [
            "/Locations/Kalpitiya/Kalpitiya_1.jpg",
            "/Locations/Kalpitiya/Kalpitiya_2.jpg",
            "/Locations/Kalpitiya/Kalpitiya_3.jpg",
            "/Locations/Kalpitiya/Kalpitiya_4.jpg",
            "/Locations/Kalpitiya/Kalpitiya_5.jpg"
        ],
    },
    {
        slug: "kandy",
        name: "Kandy",
        tagline: "The Sacred Mountain City",
        description:
            "The cultural capital of Sri Lanka and home to the sacred Temple of the Tooth. Kandy is nestled among mist-covered hills and a tranquil central lake.",
        image: "/Locations/Kandy/Kandy_1.jpg",
        bestTime: "December - April",
        highlights: ["Temple of the Tooth", "Royal Botanical Gardens", "Kandy Lake", "Udawatta Kele Sanctuary", "Cultural Dance Shows"],
        hotels: ["The Golden Crown", "Earl's Regency", "OZO Kandy"],
        gallery: [
            "/Locations/Kandy/Kandy_1.jpg",
            "/Locations/Kandy/Kandy_2.jpg",
            "/Locations/Kandy/Kandy_3.jpg",
            "/Locations/Kandy/Kandy_4.jpg"
        ],
    },
    {
        slug: "kithulgala",
        name: "Kitulgala",
        tagline: "Adventure & Rapids",
        description:
            "Sri Lanka's adventure capital, offering thrilling white-water rafting, lush rainforest trekking, and cinematic history along the Kelani River.",
        image: "/Locations/Kitulgala/Kitulgala_1.jpg",
        bestTime: "January - March",
        highlights: ["White Water Rafting", "Kelani River", "Makandawa Forest Reserve", "Belilena Cave", "Canyoning"],
        hotels: ["Palmstone Retreat", "Borderlands", "Kitulgala Rest House"],
        gallery: [
            "/Locations/Kitulgala/Kitulgala_1.jpg",
            "/Locations/Kitulgala/Kitulgala_2.jpg",
            "/Locations/Kitulgala/Kitulgala_3.jpg",
            "/Locations/Kitulgala/Kitulgala_4.jpg"
        ],
    },
    {
        slug: "mirissa",
        name: "Mirissa",
        tagline: "Whale Watching Capital",
        description:
            "A stunning crescent-shaped beach that serves as one of the world's best locations for spotting majestic blue whales and playful dolphins.",
        image: "/Locations/Mirissa/Mirissa_2.jpg",
        bestTime: "November - April",
        highlights: ["Whale Watching", "Secret Beach", "Coconut Tree Hill", "Parrot Rock", "Surfing"],
        hotels: ["Weligama Bay Marriott", "Sri Sharavi Beach Villas", "Ubuntu Beach Villas"],
        gallery: [
            "/Locations/Mirissa/Mirissa_1.JPG",
            "/Locations/Mirissa/Mirissa_2.jpg",
            "/Locations/Mirissa/Mirissa_3.jpg",
            "/Locations/Mirissa/Mirissa_4.jpg"
        ],
    },
    {
        slug: "negombo",
        name: "Negombo",
        tagline: "The Coastal Gateway",
        description:
            "Located near the airport, Negombo features historic Dutch canals, grand Catholic churches, bustling fish markets, and wide sandy beaches.",
        image: "/Locations/Negombo/Negombo-.jpg",
        bestTime: "December - April",
        highlights: ["Negombo Beach", "Dutch Fort", "Fish Market", "Muthurajawela Marsh", "St. Mary's Church"],
        hotels: ["Jetwing Blue", "Heritance Negombo", "Amagi Aria"],
        gallery: [
            "/Locations/Negombo/Negombo-.jpg",
            "/Locations/Negombo/Negombo_2.jpg",
            "/Locations/Negombo/Negombo_3.jpg",
            "/Locations/Negombo/Negombo_4.jpg"
        ],
    },
    {
        slug: "nuwaraeliya",
        name: "Nuwara Eliya",
        tagline: "Little England",
        description:
            "The highest town in Sri Lanka, boasting crisp weather, colonial-style architecture, manicured gardens, and endless carpets of emerald tea.",
        image: "/Locations/Nuwaraeliya/Nuwara eliya_2.jpg",
        bestTime: "February - May",
        highlights: ["Horton Plains", "Gregory Lake", "Victoria Park", "Pedro Tea Estate", "Hakgala Botanical Garden"],
        hotels: ["The Grand Hotel", "Heritance Tea Factory", "Araliya Green Hills"],
        gallery: [
            "/Locations/Nuwaraeliya/Nuwara Eliya_1.jpg",
            "/Locations/Nuwaraeliya/Nuwara eliya_2.jpg",
            "/Locations/Nuwaraeliya/Nuwara eliya_4.jpg",
            "/Locations/Nuwaraeliya/Nuwara eliy_3.jpg"
        ],
    },
    {
        slug: "pasisikudah",
        name: "Pasikudah",
        tagline: "Shallow Coastal Waters",
        description:
            "Famous for its remarkably shallow and calm waters, Pasikudah is a pristine eastern beach resort perfect for swimming and ultimate luxury relaxation.",
        image: "/Locations/Pasisikudah/Pasikudah_2.jpg",
        bestTime: "May - September",
        highlights: ["Pasikudah Bay", "Kalkudah Beach", "Water Sports", "Snorkeling", "Batticaloa Fort"],
        hotels: ["Uga Bay", "Amethyst Resort", "Sun Aqua Pasikudah"],
        gallery: [
            "/Locations/Pasisikudah/Pasikudah_2.jpg",
            "/Locations/Pasisikudah/Pasikudah_3.jpg",
            "/Locations/Pasisikudah/Pasikudha_1.jpg",
            "/Locations/Pasisikudah/Psikudah_4.jpg"
        ],
    },
    {
        slug: "sinharaja",
        name: "Sinharaja",
        tagline: "The Rainforest Retreat",
        description:
            "A UNESCO World Heritage nature reserve and Sri Lanka's last viable area of primary tropical rainforest featuring high endemism of flora and fauna.",
        image: "/Locations/Sinharaja/Sinharaja_1.jpg",
        bestTime: "December - early April",
        highlights: ["Bird Watching", "Jungle Trekking", "Endemic Wildlife", "Waterfalls", "Moulawella Peak"],
        hotels: ["Rainforest Eco Lodge", "Blue Magpie Lodge", "Jansen's Bungalow"],
        gallery: [
            "/Locations/Sinharaja/Sinharaja_1.jpg",
            "/Locations/Sinharaja/Sinharaja_2.jpg",
            "/Locations/Sinharaja/Sinharaja_3.jpg",
            "/Locations/Sinharaja/Sinharaja_4.jpg"
        ],
    },
    {
        slug: "tamgalle",
        name: "Tangalle",
        tagline: "Serene Southern Beaches",
        description:
            "An upscale hideaway boasting sweeping untouched bays, romantic coves, and luxury resorts along the deep blue Indian Ocean.",
        image: "/Locations/Tangalle/Tangalle_1.jpg",
        bestTime: "November - April",
        highlights: ["Goyambokka Beach", "Mulkirigala Rock Temple", "Rekawa Turtle Watch", "Hummanaya Blowhole", "Marakolliya Beach"],
        hotels: ["Amanwella", "Anantara Peace Haven", "Cinnamon Nature Trails"],
        gallery: [
            "/Locations/Tangalle/Tangalle_1.jpg",
            "/Locations/Tangalle/Tangalle_2.jpg",
            "/Locations/Tangalle/Tangalle_3.jpg",
            "/Locations/Tangalle/Tangalle_4.jpg"
        ],
    },
    {
        slug: "trincomalee",
        name: "Trincomalee",
        tagline: "East Coast Elegance",
        description:
            "Boasting one of the world's finest natural harbors, Trincomalee features breathtaking deep-water beaches and rich multicultural history.",
        image: "/Locations/Trincomalee/Trincomalee_1.jpg",
        bestTime: "May - October",
        highlights: ["Pigeon Island", "Nilaveli Beach", "Koneswaram Temple", "Fort Fredrick", "Marble Beach"],
        hotels: ["Trinco Blu by Cinnamon", "Uga Jungle Beach", "Amaranthe Bay"],
        gallery: [
            "/Locations/Trincomalee/Trincomalee_1.jpg",
            "/Locations/Trincomalee/Trincomalee_2.jpg",
            "/Locations/Trincomalee/Trincomalee_3.jpg",
            "/Locations/Trincomalee/Trincomalee_4.jpeg"
        ],
    },
    {
        slug: "udawalawe",
        name: "Udawalawe",
        tagline: "The Elephant Sanctuary",
        description:
            "One of the best places in Sri Lanka to see herds of wild elephants up close, offering reliable sightings against the spectacular backdrop of the central hills.",
        image: "/Locations/Udawalawe/Udawalawe_1.jpg",
        bestTime: "October - April",
        highlights: ["Udawalawe National Park", "Elephant Transit Home", "Udawalawe Reservoir", "Bird Watching", "Safari Camping"],
        hotels: ["Grand Udawalawe Safari Resort", "Kalu's Hideaway", "Athgira River Camp"],
        gallery: [
            "/Locations/Udawalawe/Udawalawe_1.jpg",
            "/Locations/Udawalawe/Udawalawe_2.jpg",
            "/Locations/Udawalawe/Udawalawe_3.jpg",
            "/Locations/Udawalawe/Udawalawe_4.jpg"
        ],
    },
    {
        slug: "unawatuna",
        name: "Unawatuna",
        tagline: "The Curved Bay",
        description:
            "A popular horseshoe-shaped beach with calm swimmable waters, lively beach bars, and vibrant coral reefs waiting to be explored.",
        image: "/Locations/Unawatuna/Unawatuna_1.jpg",
        bestTime: "December - April",
        highlights: ["Unawatuna Beach", "Japanese Peace Pagoda", "Jungle Beach", "Rumassala Sanctuary", "Scuba Diving"],
        hotels: ["Cantaloupe Aqua", "Thaproban Pavilion", "Araliya Beach Resort"],
        gallery: [
            "/Locations/Unawatuna/Unawatuna_1.jpg",
            "/Locations/Unawatuna/Unawatuna_2.jpg",
            "/Locations/Unawatuna/Unawatuna_3.jpg",
            "/Locations/Unawatuna/Unawatuna_4.jpg"
        ],
    },
    {
        slug: "weligama",
        name: "Weligama",
        tagline: "Sandy Surfing Bays",
        description:
            "A magnificent sandy bay and an ideal destination for beginner surfers, featuring charming boutique hotels and traditional stilt fishermen.",
        image: "/Locations/Weligama/Weligama_1.jpg",
        bestTime: "November - May",
        highlights: ["Surfing Lessons", "Taprobane Island", "Stilt Fishing", "Kushtarajagala Statue", "Midigama Beach"],
        hotels: ["Cape Weligama", "W Marriott", "W15 Weligama"],
        gallery: [
            "/Locations/Weligama/Weligama_1.jpg",
            "/Locations/Weligama/Weligama_2.jpg",
            "/Locations/Weligama/weligama_3.jpg",
            "/Locations/Weligama/Weligama_4.jpg"
        ],
    },
    {
        slug: "wellawaya",
        name: "Wellawaya",
        tagline: "Gateway to the East",
        description:
            "An untouched region of stunning natural beauty wrapped in history, featuring giant rock carvings, roaring waterfalls, and extensive eco-resorts.",
        image: "/Locations/Wellawaya/Wellawaya_1.jpg",
        bestTime: "January - March",
        highlights: ["Buduruwagala", "Diyaluma Falls", "Ella Gap", "Handapanagala Lake", "Bambaragama Falls"],
        hotels: ["Jetwing Kaduruketha", "Living Heritage Koslanda", "Melheim Resort"],
        gallery: [
            "/Locations/Wellawaya/Wellawaya_1.jpg",
            "/Locations/Wellawaya/Wellawaya_2.jpg",
            "/Locations/Wellawaya/Wellawaya_3.jpg",
            "/Locations/Wellawaya/Wellawaya_4.jpg"
        ],
    },
    {
        slug: "wilpattu",
        name: "Wilpattu",
        tagline: "Land of Lakes and Leopards",
        description:
            "Sri Lanka's largest and oldest national park, characterized by unique natural lakes (villus) and diverse wildlife, including elusive leopards and sloth bears.",
        image: "/Locations/Wilpattu/Wilpattu_2.jpg",
        bestTime: "February - October",
        highlights: ["Wilpattu National Park", "Leopard Safari", "Natural Villus", "Bird Watching", "Ancient Ruins"],
        hotels: ["Mahoora Tented Safari", "Big Game Camp", "Thamaravila"],
        gallery: [
            "/Locations/Wilpattu/Wilpattu_2.jpg",
            "/Locations/Wilpattu/Wilpattu_3.jpg",
            "/Locations/Wilpattu/Wilpattu_4.jpg",
            "/Locations/Wilpattu/Wilpattu_5.jpg"
        ],
    },
    {
        slug: "yala",
        name: "Yala",
        tagline: "The Leopard Country",
        description:
            "The most visited national park in Sri Lanka, offering incredible biodiversity and renowned for having one of the highest leopard densities in the world.",
        image: "/Locations/Yala/Yala_1.jpg",
        bestTime: "February - July",
        highlights: ["Leopard Tracking", "Sithulpawwa", "Magul Maha Viharaya", "Sloth Bear Watching", "Birding"],
        hotels: ["Wild Coast Tented Lodge", "Cinnamon Wild", "Jetwing Yala"],
        gallery: [
            "/Locations/Yala/Yala_1.jpg",
            "/Locations/Yala/Yala_2.jpg",
            "/Locations/Yala/Yala_3.jpg",
            "/Locations/Yala/Yala_4.jpg"
        ],
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
        image: "/Vehicles/Buses/Coaster 29 Seater/TOYOTA COASTER 29 SEATER.png",
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
        image: "/Vehicles/Buses/Rosa 33 seater/ROSA BUS 33 SEATER .png",
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
        image: "/Vehicles/Buses/Under Luggage 37 Seater/UNDER LUGGAGE 35 SEATER.png",
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
        image: "/Vehicles/Buses/Under Luggage 41 Seater/UNDER LUGGAGE 41 SEATER .png",
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
        image: "/Vehicles/Buses/Under Luggage 51 Seater/UNDER LUGGAGE 51 SEATER.png",
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
        image: "/Vehicles/Vans/KDH Highroof 14 Seater/KFH HIGHROOF.png",
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
        image: "/Vehicles/Vans/KDH Flatroof 9 Seater/KDH FLATROOF .png",
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
        image: "/Vehicles/Cars/Sedan/MERCEDES C200.png",
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
        image: "/Vehicles/Cars/Sedan/TOYOTA PRIUS.png",
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
        image: "/Vehicles/Cars/Sedan/HONDA GRACE.png",
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
        image: "/Vehicles/Cars/Sedan/WAGON R.png",
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
            image: "/Vehicles/Cars/SUV/TOYOTA PRADO .png",
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
            image: "/Vehicles/Cars/SUV/montero .png",
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

export const memories = [
    { id: 1, image: "/memories/1.JPG", title: "Our Journey" },
    { id: 2, image: "/memories/2.JPG", title: "Our Journey" },
    { id: 3, image: "/memories/3.JPG", title: "Our Journey" },
    { id: 4, image: "/memories/4.JPG", title: "Our Journey" },
    { id: 5, image: "/memories/5.JPG", title: "Our Journey" },
    { id: 6, image: "/memories/6.JPG", title: "Our Journey" },
    { id: 7, image: "/memories/7.JPG", title: "Our Journey" },
    { id: 8, image: "/memories/8.JPG", title: "Our Journey" },
    { id: 9, image: "/memories/9.JPG", title: "Our Journey" },
    { id: 10, image: "/memories/10.JPG", title: "Our Journey" },
    { id: 11, image: "/memories/11.JPG", title: "Our Journey" },
    { id: 12, image: "/memories/12.JPG", title: "Our Journey" },
    { id: 13, image: "/memories/13.JPG", title: "Our Journey" },
    { id: 14, image: "/memories/14.JPG", title: "Our Journey" },
    { id: 15, image: "/memories/15.JPG", title: "Our Journey" },
    { id: 16, image: "/memories/16.JPG", title: "Our Journey" },
    { id: 17, image: "/memories/17.JPG", title: "Our Journey" },
    { id: 18, image: "/memories/18.JPG", title: "Our Journey" },
];

export const extraMemories = [
    { id: 19, image: "/memories/2026_03_10_09_14_IMG_8970.JPG", title: "Travel Memory" },
    { id: 20, image: "/memories/2026_03_10_09_15_IMG_8971.JPG", title: "Travel Memory" },
    { id: 21, image: "/memories/2026_03_10_09_16_IMG_8972.JPG", title: "Travel Memory" },
    { id: 22, image: "/memories/2026_03_10_09_16_IMG_8973.JPG", title: "Travel Memory" },
    { id: 23, image: "/memories/2026_03_10_09_16_IMG_8974.JPG", title: "Travel Memory" },
    { id: 24, image: "/memories/2026_03_10_09_16_IMG_8975.JPG", title: "Travel Memory" },
    { id: 25, image: "/memories/2026_03_10_09_16_IMG_8976.JPG", title: "Travel Memory" },
    { id: 26, image: "/memories/2026_03_10_09_16_IMG_8978.JPG", title: "Travel Memory" },
    { id: 27, image: "/memories/2026_03_10_09_16_IMG_8979.JPG", title: "Travel Memory" },
    { id: 28, image: "/memories/2026_03_10_09_16_IMG_8980.JPG", title: "Travel Memory" },
    { id: 29, image: "/memories/2026_03_10_09_16_IMG_8981.JPG", title: "Travel Memory" },
    { id: 30, image: "/memories/2026_03_10_09_16_IMG_8982.JPG", title: "Travel Memory" },
    { id: 31, image: "/memories/2026_03_10_09_17_IMG_8984.JPG", title: "Travel Memory" },
    { id: 32, image: "/memories/2026_03_10_09_17_IMG_8985.JPG", title: "Travel Memory" },
    { id: 33, image: "/memories/2026_03_10_09_17_IMG_8986.JPG", title: "Travel Memory" },
    { id: 34, image: "/memories/2026_03_10_09_17_IMG_8988.JPG", title: "Travel Memory" },
    { id: 35, image: "/memories/2026_03_10_09_17_IMG_8989.JPG", title: "Travel Memory" },
    { id: 36, image: "/memories/2026_03_10_09_17_IMG_8991.JPG", title: "Travel Memory" },
    { id: 37, image: "/memories/2026_03_10_09_17_IMG_8992.JPG", title: "Travel Memory" },
    { id: 38, image: "/memories/2026_03_10_09_17_IMG_8993.JPG", title: "Travel Memory" },
    { id: 39, image: "/memories/2026_03_10_09_17_IMG_8995.JPG", title: "Travel Memory" },
    { id: 40, image: "/memories/2026_03_10_09_17_IMG_8996.JPG", title: "Travel Memory" },
    { id: 41, image: "/memories/2026_03_10_09_17_IMG_8997.JPG", title: "Travel Memory" },
    { id: 42, image: "/memories/2026_03_10_09_17_IMG_8998.JPG", title: "Travel Memory" },
    { id: 43, image: "/memories/2026_03_10_09_18_IMG_8999.JPG", title: "Travel Memory" },
    { id: 44, image: "/memories/2026_03_10_09_18_IMG_9001.JPG", title: "Travel Memory" },
    { id: 45, image: "/memories/2026_03_10_09_18_IMG_9002.JPG", title: "Travel Memory" },
    { id: 46, image: "/memories/2026_03_10_09_18_IMG_9003.JPG", title: "Travel Memory" },
    { id: 47, image: "/memories/2026_03_10_09_18_IMG_9004.JPG", title: "Travel Memory" },
    { id: 48, image: "/memories/2026_03_10_09_19_IMG_9007.JPG", title: "Travel Memory" },
    { id: 49, image: "/memories/2026_03_10_09_19_IMG_9009.JPG", title: "Travel Memory" },
    { id: 50, image: "/memories/2026_03_10_09_19_IMG_9010.JPG", title: "Travel Memory" },
    { id: 51, image: "/memories/2026_03_10_09_19_IMG_9011.JPG", title: "Travel Memory" },
    { id: 52, image: "/memories/2026_03_10_09_19_IMG_9012.JPG", title: "Travel Memory" },
    { id: 53, image: "/memories/2026_03_10_09_19_IMG_9013.JPG", title: "Travel Memory" },
    { id: 54, image: "/memories/2026_03_10_09_19_IMG_9014.JPG", title: "Travel Memory" },
    { id: 55, image: "/memories/2026_03_10_09_19_IMG_9015.JPG", title: "Travel Memory" },
    { id: 56, image: "/memories/2026_03_10_09_20_IMG_9016.JPG", title: "Travel Memory" },
    { id: 57, image: "/memories/2026_03_10_09_20_IMG_9017.JPG", title: "Travel Memory" },
    { id: 58, image: "/memories/2026_03_10_09_20_IMG_9020.JPG", title: "Travel Memory" },
    { id: 59, image: "/memories/2026_03_10_09_20_IMG_9021.JPG", title: "Travel Memory" },
    { id: 60, image: "/memories/2026_03_10_09_21_IMG_9024.JPG", title: "Travel Memory" },
    { id: 61, image: "/memories/2026_03_10_09_21_IMG_9026.JPG", title: "Travel Memory" },
    { id: 62, image: "/memories/2026_03_10_09_21_IMG_9027.JPG", title: "Travel Memory" },
    { id: 63, image: "/memories/2026_03_10_09_21_IMG_9028.JPG", title: "Travel Memory" },
    { id: 64, image: "/memories/2026_03_10_09_21_IMG_9029.JPG", title: "Travel Memory" },
    { id: 65, image: "/memories/2026_03_10_09_23_IMG_9037.JPG", title: "Travel Memory" },
    { id: 66, image: "/memories/2026_03_10_09_23_IMG_9039.JPG", title: "Travel Memory" },
    { id: 67, image: "/memories/2026_03_10_09_23_IMG_9040.JPG", title: "Travel Memory" },
    { id: 68, image: "/memories/2026_03_10_09_23_IMG_9041.JPG", title: "Travel Memory" },
    { id: 69, image: "/memories/2026_03_10_09_23_IMG_9042.JPG", title: "Travel Memory" },
    { id: 70, image: "/memories/2026_03_10_09_23_IMG_9043.JPG", title: "Travel Memory" },
    { id: 71, image: "/memories/2026_03_10_09_23_IMG_9044.JPG", title: "Travel Memory" },
    { id: 72, image: "/memories/2026_03_10_09_24_IMG_9045.JPG", title: "Travel Memory" },
    { id: 73, image: "/memories/2026_03_10_09_24_IMG_9046.JPG", title: "Travel Memory" },
    { id: 74, image: "/memories/2026_03_10_09_24_IMG_9047.JPG", title: "Travel Memory" },
    { id: 75, image: "/memories/2026_03_10_09_24_IMG_9048.JPG", title: "Travel Memory" },
    { id: 76, image: "/memories/2026_03_10_09_24_IMG_9049.JPG", title: "Travel Memory" },
    { id: 77, image: "/memories/2026_03_10_09_25_IMG_9052.JPG", title: "Travel Memory" },
    { id: 78, image: "/memories/2026_03_10_09_25_IMG_9053.JPG", title: "Travel Memory" },
    { id: 79, image: "/memories/2026_03_10_09_28_IMG_9054.JPG", title: "Travel Memory" },
    { id: 80, image: "/memories/2026_03_10_09_28_IMG_9055.JPG", title: "Travel Memory" },
];
