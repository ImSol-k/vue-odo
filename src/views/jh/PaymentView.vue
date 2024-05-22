<template>
  <!--업체 소개페이지-->

  <!--헤더-->

  <AppHeader />
  <div class="wrap">
    <div class="paymentBoxAll">
      <p>결제/예약 하기</p>
      <div class="paymentBox">
        <div class="paymentClassBox clearfix">
          <img src="../../assets/images/hs/main_slide_1.jpg" alt="" />
          <div class="paymentTitle">
            <p>클래스 정보</p>
            <p>와인 숙성시키기 클래스</p>
            <p>(주)OneDayOne</p>
            <p>날짜: <span>2024-05-10 20:00:00</span></p>
          </div>
        </div>
      </div>

      <div class="paymentContentBox">
        <p>결제수단</p>
        <form action="">
          <ul class="paymentType">
            <li>
              <div>
                <input
                  type="radio"
                  style="width: 15px; border: 1px"
                  name="pay"
                  v-bind:value="'card'"
                  checked="checked"
                />
                <label>신용카드</label>
              </div>
              <!-- <select name="" id="">
                <option value="" disabled selected>카드사 선택</option>
                <option value="">신한</option>
                <option value="">삼성</option>
                <option value="">하나</option>
                <option value="">비씨</option>
                <option value="">카카오</option>
              </select> -->
            </li>
            <li>
              <input
                type="radio"
                style="width: 15px; border: 1px"
                name="pay"
                v-bind:value="'naver'"
                checked="checked"
              />
              <label>네이버페이</label>
            </li>
            <li>
              <input
                type="radio"
                style="width: 15px; border: 1px"
                name="pay"
                v-bind:value="'toss'"
                checked="checked"
              />
              <label>토스페이</label>
            </li>
            <li>
              <input
                type="radio"
                style="width: 15px; border: 1px"
                name="pay"
                v-bind:value="'hp'"
                checked="checked"
              />
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
          <p>{{ Number(1000000).toLocaleString("ko-KR") }}원</p>
          <p v-if="a > 0">
            {{ Number(this.a).toLocaleString("ko-KR") }}
          </p>
          <p v-if="a == '사용안함'">{{ this.a }}</p>
          <p>{{ Number(500000).toLocaleString("ko-KR") }}</p>
        </div>
      </div>
      <div class="pamentButtonBox">
        <button>취소</button>
        <button>결제하기</button>
      </div>
    </div>
  </div>

  <!--모달창-->
  <div id="addModal">
    <div class="modal-content">
      <form action="">
        <p class="closeBtn" v-on:click="close">x</p>
        <label for="none">사용안함</label>
        <input
          id="none"
          type="radio"
          name="coupon"
          value="사용안함"
          v-model="a"
          checked="checked"
        />
        <label for="3000">3000원 할인</label>
        <input
          id="3000"
          type="radio"
          name="coupon"
          value="3000"
          v-model="a"
        /><br />
        <label for="5000">5000원 할인</label>
        <input
          id="5000"
          type="radio"
          name="coupon"
          value="5000"
          v-model="a"
        /><br />
        <button v-on:click.prevent="close2">적용하기</button>
      </form>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/jh/payment.css";
import "@/assets/css/Initialization.css";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      a: "사용안함",
      paymenType: "card",
    };
  },
  mounted() {},
  methods: {
    listup() {
      console.log("업");

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
      console.log(type);
      if (type == "card") {
        this.paymenType = "card";
      } else if (type == "naver") {
        this.paymenType = "naver";
      } else if (type == "toss") {
        this.paymenType = "toss";
      } else if (type == "hp") {
        this.paymenType = "toss";
      }
    },
  },
  created() {},
};
</script>

<style></style>
