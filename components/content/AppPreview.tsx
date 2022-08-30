import { useRouter } from "next/router";
import { getPlatformInfo } from "utils/platforms";

export const AppPreview: React.FC<{ platform: string }> = ({ platform }) => {
  const router = useRouter();
  const { icon, color, hoverColor } = getPlatformInfo(platform);

  return (
    <div
      className={`bg-zinc-100 dark:bg-zinc-900 rounded-md p-2 flex flex-col justify-center items-center not-prose cursor-pointer`}
      onClick={() => router.push(`/content/${platform}`)}
    >
      {icon}
      <h3 className="text-lg md:text-xl lg:text-2xl capitalize mt-2">
        {platform}
      </h3>
    </div>
  );
};
