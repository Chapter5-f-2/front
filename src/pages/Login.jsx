import React from "react";
import styled from "styled-components";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import { useForm } from "react-hook-form";
import Footer from "../components/footer/Footer";
import { login } from "../apis/query/userApi";
import { setAccessToken } from "../shared/Cookie";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    /* setError, */
    watch,
  } = useForm();

  const onSubmit = async (inputs) => {
    try {
      const response = await login({ ...inputs });
      if (response.status === 200) {
        alert("로그인에 성공하였습니다.");
        console.log(response.data);
        setAccessToken(response.data.token);
        return (window.location.href = "/");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    } catch (e) {
      console.log(e);
      return alert("로그인에 실패하였습니다.");
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
          <span>{errors?.Email?.message}</span>
          <label>비밀번호</label>
          <input
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                message: "최소 8자 최대 16자의 비밀번호를 입력해주세요",
              },
            })}
            placeholder="Password"
          />
          <span>{errors?.Password?.message}</span>
          {watch("email") === "" && watch("password") === "" ? (
            <button style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              로그인
            </button>
          ) : (
            <button style={{ backgroundColor: "#ff6f06" }}>로그인</button>
          )}
        </div>
      </LoginForm>
      <Footer />
    </Layout>
  );
};

export default Login;

const LoginForm = styled.form`
  padding: 0 2rem;
  width: 100%;
  overflow-x: hidden;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 35%;
  }

  label {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0 0.4rem;
  }

  input {
    width: 100%;
    height: 5vh;
    margin: 0 auto;
    padding-left: 0.5rem;
    font-size: 15px;
    border: 1px solid ${(props) => props.theme.fontColor.lightGray};
    border-radius: 10px;
    &:focus {
      border-color: #fb3131;
    }
  }

  span {
    margin-top: 5px;
    margin-left: 12%;
    color: #fb3131;
    font-size: 0.8rem;
  }

  button {
    width: 100%;
    height: 6vh;
    margin: 0 auto;
    margin-top: 20px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    background-color: #ff6f06;
    border-radius: 10px;
  }
`;
