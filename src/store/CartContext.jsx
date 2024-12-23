import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(id) {
    console.log("Add to cart");
    console.log(id);
    setCart((prevCart) => [...prevCart, id]);
  }

  const ctxValue = { cart, addToCart };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
