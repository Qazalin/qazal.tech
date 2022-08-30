import React from "react";

export const Timeline: React.FC<{
  items: string[];
  isMobile: boolean | null;
}> = ({ items, isMobile }) => {
  if (isMobile) {
    return (
      <div className="w-1 h-full bg-zinc-300 rounded-md relative flex">
        <div className="w-full h-full flex justify-between absolute -top-1"></div>
      </div>
    );
  }
  return (
    <div className="h-1 w-full bg-zinc-300 rounded-md relative flex">
      <div className="w-full h-full flex justify-between absolute -top-1">
        {items.map((item, idx) => (
          <TimelineDot name={item} key={`timeline-${idx}`} />
        ))}
      </div>
    </div>
  );
};

const TimelineDot: React.FC<{ name: string }> = ({ name }) => (
  <div className="relative">
    <div className="w-3 h-3 rounded-full bg-zinc-400 hover:bg-indigo-400" />
    <p className="text-xs absolute top-1 text-zinc-400">{name}</p>
  </div>
);
