<template>
<AppHeader/>
로그인 처리 대기중입니다.
<AppFooter/>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import axios from 'axios';
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
		this.getToken();
	},
	methods : {
		getToken() {
			console.log('겟토큰');
			axios({
				method: 'GET',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/navertoken`,
				headers: { 'Content-Type': 'application/json; charset=utf-8',},
				params : {
					code : this.$route.query.code,
					state : this.$route.query.state					
				},
				responseType: 'json'
			}).then(response => {
				if(response.data.result === 'success'){
					console.log(response.data.apiData);
					// let access_token = response.data.apiData.accessToken;
					// console.log(access_token);
					// let birtday = response.data.apiData.birthday;
					// let birthyear = response.data.apiData.birthyear;
					// let email = response.data.apiData.email;
					// let gender = response.data.apiData.gender;
					// let id = response.data.apiData.id;
					// let name = response.data.apiData.name;
					// let nickname = response.data.apiData.nickname;
					// let phone_number = response.data.apiData.phone_number;
					// let state = response.data.apiData.state;


					// let naverJoinVo = {
					// 	userId : 'Naver '+ id,
					// 	userName : name,
					// 	userNickname : nickname,
					// 	userHp : phone_number,
					// }

				}
				
			}).catch(error => {
				console.log(error);
			});
		},

		


		

		


    },


};
</script>
<style></style>