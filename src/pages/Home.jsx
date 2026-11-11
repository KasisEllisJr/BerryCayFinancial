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

      {/* Process */}
      <HomeSection
        id="process"
        title="Lorem Ipsum"
        alternate
      >
        <p className="section-intro">
          Lorem ipsum dolor sit amet.
        </p>

        <div className="process-grid">
          {[1, 2, 3].map((step) => (
            <article className="process-card" key={step}>
              <span className="step-number">{step}</span>
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </article>
          ))}
        </div>
      </HomeSection>

      {/* Testimonials */}
      <HomeSection
        id="testimonials"
        title="Lorem Ipsum"
      >
        <div className="testimonials-grid">
          {[1, 2, 3].map((item) => (
            <div className="testimonial-card" key={item}>
              <span>“</span>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </HomeSection>

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
