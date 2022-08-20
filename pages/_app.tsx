// TS
import type { AppProps } from "next/app";

// SEO
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "lib/config";

// Styles
import "@fontsource/numans";
import "@fontsource/cabin";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="system"
      value={{ dark: "black", light: "lofi" }}
    >
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
