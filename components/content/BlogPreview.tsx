import { ContentProps } from "types/propTypes";

export const BlogPreview: React.FC<ContentProps> = ({ title, svgTH }) => {
  return (
    <div className="space-y-2 flex flex-col items-center content-center justify-center h-full w-full">
      {svgTH}
      <p>{title}</p>
    </div>
  );
};
