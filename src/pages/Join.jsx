import React from "react";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import { useForm } from "react-hook-form";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

/* 배포 URL / 인스턴스 IP주소 */

const Join = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch,} = useForm();
  const onSubmit = async (data) => {
  try {
    const response = await axios.post("",data)
    if(response.ok){
      alert("회원가입에 성공했습니다.")
      return navigate("/login")
    } else {
      alert("회원가입에 실패했습니다.")
      return 
    }
  } catch (e) {
    alert("회원가입에 실패했습니다.")
    return
  }
}

  // userId, Key, Nickname, pw , email, profileimg, createAt
  console.log(watch("email"));

  const emailDup = async (e) => {
    e.preventDefault();
    const email = watch("email")
    try {
      const response = await axios.post("", { email }).then((res) => {
        if(res.data === true) {
          alert("중복된 아이디입니다.")
        } else {
          alert("사용 가능한 아이디입니다.");
        }
      })
    } catch (e) {
      return console.log(e);
    }
  };

  const nicknameDup = async () => {
    const nickname = watch("nickname")
    try {
      const response = await axios.post("", { nickname }).then((res) => {
        if(res.data === true) {
          alert("중복된 닉네임입니다.")
        } else {
          alert("사용 가능한 닉네임입니다.");
        }
      })
    } catch (e) {
      return console.log(e);
    }
  };
  
  return (
    <Layout>
      <DetailHeader title={"회원가입"} />
      <JoinForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>회원정보를 설정해주세요</h1>
          <h3>기본 정보들을 입력해주세요!</h3>
          <label>이메일</label>
          <Email>
          <Input
            {...register("email", { required: "이메일을 입력해주세요", pattern: { value:  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/, message: "잘못된 이메일 형식입니다", },
            })}
            placeholder="Email"
          />
          <DupButton onClick={emailDup}>중복 검사</DupButton>
          </Email>
          <span>{errors.email?.message}</span>
          <label>비밀번호</label>
          <input
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, message: "최소 8자 최대 16자 1개 이상의 대,소문자, 1개의 숫자,특수 문자를 포함시켜주세요", },
            })}
            type="password"
            placeholder="Password"
          />
          <span>{errors.password?.message}</span>
          <label>비밀번호 확인</label>
          <input
            {...register("confirm", { required: "비밀번호 확인을 입력해주세요", })} type="password" placeholder="Confirm Password" />
          <span>{errors.confirmPassword?.message}</span>
          <label>동네 설정</label>
          <SelectTown>
          <Blank>Here</Blank>
          <SelectButton><IoIosArrowDown/></SelectButton>
          </SelectTown>
          <label>닉네임</label>
          <Nickname>
          <Input
            {...register("nickname", { required: "닉네임을 10자 이내로 입력해주세요", })} placeholder="NickName" maxLength="10" />
          <DupButton onClick={nicknameDup}>중복 검사</DupButton>
          </Nickname>
          <span>{errors.nickname?.message}</span>
          <Button>완료</Button>
        </div>
      </JoinForm>
      <Footer />
    </Layout>
  );
};

export default Join;

const JoinForm = styled.form`
  background-color: ${(props) => props.theme.fontColor.darkOrange};
  padding: 0 2rem;
  width: 100%;
  overflow-x: hidden;

  &>div {
    display: flex;
    flex-direction: column;
    &>input {
    width: 100%;
    margin: 0 auto;
    padding: 0.8rem 1rem;
    font-size: 15px;
    border: 4px solid #e84118;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    font-weight: bold;
  }
  }

  h1 {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 20px;
  }


  label {
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    padding: 0 0.4rem;
    font-weight: bold;
  }

  span {
    max-width: 80%;
    margin-top: 5px;
    padding: 0 0.4rem;
    color: #fbc531;
    font-weight: bold;
  }

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    color: ${(props) => props.theme.fontColor.black};
    transition: color 0.2s ease-in;
  }

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Button = styled.button`
  border: 4px solid #e84118;
  border-radius: 10px;
  width: 100%;
  height: 6vh;
  margin: 0 auto;
  margin-top: 5px;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const Email = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  border-radius: 10px;
  border: 5px solid #e84118;
`;

const DupButton = styled.button`
  /* border: 2px solid #e84118; */
  background-color: ${(props) => props.theme.fontColor.orange};
  font-weight: bold;
  border-radius: 5px;
  line-height: 1.2;
  width: 100%;
  border-radius: 0px 5px 5px 0px;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 5px 0px 0px 5px;
  border: white;
  font-weight: bold;
  font-size: 15px;
  width: 100%;
`;

const Nickname = styled(Email)`
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Blank = styled.div`
  background-color: white;
  border-radius: 5px;
  border-radius: 5px 0px 0px 5px;
  width: 100%;
  margin: 0 auto;
  height: 4vh;
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  font-weight: bold;
  font-size: 15px;
  
`;

const SelectTown = styled(Email)`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.25rem;
`;

const SelectButton = styled.button``;
