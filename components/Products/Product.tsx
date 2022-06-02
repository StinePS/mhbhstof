import Image from "next/image";
import Link from "next/link";
import { WooProduct } from "../../types/woo-types";

type Props = {
  product?: WooProduct;
};

export default function Product({ product }: Props) {
  if (!product) {
    return null;
  }
  return (
    <Link href={`/shop/${product.slug}`} key={product.id}>
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
        </article>
      </a>
    </Link>
    // console.log(product)
  );
}
