<template>

	<AppHeader/>
	<!-- header -->

	<div class="login-join">
		<span class="lj-txt">로그인</span>
		<div class="lj-form">
			<form v-on:submit.prevent="login">
				<input type="text" name="id" v-model="userVo.id" placeholder="아이디(이메일)"><br>
				<input type="password" name="password" v-model="userVo.password" placeholder="비밀번호"><br>
				<button class="login-btn" type="submit">로그인</button>
			</form>
			<!-- form -->
			<span class="other-login">다른 방식으로 로그인</span><br>
			<img src="@/assets/images/icon/ss/kakao.png" v-on:click="kakao">
			<img src="@/assets/images/icon/ss/na.png" v-on:click="naver">
		</div>
		<!-- lj-form -->
	</div>
	<!-- login-join -->

	<AppFooter/>
	<!-- footer -->
</template>




<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/login-join.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';


export default {
	name: "LoginPage",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			userVo :{
				id: '',
				password: '',
			}
		};
	},
	methods: {
		// 로그인
		login(){
			console.log('로그인');
			console.log(this.userVo);
		},

		// 카카오로 로그인
		kakao(){
			console.log('카카오로그인');
		},
		// 네이버로 로그인
		naver(){
			console.log('네이버로그인');
		}
	},
	created(){}
};
</script>





<style>
</style>