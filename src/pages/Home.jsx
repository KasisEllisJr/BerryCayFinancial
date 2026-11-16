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

      {/* Final CTA */}
      <section id="contact" className="final-cta">
        <div className="container">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Consectetur adipiscing elit,
            sed do eiusmod tempor incididunt.
          </p>
          <a href="mailto:hello@example.com" className="btn btn-gold">
            Lorem Ipsum
          </a>
        </div>
      </section>

    </main>
  );
}
