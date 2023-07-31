import { Modal } from "./components/UI/modal/Modal";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { MealsSummary } from "./components/mealsSummary/MealsSummary";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <Meals />
      <Modal />
    </div>
  );
}

export default App;
