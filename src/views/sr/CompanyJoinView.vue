<template>
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
					<label for="companyNo">사업자번호</label>
					<input type="text" name="" id="companyNo">
					<button>사업자 인증</button>
				</div>
				<div>
					<label for="companyName">업체명</label>
					<input type="text" name="" id="companyName">
				</div>
				<div>
					
					<label for="companyId">아이디</label>
					<input type="text" name="" id="companyId">
					<button>중복확인</button>
					<p>✅사용 가능한 아이디입니다.</p>
				</div>
				<div>
					<label for="companyPass">비밀번호</label>
					<input type="text" name="" id="companyPass">
				</div>
				<div>
					<label for="companyPassChack">비밀번호확인</label>
					<input type="text" name="" id="companyPassChack">
					<p>❌비밀번호가 일치하지 않습니다.</p>
					<p>✅비밀번호 일치</p>
				</div>
			</div>
				
			
		</div><!--companyJoinTitle-->
	</div>
</template>
<script>
import '@/assets/css/Initialization.css'
import '@/assets/css/sr/company.css'

	export default {
		name: "CompanyJoinView",
		components: {},
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>