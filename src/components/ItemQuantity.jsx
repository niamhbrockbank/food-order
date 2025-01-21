import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function ItemQuantity({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <button>-</button>
      {item.quantity}
      <button onClick={() => addToCart(item)}>+</button>
    </>
  );
}
