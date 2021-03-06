let initState = function() {
  return {
    typeList: [],
    hotList: [],
    recommendList: [],
    activityId: 0,
    hashType: {}
  };
};

export default {
  namespaced: true,
  state: initState(),
  mutations: {
    set(state: any, payload: any) {
      Object.assign(state, payload);
    },
    reset(state: any) {
      Object.assign(state, initState());
    },
    setActive(state: any, payload: any) {
      state.activityId = payload.activityId;
      state.ListName = payload.ListName;
    }
  },
  actions: {
    reset({ commit }: any) {
      commit("reset");
    }
  }
};
