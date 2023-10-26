/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/UI/Home";
import { Menu, loader as menuLoader } from "../components/Menu/Menu";
import { Cart } from "../components/Cart/Cart";
import { Order, orderLoader } from "../components/Order/Order";
import { CreateOrder, action as orderAction } from "../components/Order/CreateOrder";
import { AppLayout } from "../components/UI/AppLayout";
import { Error } from "../components/UI/Error";

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: orderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
