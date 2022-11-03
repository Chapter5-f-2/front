import React from "react";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import { ShowYearAtom } from "../shared/atoms/modalAtoms";
import { useRecoilState } from 'recoil';
import getYear from '../utils/getYear';
import Left from '../static/svg/Left';

const Account = () => {
  const [showYear, setShowYear] = useRecoilState(ShowYearAtom);
  return (
    <Layout>
      <DetailHeader title={"당근 가계부"} />
      <Wrapper>
        <FinancialLedger>
        <div>
          <h1>나먕주 밀탱크님의 당근가계부</h1>
          <img src="" alt="" />
          <Year onClick={() => setShowYear(true)}>
          <span>2022년 11월</span>
          <Left />
        </Year>
        </div>
        </FinancialLedger>
      </Wrapper>
    </Layout>
  );
};

export default Account;

const Wrapper = styled.div`
  width: 100%;  
  display: flex;
`;

const FinancialLedger = styled.div`
  position: relative;
  width: 100%; 
  
div {
  padding-top: 10%;
  height: 30%;
  background-color: ${(props) => props.theme.btnColor.darkOrange};
  display: flex;
  justify-content: space-evenly;
  gap:4rem;
  

  h1 {
    display: flex;
    width: 43%;
    height: 34%;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
  }
  
  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
}

`;

const Year = styled.div`
  margin-top: 1rem;
  width: 30%;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.borderColor.lightGray};
  font-weight: 500;
  border: none;
  display: block;
  /* svg {
    position: absolute;
    width: 1.5rem;
    transform: rotateZ(270deg);
    bottom: 33rem;
    right: 19rem;
  } */
`;
