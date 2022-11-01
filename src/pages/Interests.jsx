import React from "react";
import { useQuery } from "react-query";

import styled from "styled-components";
import { readWishPosts } from "../apis/query/userApi";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import SubMain from "../components/layout/SubMain";
import InterestsItem from "../components/mypage/InterestsItem";
import SmallSpinner from "../static/svg/SmallSpinner";

const Interests = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery(["mypage", "interests"], readWishPosts);
  if (error) return;
  return (
    <Layout>
      <DetailHeader title={"관심목록"} />
      <Main>
        {isLoading ? (
          <SmallSpinner />
        ) : (
          posts?.map((post, idx) => <InterestsItem key={idx} post={post} />)
        )}
      </Main>
      <Footer />
    </Layout>
  );
};

export default Interests;

const Main = styled(SubMain)`
  padding-bottom: 0px;
`;
