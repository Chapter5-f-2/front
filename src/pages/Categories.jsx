import React from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import PostItem from "../components/posts/PostItem";

const Categories = () => {
  return (
    <Layout>
      <DetailHeader title={"카테고리"} />
      <Main>
        <Wrapper>
          {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
            <PostItem key={idx} />
          ))}
        </Wrapper>
      </Main>
      <Footer />
    </Layout>
  );
};

export default Categories;

const Wrapper = styled.div`
  position: relative;
`;
