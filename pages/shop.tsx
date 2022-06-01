import * as React from "react";
import { getMenuItems } from "../lib/menuItems";
import { MenuItem } from "../types/types";
import { getProducts } from "../lib/getProducts";
import { Products } from "../components/Products/Products";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Link from "next/link";

type Props = {
  menuItems: MenuItem[];
  products: any[];
};

export default function Webshop({ menuItems, products }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const shopItem = menuItems.find((item) => item.url === "/shop");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <main>
      <div className="container">
        <h1 className="pageheader">Shop</h1>
      </div>
      <div className="lg:grid lg:grid-cols-[250px_minmax(800px,_1fr)_250px] lg:gap-4 2xl:grid-cols-[350px_minmax(800px,_1fr)_350px]">
        {/* Menu on desktop */}
        <div>
          <ul className="hidden lg:contents">
            {shopItem?.items?.map((category) => (
              <li key={category.name} className="pl-12 2xl:pl-36">
                <Accordion
                  expanded={expanded === `${category.name}`}
                  onChange={handleChange(`${category.name}`)}
                  sx={{
                    ".Mui-expanded": { minHeight: 0 },
                    backgroundColor: "#fdfdfd",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    aria-controls={`${category.name}-content`}
                    id={`${category.name}-header`}
                    className="!min-h-0 bg-white"
                    sx={{ "> .Mui-expanded": { margin: "12px 0 !important" } }}
                  >
                    <span className="navlink">{category.name}</span>
                  </AccordionSummary>
                  <AccordionDetails className="ml-4 rounded-lg py-0 px-6">
                    <ul>
                      {category.items?.map((item) => (
                        <li key={item.name} className="py-2">
                          <Link href={`${item.url}`}>
                            <a className="navlink">{item.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
            ))}
          </ul>
        </div>
        <Products products={products} />
        <div></div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { menuItems: await getMenuItems(), products },
  };
}
