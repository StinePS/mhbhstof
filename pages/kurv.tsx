import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import CartItems from "../components/Cart/CartItems";
import { useCart } from "../hooks/useCart";
import { getMenuItems } from "../lib/menuItems";
import { WooProduct } from "../types/woo-types";

type Props = {
  product?: WooProduct;
};

export default function CartPage({ product }: Props) {
  const { totalItems, totalPrice } = useCart();
  return (
    <div className="App">
      <main>
        <div className="mx-4 md:mx-8">
          <section>
            <Link href="/shop">
              <a className="btn-back mt-4">
                <ChevronLeftIcon className="chevron mr-2" />
                Tilbage til shoppen
              </a>
            </Link>
            <h1 className="pageheader md:mt-0">Indkøbskurv</h1>
            {/* Check how many items in cart and return appropriate screen */}
            {totalItems > 0 ? (
              <div className="lg:mx-4 lg:grid lg:grid-cols-[3fr_1fr] lg:gap-4">
                <CartItems />
                <div className="md:grid md:grid-cols-2">
                  <div></div>
                  <div className="bg-grey p-2 md:max-w-sm lg:max-w-none">
                    <h2 className="mb-6 text-xl font-semibold">Pris i alt</h2>
                    <p className="flex justify-between text-xl md:text-base">
                      <span>Subtotal</span> <span>{totalPrice} kr.</span>
                    </p>
                    <p className="flex justify-between text-xl md:text-base">
                      <span>Fragt</span> <span>29 kr.</span>
                    </p>
                    <p className="mb-8 mt-8 flex justify-between text-xl font-semibold md:text-base">
                      <span>Pris i alt</span> <span>{totalPrice + 29} kr.</span>
                    </p>
                    <Link href="#">
                      <a className="btn max-w-full justify-center">
                        Videre til betaling
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <p className="text-xl">Du har ikke lagt noget i kurven endnu</p>
                <p className="my-8 text-xl">
                  Gå til shoppen for at se vores varer
                </p>
                <div className="btn-container">
                  <Link href="/shop">
                    <a className="btn mt-8">Shop</a>
                  </Link>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { menuItems: await getMenuItems() },
  };
}
