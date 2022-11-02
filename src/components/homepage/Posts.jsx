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
import { useQuery } from "react-query";
import { readLocationPosts } from "../../apis/query/postApi";
import { readSalePosts } from "../../apis/query/userApi";
function Posts() {
  const showCategory = useRecoilValue(showCategoryAtom);
  const [showLocation, setShowLocation] = useRecoilState(showLocationAtom);
  const [location, setLocation] = useState(null);
  const { data, isLoading } = useQuery(
    ["posts", "locationList"],
    readLocationPosts
  );

  return (
    <Layout>
      <Header
        title={"호평동"}
        isHome={true}
        onClick={() => setShowLocation(true)}
      />
      <SubMain>
        <Wrapper>
          {[1, 2, 3, 4, 5, 6, 7].map((post, idx) => (
            <PostItem key={idx} post={post} />
          ))}
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
