import React from "react";
import styled from "styled-components";
import { FlexColumnBox } from "../../shared/styles/flex";

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <div>
        <div />
      </div>
      <div>
        <span>애플워치 7 41mm 스타라이트 색상 판매</span>
        <strong>350,000원</strong>
      </div>
    </ProductInfoContainer>
  );
};

export default ProductInfo;

const ProductInfoContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  & > div:first-child {
    div {
      width: 3rem;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      aspect-ratio: 1/1;
    }
  }
  & > div:last-child {
    ${FlexColumnBox};
    justify-content: space-between;
    padding: 0.2rem 1rem;
    span {
      font-size: 0.9rem;
    }
    strong {
      font-weight: 600;
    }
  }
`;
