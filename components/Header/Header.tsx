import { MenuItem } from "../../types/types";
import NavDesktop from "../Nav/NavDesktop";
import NavMobile from "../Nav/NavMobile";

type Props = {
  menuItems: MenuItem[];
};

export default function Header({ menuItems = [] }: Props) {
  return (
    <nav className="fixed top-0 z-10 w-full bg-white p-4 drop-shadow-md">
      <NavMobile menuItems={menuItems} />
      <div className="container my-0">
        <NavDesktop menuItems={menuItems} />
      </div>
    </nav>
  );
}
