import { MediaPreviewProps } from "types/propTypes";
import { FiTwitter } from "react-icons/fi";
import { BsTwitch } from "react-icons/bs";

export const MediaPreview: React.FC<MediaPreviewProps> = ({
  title,
  svgTH,
  platform,
}) => {
  const icon =
    platform == "twitch" ? (
      <BsTwitch className="text-xl fill-indigo-400" />
    ) : (
      <FiTwitter className="text-xl fill-sky-400" />
    );
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 w-full h-full gap-3">
      <div className="absolute top-2 left-2">{icon}</div>
      <div className="flex justify-center items-center">
        <h4>{title}</h4>
      </div>
      <div className="flex justify-center items-center small-svg">{svgTH}</div>
    </div>
  );
};
