import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../page/HomeView.vue'
import DetailView from '../page/DetailView.vue'
const router = createRouter ({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/detail/:id',
        name: 'DetailView',
        component: DetailView
      }
  ]
});

export default router;