import styled from "styled-components";
import ChatsItem from "../components/chat/ChatsItem";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";

import SubMain from "../components/layout/SubMain";
import SmallSpinner from "../static/svg/SmallSpinner";
import { AnimatePresence } from "framer-motion";


function Chats() {
  return (
    <Layout>
      <Header title={"채팅"} />
      <SubMain>
        <Wrapper>
          <AnimatePresence>
            {true ? <SmallSpinner></SmallSpinner> : null}
          </AnimatePresence>
          {[1, 2, 3].map((item, idx) => (
            <ChatsItem key={idx} />
          ))}
        </Wrapper>
      </SubMain>
      <Footer />
    </Layout>
  );
}

export default Chats;

const Wrapper = styled.div`
  position: relative;
`;
