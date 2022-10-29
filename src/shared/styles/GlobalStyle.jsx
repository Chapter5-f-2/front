import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { FlexCenterBox } from "./flex";
function GlobalStyle() {
  return <GlobalStyled />;
}

export default GlobalStyle;

const GlobalStyled = createGlobalStyle`
  ${reset};
  @font-face {
  font-family: "San Francisco";
  font-weight: 100;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff");
}

/** Thin */
@font-face {
  font-family: "San Francisco";
  font-weight: 200;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff");
}

/** Regular */
@font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}

/** Medium */
@font-face {
  font-family: "San Francisco";
  font-weight: 500;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff");
}

/** Semi Bold */
@font-face {
  font-family: "San Francisco";
  font-weight: 600;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff");
}

/** Bold */ 
@font-face {
  font-family: "San Francisco";
  font-weight: 700;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff");
}
  button{
  border:none;
  background-color: inherit;
  cursor: pointer;
  outline: none;
}

html{
  font-size: 15px;
}

body{
  background-color: #FAF7F2;
  ${FlexCenterBox};
  height:100vh;
  color:${(props) => props.theme.fontColor.black}
}

*{
  box-sizing: border-box;
  transition: background-color 0.2s linear;
 
}
input{
  outline: none;
}
textarea{
  outline: none;
  border: none;
}
a{
  color:inherit;
  text-decoration: none;
  transition: color 0.2s linear;
}
li{
  transition: color 0.2s linear;
}
`;
