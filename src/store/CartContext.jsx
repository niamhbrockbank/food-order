import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  openCartModal: () => {},
  openModal: undefined,
  closeModal: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [openModal, setOpenModal] = useState(undefined);

  function addToCart(id) {
    setCart((prevCart) => [...prevCart, id]);
  }

  function openCartModal() {
    setOpenModal("cart");
  }

  function closeModal() {
    setOpenModal(undefined);
  }

  const ctxValue = { cart, addToCart, openCartModal, openModal, closeModal };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
