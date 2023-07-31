import React, { useContext } from "react";
import { Modal } from "../UI/modal/Modal";
import { CartItem } from "./CartItem";
import { styled } from "styled-components";
import { TotalAmount } from "./TotalAmount";
import Button from "../UI/Button";
import { CartContext } from "../../store/cart-context";
export const Cart = ({ onClose }) => {
  const { addedMeals } = useContext(CartContext);
  return (
    <Modal onClose={onClose}>
      <Content>
        <CartList>
          {addedMeals.map((meal) => (
            <CartItem
              title={meal.title}
              amount={meal.amount}
              price={meal.price}
              key={meal.id}
              meal={meal}
            />
          ))}
        </CartList>
        <TotalAmount />
        <ActionSContainer>
          <Button onClick={onClose} variant="outlined">
            Close
          </Button>
          <Button>Order</Button>
        </ActionSContainer>
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  padding: 1.3rem 1rem;
`;
const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-height: 360px;
  overflow-y: scroll;
`;
const ActionSContainer = styled.div``;
