import React from "react";

import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";

const Login = () => {
  return (
    <Layout>
      <DetailHeader title={"로그인"} />
      <Main></Main>
    </Layout>
  );
};

export default Login;
