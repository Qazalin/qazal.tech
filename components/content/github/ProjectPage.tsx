import { useState } from "react";
import { ProjectPageProps, TechProjectType } from "types";

export const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  description,
  url,
  tech,
}) => {
  return (
    <>
      <h1 className="dark:text-indigo-400 text-indigo-500">{title}</h1>
      <p>{description}</p>
      <div className="flex flex-col space-y-2 w-full h-full">
        {tech.map((t, i) => (
          <Tech {...t} key={`tech-${i}`} />
        ))}
      </div>
    </>
  );
};

const Tech: React.FC<TechProjectType> = ({ name, why }) => {
  const [opacity, setOpacity] = useState("opacity-0");
  const isExpanded = opacity === "opacity-1";

  return (
    <div
      className={`w-full h-44 rounded-md flex justify-center items-center text-xl md:text-2xl lg:text-3xl cursor-pointer transition-all space-x-4`}
      onClick={() => setOpacity(isExpanded ? "opacity-0" : "opacity-1")}
    >
      <p className="w-44 bg-zinc-900 flex justify-center items-center h-full rounded-md">
        {name}
      </p>
      <p
        className={`w-[calc(100vw-11rem)] p-2 bg-zinc-900 h-full flex justify-center items-center text-md md:text-lg lg:text-xl rounded-md ${opacity} transition-all`}
      >
        {why}
      </p>
    </div>
  );
};
