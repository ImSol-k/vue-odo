<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="chartArea">
        <!-- line chart -->
        <h2>매출</h2>
        <div>
          <canvas id="LineChart" width="400" height="400"></canvas>
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
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2
      },
      {
        label: '정규',
        data:[60, 65, 70, 65, 75, 80],
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
