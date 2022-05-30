import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Contact from "../components/Contact/Contact";
import splash from "../public/images/splash.jpg";
import { MenuItem } from "../types/types";
import { getMenuItems } from "../lib/menuItems";
import { Products } from "../components/Products/Products";
import { getProducts } from "../lib/woo";

type Props = {
  menuItems: MenuItem[];
  products: any[];
};

const Home: NextPage<Props> = ({ menuItems, products }) => {
  return (
    <div className="">
      <Head>
        <title>MH bhstof</title>
        <meta name="description" content="Alt til at sy din egen bh!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mt-8">
          <div className="grid lg:grid-cols-2">
            <div>
              <h1 className="text-center text-8xl font-bold text-purple">
                <span className="font-paris">MH </span>
                <span className="font-heebo font-bold">bh-stof</span>
              </h1>
              <h2 className="-mt-4 text-center font-heebo text-3xl font-semibold">
                Sy dit eget undertøj
              </h2>
              <div className="text-center">
                <Link href="/shop">
                  <a className="btn">Gå til shoppen</a>
                </Link>
              </div>
            </div>
            <Image src={splash} alt="Målebånd, saks og andet sy-grej" />
          </div>

          <div className="mt-4 text-center">
            <h3 className="text-2xl font-semibold">Vær en del af</h3>
            <h3 className="font-heebo text-8xl font-bold text-black">
              Fællesskabet
            </h3>
            <div>(Galleri med inspirationsbilleder)</div>
          </div>
          <Products products={products} />

          <Contact />
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  console.log(products);
  return {
    props: { menuItems: await getMenuItems(), products },
    // If a new request comes to the server, then every 1sec. it will check if the data has changed and update the static file inside thex .next folder = all 'SUBSEQUENT' requests have the updates
    revalidate: 1,
  };
}

export default Home;
