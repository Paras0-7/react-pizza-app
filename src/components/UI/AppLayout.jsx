/* eslint-disable no-unused-vars */
import { CartOverview } from "../Cart/CartOverview";
import { Header } from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "./Loader";

export const AppLayout = function () {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};
