import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Onboarding from '../views/OnboardingPage.vue'
import DetailStaze from '../views/DetailStaze.vue'
import DetailStazistu from '../views/DetailStazistu.vue'
import ListStazistov from '../views/ListStazistov.vue'
import ListFiriem from '../views/ListFiriem.vue'
import NotFound from '../views/NotFound.vue'
import SignUp from '../views/SignUp.vue'
import TheLogin from '../views/TheLogin.vue'
import ApplyForm from '../views/ApplyForm.vue'

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
    name: 'Detaily Stazistu',
    component: DetailStazistu
  },
  {
    path: '/list-stazistov',
    name: 'List Stazistov',
    component: ListStazistov
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/login',
    component: TheLogin
  },
  {
    path: '/list-firiem',
    name: 'List Firiem',
    component: ListFiriem
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
  {
    path: '/apply-form',
    component: ApplyForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
