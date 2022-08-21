import { ReactElement, useState } from "react";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { BsTwitch, BsTwitter } from "react-icons/bs";
import { svgStyles } from "lib/config";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import classNames from "classnames";

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);

  const socialLinks: { link: string; icon: ReactElement }[] = [
    {
      link: "https://twitter.com/qazalin",
      icon: (
        <FiTwitter
          className={classNames(svgStyles, "hover:stroke-[#4B99E5]")}
        />
      ),
    },
    {
      link: "https://twitch.tv/qazalin",
      icon: (
        <BsTwitch className={classNames(svgStyles, "hover:fill-[#8348EE]")} />
      ),
    },
    {
      link: "https://github.com/qazalin",
      icon: (
        <FiGithub className={classNames(svgStyles, "hover:stroke-base-400")} />
      ),
    },
  ];

  return (
    <div className="w-full h-12 fixed bottom-0 ">
      <IoIosArrowDropup
        className={classNames(
          svgStyles,
          "absolute left-4 bottom-2 z-20 cursor-pointer",
          "stroke-base-300"
        )}
        style={{ display: showFooter ? "none" : "initial" }}
        onClick={() => setShowFooter(true)}
      />
      <div
        className={classNames({
          "flex border-t-2 border-t-base-300 items-center justify-around h-full w-full":
            true,
          invisible: !showFooter,
        })}
      >
        <IoIosArrowDropdown
          className={classNames(
            svgStyles,
            "absolute left-4 z-20 cursor-pointer"
          )}
          style={{ top: -12 }}
          onClick={() => setShowFooter(false)}
        />
        {socialLinks.map((l, i) => (
          <a
            href={l.link}
            target="_blank"
            key={`footer-${i}`}
            className="cursor-pointer"
          >
            {l.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
