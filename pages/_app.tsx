import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MenuItem } from "../types/types";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CartContext, CartItem } from "../hooks/useCart";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Head>
        <title>MH bhstof</title>
        <meta name="description" content="Alt til syning af undertøj" />
      </Head>
      <Header menuItems={pageProps.menuItems as MenuItem[]} />
      <Component {...pageProps} />
      <Footer />
    </CartContext.Provider>
  );
}

export default MyApp;
