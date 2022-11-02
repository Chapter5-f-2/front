import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import FloatBtn from "../../elements/FloatBtn";
import {
  showCategoryAtom,
  showLocationAtom,
} from "../../shared/atoms/modalAtoms";
import Footer from "../footer/Footer";

import Header from "../header/Header";
import Layout from "../layout/Layout";
import SubMain from "../layout/SubMain";
import LocationModal from "../modal/LocationModal";
import PostCategory from "../modal/PostCategory";
import PostItem from "../posts/PostItem";
import { AnimatePresence } from "framer-motion";
import { useMutation, useQuery } from "react-query";
import { readLocationPosts } from "../../apis/query/postApi";
import { editLocation, readMe, readSalePosts } from "../../apis/query/userApi";
import { queryClient } from "../..";
import getLocation from "../../utils/getLocation";
function Posts() {
  const showCategory = useRecoilValue(showCategoryAtom);
  const [showLocation, setShowLocation] = useRecoilState(showLocationAtom);
  const { data: user } = useQuery(["mypage", "user"], readMe);

  const { data: posts, isLoading } = useQuery(
    ["posts", "locationList"],
    readLocationPosts
  );
  console.log(posts);
  const { mutate: editLocationFn } = useMutation(editLocation, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts", "locationList"]);
      queryClient.invalidateQueries(["mypage", "user"]);
    },
  });

  const setLocation = (num) => {
    editLocationFn(num);
  };

  return (
    <Layout>
      <Header
        title={getLocation(user?.locationId)}
        isHome={true}
        onClick={() => setShowLocation(true)}
      />
      <SubMain>
        <Wrapper>
          {posts &&
            posts.map((post, idx) => <PostItem key={idx} post={post} />)}
        </Wrapper>
      </SubMain>
      <FloatBtn />
      <Footer />
      <AnimatePresence>
        {showCategory ? <PostCategory type={"header"} /> : null}
        {showLocation ? (
          <LocationModal type={"header"} setLocation={setLocation} />
        ) : null}
      </AnimatePresence>
    </Layout>
  );
}

export default Posts;

const Wrapper = styled.div`
  position: relative;
`;
