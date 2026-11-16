import HomeSection from "./HomeSection";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/homeData";

export default function Services() {
  return (
    <HomeSection
      id="services"
      title="Services"
      alternate
    >
      <p className="services-intro">
        Four services, one standard: the rigour of a large
        institution, scaled to the reality of a small business.
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
