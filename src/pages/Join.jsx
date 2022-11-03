import React, { useState } from "react";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { emailDup, nicknameDup, signUp } from "../apis/query/userApi";
import LocationModal from "../components/modal/LocationModal";
import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { showLocationAtom } from "../shared/atoms/modalAtoms";
import getLocation from "../utils/getLocation";
import Swal from "sweetalert2";
import Main from "../components/layout/Main";
import Left from "../static/svg/Left";

/* 배포 URL / 인스턴스 IP주소 */

const Join = () => {
  const navigate = useNavigate();
  const [dups, setDups] = useState({ nickname: false, email: false });
  const [locationId, setLocationId] = useState(0);
  const [showLocation, setShowLocation] = useRecoilState(showLocationAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    setFocus,
  } = useForm();

  const onSubmit = async (inputs) => {
    if (inputs.password !== inputs.confirm) {
      setError(
        "confirm",
        { message: "비밀번호가 일치하지 않습니다" },
        { shouldFocus: true }
      );
      return;
    }
    if (locationId === 0) {
      return Swal.fire({
        title: "동네를 설정해주세요",
        confirmButtonColor: "#ff6f06",
        icon: "error",
        confirmButtonText: "확인",
        width: 320,
      });
    }
    try {
      const response = await signUp({
        ...inputs,
        locationId,
      });
      if (response.data.ok) {
        /* alert(response.data.message);
        return navigate("/login") */
        Swal.fire({
          title: "회원가입 \n성공",
          confirmButtonColor: "#ff6f06",
          icon: "success",
          width: 320,
        }).then(() => {
          return navigate("/login");
        });
      } else {
        /* alert(response.data.message);
        return */
        Swal.fire({
          title: "회원가입 실패",
          confirmButtonColor: "#ff6f06",
          icon: "error",
          color: "red",
          confirmButtonText: "확인",
          width: 320,
        });
      }
    } catch (e) {
      return Swal.fire({
        title: "회원가입 실패",
        confirmButtonColor: "#ff6f06",
        icon: "error",
        color: "red",
        confirmButtonText: "확인",
        width: 320,
      });
    }
  };

  const onEmailDup = async (e) => {
    e.preventDefault();
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    const email = watch("email");
    const testing = reg.test(email);
    try {
      if (!testing) {
        setFocus("email");
        return alert("이메일을 확인해주세요");
      }
      const response = await emailDup({ email });
      if (response.data.ok) {
        alert(response.data.message);
        setDups((prev) => ({ ...prev, nickname: true }));
      } else {
        alert(response.data.message);
      }
    } catch (e) {
      console.log(e);
      return Swal.fire({
        text: "이미 사용 중인 이메일입니다",
        confirmButtonColor: "#ff6f06",
        icon: "warning",
        color: "red",
        confirmButtonText: "확인",
        width: 320,
      });
    }
  };

  const onNicknameDup = async (e) => {
    e.preventDefault();
    const nickname = watch("nickname");
    try {
      const response = await nicknameDup({ nickname });
      if (response.data.ok) {
        alert(response.data.message);
        setDups((prev) => ({ ...prev, nickname: true }));
      } else {
        alert(response.data.message);
      }
    } catch (e) {
      console.log(e);
      return Swal.fire({
        position: "center",
        text: "이미 사용 중인 닉네임입니다",
        confirmButtonColor: "#ff6f06",
        icon: "warning",
        color: "red",
        confirmButtonText: "확인",
        width: 320,
      });
    }
  };

  return (
    <Layout>
      <DetailHeader title={"회원가입"} />
      <Main>
        <JoinForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>회원정보를 입력해주세요</h1>
            <label>이메일</label>
            <Email>
              <Input
                {...register("email", {
                  required: "이메일을 입력해주세요",
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: "잘못된 이메일 형식입니다",
                  },
                })}
                placeholder="Email"
              />
              <DupButton onClick={onEmailDup}>Check</DupButton>
            </Email>
            <span>{errors.email?.message}</span>
            <label>비밀번호</label>
            <Inputs
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                pattern: {
                  value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                  message: "최소 8자 최대 16자의 비밀번호를 입력해주세요",
                },
              })}
              type="password"
              placeholder="Password"
            />
            <span>{errors.password?.message}</span>
            <label>비밀번호 확인</label>
            <Inputs
              {...register("confirm", {
                required: "비밀번호 확인을 입력해주세요",
              })}
              type="password"
              placeholder="Confirm Password"
            />
            <span>{errors.confirm?.message}</span>

            <label>닉네임</label>
            <Nickname>
              <Input
                {...register("nickname", {
                  required: "닉네임을 10자 이내로 입력해주세요",
                })}
                placeholder="NickName"
                maxLength="10"
              />
              <DupButton onClick={onNicknameDup}>Check</DupButton>
            </Nickname>
            <span>{errors.nickname?.message}</span>
            <SelectTown onClick={() => setShowLocation(true)}>
              <Blank>
                {locationId === 0 ? "동네 설정" : getLocation(locationId)}
              </Blank>
              <Left />
            </SelectTown>
            {Object.keys(watch()).length === 0 ||
            (watch("email") === "" &&
              watch("password") === "" &&
              watch("confirm") === "" &&
              watch("nickname") === "") ? (
              <Button>회원가입</Button>
            ) : (
              <Button style={{ backgroundColor: "#FE6F0F", color: "white" }}>
                회원가입
              </Button>
            )}
          </div>
        </JoinForm>
      </Main>
      <div />
      <AnimatePresence>
        {showLocation ? <LocationModal setLocation={setLocationId} /> : null}
      </AnimatePresence>
    </Layout>
  );
};

export default Join;

const JoinForm = styled.form`
  padding: 0 1rem;
  width: 100%;
  overflow-x: hidden;
  margin-top: 20%;
  & > div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
  }

  label {
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
    padding: 0 0.4rem;
  }
  span {
    margin-top: 0.5rem;
    padding: 0 0.4rem;
    color: #fb3131;
    font-size: 0.8rem;
  }

  overflow: hidden;
`;

const Inputs = styled.input`
  width: 100%;
  padding: 0.7rem 1rem;
  color: ${(props) => props.theme.fontColor.black};
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.borderColor.lightGray};
  border-radius: 5px;
  &:focus {
    border: 1px solid ${(props) => props.theme.fontColor.orange};
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem 1rem;
  color: ${(props) => props.theme.fontColor.black};
  font-size: 1rem;
  border: none;
  border: 1px solid ${(props) => props.theme.borderColor.lightGray};
  border-radius: 5px 0px 0px 5px;
  &:focus-within {
    border: 1px solid ${(props) => props.theme.fontColor.orange};
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 1rem;
  }
`;

const Button = styled.button`
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

const Email = styled.div`
  display: flex;
  position: relative;
  border-radius: 5px;
`;

const DupButton = styled.button`
  width: 5rem;
  color: white;
  font-size: 0.9rem;
  background-color: ${(props) => props.theme.btnColor.orange};
  border-radius: 0px 3px 3px 0px;
  &:hover {
    background-color: ${(props) => props.theme.btnColor.darkOrange};
  }
`;

const Nickname = styled(Email)``;

const Blank = styled.div`
  border-radius: 5px;
  border-radius: 10px 5px 5px 10px;
  width: 100%;
  margin: 0 auto;
  height: 4vh;
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  font-size: 15px;
`;

const SelectTown = styled.div`
  cursor: pointer;
  margin: 1rem 0 1.5rem 0;
  border: 1px solid ${(props) => props.theme.borderColor.lightGray};
  display: flex;
  align-items: center;
  border-radius: 5px;
  svg {
    width: 1.5rem;
    margin-right: 1rem;
    transform: rotateZ(270deg);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    svg {
      color: white;
    }
  }
`;

const SelectButton = styled.button`
  border-radius: 0px 5px 5px 0px;
  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
