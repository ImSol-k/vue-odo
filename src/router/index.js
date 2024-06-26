import { createRouter, createWebHistory } from 'vue-router'
//하석
import MainView from '../views/hs/MainView.vue'
import ClassDetailPageView from '../views/hs/ClassDetailPageView.vue'
import SearchResultPageView from '../views/hs/SearchResultPageView.vue'
import SearchResultPageView2 from '../views/hs/SearchResultPageView2.vue'
//소리
import CompanyJoinView from '../views/sr/CompanyJoinView.vue'
import CompanyPageView from '../views/sr/CompanyPageView.vue'
import MemberManagerView from '../views/sr/MemberManagerView.vue'
import ClassCalendarView from '../views/sr/ClassCalendarView.vue'
import ClassAddView from '../views/sr/ClassAddView.vue'
import ClassListView from '../views/sr/ClassListView.vue'
import CompanySelectView from '../views/sr/CompanySelectView.vue'
import TestView from '../views/sr/TestView.vue'
//재현
import CompanyInfoView from '../views/jh/CompanyInfoView.vue'
import CompanyInfoModify from '../views/jh/CompanyInfoModify.vue'
import WishListClass from '../views/jh/WishListClass.vue'
import WishListCompany from '../views/jh/WishListCompany.vue'
import PaymentView from '../views/jh/PaymentView.vue'
import PaymentEndView from '../views/jh/PaymentEndView.vue'
import Advertising from '../views/jh/Advertising.vue'
//승수
import MyPagePay from '../views/ss/MyPagePay.vue'
import MyPageCoupon from '../views/ss/MyPageCoupon.vue'
import LoginPage from '@/views/ss/LoginPage.vue'
import JoinPage from '@/views/ss/JoinPage.vue'
import ReviewPage from '@/views/ss/ReviewPage.vue'
import NaverLogin from '@/views/ss/NaverLogin.vue'
//미지
import ModifyView from '../views/mj/ModifyView.vue'
import Condition from '../views/mj/Condition.vue'
import AnnouncementView from '../views/mj/AnnouncementView.vue'
import ReadView from '../views/mj/readView.vue'
import WriteView from '../views/mj/WriteView.vue'
// import Noticemodify from '../views/mj/Noticemodify.vue'
import ChartView from '../views/mj/ChartView.vue'

const routes = [
  //=== 하석 =================================
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/classdetailpage/:classNo',
    name: 'classdetailpage',
    component: ClassDetailPageView
  },
  {
    path: '/searchresultpage/:no',
    name: 'searchresultpage',
    component: SearchResultPageView
  },
  {
    path: '/searchresultpage2/:no',
    name: 'searchresultpage2',
    component: SearchResultPageView2
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
    path: '/membermanager/:type/:no/:name/:cno',
    name: 'membermanager',
    component: MemberManagerView
  },
  {
    path: '/classcalender',
    name: 'classcalender',
    component: ClassCalendarView
  },
  {
    path: '/classadd/:isadd',
    name: 'classadd',
    component: ClassAddView
  },
  {
    path: '/classlist/:no',
    name: 'classlist',
    component: ClassListView
  },
  {
    path: '/companyselect',
    name: 'companyselect',
    component: CompanySelectView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  //=== 재현 =================================
  {
    path: '/advertising',
    name: 'advertising',
    component: Advertising
  },
  {
    path: '/companyinfo/:no',
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
    path: '/payment/:no',
    name: 'payment',
    component: PaymentView
  },
  {
    path: '/paymentend/:no',
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
    path: '/mypage/coupon',
    name: 'mypagecoupon',
    component: MyPageCoupon
  },
  {
    path: '/join',
    name: 'join',
    component: JoinPage
  },
  {
    path: '/login/:type',
    name : 'login',
    component : LoginPage
  },
  {
    path: '/reviewpage/:no',
    name : 'reviewpage',
    component : ReviewPage
  },
  {
    path : '/naverlogin',
    name : 'NaverLogin',
    component : NaverLogin
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
  {
    path: '/mypage/notice/:no',
    name: 'mypageread',
    component: ReadView
  },
  {
    path: '/mypage/notice/write',
    name: 'write',
    component: WriteView
  },
  {
    path: '/chart',
    name: 'chart',
    component: ChartView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //화면 이동 시 상단에서 시작하기
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
