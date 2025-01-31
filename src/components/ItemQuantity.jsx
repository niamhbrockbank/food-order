import { useContext } from "react";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";

export default function ItemQuantity({ item }) {
  const { addItem } = useContext(CartContext);

  return (
    <>
      <Button>-</Button>
      {item.quantity}
      <Button onClick={() => addItem(item)}>+</Button>
    </>
  );
}
