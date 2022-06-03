import Link from "next/link";
import { MenuItem } from "../../types/types";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import ChangeMenu from "./ChangeMenu";
import IconCart from "../icons/IconCart";
import IconLogo from "../icons/IconLogo";
import IconMenu from "../icons/IconMenu";
import { useCart } from "../../hooks/useCart";

type Props = {
  menuItems: MenuItem[];
};

export default function NavMobile({ menuItems }: Props) {
  const [activeMenu, setActiveMenu] = useState<MenuItem | undefined>(undefined);
  const { totalItems } = useCart();
  return (
    <div className="lg:hidden">
      <div className="flex w-full justify-between">
        <Popover className="relative">
          <Popover.Button
            className={`
                   justify-center rounded-md text-base font-medium text-black`}
            aria-label="menu"
          >
            <IconMenu className="h-10 w-10" aria-hidden />
          </Popover.Button>

          <Popover.Panel className="absolute z-10 -ml-4 mt-4 w-screen transform">
            <ChangeMenu menuItems={menuItems} />
          </Popover.Panel>
        </Popover>
        <div>
          <Link href="/">
            <a aria-label="MH bhstof">
              <IconLogo className="h-12" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/kurv">
            <a aria-label="kurv">
              <IconCart className="mr-2 h-8 w-8" />
              <div
                className={
                  "pointer-events-none absolute top-9 right-4 flex h-6 w-6 justify-center rounded-full bg-grey text-base font-medium"
                }
              >
                {totalItems}
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <form className="mx-4" action="">
          <input
            type="text"
            placeholder="Søg"
            name="search"
            className="h-6 w-screen rounded-full md:w-max"
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
    </div>
  );
}
