import { Star } from "lucide-react";

export default function TestimonialCard({
  quote,
  name,
  subtitle,
}) {
  return (
    <figure className="testimonial-card">
      <div
        className="testimonial-stars"
        aria-hidden="true"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={17}
            fill="currentColor"
            strokeWidth={1}
          />
        ))}
      </div>

      <blockquote className="testimonial-quote">
        <p>{quote}</p>
      </blockquote>

      <figcaption className="testimonial-author">
        <span className="testimonial-name">
          {name}
        </span>

        <span className="testimonial-subtitle">
          {subtitle}
        </span>
      </figcaption>
    </figure>
  );
}
