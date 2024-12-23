import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function MealItem({ item, selected }) {
  const { addToCart } = useContext(CartContext);

  const { id, image, name, price, description } = item;

  return (
    <article className="meal-item">
      <img src="n/a" />
      <h3>{name}</h3>
      <p className="meal-item-price">${price}</p>
      <p className="meal-item-description">{description}</p>
      <span className="meal-item-actions">
        {!selected ? (
          <button className="button" onClick={() => addToCart(id)}>
            Add to Cart
          </button>
        ) : (
          <p>1</p>
        )}
      </span>
    </article>
  );
}
