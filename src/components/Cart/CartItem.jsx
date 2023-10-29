import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../UI/Button";
import { cartActions } from "../../store/slices/cartSlice";

/* eslint-disable react/prop-types */
export function CartItem({ item }) {
  // eslint-disable-next-line no-unused-vars
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const deleteItem = function () {
    dispatch(cartActions.deleteItem(pizzaId));
  };
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={deleteItem}>
          Delete
        </Button>
      </div>
    </li>
  );
}
