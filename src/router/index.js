import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../page/HomeView'
const router = createRouter ({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    }
  ]
});

export default router;