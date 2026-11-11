
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import HomeSection from "./HomeSection";
import { aboutData } from "../../data/aboutData";

export default function AboutSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <HomeSection
      id="about"
      title={aboutData.heading}
    >
      <div className="about-section-layout">

        {/* LEFT: PORTRAIT */}
        <figure className="about-portrait">

          {!imageError ? (
            <img
              src={aboutData.image}
              alt={aboutData.imageAlt}
              className="about-portrait-image"
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className="about-portrait-placeholder"
              role="img"
              aria-label="Portrait image placeholder"
            >
              <span>Portrait Image</span>
            </div>
          )}

          <figcaption className="about-portrait-caption">
            {aboutData.name}
          </figcaption>

        </figure>

        {/* RIGHT: ABOUT CONTENT */}
        <div className="about-content">

          <p className="about-eyebrow">
            {aboutData.eyebrow}
          </p>

          <h3 className="about-name">
            {aboutData.name}
          </h3>

          <p className="about-introduction">
            {aboutData.introduction}
          </p>

          <p className="about-description">
            {aboutData.description}
          </p>

          {/* Qualifications / Highlights */}
          <ul className="about-highlights">
            {aboutData.highlights.map((item) => (
              <li
                className="about-highlight-item"
                key={item.id}
              >
                <CheckCircle2
                  size={21}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={aboutData.buttonLink}
            className="btn btn-burgundy about-button"
          >
            {aboutData.buttonText}
          </a>

        </div>
      </div>
    </HomeSection>
  );
}
