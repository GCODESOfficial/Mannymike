import HeroSection from "./components/hero-section";
import VideoPlayer from "./components/CustomVideoPlayer";
import WorksSection from "./components/works";
import ServicesSection from "./components/ServicesSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import VerticalTestimonialCarousel from "./components/VerticalTestimonialCarousel";
import Experience from "./components/experience";
import Testimonials from "./components/Testimonials";
import TrustedBrands from "./components/TrustedBrands";

export default function Home() {
  return (
    <div className="min-h-screen pt-40 overflow-hidden">
      <HeroSection />
      <main className="flex items-center justify-center md:bg-[#D9D9D9] p-4 md:px-14">
        <VideoPlayer />
      </main>
      <TrustedBrands />
      <WorksSection />
      <ServicesSection />
      <Experience />
      <WorkExperienceSection />
      <Testimonials />
      <VerticalTestimonialCarousel />
    </div>
  );
}
