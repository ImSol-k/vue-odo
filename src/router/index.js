import { createRouter, createWebHistory } from 'vue-router'
//하석
import MainView from '../views/hs/MainView.vue'
import ClassDetailPageView from '../views/hs/ClassDetailPageView.vue'
//소리
import CompanyJoinView from '../views/sr/CompanyJoinView.vue'
import CompanyPageView from '../views/sr/CompanyPageView.vue'
import MemberManagerView from '../views/sr/MemberManagerView.vue'
import ClassCalendarView from '../views/sr/ClassCalendarView.vue'
import ClassAddView from '../views/sr/ClassAddView.vue'
//재현
import CompanyInfoView from '../views/jh/CompanyInfoView.vue'
import CompanyInfoModify from '../views/jh/CompanyInfoModify.vue'
import WishListClass from '../views/jh/WishListClass.vue'
import WishListCompany from '../views/jh/WishListCompany.vue'
import PaymentView from '../views/jh/PaymentView.vue'
import PaymentEndView from '../views/jh/PaymentEndView.vue'
//승수
import MyPagePay from '../views/ss/MyPagePay.vue'
import MyPageReview from '../views/ss/MyPageReview.vue'
import MyPageCoupon from '../views/ss/MyPageCoupon.vue'
import MyPageWriteForm from '../views/ss/MyPageWriteForm.vue'
import LoginPage from '@/views/ss/LoginPage.vue'
import UserJoinPage from '@/views/ss/UserJoinPage.vue'
import JoinSelect from '@/views/ss/JoinSelect.vue'
//미지
import ModifyView from '../views/mj/ModifyView.vue'
import Condition from '../views/mj/Condition.vue'
import AnnouncementView from '../views/mj/AnnouncementView.vue'

const routes = [
  //=== 하석 =================================
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/classdetailpage',
    name: 'classdetailpage',
    component: ClassDetailPageView
  },
  //=== 소리 =================================
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
    path: '/membermanager',
    name: 'membermanager',
    component: MemberManagerView
  },
  {
    path: '/classcalender',
    name: 'classcalender',
    component: ClassCalendarView
  },
  {
    path: '/classadd',
    name: 'classadd',
    component: ClassAddView
  },
  //=== 재현 =================================
  {
    path: '/companyinfo',
    name: 'companyinfo',
    component: CompanyInfoView
  },
  {
    path: '/companymodify',
    name: 'companymodify',
    component: CompanyInfoModify
  },
  {
    path: '/wishlistclass',
    name: 'wishlistclass',
    component: WishListClass
  },
  {
    path: '/wishlistcompany',
    name: 'wishlistcompany',
    component: WishListCompany
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView
  },
  {
    path: '/paymentend',
    name: 'paymentend',
    component: PaymentEndView
  },
  //=== 승수 =================================
  {
    path: '/mypage/pay',
    name: 'mypagePay',
    component: MyPagePay
  },
  {
    path: '/mypage/review',
    name: 'mypagereview',
    component: MyPageReview
  },
  {
    path: '/mypage/coupon',
    name: 'mypagecoupon',
    component: MyPageCoupon
  },
  {
    path: '/mypage/review/form',
    name: 'mypagereviewform',
    component: MyPageWriteForm
  },
  {
    path: '/join',
    name: 'join',
    component: JoinSelect
  },
  {
    path: '/userjoin',
    name: 'userjoin',
    component: UserJoinPage
  },
  {
    path: '/login',
    name : 'login',
    component : LoginPage
  },
  //=== 미지 =================================
  {
    path: '/mypage/modify',
    name: 'mypagemodify',
    component: ModifyView
  },
  {
    path: '/mypage/condition',
    name: 'mypagecondition',
    component: Condition
  },
  {
    path: '/mypage/notice',
    name: 'mypagenotice',
    component: AnnouncementView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
