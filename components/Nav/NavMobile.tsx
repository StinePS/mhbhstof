import Link from "next/link";
import { MenuItem } from "../../types/types";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronRightIcon, MenuIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import MenuList from "./MenuList";
import ChangeMenu from "./ChangeMenu";

type Props = {
  menuItems: MenuItem[];
};

export default function NavMobile({ menuItems }: Props) {
  const [activeMenu, setActiveMenu] = useState<MenuItem | undefined>(undefined);

  return (
    <div className="flex justify-between w-full lg:hidden">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                    ${open ? "" : "text-opacity-100"}
                    text-base font-medium text-black rounded-md justify-center`}
            >
              <MenuIcon className="w-8" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen transform -ml-4 mt-4">{/* Indsæt ChangeMenu her! */}</Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <div>
        <Link href="/">LOGO</Link>
      </div>
      <div>
        <ShoppingCartIcon className="w-8" />
      </div>
    </div>
  );
}
