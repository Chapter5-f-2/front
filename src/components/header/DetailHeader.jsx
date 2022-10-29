import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeSvg from "../../static/svg/HomeSvg";

import Left from "../../static/svg/Left";

function DetailHeader({ isDetail, title, _onClick, type }) {
  const navigate = useNavigate();
  return (
    <Wrapper isDetail={isDetail}>
      <nav>
        <RightNavItem style={{ top: 3 }} isDetail={isDetail}>
          <span onClick={() => navigate(-1)}>
            <Left />
          </span>
          {isDetail ? (
            <span>
              <HomeSvg _width={2} />
            </span>
          ) : null}
        </RightNavItem>
        <LeftNavItem>
          {type === "write" ? <span onClick={_onClick}>완료</span> : null}
        </LeftNavItem>
        {isDetail ? null : <Title>{title}</Title>}
      </nav>
    </Wrapper>
  );
}
export default DetailHeader;

DetailHeader.defaultProps = {
  _onClick: () => {},
  isDetail: false,
  title: "",
  type: "",
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  align-items: center;
  border-bottom: 1px solid
    ${(props) => (props.isDetail ? "none" : props.theme.borderColor.lightGray)};
  position: ${(props) => (props.isDetail ? "absolute" : "relative")};
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 1rem;
  }
`;
const RightNavItem = styled.div`
  position: relative;
  height: 100%;
  font-weight: 600;
  font-size: 1.3rem;
  z-index: 1;
  transition: color 0.2s linear;
  span {
    color: ${(props) => (props.isDetail ? "rgba(255,255,255,0.7)" : "inherit")};
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
  svg {
    position: relative;
    top: 10px;
    width: 1.6rem;
    margin-right: 0.5rem;
  }
  svg:nth-child(2) {
    margin-left: 1rem;
  }
`;

const LeftNavItem = styled.ul`
  z-index: 1;
  transition: color 0.2s linear;
  span {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.fontColor.lightGray};
    }
  }
`;

const Title = styled.div`
  position: absolute;
  left: 0;
  top: 16px;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 1.4rem;
`;
