import styled from "styled-components";
import Button from "../../elements/Button";
import Layout from "../layout/Layout";
import CarrotPng from "../../static/img/CarrotPng.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Start() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Wrapper>
        <Main
          variants={MainAni}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
        >
          <img src={CarrotPng} alt="" />
          <h3>당신 근처의 당근마켓</h3>
          <p>
            중고 거래부터 동네 정보까지,
            <br />
            지금 내 동네를 선택하고 시작해보세요!
          </p>
        </Main>
        <Buttons>
          <Button {...btnStyle} _onClick={() => navigate("/join")}>
            시작하기
          </Button>
          <span>
            이미 계정이 있나요?{" "}
            <strong onClick={() => navigate("/login")}>로그인</strong>
          </span>
        </Buttons>
      </Wrapper>
    </Layout>
  );
}

export default Start;

const MainAni = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const btnStyle = {
  _width: "100%",
  _bgColor: "#EF904D",
  _hoverBgColor: "#FF5501",
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled(motion.div)`
  display: flex;
  padding-top: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 6rem;
  }
  h3 {
    padding: 1rem 0;
    font-weight: 600;
    font-size: 1.1rem;
  }
  p {
    line-height: 1.4;
    text-align: center;
  }
  /* @media (max-width: 400px) {
    padding-top: 50%;
  } */
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 2rem;
    color: ${(props) => props.theme.fontColor.lightGray};
    font-weight: 400;
    strong {
      color: #ef904d;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.fontColor.darkOrange};
      }
    }
  }
`;
