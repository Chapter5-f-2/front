import React from "react";
import styled from "styled-components";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import { useForm } from "react-hook-form";
import Footer from "../components/footer/Footer";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    /* setError, */
  } = useForm();
  const onSubmit = () => {};

  return (
    <Layout>
      <DetailHeader title={"로그인"} />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>이메일</label>
          <input
            {...register("Email", {
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
            {...register("Password", {
              required: "비밀번호를 입력해주세요",
            })}
            placeholder="Password"
          />
          <span>{errors?.Password?.message}</span>
          <button>LogIn</button>
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
    height: 4vh;
    margin: 0 auto;
    font-size: 15px;
    border: 1px solid #ff6f06; 
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    padding-left: 0.5rem;
  }

  span {
    margin-top: 5px;
    margin-left: 12%;
    font-size: 0.8rem;
    color: #fb3131;
  }

  button {
    width: 100%;
    height: 6vh;
    margin: 0 auto;
    margin-top: 20px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    background-color: #ff6f06
  }
`;
