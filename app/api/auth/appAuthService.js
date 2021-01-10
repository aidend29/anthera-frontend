import client from "../client";

const localPoint = "auth/";

const signin = ({ email, password }) => {
  //content-type
  //application/json

  //multipart/form-data :: for sending large data sucha as images <- this will break data into chunks
  return client.post("/auth/signin", { email: email, password: password });
};

const signup = ({ email, name, password }) => {
  return client.post("/auth/signup", {
    email: email,
    name: "Test name",
    password: password,
  });
};

const ping = () => {
  return client.get("/ping");
};

export { signin, signup, ping };
