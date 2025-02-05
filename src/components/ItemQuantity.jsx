import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function ItemQuantity({ item }) {
  const { addItem, removeItem } = useContext(CartContext);

  return (
    <>
      <button onClick={() => removeItem(item.id)}>-</button>
      {item.quantity}
      <button onClick={() => addItem(item)}>+</button>
    </>
  );
}
