import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexAlignBox, FlexColumnBox } from "../../shared/styles/flex";
import ChatSvg from "../../static/svg/ChatSvg";
import DongnaeSvg from "../../static/svg/DongnaeSvg";
import HomeSvg from "../../static/svg/HomeSvg";
import HumanSvg from "../../static/svg/HumanSvg";

function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Wrapper as="footer">
      <FooterContainer>
        <Item pathname={pathname === "/"} onClick={() => navigate("/")}>
          <HomeSvg />
          <span>홈</span>
        </Item>
        <Item pathname={pathname === "/dongnae"}>
          <DongnaeSvg />
          <span>동네생활</span>
        </Item>
        <Item
          pathname={pathname === "/chats"}
          onClick={() => navigate("/chats")}
        >
          <ChatSvg />
          <span>채팅</span>
        </Item>
        <Item
          pathname={pathname.includes("/my-page")}
          onClick={() => navigate("/my-page")}
        >
          <HumanSvg />
          <span>나의 당근</span>
        </Item>
      </FooterContainer>
    </Wrapper>
  );
}
export default Footer;

const Wrapper = styled.div`
  width: 100%;
  ${FlexAlignBox}
`;
const FooterContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const Item = styled.li`
  ${FlexColumnBox}
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.pathname ? "#212529" : "rgba(0,0,0,0.4)")};
  transition: color 0.2s linear;
  height: 100%;
  width: 100%;
  cursor: pointer;

  svg {
    width: 1.6rem;
    &:hover {
      color: "#212529";
    }
  }
  span {
    margin-top: 0.4rem;
    color: ${(props) => (props.pathname ? "#212529" : "rgba(0,0,0,0.4)")};
    font-weight: 500;
    font-size: 0.8rem;
    transition: color 0.2s linear;
  }
  &:hover {
    color: #212529;
    span {
      color: #212529;
    }
  }
`;
