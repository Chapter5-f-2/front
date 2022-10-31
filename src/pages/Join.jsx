import React from "react";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import { useForm } from "react-hook-form";
import Footer from "../components/footer/Footer";
import styled from "styled-components";

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm();
  const onValid = (data) => {
    if (data.password !== data.confirmPassword) {
      setError(
        "confirmPassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }
  }; // userId, Key, Nickname, pw , email, profileimg, createAt
  console.log(watch("email"));
  return (
    <Layout>
      <DetailHeader title={"회원가입"} />
      <JoinForm onSubmit={handleSubmit(onValid)}>
        <div>
          <h1>회원정보를 설정해주세요</h1>
          <h3>기본 정보들을 입력해주세요!</h3>
          <label>이메일</label>
          <input
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                message: "잘못된 이메일 형식입니다",
              },
            })}
            placeholder="Email"
          />
          <span>{errors.email?.message}</span>
          <button></button>
          <label>비밀번호</label>
          <input
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                message:
                  "최소 8자 최대 10자 1개 이상의 대,소문자, 1개의 숫자,특수 문자를 포함시켜주세요",
              },
            })}
            type="password"
            placeholder="Password"
          />
          <span>{errors.password?.message}</span>
          <label>비밀번호 확인</label>
          <input
            {...register("confirmPassword", {
              required: "비밀번호 확인을 입력해주세요",
            })}
            type="password"
            placeholder="Confirm Password"
          />
          <span>{errors.confirmPassword?.message}</span>
          <label>동네 설정</label>
          <select value=""></select> {/* 모양만 똑같이 */}
          <label>닉네임</label>
          <input
            {...register("NickName", {
              required: "닉네임을 10자 이내로 입력해주세요",
            })}
            placeholder="NickName"
            maxLength="10"
          />
          <span>{errors.NickName?.message}</span>
          <button>완료</button>
        </div>
      </JoinForm>
      <Footer />
    </Layout>
  );
};

export default Join;

const JoinForm = styled.form`
  background-color: ${(props) => props.theme.fontColor.darkOrange};
  padding: 0 1rem;
  width: 100%;
  overflow-x: hidden;

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-top: 1rem;
    padding: 0 1rem;
    font-weight: bold;
    font-size: 20px;
  }

  h3 {
    margin-left: 4%;
  }

  label {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 12%;
    font-weight: bold;
  }

  input {
    width: 80%;
    height: 4vh;
    margin: 0 auto;
    padding-left: 0.5rem;
    font-size: 15px;
    border: 4px solid #e84118;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }

  select {
    width: 80%;
    margin: 0 auto;
    border: 4px solid #e84118;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }

  span {
    max-width: 80%;
    margin-top: 5px;
    margin-left: 12%;
    color: #fbc531;
    font-weight: bold;
  }

  button {
    width: 80%;
    height: 6vh;
    margin: 0 auto;
    margin-top: 20px;
    color: white;
    font-weight: bold;
    font-size: 18px;

    border: 4px solid #e84118;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    &:hover {
      color: ${(props) => props.theme.fontColor.black};
      transition: color 0.2s ease-in;
    }
  }

  overflow-y: hidden;
`;
