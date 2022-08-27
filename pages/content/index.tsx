import classNames from "classnames";
import { AppPreview } from "components/content/AppPreview";
import type { NextPage } from "next";

const Content: NextPage = () => {
  return (
    <div className="w-full h-[100vh]">
      <h2 className="font-light font-handWriting capitalize cursor-pointer">
        <span>learn,</span> <span>build,</span> <span>share,</span>{" "}
        <span>repeat.</span>
      </h2>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-2">
          <AppPreview platform="twitter" />
          <AppPreview platform="twitch" />
          <AppPreview platform="blog" />
          <AppPreview platform="github" />
        </div>
      </div>
    </div>
  );
};

export default Content;
