import HomeSection from "./HomeSection";
import ProcessCard from "./ProcessCard";

import { processSteps } from "../../data/engagementData";

export default function ProcessSection() {
  return (
    <HomeSection
      id="process"
      title="Lorem Ipsum Dolor Sit"
      alternate
    >
      <p className="process-intro">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>

      <ol className="process-steps">
        {processSteps.map((step) => (
          <ProcessCard
            key={step.id}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </ol>
    </HomeSection>
  );
}
