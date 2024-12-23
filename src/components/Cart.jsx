import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Modal from "./Modal";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <Modal>
      <dialog>
        <h1>hi im the cart</h1>
        <li>
          {cart.map((mealId) => (
            <ul key={mealId}>{mealId}</ul>
          ))}
        </li>
      </dialog>
    </Modal>
  );
}
