import { MenuItem } from "../../types/types";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

type Props = {
  menuItems: MenuItem[];
};

export default function NavDesktop({ menuItems }: Props) {
  const { pathname } = useRouter();

  return (
    <div>
      <div className="hidden flex-row justify-between lg:flex">
        <Link href="/">LOGO</Link>
        <div>
          <input id="search" type="search" placeholder="Søg" />
        </div>
        <ShoppingCartIcon className="w-8" />
      </div>

      <div className="hidden grid-cols-3 lg:grid">
        <div></div>
        <div className="flex flex-row justify-between">
          {menuItems.map((item) => (
            <Link href={item.url} key={item.url}>
              <a
                className={clsx(
                  "text-slate-900 hover:text-slate-900 hover:underline hover:underline-offset-2",
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
