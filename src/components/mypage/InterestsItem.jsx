import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { queryClient } from "../..";
import { toggleWish } from "../../apis/query/postApi";
import { FlexAlignBox, FlexColumnBox } from "../../shared/styles/flex";
import CommentSvg from "../../static/svg/CommentSvg";
import EmptyHeartSvg from "../../static/svg/EmptyHeartSvg";
import HeartSvg from "../../static/svg/HeartSvg";
import getLocation from "../../utils/getLocation";
import timeCheck from "../../utils/timeCheck";

const InterestsItem = ({ isProfile = false, post }) => {
  const navigate = useNavigate();
  const { mutate } = useMutation(toggleWish, {
    onSuccess: () => queryClient.invalidateQueries(["mypage", "interests"]),
  });
  // toggleWish 하트에 연결 시켜야함

  const clickToggleWish = () => {
    console.log("hello");
    mutate(post.postId);
  };
  return (
    <ItemWrapper isProfile={isProfile}>
      <Item onClick={() => navigate(`/posts/${post.postId}`)}>
        <ImageContainer>
          <img src={post.postImgUrl} alt="" />
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
              <StatusBtn>거래완료</StatusBtn> {post.price}원
            </strong>
          </TextContainer>
          <SvgContainer>
            <span>
              <CommentSvg />
              {post.chatCount}
            </span>
            <span>
              <EmptyHeartSvg />
              {post.wishCount}
            </span>
          </SvgContainer>
        </InfoContainer>
      </Item>
      <BtnSvg onClick={isProfile ? () => {} : clickToggleWish}>
        {isProfile ? null : <HeartSvg />}
      </BtnSvg>
    </ItemWrapper>
  );
};

export default InterestsItem;

const Item = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  position: relative;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

const ImageContainer = styled.div`
  div {
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
  bottom: 1rem;
  right: 1rem;
  span {
    display: flex;
    align-items: center;
    margin-bottom: -1px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    svg {
      width: 1.2rem;
      margin-right: 0.2rem;
      margin-bottom: 1.6px;
      margin-left: 0.3rem;
    }
  }
`;

const BtnSvg = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.3rem;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 2;

  svg {
    width: 1.5rem;
    color: ${(props) => props.theme.btnColor.orange};
  }
  &:hover {
    color: ${(props) => props.theme.fontColor.lightGray};
  }
`;
// 최상위 컴포넌트
const ItemWrapper = styled.div`
  position: relative;
  margin-bottom: ${(props) => (props.isProfile ? "0rem" : "0rem")};
  // 0.6rem
  &:last-child {
    margin-bottom: 0px;
  }
  &:hover {
    ${BtnSvg} {
      svg {
        color: ${(props) => props.theme.btnColor.darkOrange};
      }
    }
  }
  ${BtnSvg} {
    &:hover {
      svg {
        color: #fb5e50;
      }
    }
  }
`;

// 최상위 컴포넌트
