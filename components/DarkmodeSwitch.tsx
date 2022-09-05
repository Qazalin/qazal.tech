import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

export const DarkModeSwitch = ({}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  useEffect(
    () => setMounted(true),

    []
  );
  function switchTheme() {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  if (!mounted) return null;
  if (isDark)
    return (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        onClick={switchTheme}
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer stroke-gray-700 hover:stroke-black hover:bg-gray-300 dark:stroke-gray-200 text-4xl dark:hover:bg-gray-800 p-1 rounded-lg transition-colors w-full h-full`}
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    );
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      onClick={switchTheme}
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer stroke-gray-700 hover:stroke-black hover:bg-gray-300 dark:stroke-gray-200 text-4xl dark:hover:bg-gray-800 p-1 rounded-lg transition-colors w-full h-full`}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
};
