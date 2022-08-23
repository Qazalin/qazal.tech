import classNames from "classnames";
import { useEffect, useState } from "react";

export const Stack = () => {
  const techStack = [
    "NextJs",
    "React",
    "TailwindCss",
    "Solidity",
    "Python",
    "Prisma",
    "TypeScript",
    "GraphQl",
  ];
  const [selectedStack, setSelectedStack] = useState<string[]>([]);
  function addSelection(s: string) {
    if (selectedStack.includes(s)) {
      setSelectedStack(selectedStack.filter((t) => t !== s));
    } else {
      setSelectedStack((prevS) => [...prevS, s]);
    }
  }

  return (
    <div className="flex flex-col">
      <h3>Tech Stack</h3>
      <p>
        always changing, I'm constantly looking for a balance of cutting-edge
        and established technologies
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-2">
        {techStack.map((tech, i) => (
          <button
            key={`tech-${i}`}
            className={classNames({
              "btn btn-lg capitalize": true,
              "btn-primary": selectedStack.includes(tech),
            })}
            onClick={() => addSelection(tech)}
          >
            {tech}
          </button>
        ))}
      </div>
      <button
        className={classNames({
          "btn btn-primary self-end": true,
          invisible: selectedStack.length === 0,
        })}
      >
        find projects based on the selected stack
      </button>
    </div>
  );
};
