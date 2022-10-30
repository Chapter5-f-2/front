import React from "react";
import styled from "styled-components";
import { FlexCenterBox } from "../../shared/styles/flex";
import CancelSvg from "../../static/svg/CancelSvg";

const ImagePreview = () => {
  return (
    <ImgPreview>
      <span>
        <CancelSvg />
      </span>
      <div />
    </ImgPreview>
  );
};

export default ImagePreview;

const ImgPreview = styled.div`
  position: relative;
  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.8rem;
    background-color: ${(props) => props.theme.btnColor.darkGray};
    border-radius: 50%;
    cursor: pointer;
    aspect-ratio: 1/1;
    ${FlexCenterBox};
    svg {
      width: 1rem;
      color: white;
    }
    &:hover {
      background-color: ${(props) => props.theme.btnColor.black};
    }
  }
  div {
    width: 4rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    aspect-ratio: 1/1;
  }
`;
