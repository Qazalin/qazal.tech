import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col prose max-w-full">
      <div className="w-full h-12">
        <Navbar />
      </div>
      <div className="overflow-x-hidden overflow-y-auto p-2 md:p-4 lg:p-8 flex flex-col items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};