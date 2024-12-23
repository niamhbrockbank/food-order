import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);

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
      {meals.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </div>
  );
}
