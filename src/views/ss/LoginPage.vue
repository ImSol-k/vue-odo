<template>

	<AppHeader/>
	<!-- header -->

	<div class="login-join">
		<span class="lj-txt">로그인</span>
		<div class="lj-form">
			<form v-on:submit.prevent="login">
				<input type="text" name="id" v-model="userVo.id" placeholder="아이디(이메일)">
				<!-- <img class="lj-passImg" :src="pass" v-on:click.prevent="changeInputImg"> -->
				<input type="password" name="password" v-model="userVo.password" placeholder="비밀번호">

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
			userVo :{
				id: '',
				password: '',
			},
			pass : require('@/assets/images/icon/ss/pass1.png')
		};
	},
	methods: {
		// 로그인
		login(){
			console.log('로그인');
			console.log(this.userVo);
		},

		// 비밀번호인풋창 바꾸기
		changeInputImg(){
			console.log('바꾸기');
		}
		
	},
	created(){}
};
</script>





<style>
</style>