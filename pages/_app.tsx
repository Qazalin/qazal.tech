// TS
import type { AppProps } from "next/app";

// SEO
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "lib/config";

// Styles
import "@fontsource/numans";
import "@fontsource/cabin";
import "@fontsource/handlee";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Layout } from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...DEFAULT_SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
