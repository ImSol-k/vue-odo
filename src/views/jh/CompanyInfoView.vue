<template><!--업체 소개페이지-->

	<AppHeader />
	<!--헤더-->
	<div class="wrap">


		<!--업체소개글-->
		<div class="cover5">
			<div class="clearfix">
				<div class="a">
					<img class="img" src="../../assets/images/hs/main_slide_2.jpg" alt="">
				</div>
				<div class="cover8">
					<div class="cover7">
						<p class="companyname">업체명</p>
						<img class="img5"
							src="data:image/svg+xml,%3Csvg width='35' height='35' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2517_457)'%3E %3Cpath d='M15.4448 27.0641L15.4368 27.0593L15.4064 27.0433C14.775 26.6998 14.1549 26.3359 13.5472 25.9521C12.0981 25.0404 10.7174 24.0243 9.41595 22.9121C6.47195 20.3729 3.19995 16.5633 3.19995 12.0001C3.20009 10.5112 3.66179 9.05903 4.52147 7.84344C5.38115 6.62785 6.59654 5.70866 8.00027 5.21244C9.40401 4.71622 10.9271 4.66737 12.3597 5.07263C13.7924 5.47788 15.0641 6.31729 16 7.4753C16.9358 6.31729 18.2075 5.47788 19.6402 5.07263C21.0728 4.66737 22.5959 4.71622 23.9996 5.21244C25.4034 5.70866 26.6187 6.62785 27.4784 7.84344C28.3381 9.05903 28.7998 10.5112 28.8 12.0001C28.8 16.5633 25.5296 20.3729 22.584 22.9121C20.7349 24.492 18.7274 25.8764 16.5936 27.0433L16.5632 27.0593L16.5552 27.0641H16.552C16.3819 27.1542 16.1925 27.2014 16.0001 27.2017C15.8078 27.2019 15.6182 27.1553 15.448 27.0657L15.4448 27.0641Z' fill='%23FD2748'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2517_457'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E"
							alt="">
					</div>
					<p class="p38"><strong>클래스</strong> 00 | <strong>찜</strong> 00</p>
					<p class="p38"><strong>연락처</strong> 010-9999-9999</p>
					<p class="p38"><strong>주소</strong> 서울특별시 강남구 하이미디어</p>
				</div>
			</div>
			<div>
				<p class="companypro">잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어</p>
			</div>
		</div>
		<!--클래스별 통계-->
		<div>
			<p class="p37">업체의 클래스</p>
			<div class="clearfix cover6" v-for="(chartData, index) in chartDataArray" :key="index">
				<div class="cover1">
					<img class="img2" src="../../assets/images/hs/main_slide_2.jpg" alt="">
					<img class="img6"
						src="data:image/svg+xml,%3Csvg width='35' height='35' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2517_457)'%3E %3Cpath d='M15.4448 27.0641L15.4368 27.0593L15.4064 27.0433C14.775 26.6998 14.1549 26.3359 13.5472 25.9521C12.0981 25.0404 10.7174 24.0243 9.41595 22.9121C6.47195 20.3729 3.19995 16.5633 3.19995 12.0001C3.20009 10.5112 3.66179 9.05903 4.52147 7.84344C5.38115 6.62785 6.59654 5.70866 8.00027 5.21244C9.40401 4.71622 10.9271 4.66737 12.3597 5.07263C13.7924 5.47788 15.0641 6.31729 16 7.4753C16.9358 6.31729 18.2075 5.47788 19.6402 5.07263C21.0728 4.66737 22.5959 4.71622 23.9996 5.21244C25.4034 5.70866 26.6187 6.62785 27.4784 7.84344C28.3381 9.05903 28.7998 10.5112 28.8 12.0001C28.8 16.5633 25.5296 20.3729 22.584 22.9121C20.7349 24.492 18.7274 25.8764 16.5936 27.0433L16.5632 27.0593L16.5552 27.0641H16.552C16.3819 27.1542 16.1925 27.2014 16.0001 27.2017C15.8078 27.2019 15.6182 27.1553 15.448 27.0657L15.4448 27.0641Z' fill='%23FD2748'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2517_457'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E"
						alt="">
				</div>

				<div class="cover2">
					<div class="cover4">
						<div>
							<p class="cover4 text1">클래스명</p><br>
							<p class="text22">클래스 소개글</p>
							<p class="text3">99개의 평점</p>
							<img class="img3" src="../../assets/images/icon/ss/star.png" alt="">
							<p class="text2">3.88</p>

						</div>

					</div>
					<div class="char2">
						<canvas :id="'chart-' + index" ref="charts" width="400px" height="220px" />
					</div>
				</div>
			</div>
		</div>

	</div>
	<AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import '@/assets/css/jh/jh.css'
import '@/assets/css/Initialization.css'

import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

export default {
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			//차트배열
			chartDataArray: [
				{//차트데이터 하나의데이터로 묶기{}
					type: 'bar',
					data: {
						labels: ['Red', 'Blue', 'Yellow', 'Green'],
						datasets: [{
							label: 'Chart 1',
							data: [12, 19, 3, 5],
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
						}]
					},
					options: {
						responsive: false,
						plugins: {
							datalabels: {
								display: true,
								color: 'black'
							}
						}
					}
				},
				{
					type: 'bar',
					data: {
						labels: ['Red', 'Blue', 'Yellow', 'Green'],
						datasets: [{
							label: 'Chart 1',
							data: [12, 19, 3, 5],
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
						}]
					},
					options: {
						responsive: false,
						plugins: {
							datalabels: {
								display: true,
								color: 'black'
							}
						}
					}
				},
			]
		};
	},
	mounted() {
		this.createCharts();
	},
	methods: {
		createCharts() {
			console.log("차트반복문");
			// 각 차트를 생성
			this.chartDataArray.forEach((chartData, i) => {
				new Chart(this.$refs.charts[i], {
					type: chartData.type,
					data: chartData.data,
					options: chartData.options
				});
			});
		}
	},
	created() {

	}
};
</script>

<style></style>