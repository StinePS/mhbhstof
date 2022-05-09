import menuItems from "./categories.json";
import { MenuItem } from "../types/types";

export async function getMenuItems() {
  return menuItems as Array<MenuItem>;
}
