import ItemQuantity from "./ItemQuantity";

export default function CartItem({ item }) {
  return (
    <ul className="cart-item">
      <p>{item.name}</p>
      <span className="cart-item-actions">
        <ItemQuantity item={item} />
      </span>
    </ul>
  );
}
