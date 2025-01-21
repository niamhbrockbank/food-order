import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import ItemQuantity from "./ItemQuantity";

export default function MealItem({ meal }) {
  const { addToCart, isInCart } = useContext(CartContext);

  const { id, image, name, price, description } = meal;
  const alreadyInCart = isInCart(id);

  return (
    <li className="meal-item">
      <article>
        <img src={image} />
        <h3>{name}</h3>
        <p className="meal-item-price">${price}</p>
        <p className="meal-item-description">{description}</p>
        <span className="meal-item-actions">
          {!alreadyInCart ? (
            <button className="button" onClick={() => addToCart(meal)}>
              Add to Cart
            </button>
          ) : (
            <ItemQuantity item={{ ...meal, quantity: 2 }} />
          )}
        </span>
      </article>
    </li>
  );
}
