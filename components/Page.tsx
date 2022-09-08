import { SEOType } from "types";
import { NextSeo } from "next-seo";
import { PropsWithChildren } from "react";

export const Page: React.FC<PropsWithChildren<{ seo: SEOType }>> = ({
  seo,
  children,
}) => {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.description}
        openGraph={{
          title: seo.title,
          description: seo.description,
          images: [
            {
              url: seo.image.url,
              width: 1280,
              height: 720,
              alt: seo.title,
            },
          ],
        }}
      />
      {children}
    </>
  );
};
