import { Timeline } from "components/content/github";
import { ProjectPage } from "components/content/github/ProjectPage";
import { projectPageProps } from "lib/props";

const Id = () => {
  return (
    <div className="h-[100vh] w-full">
      <ProjectPage {...projectPageProps} />
      <Timeline />
    </div>
  );
};

export default Id;
