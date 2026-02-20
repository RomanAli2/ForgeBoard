import { createWebHashHistory, createRouter } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import LoginSection from '../components/Logins/LoginSection.vue'
import SignupSection from '../components/Logins/SignupSection.vue'
import SearchPage from '../components/SearchPage.vue'
const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginSection },
  { path: '/signup', component: SignupSection },
  { path: '/Search', component: SearchPage },

]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})
