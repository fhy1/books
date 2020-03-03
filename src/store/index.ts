import Vue from "vue";
import Vuex from "vuex";
import position from "./position";
import book from "./book";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { position, book }
});
