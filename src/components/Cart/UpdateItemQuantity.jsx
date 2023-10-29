/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../UI/Button";
import { cartActions, getQuantityById } from "../../store/slices/cartSlice";

export const UpdateItemQuantity = function ({ pizzaId }) {
  const currentQuantity = useSelector(getQuantityById(pizzaId));
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(cartActions.decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(cartActions.increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};
