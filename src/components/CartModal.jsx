import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../store/CartContext";
import CartItem from "./CartItem";

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
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </li>
      <p className="cart-total">$999</p>
      <form method="dialog" className="modal-actions">
        <button className="text-button">Close</button>
        <button className="button">Go to Checkout</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
