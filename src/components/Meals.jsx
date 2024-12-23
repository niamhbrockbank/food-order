import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const jsonBody = await response.json();
        setMeals(jsonBody);
      } catch (error) {
        console.error(error);
        setMeals([]);
      }
    }

    fetchMeals();
  }, []);

  return (
    <div id="meals">
      {meals.map((meal) => {
        const selected = cart.includes(meal.id);
        return <MealItem key={meal.id} item={meal} selected={selected} />;
      })}
    </div>
  );
}
