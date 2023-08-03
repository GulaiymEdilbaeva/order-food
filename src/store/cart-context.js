import React, { useReducer } from "react";

export const CartContext = React.createContext({
  addedMeals: [],
  totalAmount: 0,
  onAddMeal: () => {},
  Decrement: () => {},
  Increment: () => {},
});

const ADD_MEAL_TYPE = "ADD_MEAL";
const INCREMENT_MEAL = "INCREMENT_AMOUNT";
const DECREMENT_MEAL = "DECREMENT_AMOUNT";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_MEAL_TYPE: {
      const prevMeals = state.addedMeals;
      const newMeal = action.payload;

      if (prevMeals.length === 0) {
        return {
          ...state,
          addedMeals: [newMeal],
        };
      }
      const isMealExist = prevMeals.find((meal) => meal.id === newMeal.id);
      if (isMealExist === undefined) {
        return {
          ...state,
          addedMeals: [...prevMeals, newMeal],
        };
      }
      const newAddedMeals = prevMeals.map((meal) => {
        if (meal.id === newMeal.id) {
          return {
            ...meal,
            amount: meal.amount + newMeal.amount,
          };
        }
        return meal;
      });
      return {
        ...state,
        addedMeals: newAddedMeals,
      };
    }

    case INCREMENT_MEAL: {
      const prevMeals = state.addedMeals;
      const mealId = action.payload;
      const newAddedMeals = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return { ...meal, amount: meal.amount + 1 };
        }
        return meal;
      });
      return {
        ...state,
        addedMeals: newAddedMeals,
      };
    }

    case DECREMENT_MEAL: {
      const prevMeals = state.addedMeals;
      const mealId = action.payload;
      const currentMealItem = prevMeals.find((meal) => meal.id === mealId);
      console.log(currentMealItem);

      if (currentMealItem.amount === 1) {
        return {
          ...state,
          addedMeals: prevMeals.filter(
            (meal) => meal.id !== currentMealItem.id
          ),
        };
      }

      const newAddedMeals = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return { ...meal, amount: meal.amount - 1 };
        }
        return meal;
      });

      return {
        ...state,
        addedMeals: newAddedMeals,
      };
    }
    default: {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { addedMeals: [] });

  const { addedMeals = [] } = cart;

  const addMealHandler = (newMeal) => {
    dispatch({ type: "ADD_MEAL", payload: newMeal });
  };

  const Decrement = (id) => {
    dispatch({ type: "DECREMENT_AMOUNT", payload: id });
  };

  const Increment = (id) => {
    dispatch({ type: "INCREMENT_AMOUNT", payload: id });
  };

  const totalAmount = addedMeals.reduce((acc, meal) => {
    return acc + meal.price * meal.amount;
  }, 0);
  return (
    <CartContext.Provider
      value={{
        addedMeals,
        onAddMeal: addMealHandler,
        totalAmount,
        Decrement,
        Increment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
