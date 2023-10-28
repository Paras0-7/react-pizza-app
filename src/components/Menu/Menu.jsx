/* eslint-disable react-refresh/only-export-components */
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
export function Menu() {
  const menuData = useLoaderData();
  // console.log(menuData);
  console.log("rendered");
  return (
    <ul className="divide-y divide-stone-200 px-2 py-2">
      {menuData.map((menuItem) => {
        return <MenuItem pizza={menuItem} key={menuItem.name} />;
      })}
    </ul>
  );
}

export const loader = async function () {
  const menu = await getMenu();
  return menu;
};
