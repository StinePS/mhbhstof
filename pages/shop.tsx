import { getMenuItems } from "../lib/menuItems";

export default function Webshop() {
  return (
    <main>Jeg er en webshop!</main>
    //Loads and loads of products!
  );
}

export async function getStaticProps() {
  return {
    props: { menuItems: await getMenuItems() },
  };
}
