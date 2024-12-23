import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../store/CartContext";

const CartModal = forwardRef(function CartModal({}, ref) {
  const { cart } = useContext(CartContext);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="cart" ref={dialog}>
      <h2>Cart</h2>
      <li>
        {cart.map((mealId) => (
          <ul key={mealId} className="cart-item">
            <p>{mealId}</p>
          </ul>
        ))}
      </li>
      <p className="cart-total">$999</p>
      <form method="dialog" className="modal-actions">
        <button className="text-button">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
