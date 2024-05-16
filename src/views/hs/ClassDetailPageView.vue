<template>
	<AppHeader />
	<!-- //header -->

	<div class="inner">
		<div class="detail-inner">

			<div class="headSection">
				<img class="representImg" src="../../assets/images/hs/cake.jpg" alt="">
	
				<div class="headInfoBox">
					<div>
						<h1>소풍을 즐기는 새로운 방법, 루하루 티크닉 세트 [SQNC 055]</h1>
						<p>30,000<span>원</span></p>
					</div>

					<div class="orderSelectBox">
						<select name="" id="" class="">
							<option value="">일정/시간</option>
							<option value="">0000.00.00 / 00:00</option>
							<option value="">0000.00.00 / 00:00</option>
							<option value="">0000.00.00 / 00:00</option>
						</select>
						<div class="orderDate">0000.00.00 00:00(선택하면 추가됨)</div>
						<div><span>주문금액 <b>0원</b></span></div>
						<button>결제하기</button>
					</div>
	
					<div class="companySection">
						<router-link to="" class="companyLogo">
							<img src="../../assets/images/hs/rainbow_apple_icon.png" alt="">
						</router-link>
						<router-link to="" class="nameBox">
							<p>애플</p>
							<p>
								<span>클래스 0</span>
								<span>후기 0</span>
								<span>찜 0</span>
							</p>
						</router-link>
						<router-link to="" class="company-like-btn">
							<img src="../../assets/images/하트.png" alt="">
						</router-link>
					</div>
				</div>
			</div>
			<!-- //headerSection-->

			<div class="reviewSection">
				<ul>
					<li>
						<router-link to="">
							<img src="../../assets/images/hs/camera.jpg" alt="">
							<div>
								<img src="" alt=""> <span>김민규</span>
							</div>
							<p>후기어쩌고</p>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<img src="../../assets/images/hs/camera.jpg" alt="">
							<div>
								<img src="" alt=""> <span>김민규</span>
							</div>
							<p>후기어쩌고</p>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<img src="../../assets/images/hs/camera.jpg" alt="">
							<div>
								<img src="" alt=""> <span>김민규</span>
							</div>
							<p>후기어쩌고</p>
						</router-link>
					</li>
					<li>
						<router-link to="">
							<img src="../../assets/images/hs/camera.jpg" alt="">
							<div>
								<img src="" alt=""> <span>김민규</span>
							</div>
							<p>후기어쩌고</p>
						</router-link>
					</li>
				</ul>
				<router-link class="moreReviewBtn" to="">00개 후기 더보기 ></router-link>
			</div>
			<!-- //reviewSection -->

			<div class="classInfoSection">
				<h2>클래스 설명</h2>
				<div>
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel qui ut cupiditate labore dicta facere voluptatibus tenetur necessitatibus explicabo quod laudantium repellendus quae assumenda magnam, officia voluptate maiores et!</span>
				</div>
			</div>
			<!-- //classInfoSection -->
	
			<div class="classIntroduceSection">
				<h2>클래스 소개</h2>
				<div class="classIntroImgBox"></div>
				<button class="moreInfoBtn" @click="moreInfo">상세정보 더보기</button>
			</div>
			<!-- //classIntroduce -->
	
			<h2>진행하는 장소</h2>
			<div class="mapWraper">
				<div id="map" style="width:1000px;height:250px;border-radius: 10px;"></div>
				<b>강남역</b>
				<p>서울 강남구 강남대로 396</p>
			</div>
	
			<!-- <h2>포함 사항</h2>
			<div class="badge-box">
				<span class="green badge">상세 페이지 확인</span>
			</div>
	
			<h2>불포함 사항</h2>
			<div class="badge-box">
				<span class="red badge">상세 페이지 확인</span>
			</div>
	
			<h2>준비물</h2>
			<div class="badge-box">
				<span class="grey badge">상세 페이지 확인</span>
			</div> -->
	
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

export default {
	name: "ClassDetailPageView",
	components: {
		AppHeader,
		AppFooter,
	},
	data() {
		return {};
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
		initMap() {
			var mapContainer = document.getElementById('map'), // 지도를 표시할 div
				mapOption = {
					center: new kakao.maps.LatLng(37.498287, 127.027064), // 지도의 중심좌표
					level: 3, // 지도의 확대 레벨
				};

			var map = new kakao.maps.Map(mapContainer, mapOption);
			var positions = [
					{
						latlng: new kakao.maps.LatLng(37.498287, 127.027064),
					},
				];

			positions.forEach(function (pos) {
				var marker = new kakao.maps.Marker({
					position: pos.latlng,
				});
				marker.setMap(map);
			});

		},
		moreInfo() {
			let classIntroImgBox = document.querySelector('.classIntroImgBox');
			classIntroImgBox.style.height = "1500px"
		},

	},
	created() { },
};
</script>
