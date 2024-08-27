import { useEffect, useMemo, useState } from "react";

/**
 * Custom Hook: `useAppTheme`
 *
 * This hook manages the theme (dark or light) for the application and provides utility functions
 * to toggle the theme, persist it in `localStorage`, and apply the appropriate classes to the DOM.
 * It handles both the retrieval and update of the theme, synchronizing the application with the user's preference.
 *
 * @returns {Object} - Contains the following properties:
 *  - `isDark`: A boolean indicating if the dark mode is currently active.
 *  - `handleThemeOnClick`: A function to toggle between light and dark modes.
 *  - `darkClassName`: A string containing the dark mode class to be applied conditionally.
 */

export const useAppTheme = (): object => {
  /**
   * Memoized Theme Initialization
   *
   * @description
   * Retrieves the stored theme preference from `localStorage` and parses it.
   * If no theme preference is found, the default is set to `false` (light mode).
   * This value is memoized using `useMemo` to avoid recomputation on every render.
   *
   * @returns {boolean} - The stored theme preference (`true` for dark mode, `false` for light mode).
   */
  const theme = useMemo(() => {
    const theme = localStorage.getItem("isDark");
    if (theme) {
      const parsedTheme = JSON.parse(theme);
      return parsedTheme;
    }
    return false;
  }, []);

  const [isDark, setIsDark] = useState<boolean>(theme);

  /**
   * Persist Theme to Local Storage
   *
   * @description
   * This `useEffect` synchronizes the `isDark` state with `localStorage`. Whenever `isDark` changes,
   * the new value is saved to `localStorage` as a string.
   */
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  /**
   * Apply Dark Mode Classes
   *
   * @description
   * This `useEffect` applies or removes the `dark` class to the `document.documentElement` (root HTML element)
   * based on the `theme` value. This enables dark mode styling throughout the app.
   */
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  /**
   * Toggle Theme Function
   *
   * @description
   * This function toggles the `isDark` state when called. Additionally, it directly manipulates the root
   * `document.documentElement` by adding or removing the `dark` class based on the new theme state.
   */
  const handleThemeOnClick = () => {
    setIsDark((prev) => !prev);

    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const darkClassName = isDark && "bg-gray-800 h-screen";

  return {
    isDark,
    handleThemeOnClick,
    darkClassName,
  };
};
