import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Left from "../../static/svg/Left";

const ItemDetail = ({ setIsShow }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ImgContainer />
      <Container>
        <UserContainer>
          <UserImage onClick={() => navigate("/profiles/1")} />
          <TextContainer>
            <h3 onClick={() => navigate("/profiles/1")}>나먕쥬 망나뇽</h3>
            <div>
              <span>화도읍</span>
              <span> · 1시간 전</span>
            </div>
          </TextContainer>
        </UserContainer>
        <PostContainer>
          <StateBtn onClick={setIsShow}>
            판매중 <Left _width={2.5} />
          </StateBtn>
          <h3>포켓몬 빵 미개봉 상품 일괄 판매</h3>
          <PostDetailBox>
            <strong>기타 중고물품</strong>
            <span> · 13분전</span>
          </PostDetailBox>
          <PostContent>
            로켓단 11월 1일, 이상해씨 11월 2일 로켓단 11월 1일,
          </PostContent>
          <PostSub>
            <span>채팅 1 </span>
            <span> · 조회 12</span>
          </PostSub>
        </PostContainer>
      </Container>
    </Wrapper>
  );
};

export default ItemDetail;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 250px;
  background-color: rgba(0, 0, 0, 0.4);
  @media (max-width: 400px) {
    max-height: 50vh;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  display: flex;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  width: 100%;
`;

const UserImage = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  aspect-ratio: 1/1;
  margin-right: 1rem;
  border-radius: 50%;
  cursor: pointer;
`;

const TextContainer = styled.div`
  &:hover {
    h3 {
      font-weight: 600;
    }
    div {
      font-weight: 500;
    }
  }
  h3 {
    margin-top: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
  }
  div {
    margin-top: 0.5rem;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.9rem;
  }
`;

const PostContainer = styled.div`
  padding: 1rem 1rem 0rem 1rem;
  h3 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const StateBtn = styled.button`
  display: flex;
  padding: 0.5rem 0.7rem 0.4rem 0.7rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  margin-bottom: 1rem;
  svg {
    width: 1rem;
    margin-left: 0.7rem;
    transform: rotateZ(270deg);
  }
  &:hover {
    color: ${(props) => props.theme.fontColor.lightGray};
    border: 1px solid ${(props) => props.theme.fontColor.lightGray};
  }
`;

const PostDetailBox = styled.div`
  padding: 0.8rem 0 1.1rem 0;
  color: ${(props) => props.theme.fontColor.lightGray};
  font-size: 0.9rem;
  strong {
    border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  }
`;

const PostContent = styled.p`
  max-width: 100%;
  line-height: 1.3;
`;

const PostSub = styled.div`
  color: ${(props) => props.theme.fontColor.lightGray};
  font-size: 0.9rem;
  padding: 0.8rem 0;
`;

// 최상위 컴포넌트
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
