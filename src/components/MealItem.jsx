import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";

export default function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);

  function handleAddMealToCart() {
    addItem(meal);
  }

  const { id, image, name, price, description } = meal;
  const formattedPrice = currencyFormatter.format(price);
  const alreadyInCart = false;

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
            <Button className="button" onClick={handleAddMealToCart}>
              Add to Cart
            </Button>
          ) : (
            <p>this is in the cart</p>
          )}
        </span>
      </article>
    </li>
  );
}
