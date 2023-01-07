import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:7991/api",
  headers: {
    "Access-Key":
      "10464d5c99713773e5c0480e628927198ce5b92d0754a411cb602ad56cefeff7",
  },
});

export default request;
