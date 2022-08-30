import { FiGithub } from "react-icons/fi";

export const Preview = () => {
  return (
    <div className="relative w-full h-full bg-text3 p-2 rounded-md">
      <h2>title</h2>
      <p>desc</p>
      <div
        className="tooltip tooltip-left absolute right-0 bottom-0 cursor-pointer"
        data-tip="view repo"
      >
        <FiGithub />
      </div>
      <Tag>NextJs</Tag>
      <Tag>React</Tag>
      <Tag>Solidity</Tag>
    </div>
  );
};
const Tag = ({ children }: { children: any }) => (
  <div className="inline-block bg-primary rounded-md h-fit w-fit p-1 px-2 text-center justify-center m-1 text-xs md:text-sm lg:text-md">
    {children}
  </div>
);
