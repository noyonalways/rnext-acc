/**
 * Learn form this lession
 * Lifting state up
 * One way data flow
 */

import Panel from "@/components/Accordion/Panel";
import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    {
      id: 1,
      title: "Free Course",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, atque!",
    },
    {
      id: 2,
      title: "Paid Course",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, atque!",
    },
    {
      id: 3,
      title: "Premium Course",
      content: "Get access to all premium features and advanced content!",
    },
  ];

  return (
    <div className="mx-auto mt-10 w-full max-w-3xl">
      <h1 className="mb-2 text-2xl font-bold">Learn With Sumit</h1>
      <div className="space-y-3">
        {panels.map((panel, index) => (
          <Panel
            key={panel.id}
            onToggle={() => setActiveIndex(index)}
            expanded={activeIndex === index}
            title={panel.title}
          >
            {panel.content}
          </Panel>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
