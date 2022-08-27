import { useRouter } from "next/router";
import { BsGithub, BsTwitch, BsTwitter } from "react-icons/bs";

export const AppPreview: React.FC<{ platform: string }> = ({ platform }) => {
  const router = useRouter();
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
      ? "bg-blue-400"
      : platform === "twitch"
      ? "bg-indigo-400"
      : platform === "blog"
      ? "bg-green-400"
      : "bg-fuchsia-300";
  return (
    <div
      className={`${color} rounded-md p-2 flex flex-col justify-center items-center not-prose cursor-pointer`}
      onClick={() => router.push(`$/content/{platform}`)}
    >
      {icon}
      <h3 className="text-lg md:text-xl lg:text-2xl capitalize mt-2">
        {platform}
      </h3>
    </div>
  );
};
