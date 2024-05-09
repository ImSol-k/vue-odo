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
					<span>결제내역</span>
				</div>
				<div class="mymy-main">
					<div class="mymy-nav">
						<button type="button">원데이</button>
						<span>ㅣ</span>
						<button type="button">정규</button>
					</div>
					<div class="mymy-paybox">
						<div class="mymy-pay">
							<ul>
								<li><img id="pay-pro" src="../../assets/images/icon/ss/default-profile.png"></li>
								<li><span>내가 들었던 클래스 이름이 나올텐데</span></li>
								<li>
									<img id="pay-star" src="../../assets/images/icon/ss/star.png">
									<img id="pay-star" src="../../assets/images/icon/ss/star.png">
									<img id="pay-star" src="../../assets/images/icon/ss/star.png">
									<img id="pay-star" src="../../assets/images/icon/ss/star.png">
									<img id="pay-star" src="../../assets/images/icon/ss/star.png">
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- mypage-content -->

		</div>
		<!-- mymy -->
		
	</div>
</template>




<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/ss.css';
import '@/assets/css/ss/mypay.css';
import AppHeader from '@/components/AppHeader.vue';


export default {
	name: "MyPagePay",
	components: {
		AppHeader
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