import Image from "next/image";
import Link from "next/link";

type Props = {
  product: any;
};

export default function Product({ product }: Props) {
  if (!product == true) {
    return null;
  }
  return (
    <Link href={product.permalink} key={product.id}>
      <a className="no-underline">
        <article>
          <Image
            src={product?.images?.[0]?.src ?? ""}
            alt={product?.name ?? ""}
            width="720"
            height="720"
          />
          <p className="text-xs uppercase text-darkpurple">
            {product.categories[1].name}
          </p>
          <h2 className="text-black">{product.name}</h2>
          <p className="text-right text-black">{product.price}kr.</p>
          {/* Get price including currency
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.price_html ?? "",
                  }}
                /> */}
        </article>
      </a>
    </Link>
    // console.log(product)
  );
}
