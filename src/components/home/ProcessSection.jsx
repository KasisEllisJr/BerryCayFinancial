import HomeSection from "./HomeSection";
import ProcessCard from "./ProcessCard";
import { processSteps } from "../../data/engagementData";

export default function ProcessSection() {
  return (
    <HomeSection
      id="process"
      title="How it works"
      alternate
    >
      <p className="process-intro">
        Getting started takes three steps.
      </p>

      <ol className="process-steps">
        {processSteps.map((step) => (
          <ProcessCard
            key={step.id}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </ol>
    </HomeSection>
  );
}
