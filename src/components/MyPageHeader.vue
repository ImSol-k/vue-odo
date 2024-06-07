<template>
<div class="mymy-header clearfix">
	<img v-if="(this.$store.state.authUser.userImage) === null || (this.$store.state.authUser.userImage === '')" :src="defaultImg" alt="없음" @click="goModify">
	<img v-else :src="`${this.$store.state.apiBaseUrl}/upload/${this.$store.state.authUser.userImage}`" alt="있음" @click="goModify">
	<ul class="clearfix">
		<li>{{ this.$store.state.authUser.userNickname }}<span class="mp-small">님</span></li>
		<li v-if="(this.$store.state.authUser.userType == 0)">일반회원</li>
		<li v-if="(this.$store.state.authUser.userType == 1)">카카오 계정</li>
		<li><router-link class="goLogin" to="/mypage/modify">정보 수정</router-link></li>
	</ul>
</div>
</template>

<script>
export default {
  name: "MyPageHeader",
  components: {

  },
  data() {
    return {
		defaultImg : require('@/assets/images/icon/ss/default-profile.png')
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
