import React from "react";
import Footer from "../components/footer/Footer";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import { CiPaperplane } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";

const Chat = () => {
  return (
    <Layout>
      <DetailHeader title={"나먕쥬 밀탱크"} />
      <Chatting>
        <ProductBox>
          <img />
          <label for="product">나먕쥬 불주먹의 장갑 판매합니다</label>
          <p id="product">20,000원</p>
        </ProductBox>
        <Line />
        <DisplayChat>
          <ul>
            <Received /* Received */>
              <span>
                <img /* avatar */ />
              </span>
              <span /* message */>안녕하세요</span>
              <span /* time */>오후 7:00</span>
            </Received>
            <Send /* sent */>
              <span /* message */>반갑습니다.</span>
              <span /* time */>오후 7:03</span>
            </Send>
          </ul>
        </DisplayChat>
        <Line />
        <Input>
          <span>
            <button>
              <AiOutlinePlus />
            </button>
            <input placeholder="메시지 보내기"></input>
            <button>
              <CiPaperplane />
            </button>
          </span>
        </Input>
      </Chatting>
      <Footer />
    </Layout>
  );
};

export default Chat;

const Chatting = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const ProductBox = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border: 1px solid black;
    border-radius: 10px;
  }

  label {
    margin-left: 0.5rem;
  }

  span {
  }
`;

const Line = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #e9ecef;
`;

const DisplayChat = styled.div`
  flex: 12;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Send = styled.li`
  width: 90%;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 0.5rem;
  flex-direction: row-reverse;
  float: right;

  span:nth-child(1) /* message */ {
    flex: 8;
    margin: 0 5px;
    padding: 0.5rem;
    font-size: 15px;
    background-color: ${(props) => props.theme.borderColor.lightGray};
    border-radius: 5px;
  }

  span:nth-child(2) /* time */ {
    margin: 0 5px;
    font-size: 13px;
  }
`;

const Received = styled.li`
  width: 90%;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 0.5rem;

  span:nth-child(1) /* avatar */ {
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border: 1px solid black;
      border-radius: 50%;
    }
  }

  span:nth-child(2) /* message */ {
    flex: 8;
    margin: 0 5px;
    padding: 0.5rem;
    font-size: 15px;
    background-color: ${(props) => props.theme.borderColor.lightGray};
    border-radius: 5px;
  }

  span:nth-child(3) /* time */ {
    margin: 0 5px;
    font-size: 13px;
  }
`;

const Input = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
  }

  input {
    flex: 8;
    height: 100%;
    margin: 5px;
    padding: 1rem;
    font-size: 13px;
    border-color: ${(props) => props.theme.borderColor.lightGray};
    border-radius: 25px;
    &:focus {
      border-color: ${(props) => props.theme.borderColor.gray};
    }
  }

  button:first-child {
    margin-left: -0.8rem;
    font-size: 25px;
  }

  button:last-child {
    margin-right: -0.5rem;
    font-size: 25px;
  }
`;
