import { useContext } from "react";
import diningImg from "../assets/logo.jpg";
import { CartContext } from "../store/CartContext";

export default function Header() {
  const { openCartModal } = useContext(CartContext);

  return (
    <div id="main-header">
      <span id="title">
        <img src={diningImg} /> <h1>Food Order</h1>
      </span>
      <button className="button" onClick={openCartModal}>
        Basket
      </button>
    </div>
  );
}
