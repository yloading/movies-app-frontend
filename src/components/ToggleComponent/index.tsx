/**
 * Toggle Component
 *
 * A reusable toggle switch component for enabling or disabling certain features. This component
 * is controlled by the `checked` prop, and when interacted with, it triggers the `onChange` function
 * passed from the parent component. A label is also displayed next to the toggle switch.
 *
 * * Example Usage:
 * ```jsx
 * <Toggle checked={checked} onChange={onChange} label="Test" />
 *
 */

import React from "react";

interface ToggleProps {
  checked: boolean; // Indicates whether the toggle is on (true) or off (false)
  onChange: () => void; // Function to handle the change in state when the toggle is clicked
  label: string; // The label text to display next to the toggle switch
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label }) => {
  return (
    <label className="inline-flex items-center cursor-pointer text-black">
      <input
        type="checkbox"
        value=""
        name="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      <span className="ms-3 text-sm font-medium text-black dark:text-gray-300">
        {label}
      </span>
    </label>
  );
};

export default Toggle;
