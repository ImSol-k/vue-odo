<template>

	<AppHeader/>
	<!-- header -->

	<div class="login-join">
		<span class="lj-txt">로그인</span>
		<div class="lj-form">
			<form v-on:submit.prevent="login">
				<input type="text" name="id" v-model="loginVo.id" placeholder="아이디(이메일)">
				<!-- <img v-if="isPass" class="lj-passImg" :src="pass1" v-on:click.prevent="changeInputImg">
				<img v-else class="lj-passImg" :src="pass2" v-on:click.prevent="changeInputImg"> -->
				<input type="password" name="password" v-model="loginVo.password" placeholder="비밀번호">
				<button class="login-btn" type="submit">로그인</button>
			</form>
			<!-- form -->
			<span class="other-login">다른 방식으로 로그인</span>
			<img src="@/assets/images/icon/ss/kakao.png" >
			<img src="@/assets/images/icon/ss/na.png">
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
			loginVo :{
				id: '',
				password: '',
			},
			pass1 : require('@/assets/images/icon/ss/pass1.png'),
			pass2 : require('@/assets/images/icon/ss/pass2.png'),
			isPass : true
		};
	},
	methods: {
		// 로그인
		login(){
			console.log('로그인');
			console.log(this.loginVo);
		},

		// 비밀번호인풋창 바꾸기
		changeInputImg(){
			this.isPass = !this.isPass;
		}
		
	},
	created(){}
};
</script>





<style>
</style>