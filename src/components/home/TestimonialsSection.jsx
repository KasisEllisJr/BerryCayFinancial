import HomeSection from "./HomeSection";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <HomeSection
      id="testimonials"
      title="What clients say"
    >
      <div className="testimonials-grid">
        {[1, 2, 3].map((item) => (
          <TestimonialCard key={item} />
        ))}
      </div>
    </HomeSection>
  );
}
