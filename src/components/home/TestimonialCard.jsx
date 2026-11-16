
export default function TestimonialCard({
  quote,
  name,
  subtitle,
}) {
  return (
    <figure className="testimonial-card">

      <span
        className="testimonial-quotation-mark"
        aria-hidden="true"
      >
        “
      </span>

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
