<template><!--업체 소개페이지-->

	<AppHeader/>
	<!--헤더-->
	<div class="wrap">


		<!--업체소개글-->
		<div class="cover5">
			<div class="clearfix">
				<div class="a">
					<img class="img" src="../../assets/images/회사이미지.png" alt="" >
				</div>
				<div class="cover8">
					<div class="cover7">
						<p class="companyname">업체명</p>
						<button class="companybutton">업체 소개글 수정하기</button>
					</div>
					<p>클래스 00	|	찜 00</p>
				</div>
			</div>
			<div>
				<p class="companypro">잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어잘낫어</p>
			</div>
		</div>
		<!--클래스별 통계-->
		<div class="clearfix cover6" v-for="(chartData, index) in chartDataArray" :key="index">
			<div class="cover1">
				<img class="img2" src="../../assets/images/회사이미지.png" alt="">	
				<p class="classpro p31">클래스 소개글 샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라샬라</p>
			</div>

			<div class="cover2">
				<div class="cover4">
					<div>
						<p class="cover4 text1">이런점이 좋았어요</p><br>
						<img class="img3" src="../../assets/images/회사이미지.png" alt="">
						<p>3.88</p>
						<p>99개의 평점</p>

					</div>

				</div>
				<div>
					<canvas :id="'chart-' + index" ref="charts" />
				</div>
			</div>
		</div>

	</div>
	<AppFooter/>
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
	components:{
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
								color: 'white'
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
								color: 'white'
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
	created(){
		
	}
};
</script>

<style></style>