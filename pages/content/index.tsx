import classNames from "classnames";
import { ContentGrid } from "components/content/ContentGrid";
import type { NextPage } from "next";

const Content: NextPage = () => {
  return (
    <div className="w-full h-[100vh]">
      <h2 className="font-light font-handWriting capitalize cursor-pointer">
        <span>learn,</span> <span>build,</span> <span>share,</span>{" "}
        <span>repeat.</span>
      </h2>
    </div>
  );
};

export default Content;
