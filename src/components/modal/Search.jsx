import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { showSearch } from "../../shared/atoms/modalAtoms";
import { FlexCenterBox } from "../../shared/styles/flex";
import CancelSvg from "../../static/svg/CancelSvg";
import Magnify from "../../static/svg/Magnify";

const Search = () => {
  const setShowSearch = useSetRecoilState(showSearch);
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState();
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/posts?keyword=${keyword}`);
  };
  return (
    <Wrapper onSubmit={onSubmit}>
      <span onClick={() => setShowSearch(false)}>
        <CancelSvg />
      </span>
      <Magnify />
      <input type="text" onChange={onChange} />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled(motion.form)`
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  padding: 0 2rem;
  ${FlexCenterBox};
  & > svg {
    position: absolute;
    right: 5rem;
    width: 1.6rem;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  input {
    width: 80%;
    padding: 0.7rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  span {
    position: absolute;
    left: 1.2rem;
    cursor: pointer;
    ${FlexCenterBox}
    svg {
      width: 1.6rem;
    }
  }
  &:focus-within {
    svg {
      color: rgba(0, 0, 0, 0.7);
    }
    input {
      border: 1px solid ${(props) => props.theme.fontColor.orange};
    }
  }
`;
