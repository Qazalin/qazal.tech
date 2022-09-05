import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="w-full h-12 bg-zinc-900 absolute">
        <Navbar />
      </div>
      <div className="w-full h-[calc(100%-3rem)] absolute bottom-0">
        {children}
      </div>
    </div>
  );
};
