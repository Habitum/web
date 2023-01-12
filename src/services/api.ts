import axios from "axios";

export const api = axios.create({
  baseURL: "https://habitum-fakeapi-v1.onrender.com",
  timeout: 5000,
});
