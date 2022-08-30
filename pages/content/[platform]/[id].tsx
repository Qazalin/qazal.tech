import { Dispatch, SetStateAction, useState } from "react";

const Id = () => {
  const [width1, setWidth1] = useState("w-44");
  const [width2, setWidth2] = useState("w-44");

  const toggleWidth = (w: string, setter: Dispatch<SetStateAction<string>>) => {
    setter(w === "w-44" ? "w-full" : "w-44");
  };
  return (
    <div className="h-[100vh] w-full">
      <h1 className="dark:text-indigo-400 text-indigo-500">Zelda</h1>
      <p>
        It all started out with an idea, if I was gonna re-build NFTGo's UI from
        scratch, and I had all the data available through an API, what would I
        build. How would I visualize raw json responses?
      </p>
      <div className="flex flex-col space-y-2 w-full h-full">
        <div
          className={`${width1} h-44 bg-zinc-900 rounded-md flex justify-center items-center text-xl md:text-2xl lg:text-3xl cursor-pointer transition-all`}
          onClick={() => toggleWidth(width1, setWidth1)}
        >
          Typscript
        </div>
        <div
          className={`${width2} h-44 bg-zinc-900 rounded-md flex justify-center items-center text-xl md:text-2xl lg:text-3xl cursor-pointer transition-all`}
          onClick={() => toggleWidth(width2, setWidth2)}
        >
          Typscript
        </div>
      </div>
    </div>
  );
};

export default Id;
