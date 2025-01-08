import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  isInCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function isInCart(id) {
    for (const item of cart) {
      if (item.id === id) {
        return true;
      }
    }

    return false;
  }

  function addToCart(item) {
    if (isInCart(item.id)) {
      setCart((prevCart) => {
        const newCart = prevCart.map((cartItem) => {
          if (cartItem.id === item.id) {
            const newQuantity = (cartItem.quantity = cartItem.quantity + 1);
            return { ...cartItem, quantity: newQuantity };
          }

          return cartItem;
        });

        return newCart;
      });
      return;
    }

    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
  }

  const ctxValue = { cart, addToCart, isInCart };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
