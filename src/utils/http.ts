import axios from "axios";
import { Message } from "element-ui";

const request = axios.create({
  // baseURL: "http://www.gblwxs.net:99"
  baseURL: "http://novel.gblwxs.net:99/"
});

request.interceptors.response.use(
  function(response) {
    if (response.data.code === 400) {
      Message({
        message: "操作失败",
        type: "error"
      });
      return Promise.reject(response);
    } else if (response.data.code === 1000) {
      Message({
        message: "参数不存在",
        type: "error"
      });
      return Promise.reject(response);
    } else if (response.data.code === 1001) {
      Message({
        message: "请求超时",
        type: "error"
      });
      return Promise.reject(response);
    } else if (response.data.code === 1002) {
      Message({
        message: "签名错误",
        type: "error"
      });
      return Promise.reject(response);
    } else if (response.data.code === 1003) {
      Message({
        message: "参数错误",
        type: "error"
      });
      return Promise.reject(response);
    }

    return response.data;
  },
  function(error) {
    Message({
      message: "网络错误",
      type: "error"
    });

    return Promise.reject(error);
  }
);

export default request;
