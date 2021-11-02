import { create } from "apisauce";
const baseURL = `https://anthera.xyz/api/`;
const client = create({
  baseURL: baseURL,
});

const customClient = (headers) => {
  return create({
    baseURL: baseURL,
    headers,
  });
};
export { client, customClient, baseURL };
