import Image from "next/image";
import Link from "next/link";

type Props = {
  products?: Array<any>;
};

export const Products = ({ products }: Props) => {
  if (!Array.isArray(products)) {
    return null;
  }
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.length
        ? products.map((product) => (
            // console.log(product)
            <Link href={product.permalink} key={product.id}>
              <a className="no-underline">
                <article>
                  <Image
                    src={product?.images?.[0]?.src ?? ""}
                    alt={product?.name ?? ""}
                    width="960"
                    height="720"
                  />
                  <p className="text-xs uppercase text-darkpurple">
                    {product.categories[0].name}
                  </p>
                  <h2 className="text-black">{product.name}</h2>
                  <p className="text-right text-black">
                    Fra {product.price}kr.
                  </p>
                  {/* Get price including currency
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product?.price_html ?? "",
                    }}
                  /> */}
                </article>
              </a>
            </Link>
          ))
        : null}
    </div>
  );
};
