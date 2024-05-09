import { createRouter, createWebHistory } from 'vue-router'
import CompanyJoinView from '../views/sr/CompanyJoinView.vue'

const routes = [
  {
    path: '/companyjoin',
    name: 'companyjoin',
    component: CompanyJoinView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
