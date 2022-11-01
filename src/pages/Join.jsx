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
  const { register, handleSubmit, formState: { errors }, watch, setError} = useForm();
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

const onValid = (data) => {
  if(data.password !== data.confirm) {
    setError(
      "confirm", 
      { message: "비밀번호가 일치하지 않습니다"},
      { shouldFocus: true }
    )
  };
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
          <label>이메일</label>
          <Email>
          <Input
            {...register("email", { required: "이메일을 입력해주세요", pattern: { value:  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/, message: "잘못된 이메일 형식입니다", },
            })}
            placeholder="Email"
          />
          <DupButton onClick={emailDup}>Check</DupButton>
          </Email>
          <span>{errors.email?.message}</span>
          <label>비밀번호</label>
          <Inputs
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
          <Inputs
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
          <DupButton onClick={nicknameDup}>Check</DupButton>
          </Nickname>
          <span>{errors.nickname?.message}</span>
          {watch("email") === "" && watch("password") === "" && watch("confirm") === "" && watch("nickname") === "" ? <Button style={{backgroundColor:"rgba(0,0,0,0.5)"}}>로그인</Button> : <Button style={{backgroundColor:"#ff6f06"}}>로그인</Button>}
        </div>
      </JoinForm>
      <Footer />
    </Layout>
  );
};

export default Join;

const JoinForm = styled.form`
  padding: 0 2rem;
  width: 100%;
  overflow-x: hidden;

  &>div {
    display: flex;
    flex-direction: column;
  }
  
  h1 {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 0.2rem;
  }

  label {
    margin-top: 0.45rem;
    margin-bottom: 0.5rem;
    padding: 0 0.4rem;
  } 

  span {
    width: 83%;
    margin-top: 5px;
    padding: 0 0.4rem;
    font-size: 0.8rem;
    color: #fb3131;
  }
  
  overflow:hidden;
`;

const Inputs = styled.input`
    width: 100%;
    height: 4vh;
    margin: 0 auto;
    padding: 0.8rem 1rem;
    font-size: 15px;
    border: 1px solid ${(props)=> props.theme.fontColor.lightGray};
    border-radius: 10px;
      &:focus {
        border-color: #fb3131;
      }
`;

const Input = styled.input`
  padding: 0 1rem;
  height: 4vh;
  border-radius: 9px 9px 9px 9px;
  border: white;
  font-size: 15px;
  width: 98%;
  border: 1px solid ${(props)=> props.theme.fontColor.lightGray};
  &:focus {
        border: 1px solid #fb3131;
      }
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100%;
  height: 6vh;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  font-size: 18px;
`;

const Email = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px;
  border-radius: 10px;
`;

const DupButton = styled.button`
  background-color: #ff6f06;
  border-radius: 5px;
  /* line-height: 1.2; */
  width: 100%;
  height: 4vh;
  color: white;
  border-radius: 9px 9px 9px px;
  /* margin: 5px 5px 5px -5px; */
`;

const Nickname = styled(Email)``;

const Blank = styled.div`
  background-color: white;
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

const SelectTown = styled(Email)`
  border: 1px solid ${(props)=> props.theme.fontColor.lightGray};
  &:focus {
        border-color: #fb3131;
      }
  margin-bottom: 0.25rem;
`;

const SelectButton = styled.button``;

