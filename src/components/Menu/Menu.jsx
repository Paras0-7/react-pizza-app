/* eslint-disable react-refresh/only-export-components */
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
export function Menu() {
  const menuData = useLoaderData();
  console.log(menuData);
  return (
    <ul>
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
