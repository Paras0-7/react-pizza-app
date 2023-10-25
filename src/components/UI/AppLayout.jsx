import { CartOverview } from "../Cart/CartOverview";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const AppLayout = function () {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};
