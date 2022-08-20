import { DefaultSeoProps } from "next-seo";

export const DEFAULT_SEO: DefaultSeoProps = {
  title: "Qazal | Sofware Engineer",
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
