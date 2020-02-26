import axios from "axios";

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_API_BASEURL
      : "/api"
});

export default request;
