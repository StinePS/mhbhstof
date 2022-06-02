import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { getProduct } from "../../lib/getProducts";
import { getMenuItems } from "../../lib/menuItems";
import { GetStaticPropsContext } from "next";
import { WooProduct } from "../../types/woo-types";

type Props = {
  product: WooProduct;
};

export default function ProductDetails({ product }: Props) {
  if (!product) return <div>No product</div>;
  return (
    <main>
      <div className="container">
        <section>
          <div>
            <Link href={"/shop"}>
              <a className="txt-strong hover-me">
                <ChevronLeftIcon className="chevron mr-2 font-semibold" />
                Tilbage
              </a>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-4">
            <div>
              <Image src={product.images[0].src} width="500" height="500" />
            </div>
            <div>
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p>{product.price}kr.</p>
                <input type="number" />
                <button className="btn">Læg i kurv</button>
              </div>
              <div>
                <p className="font-semibold">Beskrivelse</p>
                <div
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

  return {
    props: { menuItems: await getMenuItems(), product },
  };
}
