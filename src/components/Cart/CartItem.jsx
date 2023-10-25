/* eslint-disable react/prop-types */
export function CartItem({ item }) {
  // eslint-disable-next-line no-unused-vars
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>{/* <p>{formatCurrency(totalPrice)}</p> */}</div>
    </li>
  );
}
