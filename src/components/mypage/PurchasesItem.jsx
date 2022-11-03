import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DotSvg from "../../pages/DotSvg";
import { FlexAlignBox, FlexColumnBox } from "../../shared/styles/flex";
import CommentSvg from "../../static/svg/CommentSvg";
import EmptyHeartSvg from "../../static/svg/EmptyHeartSvg";
import getLocation from "../../utils/getLocation";
import priceCheck from "../../utils/priceCheck";
import timeCheck from "../../utils/timeCheck";

const PurChasesItem = ({ focus, post }) => {
  const navigate = useNavigate();
  return (
    <ItemWrapper>
      <Item onClick={() => navigate(`/posts/${post.postId}`)}>
        <ImageContainer>
          <img src={post?.postImgUrl} alt="" />
        </ImageContainer>
        <InfoContainer>
          <TextContainer>
            <div>
              <h3>{post.title}</h3>
            </div>
            <div>
              <span>{getLocation(post.locationId)}</span>
              <span>· {timeCheck(+post.createdAt)}</span>
            </div>
            <strong>
              <StatusBtn>거래완료</StatusBtn> {post && priceCheck(post.price)}원
            </strong>
          </TextContainer>
          <SvgContainer>
            <span>
              <CommentSvg _width={1.5} />
              {post.chatCount}
            </span>
            <span>
              <EmptyHeartSvg _width={1.5} />
              {post.wishCount}
            </span>
          </SvgContainer>
        </InfoContainer>
      </Item>
      <Btns focus={focus}>
        <button>보낸 후기 보기</button>
      </Btns>
      <BtnSvg>
        <DotSvg />
      </BtnSvg>
    </ItemWrapper>
  );
};

export default PurChasesItem;

const Item = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

const ImageContainer = styled.div`
  img {
    width: 5rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    aspect-ratio: 1/1;
  }
  margin-right: 1rem; ;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 5rem;
  ${FlexColumnBox};
`;

const TextContainer = styled.div`
  padding-top: 0.2rem;
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      margin-top: 0.2rem;
      font-size: 1rem;
    }
  }
  div:nth-child(2) {
    margin-bottom: 0.4rem;
    span {
      color: ${(props) => props.theme.fontColor.lightGray};
      font-size: 0.8rem;
    }
  }

  strong {
    ${FlexAlignBox}
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const Btns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 1px;
  button {
    width: 100%;
    padding: 0.8rem 0;
    color: ${(props) =>
      props.focus ? props.theme.fontColor.orange : "inherit"};
    font-weight: 600;
    background-color: ${(props) => props.theme.bgColor};
    &:hover {
      color: white;
      font-weight: 500;
      background-color: ${(props) =>
        props.focus
          ? props.theme.btnColor.darkOrange
          : props.theme.btnColor.orange};
    }
  }
`;

const StatusBtn = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.4rem 0.3rem;
  border-radius: 5px;
  color: white;
  margin-right: 0.5rem;
`;

const SvgContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 3.4rem;
  right: 1.2rem;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.8rem;
    svg {
      width: 1.3rem;
      margin-right: 0.1rem;
      margin-left: 0.3rem;
    }
  }
`;

const BtnSvg = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.2rem;
  width: 2.5rem;
  height: 2.5rem;
  color: ${(props) => props.theme.fontColor.black};
  &:hover {
    color: ${(props) => props.theme.fontColor.lightGray};
  }
`;

const ItemWrapper = styled.div`
  margin-bottom: 0.6rem;
  position: relative;
  &:last-child {
    margin-bottom: 0px;
  }
`;
