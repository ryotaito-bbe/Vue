import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../App.vue";
// import ArticleView from "../views/Article.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/article",
      name: "Article",
      component: () => import("../views/Article.vue"),
      // component: ArticleView,
    },
  ],
});

export default router;
