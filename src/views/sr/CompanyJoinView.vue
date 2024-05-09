<template>
	<div class="wrap">
		<div class="companyJoinTitle">
			<h1>사업자 가입</h1>
			<div class="companyJoinImg">
				<img src="@/assets/images/icon/man_icon.png" alt="">
				<p>프로필사진</p>
				<input type="file" name="" id="">
			</div><!--companyJoinImg-->
			<div>
				<div>
					<label for="companyId">사업자번호</label>
					<input type="text" name="" id="companyId">
				</div>
				<div>
					<label for="companyId">업체명</label>
					<input type="text" name="" id="companyId">
				</div>
				<div>
					<label for="companyId">아이디</label>
					<input type="text" name="" id="companyId">
				</div>
				<div>
					<label for="companyId">비밀번호</label>
					<input type="text" name="" id="companyId">
				</div>
				<div>
					<label for="companyId">비밀번호확인</label>
					<input type="text" name="" id="companyId">
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