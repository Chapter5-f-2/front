import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import FloatBtn from "../../elements/FloatBtn";
import {
  showCategoryAtom,
  showLocationAtom,
  showSearch,
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
import { editLocation, readMe } from "../../apis/query/userApi";
import { queryClient } from "../..";
import getLocation from "../../utils/getLocation";
import Search from "../modal/Search";

function Posts() {
  const showCategory = useRecoilValue(showCategoryAtom);
  const [showLocation, setShowLocation] = useRecoilState(showLocationAtom);
  const isSearch = useRecoilValue(showSearch);
  const { data: user } = useQuery(["mypage", "user"], readMe);
  const { data: posts, isLoading } = useQuery(
    ["posts", "locationList"],
    readLocationPosts
  );

  const { mutate: editLocationFn } = useMutation(editLocation, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts", "locationList"]);
      queryClient.invalidateQueries(["mypage", "user"]);
    },
  });

  const setLocation = (num) => {
    editLocationFn({ locationId: num });
  };

  // keyword별 불러오기

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
        {isSearch ? <Search /> : null}
      </AnimatePresence>
    </Layout>
  );
}

export default Posts;

const Wrapper = styled.div`
  position: relative;
`;
