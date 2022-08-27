import { ContentPreviewProps } from "types/propTypes";

export const BlogPreview: React.FC<ContentPreviewProps> = ({
  title,
  svgTH,
}) => {
  return (
    <div className="space-y-2 flex flex-col items-center content-center justify-center h-full w-full">
      {svgTH}
      <h4>{title}</h4>
    </div>
  );
};
