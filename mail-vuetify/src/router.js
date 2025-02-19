import { createRouter, createWebHistory } from 'vue-router';
import Inbox from './components/Inbox.vue';
import Sent from './components/Sent.vue';

const routes = [
  { path: '/', redirect: '/inbox' }, // Default route
  { path: '/inbox', component: Inbox },
  { path: '/sent', component: Sent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
