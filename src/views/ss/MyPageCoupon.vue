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
				<span>쿠폰</span>
			</div>
			<div class="mymy-main">
				<div class="in-coupon">
					<label for="insert-coupon">쿠폰 등록하기</label>
					<input id="insert-coupon" type="text" placeholder="쿠폰번호를 입력하세요">
					<button type="button">등록</button>
				</div>
				<!-- in-coupon -->
				<div class="couponMsg">
					<span>보유한 쿠폰</span>
				</div>
				
				<!-- 보유한 쿠폰 없을때 -->
				<!-- <div class="no-coupon">
					<img src="@/assets/images/icon/ss/nocoupon.png"><br>
					<span>보유한 쿠폰이 없어요</span>
				</div> -->
				<!-- //no-coupon -->

				<!-- 보유한 쿠폰 있을때 -->
				<div class="on-coupon">
					<div class="coupon-set">
						<img src="@/assets/images/icon/ss/cou.png">
						<span class="cou-name">쿠폰이름</span>
					</div>
					

				</div>
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
import '@/assets/css/ss/mycoupon.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import MyPageSide from '@/components/MyPageSide.vue';

export default {
	name: "MyPageCoupon",
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