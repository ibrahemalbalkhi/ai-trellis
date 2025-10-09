import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import ImplementationSection from "@/components/sections/ImplementationSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SaudiMarketSection from "@/components/sections/SaudiMarketSection";
import ValueSection from "@/components/sections/ValueSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/shared/ScrollProgress";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <ImplementationSection />
        <HowWeWorkSection />
        <SaudiMarketSection />
        <ServicesGrid />
        <ValueSection />
        <CaseStudiesSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
