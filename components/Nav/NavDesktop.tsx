import { MenuItem } from "../../types/types";
import { useRouter } from "next/router";
import clsx from "clsx";
import IconCart from "../icons/IconCart";
import IconLogo from "../icons/IconLogo";
import Link from "next/link";
import { useCart } from "../../hooks/useCart";

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
        <div>
          <input id="search" type="search" placeholder="Søg" />
        </div>
        <Link href="/kurv">
          <a aria-label="kurv">
            <IconCart className="mr-6 h-8  w-8 2xl:mr-20" />
            <div
              className={
                "pointer-events-none absolute top-9 right-7 flex h-6 w-6 justify-center rounded-full bg-grey text-base font-medium"
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
