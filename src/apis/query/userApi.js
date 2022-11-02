import instance, { postApi } from "../instance/instance";

/** 회원가입 */
export const signUp = async (body) => {
  const data = await instance.post("signup", body);
  return data;
};

/** 이메일 중복확인 */
export const emailDup = async (body) => {
  const data = await instance.post("signup/emailDup", body);
  return data;
};

/** 닉네임 중복확인 */
export const nicknameDup = async (body) => {
  const data = await instance.post("signup/nicknameDup", body);
  return data;
};

/** 로그인 */
export const login = async (body) => {
  const data = await instance.post("login", body);
  return data;
};

/** 나의 정보 가져오기 */
export const readMe = async () => {
  const { data } = await instance.get("mypage");
  return data;
};

/** 다른 유저 정보 가져오기 */
export const readUser = async (id) => {
  const data = await instance.get(`mypage/${id}`);
  return data;
};

/** 나의 판매목록 가져오기*/
export const readSalePosts = async () => {
  try {
    const { data } = await instance.get("mypage/sale");
    return data.data;
  } catch (e) {
    throw new Error(e);
  }
};

/** 나의 구매목록 가져오기*/
export const readBuyPosts = async () => {
  const { data } = await instance.get("mypage/buy");
  return data.data;
};

/** 나의 찜목록 가져오기*/
export const readWishPosts = async () => {
  const { data } = await instance.get("mypage/wish");
  return data.deta;
};

/** 당근 가계부 가져오기*/
export const readHistory = async () => {
  const { data } = await instance.get("mypage/history");
  return data.data;
};

/** 프로필 이미지 수정 */
export const editAvatar = async (body) => {
  const data = await postApi.put("mypage/img", body);
  return data;
};

/** 프로필 닉네임 수정 */
export const editNickname = async (body) => {
  const data = await instance.put("mypage/nickname", body);
  return data;
};

/** 프로필 비밀번호 수정 */
export const editPassword = async (body) => {
  const data = await instance.put("mypage/nickname", body);
  return data;
};

/** 위치 수정 */
export const editLocation = async (body) => {
  const { data } = await instance.put("mypage/location");
  console.log(data);
  return data;
};
