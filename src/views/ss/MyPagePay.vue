<template>

<AppHeader/>
<!-- header -->
	
<div class="wrap">
	
	<MyPageHeader />
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
					<div v-if="!isPay" class="mymy-nopay" >
						<img id="nopayImg" src="@/assets/images/icon/ss/nopay.png">
						<span>결제한 내역이 없어요</span>
						<router-link to="/">홈으로 가기</router-link>
					</div>
					<!-- mymy-nopay -->

					<!-- 결제내역이 있고 원데이클래스 정규클래스 나오게 -->
					<div v-else>
						<!-- 원데이 클래스-->
						<div v-if="isClass">
							<div class="pay clearfix" v-for="i in 1" :key="i">
								<div class="mymy-pay">
									<ul>
										<li>
											<span class="end-msg" :class="{ endClass : isEnd }">종료</span>
											<img id="pay-pro" src="@/assets/images/hs/cake.jpg">
											<div class="heart" v-on:click.prevent="wish" :class="{ red : isRed}"></div>
										</li>
										<li>
											<div class="star-ratings">
												<div class="star-ratings-fill" :style="{ width: ratingToPercent(starScore) + '%' }">
													<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
												</div>
												<div class="star-ratings-base">
													<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
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
										<span class="paycon1-txt2">[원데이]누구나 손쉽게 배우는 커피 타임</span>
										<span class="paycon1-txt3">바리스타 기초 교육 수업에 참여해보세요. 무료입니다.</span>
										<span class="paycon1-txt4">결제 금액 : {{ payPrice }}원</span>
										<div class="paycon1-btnbox">
											<button type="button" id="paybtn1" v-on:click.prevent="getAttendance">출석 : 15 / 20</button>
											<button v-if="hasRev" type="button" id="paybtn2" v-on:click.prevent="revForm">후기 작성</button>
											<button v-else type="button" id="paybtn2" v-on:click.prevent="revShow">후기 보기</button>
											<button type="button" id="paybtn3" v-on:click.prevent="inquiry">문의</button>										
										</div>
									</div>
									<!-- paycon1 -->

									<div class="paycon2 clearfix" >
										<div v-if="recClass" class="paycon2-1">
											<span class="paycon2-txt1">추천!</span>
											<img src="@/assets/images/hs/coffee.jpg">
											<span class="paycon2-txt2">[정규]뜨개질이 일상이 되어버린사람들을 위한 클래스</span>
										</div>
										<div v-else class="paycon2-noClass">
											<span>운영중인<br>정규클래스가<br>없어요</span>
										</div>
									</div>
									<!-- paycon2 -->

								</div>
								<!-- mymy-payCon -->	
							</div>
							<!-- pay -->
						</div>
						<!-- 원데이클래스 -->
						
						<div v-else>
							<!-- 정규클래스 -->
							<div class="pay clearfix" v-for="i in 3" :key="i">
								<div class="mymy-pay">
									<ul>
										<li>
											<span class="end-msg" :class="{ endClass : isEnd }">종료</span>
											<img id="pay-pro" src="@/assets/images/hs/cake.jpg">
											<div class="heart" v-on:click.prevent="wish" :class="{ red : isRed}"></div>
										</li>
										<li>
											<div class="star-ratings">
												<div class="star-ratings-fill" :style="{ width: ratingToPercent(starScore) + '%' }">
													<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
												</div>
												<div class="star-ratings-base">
													<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
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
										<span class="paycon1-txt2">[정규]누구나 손쉽게 배우는 커피 타임</span>
										<span class="paycon1-txt3">바리스타 기초 교육 수업에 참여해보세요. 무료입니다.</span>
										<span class="paycon1-txt4">결제 금액 : {{ payPrice }}원</span>
										<div class="paycon1-btnbox">
											<button type="button" id="paybtn1" v-on:click.prevent="getAttendance">출석 : 15 / 20</button>
											<button v-if="hasRev" type="button" id="paybtn2" v-on:click.prevent="revForm">후기 작성</button>
											<button v-else type="button" id="paybtn2" v-on:click.prevent="revShow">후기 보기</button>
											<button type="button" id="paybtn3" v-on:click.prevent="inquiry">문의</button>										
										</div>
									</div>
									<!-- paycon1 -->

									<div class="paycon2 clearfix" >
										<div v-if="recClass" class="paycon2-1">
											<span class="paycon2-txt1">추천!</span>
											<img src="@/assets/images/hs/coffee.jpg">
											<span class="paycon2-txt2">[정규]뜨개질이 일상이 되어버린사람들을 위한 클래스</span>
										</div>
										<div v-else class="paycon2-noClass">
											<span>운영중인<br>정규클래스가<br>없어요</span>
										</div>
									</div>
									<!-- paycon2 -->
									
								</div>
								<!-- mymy-payCon -->	
							</div>
							<!-- pay -->
						</div>
						<!-- //정규클래스 -->
					</div>
				</div>
				<!--// mymy-paybox  -->
			</div>
			<!-- //mymy-main -->

			<!-- 등록모달 -->
			<div class="rev-modal">
				<div class="revform1">
					<div class="revform1-header clearfix">
						<div class="revform-closeBtn" v-on:click.prevent="closeRevForm">x</div>
					</div>
					<!-- revform1-header -->

					<form action="#" method="#" enctype="multipart/form-data">
						<div class="review-form">
							<div class="rf-1 clearfix">
								<div class="rf-1-1">
									<img :src="getClassImg">
									<span class="rf-1-1-title">누구나 쉽게 배우는 디자인 연습 </span>
									<p>
										누구나 쉽게 배울수 있는 수업이에요<br>
										디자인은 정말 하기 싫어요<br>
										내가 지금 이걸 왜 하고 있는걸까 생각해볼까요<br>
									</p>
								</div>
							</div>
							<!-- rf-1 / 클래스사진 + 클래스 설명 -->

							<div class="rf-2 clearfix">
								<span>클래스는 사용해 보셨나요?</span><br>
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
								<button class="back-btn" type="button" v-on:click.prevent="closeRevForm">뒤로 가기</button>
								<button class="insert-btn" type="button" v-on:click.prevent="insertReview">후기 등록</button>				
							</div>
							<!-- rf-8 / 버튼 -->
							<div class="rf-9"></div>
							<!-- rf-9 / 높이 여백용 -->
						</div>
						<!-- review-form -->
					</form>
					
				</div>
				<!-- revform1 -->
			</div>
			<!-- //등록모달 -->


			<!-- 리뷰보기 모달 -->
			<div class="showRev-modal">
				<div class="revform1">
					<div class="revform1-header clearfix">
						<div class="revform-closeBtn" v-on:click.prevent="closeRevForm2">x</div>
					</div>
					<!-- revform1-header -->
					<div class="review-form1">
						<div class="rf-1 clearfix">
							<div class="rf-1-1">
								<img src="@/assets/images/hs/coffee.jpg">
								<span class="rf-1-1-title">[원데이]누구나 손쉽게 배우는 커피 타임</span>
								<span class="rf-1-1-classDate">운영 기간 : 2024.01.05 ~ 2024.02.05</span>
								<span class="rf-1-1-revDate">리뷰 작성일 : 2024.02.06 11:30:50 </span>
							</div>
						</div>
						<div class="rf-2-1">
							<span class="rf-2-1-title" >클래스는 사용해 보셨나요?</span>
							<div class="star-ratings2">
								<div class="star-ratings-fill2" :style="{ width: ratingToPercent2(starScore2)  + '%' }">
									<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
								</div>
								<div class="star-ratings-base2">
									<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
								</div>
							</div>
						</div>

						<div class="rf-3 clearfix">
							<span>수업의 내용은 좋았나요?</span><br>
							<div class="revbox">
								<!-- <input id="rev1-bad" type="radio" name="rev1" value="1" checked="checked"><br> -->
								<label for="rev1-bad">별로에요</label>
							</div>
						</div>
						<!-- rf-3 / 질문1 -->

						<div class="rf-4 clearfix">
							<span>시설에 만족하셨나요?</span><br>
							<div class="revbox">
								<input id="rev2-bad" type="radio" name="rev2" value="1" checked="checked"><br>
								<label for="rev2-bad">별로에요</label>
							</div>
						</div>
						<!-- rf-4 / 질문2 -->

						<div class="rf-5 clearfix">
							<span>강의비용은 적당했나요?</span><br>
							<div class="revbox">
								<input id="rev3-bad" type="radio" name="rev3" value="1" checked="checked"><br>
								<label for="rev3-bad">별로에요</label>
							</div>
						</div>
						<!-- rf-5 / 질문3 -->

						<div class="rf-6">
							<span>리뷰를 작성해 주세요</span><br>
							<div class="rf-6-txt">aaaaa</div>
						</div>
						<!-- rf-6 / 리뷰작성란 -->

						<div class="filebox">
							<span>등록한 사진</span>
							<img :src="prevImg">													
						</div>
						<!-- filebox / 사진첨부 -->

						<div class="rf-8">
							<button class="back-btn" type="button" v-on:click.prevent="backRev">뒤로 가기</button>
							<button class="insert-btn" type="button" v-on:click.prevent="modifyRev">수정 하기</button>				
						</div>
						<!-- rf-8 / 버튼 -->

						<div class="rf-9"></div>
						<!-- rf-9 / 높이 여백용 -->

					</div>
					<!-- //review-form1 -->

					<form action="#" method="#" enctype="multipart/form-data">
						<div class="review-form2">
							<div class="rf-1 clearfix">
								<div class="rf-1-1">
									<img :src="getClassImg">
									<span class="rf-1-1-title">누구나 쉽게 배우는 디자인 연습 </span>
									<p>
										누구나 쉽게 배울수 있는 수업이에요<br>
										디자인은 정말 하기 싫어요<br>
										내가 지금 이걸 왜 하고 있는걸까 생각해볼까요<br>
									</p>
								</div>
							</div>
							<!-- rf-1 / 클래스사진 + 클래스 설명 -->

							<div class="rf-2 clearfix">
								<span>클래스는 사용해 보셨나요?</span><br>
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
								<button class="back-btn" type="button" v-on:click.prevent="backRev">뒤로 가기</button>
								<button class="insert-btn" type="button" v-on:click.prevent="modifyReview">수정</button>				
							</div>
							<!-- rf-8 / 버튼 -->
							<div class="rf-9"></div>
							<!-- rf-9 / 높이 여백용 -->

							

						</div>
						<!-- //review-form2 -->
					</form>
					<!-- //리뷰보기에서 수정폼들어왔을때 보낼 폼 -->
				</div>
				<!-- //revform1 -->
			</div>
			<!-- 리뷰보기 모달 -->




		</div>
		<!-- //mypage-content -->
	</div>
	<!-- //mymy -->
</div>
<!-- //wrap -->

<AppFooter/>
<!-- //footer -->
</template>




<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/ss.css';
import '@/assets/css/ss/mypay.css';
import '@/assets/css/ss/myrevform.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import MyPageHeader from '@/components/MyPageHeader.vue';
import MyPageSide from '@/components/MyPageSide.vue';


export default {
	name: "MyPagePay",
	components: {
		AppHeader,
		AppFooter,
		MyPageHeader,
		MyPageSide
	},
	data() {
		return {
			isClass : true, // 정규클래스, 원데이클래스 변환에 사용
			starScore : 3.8, // 별점 통계넣기
			starScore2 : 3, // 리뷰모달에서 별점 표시할때
			isRed : true, // 하트 클릭하면 색바뀌고 데이터 보내기
			isEnd : false, // false면 안보임 , true면 종료표시
			payPrice : 5000,
			recClass : true, // 추천클래스 - 있으면 true 없으면 false
			isPay : false, // 결제여부확인
			hasRev : false, // 작성한 리뷰 있는지 확인
			paymentData : [], // 결제정보가져와서 저장될 곳
			getClassImg : require('@/assets/images/hs/cake.jpg'), // 클래스이미지 
			file : document.querySelector('#file'), // 첨부파일
			fileName : '', // 파일이름
			prevImg : require('@/assets/images/icon/ss/default-photo.png'), // 파일에 기본나타낼 이미지 
		};
	},
	methods: {
		///////////////////////////////////////////////////////////////////////////////////
		
		// 작성한 리뷰 보기 열기
		revShow(){
			let modal = document.querySelector('.showRev-modal');
			// let revForm1 = document.querySelector('.review-form1');
			// let revForm2 = document.querySelector('.review-form2');

			modal.style.display = 'block';
			// revForm1.style.display = 'block';
			// revForm2.style.display = 'none';
		},
		// 리뷰 보기 모달 닫기
		closeRevForm2(){
			let modal = document.querySelector('.showRev-modal');
			modal.style.display = 'none';
		},

		// 리뷰 모달창 안에 별점퍼센트 
		ratingToPercent2(starScore2){
			starScore2 = (this.starScore2 / 5 ) * 100;
			return starScore2 + 1.5;
		},

		// 리뷰 수정하기 버튼 눌렀을때 
		modifyRev(){
			let revForm1 = document.querySelector('.review-form1');
			let revForm2 = document.querySelector('.review-form2');
			revForm1.style.display = 'none';
			revForm2.style.display = 'block';
		},

		// 리뷰 수정하기
		modifyReview(){
			console.log('리뷰 수정하기');
		},

		// 뒤로가기 눌렀을 때
		backRev(){
			console.log('뒤로가기');
			let revForm1 = document.querySelector('.review-form1');
			let revForm2 = document.querySelector('.review-form2');
			revForm1.style.display = 'block';
			revForm2.style.display = 'none';
		},
		
		///////////////////////////////////////////////////////////////////////////////////

		///////////////////////////////////////////////////////////////////////////////////

		// 등록버튼 클릭시 
		insertReview(){
			console.log('후기등록');
		},

		// 리뷰 작성 모달 열기 
		revForm(){ 
			let modal = document.querySelector('.rev-modal');
			let revForm = document.querySelector('.review-form');
			modal.style.display = 'block';
			revForm.style.display = 'block';
		},
		
		// 리뷰 작성 모달 닫기
		closeRevForm(){
			let modal = document.querySelector('.rev-modal');
			modal.style.display = 'none';
		},

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

		///////////////////////////////////////////////////////////////////////////////////

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
		

		// 문의요청
		inquiry(){
			console.log('문의');
		},
		
		// 출석부 모달
		getAttendance(){
			console.log('출석부');
		},
		
		// 결제정보 가져오기
		getList(){
			// console.log('결제정보가져오기');
			this.paymentData = [
				{ classType: "원데이", paymentAmount: 5000 },
			]

			this.isPay = this.paymentData.length > 0;
			this.isClass = this.paymentData.some((item) => item.classType ==="원데이");

			if(!this.isPay && this.isClass){
				this.isClass =false;
			}
		},
		

	},
	created(){
		// 데이터가져오는 메소드 실행
		this.getList();
	}
};
</script>

<style>
/* 원데이 정규 클릭했을때 */
.pickClass {
	border-bottom: 2px solid #8521FF;
}

/* 하트 클릭했을때  */
.mymy-pay .red {
	background-color: #ea2027;
}
.mymy-pay .red::before {
	background-color: #ea2027;
}
.mymy-pay .red::after{
	background-color: #ea2027;
}

.endClass {
	display: block;
}

</style>