import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ChatBox = ({ isUser }) => {
  const navigate = useNavigate();
  return (
    <ChatContainer isUser={isUser}>
      {isUser ? <div /> : <UserImg onClick={() => navigate("/profiles/1")} />}
      <Comment isUser={isUser}>
        {isUser ? (
          <div>
            <strong>1</strong>
            <span>오후 11:33</span>
          </div>
        ) : null}
        <p>답장해주세요 </p>
        {!isUser ? <span>오후 11:33</span> : null}
      </Comment>
    </ChatContainer>
  );
};

export default ChatBox;

const ChatContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) => (props.isUser ? "46px 1fr" : "46px 1fr")};

  margin-bottom: 0.7rem;
  justify-items: ${(props) => (props.isUser ? "flex-end" : "start")};
`;

const UserImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  justify-self: center;
  cursor: pointer;
`;

const Comment = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "start")};
  p {
    // 이거 고정값 수정해야함
    padding: 0.7rem 1rem;
    line-height: 1.25;
    max-width:80%;
    background-color: ${(props) =>
      props.isUser ? props.theme.btnColor.orange : props.theme.chatColor};
    border-radius: 15px;
    color: ${(props) => (props.isUser ? "white" : props.theme.fontColor.black)};

  }
  span,strong{
    margin-left: ${(props) => (props.isUser ? "0" : "0.3rem")};
    margin-right: ${(props) => (props.isUser ? "0.3rem" : "0rem")};
    font-size:0.8rem;
    align-self:flex-end;
    padding-bottom:0.2rem;
    color:${(props) => props.theme.fontColor.lightGray};
  }
  
  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    strong{
      color:${(props) => props.theme.fontColor.orange};
      font-weight: 500;
    }
  }
`;
