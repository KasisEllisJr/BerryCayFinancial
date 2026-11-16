import HomeSection from "./HomeSection";
import TestimonialCard from "./TestimonialCard";

import { testimonials } from "../../data/engagementData";

export default function TestimonialsSection() {
  return (
    <HomeSection
      id="testimonials"
      title="Lorem Ipsum"
    >
      <p className="testimonials-intro">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            quote={testimonial.quote}
            name={testimonial.name}
            subtitle={testimonial.subtitle}
          />
        ))}
      </div>
    </HomeSection>
  );
}
