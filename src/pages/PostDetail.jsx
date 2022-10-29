import React from "react";

import PriceFooter from "../components/footer/PriceFooter";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import ItemDetail from "../components/posts/ItemDetail";

const PostDetail = () => {
  return (
    <Layout>
      <DetailHeader title={"상품페이지"} />
      <Main>
        <ItemDetail />
      </Main>
      <PriceFooter />
    </Layout>
  );
};

export default PostDetail;
