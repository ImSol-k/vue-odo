<template>
<AppHeader/>
aaaaaaaa
<AppFooter/>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import axios from 'axios';

export default {
	name: "KakaoLogin",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			code : ''
		}
	},
	created() {
		this.code = this.$route.query.code;
		console.log(this.code);
		this.getToken();
	},
	methods : {
		getToken(){


			axios({
				method: 'get',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/token/`+ this.code,
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				// data: this.loginVo,
				responseType: 'json'
			}).then(response => {
				console.log(response);
				// window.location.href = response.data;
			}).catch(error => {
				console.log(error);
			});

		},

		


    },


};
</script>
<style></style>