import classNames from "classnames";
import type { NextPage } from "next";

const Content: NextPage = () => {
  return (
    <div className="prose prose-md md:prose-lg lg:prose-2xl w-full h-[100vh]">
      <h2 className="font-light font-handWriting capitalize cursor-pointer">
        <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-emerald-200 to-green-400 animate-[animated-gradient-tilte-1_5s_ease-in-out_infinite]">
          learn,
        </span>{" "}
        <span>build,</span> <span>share,</span> <span>repeat.</span>
      </h2>
    </div>
  );
};

export default Content;
