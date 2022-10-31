import React, { useState } from "react";

import PriceFooter from "../components/footer/PriceFooter";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";

import SubMain from "../components/layout/SubMain";
import Overlay from "../components/modal/Overlay";
import State from "../components/modal/State";
import ItemDetail from "../components/posts/ItemDetail";

const PostDetail = () => {
  const [isShow, setIsShow] = useState(false);
  const [isWish, setIsWish] = useState(false);
  const btnFn = {
    openModal: () => setIsShow(true),
    closeModal: () => setIsShow(false),
    setState: (num) => {},
  };
  return (
    <Layout isDetail={true}>
      <SubMain>
        <DetailHeader title={"상품페이지"} isDetail={true} />
        <ItemDetail setIsShow={btnFn.openModal} />
      </SubMain>
      <PriceFooter isWish={isWish} setIsWish={setIsWish} />
      {isShow ? (
        <Overlay>
          <State btnFn={btnFn} />
        </Overlay>
      ) : null}
    </Layout>
  );
};

export default PostDetail;
