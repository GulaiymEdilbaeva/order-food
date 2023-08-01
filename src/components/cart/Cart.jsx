import React, { useContext } from "react";
import { Modal } from "../UI/modal/Modal";
import { CartItem } from "./CartItem";
import { styled } from "styled-components";
import { TotalAmount } from "./TotalAmount";
import Button from "../UI/Button";
import { CartContext } from "../../store/cart-context";

export const Cart = ({ onClose }) => {
  const { addedMeals, getTotalAmount } = useContext(CartContext);

  return (
    <Modal onClose={onClose}>
      <Content>
        {addedMeals.length ? (
          <CartList>
            {addedMeals.map((meal) => {
              return meal.amount !== 0 ? (
                <CartItem
                  title={meal.title}
                  amount={meal.amount}
                  price={meal.price}
                  key={meal.id}
                  meal={meal}
                  id={meal.id}
                />
              ) : null;
            })}
          </CartList>
        ) : null}
        <TotalAmount onClick={onClose} totalAmount={getTotalAmount()} />
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
  overflow-y: auto;
`;
const ActionSContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
