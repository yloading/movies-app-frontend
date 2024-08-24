import { useEffect, useMemo, useState } from "react";

export const useAppTheme = () => {
  const theme = useMemo(() => {
    const theme = localStorage.getItem("isDark");
    if (theme) {
      const parsedTheme = JSON.parse(theme);
      return parsedTheme;
    }
    return false;
  }, []);

  const [isDark, setIsDark] = useState<boolean>(theme);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
