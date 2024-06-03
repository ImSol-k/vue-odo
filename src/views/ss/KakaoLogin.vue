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
		this.getToken(this.code);
	},
	methods : {
		getToken(code){
			axios({
				method: 'post',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/token`,
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				data : code,
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