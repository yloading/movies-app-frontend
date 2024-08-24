import { useState } from "react";
import Accordion from "../../components/AccordionComponent";
import Toggle from "../../components/ToggleComponent";

const accordionData = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is a component?",
    content:
      "A component is a reusable piece of code in React that renders a part of the UI.",
  },
  {
    title: "What is JSX?",
    content: "text",
  },
];

function HomePage() {
  const [isOpenMultiple, setIsOpenMultiple] = useState<boolean>(false);

  return (
    <div>
      <div className="mb-3">
        <Toggle
          checked={isOpenMultiple}
          onChange={() => setIsOpenMultiple((prev) => !prev)}
          label="Multiple open accordion"
        />
      </div>

      <Accordion items={accordionData} isOpenMultiple={isOpenMultiple} />
    </div>
  );
}

export default HomePage;
