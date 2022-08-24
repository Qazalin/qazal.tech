import { BiHomeAlt } from "react-icons/bi";
import { IoAppsOutline } from "react-icons/io5";
import { ReactElement } from "react";
import { BsCalendar4Event } from "react-icons/bs";
import { useRouter } from "next/router";
import classNames from "classnames";
import { DarkModeSwitch } from "./DarkModeSwicth";
import { svgStyles } from "lib/config";

export const Navbar = () => {
  const router = useRouter();

  const navbarSections: { slug: string; icon: ReactElement }[] = [
    {
      slug: "/",
      icon: <BiHomeAlt className={"text-lg md:text-xl lg:text-2xl"} />,
    },
    {
      slug: "/content",
      icon: <IoAppsOutline className={classNames(svgStyles)} />,
    },
    { slug: "/chat", icon: <BsCalendar4Event className={svgStyles} /> },
  ];

  return (
    <div className="btm-nav relative">
      {navbarSections.map((s, i) => (
        <button
          key={`nav-${i}`}
          className={classNames({
            "border-b-2": router.route === s.slug,
          })}
          onClick={() => router.push(s.slug)}
        >
          {s.icon}
        </button>
      ))}
      <DarkModeSwitch />
    </div>
  );
};
