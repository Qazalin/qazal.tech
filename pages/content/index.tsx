import classNames from "classnames";
import { AppPreview } from "components/content/AppPreview";
import { ContentStats } from "components/content/ContentStats";
import { Quote } from "components/content/Quote";
import type { NextPage } from "next";
import { IoQrCodeOutline } from "react-icons/io5";

const Content: NextPage = () => {
  return (
    <div className="w-full h-[100vh] xl:overflow-hidden">
      <h2 className="font-light font-handWriting capitalize cursor-pointer">
        <span>learn,</span> <span>build,</span> <span>share,</span>{" "}
        <span>repeat.</span>
      </h2>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-2 grid-rows-2">
        <div className="grid grid-cols-2 gap-2">
          <AppPreview platform="twitter" />
          <AppPreview platform="twitch" />
          <AppPreview platform="blog" />
          <AppPreview platform="github" />
        </div>
        <div className="w-full h-full">
          <ContentStats />
        </div>
        <Quote />
      </div>
    </div>
  );
};

export default Content;
