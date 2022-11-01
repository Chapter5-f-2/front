import React, { useState } from "react";
import styled from "styled-components";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import { FlexCenterBox } from "../shared/styles/flex";
import CameraSvg from "../static/svg/CameraSvg";
import Left from "../static/svg/Left";

const EditProfile = () => {
  const [change, setChange] = useState(true);
  return (
    <Layout>
      <DetailHeader title={"프로필 수정"} />
      <Wrapper>
        <ImgContainer>
          <div />
          <span>
            <CameraSvg />
          </span>
        </ImgContainer>
        <Switch>
          <button onClick={() => setChange(true)}>기본 정보 변경</button>
          <button onClick={() => setChange(false)}>비밀번호 변경</button>
        </Switch>
        {change ? (
          <UserInfoForm>
            <label>닉네임</label>
            <div>
              <input type="text" />
              <button>수정</button>
            </div>
            <label>동네변경</label>
            <Location>
              <span>호평동</span>
              <Left />
            </Location>
          </UserInfoForm>
        ) : (
          <PasswordForm>
            <label>기존 비밀번호</label>
            <input type="password" />
            <label>새로운 비밀번호</label>
            <input type="password" />
            <label>비밀번호 확인</label>
            <input type="password" />
            <button>비밀번호 수정</button>
          </PasswordForm>
        )}
      </Wrapper>
    </Layout>
  );
};

export default EditProfile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  padding: 20% 10% 0 10%;
`;
const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  div {
    width: 8rem;
    height: 8rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
  span {
    position: absolute;
    right: 33%;
    bottom: 0;
    height: 2.8rem;
    background-color: ${(props) => (props) => props.theme.btnColor.orange};
    border-radius: 50%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    ${FlexCenterBox}
    width: 2.8rem;
    svg {
      width: 1.5rem;
      color: white;
    }
    &:hover {
      background-color: ${(props) => (props) =>
        props.theme.btnColor.darkOrange};
    }
  }
`;

const Switch = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  button {
    width: 9rem;
    height: 2.4rem;
    margin: 0 1rem;
    color: ${(props) => props.theme.fontColor.black};
    border: 1px solid ${(props) => props.theme.borderColor.lightGray};
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme.borderColor.lightGray};
    }
  }
`;
const UserInfoForm = styled.form`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
  }
  div {
    position: relative;
    display: flex;
    width: 100%;
    margin-bottom: 1.3rem;

    border-radius: 5px;

    input {
      width: 100%;
      padding: 0.7rem 1rem;
      color: ${(props) => props.theme.fontColor.black};
      font-size: 1.1rem;
      border: none;
      border: 1px solid ${(props) => props.theme.borderColor.lightGray};
      border-radius: 5px 0px 0px 5px;
      &:focus-within {
        border: 1px solid ${(props) => props.theme.fontColor.orange};
      }
    }
    button {
      width: 5rem;
      color: white;
      background-color: ${(props) => props.theme.btnColor.orange};
      border-radius: 0px 3px 3px 0px;

      &:hover {
        background-color: ${(props) => props.theme.btnColor.darkOrange};
      }
    }
    span {
      padding: 1rem 1rem;
    }
  }
  svg {
    position: absolute;
    right: 1rem;
    bottom: 0.7rem;
    width: 1.5rem;
    transform: rotateZ(270deg);
  }
`;

const Location = styled.div`
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    svg {
      color: white;
    }
  }
`;

const PasswordForm = styled.form`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
  }
  input {
    width: 100%;
    margin-bottom: 1.3rem;
    padding: 0.7rem 1rem;
    color: ${(props) => props.theme.fontColor.black};
    font-size: 1.1rem;

    border: 1px solid ${(props) => props.theme.borderColor.lightGray};
    border-radius: 5px;
    &:focus {
      border: 1px solid ${(props) => props.theme.fontColor.orange};
    }
  }
  button {
    width: 100%;
    padding: 0.7rem 1rem;
    color: ${(props) => props.theme.borderColor.gray};
    border: 1px solid ${(props) => props.theme.borderColor.lightGray};
    border-radius: 5px;
  }
  &:focus-within {
    button {
      color: white;
      background-color: ${(props) => props.theme.fontColor.orange};
      border: none;
    }
  }
`;
