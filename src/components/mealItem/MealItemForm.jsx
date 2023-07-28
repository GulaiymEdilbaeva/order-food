import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { PlusIcon } from "../../assets";

export const MealItemForm = () => {
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  return (
    <StyledForm>
      <Container>
        <label htmlFor="amount">Amount</label>
        <input
          onChange={amountChangeHandler}
          value={amount}
          id="amount"
          min={1}
          type="number"
        />
      </Container>
      <Button>
        <PlusIcon /> Add
      </Button>
    </StyledForm>
  );
};

const Container = styled.div`
  margin-bottom: 10px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222;
    margin-right: 20px;
  }
  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: none;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
