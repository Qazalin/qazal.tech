export const Timeline = () => {
  return (
    <div className="h-1 w-full bg-zinc-300 rounded-md relative flex"></div>
  );
};

// TODO: based on idx, figure out left position offset
const TimelineDot: React.FC<{ idx: number; name: string }> = ({
  idx,
  name,
}) => {
  return (
    <div className="w-fit">
      <div className="w-3 h-3 rounded-full bg-zinc-400 hover:bg-indigo-400 absolute -top-1 left-[20px]" />
      <span className="text-xs">this one</span>
    </div>
  );
};
