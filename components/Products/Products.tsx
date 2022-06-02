import { WooProduct } from "../../types/woo-types";
import Product from "./Product";

type Props = {
  products?: Array<WooProduct>;
};

export const Products = ({ products }: Props) => {
  if (!Array.isArray(products)) {
    return null;
  }
  //If there any products, then loop over them and make a "Product" for each
  return (
    <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-6 2xl:grid-cols-5 2xl:gap-8">
      {products.length
        ? products.map((product) => (
            <Product key={product?.id} product={product} />
          ))
        : null}
    </div>
  );
};
