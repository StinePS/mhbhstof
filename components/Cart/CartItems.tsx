import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../hooks/useCart";
import { WooProduct } from "../../types/woo-types";

type Props = {
  product?: WooProduct;
};

export default function CartItems({ product }: Props) {
  const { cart, addProduct, removeProduct, totalItems, totalPrice } = useCart();

  return (
    // For each product in the basket, create an article with the name of the product and a + and - button. Calculate total number of items and price.
    <div>
      <div className="">
        <ul>
          {cart.map(({ amount, product }) => (
            <li
              key={product.name}
              className="mb-4 md:grid md:grid-cols-[3fr_2fr_2fr_2fr]"
            >
              <Link href={`/shop/${product.slug}`}>
                <a>
                  <div className="flex">
                    <div className="hidden md:inline-block">
                      <Image
                        src={product.images[0].src}
                        width="50"
                        height="50"
                      />
                    </div>
                    <h2 className="flex-end ml-2 text-xl font-semibold md:text-base">
                      {product.name}
                    </h2>
                  </div>
                </a>
              </Link>

              <div className="mt-4 text-right text-xl md:mt-0 md:text-base">
                {product.price} kr./stk.
              </div>
              <div className="mt-4 text-right text-xl md:mt-0 md:text-center md:text-base">
                <button
                  className="btn-math md:mr-2"
                  onClick={() => removeProduct(product)}
                >
                  {" "}
                  -{" "}
                </button>{" "}
                {amount}{" "}
                <button
                  className="btn-math md:ml-2"
                  onClick={() => addProduct(product)}
                >
                  {"  "}+{"  "}
                </button>
              </div>

              <div className="mt-4 text-right text-xl md:mt-0 md:text-base">
                i alt {amount * parseInt(product.price)} kr.
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
}
