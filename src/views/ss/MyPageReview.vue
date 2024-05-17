<template>

<AppHeader/>
<!-- header -->

<div class="wrap">
	
	<div class="mymy-header clearfix">
			
			<img src="@/assets/images/icon/ss/default-profile.png" 
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
	<!-- mypage-main -->
	
	<div class="mymy clearfix">

		<MyPageSide/>
		<!-- mypage-side -->

		<div class="mymy-content">
			<div class="mymy-head">
				<span>후기</span>
			</div>
			<div class="mymy-main">
				<div class="review">
					<div class="re1 clearfix">
						<img class="re1-img1" src="@/assets/images/icon/ss/default-profile.png">
						<span class="re1-id">클래스명들어올자리</span><br>
						<img v-for="i in 5" :key="i" class="re1-img2" src="@/assets/images/icon/ss/star.png">
						<span class="re1-date">2024-05-05 12:30:40</span>
					</div>
					<!-- re1 -->
					<div class="re2 clearfix">
						불러온 후기가 보여지는 자리
						불러온 후기가 보여지는 자리
						불러온 후기가 보여지는 자리
						불러온 후기가 보여지는 자리<br>
						불러온 후기가 보여지는 자리<br>
						불러온 후기가 보여지는 자리<br>
						불러온 후기가 보여지는 자리<br>
						불러온 후기가 보여지는 자리<br>
						불러온 후기가 보여지는 자리
						불러온 후기가 보여지는 자리<br>
						불러온 후기가 보여지는 자리
						불러온 후기가 보여지는 자리
					</div>
					<span>[주류]누구나 배울 수 있는 맥주만들기</span><br>
					<img src="@/assets/images/icon/ss/default-profile.png">
				</div>
				<!-- review -->
				
				
			</div>
			<!-- mymy-main -->
		</div>
		<!-- mypage-content -->

	</div>
	<!-- mymy -->
</div>
<!-- wrap -->
<AppFooter/>
<!-- footer -->
</template>




<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/ss.css';
import '@/assets/css/ss/myreview.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import MyPageSide from '@/components/MyPageSide.vue';

export default {
	name: "MyPageReview",
	components: {
		AppHeader,
		AppFooter,
		MyPageSide
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