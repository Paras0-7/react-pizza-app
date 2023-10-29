import { createSlice } from "@reduxjs/toolkit";

/* eslint-disable no-unused-vars */
const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: "Mediterranean",
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // const index = state.cart.findIndex(
      //   (item) => item.pizzaId === action.payload.pizzaId,
      // );
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      // if (index >= 0) {
      //   state.cart[index].quantity++;
      //   state.cart[index].totalPrice += action.payload.unitPrice;
      if (item) {
        item.quantity++;
        item.totalPrice += item.unitPrice;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.unitPrice,
        });
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.totalPrice - item.unitPrice;
      } else {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    emptyCart(state, action) {
      state.cart = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

export const getQuantityById = function (id) {
  return (state) =>
    state.cart.cart.filter((item) => item.pizzaId === id)[0].quantity;
};
