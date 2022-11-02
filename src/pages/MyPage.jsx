import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import Left from "../static/svg/Left";
import CarrotPay from "../static/img/CarrotPay.jpeg";
import { FlexAlignBox, FlexColumnBox } from "../shared/styles/flex";
import ListSvg from "../static/svg/ListSvg";
import ShopSvg from "../static/svg/ShopSvg";
import EmptyHeartSvg from "../static/svg/EmptyHeartSvg";
import CalculatorSvg from "../static/svg/CalculatorSvg";
import EditSvg from "../static/svg/EditSvg";
import MegaPhoneSvg from "../static/svg/MegaPhoneSvg";
import ArchiveSvg from "../static/svg/ArchiveSvg";
import LocationSvg from "../static/svg/LocationSvg";
import { TargetSvg } from "../static/svg/TargetSvg";
import MailSvg from "../static/svg/MailSvg";
import getLocation from "../utils/getLocation";
import { useQuery } from "react-query";
import { readMe } from "../apis/query/userApi";

const MyPage = () => {
  const navigate = useNavigate();
  const { data: user } = useQuery(["mypage", "me"], readMe);
  return (
    <Layout>
      <Header title={"나의 당근"} />
      <Main>
        <UserContainer>
          <div>
            <UserImage />
            <TextContainer>
              <h3>{user?.nickname}</h3>
              <div>
                <span>{getLocation(user?.locationId)}</span>
              </div>
            </TextContainer>
          </div>
          <div onClick={() => navigate(`/profiles/${user?.userId}/edit`)}>
            <Left />
          </div>
        </UserContainer>
        <CarrotPayBox>
          <img src={CarrotPay} alt="" />
          <span>중고거래는 이제 당근페이로 해보세요!</span>
        </CarrotPayBox>
        <MyDeal>
          <h3>나의 거래</h3>
          <NavList>
            <Link to={"/my-page/sales"}>
              <MyNav>
                <ListSvg _width={1.5} />
                <span>판매내역</span>
              </MyNav>
            </Link>
            <Link to={"/my-page/purchases"}>
              <MyNav>
                <ShopSvg _width={1.5} />
                <Purchase>구매내역</Purchase>
              </MyNav>
            </Link>
            <Link to={"/my-page/interests"}>
              <MyNav>
                <EmptyHeartSvg _width={1.5} />
                <span>관심목록</span>
              </MyNav>
            </Link>
            <Link to={"/my-page/account"}>
              <MyNav>
                <CalculatorSvg _width={1.5} />
                <span>당근가계부</span>
              </MyNav>
            </Link>
          </NavList>
        </MyDeal>
        <MyDongnae>
          <h3>나의 동네생활</h3>
          <NavList>
            <Link to="">
              <MyNav>
                <EditSvg _width={1.5} />
                <span>동네생활 글/댓글</span>
              </MyNav>
            </Link>
          </NavList>
        </MyDongnae>
        <MyBusiness>
          <h3>나의 비즈니스</h3>
          <NavList>
            <Link to="">
              <MyNav>
                <ArchiveSvg _width={1.5} />
                <span>비즈프로필 관리</span>
              </MyNav>
            </Link>
            <Link to="">
              <MyNav>
                <MegaPhoneSvg _width={1.5} />
                <span>광고</span>
              </MyNav>
            </Link>
          </NavList>
        </MyBusiness>
        <MyEtc>
          <h3>기타</h3>
          <NavList>
            <Link to="">
              <MyNav>
                <LocationSvg _width={1.5} />
                <span>내 동네 설정</span>
              </MyNav>
            </Link>
            <Link to="">
              <MyNav>
                <TargetSvg _width={1.5} />
                <span>동네 인증하기</span>
              </MyNav>
            </Link>
            <Link to="">
              <MyNav>
                <MailSvg _width={1.5} />
                <span>친구초대</span>
              </MyNav>
            </Link>
          </NavList>
        </MyEtc>
      </Main>
      <Footer />
    </Layout>
  );
};

export default MyPage;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  //border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  width: 100%;
  justify-content: space-between;
  div:first-child {
    display: flex;
  }
  div:last-child {
    cursor: pointer;
    &:hover {
      svg {
        color: ${(props) => props.theme.fontColor.lightGray};
      }
    }
    svg {
      width: 1.3rem;
      color: black;
      transform: scaleX(-1);
    }
  }
`;

const UserImage = styled.div`
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

const CarrotPayBox = styled.div`
  ${FlexAlignBox};
  justify-content: space-between;
  border: 2px dashed #fe7e35;
  padding: 0.2rem 1rem 0.2rem 0.3rem;
  border-radius: 5px;
  cursor: pointer;
  img {
    width: 5rem;
  }
  span {
    margin-top: 0.3rem;
    color: ${(props) => props.theme.fontColor.gray};
    font-size: 0.9rem;
  }
  &:hover {
    border-color: ${(props) => props.theme.fontColor.lightGray};
    span {
      color: #fe7e35;
      font-weight: 500;
    }
  }
`;

const MyDeal = styled.div`
  padding: 2rem 0 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  h3 {
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const NavList = styled.ul`
  ${FlexColumnBox};
  padding-top: 1rem;
`;

const MyNav = styled.li`
  ${FlexAlignBox};
  margin-bottom: 0.5rem;
  cursor: pointer;
  svg {
    width: 1.8rem;
    margin-right: 0.6rem;
  }
  &:hover {
    color: ${(props) => props.theme.fontColor.lightGray};
    span {
      font-weight: 500;
    }
  }
`;

const Purchase = styled.span`
  margin-top: 5px;
`;

const MyDongnae = styled(MyDeal)``;
const MyBusiness = styled(MyDeal)``;
const MyEtc = styled(MyDeal)``;
