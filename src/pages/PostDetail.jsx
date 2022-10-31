import React, { useState } from "react";

import PriceFooter from "../components/footer/PriceFooter";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";

import SubMain from "../components/layout/SubMain";
import Overlay from "../components/modal/Overlay";
import State from "../components/modal/State";
import UpdateModal from "../components/modal/UpdateModal";
import ItemDetail from "../components/posts/ItemDetail";
import { AnimatePresence } from "framer-motion";
const PostDetail = () => {
  const [isShow, setIsShow] = useState(false);
  const [isWish, setIsWish] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const btnFn = {
    openModal: () => setIsShow(true),
    closeModal: () => setIsShow(false),
    setState: (num) => {},
    openUpdateModal: () => setIsUpdate(true),
    closeUpdateModal: () => setIsUpdate(false),
  };
  return (
    <Layout isDetail={true}>
      <SubMain>
        <DetailHeader
          title={"상품페이지"}
          isDetail={true}
          _onClick={btnFn.openUpdateModal}
        />
        <ItemDetail btnFn={btnFn} />
      </SubMain>
      <PriceFooter isWish={isWish} setIsWish={setIsWish} />
      <AnimatePresence>
        {isShow ? (
          <Overlay>
            <State btnFn={btnFn} />
          </Overlay>
        ) : null}

        {isUpdate ? (
          <Overlay>
            <UpdateModal btnFn={btnFn} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Layout>
  );
};

export default PostDetail;
