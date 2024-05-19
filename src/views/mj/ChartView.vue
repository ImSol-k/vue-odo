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
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
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
