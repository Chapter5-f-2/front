import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 3);
  return cookies.set("Authorization", accessToken, {
    samSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookies.get("Authorization");
};

export const removeCookieToken = () => {
  return cookies.remove("Authorization", { sameSite: "strict", path: "/" });
};
