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
			// const self = this;
			axios.get(`${this.$store.state.apiBaseUrl}/odo/ss/token/` + this.code)
			.then((res)=>{
				console.log(res);
				this.form.email = res.data.email;
				this.form.pwd = res.data.id;
				this.form.nickname = res.data.nickname;
				this.form.kakaotoken = res.data.accessToken;
			})

			
		}
    },


};
</script>
<style></style>