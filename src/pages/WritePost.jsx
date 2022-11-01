import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addPost } from "../apis/query/postApi";
import Footer from "../components/footer/Footer";
import ModalHeader from "../components/header/ModalHeader";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import PostCategory from "../components/modal/PostCategory";
import ImagePreview from "../components/posts/ImagePreview";
import { FlexBetweenBox, FlexCenterBox } from "../shared/styles/flex";
import CameraSvg from "../static/svg/CameraSvg";
import Left from "../static/svg/Left";
import getCategory from "../utils/getCategory";

const WritePost = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const { mutate } = useMutation(addPost);
  const formRef = useRef();
  const [preview, setPreview] = useState();
  const [file, setFile] = useState("");

  const onChangePreView = (e) => {
    const fileBlob = URL.createObjectURL(e.target.files[0]);
    setFile((prev) => e.target.files[0]);
    setPreview(fileBlob);
  };

  const onValid = (inputs) => {
    mutate({ ...inputs, categoryId, postImgUrl: file });
  };

  const handleClick = () => {
    formRef.current.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );
  };

  const onClick = () => {
    setPreview(null);
    setFile(null);
  };
  return (
    <Layout>
      <ModalHeader
        title={"중고 거래 글쓰기"}
        type="write"
        _onClick={handleClick}
      />
      <Main>
        <Form onSubmit={handleSubmit(onValid)} ref={formRef}>
          <ImgBoxs>
            <CameraBox>
              <CameraSvg />
              <span>{file ? 1 : 0}/1</span>
              <input onChange={onChangePreView} type="file" accept="*/image" />
            </CameraBox>
            <ImagePreview preview={preview} onClick={onClick} />
          </ImgBoxs>
          <TitleInput
            {...register("title", { required: true })}
            type="text"
            placeholder="글 제목"
          />
          <CategoryBox onClick={() => setIsShow(true)}>
            <span>{getCategory(categoryId)}</span>
            <span>
              <Left />
            </span>
          </CategoryBox>
          <PriceBox isFocus={watch().price}>
            <span>₩</span>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="가격 (선택사항)"
            />
          </PriceBox>
          <ContentBox
            {...register("content", { required: true })}
            placeholder="사이즈,구매 시기, 사용감 (색바램,얼룩, 뜯어짐) 등"
          />
        </Form>
      </Main>
      <Footer />
      {isShow ? (
        <PostCategory
          onClick={() => setIsShow((prev) => !prev)}
          setCategory={setCategoryId}
        />
      ) : null}
    </Layout>
  );
};

export default WritePost;

const Form = styled.form``;
const ImgBoxs = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  display: flex;
`;
const CameraBox = styled.label`
  ${FlexCenterBox}
  flex-direction: column;
  margin-right: 0.5rem;
  width: 4rem;
  border-radius: 5px;
  aspect-ratio: 1/1;
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor.gray};
  svg {
    width: 1.3rem;
  }
  span {
    margin-top: 0.3rem;
    color: ${(props) => props.theme.fontColor.lightGray};
    font-size: 0.9rem;
  }
  input {
    display: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.borderColor.gray};
    border: none;
    svg {
      color: white;
    }
    span {
      color: white;
    }
  }
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 1rem 0;
  border: none;
  font-size: 1.1rem;

  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const CategoryBox = styled.div`
  padding: 1rem 0;
  ${FlexBetweenBox};
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  cursor: pointer;
  svg {
    width: 1.4rem;
    transform: scaleX(-1);
  }
  &:hover {
    font-weight: 600;
  }
`;

const PriceBox = styled(CategoryBox)`
  justify-content: start;
  color: ${(props) =>
    props.isFocus ? props.theme.fontColor.black : "rgba(0, 0, 0, 0.3)"};
  span {
    margin-right: 0.5rem;
    font-size: 1.1rem;
  }
  input {
    font-size: 1.1rem;
    border: none;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
`;

const ContentBox = styled.textarea`
  padding: 1rem 0;
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  line-height: 1.2;
  resize: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 1rem;
  }
  font-family: "San Francisco", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
