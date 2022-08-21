import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { svgStyles } from "lib/config";
import classNames from "classnames";

export const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  return (
    <button onClick={toggleTheme} className="swap swap-rotate">
      <BsSun
        className={classNames({
          "text-lg md:text-xl lg:text-2xl": true,
          invisible: !isDark,
        })}
      />
      <BsMoon
        className={classNames({
          "text-lg md:text-xl lg:text-2xl": true,
          invisible: isDark,
        })}
      />
    </button>
  );
};
