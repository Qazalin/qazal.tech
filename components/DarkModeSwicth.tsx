import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { svgStyles } from "lib/config";
import { useEffect, useState } from "react";

export const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  function switchTheme() {
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  return (
    <button
      onClick={switchTheme}
      className="relative justify-center items-center flex basis-full h-full cursor-pointer"
    >
      {mounted &&
        (isDark ? (
          <BsSun className={svgStyles} />
        ) : (
          <BsMoon className={svgStyles} />
        ))}
    </button>
  );
};
