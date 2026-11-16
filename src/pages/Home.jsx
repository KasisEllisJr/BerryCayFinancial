import ConsultationCTA from "../components/home/ConsultationCTA";
import ProcessSection from "../components/home/ProcessSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import AboutSection from "../components/home/AboutSection";
import StatsStrip from "../components/home/StatsStrip";
import Services from "../components/home/Services";
import Hero from "../components/home/Hero";
import HomeSection from "../components/home/HomeSection";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home-page">

      <Hero />

      <StatsStrip />

      <Services />

      <AboutSection />

      <ProcessSection />

      <TestimonialsSection />

      <ConsultationCTA />

    </main>
  );
}
