import { MenuItem } from "../../types/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  menuItem: MenuItem;
  handleGoBack: () => void;
};

export default function MenuList({ menuItem, handleGoBack }: Props) {
  const [open, setOpen] = useState();
  return (
    <div className="absolute z-10 w-full transform overflow-hidden rounded-lg shadow-lg">
      <ul className="list-none rounded-lg bg-teal-50 p-4">
        <button
          className="flex w-full justify-between py-2 text-left text-lg font-medium underline"
          onClick={handleGoBack}
        >
          <span>{menuItem.name}</span>
          <ChevronLeftIcon className={"chevron mr-0"} />
        </button>

        {menuItem.items?.map((category) => (
          <li key={category.name}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium">
                    <span>{category.name}</span>
                    <ChevronRightIcon
                      className={`${
                        open ? "rotate-90 transform" : ""
                      } h-5 w-5 text-slate-900`}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel className="py-2 text-sm text-slate-900">
                    <ul className="rounded-lg bg-teal-100 p-4">
                      {category.items?.map((item) => (
                        <li key={item.name} className="py-1">
                          <Link href={`${item.url}`}>
                            <a className="navlink">{item.name}</a>
                          </Link>
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
