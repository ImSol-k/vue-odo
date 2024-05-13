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

			<MyPageSide />
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
						<div class="pay clearfix" v-for="i in 5" :key="i">
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
								<button type="button" v-on:click="goReviewForm">후기작성</button>
								
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
import MyPageSide from '@/components/MyPageSide.vue';


export default {
	name: "MyPagePay",
	components: {
		AppHeader,
		AppFooter,
		MyPageSide
	},
	data() {
		return {};
	},
	methods: {
		goModify(){
			this.$router.push('/mypage/modify');
		},
		goReviewForm(){
			this.$router.push('/mypage/review/form');
		},
	},
	created(){}
};
</script>





<style>
</style>