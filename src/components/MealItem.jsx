export default function MealItem({ item }) {
  const { image, name, price, description, selected } = item;
  return (
    <article className="meal-item">
      <img src={image} />
      <h3>{name}</h3>
      <p className="meal-item-price">{price}</p>
      <p className="meal-item-description">{description}</p>
      <span className="meal-item-actions">
        {!selected && <button className="button">Add to Cart</button>}
      </span>
    </article>
  );
}
