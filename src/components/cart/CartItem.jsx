import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";

export const CartItem = ({
  title,
  meal,
  price,
  amount,
  id,
  Increment,
  Decrement,
}) => {
  return (
    <ListItem>
      <Content>
        <h2>{title}</h2>
        <PriceContainer>
          <span className="price">${price}</span>
          <span className="amount"> x{amount}</span>
        </PriceContainer>
      </Content>
      <StyleofIcon>
        <Button
          borderStyle="squared"
          variant="outlined"
          onClick={() => Decrement(id, amount)}
        >
          -
        </Button>
        <Button
          borderStyle="squared"
          variant="outlined"
          onClick={() => Increment(id, amount)}
        >
          +
        </Button>
      </StyleofIcon>
    </ListItem>
  );
};

const Content = styled.div`
  & h2 {
    color: #222222;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  & > .price {
    color: #ad5502;
    font-size: 18px;
    font-weight: 600;
  }
  & > .amount {
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    padding: 6px 14px;
    color: #222222;
    font-weight: 500;
  }
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #dcd9d9;
`;
const StyleofIcon = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 2rem;
`;
