import { createContext } from "react";

export const CartContext = createContext({});

export default function CartContextProvider({ children }) {
  const ctxValue = {};

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
