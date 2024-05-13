<template>
	<AppHeader />
	<div class="wrap">

		<div class="cover60">
			<h1>결제가 완료되었습니다</h1>
		</div>

		<div>
			<table class="cover61" border="1px solid #000000">
				<tbody>
					<tr>
						<td rowspan="3" width="380px" height="380px"><img src="../../assets/images/회사이미지.png" alt=""></td>
						<td width="200px" class="td60">업체명</td>
						<td width="560px" class="td61">삼송</td>
					</tr>
					<tr>
						<td class="td60">클래스명</td>
						<td class="td61">반도체 체험</td>
					</tr>
					<tr>
						<td class="td60">일시</td>
						<td class="td61">2024-05-13 10:00</td>
					</tr>
					<tr>
						<td class="td60">결제방법</td>
						<td colspan="2" class="td62">네이버페이</td>
					</tr>
					<tr>
						<td class="td60">결제금액</td>
						<td colspan="2" class="td62 td63">{{ Number(100000).toLocaleString('ko-KR') }}</td>
					</tr>
				</tbody>

			</table>

			<div class="cover62">
				<a class="a60" href="">결제내역</a>
			</div>

			<div class="cover63">
				<h3>이런 클래스도 있어요</h3>
			</div>
			<div class="clearfix">
				<div class="cover64" v-for="(v, i) in a" :key="i">
					<div>
						<img class="img60" src="../../assets/images/회사이미지.png" alt="">
					</div>
					<p>지역이름</p>
					<p class="p30">설명~설명~설명~설명~설명~설명~설명~설명~설명~설설명~설명~설명~설명~설명~설명~설명~설명~설명~설</p>
					<p>무료</p>
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

export default {
	name: "PaymentEndView",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			a : 4,
		};
	},
	methods: {},
	created() { }
};
</script>

<style></style>