import React, { useEffect, useState } from "react";
import { Modal } from "../UI/modal/Modal";
import { CartItem } from "./CartItem";
import { styled } from "styled-components";
import { TotalAmount } from "./TotalAmount";
import Button from "../UI/Button";

import { fetchRequest } from "../../api/fetchRequest";

export const Cart = ({ onClose }) => {
  const [cartMeals, setCartMeals] = useState([]);
  const getCartMeals = () => {
    fetchRequest("basket").then((result) => {
      setCartMeals(result.data.items);
    });
  };
  useEffect(() => {
    getCartMeals();
  }, []);

  const increaseAmountHandler = async (id, amount) => {
    fetchRequest(`/basketItem/${id}/update`, {
      method: "PUT",
      body: { amount: amount + 1 },
    }).then(getCartMeals);
  };
  const decreaseAmountHandler = async (id, amount) => {
    if (amount === 1) {
      fetchRequest(`/basketItem/${id}/delete`, {
        method: "DELETE",
      }).then(getCartMeals);
    } else {
      fetchRequest(`/basketItem/${id}/update`, {
        method: "PUT",
        body: { amount: amount - 1 },
      }).then(getCartMeals);
    }
  };

  const totalAmount = cartMeals.reduce((acc, meal) => {
    return acc + meal.price * meal.amount;
  }, 0);
  return (
    <Modal onClose={onClose}>
      <Content>
        {cartMeals.length ? (
          <CartList>
            {cartMeals.map((meal) => {
              return meal.amount !== 0 ? (
                <CartItem
                  title={meal.title}
                  amount={meal.amount}
                  price={meal.price}
                  key={meal._id}
                  meal={meal}
                  id={meal._id}
                  description={meal.description}
                  Increment={increaseAmountHandler}
                  Decrement={decreaseAmountHandler}
                />
              ) : null;
            })}
          </CartList>
        ) : null}
        <TotalAmount totalAmount={totalAmount} />
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
