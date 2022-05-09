import Link from "next/link";
import { MenuItem } from "../../types/types";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
import MenuList from "./MenuList";

type Props = {
  menuItems: MenuItem[];
};

export default function ChangeMenu({ menuItems }: Props) {
  const [activeMenu, setActiveMenu] = useState<MenuItem | undefined>(undefined);
  return (
    <>
      {activeMenu ? (
        <MenuList menuItem={activeMenu} />
      ) : (
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative bg-teal-50 p-4">
            {menuItems.map((menuItem) => (
              <Link key={menuItem.name} href={menuItem.url}>
                <a
                  className="flex justify-between rounded-lg p-2 transition duration-150 
                ease-in-out hover:bg-gray-100 focus-visible:ring"
                  onClick={(event) => {
                    if (menuItem.items) {
                      event.stopPropagation();
                      event.preventDefault();
                      setActiveMenu(menuItem);
                    }
                  }}
                >
                  <span className="text-sm font-medium text-gray-900">{menuItem.name}</span>
                  <ChevronRightIcon className={"chevron"} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
