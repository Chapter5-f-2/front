import React from "react";
import styled from "styled-components";
import { FlexColumnBox } from "../../shared/styles/flex";

const State = ({ btnFn }) => {
  const onClick = (num) => {
    btnFn.closeModal();
  };
  return (
    <Wrapper>
      <Buttons>
        <h3>상태 변경</h3>
        <span onClick={() => onClick()}>판매중</span>
        <span onClick={() => onClick()}>예약중</span>
        <span onClick={() => onClick()}>거래완료</span>
      </Buttons>
      <Button onClick={() => btnFn.closeModal()}>닫기</Button>
    </Wrapper>
  );
};

export default State;

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0.6rem;
`;
const Buttons = styled.div`
  background-color: #fcfcfc;
  border-radius: 10px;
  ${FlexColumnBox}
  width: 100%;
  color: #2a86ff;
  h3,
  span {
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
    cursor: pointer;
  }
  h3 {
    padding: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    font-size: 0.8rem;
  }
  span {
    &:hover {
      color: rgba(0, 0, 0, 0.8);
      background-color: #ffffff;
    }
  }
`;

const Button = styled.button`
  margin-top: 0.8rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fcfcfc;
  cursor: pointer;
  width: 100%;
  color: #2a86ff;
  font-weight: 600;
  &:hover {
    color: rgba(0, 0, 0, 0.8);
    background-color: #ffffff;
  }
`;
