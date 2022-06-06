import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Onboarding from '../views/OnboardingPage.vue'
import DetailStaze from '../views/DetailStaze.vue'
import DetailStazistu from '../views/DetailStazistu.vue'
import ListStazistov from '../views/ListStazistov.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/onboarding'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: Onboarding
  },
  {
    path: '/detail-staze',
    name: 'Detail Staze',
    component: DetailStaze
  },
  {
    path: '/detail-stazistu',
    component: DetailStazistu
  },
  {
    path: '/list-stazistov',
    name: 'List Stazistov',
    component: ListStazistov
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
