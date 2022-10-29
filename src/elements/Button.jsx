import styled from "styled-components";
import { FlexCenterBox } from "../shared/styles/flex";

/** 만능버튼 */
function Button(props) {
  const {
    _width,
    children,
    _onClick,
    _padding,
    _bgColor,
    _color,
    _fontSize,
    _fontWeight,
    borderRadius,
    _hoverColor,
    _hoverBgColor,
    _flexDirection,
  } = props;

  const styles = {
    _width,
    _padding,
    _bgColor,
    _color,
    _fontSize,
    _fontWeight,
    borderRadius,
    _hoverColor,
    _hoverBgColor,
    _flexDirection,
  };
  return (
    <Btn {...styles} onClick={_onClick}>
      {children}
    </Btn>
  );
}

Button.defaultProps = {
  _onClick: () => {},
  _width: "5.5rem",
  _padding: "0.6rem",
  _bgColor: "#FE6F0F",
  _color: "#ffffff",
  _fontSize: "1rem",
  borderRadius: "8px",
  _fontWeight: "500",
  _hoverColor: "#ffffff",
  _hoverBgColor: "#ff5500",
  _flexDirection: "column-reverse;",
};

export default Button;

const Btn = styled.button`
  ${FlexCenterBox};
  width: ${(props) => props._width || "100%"};
  padding: ${(props) => props._padding};
  background-color: ${(props) => props._bgColor};
  font-size: ${(props) => props._fontSize};
  font-weight: ${(props) => props._fontWeight};
  color: ${(props) => props._color};
  border-radius: ${(props) => props.borderRadius};
  /* margin-left: ${(props) => props._marginLeft}; */
  &:hover {
    color: ${(props) => props._hoverColor};
    background-color: ${(props) => props._hoverBgColor};
  }
`;
