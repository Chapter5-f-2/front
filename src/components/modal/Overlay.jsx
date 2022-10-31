import React from "react";
import styled from "styled-components";

const Overlay = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Overlay;

const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;
