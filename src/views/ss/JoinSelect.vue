<template>

	<AppHeader/>
	<!-- header -->
	
	<div class="login-join">
		<span class="lj-txt">반가워요!</span>
		<div class="lj-form">
			<div class="join-box">
				<span class="other-login">선택</span><br>
				<router-link to="/userjoin" class="join-select">일반 회원</router-link>
				<router-link to="/companyjoin" class="join-select" >기업 회원</router-link>
			</div>
			<!-- join-box -->
			<router-link to="/login" class="go-login">로그인하러가기</router-link>
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
	name: "JoinPage",
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