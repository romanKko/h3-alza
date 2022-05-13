import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Onboarding from '../views/OnboardingPage.vue'
import DetailStaze from '../views/DetailStaze.vue'

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
    path: '/detailstaze',
    name: 'Detail Staze',
    component: DetailStaze
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
