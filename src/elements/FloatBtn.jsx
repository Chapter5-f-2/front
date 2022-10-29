import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexCenterBox } from "../shared/styles/flex";
import PlusSvg from "../static/svg/PlusSvg";

function FloatBtn() {
  const navigate = useNavigate();
  return (
    <FloatCircle onClick={() => navigate("/posts/write")}>
      <PlusSvg />
    </FloatCircle>
  );
}

export default FloatBtn;

const FloatCircle = styled.div`
  ${FlexCenterBox};
  position: absolute;
  bottom: 5.5rem;
  right: 1.7rem;
  width: 3.3rem;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.btnColor.orange};
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  svg {
    width: 2.4rem;
    color: white;
  }
  &:hover {
    background-color: #ff5500;
  }
`;
