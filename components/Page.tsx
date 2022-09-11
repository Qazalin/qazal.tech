import { SEOType } from "types";
import { NextSeo, DefaultSeo } from "next-seo";
import { PropsWithChildren } from "react";

export const Page: React.FC<PropsWithChildren<{ seo: SEOType }>> = ({
  seo,
  children,
}) => {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://qazal.tech",
          site_name: "Qazal Samani",
        }}
        twitter={{
          handle: "@qazalin",
          site: "@qazalin",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },

          {
            name: "keywords",
            content: seo.keywords,
          },
        ]}
      />
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
