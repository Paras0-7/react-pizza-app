/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// Test ID: IIDSAT

import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import {
  useFetcher,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { OrderItem } from "./OrderItem";
import { useEffect, useState } from "react";
import { Button } from "../UI/Button";
import { UpdateOrder } from "./UpdateOrder";

const getIngredients = function (menu = [], id) {
  return menu.find((item) => item.id === id)?.ingredients ?? [];
};
export function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const [menuData, setMenuData] = useState([]);
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      fetcher.load("/menu");
    }
  }, [fetcher]);
  return (
    <div className="space-y-8 px-4 py-6">
      <div className="jus flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="upper rounded-full bg-red-500 px-3 py-1 text-sm font-semibold tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="upper rounded-full bg-green-500 px-3 py-1 text-sm font-semibold tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={getIngredients(fetcher.data, item.pizzaId)}
          />
        ))}
      </ul>
      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export const orderLoader = async function ({ params }) {
  const data = await getOrder(params.orderId);
  return data;
};
