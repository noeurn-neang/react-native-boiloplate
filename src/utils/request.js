import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:4001/v1'
});

instance.interceptors.request.use(
  async config => {
    config.headers = {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/json"
    };

    return config;
  },
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  response => response.data,
  error => {
    console.log("Error Response: ", error.response);
    return Promise.reject(error.response.data);
  }
);

export default instance;
