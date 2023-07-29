// import { Button } from "./components/UI/Button";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { MealsSummary } from "./components/mealsSummary/MealsSummary";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <Meals />
      {/* <Button /> */}
    </div>
  );
}

export default App;
