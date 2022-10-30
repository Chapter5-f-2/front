import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  FlexAlignBox,
  FlexBetweenBox,
  FlexColumnBox,
} from "../../shared/styles/flex";

const ChatsItem = () => {
  const navigate = useNavigate();
  return (
    <UserContainer onClick={() => navigate("/chats/1")}>
      <div>
        <UserImage />
        <TextContainer>
          <div>
            <h3>나먕쥬 망나뇽</h3>
            <span>화도읍 </span>
            <span> · 1시간 전</span>
          </div>

          <LastChat>네 감사합니다!</LastChat>
        </TextContainer>
      </div>
      <PostImage />
    </UserContainer>
  );
};

export default ChatsItem;
const UserContainer = styled.div`
  ${FlexBetweenBox};
  padding: 0.8rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  width: 100%;
  & > div:first-child {
    display: flex;
  }
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;
const UserImage = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  aspect-ratio: 1/1;
  margin-right: 1rem;
  border-radius: 50%;
  cursor: pointer;
`;
const TextContainer = styled.div`
  ${FlexColumnBox};
  &:hover {
    h3 {
      font-weight: 600;
    }
    div {
      font-weight: 500;
    }
  }
  div {
    ${FlexAlignBox}
    h3 {
      margin-top: 0.3rem;
      margin-right: 0.3rem;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
    }
    span {
      margin-top: 2px;
      color:rgba(0,0,0,0.4);
      //color: ${(props) => props.theme.fontColor.lightGray};
      font-weight: 500;
      font-size: 0.8rem;
    }
  }
`;

const LastChat = styled.p`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.fontColor.gray};
`;
const PostImage = styled.div`
  width: 3.5rem;
  aspect-ratio: 1/1;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
