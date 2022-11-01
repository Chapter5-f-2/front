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
    watch
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
          {watch("Email") === "" && watch("Password") === "" ? <button style={{backgroundColor:"rgba(0,0,0,0.5)"}}>로그인</button> : <button style={{backgroundColor:"#ff6f06"}}>로그인</button>}
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
    font-size: 15px;
    border: 1px solid ${(props)=> props.theme.fontColor.lightGray}; 
    border-radius: 10px;
    padding-left: 0.5rem;
    &:focus{
      border-color: #fb3131;
    }
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
    background-color: #ff6f06
  }
`;
