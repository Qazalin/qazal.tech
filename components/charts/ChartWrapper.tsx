import classNames from "classnames";
import { PropsWithChildren, ReactNode } from "react";

export const ChartWrapper: React.FC<
  PropsWithChildren<{
    title?: string;
    controls?: ReactNode;
    className?: string;
  }>
> = ({ title, children, controls, className }) => {
  const cName = classNames(
    "relative p-2 lg:p-4 rounded-md h-96 capitalize w-full",
    className
  );
  return (
    <div className={cName}>
      <div className="relative">
        <h1 className="text-lg md:text-xl 2xl:text-3xl text-center font-semibold">
          {title}
        </h1>
        {controls}
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
