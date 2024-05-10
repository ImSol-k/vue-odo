<template>

	<AppHeader/>
	<!-- header -->
	
	<div class="wrap">
		<div class="login-join">
			<span class="lj-txt">로그인</span>
			<form class="loginform" action="" method="">
				<input type="text" name="id" value="" placeholder="아이디를 입력하세요"><br>
				<input type="password" name="password" value="" placeholder="비밀번호를 입력하세요"><br>
				<button type="button">로그인</button>
			</form>
			
		</div>
	</div>
	<!-- wrap -->

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