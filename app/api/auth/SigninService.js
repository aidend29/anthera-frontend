import client from "../client";

const endpoint = "/ping";
const signin = () => {
  return client.get("/ping");
};

export default {
  signin,
};
