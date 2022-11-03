import instance from "../instance/instance";

// 채팅방을 추가하는 요청
export const addChatRoom = async (body) => {
  console.log(body);
  try {
    const data = await instance.post("chat", body);
    return data;
  } catch (e) {
    return console.log(e);
  }
};

// 채팅방을 가져오는 요청
export const readChatRooms = async () => {
  const { data } = await instance.get("chat");
  console.log(data);
  return data.data;
};

export const readChats = async (id) => {
  const { data } = await instance.get(`chat/${id}`);
  console.log("readChats", data);
  return data;
};
export const addChat = async ({ id, body }) => {
  const { data } = await instance.post(`chat/${id}`, body);
  console.log(data);
  return data;
};
