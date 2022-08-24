import { BlogPrevPop } from "lib/props";
import { BlogPreview } from "./BlogPreview";
export const ContentGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full w-full gap-2 md:gap-4 lg:gap-8">
      <G />
      <G />
      <G />
      <G />
    </div>
  );
};

const G = () => (
  <>
    <div className="col-span-1 md:col-span-1 lg:col-span-1 border-2 border-stone-400 rounded-lg">
      <BlogPreview {...BlogPrevPop} />
    </div>
    <div className="col-span-1 md:col-span-1 lg:col-span-1 border-2 border-stone-400 rounded-lg">
      <BlogPreview {...BlogPrevPop} />
    </div>
    <div className="col-span-1 md:col-span-1 lg:col-span-2 border-2 border-stone-400 rounded-lg">
      <BlogPreview {...BlogPrevPop} />
    </div>
  </>
);
