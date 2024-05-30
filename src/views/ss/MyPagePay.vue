<template>

<AppHeader/>
<!-- header -->
	
<div class="wrap">
	
	<MyPageHeader />
	<!-- mymy-header -->
	
	<div class="mymy clearfix">

		<MyPageSide />
		<!-- mypage-side -->

		<div class="mymy-content clearfix">
			<div class="mymy-head">
				<span>결제내역</span>
			</div>
			<!-- mymy-head -->

			<div class="mymy-main">
				<div class="mymy-nav">
					<span type="button" @click="selectClass(1)" :class="{ pickClass : isClass}">원데이</span>
					<span>ㅣ</span>
					<span type="button" @click="selectClass(2)" :class="{ pickClass : !isClass}">정규</span>
				</div>
				<!-- mymy-nav -->

				<div class="mymy-paybox">
					<!-- 결제내역이 없으면 -->
					<div v-if="!isPay" class="mymy-nopay">
						<img id="nopayImg" src="@/assets/images/icon/ss/nopay.png">
						<span>결제한 내역이 없어요</span>
						<router-link to="/">홈으로 가기</router-link>
					</div>
					<!-- mymy-nopay -->

					<!-- 결제내역이 있고 원데이클래스 정규클래스 나오게 -->
					<div v-else>
						<!-- 원데이 클래스-->
						<div class="div-180" v-if="isClass">
							<div v-if="paymentData.length === 0">
								<div class="mymy-nopay">
									<img id="nopayImg" src="@/assets/images/icon/ss/nopay.png">
									<span>결제한 내역이 없어요</span>
									<router-link to="/">홈으로 가기</router-link>
								</div>
								<!-- mymy-nopay -->
							</div>

							<div class="pay clearfix" v-for="(list, index) in paymentData" :key="index">
								<div class="mymy-pay">
									<ul>
										<li>
											<span class="end-msg" :class="{ endClass : checkDate(list.endDate) }">종료</span>
											<img id="pay-pro" :src="`${this.$store.state.apiBaseUrl}/upload/${list.classImage}`" @click="goPage(list.classNo)">
											<div class="heart" @click="wish(list.wishClassNo, list.classNo)" :class="{ red : list.whisClassNo !== 0, white : list.wishClassNo === 0 }"></div>
										</li>
										<li>
											<div class="star-ratings">
												<div class="star-ratings-fill" :style="{ width: ratingToPercent(list.starScore) + '%' }">
													<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
												</div>
												<div class="star-ratings-base">
													<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
												</div>
											</div>
											<span class="star-avg">({{ list.starScore }})</span>
										</li>
									</ul>
								</div>
								<!-- mymy-pay -->
								<div class="mymy-payCon">
									<div class="paycon1">
										<span class="paycon1-txt1">결제일 : {{ list.payDate}}</span>
										<span class="paycon1-txt2">
											<span v-if="list.classType == 1">[원데이]</span>
											<!-- <span v-else-if="list.classType == 2">[정규]</span>  -->
											<span v-else>[정규]</span>
											{{ list.className }}
										</span>
										<span class="paycon1-txt3">{{ list.classIntro }}</span>
										<span class="paycon1-txt4">결제 금액 : {{ list.payPrice }}원</span>
										<div class="paycon1-btnbox">
											<button type="button" id="paybtn1" @click="getAttendance(list.scheduleNo)">출석 : {{ list.attenCount }}회</button>
											<button v-if="list.reviewNo == 0" type="button" id="paybtn2" @click="revForm(list.scheduleNo)">후기 작성</button>
											<button v-else type="button" id="paybtn2" @click="revShow(list.reviewNo)">후기 보기</button>
											<button type="button" id="paybtn3" @click="inquiry(list.classUrl)">문의</button>
										</div>
									</div>
									<!-- paycon1 -->

									<div class="paycon2">
										<div v-if="list.recClassNo != 0" class="paycon2-1">
											<span class="paycon2-txt1">추천!</span>
											<img :src="`${this.$store.state.apiBaseUrl}/upload/${list.recClassImage}`" @click="goPage(list.recClassNo)">
											<span class="paycon2-txt2">{{ list.recClassName }}</span>
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
						<div v-else class="div-180">
							<div v-if="paymentData.length === 0">
								<div class="mymy-nopay">
									<img id="nopayImg" src="@/assets/images/icon/ss/nopay.png">
									<span>결제한 내역이 없어요</span>
									<router-link to="/">홈으로 가기</router-link>
								</div>
								<!-- mymy-nopay -->
							</div>

							<!-- 정규클래스 -->
							<div class="pay clearfix" v-for="(list, index) in paymentData" :key="index">
								<div class="mymy-pay">
									<ul>
										<li>
											<span class="end-msg" :class="{ endClass : checkDate(list.endDate) }">종료</span>
											<img id="pay-pro" :src="`${this.$store.state.apiBaseUrl}/upload/${list.classImage}`" @click="goPage(list.classNo)">
											<div class="heart" @click="wish(list.wishClassNo, list.classNo)" :class="{ red : list.whisClassNo !== 0, white : list.wishClassNo === 0 }"></div>
										</li>
										<li>
											<div class="star-ratings">
												<div class="star-ratings-fill" :style="{ width: ratingToPercent(list.starScore) + '%' }">
													<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
												</div>
												<div class="star-ratings-base">
													<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
												</div>
											</div>
											<span class="star-avg">({{ list.starScore }})</span>
										</li>
									</ul>
								</div>
								<!-- mymy-pay -->
								<div class="mymy-payCon">
									<div class="paycon1">
										<span class="paycon1-txt1">결제일 : {{ list.payDate}}</span>
										<span class="paycon1-txt2">
											<span v-if="list.classType == 1">[원데이]</span>
											<!-- <span v-else-if="list.classType == 2">[정규]</span>  -->
											<span v-else>[정규]</span>
											{{ list.className }}
										</span>
										<span class="paycon1-txt3">{{ list.classIntro }}</span>
										<span class="paycon1-txt4">결제 금액 : {{ list.payPrice }}원</span>
										<div class="paycon1-btnbox">
											<button type="button" id="paybtn1" @click="getAttendance(list.scheduleNo)">출석 : {{ list.attenCount }}회</button>
											<button v-if="list.reviewNo == 0" type="button" id="paybtn2" @click="revForm(list.scheduleNo)">후기 작성</button>
											<button v-else type="button" id="paybtn2" @click="revShow(list.reviewNo)">후기 보기</button>
											<button type="button" id="paybtn3" @click="inquiry(list.classUrl)">문의</button>
										</div>
									</div>
									<!-- paycon1 -->

									<div class="paycon2">
										<div v-if="list.recClassNo != 0" class="paycon2-1">
											<span class="paycon2-txt1">추천!</span>
											<img :src="`${this.$store.state.apiBaseUrl}/upload/${list.recClassImage}`" @click="goPage(list.recClassNo)">
											<span class="paycon2-txt2">{{ list.recClassName }}</span>
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
					<Observer @show="loadItem"></Observer>
				</div>
				<!--// mymy-paybox  -->
			</div>
			<!-- //mymy-main -->

			<!-- 등록모달 -->
			<div class="rev-modal">
				<div class="revform1">
					<div class="revform1-header clearfix">
						<div class="revform-closeBtn" @click="closeRevForm">x</div>
					</div>
					<!-- revform1-header -->

					<form @submit="insertReview" enctype="multipart/form-data">
						<div class="review-form">
							<div class="rf-1 clearfix">
								<div class="rf-1-1">
									<img v-if="oneClassVo.classImage !== ''" :src="`${this.$store.state.apiBaseUrl}/upload/${oneClassVo.classImage}`">
									<!-- <img src="@/assets/images/icon/ss/default-profile.png"> -->
									<span class="rf-1-1-title">
										<span v-if="oneClassVo.classType == 1">[원데이]</span><span v-else>[정규]</span>
										{{ oneClassVo.className }} 
									</span>
									<p>{{ oneClassVo.classIntro }}</p>
									<span class="rf-1-1-txt">운영 기간 : {{ oneClassVo.startDate }} ~ {{ oneClassVo.endDate }}</span>
								</div>
							</div>
							<!-- rf-1 / 클래스사진 + 클래스 설명 -->
							<div class="rf-2 clearfix">
								<span>클래스는 사용해 보셨나요?</span><br>
								<div class="star-rating">
									<input type="radio" id="5-stars1" name="reviewPoint" v-model="insertReviewVo.reviewPoint" value="5" />
									<label for="5-stars1" class="star">&#9733;</label>
									<input type="radio" id="4-stars1" name="reviewPoint" v-model="insertReviewVo.reviewPoint" value="4" />
									<label for="4-stars1" class="star">&#9733;</label>
									<input type="radio" id="3-stars1" name="reviewPoint" v-model="insertReviewVo.reviewPoint" value="3" />
									<label for="3-stars1" class="star">&#9733;</label>
									<input type="radio" id="2-stars1" name="reviewPoint" v-model="insertReviewVo.reviewPoint" value="2" />
									<label for="2-stars1" class="star">&#9733;</label>
									<input type="radio" id="1-star1" name="reviewPoint" v-model="insertReviewVo.reviewPoint" value="1" />
									<label for="1-star1" class="star">&#9733;</label>
								</div>
								<!-- star-rating -->
							</div>
							<!-- rf-2 / 별점 부분 -->	

							<div class="rf-3 clearfix">
								<span>수업의 내용은 좋았나요?</span><br>
								<div class="revbox">
									<input id="rev1-bad1" type="radio" name="reviewQ1" v-model="insertReviewVo.reviewQ1" value="1"><br>
									<label for="rev1-bad1">별로에요</label>
								</div>
								<div class="revbox">
									<input id="rev1-mid1" type="radio" name="reviewQ1" v-model="insertReviewVo.reviewQ1" value="3"><br>
									<label for="rev1-mid1">만족해요</label>
								</div>
								<div class="revbox">
									<input id="rev1-good1" type="radio" name="reviewQ1" v-model="insertReviewVo.reviewQ1" value="5"><br>
									<label for="rev1-good1">아주 만족해요</label>
								</div>
							</div>
							<!-- rf-3 / 질문1 -->

							<div class="rf-4 clearfix">
								<span>시설에 만족하셨나요?</span><br>
								<div class="revbox">
									<input id="rev2-bad1" type="radio" name="reviewQ2" v-model="insertReviewVo.reviewQ2" value="1"><br>
									<label for="rev2-bad1">별로에요</label>
								</div>
								<div class="revbox">
									<input id="rev2-mid1" type="radio" name="reviewQ2" v-model="insertReviewVo.reviewQ2" value="3"><br>
									<label for="rev2-mid1">만족해요</label>
								</div>
								<div class="revbox">
									<input id="rev2-good1" type="radio" name="reviewQ2" v-model="insertReviewVo.reviewQ2" value="5"><br>
									<label for="rev2-good1">아주 만족해요</label>
								</div>
							</div>
							<!-- rf-4 / 질문2 -->

							<div class="rf-5 clearfix">
								<span>강의비용은 적당했나요?</span><br>
								<div class="revbox">
									<input id="rev3-bad1" type="radio" name="reviewQ3" v-model="insertReviewVo.reviewQ3" value="1"><br>
									<label for="rev3-bad1">별로에요</label>
								</div>
								<div class="revbox">
									<input id="rev3-mid1" type="radio" name="reviewQ3" v-model="insertReviewVo.reviewQ3" value="3"><br>
									<label for="rev3-mid1">만족해요</label>
								</div>
								<div class="revbox">
									<input id="rev3-good1" type="radio" name="reviewQ3" v-model="insertReviewVo.reviewQ3" value="5"><br>
									<label for="rev3-good1">아주 만족해요</label>
								</div>
							</div>
							<!-- rf-5 / 질문3 -->

							<div class="rf-6">
								<span>리뷰를 작성해 주세요</span><br>
								<textarea spellcheck="false" name="reviewContent" v-model="insertReviewVo.reviewContent"></textarea>
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
								<button class="back-btn" type="button" @click="closeRevForm">뒤로 가기</button>
								<button id="insert-button" class="insert-btn" type="submit">후기 등록</button>				
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
						<div class="revform-closeBtn" @click="closeRevForm2">x</div>
					</div>
					<!-- revform1-header -->
					<div class="review-form1">
						<div class="rf-1 clearfix">
							<div class="rf-1-1">
								<img v-if="showReviewVo.classImage !== ''" :src="`${this.$store.state.apiBaseUrl}/upload/${showReviewVo.classImage}`">
								<span class="rf-1-1-title"><span v-if="showReviewVo.classType == 1">[원데이]</span><span v-else>[정규]</span>  {{ showReviewVo.className }}</span>
								<span class="rf-1-1-classDate">운영 기간 : {{ formatDate(showReviewVo.startDate) }} ~ {{ formatDate(showReviewVo.endDate) }}</span>
								<span class="rf-1-1-revDate">리뷰 작성일 : {{ formatDate(showReviewVo.reviewDate) }} </span>
							</div>
						</div>
						<div class="rf-2-1">
							<span class="rf-2-1-title" >클래스는 사용해 보셨나요?</span>
							<div class="star-rating">
								<input type="radio" id="5-stars2" name="reviewPoint" v-model="showReviewVo.reviewPoint" value="5" />
								<label for="5-stars2" class="star">&#9733;</label>
								<input type="radio" id="4-stars2" name="reviewPoint" v-model="showReviewVo.reviewPoint" value="4" />
								<label for="4-stars2" class="star">&#9733;</label>
								<input type="radio" id="3-stars2" name="reviewPoint" v-model="showReviewVo.reviewPoint" value="3" />
								<label for="3-stars2" class="star">&#9733;</label>
								<input type="radio" id="2-stars2" name="reviewPoint" v-model="showReviewVo.reviewPoint" value="2" />
								<label for="2-stars2" class="star">&#9733;</label>
								<input type="radio" id="1-star2" name="reviewPoint" v-model="showReviewVo.reviewPoint" value="1" />
								<label for="1-star2" class="star">&#9733;</label>
							</div>
						</div>

						<div class="rf-3 clearfix">
							<span>수업의 내용은 좋았나요?</span><br>
							<div class="revbox">
								<input id="rev1-bad2" type="radio" name="reviewQ1" v-model="showReviewVo.reviewQ1" value="1" ><br>
								<label for="rev1-bad2" >별로에요</label>
							</div>
							<div class="revbox">
								<input id="rev1-mid2" type="radio" name="reviewQ1" v-model="showReviewVo.reviewQ1" value="3" /><br>
								<label for="rev1-mid2" >만족해요</label>
							</div>
							<div class="revbox">
								<input id="rev1-good2" type="radio" name="reviewQ1" v-model="showReviewVo.reviewQ1" value="5" /><br>
								<label for="rev1-good2" >아주 만족해요</label>
							</div>
						</div>
						<!-- rf-3 / 질문1 -->

						<div class="rf-4 clearfix">
							<span>시설에 만족하셨나요?</span><br>
							<div class="revbox">
								<input id="rev2-bad2" type="radio" name="reviewQ2" v-model="showReviewVo.reviewQ2" value="1" ><br>
								<label for="rev2-bad2" >별로에요</label>
							</div>
							<div class="revbox">
								<input id="rev2-mid2" type="radio" name="reviewQ2" v-model="showReviewVo.reviewQ2" value="3" ><br>
								<label for="rev2-mid2" >만족해요</label>
							</div>
							<div class="revbox">
								<input id="rev2-good2" type="radio" name="reviewQ2" v-model="showReviewVo.reviewQ2" value="5" ><br>
								<label for="rev2-good2" >아주 만족해요</label>
							</div>
						</div>
						<!-- rf-4 / 질문2 -->

						<div class="rf-5 clearfix">
							<span>강의비용은 적당했나요?</span><br>
							<div class="revbox">
								<input id="rev3-bad2" type="radio" name="reviewQ3" v-model="showReviewVo.reviewQ3" value="1" ><br>
								<label for="rev3-bad2" >별로에요</label>
							</div>
							<div class="revbox">
								<input id="rev3-mid2" type="radio" name="reviewQ3" v-model="showReviewVo.reviewQ3" value="3" ><br>
								<label for="rev3-mid2" >만족해요</label>
							</div>
							<div class="revbox">
								<input id="rev3-good2" type="radio" name="reviewQ3" v-model="showReviewVo.reviewQ3" value="5" ><br>
								<label for="rev3-good2" >아주 만족해요</label>
							</div>
						</div>
						<!-- rf-5 / 질문3 -->

						<div class="rf-6">
							<span>리뷰를 작성해 주세요</span><br>
							<textarea spellcheck="false" name="reviewContent" v-model="showReviewVo.reviewContent"></textarea>
						</div>
						<!-- rf-6 / 리뷰작성란 -->

						<div class="filebox">
							<span>등록한 사진</span>
							<img v-if="showReviewVo.reviewImage == 0" :src="prevImg">
							<img v-else :src="prevImg">
							<div class="filebox-1">
								<input class="upload-name" v-model="fileName2" placeholder="선택된 파일이 없습니다" readonly>
								<label for="file2">파일찾기</label>
								<input id="file2" type="file" name="file" @change="getfile2">
							</div>
						</div>
						<!-- filebox / 사진첨부 -->

						<div class="rf-8">
							<button class="back-btn" type="button" @click="closeRevForm2">뒤로 가기</button>
							<button class="insert-btn" type="button" @click="modifyReview">수정</button>				
						</div>
						<!-- rf-8 / 버튼 -->

						<div class="rf-9"></div>
						<!-- rf-9 / 높이 여백용 -->

					</div>
					<!-- //review-form1 -->
				</div>
				<!-- //revform1 -->
			</div>
			<!-- 리뷰보기 모달 -->

			<div class="showAttendance">
				<div class="revform1">
					<div class="revform1-header clearfix">
						<div class="revform-closeBtn" @click="closeRevForm3">x</div>
					</div>
					<!-- revform1-header -->
					<div class="show-atten">
						<div class="atten1">{{ attenClassVo.attenClassName }}</div>
						<div class="atten2">수강 기간 : {{ formatDate(attenClassVo.attenClassStartDate) }} ~ <span v-if="attenClassVo.attenClassEndDate != null"> {{ formatDate(attenClassVo.attenClassEndDate) }}</span></div>
						<div class="atten3">
							<ul class="clearfix">
								<li>출석 : {{ attenClassVo.attenCount }}</li>
							</ul>
						</div>
						<!-- atten3 -->
						<div v-if="attenList.length > 0" class="atten4">
							<table>
								<colgroup>
									<col width="60%">
									<col width="40%">
								</colgroup>
								<thead>
									<th>날짜</th>
									<th>출결</th>
								</thead>
								<tbody v-for="(list,index) in attenList" :key="index">
									<td>{{ formatDate(list.attenDate) }}</td>
									<td>{{ list.attenType }}</td>
								</tbody>
							</table>
						</div>
						<!-- atten4 -->

						<div v-else>
							<div class="atten4">
								<span class="atten4-noTxt">출결내용이 없어요</span>
							</div>
						</div>
						<!-- atten4 -->
					</div>
					<!-- show-atten -->
				</div>
				<!-- revform1 -->
			</div>
			<!-- //showAttendance -->


		</div>
		<!-- //mypage-content -->
	</div>
	<!-- //mymy -->
</div>
<!-- //wrap -->

<AppFooter/>
<!-- //footer -->
</template>


<script setup>
import Observer from '@/components/ObserverView.vue';
</script>

<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/ss.css';
import '@/assets/css/ss/mypay.css';
import '@/assets/css/ss/myrevform.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import MyPageHeader from '@/components/MyPageHeader.vue';
import MyPageSide from '@/components/MyPageSide.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';


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
			classType : 1, // 원데이클래스면 1, 정규클래스면 2
			isEnd : false, // false면 안보임 , true면 종료표시
			isPay : false, // 결제여부확인
			paymentData : [], // 결제정보가져와서 저장될 곳
			page : 0,
			attenClassVo:{
				attenClassName : '',
				attenClassStartDate : '',
				attenClassEndDate : '',
				attenCount : 0,
			},
			attenList : [], // 출석부 보여줄 때 쓸 데이터 
			getClassImg : require('@/assets/images/hs/cake.jpg'), // 클래스이미지 
			oneClassVo : { // 리뷰등록모달 켜졌을때 가져올 데이터 
				classNo : '',
				classImage : '',
				className : '',
				classIntro : '',
				classType : '',
				scheduleNo : '',
				startDate : '',
				endDate : '',
			},
			insertReviewVo : { // 리뷰등록할때 필요함 - 폼에서 입력받음
				scheduleNo : '',
				reviewPoint : '',
				reviewQ1 : '',
				reviewQ2 : '',
				reviewQ3 : '',
				reviewContent : ''
			},
			showReviewVo: { // 작성한 리뷰 볼때 쓸 데이터 - 리뷰보기 / 수정 했을때 
				classNo : '',
				classImage : '',
				className : '',
				classIntro : '',
				classType : '',
				startDate : '',
				endDate : '',
				scheduleNo : '',
				reviewNo : '',
				reviewDate : '',
				reviewPoint : '',
				reviewQ1 : '',
				reviewQ2 : '',
				reviewQ3 : '',
				reviewContent : '',
				reviewImage : ''
			}, 
			file : '', // 첨부 파일
			fileName : null, // 파일 이름
			file2 : '', // 첨부 파일
			fileName2 : null, // 파일 이름
			// 리뷰 작성 파일에 기본나타낼 이미지, 리뷰등록시 이미지 등록안하면 뜨게할 이미지
			prevImg : require('@/assets/images/icon/ss/default-photo.png'),   
		};
	},
	methods: {
		// 날짜 변환
		formatDate(date){
			return moment(date).format(`YYYY년 MM월 DD일 HH:MM `);
		},

		// 종료 날짜 계산
		checkDate(endDate){
			if(endDate == null){
				this.isEnd = false;
			} else {
				let momentNow = moment();
				let momentEnd = moment(endDate);
				if(momentNow.isAfter(momentEnd)){
					this.isEnd = true;
				} else {
					this.isEnd = false;
				}
			}
		},

		/////////////////////////////////// 출석부 //////////////////////////////////////
		// 출석부 모달열기
		getAttendance(scheduleNo){
			let modal = document.querySelector('.showAttendance');
			modal.style.display = 'block';

			axios({
				method: 'get',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/attenlist`,
				headers: { 'Content-Type': 'application/json; charset=utf-8', 
							'Authorization' : 'Bearer ' + this.$store.state.token
				},
				params : {scheduleNo : scheduleNo},
				responseType: 'json'
			}).then(response => {
				if(response.data.result === 'success'){
					this.attenClassVo.attenClassName = response.data.apiData.className;
					this.attenClassVo.attenClassStartDate = response.data.apiData.startDate;
					this.attenClassVo.attenClassEndDate = response.data.apiData.endDate;
					this.attenClassVo.attenCount = response.data.apiData.attenCount;
					this.attenList = response.data.apiData.list;
				} else {
					Swal.fire({text: '통신오류'});
				}
			}).catch(error => {
				console.log(error);
			});
		},

		// 출석부 닫기
		closeRevForm3(){
			let modal = document.querySelector('.showAttendance');
			modal.style.display = 'none';
		},

		/////////////////////////////////// 리뷰 보기/수정 ////////////////////////////////////////////////
		
		// 작성한 리뷰 보기/수정 열기
		revShow(reviewNo){
			let modal = document.querySelector('.showRev-modal');
			let revForm1 = document.querySelector('.review-form1');
			modal.style.display = 'block';
			revForm1.style.display = 'block';

			axios({
				method: 'get',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/reviews`,
				headers: { 'Content-Type': 'application/json; charset=utf-8',
							'Authorization' : 'Bearer ' + this.$store.state.token
				},
				params : {reviewNo : reviewNo},
				responseType: 'json'
			}).then(response => {
				if(response.data.result === 'success'){
					this.showReviewVo = response.data.apiData;
					this.fileName2 = response.data.apiData.reviewImage;
					if(this.fileName2 == 0){
						this.prevImg = require('@/assets/images/icon/ss/default-photo.png');
					} else {
						this.prevImg = `${this.$store.state.apiBaseUrl}/upload/${response.data.apiData.reviewImage}`;
					}
				} else {
					Swal.fire({text: '리뷰를 등록해주세요.'});
				}
			}).catch(error => {
				console.log(error);
			});


		},

		// 파일 가져오기
		getfile2(event){
			this.file2 = event.target.files[0];
			const READER = new FileReader();

			READER.onload = (e) =>{
				this.prevImg = e.target.result;
			}
			if(this.file2){
				READER.readAsDataURL(this.file2);
			}
			if(this.file2 != null){
				this.fileName2 = this.file2.name;
			}			
		},
		

		// 리뷰 수정하기
		modifyReview(){
			const formData = new FormData();

			if(this.file2 == ''){
				console.log('파일 없음');
			} else {
				formData.append('file', this.file2);
			}
			formData.append('reviewNo',this.showReviewVo.reviewNo);
			formData.append('reviewPoint',this.showReviewVo.reviewPoint);
			formData.append('reviewQ1', this.showReviewVo.reviewQ1);
			formData.append('reviewQ2', this.showReviewVo.reviewQ2);
			formData.append('reviewQ3', this.showReviewVo.reviewQ3);
			formData.append('reviewContent', this.showReviewVo.reviewContent);
			formData.append('reviewImage', this.showReviewVo.reviewImage);

			axios({
				method: 'put',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/reviews`,
				headers: { 'Content-Type': 'multipart/form-data',
						'Authorization' : 'Bearer ' + this.$store.state.token
				},
				data: formData,
				responseType: 'json'
			}).then(response => {
				if(response.data.result === 'success' && response.data.apiData === 1){
					this.$router.push('/mypage/pay');
					this.getList(1);
					this.closeRevForm2();
					window.location.reload(true);
				} else {
					Swal.fire({text : '업데이트에 실패했습니다.'});
				}
			}).catch(error => {
				console.log(error);
			});

		},

		// 리뷰 보기 모달 닫기
		closeRevForm2(){
			let modal = document.querySelector('.showRev-modal');
			modal.style.display = 'none';
			this.file2 = '';
			this.fileName2 = '';
			this.prevImg = require('@/assets/images/icon/ss/default-photo.png');  
		},
		
		///////////////////////////////////////////////////////////////////////////////////

		////////////////////////////////////////////  리뷰 등록  ///////////////////////////////////////
		
		// 리뷰 작성 모달 열기 
		revForm(no){
			this.insertReviewVo = {
				scheduleNo : no,
				reviewPoint : '',
				reviewQ1 : '',
				reviewQ2 : '',
				reviewQ3 : '',
				reviewContent : ''
			}
			this.fileName = '';
			this.prevImg = require('@/assets/images/icon/ss/default-photo.png');

			let modal = document.querySelector('.rev-modal');
			let revForm = document.querySelector('.review-form');
			modal.style.display = 'block';
			revForm.style.display = 'block';

			axios({
				method: 'get',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/getclassone`,
				headers: { 'Content-Type': 'application/json; charset=utf-8',},
				params : {scheduleNo: no},
				responseType: 'json'
			}).then(response => {
				if(response.data.result === 'success'){
					this.oneClassVo = response.data.apiData;
				} else {
					Swal.fire({text : '데이터를 불러오는데 실패했습니다.', icon : 'error'});
				}
			}).catch(error => {
				console.log(error);
			});
		},

		// 파일 가져오기
		getfile(event){
			this.file = event.target.files[0];
			const READER = new FileReader();

			READER.onload = (e) =>{
				this.prevImg = e.target.result;
			}
			if(this.file){
				READER.readAsDataURL(this.file);
			}
			if(this.file != null){
				this.fileName = this.file.name;
			}			
		},

		// 등록버튼 클릭시 
		insertReview(){
			const formData = new FormData();

			if(this.file == ''){
				console.log('파일 없음');
			} else {
				formData.append('file', this.file);
			}
			
			formData.append('scheduleNo',this.insertReviewVo.scheduleNo);
			formData.append('reviewPoint',this.insertReviewVo.reviewPoint);
			formData.append('reviewContent',this.insertReviewVo.reviewContent);
			formData.append('reviewQ1',this.insertReviewVo.reviewQ1);
			formData.append('reviewQ2',this.insertReviewVo.reviewQ2);
			formData.append('reviewQ3',this.insertReviewVo.reviewQ3);
			
			axios({
				method: 'post',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/reviews`,
				headers: { 'Content-Type': 'multipart/form-data',
						'Authorization' : 'Bearer ' + this.$store.state.token
				},
				data: formData,
				responseType: 'json'
			}).then(response => {
				if(response.data.result === 'success'){
					this.$router.push('/mypage/pay');
					this.getList(1);
					this.closeRevForm();
					window.location.reload(true);
				} else {
					Swal.fire({text: response.data.message});
				}
			}).catch(error => {
				console.log(error);
			});
			
		},
		
		// 리뷰 작성 모달 닫기
		closeRevForm(){
			let modal = document.querySelector('.rev-modal');
			modal.style.display = 'none';
		},		

		///////////////////////////////////////////////////////////////////////////////////

		// 정규클래스 원데이 클래스 선택
		selectClass(no){
			if(no == 1){ // true면 원데이클래스
				this.paymentData = [];
				this.page = 0;
				this.classType = 1;
				this.getList(this.classType);
				this.isClass = true;
			} else { // false면 정규클래스
				this.paymentData = [];
				this.page = 0;
				this.classType = 2;
				this.getList(this.classType);
				this.isClass = false;
			}
		},
		
		// 하트이미지 클릭 -> 위시리스트에 담기기 
		wish(wishClassNo, classNo){

			// no가 0이면 wishclass 추가 + wishClassNo 가져와서 추가 값 바꿔주기 , no가 0 이아니면 삭제  삭제한뒤에 0으로 바꿔준다
			if(wishClassNo == 0){
				axios({
					method: 'post',
					url: `${this.$store.state.apiBaseUrl}/odo/ss/wishclassis`,
					headers: { 'Content-Type': 'application/json; charset=utf-8',
								'Authorization' : 'Bearer ' + this.$store.state.token
					},
					params : {classNo : classNo},
					responseType: 'json'
				}).then(response => {
					if(response.data.result === 'success'){
						wishClassNo = response.data.apiData;
						window.location.reload(true);
					} else {
						Swal.fire({text : response.data.message});
					}
				}).catch(error => {
					console.log(error);
				});
			} else {
				axios({
					method: 'delete',
					url: `${this.$store.state.apiBaseUrl}/odo/ss/wishclassis`,
					headers: { 'Content-Type': 'application/json; charset=utf-8',
								'Authorization' : 'Bearer ' + this.$store.state.token
					},
					params : {classNo : classNo, wClassNo : wishClassNo},
					responseType: 'json'
				}).then(response => {
					if(response.data.result === 'success'){
						wishClassNo = 0;
						window.location.reload(true);
					} else {
						Swal.fire({text : response.data.message});
					}
					
				}).catch(error => {
					console.log(error);
				});
			}
		},

		

		

		// 문의요청
		inquiry(url){
			console.log(url);
		},

		// 선택한 페이지 이동
		goPage(no){
			this.$router.push('/classdetailpage/'+ no);
		},
		// 별점 퍼센트 보여주기(결제내역 - 결제한 클래스)
		ratingToPercent(no){
			let starScore = (no / 5 ) * 100;
			return starScore + 1.5;
		},
		
		// 결제정보 페이징 용 옵저거 
		loadItem(){
			this.page ++;
			this.getList(this.classType);
		},

		// 결제정보 가져오기
		getList(paymentType){
			
			axios({
				method: 'get',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/getpaylist`,
				headers: { 'Content-Type': 'application/json; charset=utf-8', 
							'Authorization' : 'Bearer ' + this.$store.state.token},
				params : {classType : paymentType, page : this.page},
				responseType: 'json'
			}).then(response => {
				if(response.data.result === 'success' && response.data.apiData != null){
					this.paymentData.push(...(response.data.apiData));
					this.isPay = this.paymentData.length > 0;
					// this.isClass = this.paymentData.some((item) => item.classType === 1);
					// if(!this.isPay && this.isClass){
					// 	this.isClass =false;
					// }
				} else {
					Swal.file({text: '통신오류입니다.'})
				}
			}).catch(error => {
				console.log(error);
			});
		},
	},
	
	created(){
		// 데이터가져오는 메소드 실행
		this.getList(this.classType);
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

.mymy-pay .white {
	background-color: #fff;
}
.mymy-pay .white::before {
	background-color: #fff;
}

.mymy-pay .white::after{
	background-color: #fff;
}


.endClass {
	display: block;
}

</style>