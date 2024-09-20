
import { createRouter, createWebHistory } from 'vue-router';
import ArchivePage from '../views/ArchivePage.vue';
import SinglePage from '../views/SinglePage.vue';

const routes = [
  {
    path: '/ito/vue/vue_lesson01_4/',
    name: 'home',
    component: ArchivePage,
  },
  {
    path: '/ito/vue/vue_lesson01_4/article/:id',
    name: 'article',
    component: SinglePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
