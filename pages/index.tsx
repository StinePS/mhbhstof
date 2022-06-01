import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Contact from "../components/Contact/Contact";
import splash from "../public/images/splash.jpg";
import { MenuItem } from "../types/types";
import { getMenuItems } from "../lib/menuItems";

type Props = {
  menuItems: MenuItem[];
};

const Home: NextPage<Props> = ({ menuItems }) => {
  return (
    <div>
      <Head>
        <title>MH bhstof</title>
        <meta name="description" content="Alt til at sy din egen bh!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mt-12">
          <section className="grid lg:grid-cols-2">
            <div>
              <h1 className="text-center text-8xl font-bold text-purple lg:mt-24">
                <div className="font-paris">MH </div>
                <div className="font-heebo font-bold">bh-stof</div>
              </h1>
              <h2 className="mt-4 text-center font-heebo text-3xl font-semibold">
                Sy dit eget undertøj
              </h2>
              <div className="text-center">
                <Link href="/shop">
                  <a className="btn mt-8 mb-8 lg:mt-16">Gå til shoppen</a>
                </Link>
              </div>
            </div>
            <Image src={splash} alt="Målebånd, saks og andet sy-grej" />
          </section>

          <section className="text-center">
            <h3 className="text-2xl font-semibold">Vær en del af</h3>
            <h3 className="font-heebo text-5xl font-bold text-black lg:text-8xl">
              fællesskabet
            </h3>
            <div>(Galleri med inspirationsbilleder)</div>
          </section>
          <Contact />
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { menuItems: await getMenuItems() },
    // If a new request comes to the server, then every 1sec. it will check if the data has changed and update the static file inside thex .next folder = all 'SUBSEQUENT' requests have the updates
    revalidate: 1,
  };
}

export default Home;
