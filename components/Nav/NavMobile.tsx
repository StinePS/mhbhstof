import Link from "next/link";
import { MenuItem } from "../../types/types";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import ChangeMenu from "./ChangeMenu";
import IconCart from "../icons/IconCart";
import IconLogo from "../icons/IconLogo";
import IconMenu from "../icons/IconMenu";

type Props = {
  menuItems: MenuItem[];
};

export default function NavMobile({ menuItems }: Props) {
  const [activeMenu, setActiveMenu] = useState<MenuItem | undefined>(undefined);

  return (
    <div className="flex w-full justify-between lg:hidden">
      <Popover className="relative">
        <Popover.Button
          className={`
                   justify-center rounded-md text-base font-medium text-black`}
        >
          <IconMenu className="h-10 w-10" />
        </Popover.Button>

        <Popover.Panel className="absolute z-10 -ml-4 mt-4 w-screen transform">
          <ChangeMenu menuItems={menuItems} />
        </Popover.Panel>
      </Popover>
      <div>
        <Link href="/">
          <a>
            <IconLogo className="h-12" />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/kurv">
          <a>
            <IconCart className="h-8 w-8" />
          </a>
        </Link>
      </div>
    </div>
  );
}
