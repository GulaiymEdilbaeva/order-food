import React, { useState } from "react";

export const CartContext = React.createContext({
  addedMeals: [],

  totalAmaount: 0,
  onAddMeal: () => {},
});
export const CartProvider = ({ children }) => {
  const [addedMeals, setAddedMeals] = useState([]);

  const addMealHandler = (newMeal) => {
    console.log("asdfasdf");
    const currentIndex = addedMeals.findIndex((item) => item.id === newMeal.id);
    if (currentIndex === -1) {
      return setAddedMeals([...addedMeals, newMeal]);
    }
    const newMeals = addedMeals.map((meal) => {
      if (meal.id === newMeal.id) {
        return {
          ...meal,
          amount: meal.amount + newMeal.amount,
        };
      }
      return meal;
    });
    setAddedMeals(newMeals);
  };

  const getTotalAmount = () => {
    return addedMeals.reduce(
      (sum, { price, amount }) => sum + amount * price,
      0
    );
  };

  const Decrement = (id) => {
    const update = addedMeals.map((el) => {
      if (el.id === id && el.amount !== 0) {
        return {
          ...el,
          amount: el.amount - 1,
        };
      }
      return el;
    });
    setAddedMeals([...update]);
  };

  const Increment = (id) => {
    const update = addedMeals.map((el) => {
      if (el.id === id && el.amount !== 0) {
        return {
          ...el,
          amount: el.amount + 1,
        };
      }
      return el;
    });
    setAddedMeals([...update]);
  };
  return (
    <CartContext.Provider
      value={{
        addedMeals,
        onAddMeal: addMealHandler,
        totalAmount: 0,
        getTotalAmount,
        Decrement,
        Increment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
