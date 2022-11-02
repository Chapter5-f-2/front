import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { readCategoryPosts } from "../apis/query/postApi";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import PostItem from "../components/posts/PostItem";
import getCategory from "../utils/getCategory";

const Categories = () => {
  const { id } = useParams();
  const { data: posts } = useQuery(["posts", "category"], () =>
    readCategoryPosts(id)
  );

  console.log(posts);
  return (
    <Layout>
      <DetailHeader title={getCategory(+id)} />
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

export default Categories;

const Wrapper = styled.div`
  position: relative;
`;
