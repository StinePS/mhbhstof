import { MenuItem } from "../../types/types";
import { useRouter } from "next/router";
import clsx from "clsx";
import IconCart from "../icons/IconCart";
import IconLogo from "../icons/IconLogo";
import Link from "next/link";
import { useCart } from "../../hooks/useCart";
import IconSearch from "../icons/IconSearch";

type Props = {
  menuItems: MenuItem[];
};

export default function NavDesktop({ menuItems }: Props) {
  const { pathname } = useRouter();
  const { totalItems } = useCart();

  return (
    <div>
      <div className="hidden flex-row justify-between lg:flex">
        <Link href="/">
          <a aria-label="menu">
            <IconLogo className="ml-8 h-12 2xl:ml-20" />
          </a>
        </Link>

        <div className="mr-16">
          <form action="">
            <input
              type="text"
              placeholder="Søg"
              name="search"
              className="rounded-full"
            />
            {/* <button
              className="absolute top-4 h-9 w-9 rounded-full bg-purple text-white"
              type="submit"
              aria-label="search"
            >
              <IconSearch className="h-7 w-7" />
            </button> */}
          </form>
        </div>

        <Link href="/kurv">
          <a aria-label="kurv">
            <IconCart className="mr-6 h-8 w-8 2xl:mr-20" />
            <div
              className={
                "pointer-events-none absolute flex h-6 w-6 justify-center rounded-full bg-grey text-base font-medium lg:top-9 lg:right-7 2xl:right-20"
              }
            >
              {totalItems}
            </div>
          </a>
        </Link>
      </div>

      <div className="hidden grid-cols-3 lg:grid">
        <div></div>
        <div className="flex flex-row justify-between">
          {menuItems.map((item) => (
            <Link href={item.url} key={item.url}>
              <a
                className={clsx(
                  "text-black hover:text-black hover:underline hover:underline-offset-2",
                  item.url === pathname ? "underline" : "no-underline"
                )}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}
