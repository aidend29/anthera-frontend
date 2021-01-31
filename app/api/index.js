import { create } from "apisauce";
const baseURL = `http://104.248.154.62:5000/api/`;
const client = create({
  baseURL: "http://104.248.154.62:5000/api",
});

const customClient = (headers) => {
  return create({
    baseURL: baseURL,
    headers,
  });
};
export { client, customClient, baseURL };
