import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
