import { useMemo } from "react";
import { WooProduct } from "../../types/woo-types";
import Product from "./Product";

type Props = {
  products?: Array<WooProduct>;
};

// Sort products alphabetically
// https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
function sortProductsByName(products: Array<WooProduct>) {
  // [...products] makes a copy of the "original" array, as to not change the "original" data
  const sort = [...products].sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  return sort;
}

export const Products = ({ products }: Props) => {
  if (!Array.isArray(products)) {
    return null;
  }
  // useMemo returns a memorized value = the products will only be "re-alphabetized" if the products change
  // https://reactjs.org/docs/hooks-reference.html#usememo
  const sorted = useMemo(() => sortProductsByName(products), [products]);
  // If there any (sorted) products, then loop over them and make a "Product" for each
  return (
    <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-6 2xl:grid-cols-5 2xl:gap-8">
      {sorted.length
        ? sorted.map((product) => (
            <Product key={product?.id} product={product} />
          ))
        : null}
    </div>
  );
};
