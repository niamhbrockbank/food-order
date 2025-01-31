import { useContext } from "react";
import diningImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";

export default function Header({ openCartModal }) {
  const { items } = useContext(CartContext);
  const totalCartItems = items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );
  return (
    <div id="main-header">
      <span id="title">
        <img src={diningImg} /> <h1>Food Order</h1>
      </span>
      <Button textOnly onClick={openCartModal}>
        Cart ({totalCartItems})
      </Button>
    </div>
  );
}
