import React from "react";
import styled from "styled-components";
import { FlexColumnBox } from "../../shared/styles/flex";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { removePost } from "../../apis/query/postApi";

const UpdateModal = ({ btnFn, id }) => {
  const navigate = useNavigate();
  const { mutate: removePostFn } = useMutation(removePost);

  const onDeleteClick = () => {
    removePostFn(id);
    btnFn.closeUpdateModal();
  };

  const onUpdateClick = () => {
    navigate(`/posts/${id}/edit`);
    btnFn.closeUpdateModal();
  };

  return (
    <Wrapper
      variants={boxVariants}
      initial="initial"
      animate="visible"
      exit="leaving"
      transition={{ type: "tween" }}
    >
      <Buttons>
        <span onClick={onUpdateClick}>게시글 수정</span>
        <span onClick={() => btnFn.closeUpdateModal()}>끌어올리기</span>
        <span onClick={() => btnFn.closeUpdateModal()}>숨기기</span>
        <span onClick={onDeleteClick}>삭제</span>
      </Buttons>
      <Button onClick={() => btnFn.closeUpdateModal()}>취소</Button>
    </Wrapper>
  );
};

export default UpdateModal;
const boxVariants = {
  initial: {
    y: 200,
    opacity: 0.6,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  leaving: {
    y: 200,
    opacity: 0.6,
  },
};
const Wrapper = styled(motion.div)`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0.6rem;
`;
const Buttons = styled.div`
  background-color: #fcfcfc;
  border-radius: 10px;
  ${FlexColumnBox}
  width: 100%;
  color: #2a86ff;
  h3,
  span {
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
    cursor: pointer;
  }
  h3 {
    padding: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    font-size: 0.8rem;
  }
  span {
    &:hover {
      color: rgba(0, 0, 0, 0.8);
      background-color: #ffffff;
    }
  }
  span:last-child {
    color: red;
    &:hover {
      font-weight: 600;
    }
  }
`;

const Button = styled.button`
  margin-top: 0.8rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fcfcfc;
  cursor: pointer;
  width: 100%;
  color: #2a86ff;
  font-size: 1.1rem;
  font-weight: 500;
  &:hover {
    color: rgba(0, 0, 0, 0.8);
    background-color: #ffffff;
  }
`;
