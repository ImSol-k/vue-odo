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
            <span
              v-on:click.prevent="selectClass(1)"
              :class="{ classChack: isClass == 1 }"
              >원데이</span>
            <span
              v-on:click.prevent="selectClass(2)"
              :class="{ classChack: isClass == 2 }"
              >정규/상시</span>
          </div>
          
          <div v-if="isClass == 1">
            <div class="right">
                <img src="@/assets/images/icon/header_icons/like.png">
                <span>인기가 많은 클래스</span>
            </div>
            <div class="right">
                <img src="@/assets/images/icon/header_icons/like.png">
                <span>인기가 많은 클래스</span>
            </div>
            <div class="right">
                <img src="@/assets/images/icon/header_icons/like.png">
                <span>인기가 많은 클래스</span>
            </div>
            <div class="right">
                <img src="@/assets/images/icon/header_icons/like.png">
                <span>인기가 많은 클래스</span>
            </div>
            <div class="right">
                <img src="@/assets/images/icon/header_icons/like.png">
                <span>인기가 많은 클래스</span>
            </div>
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
            <div class="right">
                <img src="@/assets/images/icon/header_icons/like.png">
                <span>정규 인기가 많은 클래스</span>
            </div>
            <div class="right">
                <img src="@/assets/images/icon/header_icons/like.png">
                <span>정규 인기가 많은 클래스</span>
            </div>
            <div class="right">
                <img src="@/assets/images/icon/header_icons/like.png">
                <span>정규 인기가 많은 클래스</span>
            </div>
            <div class="right">
                <img src="@/assets/images/icon/header_icons/like.png">
                <span>정규 인기가 많은 클래스</span>
            </div>
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
    };
  },
  methods: {
    selectClass(num) {
      if (num == 1) {
        this.isClass = 1;
      } else if(num == 2) {
        this.isClass = 2;
      }
    }
  },
	created(){},
  mounted() {
    const labels = [
      '24년 1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '24년 6월',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: '원데이',
        data: [30, 35, 45, 50, 60, 75],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2
      },
      {
        label: '정규/상시',
        data:[30, 45, 50, 65, 70, 80],
        fill:false,
        borderColor: 'rgb(30, 200, 120)',
        tension: 0.2
      }
    ],
    };
    const config = {
      type: 'line',
      data: data,
    };
    new Chart(
      document.getElementById('LineChart'),
      config
    );
  },
	};
</script>

<style>

</style>
