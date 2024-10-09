
import { createRouter, createWebHistory } from 'vue-router';
import ArchivePage from '../views/ArchivePage.vue';
import SinglePage from '../views/SinglePage.vue';

const routes = [
  {
    path: '/ito/vue/vue_lesson01_5/',
    // path: '/',
    name: 'home',
    component: ArchivePage,
  },
  {
    path: '/ito/vue/vue_lesson01_5/article/:id',
    // path: '/article/:id',
    name: 'article',
    component: SinglePage,
  },
];

// TODO:下記ページを参照に、開発環境、本番環境のpathを自動切換えできるようにする
// https://vitejs.dev/guide/env-and-mode

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
