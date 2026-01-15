"use client";
//#region Imports
import { ClinicalInsights } from "@/components/sections/clinicalInsights";
import { BookingWidget } from "@/components/sections/bookingWidget";
import { HowItWorksSection } from "@/components/sections/howItWorksSection";
import StickyRevealSection from "@/components/sections/stickyRevealSection";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/heroSection";
import { MapWithDetails } from "@/components/sections/mapWithDetails";
import { ServicesList } from "@/components/sections/servicesList";
import { TestimonialFeatured } from "@/components/sections/testimonialFeatured";
import { PromoBanner } from "@/components/sections/promoBanner";
import { useScrollSpy } from "@/hooks/useScrollSpy";
//#endregion

export default function Home() {
  //#region Hooks
  useScrollSpy([
    { id: "hero" },
    { id: "our-approach" },
    { id: "consultation-flow" },
    { id: "clinical-areas" },
    { id: "founder-quote" },
    { id: "clinical-insights" },
    { id: "schedule" },
    { id: "address" },
    { id: "footer" },
  ]);
  //#endregion

  return (
    <main className="relative">
      <PromoBanner />

      <HeroSection />

      <StickyRevealSection />

      <HowItWorksSection />

      <ServicesList />

      <TestimonialFeatured />

      <ClinicalInsights />

      <BookingWidget />

      <MapWithDetails />

      <Footer />
    </main>
  );
}
