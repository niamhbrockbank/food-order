import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  isInCart: (id) => {},
});

export function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  function isInCart(id) {
    for (const item of items) {
      if (item.id === id) {
        return true;
      }
    }

    return false;
  }

  function addItem(item) {
    if (isInCart(item.id)) {
      setItems((prevCart) => {
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

    setItems((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
  }

  const ctxValue = { items, addItem, isInCart };

  return <CartContext value={ctxValue}>{children}</CartContext>;
}

export default CartContext;
