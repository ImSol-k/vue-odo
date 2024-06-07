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
            <canvas id="linechart" ref="MyChart" width="400px" height="500px"/>
          </div>
        </div>
        <div class="list clearfix">
          <span class="Ranking">인기 클래스</span>
          <div class="whatClass">
            <span v-on:click.prevent="selectClass(1)" :class="{ classChack: isClass == 1 }">원데이</span>
            <span v-on:click.prevent="selectClass(2)" :class="{ classChack: isClass == 2 }">정규/상시</span>
          </div>

          <div v-if="isClass == 1">
            <div class="right"  v-for="(a,i) in this.list" v-bind:key="i">
              <!-- <img src="@/assets/images/icon/header_icons/like.png"> -->
              <span  v-on:click="go(a.classNo)">{{ a.className }}</span>
            </div>
          </div>

          <div v-else-if="isClass == 2">
            <div class="right"  v-for="(a,i) in this.list1" v-bind:key="i">
              <!-- <img src="@/assets/images/icon/header_icons/like.png"> -->
              <span v-on:click="go(a.classNo)">{{ a.className }}</span>
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
    go(no){
      this.$router.push("/classdetailpage/" + no);
    },
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
        headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.cToken }, //전송타입
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

          //type: 'bar',
          data: {
        datasets: [{
            type: 'line',
            label: '원데이',
            data: [this.chart.preonedayPrice, this.chart.onedayPrice]
        }, {
            type: 'bar',
            label: '정규/상시',
            data: [this.chart.preRePrice, this.chart.rePrice],
        }],
        labels: ['지난달', '이번달']
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
