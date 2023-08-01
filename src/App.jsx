import { useContext } from "react";
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { MealsSummary } from "./components/mealsSummary/MealsSummary";
import { ModalContext } from "./store/modal-context";
import { CartProvider } from "./store/cart-context";

function App() {
  const { isModalOpen, onClose } = useContext(ModalContext);
  return (
    <div>
      <CartProvider>
        <Header />
        <MealsSummary />
        <Meals />
        {isModalOpen && <Cart onClose={onClose} />}
      </CartProvider>
    </div>
  );
}

export default App;
