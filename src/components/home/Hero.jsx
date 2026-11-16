import heroPortrait from "../../assets/hero-portrait.jpg";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-heading"
    >
      <div className="container hero-layout">

        {/* Left Column — Hero Content */}
        
        <div className="hero-content">

          <p className="hero-eyebrow">
            EXPERIENCE YOUR BUSINESS CAN COUNT ON
          </p>

          <h1 id="hero-heading">
            Big-firm experience.
            <br />
            Small-business focus.
            <br />
            <span>Trusted Service.</span>
          </h1>

          <p className="hero-description">
            Berry Cay Financial helps Bahamian small businesses
            and individuals stay organised, on time, and
            confident — with bookkeeping, tax reporting, and
            advisory services led by Managing Director
            Samantha Watson-Crooks.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-gold">
              Book a Consultation
            </a>

            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>

        </div>

        {/* Right Column — Portrait */}
        <figure className="hero-portrait">
          <img
            src={heroPortrait}
            alt="Berry Cay Financial founder"
            className="hero-portrait-image"
          />

          <figcaption className="hero-portrait-caption">
            Lorem ipsum dolor sit amet
          </figcaption>
        </figure>

      </div>
    </section>
  );
}
