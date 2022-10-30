import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import ModalHeader from "../components/header/ModalHeader";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import ImagePreview from "../components/posts/ImagePreview";
import { FlexBetweenBox, FlexCenterBox } from "../shared/styles/flex";
import CameraSvg from "../static/svg/CameraSvg";
import CancelSvg from "../static/svg/CancelSvg";
import Left from "../static/svg/Left";

const WritePost = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  return (
    <Layout>
      <ModalHeader
        title={"중고 거래 글쓰기"}
        type="write"
        _onClick={() => navigate("/posts/1")}
      />
      <Main>
        <Form>
          <ImgBoxs>
            <CameraBox>
              <CameraSvg />
              <span>0/3</span>
              <input type="file" />
            </CameraBox>
            <ImagePreview />
          </ImgBoxs>
          <TitleInput
            {...register("title")}
            type="text"
            placeholder="글 제목"
          />
          <CategoryBox>
            <span>카테고리 선택</span>
            <span>
              <Left />
            </span>
          </CategoryBox>
          <PriceBox isFocus={watch().price}>
            <span>₩</span>
            <input
              {...register("price")}
              type="number"
              placeholder="가격 (선택사항)"
            />
          </PriceBox>
          <ContentBox
            {...register("content")}
            placeholder="사이즈,구매 시기, 사용감 (색바램,얼룩, 뜯어짐) 등"
          />
        </Form>
      </Main>
      <Footer />
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
