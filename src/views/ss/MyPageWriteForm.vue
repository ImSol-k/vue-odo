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
				<span>후기 작성</span>
			</div>
			<div class="mymy-main">
				<form action="#" method="#" enctype="multipart/form-data">
					<div class="review-form">
						
						<div class="rf-1 clearfix">
							<div class="rf-1-1">
								<img :src="getClassImg">
								<span>누구나 쉽게 배우는 디자인 연습 </span>
								<p>
									누구나 쉽게 배울수 있는 수업이에요<br>
									디자인은 정말 하기 싫어요<br>
									내가 지금 이걸 왜 하고 있는걸까 생각해볼까요
								</p>
							</div>
						</div>
						<!-- rf-1 / 클래스사진 + 클래스 설명 -->
												
						<div class="rf-2 clearfix">
							<span>클래스는 사용해 보셨나요?</span><br>
							<!-- https://melthleeth.tistory.com/entry/HTML-CSS%EB%A1%9C-%EB%B3%84%EC%B0%8D%EA%B8%B0-Star-Rating -->
							<div class="star-rating">
								<input type="radio" id="5-stars" name="rating" value="5" />
								<label for="5-stars" class="star">&#9733;</label>
								<input type="radio" id="4-stars" name="rating" value="4" />
								<label for="4-stars" class="star">&#9733;</label>
								<input type="radio" id="3-stars" name="rating" value="3" />
								<label for="3-stars" class="star">&#9733;</label>
								<input type="radio" id="2-stars" name="rating" value="2" />
								<label for="2-stars" class="star">&#9733;</label>
								<input type="radio" id="1-star" name="rating" value="1" />
								<label for="1-star" class="star">&#9733;</label>
							</div>
							<!-- star-rating -->
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
							<textarea spellcheck="false" value=""></textarea>
						</div>
						<!-- rf-6 / 리뷰작성란 -->
						
						<div class="filebox">
							<!-- https://velog.io/@sklove96/inputtypefile-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0 -->
							<span>사진첨부하기</span><br>
							<img :src="prevImg">
							<div class="filebox-1">
								<input class="upload-name" v-model="fileName" placeholder="선택된 파일이 없습니다" readonly>
								<label for="file">파일찾기</label>
								<input id="file" type="file" name="file" @change="getfile">
							</div>							
						</div>
						<!-- filebox / 사진첨부 -->

						<div class="rf-8">
							<button class="back-btn" type="button" v-on:click="back">뒤로 가기</button>
							<button class="insert-btn" type="button" v-on:click="insertReview">후기 등록</button>				
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
import MyPageSide from '@/components/MyPageSide.vue';

// let file = document.querySelector('#file');


export default {
	name: "MyPageWriteForm",
	components: {
		AppHeader,
		AppFooter,
		MyPageSide
	},
	data() {
		return {
			file : document.querySelector('#file'),
			fileName : '',
			prevImg : require('@/assets/images/icon/ss/default-photo.png'),
			getClassImg : require('@/assets/images/icon/ss/default-profile.png'),
		};
	},
	methods: {
		// 파일 가져오기
		getfile(event){
			console.log('getfile');
			this.file = event.target.files[0];
			const READER = new FileReader();

			READER.onload = (e) =>{
				this.prevImg = e.target.result;
			}
			if(this.file){
				READER.readAsDataURL(this.file);
			}
			this.fileName = this.file.name;
			
			
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
	mounted(){
		
	},
	created(){
		
	}
};







</script>


<style>

</style>