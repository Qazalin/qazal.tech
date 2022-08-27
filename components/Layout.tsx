import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col prose prose-sm md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-full">
      <div className="w-full h-fit">
        <Navbar />
      </div>
      <div className="overflow-x-hidden overflow-y-auto flex flex-col items-center px-4 md:px-8 lg:px-16">
        {children}
      </div>
      <div className="w-full h-fit">
        <Footer />
      </div>
    </div>
  );
};
//  p-2 md:p-4 lg:p-8
