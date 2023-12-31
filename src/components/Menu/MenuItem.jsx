/* eslint-disable no-unused-vars */

import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../UI/Button";
import { cartActions } from "../../store/slices/cartSlice";

/* eslint-disable react/prop-types */
export function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const addToCart = function () {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
    };

    dispatch(cartActions.addItem(newItem));
  };
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col pt-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button disabled={soldOut} type="small" onClick={addToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
