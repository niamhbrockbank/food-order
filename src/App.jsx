import { useRef } from "react";
import CartModal from "./components/CartModal";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext";

function App() {
  const cartModal = useRef();

  function handleOpenCartModal() {
    cartModal.current.open();
  }

  return (
    <CartContextProvider>
      <Header openCartModal={handleOpenCartModal} />
      <Meals />
      <CartModal ref={cartModal} />
    </CartContextProvider>
  );
}

export default App;
