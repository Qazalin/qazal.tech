import { PlatformLayout } from "components/content/PlatformLayout";
import { SUPPORTED_PLATFORMS } from "lib/constants";
import { useRouter } from "next/router";

const CustomContent = () => {
  const router = useRouter();
  const { platform } = router.query;
  if (platform) {
    if (!SUPPORTED_PLATFORMS.find((p) => p === platform)) {
      router.push("/404");
      return <div className="h-[100vh]" />;
    }
  }

  return <PlatformLayout platform="twitter"></PlatformLayout>;
};

export default CustomContent;
