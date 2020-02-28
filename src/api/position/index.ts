import http from "@/utils/http";

export default {
  async positionNovel() {
    let res = await http({
      method: "get",
      url: "/api/position/novel"
    });
    return res.data;
  },
  async novelType(query: any = {}) {
    let res = await http({
      method: "get",
      url: "/api/novel/type",
      params: query
    });
    return res.data;
  },
  async novelList(query: any = {}) {
    let res = await http({
      method: "get",
      url: "/api/novel/list",
      params: query
    });
    return res.data;
  },
  async chapter() {
    let res = await http({
      method: "get",
      url: "/api/chapter"
    });
    return res.data;
  }
};
