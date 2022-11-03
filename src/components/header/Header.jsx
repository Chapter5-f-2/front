import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import UseUser from "../../hooks/useUser";

import { showCategoryAtom, showSearch } from "../../shared/atoms/modalAtoms";
import { removeCookieToken } from "../../shared/Cookie";
import { FlexAlignBox, FlexCenterBox } from "../../shared/styles/flex";
import BellSvg from "../../static/svg/BellSvg";
import BottomArrowSvg from "../../static/svg/BottomArrowSvg";
import ListSvg from "../../static/svg/ListSvg";
import LogoutSvg from "../../static/svg/LogoutSvg";
import Magnify from "../../static/svg/Magnify";

function Header({ title, isHome = false, onClick }) {
  const setShowCategory = useSetRecoilState(showCategoryAtom);
  const setIsSearch = useSetRecoilState(showSearch);
  const navigate = useNavigate();
  const user = UseUser();
  // useEffect(() => {
  //   if (!user) navigate("/login");
  // }, [user, navigate]);
  const logOut = () => {
    removeCookieToken();
    navigate("/");
    window.location.reload();
  };
  return (
    <Wrapper>
      <nav>
        <RightNavItem style={{ top: 3 }} onClick={onClick}>
          {title}
          {isHome ? <BottomArrowSvg /> : null}
        </RightNavItem>

        <LeftNavItem>
          <li onClick={() => setIsSearch(true)}>
            <Magnify />
          </li>
          {isHome ? (
            <li onClick={() => setShowCategory((prev) => !prev)}>
              <ListSvg />
            </li>
          ) : null}

          <li onClick={logOut}>
            <LogoutSvg _width={1.6} />
          </li>
        </LeftNavItem>
      </nav>
    </Wrapper>
  );
}
export default Header;

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 1rem;
  }
`;

const LeftNavItem = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
  li {
    ${FlexCenterBox};
    margin-left: 0.7rem;
    &:hover {
      color: ${(props) => props.theme.fontColor.lightGray};
    }
  }
  svg {
    width: 1.8rem;
  }
  li:first-child svg {
    width: 1.5rem;
  }
`;

const RightNavItem = styled.span`
  ${FlexAlignBox};
  position: relative;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s linear;
  &:hover {
    color: ${(props) => props.theme.fontColor.lightGray};
  }
  svg {
    width: 1.2rem;
    margin-top: -0.1rem;
    margin-left: 0.3rem;
  }
`;
