<template>
<div class="mymy-header clearfix">
	<img src="@/assets/images/hs/camera.jpg" 
		alt="회원 프로필"
		v-on:click.prevent="goModify">
	<ul>
		<li>mypage@naver.com(닉네임나올자리)</li>
		<li>일반회원</li>
		<li>
			<router-link class="goLogin" to="/mypage/modify" >정보 수정</router-link>
		</li>
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
