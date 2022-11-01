import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { readBuyPosts } from "../apis/query/userApi";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import SubMain from "../components/layout/SubMain";
import PurChasesItem from "../components/mypage/PurchasesItem";

const Purchases = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery(["mypage", "purchases"], readBuyPosts);
  return (
    <Layout isDetail={false}>
      <DetailHeader title={"구매내역"} />
      <Main {...mainStyle}>
        {posts?.map((post, idx) => (
          <PurChasesItem key={idx} post={post} />
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
