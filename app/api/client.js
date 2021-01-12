import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://104.248.154.62:5000/api",
});

export default apiClient;
