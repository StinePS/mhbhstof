import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MenuItem } from "../types/types";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MH bhstof</title>
        <meta name="description" content="Alt til syning af undertøj" />
      </Head>
      <Header menuItems={pageProps.menuItems as MenuItem[]} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
