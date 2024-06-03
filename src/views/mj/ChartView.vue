<template>
  <HostAppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="chartArea ">
        <!-- line chart -->
        <div class="chart">
          <h2>매출</h2>
          <div class="left">
            <canvas id="LineChart" width="100" height="100"></canvas>
          </div>
        </div>
        <div class="list clearfix">
          <div class="whatClass">
            <span v-on:click.prevent="selectClass(1)" :class="{ classChack: isClass == 1 }">원데이</span>
            <span v-on:click.prevent="selectClass(2)" :class="{ classChack: isClass == 2 }">정규/상시</span>
          </div>

          <div v-if="isClass == 1">
            <div class="right">
              <img src="@/assets/images/icon/header_icons/like.png">
              <span>인기가 많은 클래스</span>
            </div>
          </div>

          <div v-else-if="isClass == 2">
            <div class="right">
              <img src="@/assets/images/icon/header_icons/like.png">
              <span>정규 인기가 많은 클래스</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import HostAppHeader from "@/components/HostAppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";
import "@/assets/css/mj/chart.css";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import axios from 'axios';

export default {
  name: "ModifyView",
  components: {
    HostAppHeader,
    AppFooter,
    AppMenu
  },
  data() {
    return {
      isClass: 1,
      chart: {
        onedayPrice: "",
        preRePrice: "",
        preonedayPrice: "",
        rePrice: ""
      },
      list: [],
      list1: []
    };
  },
  methods: {
    selectClass(num) {
      if (num == 1) {
        this.isClass = 1;
      } else if (num == 2) {
        this.isClass = 2;
      }
    },
    map() {
      axios({
        method: 'get', // put, post, delete                   
        url: `${this.$store.state.apiBaseUrl}/odo/chart`,
        headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

        responseType: 'json' //수신타입
      }).then(response => {
        console.log(response.data.chart); //수신데이타
        this.chart = response.data.chart;

        this.list = response.data.list;
        this.list1 = response.data.list1;

        console.log(this.chart);
        console.log(this.list);
        console.log(this.list1);

        new Chart(this.$refs.MyChart, {

          type: 'doughnut',
          data: {
            labels: ['지난달', '이번달', '총테이블', '총옷장'],
            datasets: [{
              dataIndex: true,
              display: true,
              data: [this.allbed, this.allshopa, this.alltable, this.allhanger],
              datalabels: {
                color: '#000000'
              },
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

              ],
              borderWidth: 1
            }],

          },

          options: {
            responsive: false,
            plugins: {
              datalabels: {
                color: '#000000'
              },
              title: {
                display: true,
                text: '총 판매비율'
              },
            }
          }
        })

      }).catch(error => {
        console.log(error);

      });
    },

  },
  created() {
    this.map();
  },


};
</script>

<style></style>
