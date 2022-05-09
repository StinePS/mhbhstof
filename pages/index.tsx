import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ChangeMenu from "../components/Nav/ChangeMenu";
import { getMenuItems } from "../lib/menuItems";
import { MenuItem } from "../types/types";

type Props = {
  menuItems: MenuItem[];
};

const Home: NextPage<Props> = ({ menuItems }) => {
  return (
    <div className="">
      <Head>
        <title>MH bhstof</title>
        <meta name="description" content="Alt til at sy din egen bh!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Jeg er forsiden!</h1>
        <Link href="">
          <a className="btn">Jeg er en knap!</a>
        </Link>
        <ChangeMenu menuItems={menuItems} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { menuItems: await getMenuItems() },
  };
}

export default Home;
