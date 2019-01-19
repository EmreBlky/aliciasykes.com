import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import(/* webpackChunkName: "cv" */ './views/Cv.vue'),
    },
  ],
});
