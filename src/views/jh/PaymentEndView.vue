<template>
  <AppHeader />
  <div class="wrap">
    <div class="paymentEndBox">
      <h1>결제가 완료되었습니다</h1>
      <h2>예약자: <span>{{pv.nickname}}</span></h2>
      <table class="pamentTable">
        <tbody>
          <tr>
            <td rowspan="7">
              <img v-if="pv.classImage != ''" :src="`${this.$store.state.apiBaseUrl}/upload/${pv.classImage}`" alt="" />
            </td>
            <th>업체명</th>
            <td class="paymentP">{{ pv.companyName }}</td>
          </tr>
          <tr>
            <th>클래스명</th>
            <td class="paymentP">{{pv.className}}</td>
          </tr>
          <tr>
            <th>일시</th>
            <td class="paymentP" v-if="pv.endDate == null">{{pv.startDate}}</td>
            <td class="paymentP" v-else>{{pv.startDate}} ~ {{ pv.endDate }}</td>
          </tr>
          <tr>
            <th>결제방법</th>
            <td class="paymentP">{{pv.payType}}</td>
          </tr>
          <tr>
            <th>할인금액</th>
            <td class="paymentP">{{ Number(pv.couponPrice).toLocaleString("ko-KR") }} 원</td>
          </tr>
          <tr>
            <th>총결제금액</th>
            <td class="paymentP">{{ Number(pv.payPirce).toLocaleString("ko-KR") }} 원</td>
          </tr>
        </tbody>
      </table>

      <div class="payendButtonBox">
        <button><router-link to="/mypage/pay">결제내역 보러가기</router-link></button>
        <button><router-link to="/">홈으로</router-link></button>
      </div>

      <div class="paymentClassList">
        <h3>이런 클래스도 있어요</h3>
      </div>
      <div class="paymentClassBox">
        <div class="paymentClass" v-for="i in rList" :key="i">
          <img class="paymentEndImage" v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${i.classImage}`" alt="" />
          <p class="paymentEndAddress">{{ i.classAddress }}</p>
          <p class="paymentEndName">{{ i.className }}</p>
          <p class="paymentEndIntro">
            {{ i.classIntro }}
          </p>
          <div class="paymentClassStar">
            <span class="paymentStar" v-for="(i) in 5" :key="i">★</span>
            <span>후기 {{i.reviewCount}}</span>
          </div>
          <p>무료</p>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import axios from 'axios';

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/jh/jh.css";
import "@/assets/css/Initialization.css";
import "@/assets/css/jh/payment.css"

export default {
  name: "PaymentEndView",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      a: 4,
      pv: {
        classImage: '',
        className: '',
        companyName: '',
        couponPrice: 0,
        endDate: '',
        startDate: '',
        nickname: '',
        payPirce: 0,
        payType: ''
      },
      rList: []
    };
  },
  methods: {
    list(){
      console.log("시작");
      axios({
        method: 'get', // put, post, delete 
        url: `${this.$store.state.apiBaseUrl}/odo/payend/${this.$route.params.no}`,
        headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        //data: this.$store.state.authUser.userNo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
        responseType: 'json' //수신타입
      }).then(response => {
        console.log(response); //수신데이타
        this.pv = response.data.apiData.pv;
        this.rList = response.data.apiData.rList;
        console.log(this.pv);
        console.log(this.rList);
      }).catch(error => {
        console.log(error);
      });
    }
  },
  created() {
    this.list();
  },
};
</script>

<style></style>
