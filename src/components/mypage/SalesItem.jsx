import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DotSvg from "../../pages/DotSvg";
import { FlexAlignBox, FlexColumnBox } from "../../shared/styles/flex";

const SalesItem = ({ focus }) => {
  const navigate = useNavigate();

  return (
    <ItemWrapper>
      <Item onClick={() => navigate("/posts/1")}>
        <ImageContainer>
          <div />
        </ImageContainer>
        <InfoContainer>
          <TextContainer>
            <div>
              <h3>포켓몬 빵</h3>
            </div>
            <div>
              <span>화도읍</span>
              <span>· 1시간 전</span>
            </div>
            <strong>
              {focus ? <StatusBtn>거래완료</StatusBtn> : null}3,000원
            </strong>
          </TextContainer>
        </InfoContainer>
      </Item>
      <Btns focus={focus}>
        {focus ? (
          <button>후기 작성하기</button>
        ) : (
          <>
            <button>예약중</button>
            <button>거래완료</button>
          </>
        )}
      </Btns>
      <BtnSvg>
        <DotSvg />
      </BtnSvg>
    </ItemWrapper>
  );
};

export default SalesItem;

const Item = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  div {
    width: 5rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    aspect-ratio: 1/1;
  }
  margin-right: 1rem; ;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 5rem;
  ${FlexColumnBox};
`;

const TextContainer = styled.div`
  padding-top: 0.2rem;
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-size: 1rem;
      &:hover {
        font-weight: 600;
      }
    }
  }
  div:nth-child(2) {
    margin-bottom: 0.4rem;
    span {
      color: ${(props) => props.theme.fontColor.lightGray};
      font-size: 0.8rem;
    }
  }

  strong {
    ${FlexAlignBox}
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const Btns = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.focus ? "1fr" : "1fr 1fr")};
  justify-items: center;
  grid-gap: 1px;
  button {
    width: 100%;
    padding: 0.8rem 0;
    color: ${(props) =>
      props.focus ? props.theme.fontColor.orange : "inherit"};
    font-weight: ${(props) => (props.focus ? "500" : "400")};
    background-color: ${(props) => props.theme.bgColor};
    &:hover {
      color: white;
      font-weight: 500;
      background-color: ${(props) =>
        props.focus
          ? props.theme.btnColor.darkOrange
          : props.theme.btnColor.orange};
    }
  }
`;

const StatusBtn = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.4rem 0.3rem;
  border-radius: 5px;
  color: white;
  margin-right: 0.5rem;
`;

const BtnSvg = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.2rem;
  width: 2.5rem;
  height: 2.5rem;
  &:hover {
    color: ${(props) => props.theme.fontColor.lightGray};
  }
`;

// 최상위 컴포넌트
const ItemWrapper = styled.div`
  margin-bottom: 0.6rem;
  &:last-child {
    margin-bottom: 0px;
  }
  position: relative;
  &:hover {
    ${InfoContainer} {
      font-weight: 600;
    }
  }
`;
