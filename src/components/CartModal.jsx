import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../store/CartContext";
import CartItem from "./CartItem";
import Button from "./UI/button";

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
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
