import { WorkStoryProps } from "types/propTypes";

export const WorkStory: React.FC<WorkStoryProps> = ({
  title,
  logo,
  company,
  startDate,
  endDate,
  skills,
  description,
}) => {
  return (
    <div>
      <div className="flex items-center space-x-4 max-h-fit">
        <div className="h-10 md:h-14 lg:h-20">{logo}</div>
        <div>
          <h4 className="capitalize">{title}</h4>
          <p>
            {company}{" "}
            <span className="text-sm">
              | {startDate} - {endDate}
            </span>
          </p>
        </div>
      </div>
      <div className="flex space-x-3">
        {skills.map((s, i) => (
          <p
            className="text-sm text-primary font-bold capitalize hover:text-base-300"
            key={`skill-${company}-${i}`}
          >
            {s}
          </p>
        ))}
      </div>
      <div>{description}</div>
    </div>
  );
};
