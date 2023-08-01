import React, { useReducer } from "react";

export const CartContext = React.createContext({
  addedMeals: [],
  totalAmount: 0,
  onAddMeal: () => {},
  getTotalAmount: () => {},
  Decrement: () => {},
  Increment: () => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MEAL":
      const currentIndex = state.addedMeals.findIndex(
        (item) => item.id === action.payload.id
      );
      if (currentIndex === -1) {
        return {
          ...state,
          addedMeals: [...state.addedMeals, action.payload],
        };
      }
      const newMeals = state.addedMeals.map((meal) => {
        if (meal.id === action.payload.id) {
          return {
            ...meal,
            amount: meal.amount + action.payload.amount,
          };
        }
        return meal;
      });
      return {
        ...state,
        addedMeals: newMeals,
      };
    case "DECREMENT":
      const productDecrement = state.addedMeals.map((el) => {
        if (el.id === action.payload && el.amount !== 0) {
          return {
            ...el,
            amount: el.amount - 1,
          };
        }
        return el;
      });
      return {
        ...state,
        addedMeals: productDecrement,
      };
    case "INCREMENT":
      const productIncrement = state.addedMeals.map((el) => {
        if (el.id === action.payload && el.amount !== 0) {
          return {
            ...el,
            amount: el.amount + 1,
          };
        }
        return el;
      });
      return {
        ...state,
        addedMeals: productIncrement,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    addedMeals: [],
    totalAmount: 0,
  });

  const addMealHandler = (newMeal) => {
    dispatch({ type: "ADD_MEAL", payload: newMeal });
  };

  const getTotalAmount = () => {
    return cart.addedMeals.reduce(
      (sum, { price, amount }) => sum + amount * price,
      0
    );
  };

  const Decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const Increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        addedMeals: cart.addedMeals,
        onAddMeal: addMealHandler,
        totalAmount: cart.totalAmount,
        getTotalAmount,
        Decrement,
        Increment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
