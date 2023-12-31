/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";

export function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-3 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-boldq">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}
