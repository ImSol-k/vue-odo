<template>
  <AppHeader />
  <div class="wrap">
    <div class="paymentEndBox">
      <h1>결제가 완료되었습니다</h1>
      <table class="pamentTable">
        <tbody>
          <tr>
            <td rowspan="7">
              <img src="../../assets/images/hs/main_slide_3.jpg" alt="" />
            </td>
            <th>업체명</th>
            <td>삼송</td>
          </tr>
          <tr>
            <th>클래스명</th>
            <td>반도체 체험</td>
          </tr>
          <tr>
            <th>일시</th>
            <td>2024-05-13 10:00</td>
          </tr>
          <tr>
            <th>예약자</th>
            <td>김소리</td>
          </tr>
          <tr>
            <th>결제방법</th>
            <td colspan="2">네이버페이</td>
          </tr>
          <tr>
            <th>할인금액</th>
            <td colspan="2">{{ Number(5000).toLocaleString("ko-KR") }}</td>
          </tr>
          <tr>
            <th>총결제금액</th>
            <td colspan="2">{{ Number(100000).toLocaleString("ko-KR") }}</td>
          </tr>
        </tbody>
      </table>

      <div class="payendButtonBox">
        <button>결제내역 보러가기</button>
        <button>홈으로</button>
      </div>

      <div class="paymentClassList">
        <h3>이런 클래스도 있어요</h3>
      </div>
      <div class="paymentClassBox">
        <div class="cover64" v-for="(v, i) in a" :key="i">
          <div class="box-img">
            <img src="../../assets/images/hs/main_slide_2.jpg" alt="" />
          </div>
          <p class="pp1">지역</p>
          <p class="pp2">
            설명설명설명설명설명설명설명설명설명설명설명설설명설명설명설설명설명설명설명
          </p>
          <div class="rb">
            <span class="sp">★★★★★</span>
            <span>후기 123</span>
          </div>
          <p class="cp">무료</p>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/jh/jh.css";
import "@/assets/css/Initialization.css";

export default {
  name: "PaymentEndView",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      a: 4,
    };
  },
  methods: {},
  created() {},
};
</script>

<style></style>
