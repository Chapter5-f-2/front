import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { showCategoryAtom } from "../../shared/atoms/modalAtoms";
import { FlexColumnBox } from "../../shared/styles/flex";
import ModalHeader from "../header/ModalHeader";
import Layout from "../layout/Layout";
import Main from "../layout/Main";
import { motion } from "framer-motion";
const PostCategory = ({ onClick, setCategory, type = "" }) => {
  const setShowCategory = useSetRecoilState(showCategoryAtom);
  const navigate = useNavigate();
  const setCategoryId = (num) => {
    if (type === "header") {
      navigate(`/categories/${num}`);
      setShowCategory((prev) => !prev);
    } else {
      setCategory(num);
      onClick();
    }
  };
  return (
    <PostCategoryModal
      variants={ModalAni}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween", duration: 0.2 }}
    >
      <Layout>
        <ModalHeader
          title={"중고거래 카테고리"}
          type="modal"
          _onClick={
            type === "header" ? () => setShowCategory((prev) => !prev) : onClick
          }
        />
        <Main>
          <CategoryList>
            <CategoryItem onClick={() => setCategoryId(1)}>
              <div />
              <span>전자/가전제품</span>
            </CategoryItem>
            <CategoryItem onClick={() => setCategoryId(2)}>
              <div />
              <span>가구/인테리어</span>
            </CategoryItem>
            <CategoryItem onClick={() => setCategoryId(3)}>
              <div />
              <span>패션/잡화</span>
            </CategoryItem>
            <CategoryItem onClick={() => setCategoryId(4)}>
              <div />
              <span>삽니다</span>
            </CategoryItem>
          </CategoryList>
        </Main>
        <div />
      </Layout>
    </PostCategoryModal>
  );
};

export default PostCategory;

const ModalAni = {
  initial: { x: 450, opacity: 1 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 450, opacity: 1 },
};

const PostCategoryModal = styled(motion.div)`
  position: absolute;
  z-index: 100;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100%;
  align-content: center;
`;

const CategoryItem = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  ${FlexColumnBox};
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  border-radius: 5px;
  cursor: pointer;
  div {
    width: 2rem;
    height: 2rem;
    background-color: rgba(0, 0, 0, 0.4);
  }
  span {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
