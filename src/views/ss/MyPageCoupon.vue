<template>

<AppHeader/>
<!-- header -->

<div class="wrap">
	
	<div class="mymy-header">
		
		<img src="../../assets/images/icon/ss/default-profile.png" alt="">
		<ul>
			<li>mypage@naver.com</li>
			<li>일반회원</li>
			<li>
				<button type="button">정보 수정</button>
			</li>
		</ul>
	</div>
	<!-- mypage-main -->
	
	<div class="mymy clearfix">

		<div class="mymy-side">
			<ul>
				<li>내 활동</li>
				<li>결제 내역</li>
				<li>위시리스트</li>
				<li>쿠폰</li>
				<li>후기</li>
			</ul>
			<ul>
				<li>고객센터</li>
				<li>공지사항</li>
				<li>약관 및 정책</li>
			</ul>

			<div class="cli-image">
				<div class="cli-1">
					<img src="../../assets/images/icon/ss/kakao.png"><br>
					<span>카카오톡 채널</span>
				</div>
				<div class="cli-2 clearfix">
					<img src="../../assets/images/icon/ss/kakao.png"><br>
					<span>카카오톡 채널</span>
				</div>
				<div class="cli-3">
					<span>운영시간</span><br>
					<span>
						&nbsp;&nbsp;평일 10:00 ~ 17:00<br>
						&nbsp;(점심 12:00 ~ 13:00)
					</span>
				</div>
			</div>
		</div>
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

export default {
	name: "MyPageCoupon",
	components: {
		AppHeader,
		AppFooter
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