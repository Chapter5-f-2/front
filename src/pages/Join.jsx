import React from "react";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import { useForm } from "react-hook-form";
import Footer from "../components/footer/Footer";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Join = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const onValid = (data) => {}
  return (
    <Layout>
      <DetailHeader title={"회원가입"} />
      <JoinForm onSubmit={handleSubmit(onValid)}>
        <div>
        <h1>프로필을 설정해주세요</h1>
        <h3>나를 나타내는 닉네임과 회원정보를 등록해주세요!</h3>
        <label>이메일</label>
        <input {...register("email")}/>
        <label>비밀번호</label>
        <input {...register("password")}/>
        <label>비밀번호 확인</label>
        <input {...register("confirmPassword")}/>
        <label>동네 설정</label>
        <select value="">
        </select> {/* 모양만 똑같이 */}
        <label>닉네임</label>
        <input placeholder="닉네임을 입력해주세요."/>
        </div>
      </JoinForm>
      <Footer/>
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
    margin-top: 20%;
  }

  h1 {
    margin-top: 1rem;
    padding: 1rem;
    font-size: 20px;
    font-weight: bold;
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
    font-size: 18px;
    border: 4px solid #e84118;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    padding-left: 0.5rem;
  }

  select {
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    border: 4px solid #e84118;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    .reg {
      position: absolute;
      width: 10%;
    }
  }

  span {
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
`;