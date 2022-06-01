import * as React from "react";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { MenuItem } from "../../types/types";

type Props = {
  menuItem: MenuItem;
  handleGoBack?: () => void;
};

export default function MenuList({ menuItem, handleGoBack }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="absolute z-10 w-full transform overflow-hidden rounded-lg shadow-lg">
      <ul className="list-none rounded-lg bg-white p-4">
        <button
          className="flex w-full justify-between py-2 text-left text-lg font-medium underline"
          onClick={handleGoBack}
        >
          <span>{menuItem.name}</span>
          <ChevronLeftIcon className={"chevron mr-0"} />
        </button>

        {menuItem.items?.map((category) => (
          <li key={category.name}>
            <Accordion
              expanded={expanded === `${category.name}`}
              onChange={handleChange(`${category.name}`)}
              sx={{
                ".Mui-expanded": { minHeight: 0 },
                backgroundColor: "#fdfdfd",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ChevronDownIcon className="h-5 w-5 text-black" />}
                aria-controls={`${category.name}-content`}
                id={`${category.name}-header`}
                className="!min-h-0 bg-white"
                sx={{ "> .Mui-expanded": { margin: "12px 0 !important" } }}
              >
                <span className="navlink">{category.name}</span>
              </AccordionSummary>
              <AccordionDetails className="ml-4 rounded-lg py-0 px-6">
                <ul>
                  {category.items?.map((item) => (
                    <li key={item.name} className="py-2">
                      <Link href={`${item.url}`}>
                        <a className="navlink">{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
        ))}
      </ul>
    </div>
  );
}
