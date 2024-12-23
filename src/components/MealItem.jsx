export default function MealItem({ item }) {
  const { image, name, price, description, selected } = item;
  return (
    <article className="meal-item">
      <img src={image} />
      <h3>{name}</h3>
      <p className="meal-item-price">{price}</p>
      <p className="meal-item-description">{description}</p>
      <div className="meal-item-actions">
        {!selected && <button>Add to Cart</button>}
      </div>
    </article>
  );
}
