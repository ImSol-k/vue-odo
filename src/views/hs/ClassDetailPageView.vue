<template>
	<AppHeader />
	<!-- //header -->

	<div class="inner">
		<div class="detail-inner">

			<div class="headSection">
				<img class="representImg"
					:src="`${this.$store.state.apiBaseUrl}/upload/${this.classDetailVo.classImg}`">

				<div class="headInfoBox">
					<div>
						<h1>{{ this.classDetailVo.className }}</h1>
						<div>
							<p v-if="this.classDetailVo.classPrice != 0">{{
						Number(this.classDetailVo.classPrice).toLocaleString('ko-KR') }}<span>원</span></p>
							<p v-else>무료</p>
							<div v-if="this.classDetailVo.wish == 1" class="class-like-btn red"
								@click="minusWish(this.classDetailVo.wClassNo)">
								<img src="../../assets/images/icon/hs/red_heart.png" alt="">
							</div>
							<div v-else class="class-like-btn" @click="plusWish">
								<img src="../../assets/images/icon/hs/black_heart_icon.png" alt="">
							</div>
						</div>
					</div>

					<div class="orderSelectBox">
						<select name="" id="" class="" v-model="selectedSchedule" @change="updateOrderDate">
							<option :value="null">일정/시간</option>
							<option v-for=" schedule in schList" :key="schedule.id" :value="schedule">
								{{ schedule.startDate }} ~ {{ schedule.endDate }}
							</option>
						</select>
						<div class="orderDate" v-if="selectedSchedule">
							{{ selectedSchedule.startDate }} ~ {{ selectedSchedule.endDate }}
						</div>
						<div class="howMuch">
							<span>
								<b v-if="selectedSchedule && classDetailVo.classPrice != 0">주문금액 {{
						Number(classDetailVo.classPrice).toLocaleString('ko-KR') }}원</b>
								<b v-else-if="selectedSchedule">무료</b>
								<b v-else></b>
							</span>
						</div>
						<button @click="goToPay">결제하기</button>
					</div>

					<div class="companySection">
						<router-link :to="`/companyinfo/${this.classDetailVo.companyNo}`" class="companyLogo">
							<img :src="`${this.$store.state.apiBaseUrl}/upload/${this.companyInfo.companyImg}`" alt="">
						</router-link>
						<router-link :to="`/companyinfo/${this.classDetailVo.companyNo}`" class="nameBox">
							<p>{{ this.companyInfo.companyName }}</p>
							<p>
								<span>클래스 {{ this.cMap.comClassCnt }}</span>
								<span>후기 {{ this.cMap.comReviewCnt }}</span>
								<span>찜 {{ this.cMap.comWishCnt }}</span>
							</p>
						</router-link>
						<div v-if="this.companyInfo.cWish == 1" class="company-like-btn red"
							@click="minusComWish(this.companyInfo.wCompanyNo)">
							<img src="../../assets/images/icon/hs/red_heart.png" alt="">
						</div>
						<div v-else class="company-like-btn" @click="plusComWish(this.classDetailVo.companyNo)">
							<img src="../../assets/images/icon/hs/black_heart_icon.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<!-- //headerSection-->

			<div v-if="this.classReviewList != null" class="reviewSection">
				<ul>
					<li v-for=" review in classReviewList " :key="review">
						<router-link :to="`/reviewpage/${this.$route.params.classNo}`">
							<img :src="`${this.$store.state.apiBaseUrl}/upload/${review.reviewImg}`" alt="">
							<div>
								<img :src="`${this.$store.state.apiBaseUrl}/upload/${review.userImg}`" alt="">
								<span>{{ review.userNickname }}</span>
							</div>
							<p>{{ review.reviewContent }}</p>
						</router-link>
					</li>
				</ul>
				<router-link v-if="this.cMap.classReviewCnt != 0" class="moreReviewBtn"
					:to="`/reviewpage/${this.$route.params.classNo}`">{{
						this.cMap.classReviewCnt }}개 후기 더보기 ></router-link>
			</div>
			<!-- //reviewSection -->

			<div class="classInfoSection">
				<h2>클래스 설명</h2>
				<div>
					<span>{{ this.classDetailVo.classIntro }}</span>
				</div>
			</div>
			<!-- //classInfoSection -->

			<div class="classIntroduceSection">
				<h2>클래스 소개</h2>
				<div class="classIntroImgBox" :class="{ 'show': isMoreInfo }">
					<!-- 이자리 -->
					<div class="shadowBox" :class="{ 'show': isMoreInfo }"></div>
				</div>
				<button class="moreInfoBtn" :class="{ 'show': isMoreInfo }" @click="moreInfo">상세정보 더보기</button>
			</div>
			<!-- //classIntroduce -->

			<h2>진행하는 장소</h2>
			<div class="mapWraper">
				<div id="map" style="width:1000px;height:300px;border-radius: 10px;"></div>
				<b>{{ this.classDetailVo.classDetailAdd }}</b>
				<p>{{ this.classDetailVo.classNameAdd }}</p>
			</div>

			<div class="b-link">
				<p>1:1 문의</p>
				<p>유의 사항</p>
				<p>환불 정책</p>
			</div>


		</div>
		<!-- //detail-inner -->

	</div>
	<!-- //inner -->

	<AppFooter />
	<!-- //footer -->
</template>
<script>
import "@/assets/css/hs/classDetailPage.css"

import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

import axios from 'axios';
import Swal from "sweetalert2";
import "@vueup/vue-quill";

export default {
	name: "ClassDetailPageView",
	components: {
		AppHeader,
		AppFooter,
	},
	data() {
		return {
			selectedSchedule: null,
			isMoreInfo: false,
			cMap: {},
			classDetailVo: {},
			companyInfo: {},
			nameAdd: "",
			schList: [],
			classReviewList: [],
			wishVo: {
				userNo: null,
				classNo: null
			},
		};
	},
	mounted() {
		if (window.kakao && window.kakao.maps) {
			this.initMap();
		} else {
			const script = document.createElement('script');

			script.onload = () => kakao.maps.load(this.initMap);
			script.src =
				'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=dcd5445d7a7dc0572e91ed1fd7ad2d2b';
			document.head.appendChild(script);
		}
	},
	methods: {
		minusComWish(wCompanyNo) {
			if (this.$store.state.authUser == '' && this.$store.state.token == '') {
				Swal.fire({
					title: "로그인 후 이용 가능합니다.",
					text: "로그인 하시겠습니까?",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "예",
					cancelButtonText: "아니오"
				}).then(result => {
					if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
						// ...실행
						this.$router.push('/login/user');

					} else if (result.isDismissed) { // 만약 모달창에서 cancel 버튼을 눌렀다면
						// ...실행
					}
				});
			} else {
				this.wishVo.classNo = wCompanyNo;
				this.wishVo.userNo = this.$store.state.authUser.userNo;

				axios({
					method: 'delete', // put, post, delete
					url: `${this.$store.state.apiBaseUrl}/odo/comwishes`,
					headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
					//params: guestbookVo, //get방식 파라미터로 값이 전달
					data: this.wishVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
					responseType: 'json' //수신타입
					/* eslint-disable */
				}).then(response => {
					// console.log(response.data.apiData);
					this.getClassDetail();

				}).catch(error => {
					console.log(error);
				});
			}
		},
		plusComWish(companyNo) {
			if (this.$store.state.authUser == '' && this.$store.state.token == '') {
				Swal.fire({
					title: "로그인 후 이용 가능합니다.",
					text: "로그인 하시겠습니까?",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "예",
					cancelButtonText: "아니오"
				}).then(result => {
					if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
						// ...실행
						this.$router.push('/login/user');

					} else if (result.isDismissed) { // 만약 모달창에서 cancel 버튼을 눌렀다면
						// ...실행
					}
				});
			} else {
				this.wishVo.classNo = companyNo;
				this.wishVo.userNo = this.$store.state.authUser.userNo;

				axios({
					method: 'post', // put, post, delete
					url: `${this.$store.state.apiBaseUrl}/odo/comwishes`,
					headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
					//params: guestbookVo, //get방식 파라미터로 값이 전달
					data: this.wishVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
					responseType: 'json' //수신타입
					/* eslint-disable */
				}).then(response => {
					// console.log(response.data.apiData);
					this.getClassDetail();

				}).catch(error => {
					console.log(error);
				});
			}
		},
		minusWish(wClassNo) {
			if (this.$store.state.authUser == '' && this.$store.state.token == '') {
				Swal.fire({
					title: "로그인 후 이용 가능합니다.",
					text: "로그인 하시겠습니까?",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "예",
					cancelButtonText: "아니오"
				}).then(result => {
					if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
						// ...실행
						this.$router.push('/login/user');

					} else if (result.isDismissed) { // 만약 모달창에서 cancel 버튼을 눌렀다면
						// ...실행
					}
				});
			} else {
				this.wishVo.classNo = wClassNo;
				this.wishVo.userNo = this.$store.state.authUser.userNo;

				axios({
					method: 'delete', // put, post, delete
					url: `${this.$store.state.apiBaseUrl}/odo/wishes`,
					headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
					//params: guestbookVo, //get방식 파라미터로 값이 전달
					data: this.wishVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
					responseType: 'json' //수신타입
					/* eslint-disable */
				}).then(response => {
					// console.log(response.data.apiData);
					this.getClassDetail();

				}).catch(error => {
					console.log(error);
				});
			}

		},
		plusWish() {
			if (this.$store.state.authUser == '' && this.$store.state.token == '') {
				Swal.fire({
					title: "로그인 후 이용 가능합니다.",
					text: "로그인 하시겠습니까?",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "예",
					cancelButtonText: "아니오"
				}).then(result => {
					if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
						// ...실행
						this.$router.push('/login/user');

					} else if (result.isDismissed) { // 만약 모달창에서 cancel 버튼을 눌렀다면
						// ...실행
					}
				});
			} else {
				this.wishVo.classNo = this.$route.params.classNo;
				this.wishVo.userNo = this.$store.state.authUser.userNo;

				axios({
					method: 'post', // put, post, delete
					url: `${this.$store.state.apiBaseUrl}/odo/wishes`,
					headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
					//params: guestbookVo, //get방식 파라미터로 값이 전달
					data: this.wishVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
					responseType: 'json' //수신타입
					/* eslint-disable */
				}).then(response => {
					// console.log(response.data.apiData);
					this.getClassDetail();

				}).catch(error => {
					console.log(error);
				});
			}
		},
		// 결제하기버튼
		goToPay() {
			if (this.selectedSchedule != null && (this.$store.state.authUser != '' && this.$store.state.token != '')) {
				this.$router.push(`/payment/${this.selectedSchedule.scheduleNo}`);

			} else if (this.$store.state.authUser == '' && this.$store.state.token == '') {
				Swal.fire({
					title: "로그인 후 이용 가능합니다.",
					text: "로그인 하시겠습니까?",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "예",
					cancelButtonText: "아니오"
				}).then(result => {
					if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
						// ...실행
						this.$router.push('/login/user');

					} else if (result.isDismissed) { // 만약 모달창에서 cancel 버튼을 눌렀다면
						// ...실행
					}
				});
				// alert("로그인 후 결제해주세요");
			} else {
				Swal.fire({
					text: "일정/시간을 선택해주세요",
					icon: "warning",
					confirmButtonColor: "#3085d6",
					confirmButtonText: "확인"
				});
				// alert("일정/시간을 선택해주세요");
			}
		},
		updateOrderDate() {
			// selectedSchedule 데이터 변경으로 인해 div의 내용과 스타일이 자동으로 업데이트 됩니다.

		},
		getClassDetail() {

			// 비로그인
			if (this.$store.state.authUser == "" && this.$store.state.token == "") {
				axios({
					method: 'get', // put, post, delete
					url: `${this.$store.state.apiBaseUrl}/odo/classdetails`,
					headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
					params: { classNo: this.$route.params.classNo }, //get방식 파라미터로 값이 전달
					//data: this.$route.params.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달
					responseType: 'json' //수신타입
				}).then(response => {
					// 비우고
					this.cMap = null;
					this.classDetailVo = null;
					this.companyInfo = null;
					this.classReviewList = null;
					this.schList = null;
					// 넣기
					this.cMap = response.data.apiData;
					this.classDetailVo = this.cMap.classDetailVo;
					this.companyInfo = this.cMap.companyInfo;
					this.classReviewList = this.cMap.classReviewList;
					this.schList = this.cMap.schList;

					let classIntroImgBox = document.querySelector('.classIntroImgBox');
					classIntroImgBox.insertAdjacentHTML("afterbegin", this.classDetailVo.classInfo);


				}).catch(error => {
					console.log(error);
				});

				// 로그인
			} else {
				axios({
					method: 'get', // put, post, delete
					url: `${this.$store.state.apiBaseUrl}/odo/classdetails/users`,
					headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
					params: {
						userNo: this.$store.state.authUser.userNo,
						classNo: this.$route.params.classNo
					}, //get방식 파라미터로 값이 전달
					//data: this.$route.params.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달
					responseType: 'json' //수신타입
				}).then(response => {
					// 비우고
					this.cMap = null;
					this.classDetailVo = null;
					this.companyInfo = null;
					this.classReviewList = null;
					this.schList = null;
					// 넣기
					this.cMap = response.data.apiData;
					this.classDetailVo = this.cMap.classDetailVo;
					this.companyInfo = this.cMap.companyInfo;
					this.classReviewList = this.cMap.classReviewList;
					this.schList = this.cMap.schList;

					let classIntroImgBox = document.querySelector('.classIntroImgBox');
					classIntroImgBox.insertAdjacentHTML("afterbegin", this.classDetailVo.classInfo);

				}).catch(error => {
					console.log(error);
				});

			}

		},
		// 지도
		initMap() {
			var mapContainer = document.getElementById('map'), // 지도를 표시할 div
				mapOption = {
					center: new kakao.maps.LatLng(37.498287, 127.027064), // 지도의 중심좌표
					level: 3, // 지도의 확대 레벨
				};

			// 지도를 생성합니다    
			var map = new kakao.maps.Map(mapContainer, mapOption);

			// 주소-좌표 변환 객체를 생성합니다
			var geocoder = new kakao.maps.services.Geocoder();


			axios({
				method: 'get', // put, post, delete
				url: `${this.$store.state.apiBaseUrl}/odo/classdetails/nameadd`,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				params: { classNo: this.$route.params.classNo }, //get방식 파라미터로 값이 전달
				//data: this.$route.params.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달
				responseType: 'json' //수신타입
			}).then(response => {
				this.nameAdd = response.data.apiData;

				// 주소로 좌표를 검색합니다
				geocoder.addressSearch(this.nameAdd, function (result, status) {

					// 정상적으로 검색이 완료됐으면 
					if (status === kakao.maps.services.Status.OK) {

						var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

						// 결과값으로 받은 위치를 마커로 표시합니다
						var marker = new kakao.maps.Marker({
							map: map,
							position: coords
						});

						marker.setMap(map);

						// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
						map.setCenter(coords);
					}
				});

			}).catch(error => {
				console.log(error);
			});
		},
		// 상세정보 더보기 버튼
		moreInfo() {
			this.isMoreInfo = !this.isMoreInfo;
		},

	},
	created() {
		this.getClassDetail();
	},
};
</script>
