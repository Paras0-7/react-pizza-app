/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/UI/Home";
import { Menu, loader as menuLoader } from "../components/Menu/Menu";
import { Cart } from "../components/Cart/Cart";
import { Order } from "../components/Order/Order";
import { CreateOrder } from "../components/Order/CreateOrder";
import { AppLayout } from "../components/UI/AppLayout";

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);
