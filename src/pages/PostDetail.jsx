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

const PostDetail = ({ post }) => {
  const [isShow, setIsShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { id } = useParams();
  // const { data, isLoading } = useQuery(["posts", "detail"], () => readPost(id));

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

PostDetail.defaultProps = {
  post: {
    postId: 1,
    userId: 1,
    nickname: "나먕쥬 밀탱크",
    categoryId: 1,
    locationId: 1,
    title: "제목",
    content: "내용",
    postImgUrl: "imgUrl.png",
    price: 12000,
    status: 0,
    wishCount: 3,
    chatCount: 5,
    isWish: true,
    otherPosts: [
      {
        postId: 2,
        title: "제목",
        postImgUrl: "imgUrl.png",
        price: 10000,
      },
    ],
    createdAt: 1667289735209,
    updatedAt: 162839182,
  },
};
