<template>
<div class="mymy-header clearfix">
	<img src="@/assets/images/hs/camera.jpg" alt="회원 프로필" @click="goModify">
	<ul class="clearfix">
		<li v-if="this.$store.state.authUser.userNickname == null">{{ this.$store.state.authUser.userId }}<span class="mp-small">님</span></li>
		<li v-else>{{ this.$store.state.authUser.userNickname }}<span class="mp-small">님</span></li>

		<li v-if="(this.$store.state.authUser.userKakao == false && this.$store.state.authUser.userNaver == false)">일반회원</li>
		<li v-if="(this.$store.state.authUser.userKakao == true && this.$store.state.authUser.userNaver == false)">카카오 계정</li>
		<li v-if="(this.$store.state.authUser.userKakao == false && this.$store.state.authUser.userNaver == true)">네이버 계정</li>
		<li><router-link class="goLogin" to="/mypage/modify" >정보 수정</router-link></li>
	</ul>
</div>
</template>
<script>
export default {
  name: "MyPageHeader",
  components: {},
  data() {
    return {};
  },
  methods: {
	// 개인정보 수정폼이동
	goModify(){ 
		this.$router.push('/mypage/modify');
	},
  },
  created() {},
};
</script>

<style></style>
