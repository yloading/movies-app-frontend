import { useCallback, useEffect, useState } from "react";

/**
 * Custom hook to manage accordion state with support for single or multiple open items.
 *
 * @param isOpenMultiple - Boolean flag to determine if multiple accordion items can be open at once.
 *   - `true` for allowing multiple open items.
 *   - `false` for allowing only one open item at a time.
 *
 * @returns An object containing:
 *   - `isOpen`: A function to check if a specific accordion item is open.
 *   - `handleToggle`: A function to toggle the open/closed state of an accordion item.
 */

export const useAccordion = (
  isOpenMultiple: boolean,
  items: { title: string; content: string }[],
  defaultOpenIndex: number | null
) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [multipleOpenedIndex, setMultipleOpenIndex] = useState<Array<number>>(
    []
  );

  // Reset the state when the `isOpenMultiple` parameter changes.
  useEffect(() => {
    if (defaultOpenIndex) {
      setOpenIndex(defaultOpenIndex - 1);
      setMultipleOpenIndex([...multipleOpenedIndex, defaultOpenIndex - 1]);
    } else {
      setOpenIndex(null);
      setMultipleOpenIndex([]);
    }
  }, [isOpenMultiple]);

  useEffect(() => {
    if (
      items &&
      defaultOpenIndex &&
      items.length >= defaultOpenIndex &&
      items.length >= 1
    ) {
      setOpenIndex(defaultOpenIndex - 1);
    }
  }, [defaultOpenIndex, items]);

  /**
   * Toggles the open/closed state of an accordion item.
   *
   * @param index - The index of the accordion item to toggle.
   */
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

  /**
   * Checks if a specific accordion item is open.
   *
   * @param index - The index of the accordion item to check.
   * @returns A boolean indicating if the item is open.
   */
  const isOpen = (index: number): boolean => {
    if (isOpenMultiple) {
      return multipleOpenedIndex.includes(index);
    }

    return openIndex === index;
  };

  return {
    isOpen,
    handleToggle,
  };
};
