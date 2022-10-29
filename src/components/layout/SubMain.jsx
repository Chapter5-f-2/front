import styled from "styled-components";

function SubMain({ children, _bgColor }) {
  return <Wrapper bgColor={_bgColor}>{children}</Wrapper>;
}

export default SubMain;

SubMain.defaultDefaultProps = {
  _bgColor: "white",
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
  background-color: ${(props) => props.bgColor};
  &::-webkit-scrollbar {
    width: 5px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: rgba(0, 0, 0, 0.2); /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: inherit;
  }
`;
