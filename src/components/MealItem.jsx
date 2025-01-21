import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import ItemQuantity from "./ItemQuantity";

export default function MealItem({ item }) {
  const { addToCart, isInCart } = useContext(CartContext);

  const { id, image, name, price, description } = item;
  const alreadyInCart = isInCart(id);

  return (
    <article className="meal-item">
      <img src={image} />
      <h3>{name}</h3>
      <p className="meal-item-price">${price}</p>
      <p className="meal-item-description">{description}</p>
      <span className="meal-item-actions">
        {!alreadyInCart ? (
          <button className="button" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        ) : (
          <ItemQuantity item={{ ...item, quantity: 2 }} />
        )}
      </span>
    </article>
  );
}
