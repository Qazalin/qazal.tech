import { getPlatformInfo } from "utils/platforms";
import { BiArrowBack } from "react-icons/bi";
import { DESCRIPTIONS, LAYOUTS } from "lib/constants";
import { useRouter } from "next/router";

export const PlatformLayout: React.FC<{ platform: any }> = ({ platform }) => {
  const router = useRouter();

  return (
    <div className="h-[100vh] w-full">
      <div
        className="hover:bg-base-200 cursor-pointer w-fit h-fit p-2 lg:p-3 rounded-md"
        onClick={() => router.push("/content")}
      >
        <BiArrowBack />
      </div>
      <h1 className="mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">{platform}</h1>
      <p className="font-handWriting">{DESCRIPTIONS[platform]}</p>
      {LAYOUTS[platform]}
    </div>
  );
};
