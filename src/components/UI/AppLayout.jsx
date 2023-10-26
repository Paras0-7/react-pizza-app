/* eslint-disable no-unused-vars */
import { CartOverview } from "../Cart/CartOverview";
import { Header } from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "./Loader";

export const AppLayout = function () {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};
