import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { readMe } from "../apis/query/userApi";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";

import SubMain from "../components/layout/SubMain";
import InterestsItem from "../components/mypage/InterestsItem";

const Profile = () => {
  return (
    <Layout>
      <DetailHeader title={"밀탱크님의 프로필"} />
      <SubMain>
        <UserContainer>
          <div>
            <UserImage />
            <TextContainer>
              <h3>나먕쥬 밀탱크</h3>
              <div>
                <span>화도읍</span>
              </div>
            </TextContainer>
          </div>
        </UserContainer>
        <Btns>
          <Btn>
            <strong>밀탱크</strong>님의 판매 상품
          </Btn>
        </Btns>
        <SubMain>
          {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
            <InterestsItem key={idx} isProfile={true} />
          ))}
        </SubMain>
        <Footer />
      </SubMain>
    </Layout>
  );
};

export default Profile;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;

  width: 100%;
  justify-content: space-between;
  div:first-child {
    display: flex;
  }
`;

const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  aspect-ratio: 1/1;
  margin-right: 1rem;
  border-radius: 50%; ;
`;

const TextContainer = styled.div`
  cursor: pointer;
  h3 {
    margin-top: 0.3rem;
    font-weight: 600;
    font-size: 1rem;
  }
  div {
    margin-top: 0.5rem;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    font-size: 0.8rem;
  }
`;

const Btns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  border-top: 1px solid ${(props) => props.theme.borderColor.lightGray};
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
`;

const Btn = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: 2px solid
    ${(props) => (props.focus ? props.theme.btnColor.orange : "none")};
  margin-bottom: 0px;
  font-size: 1rem;
  strong {
    font-weight: 500;
    font-size: 1.1rem;
  }
  &:hover {
    font-weight: 500;
  }
`;
