//axios拦截器处理ajax请求
import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: "/api/", // url = base url + request url
   // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
