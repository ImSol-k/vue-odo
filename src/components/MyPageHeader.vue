<template>
<div class="mymy-header clearfix">
	<img v-if="(this.$store.state.authUser.userImage) == null && (this.$store.state.authUser.userType == 0)" src="@/assets/images/icon/ss/default-profile.png" alt="회원 프로필" @click="goModify">
	<img v-else :src="`${this.$store.state.apiBaseUrl}/upload/${this.$store.state.authUser.userImage}`" alt="회원 프로필" @click="goModify">
	<ul class="clearfix">
		<li>{{ this.$store.state.authUser.userNickname }}<span class="mp-small">님</span></li>

		<li v-if="(this.$store.state.authUser.userType == 0)">일반회원</li>
		<li v-if="(this.$store.state.authUser.userType == 1)">카카오 계정</li>
		<li v-if="(this.$store.state.authUser.userType == 2)">네이버 계정</li>
		<li><router-link class="goLogin" to="/mypage/modify">정보 수정</router-link></li>
	</ul>
</div>
</template>
<script>
export default {
  name: "MyPageHeader",
  components: {},
  data() {
    return {
		
	};
  },
  methods: {
	// 개인정보 수정폼이동
	goModify(){ 
		this.$router.push('/mypage/modify');
	},
  },
  created() {
	
  },
};
</script>

<style></style>
