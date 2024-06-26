import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( '../views/SignUp.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import( '../views/EventsView.vue')
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import( '../views/SpeakersView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
