import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { MealItem } from "../mealItem/MealItem";
import { fetchRequest } from "../../api/fetchRequest";

export const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchRequest("foods").then((result) => setMeals(result.data));
  }, []);

  return (
    <Container>
      <ul>
        {meals?.map((meal) => {
          return (
            <MealItem
              key={meal._id}
              title={meal.title}
              description={meal.description}
              price={meal.price}
              id={meal._id}
            />
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled("section")`
  padding: 40px;
  background-color: #ffffff;
  border-radius: 1rem;
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  & > ul {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    list-style: none;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
