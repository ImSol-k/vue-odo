<template>
  <AppHeader />
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
          <div class="right">
              <img src="@/assets/images/icon/header_icons/like.png">
              <span>글자 들어가는 자리</span>
          </div>
          <div class="right">
              <img src="@/assets/images/icon/header_icons/like.png">
              <span>글자 들어가는 자리</span>
          </div><div class="right">
              <img src="@/assets/images/icon/header_icons/like.png">
              <span>글자 들어가는 자리</span>
          </div>
          <div class="right">
              <img src="@/assets/images/icon/header_icons/like.png">
              <span>글자 들어가는 자리</span>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";
import "@/assets/css/mj/chart.css";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
		name: "ModifyView",
		components: {
			AppHeader,
			AppFooter,
			AppMenu
		},
		data() {
			return {};
	},
	methods: {},
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
        data: [40, 55, 65, 70, 65, 80],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2
      },
      {
        label: '정규/상시',
        data:[45, 55, 60, 65, 62, 85],
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

<style></style>
