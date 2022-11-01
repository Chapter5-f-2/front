import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { readSalePosts } from "../apis/query/userApi";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import SubMain from "../components/layout/SubMain";
import SalesItem from "../components/mypage/SalesItem";
import SmallSpinner from "../static/svg/SmallSpinner";

const Sales = () => {
  const [focus, setFocus] = useState(true);
  const onClick = () => setFocus((prev) => !prev);
  const {
    data: sales,
    isLoading: salesLoading,
    error: salesError,
  } = useQuery(["mypage", "sales"], readSalePosts);

  const {
    data: endSales,
    isLoading: endSalesLoading,
    error: endSalesError,
  } = useQuery(["mypage", "endSales"]);

  return (
    <Layout isDetail={false}>
      <DetailHeader title={"판매내역"} />
      <Main {...mainStyle}>
        <Btns>
          <Btn focus={focus} onClick={!focus ? onClick : () => {}}>
            판매중 {sales?.length}
          </Btn>
          <Btn focus={!focus} onClick={focus ? onClick : () => {}}>
            거래완료 {endSales?.length}
          </Btn>
        </Btns>
        <SubMain>
          {(salesLoading || endSalesLoading) && <SmallSpinner />}
          {focus &&
            sales &&
            sales?.map((post) => (
              <SalesItem key={post.postId} focus={!focus} post={post} />
            ))}
          {!focus &&
            endSales &&
            endSales?.map((post) => (
              <SalesItem key={post.postId} focus={!focus} post={post} />
            ))}
        </SubMain>
      </Main>
      <Footer />
    </Layout>
  );
};

export default Sales;

const mainStyle = {
  _bgColor: "rgba(0,0,0,0.05)",
};

const Btns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const Btn = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: 2px solid
    ${(props) => (props.focus ? props.theme.btnColor.orange : "none")};
  margin-bottom: 0px;
  &:hover {
    font-weight: 500;
  }
`;

const Main = styled(SubMain)`
  padding-bottom: 0px;
`;
