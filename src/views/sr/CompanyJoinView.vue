<template>
	<AppHeader/>
	<div class="wrap">
		
		<div class="companyJoinTitle">
			<h1>사업자 가입</h1>
			<div class="companyJoinImg">
				<img src="@/assets/images/icon/man_icon.png" alt="">
				<div>
					<p>프로필사진</p>
					<input type="file" name="" id="">
				</div>
				
			</div><!--companyJoinImg-->
			<div class="companyJoinInfo">
				<div>
					<!-- <label for="companyNo">사업자번호</label> -->
					<input type="text" name="" id="companyNo" placeholder="사업자번호">
					<input type="button" value="사업자 인증">
				</div>
				<div>
					<!-- <label for="companyName">업체명</label> -->
					<input type="text" name="" id="companyName" placeholder="업체명">
				</div>
				<div>
					
					<!-- <label for="companyId">아이디</label> -->
					<input type="text" name="" id="companyId" placeholder="아이디">
					<input type="button" value="중복확인">
					<p>✅사용 가능한 아이디입니다.</p>
					<p>❌사용중인 아이디입니다.</p>
				</div>
				<div>
					<!-- <label for="companyPass">비밀번호</label> -->
					<input type="text" name="" id="companyPass" placeholder="비밀번호">
				</div>
				<div>
					<!-- <label for="companyPassChack">비밀번호확인</label> -->
					<input type="text" name="" id="companyPassChack" placeholder="비밀번호확인">
					<p>✅비밀번호 일치</p>
					<p>❌비밀번호가 일치하지 않습니다.</p>
				</div>
				<div class="companyAddress">
					<input type="text" id="sample6_postcode" placeholder="우편번호">
					<input type="button" onclick="sample6_execDaumPostcode()" value="주소검색">
					<input type="text" id="sample6_address" placeholder="주소">
					<input type="text" id="sample6_detailAddress" placeholder="상세주소">
				</div>
				<div>
					<!-- <label for="companyPassChack">비밀번호확인</label> -->
					<input type="text" name="" id="companyPassChack" placeholder="대표 핸드폰번호">
					<input type="button" value="번호인증">
					<div class="companyHpChack">
						<input type="text" name="" id="companyPassChack" placeholder="인증번호">
						<input type="button" value="확인">
						<p>✅인증이 완료되었습니다.</p>
						<p>❌인증번호가 일치하지 않습니다.</p>
					</div>
				</div>
			</div>
			<div class="companyJoinButton">
				<button>취소</button>
				<button>가입</button>
			</div>
				
			
		</div><!--companyJoinTitle-->
		<!-- <AppFooter/> -->
	</div>
	<AppFooter/>
</template>
<script>
import '@/assets/css/Initialization.css'
import '@/assets/css/sr/company.css'
import "@/assets/css/hs/main.css"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue";


	export default {
		name: "CompanyJoinView",
		components: { AppHeader,AppFooter },
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>