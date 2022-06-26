import * as React from "react";
import { getMenuItems } from "../../lib/menuItems";
import { MenuItem } from "../../types/types";
import { getCategory, getProducts } from "../../lib/getProducts";
import { Products } from "../../components/Products/Products";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Link from "next/link";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

// Optional catch all routes [[...slug]]
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

export default function Webshop({
  menuItems,
  products,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  // Find the item in the JSON that has the url === /shop
  const shopItem = menuItems.find((item) => item.url === "/shop");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <main>
      <div className="container">
        {/* If there's a category, show category's name, otherwise show "Shop" */}
        <h1 className="pageheader">{category ? category.name : `Shop`}</h1>
      </div>
      <div className="lg:grid lg:grid-cols-[250px_minmax(800px,_1fr)_250px] lg:gap-4 2xl:grid-cols-[350px_minmax(800px,_1fr)_350px]">
        {/* Menu on desktop */}
        <div>
          <ul className="hidden lg:contents">
            {shopItem?.items?.map((category) => (
              <li key={category.name} className="pl-12 2xl:pl-32">
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
        {/* Products from WooCommerce */}
        <Products products={products} />
        <div></div>
      </div>
    </main>
  );
}

// Render specified pages (in this case none are defined) and await rendered data instead of showing "404"
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

// Generate static page based on that page's slug
export async function getStaticProps(context: GetStaticPropsContext) {
  const [slug] = Array.isArray(context.params?.slug)
    ? context.params?.slug ?? []
    : [];

  const category = await getCategory(slug);
  const products = await getProducts(category);

  return {
    props: {
      category: category || null,
      menuItems: await getMenuItems(),
      products,
    },
  };
}
