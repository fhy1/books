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
  async chapter(query: any = {}) {
    let res = await http({
      method: "get",
      url: "/api/chapter",
      params: query
    });
    return res.data;
  },
  async chapterNovel(query: any = {}) {
    let res = await http({
      method: "get",
      url: "/api/chapter/detail",
      params: query
    });
    return res.data;
  }
};
