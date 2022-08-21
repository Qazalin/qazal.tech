import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-full h-12">
        <Navbar />
      </div>
      <div className="w-[100vw] h-[calc(100vh-5rem)] overflow-y-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};
