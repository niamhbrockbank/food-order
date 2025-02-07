import { useContext } from "react";
import diningImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";

export default function Header({}) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <div id="main-header">
      <span id="title">
        <img src={diningImg} /> <h1>Food Order</h1>
      </span>
      <Button textOnly onClick={handleShowCart}>
        Cart ({totalCartItems})
      </Button>
    </div>
  );
}
