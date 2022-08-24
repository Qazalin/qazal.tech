import { About, Stack, PrevWork } from "components/home";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="prose prose-md md:prose-lg lg:prose-2xl">
      <h2 className="font-light font-handWriting">
        Care to build exceptional products
      </h2>
      <About />
      <Stack />
      <PrevWork />
    </div>
  );
};

export default Home;
