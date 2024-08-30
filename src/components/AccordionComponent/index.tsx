import React, { ReactElement } from "react";
import { useAccordion } from "./hooks/useAccordion";

/**
 * AccordionItem Component
 *
 * This component represents an individual item in the accordion. Each item has a title and content,
 * and can be toggled open or closed. The display state (open/closed) is controlled by props passed
 * down from the parent Accordion component.
 *
 *
 *  * Props:
 * - `title` (string): The title of the accordion item, displayed when the item is collapsed or expanded.
 * - `content` (string): The content of the accordion item, shown when the item is expanded.
 * - `isOpen` (function): A function that returns whether the current item is open or closed.
 * - `onClick` (function): A function that triggers when the title bar of the accordion item is clicked, toggling the item's open/closed state.
 *
 *
 */

interface AccordionItemProps {
  title: string;
  content: string | ReactElement;
  isOpen: () => boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border border-gray-200 rounded-md mb-4 shadow-lg dark:border-gray-700">
      <div
        className={`bg-gradient-to-r from-cyan-600 ${
          isOpen() ? "to-blue-500" : "to-blue-200"
        } text-white p-4 cursor-pointer flex justify-between items-center rounded-md hover:p-5 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-500 transition-all delay-75`}
        onClick={onClick}
      >
        <h2 className="text-lg font-semibold font-serif">{title}</h2>
        <span>{isOpen() ? "-" : "+"}</span>
      </div>
      {isOpen() && (
        <div className="p-4 bg-gray-300 dark:bg-gray-700 dark:text-white rounded-b-md dark:rounded-b-sm whitespace-pre-wrap">
          {content}
        </div>
      )}
    </div>
  );
};

/**
 * Accordion Component
 *
 * The Accordion component is a container for multiple AccordionItem components. It handles
 * the logic of toggling open/close states using the `useAccordion` custom hook. It supports
 * single or multiple items being open simultaneously, controlled by the `isOpenMultiple` prop.
 *
 * Props:
 * - `items` (Array of objects): The array of accordion items, each containing a `title` and `content`.
 * - `isOpenMultiple` (boolean, optional): Determines if multiple items can be open at the same time. Defaults to false.
 *
 * Example Usage:
 *
 * <Accordion items={accordionItems} isOpenMultiple={true} />
 *
 */

interface AccordionProps {
  items: { title: string; content: string | ReactElement }[];
  isOpenMultiple?: boolean;
  defaultOpenIndex?: number | null;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  isOpenMultiple = false,
  defaultOpenIndex = null,
}) => {
  const { handleToggle, isOpen } = useAccordion(
    isOpenMultiple,
    items,
    defaultOpenIndex
  );

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={() => isOpen(index)}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
