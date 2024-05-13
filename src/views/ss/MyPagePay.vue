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
						<span type="button" v-on:click.prevent="selectClass(1)" :class="{ pickClass : isClass}">원데이</span>
						<span>ㅣ</span>
						<span type="button" v-on:click.prevent="selectClass(2)" :class="{ pickClass : !isClass}">정규</span>
					</div>
					<!-- mymy-nav -->

					<div class="mymy-paybox">
						<!-- 결제내역이 없으면 -->
						<div class="mymy-nopay">
							<img id="nopayImg" src="@/assets/images/icon/ss/nopay.png">
							<span>결제한 내역이 없어요</span>
							<router-link to="/">홈으로 가기</router-link>
						</div>
						<!-- mymy-nopay -->
						
						
						<!-- 결제내역이 있으면 -->
						<div class="pay clearfix" v-for="i in 4" :key="i">
							<div class="mymy-pay">
								<ul>
									<li><img id="pay-pro" src="@/assets/images/icon/ss/default-profile.png"></li>
									<li><a href="#">내가 들었던 클래스 이름asdasdasdasdasdasdasdasdasdasd</a></li>
									<li>
										<img v-for="(i) in 5" :key="i" id="pay-star" src="@/assets/images/icon/ss/star.png">
									</li>
								</ul>
							</div>
							<!-- mymy-pay -->
							<div class="mymy-payCon clearfix">
								<div class="paycon1 ">
									<span class="paycon1-txt1">사용한 날짜 : 2024.05.05 </span>
									<p>
										&nbsp;클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
										클래스를 들을때 입력한 설명 내용이 계속 나오고 있겠지
									</p>
									<span class="paycon1-txt2">출석 : 10 / 10</span><br>
								</div>
								<!-- paycon1 -->

								<div class="paycon2 clearfix">
									<img src="@/assets/images/icon/ss/default-profile.png">
									<span class="paycon2-txt">추천클래스 이름</span>
								</div>
								<!-- paycon2 -->
								<div class="paycon3 clearfix">
									<a href="">문의</a>
									<a href="" v-on:click="goReviewForm">후기작성</a>
								</div>
								<!-- paycon3 -->
								
							</div>
							<!-- mymy-payCon -->	
						</div>
						<!-- pay -->
					</div>
					<!-- mymy-paybox  -->
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
		return {
			isClass : true
		};
	},
	methods: {
		goModify(){
			this.$router.push('/mypage/modify');
		},
		goReviewForm(){
			this.$router.push('/mypage/review/form');
		},
		selectClass(no){
			if(no == 1){
				this.isClass = true;
				console.log(this.isClass);
			} else {
				this.isClass = false;
				console.log(this.isClass);
			}
		}

	},
	created(){}
};
</script>

<style>
.pickClass {
	border-bottom: 2px solid #8521FF;
}
</style>