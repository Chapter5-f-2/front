import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "../pages/Account";
import Categories from "../pages/Categories";
import Chat from "../pages/Chat";
import Chats from "../pages/Chats";
import EditProfile from "../pages/EditProfile";
import Home from "../pages/Home";
import Interests from "../pages/Interests";
import Join from "../pages/Join";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import PostDetail from "../pages/PostDetail";
import PostWrite from "../pages/PostWrite";
import Profile from "../pages/Profile";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈페이지 (시작하기 및 상품리스트) */}
        <Route path="/" element={<Home />} />
        {/* 상품 디테일 페이지 (상품수정은 모달창)*/}
        <Route path="/posts/:id" element={<PostDetail />} />
        {/* 상품 작성 페이지 */}
        <Route path="/posts/write" element={<PostWrite />} />
        {/* 로그인 페이지 */}
        <Route path="/login" element={<Login />} />
        {/* 회원가입 페이지 */}
        <Route path="/join" element={<Join />} />
        {/* 나의 당근 페이지 */}
        <Route path="/my-page" element={<MyPage />} />
        {/* 구매목록  */}
        <Route path="/my-page/purchases" element={<Purchases />} />
        {/* 판매목록 */}
        <Route path="/my-page/sales" element={<Sales />} />
        {/* 관심목록 */}
        <Route path="/my-page/interests" element={<Interests />} />
        {/* 가계부 */}
        <Route path="/my-page/account" element={<Account />} />
        {/* 프로필 페이지 */}
        <Route path="/profiles/:id" element={<Profile />} />
        {/* 프로필 수정 페이지 */}
        <Route path="/profiles/:id/edit" element={<EditProfile />} />
        {/* 채팅방 목록 페이지  */}
        <Route path="/chats" element={<Chats />} />
        {/* 채팅방 상세 */}
        <Route path="/chats/:id" element={<Chat />} />
        <Route path="/categories/:id" element={<Categories />} />
        {/* 카테고리별 상품리스트 페이지 */}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
