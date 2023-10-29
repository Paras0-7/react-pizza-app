import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);
  const totalItems = cart.reduce(
    (quantity, item) => quantity + item.quantity,
    0,
  );
  const totalPrice = cart.reduce((price, item) => price + item.totalPrice, 0);

  if (!totalItems) return;
  return (
    <div
      className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase
     text-stone-200 sm:px-6 md:text-base"
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalItems} pizzas</span>
        <span>$ {totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
