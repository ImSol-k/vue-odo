<template>
<AppHeader/>
로그인 처리 대기중입니다.
<AppFooter/>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
// import axios from 'axios';

export default {
	name: "NaverLogin",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
		
		}
	},
	mounted () {
		
	},
	created() {
		// this.getToken();
		this.$router.push('/');
	},
	methods : {
		// getToken() {
		// 	axios({
		// 		method: 'GET',
		// 		url: `${this.$store.state.apiBaseUrl}/odo/ss/navertoken`,
		// 		headers: { 'Content-Type': 'application/json; charset=utf-8',},
		// 		params : {
		// 			code : this.$route.query.code,
		// 			state : this.$route.query.state					
		// 		},
		// 		responseType: 'json'
		// 	}).then(response => {
		// 		if(response.data.result === 'success'){
		// 			const token = response.headers.authorization.split(" ")[1];
		// 			let authUser = {
		// 				userNo : response.data.apiData.authVo.userNo,
		// 				userNickname : response.data.apiData.authVo.userNickname,
		// 				userId : response.data.apiData.authVo.userId,
		// 				userImage : response.data.apiData.authVo.userImage,
		// 				userType : response.data.apiData.authVo.userType
		// 			}

		// 			this.$store.commit('setToken', token);
		// 			this.$store.commit('setAuthUser', authUser);
		// 			this.$store.commit('setNaverToken',response.data.apiData.accessToken);
		// 			this.$router.push('/');
		// 		}
				
		// 	}).catch(error => {
		// 		console.log(error);
		// 	});
		// },

		


		

		


    },


};
</script>
<style></style>