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
	<!-- mymy-header -->
	
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
					<div class="mymy-nopay" >
						<img id="nopayImg" src="@/assets/images/icon/ss/nopay.png">
						<span>결제한 내역이 없어요</span>
						<router-link to="/">홈으로 가기</router-link>
					</div>
					<!-- mymy-nopay -->
					
					
					<!-- 결제내역이 있으면 -->
					<div v-if="isClass">
						<div class="pay clearfix" v-for="i in 1" :key="i">
							<div class="mymy-pay">
								<ul>
									<li>
										<!-- https://codingbroker.tistory.com/55 하트그리기 -->
										<!-- <img id="pay-heart" src="@/assets/images/icon/ss/heart.png"> -->
										<span class="end-msg" :class="{ endClass : isEnd }">종료</span>
										<img id="pay-pro" src="@/assets/images/hs/cake.jpg">
										<div class="heart" v-on:click.prevent="wish" :class="{ red : isRed}"></div>
									</li>
									<li>
										<!-- <img v-for="(i) in 5" :key="i" id="pay-star" src="@/assets/images/icon/ss/star.png"> -->
										<!-- https://melthleeth.tistory.com/entry/HTML-CSS%EB%A1%9C-%EB%B3%84%EC%B0%8D%EA%B8%B0-Star-Rating -->
										<div class="star-ratings ">
											<div class="star-ratings-fill" :style="{ width: ratingToPercent(starScore) + '%' }">
												<span>★</span>
												<span>★</span>
												<span>★</span>
												<span>★</span>
												<span>★</span>
											</div>
											<div class="star-ratings-base">
												<span>★</span>
												<span>★</span>
												<span>★</span>
												<span>★</span>
												<span>★</span>
											</div>
										</div>
										<span class="star-avg">({{ starScore }})</span>
									</li>
								</ul>
							</div>
							<!-- mymy-pay -->
							<div class="mymy-payCon clearfix">
								<div class="paycon1">
									<span class="paycon1-txt1"> 결제일 : 2024.05.05</span>
									<span class="paycon1-txt2">[원데이]누구나 손쉽게 배우는 뜨개질 공방</span>
									<span class="paycon1-txt3">뜨개질 수업에 참여해보세요. 무료입니다.</span>
									<span class="paycon1-txt4">결제 금액 : {{ payPrice }}원</span>
									<button>출석 : 1/1</button>
									<!-- <div class="paycon1-btn1">
										<button type="button">문의</button>
										<div>
											<button type="button" v-on:click.prevent="goReviewForm">후기 작성</button>
										</div>
									</div> -->
								</div>
								<!-- paycon1 -->

								<div class="paycon2 clearfix" >
									<div  class="paycon2-1">
										<img src="@/assets/images/icon/ss/default-profile.png">
										<span class="paycon2-txt">추천클래스 이름</span>
									</div>
									<!-- <div class="paycon2-2">
										
										<span>운영중인 정규클래스가 없어요</span>
									</div> -->
								</div>
								<!-- paycon2 -->
								
							</div>
							<!-- mymy-payCon -->	
						</div>
						<!-- pay -->
					</div>
					<div v-else>
						<!-- 결제내역이 있으면 -->
						<div class="pay clearfix" v-for="i in 3" :key="i">
							
							<div class="mymy-pay">
								<!-- https://melthleeth.tistory.com/entry/HTML-CSS%EB%A1%9C-%EB%B3%84%EC%B0%8D%EA%B8%B0-Star-Rating -->
								<ul>
									<li>
										<img id="pay-heart" src="@/assets/images/icon/ss/heart.png">
										<img id="pay-pro" src="@/assets/images/icon/ss/default-profile.png">
										
									</li>
									<!-- <li><a href="#"> 들었던 클래스 이름asdasdasdasdasdasdasdasdasdasd</a></li> -->
									<li>
										<img v-for="(i) in 5" :key="i" id="pay-star" src="@/assets/images/icon/ss/star.png">
									</li>
								</ul>
							</div>
							<!-- mymy-pay -->
							<div class="mymy-payCon clearfix">
								<div class="paycon1 ">
									<span class="paycon1-txt1">사용한 날짜 : 2024.10.12 </span>
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
									</p>
									<span class="paycon1-txt2">출석 : 10 / 10</span><br>
								</div>
								<!-- paycon1 -->

								<div class="paycon2 clearfix">
									<div>
										<img src="@/assets/images/icon/ss/default-profile.png">
										<span class="paycon2-txt">추천클래스 이름</span>
									</div>
									<div>
										<!-- <span>등록된 추천클래스가 없어요</span> -->
									</div>
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
			isClass : true, // 정규클래스, 원데이클래스 변환에 사용
			starScore : 3.5, // 별점 통계넣기
			isRed : true, // 하트 클릭하면 색바뀌고 데이터 보내기
			isEnd : false, // false면 안보임 , true면 종료표시
			payPrice : 5000,

		};
	},
	methods: {
		// 수정폼이동
		goModify(){ 
			this.$router.push('/mypage/modify');
		},

		// 리뷰폼이동 
		goReviewForm(){ 
			this.$router.push('/mypage/review/form');
		},

		// 정규클래스 원데이 클래스 선택
		selectClass(no){
			if(no == 1){ // true면 원데이클래스
				this.isClass = true;
			} else { // false면 정규클래스
				this.isClass = false;
			}
		},
		// 하트이미지 클릭 -> 위시리스트에 담기기 
		wish(){
			this.isRed = !this.isRed
		},

		// 별점 퍼센트 보여주기
		ratingToPercent(starScore){
			starScore = (this.starScore / 5 ) * 100;
			return starScore + 1.5;
		},
	},
	created(){}
};
</script>

<style>
/* 원데이 정규 클릭했을때 */
.pickClass {
	border-bottom: 2px solid #8521FF;
}

/* 하트 클릭했을때  */
.red {
	background-color: #ea2027;
}
.red::before {
	background-color: #ea2027;
}
.red::after{
	background-color: #ea2027;
}

.endClass {
	display: block;
}

</style>