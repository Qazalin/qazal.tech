import { WorkStory } from "./WorkStory";
import { workStory } from "lib/props";

export const PrevWork = () => {
  return (
    <div>
      <h3>Previuos work</h3>
      <div className="flex flex-col">
        {workStory.map((w, i) => {
          return (
            <>
              <WorkStory {...w} key={`work-story-${i}`} />
              {i !== workStory.length - 1 && <hr />}
            </>
          );
        })}
      </div>
    </div>
  );
};
