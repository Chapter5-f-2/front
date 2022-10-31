import React from "react";
import styled from "styled-components";
import { FlexColumnBox } from "../../shared/styles/flex";
import ModalHeader from "../header/ModalHeader";
import Layout from "../layout/Layout";
import Main from "../layout/Main";

const PostCategory = ({ onClick, setCategory }) => {
  const setCategoryId = (num) => {
    setCategory(num);
    onClick();
  };
  return (
    <PostCategoryModal>
      <Layout>
        <ModalHeader
          title={"중고거래 카테고리"}
          type="modal"
          _onClick={onClick}
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

const PostCategoryModal = styled.div`
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
