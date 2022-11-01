import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexColumnBox } from "../../shared/styles/flex";
import CommentSvg from "../../static/svg/CommentSvg";
import EmptyHeartSvg from "../../static/svg/EmptyHeartSvg";
import getLocation from "../../utils/getLocation";
import timeCheck from "../../utils/timeCheck";

const PostItem = ({ post }) => {
  const navigate = useNavigate();
  return (
    <Item onClick={() => navigate("/posts/1")}>
      <ImageContainer>
        <div />
      </ImageContainer>
      <InfoContainer>
        <TextContainer>
          <h3>{post.title}</h3>
          <div>
            <span>{getLocation(post.locationId)}</span>
            <span>· {timeCheck(post.createdAt)}</span>
          </div>
          <strong>{post.price}원</strong>
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
  );
};

export default PostItem;

const ImageContainer = styled.div`
  div {
    width: 5.5rem;
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
  padding-top: 0.3rem;
  h3 {
    font-size: 1rem;
  }
  div {
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.9rem;
  }
  strong {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.4);
    svg {
      width: 1.1rem;
      margin-right: 0.1rem;
      margin-left: 0.3rem;
    }
  }
`;

// 최상위 컴포넌트
const Item = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};

  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};

    ${SvgContainer} {
      svg {
        color: ${(props) => props.theme.fontColor.gray};
      }
      span {
        color: ${(props) => props.theme.fontColor.gray};
      }
    }
  }
`;
