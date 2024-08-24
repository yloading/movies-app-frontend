import { useEffect, useState } from "react";

export const useAccordion = (isOpenMultiple: boolean) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [multipleOpenedIndex, setMultipleOpenIndex] = useState<Array<number>>(
    []
  );

  useEffect(() => {
    setOpenIndex(null);
    setMultipleOpenIndex([]);
  }, [isOpenMultiple]);

  const handleToggle = (index: number) => {
    if (isOpenMultiple) {
      if (isOpen(index)) {
        setMultipleOpenIndex(multipleOpenedIndex.filter((i) => i !== index));
      } else {
        setMultipleOpenIndex([...multipleOpenedIndex, index]);
      }
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const isOpen = (index: number): boolean => {
    if (isOpenMultiple) {
      return multipleOpenedIndex.includes(index);
    }

    return openIndex === index;
  };

  return {
    isOpen,
    handleToggle,
  }
};
