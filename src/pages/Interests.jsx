import React from "react";

import styled from "styled-components";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import SubMain from "../components/layout/SubMain";
import InterestsItem from "../components/mypage/InterestsItem";

const Purchases = () => {
  return (
    <Layout>
      <DetailHeader title={"관심목록"} />
      <Main>
        {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
          <InterestsItem key={idx} />
        ))}
      </Main>
      <Footer />
    </Layout>
  );
};

export default Purchases;

const Main = styled(SubMain)`
  padding-bottom: 0px;
`;
