import styled from "styled-components";
import FloatBtn from "../../elements/FloatBtn";
import Footer from "../footer/Footer";

import Header from "../header/Header";
import Layout from "../layout/Layout";
import Main from "../layout/Main";
import SubMain from "../layout/SubMain";
import PostItem from "../posts/PostItem";

function Posts() {
  return (
    <Layout>
      <Header title={"호평동"} isHome={true} />
      <SubMain>
        <Wrapper>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <PostItem />
          ))}
        </Wrapper>
      </SubMain>
      <FloatBtn />
      <Footer />
    </Layout>
  );
}

export default Posts;

const Wrapper = styled.div`
  position: relative;
`;
