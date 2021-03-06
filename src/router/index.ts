import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:typeId",
    name: "type",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Type.vue")
  },
  {
    path: "/:typeId/:bookId",
    name: "book",
    component: () => import("../views/book.vue")
  },
  {
    path: "/:typeId/:bookId/:contantId",
    name: "content",
    component: () => import("../views/content.vue")
  }
];

const router = new VueRouter({
  // mode: "history",
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
