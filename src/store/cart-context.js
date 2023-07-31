import React, { useState } from "react";

export const CartContext = React.createContext({
  addedMeals: [],
  totalAmaount: 0,
  onAddMeal: () => {},
});
export const CartProvider = ({ children }) => {
  const [addedMeals, setAddedMeals] = useState([]);

  const addMealHandler = (meal) => {
    setAddedMeals([...addedMeals, meal]);
  };
  return (
    <CartContext.Provider
      value={{
        addedMeals,
        onAddMeal: addMealHandler,
        totalAmount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
