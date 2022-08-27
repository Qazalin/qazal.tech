import { getPlatformInfo } from "utils/platforms";

export const PlatformLayout: React.FC<{ platform: string }> = ({
  platform,
}) => {
  const { icon, color } = getPlatformInfo(platform);
  return <div className="h-[100vh]" />;
};
