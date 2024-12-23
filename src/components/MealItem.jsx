export default function MealItem({ item }) {
  const { img, name, price, description, selected } = item;
  return (
    <article className="meal-item">
      <img src={img} />
      <h3>{name}</h3>
      <p className="meal-item-price">{price}</p>
      <p className="meal-item-description">{description}</p>
      <div className="meal-item-actions">
        {!selected && <button>Add to Cart</button>}
      </div>
    </article>
  );
}
