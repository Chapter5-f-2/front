import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexColumnBox } from "../../shared/styles/flex";
import CommentSvg from "../../static/svg/CommentSvg";
import EmptyHeartSvg from "../../static/svg/EmptyHeartSvg";

const PostItem = () => {
  const navigate = useNavigate();
  return (
    <Item onClick={() => navigate("/posts/1")}>
      <ImageContainer>
        <div />
      </ImageContainer>
      <InfoContainer>
        <TextContainer>
          <h3>포켓몬빵</h3>
          <div>
            <span>화도읍</span>
            <span>· 1시간 전</span>
          </div>
          <strong>3,000원</strong>
        </TextContainer>
        <SvgContainer>
          <span>
            <CommentSvg />3
          </span>
          <span>
            <EmptyHeartSvg />2
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
    color: rgba(0, 0, 0, 0.5);
    svg {
      width: 1.4rem;
      margin-right: 0.1rem;
      margin-left: 0.3rem;
    }
  }
`;

// 최상위 컴포넌트
const Item = styled.div`
  padding: 1rem 0;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  cursor: pointer;
  &:hover {
    ${TextContainer} {
      font-weight: 600;
    }
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
