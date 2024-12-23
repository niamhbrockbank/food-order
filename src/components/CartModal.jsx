import { useContext } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../store/CartContext";

export default function CartModal() {
  const { cart, openModal, closeModal } = useContext(CartContext);

  return createPortal(
    <dialog open={openModal === "cart"}>
      <h1>hi im the cart</h1>
      <li>
        {cart.map((mealId) => (
          <ul key={mealId}>{mealId}</ul>
        ))}
      </li>
      <form method="dialog">
        <button className="button" onClick={closeModal}>
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
