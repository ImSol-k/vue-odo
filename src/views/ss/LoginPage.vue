<template>

	<AppHeader/>
	<!-- header -->
	<div class="login-join">
		<span class="lj-txt">로그인</span>
		<div class="loginform">
			<form  action="" method="">
				<input type="text" name="id" value="" placeholder="아이디(이메일)"><br>
				<input type="password" name="password" value="" placeholder="비밀번호"><br>
				<button type="button">로그인</button>
			</form>
			<span>다른 방식으로 로그인</span><br>
			<img src="@/assets/images/icon/ss/kakao.png">
			<img src="@/assets/images/icon/ss/na.png">
		</div>
		
	</div>

	<AppFooter/>
	<!-- footer -->
</template>




<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/sslogin.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';


export default {
	name: "LoginPage",
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