import React from "react";
import { DUMMY_MEALS } from "../mealItem/MealItem";
import { styled } from "styled-components";
import { MealItemForm } from "../mealItem/MealItemForm";

export const Meals = () => {
  return (
    <MainContainer>
      {DUMMY_MEALS.map((meal) => (
        <>
          <List>
            <Container>
              <h3
                style={{
                  height: "27px",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#222222",
                }}
              >
                {" "}
                {meal.title}
              </h3>
              <DescriptionFood>{meal.about}</DescriptionFood>
              <h5
                style={{
                  width: "67px",
                  height: "30px",
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "#ad5502",
                  fontFamily: "Poppins",
                }}
              >
                ${meal.price}
              </h5>
            </Container>

            <MealItemForm />
          </List>
          <Line></Line>
        </>
      ))}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: absolute;
  top: 635px;
  left: 114px;
  background-color: white;
  width: 1039px;
  height: 564px;
  border-radius: 16px;
`;

const List = styled.div`
  height: 60px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DescriptionFood = styled.p`
  width: 184px;
  height: 24px;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
`;
const Line = styled.span`
  width: 959px;
  height: 0px;
  margin: 30px;
  display: flex;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
`;
