import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Component from "vue-class-component";
import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

// import { Component } from "vue-property-decorator";
Component.registerHooks(["beforeRouteEnter", "beforeRouteUpdate"]);
Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
