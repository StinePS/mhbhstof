import { ChevronLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { getProduct } from "../../lib/getProducts";
import { getMenuItems } from "../../lib/menuItems";
import { GetStaticPropsContext } from "next";
import { WooProduct } from "../../types/woo-types";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { generateSizes } from "../../styles/screens";
import { useRouter } from "next/router";

type Props = {
  product: WooProduct;
};

// Single product page with details and "Add to basket"
export default function ProductDetails({ product }: Props) {
  const router = useRouter();
  const [addedText, setAddedText] = useState(false);
  const { addProduct } = useCart();

  function addToCart() {
    setAddedText(true);
    addProduct(product);
  }

  useEffect(() => {
    if (addedText) {
      const timeout = setTimeout(() => setAddedText(false), 1000);
      return () => {
        // "Clean-up function" that resets the counter of items in the basket
        clearTimeout(timeout);
      };
    }
  }, [addedText]);

  if (!product) return <div>No product</div>;
  return (
    <main>
      <div className="container">
        <section>
          <div className="my-4">
            {/* Next.js' version of window.history.back() = router.back()*/}
            <button
              type="button"
              className="btn-back"
              onClick={() => router.back()}
            >
              <ChevronLeftIcon className="chevron mr-2" />
              Tilbage
            </button>
          </div>

          <div className="grid md:grid-cols-2 md:gap-8">
            <div>
              <Image
                src={product.images[0].src}
                width="500"
                height="500"
                sizes={generateSizes({ md: "400px" })}
              />
            </div>
            <div>
              <div>
                <h1 className="mt-4 text-2xl font-bold md:mt-0 lg:text-3xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-xl font-medium lg:text-2xl">
                  {product.price}kr.
                </p>

                <button onClick={addToCart} className="btn mt-4">
                  {addedText ? "Tilføjet!" : "Læg i kurv"}
                </button>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold">Beskrivelse</p>
                <div
                  className="text-base"
                  dangerouslySetInnerHTML={{
                    __html: product?.description ?? "",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  if (!context.params?.slug) {
    return { notFound: true };
  }
  const product = await getProduct(context.params.slug as string);
  if (!product) {
    return { notFound: true };
  }
  return {
    props: { menuItems: await getMenuItems(), product },
  };
}
