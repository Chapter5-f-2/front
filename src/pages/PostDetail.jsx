import React from "react";

import PriceFooter from "../components/footer/PriceFooter";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";

import SubMain from "../components/layout/SubMain";
import ItemDetail from "../components/posts/ItemDetail";

const PostDetail = () => {
  return (
    <Layout isDetail={true}>
      <SubMain>
        <DetailHeader title={"상품페이지"} isDetail={true} />
        <ItemDetail />
      </SubMain>
      <PriceFooter />
    </Layout>
  );
};

export default PostDetail;
