import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexAlignBox, FlexCenterBox } from "../../shared/styles/flex";
import PaperSvg from "../../static/svg/PaperSvg";
import PlusSvg from "../../static/svg/PlusSvg";

const ChatFooter = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <FooterContainer>
        <span>
          <PlusSvg />
        </span>
        <div>
          <input type="text" placeholder="메시지 보내기" />
        </div>
        <span>
          <PaperSvg />
        </span>
      </FooterContainer>
    </Wrapper>
  );
};

export default ChatFooter;

ChatFooter.defaultProps = {
  _onClick: () => {},
};

const Wrapper = styled.div`
  width: 100%;
  ${FlexAlignBox}
  background-color: ${(props) => props.theme.bgColor};
  /* @media (max-width: 400px) {
    padding-bottom: 20px;
  } */
`;

const FooterContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 45px 1fr 45px;
  span {
    ${FlexCenterBox};
    cursor: pointer;
    svg {
      width: 2rem;
      color: rgba(0, 0, 0, 0.35);
    }
    &:hover {
      svg {
        color: ${(props) => props.theme.fontColor.black};
      }
    }
  }
  span:last-child {
    svg {
      width: 1.4rem;
    }
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    background-color: ${(props) => props.theme.chatColor};
    border: none;
    border-radius: 15px;
    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;
