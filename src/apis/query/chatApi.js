import instance from "../instance/instance";

export const addChatRoom = async () => {
  const data = await instance.post("/chat");
  return data;
};

export const readChatRooms = async () => {
  const { data } = await instance.get("/chat");
  console.log(data);
  return data.data;
};
