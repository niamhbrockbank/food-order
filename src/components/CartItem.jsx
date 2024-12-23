export default function CartItem({ item }) {
  return (
    <ul className="cart-item">
      <p>{item.name}</p>
      <span className="cart-item-actions">
        <button>+</button>QUANTITY<button>-</button>
      </span>
    </ul>
  );
}
