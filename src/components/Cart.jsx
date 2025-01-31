import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formatting";
import CartItem from "./CartItem";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

export default function Cart({}) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <form method="dialog" className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </form>
    </Modal>
  );
}
