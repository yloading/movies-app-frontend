import React from "react";
import { useAccordion } from "./hooks/useAccordion";

interface AccordionItemProps {
  title: string;
  content: string;
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
    <div className="border border-gray-300 rounded-md mb-4">
      <div
        className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
        onClick={onClick}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span>{isOpen() ? "-" : "+"}</span>
      </div>
      {isOpen() && <div className="p-4 bg-white">{content}</div>}
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: string }[];
  isOpenMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  isOpenMultiple = false,
}) => {
  const { handleToggle, isOpen } = useAccordion(isOpenMultiple);

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
