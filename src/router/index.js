import Vue from 'vue';
import VueRouter from 'vue-router';
import Chat from '../views/Chat.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "about" */ '../views/Login.vue');
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
