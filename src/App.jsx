import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
    </CartContextProvider>
  );
}

export default App;
