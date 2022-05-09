import { MenuItem } from "../../types/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  menuItem: MenuItem;
};

export default function MenuList({ menuItem }: Props) {
  const [open, setOpen] = useState();
  return (
    <div className="absolute z-10 w-screen transform -ml-4">
      <ul className="list-none bg-teal-50 rounded-lg">
        <div className="flex w-full justify-between px-4 py-2 text-left text-md font-medium">
          <span>{menuItem.name}</span>
          <ChevronLeftIcon className={"chevron mr-0"} />
        </div>

        {menuItem.items?.map((category) => (
          <li key={category.name}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium">
                    <span>{category.name}</span>
                    <ChevronRightIcon className={`${open ? "rotate-90 transform" : ""} h-5 w-5 text-slate-900`} />
                  </Disclosure.Button>

                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-slate-900">
                    <ul>
                      {category.items?.map((item) => (
                        <li key={item.name}>
                          <Link href={`${item.url}`}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
        ))}
      </ul>
    </div>
  );
}
