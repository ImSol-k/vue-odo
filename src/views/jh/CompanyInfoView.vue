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
            <div class="infoImgBox">
              <img class="companyImg" v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${ci.companyImage}`" alt="" />
              
              <img v-if="this.ci.wishNo > 0" class="comapnyImg2" src="../../assets/images/redheart.svg" alt=""
                v-on:click="change(ci.wishNo)">
              <img v-else class="comapnyImg2" src="../../assets/images/whiteheart.svg" alt="" v-on:click="change(ci.wishNo)">
              
            </div>
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
            <img v-if="c.wishNo > 0" src="../../assets/images/redheart.svg" alt=""
              v-on:click="change2(c.wishNo, c.classNo, i)" />
            <img v-else-if="c.wishNo == 0" src="../../assets/images/whiteheart.svg" alt=""
              v-on:click="change2(c.wishNo, c.classNo, i)" />
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
//import Swal from 'sweetalert2';

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
      img2: "",
      img: ""
    };
  },
  mounted() {
    //this.createCharts();
  },
  methods: {
    change2(wishNo, classNo, i) { //클래스 위시 등록 삭제
      if (wishNo == 0) {
        axios({
          method: 'post', // put, post, delete 
          url: `${this.$store.state.apiBaseUrl}/odo/companyinfo/wishInsert`,
          headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
          //params: guestbookVo, //get방식 파라미터로 값이 전달
          data: classNo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
          responseType: 'json' //수신타입
        }).then(response => {
          console.log(response); //수신데이타
          this.ci2[i].wishNo = 1;

        }).catch(error => {
          console.log(error);
        });
      } else {

        axios({
          method: 'delete', // put, post, delete 
          url: `${this.$store.state.apiBaseUrl}/odo/companyinfo/wishDelete`,
          headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
          //params: guestbookVo, //get방식 파라미터로 값이 전달
          data: classNo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
          responseType: 'json' //수신타입
        }).then(response => {
          console.log(response); //수신데이타

          this.ci2[i].wishNo = 0;

        }).catch(error => {
          console.log(error);
        });
      }
    },
    change(no) {  //회사 위시 등록 삭제
      console.log(no)
      if(no > 0){
        axios({
          method: 'delete', // put, post, delete 
          url: `${this.$store.state.apiBaseUrl}/odo/companyinfo/wishDelete2`,
          headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
          //params: guestbookVo, //get방식 파라미터로 값이 전달
          data: no, //put, post, delete 방식 자동으로 JSON으로 변환 전달
          responseType: 'json' //수신타입
        }).then(response => {
          console.log(response); //수신데이타
          
          this.ci.wishNo = 0;

        }).catch(error => {
          console.log(error);
        });
      }else {
        axios({
          method: 'post', // put, post, delete 
          url: `${this.$store.state.apiBaseUrl}/odo/companyinfo/wishInsert2`,
          headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
          //params: guestbookVo, //get방식 파라미터로 값이 전달
          data: `${this.$route.params.no}`, //put, post, delete 방식 자동으로 JSON으로 변환 전달
          responseType: 'json' //수신타입
        }).then(response => {
          //console.log(response.data.apiData); //수신데이타

          this.ci.wishNo = response.data.apiData;

        }).catch(error => {
          console.log(error);
        });
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
