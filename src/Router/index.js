import { createWebHashHistory, createRouter } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import LoginSection from '../components/Logins/LoginSection.vue'
import SignupSection from '../components/Logins/SignupSection.vue'
const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginSection },
    { path: '/signup', component: SignupSection },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})