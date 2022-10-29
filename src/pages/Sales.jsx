import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import SubMain from "../components/layout/SubMain";
import SalesItem from "../components/mypage/SalesItem";

const Sales = () => {
  const [focus, setFocus] = useState(true);
  const onClick = () => setFocus((prev) => !prev);
  return (
    <Layout>
      <DetailHeader title={"판매내역"} />
      <Main {...mainStyle}>
        <Btns>
          <Btn focus={focus} onClick={!focus ? onClick : () => {}}>
            판매중 1
          </Btn>
          <Btn focus={!focus} onClick={focus ? onClick : () => {}}>
            거래완료 4
          </Btn>
        </Btns>
        <SubMain>
          {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
            <SalesItem key={idx} focus={!focus} />
          ))}
        </SubMain>
      </Main>
      <Footer />
    </Layout>
  );
};

export default Sales;

const mainStyle = {
  _bgColor: "rgba(0,0,0,0.05)",
};

const Btns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const Btn = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: 2px solid
    ${(props) => (props.focus ? props.theme.btnColor.orange : "none")};
  margin-bottom: 0px;
  &:hover {
    font-weight: 500;
  }
`;

const Main = styled(SubMain)`
  padding-bottom: 0px;
`;
