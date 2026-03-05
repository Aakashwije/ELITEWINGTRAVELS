import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import StickyCTA from "@/components/ui/StickyCTA";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "EliteWing Travels | Luxury Sri Lanka Tours & Private Travel",
    template: "%s | EliteWing Travels",
  },
  description:
    "Experience Sri Lanka like never before with EliteWing Travels. Premium private tours, luxury fleet, and authentic Sri Lankan hospitality since 2005. Book your bespoke journey today.",
  keywords: [
    "Sri Lanka luxury tours",
    "private tours Sri Lanka",
    "luxury travel Sri Lanka",
    "Sri Lanka tourism",
    "Sigiriya tours",
    "Galle tours",
    "Sri Lanka safari",
    "honeymoon Sri Lanka",
    "EliteWing Travels",
  ],
  authors: [{ name: "EliteWing Travels" }],
  creator: "EliteWing Travels",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitewingtravels.com",
    siteName: "EliteWing Travels",
    title: "EliteWing Travels | Luxury Sri Lanka Tours",
    description:
      "Premium private tours, luxury fleet, and authentic Sri Lankan hospitality since 2005.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EliteWing Travels - Luxury Sri Lanka Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EliteWing Travels | Luxury Sri Lanka Tours",
    description:
      "Premium private tours, luxury fleet, and authentic Sri Lankan hospitality since 2005.",
  },
  icons: {
    icon: "/assets/images/elitewing.png",
    apple: "/assets/images/elitewing.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "EliteWing Travels",
    url: "https://elitewingtravels.com",
    description:
      "Premium luxury travel and private tours in Sri Lanka since 2005.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
    },
    sameAs: [
      "https://facebook.com/elitewingtravels",
      "https://instagram.com/elitewingtravels",
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyCTA />
      </body>
    </html>
  );
}
