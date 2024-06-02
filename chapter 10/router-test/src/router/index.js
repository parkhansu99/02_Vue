import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Members from '../pages/Members.vue';
import Videos from '../pages/Videos.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('../pages/About.vue'),
    },
    {
      path: '/members',
      component: () => import('../pages/Members.vue'),
    },
    {
      path: '/videos',
      component: () => import('../pages/Videos.vue'),
    },
  ],
});

export default router;
