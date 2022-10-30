import React from "react";
import styled from "styled-components";
import ChatBox from "../components/chat/ChatBox";
import ProductInfo from "../components/chat/ProductInfo";
import ChatFooter from "../components/footer/ChatFooter";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import SubMain from "../components/layout/SubMain";

const Chat = () => {
  const isUser = true;
  return (
    <Layout>
      <DetailHeader title={"나먕쥬 밀탱크"} />
      <SubMain>
        <ProductInfo />
        <Main>
          <Wrapper>
            <ChatBox isUser={false} />
            <ChatBox isUser={true} />
          </Wrapper>
        </Main>
      </SubMain>
      <ChatFooter />
    </Layout>
  );
};

export default Chat;

const Wrapper = styled.div`
  padding: 0.5rem 0;
  padding-top: 1rem;
`;
