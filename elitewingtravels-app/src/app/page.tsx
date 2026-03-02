import HeroSection from "@/components/home/HeroSection";
import HospitalitySection from "@/components/home/HospitalitySection";
import MapSection from "@/components/home/MapSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import LegacySection from "@/components/home/LegacySection";
import FleetSection from "@/components/home/FleetSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TourBuilderSection from "@/components/home/TourBuilderSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HospitalitySection />
      <MapSection />
      <DestinationsSection />
      <LegacySection />
      <FleetSection />
      <TestimonialsSection />
      <TourBuilderSection />
    </>
  );
}
