"use client";
//#region Imports
import { Header } from "@/components/layout/Header";
import { BookingWidget } from "@/components/sections/bookingWidget";
import { ClinicalInsights } from "@/components/sections/clinicalInsights";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/heroSection";
import { HowItWorksSection } from "@/components/sections/howItWorksSection";
import { MapWithDetails } from "@/components/sections/mapWithDetails";
import { PhilosophySection } from "@/components/sections/philosophySection";
import { PromoBanner } from "@/components/sections/promoBanner";
import { ServicesList } from "@/components/sections/servicesList";
import { TestimonialFeatured } from "@/components/sections/testimonialFeatured";
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
      <Header />
      <PromoBanner />

      <HeroSection />

      <PhilosophySection />

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
