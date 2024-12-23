import diningImg from "../assets/logo.jpg";

export default function Header({ openCartModal }) {
  return (
    <div id="main-header">
      <span id="title">
        <img src={diningImg} /> <h1>Food Order</h1>
      </span>
      <button className="button" onClick={openCartModal}>
        Basket
      </button>
    </div>
  );
}
