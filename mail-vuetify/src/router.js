import { createRouter, createWebHistory } from 'vue-router';
import Inbox from './components/Inbox.vue';
import Sent from './components/Sent.vue';
import Draft from './components/Draft.vue';

const routes = [
  { path: '/', redirect: '/inbox' }, // Default route
  { path: '/inbox', component: Inbox },
  { path: '/sent', component: Sent },
  { path: '/draft', component: Draft}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
