import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.SERVER_BASE_URL,
});

export default axiosClient;
