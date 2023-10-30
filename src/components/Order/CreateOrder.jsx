/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Form, useNavigation, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { Button } from "../UI/Button";
import { useSelector } from "react-redux";
import { EmptyCart } from "../Cart/EmptyCart";
import { store } from "../../store/store";
import { cartActions, getTotalCartPrice } from "../../store/slices/cartSlice";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const userName = useSelector((state) => state.user.userName);
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  const formErros = useActionData();
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">{`Ready to order? Let's go!`}</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            required
            defaultValue={userName}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErros?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-500">
                {formErros.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing Order"
              : `${formatCurrency(totalPrice)} - Order now`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async function ({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please enter correct phone number";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  const newOrder = await createOrder(order);
  store.dispatch(cartActions.emptyCart());
  return redirect(`/order/${newOrder.id}`);
};
