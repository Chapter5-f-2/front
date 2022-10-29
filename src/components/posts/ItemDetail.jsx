import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ItemDetail = () => {
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
          <h3>포켓몬 빵 미개봉 상품 일괄 판매</h3>
          <PostDetailBox>
            <strong>기타 중고물품</strong>
            <span>· 13분전</span>
          </PostDetailBox>
          <PostContent>
            로켓단 11월 1일, 이상해씨 11월 2일, dsanjd sdj로켓단 11월 1일,
            이상해씨 11월 2일, dsanjd sdj 로켓단 11월 1일, 이상해씨 11월 2일,
            dsanjd sdj 로켓단 11월 1일, 이상해씨 11월 2일, dsanjd sdj 로켓단
            11월 1일, 이상해씨 11월 2일, dsanjd sdj
          </PostContent>
          <PostSub>
            <span>채팅 1</span>
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
  aspect-ratio: 1/1;
  max-height: 250px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  display: flex;
  padding: 0.8rem 0;
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
  h3 {
    margin-top: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
  div {
    margin-top: 0.5rem;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.9rem;
  }
`;

const PostContainer = styled.div`
  padding-top: 1rem;
  h3 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const PostDetailBox = styled.div`
  padding: 0.8rem 0;
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
  padding-top: 1rem;
  width: 100%;
  height: 100%;
`;
