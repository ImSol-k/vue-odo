<template>

	<AppHeader/>
	<!-- header -->
	
	<div class="wrap">
		
		<div class="mymy-header">
			
			<img src="@/assets/images/icon/ss/default-profile.png" alt="">
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
					<li><a href="#">결제 내역</a></li>
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
						<img src="@/assets/images/icon/ss/kakao.png"><br>
						<span>카카오톡 채널</span>
					</div>
					<div class="cli-2 clearfix">
						<img src="@/assets/images/icon/ss/kakao.png"><br>
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
				<!-- mymy-head -->

				<div class="mymy-main">
					<div class="mymy-nav">
						<button type="button">원데이</button>
						<span>ㅣ</span>
						<button type="button">정규</button>
					</div>
					<!-- mymy-nav -->

					<div class="mymy-paybox">
						<!-- 결제내역이 없으면 -->
						<!-- <div class="mymy-nopay">
							<img id="nopayImg" src="@/assets/images/icon/ss/nopay.png"><br>
							<span>결제한 내역이 없어요</span><br>
						</div> -->
						<!-- mymy-nopay -->
						
						<!-- 결제내역이 있으면 -->
						<div class="pay clearfix">
							<div class="mymy-pay">
								<ul>
									<li><img id="pay-pro" src="@/assets/images/icon/ss/default-profile.png"></li>
									<li><span>내가 들었던 클래스 이름이 나올텐데</span></li>
									<li>
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
									</li>
								</ul>
							</div>
							<!-- mymy-pay -->
							<div class="mymy-payCon clearfix">
								<div class="paycon1">
									<span>2024.05.05 사용한 날짜</span><br>
									<p>
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
									</p><br>
									<span>출석 : 10/10</span><br>
									
								</div>
								<div class="paycon2">
									<img src="@/assets/images/icon/ss/default-profile.png"><br>
									<span>추천클래스 이름</span>
								</div>
								<button type="button">문의</button>
								<button type="button">후기작성</button>
								
							</div>
							<!-- mymy-payCon -->
							
						</div>
						<!-- pay -->
						<div class="pay clearfix">
							<div class="mymy-pay">
								<ul>
									<li><img id="pay-pro" src="@/assets/images/icon/ss/default-profile.png"></li>
									<li><span>내가 들었던 클래스 이름이 나올텐데</span></li>
									<li>
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
									</li>
								</ul>
							</div>
							<!-- mymy-pay -->
							<div class="mymy-payCon clearfix">
								<div class="paycon1">
									<span>2024.05.05 사용한 날짜</span><br>
									<p>
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
									</p><br>
									<span>출석 : 10/10</span><br>
									
								</div>
								<div class="paycon2">
									<img src="@/assets/images/icon/ss/default-profile.png"><br>
									<span>추천클래스 이름</span>
								</div>
								<button type="button">문의</button>
								<button type="button">후기작성</button>
								
							</div>
							<!-- mymy-payCon -->
							
						</div>
						<!-- pay -->
						<div class="pay clearfix">
							<div class="mymy-pay">
								<ul>
									<li><img id="pay-pro" src="@/assets/images/icon/ss/default-profile.png"></li>
									<li><span>내가 들었던 클래스 이름이 나올텐데</span></li>
									<li>
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
									</li>
								</ul>
							</div>
							<!-- mymy-pay -->
							<div class="mymy-payCon clearfix">
								<div class="paycon1">
									<span>2024.05.05 사용한 날짜</span><br>
									<p>
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
									</p><br>
									<span>출석 : 10/10</span><br>
									
								</div>
								<div class="paycon2">
									<img src="@/assets/images/icon/ss/default-profile.png"><br>
									<span>추천클래스 이름</span>
								</div>
								<button type="button">문의</button>
								<button type="button">후기작성</button>
								
							</div>
							<!-- mymy-payCon -->
							
						</div>
						<!-- pay -->
						<div class="pay clearfix">
							<div class="mymy-pay">
								<ul>
									<li><img id="pay-pro" src="@/assets/images/icon/ss/default-profile.png"></li>
									<li><span>내가 들었던 클래스 이름이 나올텐데</span></li>
									<li>
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
										<img id="pay-star" src="@/assets/images/icon/ss/star.png">
									</li>
								</ul>
							</div>
							<!-- mymy-pay -->
							<div class="mymy-payCon clearfix">
								<div class="paycon1">
									<span>2024.05.05 사용한 날짜</span><br>
									<p>
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
									</p><br>
									<span>출석 : 10/10</span><br>
									
								</div>
								<div class="paycon2">
									<img src="@/assets/images/icon/ss/default-profile.png"><br>
									<span>추천클래스 이름</span>
								</div>
								<button type="button">문의</button>
								<button type="button">후기작성</button>
								
							</div>
							<!-- mymy-payCon -->
							
						</div>
						<!-- pay -->

					</div>
					<!-- mymy-paybox -->
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
import '@/assets/css/ss/mypay.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';


export default {
	name: "MyPagePay",
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