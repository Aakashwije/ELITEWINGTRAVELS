import HeroSection from "@/components/home/HeroSection";
import HospitalitySection from "@/components/home/HospitalitySection";
import JourneySection from "@/components/home/JourneySection";
import MapSection from "@/components/home/MapSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TourBuilderSection from "@/components/home/TourBuilderSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HospitalitySection />
      <JourneySection />
      <MapSection />
      <DestinationsSection />
      <div className="h-16 md:h-20" aria-hidden="true" />
      <TestimonialsSection />
      <TourBuilderSection />
    </>
  );
}
