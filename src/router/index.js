import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksView from '../views/WorksView.vue'
import WorkDetail from '../views/WorkDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      left: 0,
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        hideDefaultHeader: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView,
    },
    {
      path: '/works/:id',
      name: 'workdetail',
      component: WorkDetail,
    },
  ],
})

export default router
