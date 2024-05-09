import { createRouter, createWebHistory } from 'vue-router'
//소리
import CompanyJoinView from '../views/sr/CompanyJoinView.vue'
//재현
import CompanyInfoView from '../views/jh/CompanyInfoView.vue'
//승수
import MyPagePay from '../views/ss/MyPagePay.vue'
//미지
import ModifyView from '../views/mj/ModifyView.vue'

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
  },
  {
    path: '/mypage/pay',
    name: 'mypagePay',
    component: MyPagePay
  },
  {
    path: '/mypage/modify',
    name: 'mypagemodify',
    component: ModifyView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
