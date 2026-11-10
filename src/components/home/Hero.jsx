
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
            Lorem ipsum dolor sit amet
          </p>

          <h1 id="hero-heading">
            Lorem ipsum dolor.
            <br />
            Consectetur adipiscing.
            <br />
            <span>Tempor incididunt.</span>
          </h1>

          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn btn-gold"
            >
              Lorem Ipsum
            </a>

            <a
              href="#services"
              className="btn btn-outline"
            >
              Dolor Sit
            </a>
          </div>

        </div>

        {/* Right Column — Portrait */}
        <figure className="hero-portrait">

          {!imageError ? (
            <img
              src="/images/hero-portrait.jpg"
              alt="Berry Cay Financial founder portrait"
              className="hero-portrait-image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className="hero-portrait-placeholder"
              role="img"
              aria-label="Portrait image placeholder"
            >
              <span>Portrait Image</span>
            </div>
          )}

          <figcaption className="hero-portrait-caption">
            Lorem ipsum dolor sit amet
          </figcaption>

        </figure>

      </div>
    </section>
  );
}
