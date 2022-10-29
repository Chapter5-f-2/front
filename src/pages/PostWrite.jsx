import React from "react";
import { useNavigate } from "react-router-dom";
import DetailHeader from "../components/header/DetailHeader";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";
import Left from "../static/svg/Left";

const PostWrite = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <DetailHeader
        title={"중고 거래 글쓰기"}
        type="write"
        _onClick={() => navigate("/posts/1")}
      />
      <Main>
        <form>
          <label>
            <input type="file" />
          </label>
          <input type="text" placeholder="글 제목" />
          <div>
            <span>카테고리 선택</span>
            <span>
              <Left />
            </span>
          </div>
          <div>
            <span>₩</span>
            <input type="number" placeholder="가격 (선택사항)" />
          </div>
          <textarea placeholder="OO동에 올릴 게시글을 작성해주세요." />
        </form>
      </Main>
    </Layout>
  );
};

export default PostWrite;
