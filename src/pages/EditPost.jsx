import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { queryClient } from "..";
import { editPost, readPost } from "../apis/query/postApi";
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

const EditPost = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [isShow, setIsShow] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const formRef = useRef();
  const navigate = useNavigate();
  const [preview, setPreview] = useState();
  const [file, setFile] = useState("");

  const { id } = useParams();

  const { data: post } = useQuery(["posts", "detail"], () => readPost(id));
  // file input이 변경될 때 변경 사항을 프리뷰로 보여주는 함수
  const onChangePreView = (e) => {
    const fileBlob = URL.createObjectURL(e.target.files[0]);
    setFile((prev) => e.target.files[0]);
    setPreview(fileBlob);
  };

  // 완료 버튼 클릭시 수정 요청을 하는 함수
  const onValid = async (inputs) => {
    if (categoryId === 0) return alert("카테고리를 선택해주세요");
    const body = {
      ...inputs,
      price: +inputs.price,
      categoryId,
      postImgUrl: file,
    };
    const response = await editPost({ id, body });
    console.log(response);
    if (response && response.ok) {
      return navigate(`/posts/${id}`);
    }
  };

  // 완료버튼을 눌렀을 때 form이 제출되게 하는 함수
  const handleClick = () => {
    formRef.current.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );
  };

  // 이미지를 삭제하는 함수
  const onClick = () => {
    setPreview(null);
    setFile(null);
  };

  // 마운트 되었을 때 post의 정보를 set 해주는 함수
  useEffect(() => {
    if (post && post.post) {
      setValue("title", post.post.title);
      setValue("price", post.post.price);
      setValue("content", post.post.content);
      setCategoryId(post.post.categoryId);
      setPreview(post.post.postImgUrl);
    }
  }, [post, setValue]);

  return (
    <Layout>
      <ModalHeader
        title={"중고거래 글 수정하기"}
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

export default EditPost;

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

const ImgPreview = styled.div`
  position: relative;
  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.8rem;
    background-color: ${(props) => props.theme.btnColor.darkGray};
    border-radius: 50%;
    cursor: pointer;
    aspect-ratio: 1/1;
    ${FlexCenterBox};
    svg {
      width: 1rem;
      color: white;
    }
    &:hover {
      background-color: ${(props) => props.theme.btnColor.black};
    }
  }
  div {
    width: 4rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    aspect-ratio: 1/1;
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
