import React, { useContext } from "react";
import { useCallback } from "react";
import { WooProduct } from "../types/woo-types";

export type CartItem = { amount: number; product: WooProduct };

type CartContextType = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
};

// Use createContext to make data about the cart available globally on the site (avoiding having to pass props)
// https://reactjs.org/docs/context.html
export const CartContext = React.createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

/* Function for adding items to cart, removing them, and calculating the amount of total items + total price */
export function useCart() {
  const { cart, setCart } = useContext(CartContext);

  let totalPrice = 0;
  let totalItems = 0;
  cart?.forEach((item) => {
    totalItems += item.amount || 0;
    totalPrice += item.amount * parseInt(item.product.price);
  });

  const clearCart = useCallback(() => {
    setCart([]);
  }, [setCart]);

  const addProduct = useCallback(
    (product: WooProduct) => {
      // Make a copy
      let nextState = [...cart];

      // Check if item is already in the cart
      const existing = nextState.find((item) => item.product.id === product.id);

      if (existing) {
        // Is already there
        existing.amount = existing.amount + 1;
      } else {
        // Isn't already there
        nextState = nextState.concat({ amount: 1, product });
      }

      setCart(nextState);
    },
    [cart, setCart]
  );

  const removeProduct = useCallback(
    (product: WooProduct) => {
      // Make a copy
      let nextState = [...cart];

      // Check if item is already in the cart
      const existingIndex = nextState.findIndex(
        (item) => item.product.id === product.id
      );
      const item = nextState[existingIndex];

      if (item) {
        // Remove 1 from the cart
        item.amount = item.amount - 1;
      }
      if (item.amount === 0) {
        // There are 0 left, remove product from cart
        nextState.splice(existingIndex, 1);
      }

      setCart(nextState);
    },
    [cart, setCart]
  );

  return {
    addProduct,
    removeProduct,
    clearCart,
    cart,
    setCart,
    totalPrice,
    totalItems,
  };
}
