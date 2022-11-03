import React from "react";
import styled from "styled-components";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import { useForm } from "react-hook-form";
import { login } from "../apis/query/userApi";
import { setAccessToken } from "../shared/Cookie";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (inputs) => {
    try {
      const response = await login({ ...inputs });
      if (response.status === 200) {
        Swal.fire({
          title: "로그인 성공",
          confirmButtonColor: "#ff6f06",
          icon: "success",
          width: 320,
        }).then(() => {
          console.log(response.data);
          setAccessToken(response.data.token);
          return (window.location.href = "/");
        });
      } else {
        Swal.fire({
          title: "로그인 실패",
          text: "이메일과 비밀번호를 확인해주세요",
          icon: "error",
          color: "red",
          width: 320,
        });
      }
    } catch (e) {
      return Swal.fire({
        title: "로그인 실패",
        text: "이메일과 비밀번호를 확인해주세요",
        icon: "error",
        color: "red",
        width: 320,
      });
    }
  };

  return (
    <Layout>
      <DetailHeader title={"로그인"} />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>이메일</label>
          <input
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                message: "잘못된 이메일 형식입니다.",
              },
            })}
            placeholder="Email Address"
          />
          <span>{errors?.email?.message}</span>
          <label>비밀번호</label>
          <input
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
          <span>{errors?.Password?.message}</span>
          {Object.keys(watch()).length === 0 ||
          (watch("email") === "" && watch("password") === "") ? (
            <Btn focus={false}>로그인</Btn>
          ) : (
            <Btn focus={true}>로그인</Btn>
          )}
        </div>
      </LoginForm>
      <div />
    </Layout>
  );
};

export default Login;

const LoginForm = styled.form`
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 60%;
  }

  label {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0 0.4rem;
  }

  input {
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    padding-left: 0.8rem;
    font-size: 1rem;
    border: 1px solid ${(props) => props.theme.borderColor.lightGray};
    border-radius: 5px;
    &:focus {
      border-color: ${(props) => props.theme.fontColor.orange};
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.35);
    }
  }

  span {
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    margin-left: 0.2rem;
    color: #fb3131;
    font-size: 0.8rem;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 3rem;
  margin: 0 auto;
  margin-top: 1rem;
  color: ${(props) => (props.focus ? "white" : "rgba(0, 0, 0, 0.4);")};
  font-weight: 600;
  font-size: 1rem;
  border: ${(props) => (props.focus ? "0px" : "1px")} solid
    ${(props) => props.theme.borderColor.lightGray};
  border-radius: 5px;
  background-color: ${(props) => (props.focus ? "#ff6f06" : "none")};
`;
