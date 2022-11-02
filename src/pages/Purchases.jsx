import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { readBuyPosts } from "../apis/query/userApi";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import SubMain from "../components/layout/SubMain";
import PurChasesItem from "../components/mypage/PurchasesItem";
import SmallSpinner from "../static/svg/SmallSpinner";

const Purchases = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery(["mypage", "purchases"], readBuyPosts);
  if (error) return;
  console.log(posts);
  return (
    <Layout isDetail={false}>
      <DetailHeader title={"구매내역"} />

      <Main {...mainStyle}>
        {isLoading ? (
          <SmallSpinner />
        ) : (
          posts &&
          posts?.map((post, idx) => <PurChasesItem key={idx} post={post} />)
        )}
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
