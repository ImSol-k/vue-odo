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
				<span>후기 작성</span>
			</div>
			<div class="mymy-main">
				<form action="#" method="#" enctype="multipart/form-data">
					<div class="review-form">
						
						<div class="rf-1 clearfix">
							<img src="@/assets/images/icon/ss/default-profile.png">
							<span>누구나 쉽게 배우는 디자인 연습 </span>
							<p>
								누구나 쉽게 배울수 있는 수업이에요<br>
								디자인은 정말 하기 싫어요<br>
								내가 지금 이걸 왜 하고 있는걸까 생각해볼까요
							</p>
						</div>
						<!-- rf-1 / 클래스사진 + 클래스 설명 -->
												
						<div class="rf-2 clearfix">
							<span>클래스는 사용해 보셨나요?</span><br>
							<img v-on:click="star" v-for="i in 5" :key="i" src="@/assets/images/icon/ss/star.png">
						</div>
						<!-- rf-2 / 별점 부분 -->

						<div class="rf-3 clearfix">
							<span>수업의 내용은 좋았나요?</span><br>
							<div class="revbox">
								<input id="rev1-bad" type="radio" name="rev1" value="1"><br>
								<label for="rev1-bad">별로에요</label>
							</div>
							<div class="revbox">
								<input id="rev1-mid" type="radio" name="rev1" value="2"><br>
								<label for="rev1-mid">만족해요</label>
							</div>
							<div class="revbox">
								<input id="rev1-good" type="radio" name="rev1" value="3"><br>
								<label for="rev1-good">아주 만족해요</label>
							</div>
						</div>
						<!-- rf-3 / 질문1 -->

						<div class="rf-4 clearfix">
							<span>시설에 만족하셨나요?</span><br>
							<div class="revbox">
								<input id="rev2-bad" type="radio" name="rev2" value="1"><br>
								<label for="rev2-bad">별로에요</label>
							</div>
							<div class="revbox">
								<input id="rev2-mid" type="radio" name="rev2" value="2"><br>
								<label for="rev2-mid">만족해요</label>
							</div>
							<div class="revbox">
								<input id="rev2-good" type="radio" name="rev2" value="3"><br>
								<label for="rev2-good">아주 만족해요</label>
							</div>
						</div>
						<!-- rf-4 / 질문2 -->

						<div class="rf-5 clearfix">
							<span>강의비용은 적당했나요?</span><br>
							<div class="revbox">
								<input id="rev3-bad" type="radio" name="rev3" value="1"><br>
								<label for="rev3-bad">별로에요</label>
							</div>
							<div class="revbox">
								<input id="rev3-mid" type="radio" name="rev3" value="2"><br>
								<label for="rev3-mid">만족해요</label>
							</div>
							<div class="revbox">
								<input id="rev3-good" type="radio" name="rev3" value="3"><br>
								<label for="rev3-good">아주 만족해요</label>
							</div>
						</div>
						<!-- rf-5 / 질문3 -->

						<div class="rf-6">
							<span>리뷰를 작성해 주세요</span><br>
							<textarea value=""></textarea>
						</div>
						<!-- rf-6 / 리뷰작성란 -->
						
						<div class="rf-7">
							<span>사진첨부하기</span><br>
							<input type="file" name="revImg" v-on:change.prevent="getfile">
						</div>
						<!-- rf-7 / 사진첨부 -->

						<div class="rf-8">
							<button type="button" v-on:click="insertReview">후기 등록</button>
							<button type="button" v-on:click="back">뒤로 가기</button>
						</div>
						<!-- rf-8 / 버튼 -->
					</div>
					<!-- review-form -->
				</form>
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
import '@/assets/css/ss/myrevform.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
	name: "MyPageWriteForm",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			
		};
	},
	methods: {
		// 파일 가져오기
		getfile(event){
			console.log('getfile');
			let file = event.target.files[0];
			console.log(file);
		},

		// 뒤로가기 - 결제내역 페이지로 이동
		back(){
			console.log('back');
			this.$router.push('/mypage/pay');
		},

		// 등록버튼 클릭시 
		insertReview(){
			console.log('후기등록');
		},

		// 별점
		star(){
			console.log('star');
		}

	},
	created(){}
};
</script>


<style>
</style>