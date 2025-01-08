import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function CartItem({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <ul className="cart-item">
      <p>{item.name}</p>
      <span className="cart-item-actions">
        <button>-</button>
        {item.quantity}
        <button onClick={() => addToCart(item)}>+</button>
      </span>
    </ul>
  );
}
