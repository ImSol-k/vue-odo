import { createRouter, createWebHistory } from 'vue-router'
//소리
import CompanyJoinView from '../views/sr/CompanyJoinView.vue'
//재현
import CompanyInfoView from '../views/jh/CompanyInfoView.vue'

const routes = [
  {
    path: '/companyjoin',
    name: 'companyjoin',
    component: CompanyJoinView
  },
  {
    path: '/companyinfo',
    name: 'companyinfo',
    component: CompanyInfoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
