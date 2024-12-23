import CartModal from "./components/CartModal";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
      <CartModal />
    </CartContextProvider>
  );
}

export default App;
