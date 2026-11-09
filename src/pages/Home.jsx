
import HomeSection from "../components/home/HomeSection";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-layout">

          <div className="hero-content">
            <span className="hero-eyebrow">
              Lorem ipsum dolor sit amet
            </span>

            <h1>
              Lorem ipsum dolor.
              <br />
              Consectetur adipiscing.
              <br />
              <span>Tempor incididunt.</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-gold">
                Lorem Ipsum
              </a>

              <a href="#services" className="btn btn-outline">
                Dolor Sit
              </a>
            </div>
          </div>

          <div className="hero-image-placeholder">
            <span>Image Placeholder</span>
          </div>

        </div>
      </section>

      {/* Statistics Strip */}
      <section className="stats">
        <div className="container stats-layout">
          {[
            "Lorem ipsum",
            "Dolor sit amet",
            "Consectetur",
            "Adipiscing elit",
          ].map((item, index) => (
            <div className="stat-item" key={index}>
              <strong>{item}</strong>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <HomeSection
        id="services"
        title="Lorem Ipsum"
        alternate
      >
        <p className="section-intro">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="services-grid">
          {[1, 2, 3, 4].map((item) => (
            <article className="service-card" key={item}>
              <div className="service-icon-placeholder" />
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <a href="#contact">Lorem ipsum →</a>
            </article>
          ))}
        </div>
      </HomeSection>

      {/* About */}
      <HomeSection id="about" title="Lorem Ipsum">
        <div className="about-layout">
          <div className="about-image-placeholder">
            Image Placeholder
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Integer vitae justo eget magna
              fermentum iaculis eu non diam.
            </p>

            <p>
              Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>

            <a href="#contact" className="btn btn-burgundy">
              Lorem Ipsum
            </a>
          </div>
        </div>
      </HomeSection>

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
