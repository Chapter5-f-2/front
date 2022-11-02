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
import { useParams } from "react-router-dom";
import { readPost } from "../apis/query/postApi";
import { useQuery } from "react-query";

const PostDetail = () => {
  const [isShow, setIsShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { id } = useParams();
  const { data: post, isLoading } = useQuery(["posts", "detail"], () =>
    readPost(id)
  );

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
        <ItemDetail btnFn={btnFn} post={post} />
      </SubMain>
      <PriceFooter post={post} id={id} />
      <AnimatePresence>
        {isShow ? (
          <Overlay>
            <State btnFn={btnFn} id={id} />
          </Overlay>
        ) : null}

        {isUpdate ? (
          <Overlay>
            <UpdateModal btnFn={btnFn} id={id} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Layout>
  );
};

export default PostDetail;
