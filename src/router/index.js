import { createRouter, createWebHistory } from 'vue-router'
//하석
import MainView from '../views/hs/MainView.vue'
//소리
import CompanyJoinView from '../views/sr/CompanyJoinView.vue'
import CompanyPageView from '../views/sr/CompanyPageView.vue'
//재현
import CompanyInfoView from '../views/jh/CompanyInfoView.vue'
//승수
import MyPagePay from '../views/ss/MyPagePay.vue'
//미지
import ModifyView from '../views/mj/ModifyView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/companyjoin',
    name: 'companyjoin',
    component: CompanyJoinView
  },
  {
    path: '/companypage',
    name: 'companypage',
    component: CompanyPageView
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
