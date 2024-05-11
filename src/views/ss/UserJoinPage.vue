<template>

	<AppHeader/>
	<!-- header -->
	
	<div class="login-join">
		<span class="lj-txt">회원가입</span>
		<div class="lj-form">
			<!-- <div class="join1">
				<div class="join-box">
					<div class="join1-1">
						<input id="join-id" type="text" :placeholder="`아이디&nbsp;(이메일)`">
						<input id="join-pw" type="password" placeholder="비밀번호">
						<span class="join1-txt">대/소문자, 숫자, 특수문자 중 2가지 이상의 조합으로 10자이상</span>
						<input id="join-pw2" type="password" placeholder="비밀번호 한 번 더">
					</div>
				</div>
				<button class="login-btn" type="button">다음</button>
			</div> -->

			<div class="join2">
				<div class="join-box">
					<div class="join2-1">
						<input id="join-nickname" type="text" placeholder="닉네임">
						<input id="join-hp" type="text" :placeholder="`'-'없이 입력하세요`">
						<input id="join-hpCheck" type="text" placeholder="인증번호">
					</div>
				</div>
			</div>
		</div>
		<!-- lj-form -->
	</div>
	<!-- login-join -->

	<AppFooter/>
	<!-- footer -->
</template>




<script>
import '@/assets/css/Initialization.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';


export default {
	name: "UserJoinPage",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {};
	},
	methods: {},
	created(){}
};
</script>





<style>
</style>