import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import SubMain from "../components/layout/SubMain";
import PurChasesItem from "../components/mypage/PurchasesItem";

const Purchases = () => {
  return (
    <Layout>
      <DetailHeader title={"구매내역"} />
      <Main {...mainStyle}>
        {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
          <PurChasesItem key={idx} />
        ))}
      </Main>
      <Footer />
    </Layout>
  );
};

export default Purchases;

const mainStyle = {
  _bgColor: "rgba(0,0,0,0.05)",
};

const Main = styled(SubMain)`
  padding-bottom: 0px;
`;
