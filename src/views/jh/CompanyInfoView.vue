<template>
  <!--업체 소개페이지-->

  <AppHeader />
  <!--헤더-->
  <div class="wrap">
    <div class="companyInfoBox">
      <h2>업체소개</h2>
      <!--업체소개글-->
      <div class="companyInfo">
        <div class="companyInfotitle">
          <h2 class="companyTitle">{{ this.ci.companyName }}</h2>
          <div class="comapnyContent">
            <img class="companyImg" v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${ci.companyImage}`" alt="" />
            <img class="comapnyImg2" :src="img" alt="" v-on:click="change">
            <div class="infContent">
              <div class="InfoTitle">
                <p>연락처</p>
                <p>주소</p>
                <p>업체설명</p>
              </div>
              <div class="infoContent">
                <p>{{ this.ci.companyHp }}</p>
                <p>{{ this.ci.companyAddress }}</p>
                <p>
                  {{ this.ci.companyIntro }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--클래스별 통계-->
      <div class="companyClass">
        <p>업체의 클래스</p>
        <div class="classInfoTotalBox" v-for="(c, i) in ci2" v-bind:key="i">
          <div class="infoImg">
            <img v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${c.classImage}`" alt=""
              @click="goDetailPage(c.classNo)" />
            <img v-if="this.data == false"
              src="../../assets/images/다운로드.svg"
              alt="" v-on:click="ch"/>
            <img v-else-if="this.data == true"
              src="../../assets/images/다운로드 (1).svg"
              alt="" v-on:click="ch"/>
          </div>
          <div class="flexBox">
            <div class="infoContentBox">
              <div class="">
                <p class="infoName">{{ c.className }}</p>
                <p class="infoIntro">{{ c.classIntro }}</p>
              </div>
              <div class="infoClassStar">
                <span>★</span>
                <p class="infoReview">{{ c.reviewPoint }}</p>
                <p class="infoReview">{{ c.reviewCount }}개의 평점</p>
              </div>
            </div>
            <div class="classStarChart">
              <canvas :id="'chart-' + i" ref="charts" width="320px" height="200px" />
            </div>
          </div>
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
import "@/assets/css/jh/companyinfo.css";
import "@/assets/css/Initialization.css";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      ci: {
        companyName: '',
        companyHp: '',
        companyAddress: '',
        companyIntro: '',
        companyImage: ''
      },
      ci2: [],
      data: false,
      img: "data:image/svg+xml,%3Csvg width='35' height='35' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2517_457)'%3E %3Cpath d='M15.4448 27.0641L15.4368 27.0593L15.4064 27.0433C14.775 26.6998 14.1549 26.3359 13.5472 25.9521C12.0981 25.0404 10.7174 24.0243 9.41595 22.9121C6.47195 20.3729 3.19995 16.5633 3.19995 12.0001C3.20009 10.5112 3.66179 9.05903 4.52147 7.84344C5.38115 6.62785 6.59654 5.70866 8.00027 5.21244C9.40401 4.71622 10.9271 4.66737 12.3597 5.07263C13.7924 5.47788 15.0641 6.31729 16 7.4753C16.9358 6.31729 18.2075 5.47788 19.6402 5.07263C21.0728 4.66737 22.5959 4.71622 23.9996 5.21244C25.4034 5.70866 26.6187 6.62785 27.4784 7.84344C28.3381 9.05903 28.7998 10.5112 28.8 12.0001C28.8 16.5633 25.5296 20.3729 22.584 22.9121C20.7349 24.492 18.7274 25.8764 16.5936 27.0433L16.5632 27.0593L16.5552 27.0641H16.552C16.3819 27.1542 16.1925 27.2014 16.0001 27.2017C15.8078 27.2019 15.6182 27.1553 15.448 27.0657L15.4448 27.0641Z' fill='%23FD2748'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2517_457'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E"
    };
  },
  mounted() {
    //this.createCharts();
  },
  methods: {
    ch(){
      this.data = !this.data
    },
    change() {
      if (this.img == "data:image/svg+xml,%3Csvg width='35' height='35' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2517_457)'%3E %3Cpath d='M15.4448 27.0641L15.4368 27.0593L15.4064 27.0433C14.775 26.6998 14.1549 26.3359 13.5472 25.9521C12.0981 25.0404 10.7174 24.0243 9.41595 22.9121C6.47195 20.3729 3.19995 16.5633 3.19995 12.0001C3.20009 10.5112 3.66179 9.05903 4.52147 7.84344C5.38115 6.62785 6.59654 5.70866 8.00027 5.21244C9.40401 4.71622 10.9271 4.66737 12.3597 5.07263C13.7924 5.47788 15.0641 6.31729 16 7.4753C16.9358 6.31729 18.2075 5.47788 19.6402 5.07263C21.0728 4.66737 22.5959 4.71622 23.9996 5.21244C25.4034 5.70866 26.6187 6.62785 27.4784 7.84344C28.3381 9.05903 28.7998 10.5112 28.8 12.0001C28.8 16.5633 25.5296 20.3729 22.584 22.9121C20.7349 24.492 18.7274 25.8764 16.5936 27.0433L16.5632 27.0593L16.5552 27.0641H16.552C16.3819 27.1542 16.1925 27.2014 16.0001 27.2017C15.8078 27.2019 15.6182 27.1553 15.448 27.0657L15.4448 27.0641Z' fill='%23FD2748'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2517_457'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E") {
        console.log("실행");
        this.img = "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2514_433)'%3E %3Cmask id='mask0_2514_433' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='0' y='0' width='32' height='32'%3E %3Cpath d='M32 0H0V32H32V0Z' fill='white'/%3E %3C/mask%3E %3Cg mask='url(%23mask0_2514_433)'%3E %3Cmask id='mask1_2514_433' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='0' y='0' width='32' height='32'%3E %3Cpath d='M32 0H0V32H32V0Z' fill='white'/%3E %3C/mask%3E %3Cg mask='url(%23mask1_2514_433)'%3E %3Cpath d='M28 12C28 16.1889 24.9781 19.7916 22.063 22.3047C20.2579 23.8469 18.2982 25.1986 16.2154 26.3381C16.2027 26.3441 16.1898 26.3505 16.1774 26.357C16.1226 26.3861 16.0613 26.4013 15.999 26.4015C15.9401 26.4015 15.882 26.3881 15.8293 26.362L15.8094 26.3511L15.784 26.3378C15.1694 26.0033 14.5659 25.649 13.9743 25.2754C12.5586 24.3847 11.2086 23.3914 9.93704 22.3049C7.02334 19.7914 4.00003 16.1887 4 12C4.00014 10.6766 4.41054 9.38568 5.17469 8.30517C5.93885 7.22466 7.01918 6.4076 8.26696 5.96651C9.51472 5.52542 10.8685 5.482 12.142 5.84222C13.4155 6.20245 14.546 6.94859 15.3778 7.97794C15.5297 8.16589 15.7584 8.2751 16 8.2751C16.2416 8.2751 16.4704 8.16589 16.6222 7.97794C17.4541 6.94859 18.5845 6.20245 19.8579 5.84222C21.1315 5.482 22.4853 5.52542 23.7331 5.96651C24.9808 6.4076 26.0611 7.22466 26.8253 8.30517C27.5894 9.38568 27.9998 10.6766 28 12Z' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E %3C/g%3E %3C/g%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2514_433'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E";
      } else {
        console.log("실패")
        this.img = "data:image/svg+xml,%3Csvg width='35' height='35' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2517_457)'%3E %3Cpath d='M15.4448 27.0641L15.4368 27.0593L15.4064 27.0433C14.775 26.6998 14.1549 26.3359 13.5472 25.9521C12.0981 25.0404 10.7174 24.0243 9.41595 22.9121C6.47195 20.3729 3.19995 16.5633 3.19995 12.0001C3.20009 10.5112 3.66179 9.05903 4.52147 7.84344C5.38115 6.62785 6.59654 5.70866 8.00027 5.21244C9.40401 4.71622 10.9271 4.66737 12.3597 5.07263C13.7924 5.47788 15.0641 6.31729 16 7.4753C16.9358 6.31729 18.2075 5.47788 19.6402 5.07263C21.0728 4.66737 22.5959 4.71622 23.9996 5.21244C25.4034 5.70866 26.6187 6.62785 27.4784 7.84344C28.3381 9.05903 28.7998 10.5112 28.8 12.0001C28.8 16.5633 25.5296 20.3729 22.584 22.9121C20.7349 24.492 18.7274 25.8764 16.5936 27.0433L16.5632 27.0593L16.5552 27.0641H16.552C16.3819 27.1542 16.1925 27.2014 16.0001 27.2017C15.8078 27.2019 15.6182 27.1553 15.448 27.0657L15.4448 27.0641Z' fill='%23FD2748'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2517_457'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E"
      }
    },
    goDetailPage(a) {
      // 경로를 직접 구성합니다.
      this.$router.push("/classdetailpage/" + a);
    },
    createCharts() {
      // 각 차트를 생성
      this.ci2.forEach((classData, index) => {
        const chartData = {
          type: 'bar',
          data: {
            labels: ['수업이 좋아요', '시설이 좋아요', '비용이 좋아요'], // 예시 데이터
            datasets: [
              {
                label: `Chart ${index + 1}`,
                data: [classData.q1, classData.q2, classData.q3], // ci2의 차트 데이터를 사용
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: false,
            plugins: {
              datalabels: {
                display: true,
                color: 'black',
              },
            },
          },
        };

        // 차트 생성
        new Chart(this.$refs.charts[index], {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      });
    },
    list() {
      axios({
        method: 'get', // put, post, delete 
        url: `${this.$store.state.apiBaseUrl}/odo/companyinfo/${this.$route.params.no}`,
        headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        //data: this.$store.state.authUser.userNo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
        responseType: 'json' //수신타입
      }).then(response => {
        console.log(response); //수신데이타
        this.ci = response.data.ci;
        this.ci2 = response.data.ci2;
        this.$nextTick(() => {
          this.createCharts();
        });
        console.log(this.ci2);
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
