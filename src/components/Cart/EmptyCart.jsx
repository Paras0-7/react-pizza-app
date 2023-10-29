import { LinkButton } from "../UI/LinkButton";

export function EmptyCart() {
  return (
    <div className="mt-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-6">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}
