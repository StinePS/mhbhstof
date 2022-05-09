import { MenuItem } from "../../types/types";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Link from "next/link";

type Props = {
  menuItems: MenuItem[];
};

export default function NavDesktop({ menuItems }: Props) {
  return (
    <div>
      <div className="hidden lg:flex flex-row justify-between">
        <Link href="/">LOGO</Link>
        <div>
          <input id="search" type="search" placeholder="Søg" />
        </div>
        <ShoppingCartIcon className="w-8" />
      </div>

      <div className="hidden lg:grid grid-cols-3">
        <div></div>
        <div className="flex flex-row justify-between">
          <Link href="/">
            <a className="hover:underline underline-offset-2">Hjem</a>
          </Link>
          <Link href="/shop">
            <a className="hover:underline underline-offset-2">Shop</a>
          </Link>
          <Link href="/om">
            <a className="hover:underline underline-offset-2">Om os</a>
          </Link>
          <Link href="/kurser">
            <a className="hover:underline underline-offset-2">Kurser</a>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
