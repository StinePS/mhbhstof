import { MenuItem } from "../../types/types";
import Headroom from "react-headroom";
import NavDesktop from "../Nav/NavDesktop";
import NavMobile from "../Nav/NavMobile";

type Props = {
  menuItems: MenuItem[];
};

export default function Header({ menuItems = [] }: Props) {
  return (
    <Headroom>
      <nav className="z-10 w-full bg-white p-4 drop-shadow-md">
        <NavMobile menuItems={menuItems} />
        <NavDesktop menuItems={menuItems} />
      </nav>
    </Headroom>
  );
}
