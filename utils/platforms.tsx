import { BsGithub, BsTwitch, BsTwitter } from "react-icons/bs";

export function getPlatformInfo(platform: string): {
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
} {
  const icon =
    platform === "twitter" ? (
      <BsTwitter />
    ) : platform === "twitch" ? (
      <BsTwitch />
    ) : platform === "blog" ? (
      <BsTwitch />
    ) : (
      <BsGithub />
    );
  const color =
    platform === "twitter"
      ? "bg-stone-800 hover:bg-blue-400"
      : platform === "twitch"
      ? "bg-stone-800 hover:bg-indigo-400"
      : platform === "blog"
      ? "bg-stone-800 hover:bg-green-400"
      : "bg-stone-800 hover:bg-fuchsia-400";

  const hoverColor =
    platform === "twitter"
      ? "hover:bg-blue-400"
      : platform === "twitch"
      ? "hover:bg-indigo-400"
      : platform === "blog"
      ? "hover:bg-green-400"
      : "hover:bg-fuchsia-300";
  return {
    icon,
    color,
    hoverColor,
  };
}
