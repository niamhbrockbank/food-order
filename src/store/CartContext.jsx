import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
});

export default function CartContextProvider({ children }) {
  function addToCart(id) {
    console.log("Add to cart");
    console.log(id);
  }

  const ctxValue = { cart: ["something", "else"] };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
