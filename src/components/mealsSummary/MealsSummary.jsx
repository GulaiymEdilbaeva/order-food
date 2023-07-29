import React from "react";
import { MealsBannerImage } from "../../assets";
import { styled } from "styled-components";

export const MealsSummary = () => {
  return (
    <section>
      <MainImageWrapper>
        <img src={MealsBannerImage} alt="Meals" />
      </MainImageWrapper>

      <MealsSummaryContainer>
        <h3>Delicious Food, Delivered To You</h3>

        <Paragraph>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </Paragraph>
        <Paragraph>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </Paragraph>
      </MealsSummaryContainer>
    </section>
  );
};

const MainImageWrapper = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const MealsSummaryContainer = styled.div`
  text-align: center;
  width: 854px;
  height: 270px;
  margin: 0 auto;
  background-color: #383838;
  color: #fff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.3);
  margin-top: -10rem;
  position: relative;
  h3 {
    font-size: 2rem;
  }
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  margin-top: 20px;
  color: #fff;
`;
