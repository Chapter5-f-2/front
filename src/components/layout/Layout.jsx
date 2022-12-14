import styled from "styled-components";

function Layout({ children, isDetail }) {
  return <Wrapper isDetail={isDetail}>{children}</Wrapper>;
}
export default Layout;

Layout.defaultProps = {
  isDetail: false,
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  // 425
  max-width: 390px;
  // 1000
  max-height: 844px;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-rows: ${(props) =>
    props.isDetail ? "1fr 60px" : "50px 1fr 60px"};
  @media (max-width: 400px) {
    /* grid-template-rows: ${(props) =>
      props.isDetail ? "1fr 90px" : "50px 1fr 90px"}; */
    max-height: 100vh;
  }
`;
