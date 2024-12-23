import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  isInCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function isInCart(id) {
    for (const item of cart) {
      if (item.id === id) {
        return true;
      }
    }

    return false;
  }

  const ctxValue = { cart, addToCart, isInCart };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
