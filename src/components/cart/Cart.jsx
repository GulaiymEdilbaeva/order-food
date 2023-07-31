import React from "react";
import { Modal } from "../UI/modal/Modal";
import { CartItem } from "./CartItem";
import { styled } from "styled-components";
import { TotalAmount } from "./TotalAmount";
import Button from "../UI/Button";
export const Cart = ({ onClose }) => {
  return (
    <Modal>
      <Content>
        <CartList>
          <CartItem />
          <CartItem />
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
