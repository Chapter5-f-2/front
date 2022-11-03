import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { readKeywordPosts } from "../apis/query/postApi";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import PostItem from "../components/posts/PostItem";

const KeywordPosts = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data: posts } = useQuery(["posts", "keywords"], () =>
    readKeywordPosts(keyword)
  );

  return (
    <Layout>
      <DetailHeader title={keyword} />
      <Main>
        <Wrapper>
          {posts &&
            posts.map((post) => <PostItem key={post.postId} post={post} />)}
        </Wrapper>
      </Main>
      <Footer />
    </Layout>
  );
};

export default KeywordPosts;

const Wrapper = styled.div`
  position: relative;
`;
