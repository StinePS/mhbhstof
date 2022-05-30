import Link from "next/link";
import { MenuItem } from "../../types/types";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
import MenuList from "./MenuList";

type Props = {
  menuItems: MenuItem[];
};

// EVT. TRANSITION ML. DE 2 MENUER: transition duration-150 ease-in-out

// Change between the primary and secondary menu in mobile size
export default function ChangeMenu({ menuItems }: Props) {
  const [activeMenu, setActiveMenu] = useState<MenuItem | undefined>(undefined);
  return (
    // If there is an activeMenu then render the MenuList, otherwise map over the menuItems, making them a button or link depending if they've got items under them or not
    <>
      {activeMenu ? (
        <MenuList
          menuItem={activeMenu}
          handleGoBack={() => setActiveMenu(undefined)}
        />
      ) : (
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="relative bg-white p-4">
            {menuItems.map((menuItem) =>
              menuItem.items ? (
                <button
                  key={menuItem.name}
                  onClick={() => setActiveMenu(menuItem)}
                  className="flex w-full justify-between py-3"
                >
                  <span className="navlink">{menuItem.name}</span>
                  <ChevronRightIcon className={"chevron"} />
                </button>
              ) : (
                <Link key={menuItem.name} href={menuItem.url}>
                  <a className="flex justify-between py-2 no-underline">
                    <span className="navlink">{menuItem.name}</span>
                    <ChevronRightIcon className={"chevron"} />
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
