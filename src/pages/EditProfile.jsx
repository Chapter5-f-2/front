import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { queryClient } from "..";
import { editLocation, readMe } from "../apis/query/userApi";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import LocationModal from "../components/modal/LocationModal";
import { showLocationAtom } from "../shared/atoms/modalAtoms";
import { FlexCenterBox } from "../shared/styles/flex";
import CameraSvg from "../static/svg/CameraSvg";
import Left from "../static/svg/Left";
import { useForm } from "react-hook-form";
import axios from "axios";
import instance from "../apis/instance/instance";

const EditProfile = () => {
  const baseURL = process.env.REACT_APP_SERVER_URL;
  const [change, setChange] = useState(true);
  const [showLocation, setShowLocation] = useRecoilState(showLocationAtom);
  const { data: user, isLoading } = useQuery(["mypage", "profile"], readMe);
  const { mutate: editLocationFn } = useMutation(editLocation, {
    onSuccess: () => queryClient.invalidateQueries(["maypage", "profile"]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  const onNick = async (data) => {
    
    try {
      const responce = await instance.put(`mypage/nickname`, data);
      if (responce.status === 200) {
        alert("닉네임이 수정되었습니다.");
        return;
      } else {
        alert("닉네임 수정에 실패하였습니다.");
        return;
      }
    } catch (e) {
      alert("닉네임 수정에 실패하였습니다.");
      return;
    }
  };

  const oldP = watch("oldPassword"); 
  const newP = watch("newPassword"); 
  const con = watch("confirm"); 

  const onPass = async () => {
    try {
      const data = {oldPassword:oldP,newPassword:newP,confirm:con};
      console.log(data);
      const responce = await instance.put(`mypage/password`, data );

      console.log(responce);
      if (responce.status === 200) {
        alert("비밀번호가 수정되었습니다.");
        return;
      } else {
        alert("비밀번호 수정에 실패하였습니다.");
        return;
      }
    } catch (e) {
      console.log(e);
      alert("비밀번호 수정에 실패하였습니다.");
      return;
    }
  };

  /* const onValid = async (data) => {
    const { nickname, oldPassword, newPassword, confirm } = data;
    if(nickname === nickname)
  }
 */
  /* const nicknameDup = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post("", {email}).then((res) => {
        if(res.data === true) {
          alert("이전 닉네임과 동일합니다.")
        } else {
          alert("사용 가능한 닉네임입니다.");
        }
      })
    } catch (e) {
      return console.log(e);
    }
  } */

  /* const passwordDup = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post("", {password}).then((res) => {
        if(res.data === true) {
          alert("이전 비밀번호와 동일합니다.")
        } else {
          alert("사용 가능한 비밀번호입니다.");
        }
      })
    } catch (e) {
      return console.log(e);
    }
  } */

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
          <UserInfoForm onSubmit={handleSubmit(onNick)}>
            <label>닉네임</label>
            <div>
              <input
                {...register("nickname", {
                  required: "변경할 닉네임을 10자 이내로 입력해주세요.",
                })}
                type="text"
                maxLength="10"
              />
              {watch("nickname") === "" ? (
                <button style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                  수정
                </button>
              ) : (
                <button style={{ backgroundColor: "#ff6f06" }}>수정</button>
              )}
            </div>
            <label>동네변경</label>
            <Location onClick={() => setShowLocation(true)}>
              <span>호평동</span>
              <Left />
            </Location>
          </UserInfoForm>
        ) : (
          <PasswordForm onSubmit={handleSubmit(onPass)}>
            <label>기존 비밀번호</label>
            <input
              {...register("oldPassword", {
                required: "현재 비밀번호를 입력해주세요.",
                })}
              type="password"
            />
            <span>{errors?.oldPassword?.message}</span>
            <label>새로운 비밀번호</label>
            <input
              {...register("newPassword", {
                required: "새로운 비밀번호를 입력해주세요",
                pattern: {
                  value:
                  /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                  message:
                    "최소 8자 최대 16자의 비밀번호를 입력해주세요",
                },
              })}
              type="password"
            />
            <span>{errors?.newPassword?.message}</span>
            <label>비밀번호 확인</label>
            <input
              {...register("confirm", {
                required: "비밀번호 확인을 입력해주세요.",
                pattern: {
                  value:
                  /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                  message:
                  "최소 8자 최대 16자의 비밀번호를 입력해주세요",
                },
              })}
              type="password"
            />
            <span>{errors?.confirm?.message}</span>
            {watch("oldPassword") === "" &&
            watch("newPassword") === "" &&
            watch("confirm") === "" ? (
              <button style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                비밀번호 수정
              </button>
            ) : (
              <button style={{ backgroundColor: "#ff6f06" }}>
                비밀번호 수정
              </button>
            )}
          </PasswordForm>
        )}
      </Wrapper>
      <AnimatePresence>
        {showLocation ? (
          <LocationModal setLocation={editLocationFn} type="profile" />
        ) : null}
      </AnimatePresence>
    </Layout>
  );
};
// aniamatepresence 55번째 줄 먹여야함

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
  border: 1px solid ${(props) => props.theme.borderColor.lightGray};
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
  span {
    margin-top: -10px;
    margin-bottom: 10px;
    color: #fb3131;
    font-size: 0.8rem;
  }
  button {
    width: 100%;
    padding: 0.7rem 1rem;
    color: ${(props) => props.theme.borderColor.gray};
    border-radius: 5px;
  }
  &:focus-within {
    button {
      color: white;
      border: none;
    }
  }
`;
