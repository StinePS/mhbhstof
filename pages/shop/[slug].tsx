import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";

type Props = {
  product: any;
};

export default function ProductDetails({ product }: Props) {
  return (
    <main>
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
          <Image src={product.images[0]} />
          <div>
            <div>
              <h1>{product.name}</h1>
              <p>{product.price}kr.</p>
              <input type="number" />
              <button>Læg i kurv</button>
            </div>
            <div>
              <p>Beskrivelse</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
