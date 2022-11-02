import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { queryClient } from "..";
import { editAvatar, editLocation, readMe } from "../apis/query/userApi";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import LocationModal from "../components/modal/LocationModal";
import { showLocationAtom } from "../shared/atoms/modalAtoms";
import { FlexCenterBox } from "../shared/styles/flex";
import CameraSvg from "../static/svg/CameraSvg";
import Left from "../static/svg/Left";
import { useForm } from "react-hook-form";
import instance from "../apis/instance/instance";
import getLocation from "../utils/getLocation";

const EditProfile = () => {
  const [change, setChange] = useState(true);
  const [showLocation, setShowLocation] = useRecoilState(showLocationAtom);
  const [imgPreview, setImgPreview] = useState("");
  const { data: user } = useQuery(["mypage", "profile"], readMe);
  const { mutate: editLocationFn } = useMutation(editLocation, {
    onSuccess: () => queryClient.invalidateQueries(["mypage", "profile"]),
  });
  const { mutate: editAvatarFn } = useMutation(editAvatar, {
    onSuccess: () => queryClient.invalidateQueries(["mypage", "profile"]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  // 마운트 되었을 때 nickname과 profileImage를 set하는 기능
  useEffect(() => {
    if (user) {
      setValue("nickname", user.nickname);
      setImgPreview(user.profileImage);
    }
  }, [user, setValue]);

  // 이미지가 수정되었을 때 서버에 프로필 수정 요청을 보내는 함수
  const onEditProfile = async (e) => {
    const fileBlob = URL.createObjectURL(e.target.files[0]);
    editAvatarFn({ profileImage: e.target.files[0] });
    setImgPreview(fileBlob);
  };

  // 닉네임 수정버튼 클릭시 발생하는 함수
  const onNick = async (data) => {
    try {
      const responce = await instance.put(`mypage/nickname`, data);
      if (responce.status === 200) {
        return alert("닉네임이 수정되었습니다.");
      } else {
        return alert("닉네임 수정에 실패하였습니다.");
      }
    } catch (e) {
      return alert("닉네임 수정에 실패하였습니다.");
    }
  };

  // 비밀번호를 수정하는 함수
  const onPass = async (inputs) => {
    try {
      const { oldPassword, newPassword, confirm } = inputs;
      const data = { oldPassword, newPassword, confirm };
      const response = await instance.put(`mypage/password`, data);

      console.log(response);
      if (response.status === 200) {
        return alert("비밀번호가 수정되었습니다.");
      } else {
        return alert("비밀번호 수정에 실패하였습니다.");
      }
    } catch (e) {
      return alert("비밀번호 수정에 실패하였습니다.");
    }
  };

  return (
    <Layout>
      <DetailHeader title={"프로필 수정"} />
      <Wrapper>
        <ImgContainer>
          <img src={imgPreview} alt="" />
          <label>
            <CameraSvg />
            <input type="file" accept="*/images" onChange={onEditProfile} />
          </label>
        </ImgContainer>
        <Switch>
          <SwitchBtn focus={change} onClick={() => setChange(true)}>
            기본 정보 변경
          </SwitchBtn>
          <SwitchBtn focus={!change} onClick={() => setChange(false)}>
            비밀번호 변경
          </SwitchBtn>
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
                <button>수정</button>
              )}
            </div>
            <label>동네변경</label>
            <Location onClick={() => setShowLocation(true)}>
              <span>{getLocation(user?.locationId)}</span>
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
                  value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                  message: "최소 8자 최대 16자의 비밀번호를 입력해주세요",
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
                  value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                  message: "최소 8자 최대 16자의 비밀번호를 입력해주세요",
                },
              })}
              type="password"
            />
            <span>{errors?.confirm?.message}</span>
            {watch("oldPassword") === "" &&
            watch("newPassword") === "" &&
            watch("confirm") === "" ? (
              <PasswordBtn focus={false}>비밀번호 수정</PasswordBtn>
            ) : (
              <PasswordBtn focus={true}>비밀번호 수정</PasswordBtn>
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
  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
  label {
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
    input {
      display: none;
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
`;

const SwitchBtn = styled.button`
  width: 9rem;
  height: 2.4rem;
  margin: 0 1rem;
  color: ${(props) => (props.focus ? "white" : props.theme.fontColor.black)};
  border: ${(props) => (props.focus ? "0px" : "1px")} solid
    ${(props) => props.theme.borderColor.lightGray};
  border-radius: 5px;
  background-color: ${(props) =>
    props.focus ? props.theme.btnColor.orange : "inherit"};
  &:hover {
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
      font-size: 1rem;
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
`;

const PasswordBtn = styled.button`
  background-color: ${(props) =>
    props.focus ? props.theme.fontColor.orange : "none"};
  color: ${(props) => (props.focus ? "white" : props.theme.borderColor.gray)};
  width: 100%;
  height: 41px;
  padding: 0.7rem 1rem;
  border: ${(props) => (props.focus ? "0px" : "1px")} solid
    ${(props) => props.theme.borderColor.lightGray};
  border-radius: 5px;
`;
