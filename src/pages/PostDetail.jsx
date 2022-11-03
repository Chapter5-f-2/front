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
import UseUser from "../hooks/useUser";
import { useRecoilValue } from "recoil";
import { showUsers } from "../shared/atoms/modalAtoms";

const PostDetail = () => {
  const [isShow, setIsShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  //const isShowUsers = useRecoilValue(showUsers);
  const { id } = useParams();
  const user = UseUser();

  const { data, isLoading } = useQuery(["posts", "detail"], () => readPost(id));

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
          isOwner={data?.post.userId === user?.userId}
        />
        <ItemDetail
          btnFn={btnFn}
          post={data && data.post}
          userId={user?.userId}
          id={id}
          otherPosts={data && data.otherPosts}
        />
      </SubMain>
      <PriceFooter
        post={data && data.post}
        isWish={data && data.isWish}
        id={id}
      />
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
        {/* //{isShowUsers ? }  */}
      </AnimatePresence>
    </Layout>
  );
};

export default PostDetail;
