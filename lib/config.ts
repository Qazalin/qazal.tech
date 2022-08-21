import { DefaultSeoProps } from "next-seo";

export const DEFAULT_SEO: DefaultSeoProps = {
  titleTemplate: "%s | Qazalin",
  description: "Qazal is a software engineer working in Web3.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://qazalin.tech",
    site_name: "Portfolio",
  },
  twitter: {
    handle: "@qazalin",
  },
};

export const svgStyles = "text-lg md:text-xl lg:text-2xl";
