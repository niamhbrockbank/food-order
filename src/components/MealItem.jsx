import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import ItemQuantity from "./ItemQuantity";
import Button from "./UI/button";

export default function MealItem({ meal }) {
  const { addItem, isInCart } = useContext(CartContext);

  const { id, image, name, price, description } = meal;
  const formattedPrice = currencyFormatter.format(price);
  const alreadyInCart = isInCart(id);

  return (
    <li className="meal-item">
      <article>
        <div>
          <img src={`http://localhost:3000/${image}`} alt={name} />
          <h3>{name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <span className="meal-item-actions">
          {!alreadyInCart ? (
            <Button className="button" onClick={() => addItem(meal)}>
              Add to Cart
            </Button>
          ) : (
            <ItemQuantity item={{ ...meal, quantity: 2 }} />
          )}
        </span>
      </article>
    </li>
  );
}
