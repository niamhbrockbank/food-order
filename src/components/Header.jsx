import diningImg from "../assets/logo.jpg";
import Button from "./UI/button";

export default function Header({ openCartModal }) {
  return (
    <div id="main-header">
      <span id="title">
        <img src={diningImg} /> <h1>Food Order</h1>
      </span>
      <Button textOnly onClick={openCartModal}>
        Cart (0)
      </Button>
    </div>
  );
}
