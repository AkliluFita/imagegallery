import axios from "axios";

const baseURL = "http://localhost:8000/api/";

const httpCommon = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  // headers: {
  //   "Content-Type": "application/json",
  //   accept: "application/json",
  // },
});

export default httpCommon;
