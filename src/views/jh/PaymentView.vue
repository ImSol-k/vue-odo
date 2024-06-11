<template>
  <!--업체 소개페이지-->

  <!--헤더-->

  <AppHeader />
  <div class="wrap">
    <div class="paymentBoxAll">
      <p>결제/예약 하기</p>
      <div class="paymentBox">
        <div class="paymentClassBox clearfix">
          <img v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${this.pv.classImage}`" alt="" />
          <div class="paymentTitle">
            <p>{{ this.pv.className }}</p>
            <p class="paymentTitle-2nd">{{ this.pv.classIntro }}</p>
            <p class="paymentTitle-name">{{ this.pv.companyName }}</p>
            <div v-if="this.pv.endDate == null" class="paymentTitle">
              <p>날짜: <span>{{ this.pv.startDate }}</span></p>
            </div>
            <div v-else class="paymentTitle">
              <p>날짜: <span>{{ this.pv.startDate }}</span> ~ <span>{{ this.pv.endDate }}</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="paymentContentBox">
        <p>결제수단</p>
        <form action="">
          <ul class="paymentType">
            <li>
              <div>
                <input type="radio" style="width: 15px; border: 1px" name="pay" v-bind:value="'신용카드'"
                  v-model="paymenType" checked="checked" />
                <label>신용카드</label>
              </div>
            </li>
            <li>
              <input type="radio" style="width: 15px; border: 1px" name="pay" v-bind:value="'naver'"
                v-model="paymenType" />
              <label>네이버페이</label>
            </li>
            <li>
              <input type="radio" style="width: 15px; border: 1px" name="pay" v-bind:value="'toss'"
                v-model="paymenType" />
              <label>토스페이</label>
            </li>
            <li>
              <input type="radio" style="width: 15px; border: 1px" name="pay" v-bind:value="'휴대폰'"
                v-model="paymenType" />
              <label>휴대폰결제</label>
            </li>
          </ul>
          <div class="paymentCoupon">
            <div>
              <div class="couponSelect">
                <p>쿠폰</p>
                <button v-on:click.prevent="listup">선택</button>
              </div>
              <p v-if="a == '사용안함'">{{ this.a }}</p>
              <p v-else>{{ Number(this.pv.classPrice * this.a / 100).toLocaleString("ko-KR") }}원 할인</p>
            </div>
            <div>
              <p class="couponText" v-if="this.couponList.length > 0">{{ this.couponList.length }}개의 사용 가능한 쿠폰이 있습니다
              </p>
              <p class="couponText" v-else>사용가능한 쿠폰이 없습니다</p>
            </div>
          </div>
        </form>
      </div>
      <div class="paymentPay">
        <div class="paymentContent">
          <p>결제금액</p>
          <p>쿠폰사용금액</p>
          <p>총결제금액</p>
        </div>
        <div class="paymentResult">
          <p>{{ Number(this.pv.classPrice).toLocaleString("ko-KR") }}원</p>
          <p v-if="a > 0">
            {{ this.a }}%({{ Number(this.pv.classPrice * this.a / 100).toLocaleString("ko-KR") }}원)
          </p>
          <p v-if="a == '사용안함'">{{ this.a }}</p>
          <p v-if="a != '사용안함'">{{ Number(this.pv.classPrice - this.pv.classPrice * this.a /
            100).toLocaleString("ko-KR") }}
            <span>원</span>
          </p>
          <p v-else>{{ Number(this.pv.classPrice).toLocaleString("ko-KR") }}원</p>
        </div>
      </div>
      <div class="pamentButtonBox">
        <button><router-link to="/">취소</router-link></button>
        <button v-on:click="pay">결제하기</button>
      </div>
    </div>
  </div>

  <div id="addModal">
    <div class="modal-content2">
      <form action="">
        <p class="closeBtn" v-on:click="close">x</p>
        <div class="radio">
        <label for="none">사용안함</label>
        <input  id="none" type="radio" name="coupon" value="사용안함" v-model="a" checked="checked"
          v-on:click="couponNo0" /><br><br>
        </div>
        <div class="radio" v-for="(coupon, i) in couponList" v-bind:key="i">
          <label :for="'coupon_' + i">{{ coupon.coupon_price }}% 할인</label>
          <input :id="'coupon_' + i" type="radio" name="coupon" :value="coupon.coupon_price" v-model="a"
            @click="couponNo(coupon.coupon_no)" /><br><br>
        </div>
        <button v-on:click.prevent="close2">적용하기</button>
      </form>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import axios from 'axios';

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/jh/payment.css";
import "@/assets/css/Initialization.css";
import Swal from 'sweetalert2';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      a: "사용안함",
      paymenType: "신용카드",
      pv: {
        classIntro: '',
        className: '',
        classPrice: '',
        companyName: '',
        companyNo: '',
        endDate: '',
        startDate: '',
        classImage: ''
      },
      couponList: [],
      total: '',
      payVo: {
        scheduleNo: '',
        payType: '',
        total: '',
        couponNo: ''
      }
    };
  },
  mounted() { },
  methods: {
    listup() {

      let viewModal = document.querySelector("#addModal");

      viewModal.style.display = "block";
    },
    close() {
      let viewModal = document.querySelector("#addModal");

      viewModal.style.display = "none";
    },
    close2() {
      let viewModal = document.querySelector("#addModal");

      viewModal.style.display = "none";
    },
    payType(type) {
      if (type == "신용카드") {
        this.paymenType = "신용카드";
      } else if (type == "naver") {
        this.paymenType = "naver";
      } else if (type == "toss") {
        this.paymenType = "toss";
      } else if (type == "휴대폰") {
        this.paymenType = "휴대폰";
      }
    },
    list() {
      axios({
        method: 'get', // put, post, delete 
        url: `${this.$store.state.apiBaseUrl}/odo/payment/${this.$route.params.no}`,
        headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        //data: this.$store.state.authUser.userNo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
        responseType: 'json' //수신타입
      }).then(response => {
        if (response.data.message == "fail") {
          Swal.fire({
            title: "불러오기에 실패했습니다",
            html:
              "다시 시도해주세요"
          });
          this.$store.commit('setAuthUser', '');
          this.$store.commit('setToken', '');
          this.$router.push('/');

        } else {
          this.pv = response.data.apiData.pv;
          this.couponList = response.data.apiData.couponList;
    
        }
      }).catch(error => {
        console.log(error);
      });
    },
    pay() {
    
      if (this.a == "사용안함") {
        this.total = this.pv.classPrice
      } else {
        this.total = this.pv.classPrice - this.pv.classPrice * this.a / 100
      }
      this.payVo.scheduleNo = `${this.$route.params.no}`;
      this.payVo.payType = this.paymenType;
      this.payVo.total = this.total;
      this.payVo.couponNo = this.$store.state.couponNo;
      axios({
        method: 'put', // put, post, delete 
        url: `${this.$store.state.apiBaseUrl}/odo/pay`,
        headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        data: this.payVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
        responseType: 'json' //수신타입
      }).then(response => {
        if (response.data.apiData.message == "실패") {
          Swal.fire({
            title: "결제에 실패하였습니다",
            html:
              "다시 시도해주세요"
          });
          this.$store.commit('setAuthUser', '');
          this.$store.commit('setToken', '');
          this.$router.push('/login/user');
          window.location.reload(true);
        } else {
          this.$router.push('/paymentend/' + response.data.apiData.apiData);
        }

      }).catch(error => {
        console.log(error);
      });

    },
    couponNo(a) {
      this.$store.commit("setCouponNo", a);
    },
    couponNo0() {
      this.$store.commit("setCouponNo", 0);
    }
  },
  created() {
    this.list();
  },
};
</script>

<style></style>
