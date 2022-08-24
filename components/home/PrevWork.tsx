import { WorkStory } from "./WorkStory";
import { workStory } from "lib/props";
import React from "react";

export const PrevWork = () => {
  return (
    <div>
      <h3>Previuos work</h3>
      <div className="flex flex-col">
        {workStory.map((w, i) => {
          return (
            <div key={`work-story-${i}`}>
              <WorkStory {...w} />
              {i !== workStory.length - 1 && <hr />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
