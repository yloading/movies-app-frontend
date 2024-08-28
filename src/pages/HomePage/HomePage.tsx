import { useState } from "react";
import Accordion from "../../components/AccordionComponent";
import Toggle from "../../components/ToggleComponent";
import Tab from "../../components/TabComponent";
import ImdbPage from "../ImdbPage";

const accordionData = [
  {
    title: "What is React?",
    content: <ImdbPage />,
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
/**
 * HomePage Component
 *
 * This functional component renders a homepage that includes an Accordion and a Toggle switch.
 * The Toggle allows the user to decide if multiple Accordion items can be opened at the same time.
 * This page demonstrates the usage of state management in React and the composition of multiple
 * components (Accordion and Toggle) within a functional component.
 *
 */

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
