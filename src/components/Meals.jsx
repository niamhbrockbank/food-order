import MealItem from "./MealItem";

export default function Meals() {
  const meals = [
    {
      img: "n/a",
      name: "Veggie Burger",
      price: "$12.99",
      description: "Tasty something probably beans.",
      selected: false,
    },
  ];

  return (
    <div id="meals">
      {meals.map((meal) => (
        <MealItem item={meal} />
      ))}
    </div>
  );
}
