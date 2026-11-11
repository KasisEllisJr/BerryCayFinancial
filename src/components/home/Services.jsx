
import HomeSection from "./HomeSection";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/homeData";

export default function Services() {
  return (
    <HomeSection
      id="services"
      title="Lorem Ipsum Dolor Sit Amet"
      alternate
    >
      <p className="services-intro">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
          />
        ))}
      </div>
    </HomeSection>
  );
}
