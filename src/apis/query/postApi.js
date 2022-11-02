import instance, { postApi } from "../instance/instance";

/** 위치별 거래글 조회 */
export const readLocationPosts = async () => {
  const { data } = await instance.get("post/loc");
  return data.data;
};

/** 카테고리별 거래글 조회*/
export const readCategoryPosts = async (categoryId) => {
  const {
    data: { data },
  } = await instance.get(`post/cat/${categoryId}`);
  return data;
};

/** 키워드에 대한 거래글 조회*/
export const readKeywordPosts = async (keyword) => {
  const { data } = await instance.get(`post/search?keyword=${keyword}`);
  return data;
};

/** 거래글 상세 조회*/
export const readPost = async (postId) => {
  const { data } = await instance.get(`post/${postId}`);

  return data.data;
};

/** 거래글 추가*/
export const addPost = async (body) => {
  console.log(body);
  const { data } = await postApi.post("post", body);
  return data;
};

/** 거래글 수정*/
export const editPost = async ({ id, body }) => {
  console.log(id, body);
  const { data } = await postApi.put(`post/${id}`, body);
  console.log(data);
  return data;
};

/** 거래글 상태 수정*/
export const editPostStatus = async ({ id, body }) => {
  console.log(id, body);
  const { data } = await instance.put(`post/status/${id}`, body);
  return data;
};

/** 거래글 삭제*/
export const removePost = async (id) => {
  const data = await instance.delete(`post/${id}`);
  return data;
};

/** 거래글 좋아요 */
export const toggleWish = async (id) => {
  console.log(id);
  const data = await instance.put(`post/wish/${id}`);
  return data;
};
