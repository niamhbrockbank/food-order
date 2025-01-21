import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Button from "./UI/button";

export default function ItemQuantity({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Button>-</Button>
      {item.quantity}
      <Button onClick={() => addToCart(item)}>+</Button>
    </>
  );
}
