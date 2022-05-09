import { MenuItem } from "../../types/types";
import NavDesktop from "../Nav/NavDesktop";
import NavMobile from "../Nav/NavMobile";

type Props = {
  menuItems: MenuItem[];
};

export default function Header({ menuItems = [] }: Props) {
  return (
    <nav className="  w-full z-10 p-4 bg-teal-200">
      <NavMobile menuItems={menuItems} />
      <div className="container my-0">
        <NavDesktop menuItems={menuItems} />
      </div>
    </nav>
  );
}
