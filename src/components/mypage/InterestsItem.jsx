import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexAlignBox, FlexColumnBox } from "../../shared/styles/flex";
import CommentSvg from "../../static/svg/CommentSvg";
import EmptyHeartSvg from "../../static/svg/EmptyHeartSvg";

const InterestsItem = ({ isProfile = false }) => {
  const navigate = useNavigate();
  return (
    <ItemWrapper isProfile={isProfile}>
      <Item onClick={() => navigate("/posts/1")}>
        <ImageContainer>
          <div />
        </ImageContainer>
        <InfoContainer>
          <TextContainer>
            <div>
              <h3>포켓몬 빵</h3>
              {isProfile ? null : <EmptyHeartSvg />}
            </div>
            <div>
              <span>화도읍</span>
              <span>· 1시간 전</span>
            </div>
            <strong>
              <StatusBtn>거래완료</StatusBtn> 3,000원
            </strong>
          </TextContainer>
          <SvgContainer>
            <span>
              <CommentSvg />3
            </span>
            <span>
              <EmptyHeartSvg />2
            </span>
          </SvgContainer>
        </InfoContainer>
      </Item>
    </ItemWrapper>
  );
};

export default InterestsItem;

const Item = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderColor.lightGray};
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  position: relative;
`;

const ImageContainer = styled.div`
  div {
    width: 5rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    aspect-ratio: 1/1;
  }
  margin-right: 1rem; ;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 5rem;
  ${FlexColumnBox};
`;

const TextContainer = styled.div`
  padding-top: 0.2rem;
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
    }
    svg {
      width: 1.5rem;
      color: ${(props) => props.theme.fontColor.lightGray};
      &:hover {
        color: ${(props) => props.theme.fontColor.black};
      }
    }
  }
  div:nth-child(2) {
    margin-bottom: 0.4rem;
    span {
      color: ${(props) => props.theme.fontColor.lightGray};
      font-size: 0.8rem;
    }
  }

  strong {
    ${FlexAlignBox}
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const StatusBtn = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.4rem 0.3rem;
  border-radius: 5px;
  color: white;
  margin-right: 0.5rem;
`;

const SvgContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  span {
    display: flex;
    align-items: center;
    margin-bottom: -1px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    svg {
      width: 1.2rem;
      margin-right: 0.2rem;
      margin-bottom: 1.6px;
      margin-left: 0.3rem;
    }
  }
`;

// 최상위 컴포넌트
const ItemWrapper = styled.div`
  margin-bottom: ${(props) => (props.isProfile ? "0rem" : "0.6rem")};
  &:last-child {
    margin-bottom: 0px;
  }
  &:hover {
    ${TextContainer} {
      font-weight: 600;
    }
    ${SvgContainer} {
      svg {
        color: ${(props) => props.theme.fontColor.gray};
      }
      span {
        color: ${(props) => props.theme.fontColor.gray};
      }
    }
  }
`;
