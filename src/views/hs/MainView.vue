<template>
	<AppHeader />
	<!-- //header -->

	<section class="main-slide">
		<Carousel :autoplay="2500" :wrap-around="true">
			<Slide v-for="slide in slides" :key="slide">
				<div class="carousel__item">
					<img class="slideImg" :src="slide" alt="">
				</div>
			</Slide>

			<template #addons>
				<Pagination />
				<Navigation />
			</template>
		</Carousel>
	</section>
	<div class="inner">
		<ul class="category-icons">
			<li><router-link to="/searchresultpage/1?crtPage=1">
					<div><img src="@/assets/images/icon/hs/main_category_icon/cooking.png" alt=""></div>
					<p>쿠킹</p>
				</router-link></li>
			<li><router-link to="/searchresultpage/2?crtPage=1">
					<div><img src="@/assets/images/icon/hs/main_category_icon/baking.png" alt=""></div>
					<p>베이킹</p>
				</router-link></li>
			<li><router-link to="/searchresultpage/3?crtPage=1">
					<div><img src="@/assets/images/icon/hs/main_category_icon/drink.png" alt=""></div>
					<p>음료</p>
				</router-link></li>
			<li><router-link to="/searchresultpage/4?crtPage=1">
					<div><img src="@/assets/images/icon/hs/main_category_icon/beauty.png" alt=""></div>
					<p>뷰티</p>
				</router-link></li>
			<li><router-link to="/searchresultpage/5?crtPage=1">
					<div><img src="@/assets/images/icon/hs/main_category_icon/craft.png" alt=""></div>
					<p>공예</p>
				</router-link></li>
			<li><router-link to="/searchresultpage/6?crtPage=1">
					<div><img src="@/assets/images/icon/hs/main_category_icon/sports.png" alt=""></div>
					<p>스포츠</p>
				</router-link></li>
			<li><router-link to="/searchresultpage/7?crtPage=1">
					<div><img src="@/assets/images/icon/hs/main_category_icon/councelling.png" alt=""></div>
					<p>심리/상담</p>
				</router-link></li>
			<li><router-link to="/searchresultpage/8?crtPage=1">
					<div><img src="@/assets/images/icon/hs/main_category_icon/it.png" alt=""></div>
					<p>IT</p>
				</router-link></li>
			<li><router-link to="/classlist">
					<div class="findAroundClass">
						<img src="../../assets/images/icon/hs/location_icon.png" alt="">
						<p><b>내 주변 클래스</b>
							내 주변에 있는 클래스 찾기
						</p>
					</div>
				</router-link></li>
		</ul>
		<section class="free-best">
			<div class="title-box">
				<h3>무료 베스트 클래스
					<img src="../../assets/images/icon/hs/like_love_icon.png" alt="">
				</h3>
				<!-- <router-link to="/searchresultpage/1">전체보기</router-link> -->
			</div>
			<ul class="classList">
				<li v-for=" fbList in listOfLists[0] " :key="fbList">
					<router-link :to="`/classdetailpage/${fbList.classNo}`">
						<div class="img-box">
							<img :src="`${this.$store.state.apiBaseUrl}/upload/${fbList.classImg}`" alt="">
							<img src="" alt="">
						</div>
						<p class="location">{{fbList.classNameAdd}}</p>
						<p class="classTitle">{{fbList.className}}</p>
						<div v-if="fbList.reviewCount != 0" class="review-box">
							<b v-if="fbList.reviewPointAvg == 5"><span class="starPoint">★★★★★</span></b>
							<b v-else-if="fbList.reviewPointAvg == 4"><span class="starPoint">★★★★☆</span></b>
							<b v-else-if="fbList.reviewPointAvg == 3"><span class="starPoint">★★★☆☆</span></b>
							<b v-else-if="fbList.reviewPointAvg == 2"><span class="starPoint">★★☆☆☆</span></b>
							<b v-else-if="fbList.reviewPointAvg == 1"><span class="starPoint">★☆☆☆☆</span></b>
							<b v-else-if="fbList.reviewPointAvg == 0"><span class="starPoint">☆☆☆☆☆</span></b>
							<span class="reviewCount">후기 {{ fbList.reviewCount }}</span>
						</div>
						<div v-else class="review-box">
							<b><span class="starPoint"></span></b>
							<span class="reviewCount"></span>
						</div>
						<p class="class-price" v-if="fbList.classPrice == 0">무료</p>
						<p class="class-price" v-else>{{fbList.classPrice.toLocaleString('ko-KR')}}</p>
					</router-link>
				</li>
			</ul>
		</section>
		<div class="banner" @click="goHost"></div>
		<section class="pay-best">
			<div class="title-box">
				<h3>유료 베스트 클래스
					<img src="../../assets/images/icon/hs/coin_icon.png" alt="">
				</h3>
				<!-- <router-link to="#">전체보기</router-link> -->
			</div>
			<ul class="classList">
				<li v-for=" pbList in listOfLists[1] " :key="pbList">
					<router-link :to="`/classdetailpage/${pbList.classNo}`">
						<div class="img-box">
							<img :src="`${this.$store.state.apiBaseUrl}/upload/${pbList.classImg}`" alt="">
							<img src="" alt="">
						</div>
						<p class="location">{{ pbList.classNameAdd }}</p>
						<p class="classTitle">{{ pbList.className }}</p>
						<div v-if="pbList.reviewCount != 0" class="review-box">
							<b v-if="pbList.reviewPointAvg == 5"><span class="starPoint">★★★★★</span></b>
							<b v-else-if="pbList.reviewPointAvg == 4"><span class="starPoint">★★★★☆</span></b>
							<b v-else-if="pbList.reviewPointAvg == 3"><span class="starPoint">★★★☆☆</span></b>
							<b v-else-if="pbList.reviewPointAvg == 2"><span class="starPoint">★★☆☆☆</span></b>
							<b v-else-if="pbList.reviewPointAvg == 1"><span class="starPoint">★☆☆☆☆</span></b>
							<b v-else-if="pbList.reviewPointAvg == 0"><span class="starPoint">☆☆☆☆☆</span></b>
							<span class="reviewCount">후기 {{ pbList.reviewCount }}</span>
						</div>
						<div v-else class="review-box">
							<b><span class="starPoint"></span></b>
							<span class="reviewCount"></span>
						</div>
						<p class="class-price">{{ pbList.classPrice.toLocaleString('ko-KR') }}원</p>
					</router-link>
				</li>
			</ul>
		</section>
		<div class="banner" @click="goHost"></div>
		<section class="new pay-best">
			<div class="title-box">
				<h3>신규 클래스
					<img src="../../assets/images/icon/hs/new_badge_icon.png" alt="">
				</h3>
				<!-- <router-link to="#">전체보기</router-link> -->
			</div>
			<ul class="classList">
				<li v-for=" nList in listOfLists[2] " :key="nList">
					<router-link :to="`/classdetailpage/${nList.classNo}`">
						<div class="img-box">
							<img :src="`${this.$store.state.apiBaseUrl}/upload/${nList.classImg}`" alt="">
							<img src="" alt="">
						</div>
						<p class="location">{{ nList.classNameAdd }}</p>
						<p class="classTitle">{{ nList.className }}</p>
						<div v-if="nList.reviewCount != 0" class="review-box">
							<b v-if="nList.reviewPointAvg == 5"><span class="starPoint">★★★★★</span></b>
							<b v-else-if="nList.reviewPointAvg == 4"><span class="starPoint">★★★★☆</span></b>
							<b v-else-if="nList.reviewPointAvg == 3"><span class="starPoint">★★★☆☆</span></b>
							<b v-else-if="nList.reviewPointAvg == 2"><span class="starPoint">★★☆☆☆</span></b>
							<b v-else-if="nList.reviewPointAvg == 1"><span class="starPoint">★☆☆☆☆</span></b>
							<b v-else-if="nList.reviewPointAvg == 0"><span class="starPoint">☆☆☆☆☆</span></b>
							<span class="reviewCount">후기 {{ nList.reviewCount }}</span>
						</div>
						<div v-else class="review-box">
							<b><span class="starPoint"></span></b>
							<span class="reviewCount"></span>
						</div>
						<p class="class-price" v-if="nList.classPrice == 0">무료</p>
						<p class="class-price" v-else>{{ nList.classPrice.toLocaleString('ko-KR') }}원</p>
					</router-link>
				</li>
			</ul>
		</section>
		<div class="banner" @click="goHost"></div>

	</div> <!-- //inner -->

	<AppFooter />
	<!-- //footer -->
</template>
<script>
import "@/assets/css/hs/main.css"
import "@/assets/css/hs/mainView.css"

import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import main_slide_1 from "@/assets/images/hs/main_slide_1.jpg"
import main_slide_2 from "@/assets/images/hs/main_slide_2.jpg"
import main_slide_3 from "@/assets/images/hs/main_slide_3.jpg"
import main_slide_4 from "@/assets/images/hs/main_slide_4.jpg"
import main_slide_5 from "@/assets/images/hs/main_slide_5.jpg"

import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

import axios from 'axios';

export default defineComponent({
	name: "MainView",
	components: {
		AppHeader,
		AppFooter,
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	data() {
		return {
			slides: [main_slide_1, main_slide_2, main_slide_3, main_slide_4, main_slide_5],

			listOfLists:[],
		};
	},
	methods: {

		//메인 리스트 가져오기
		getLists() {

			axios({
				method: 'get', // put, post, delete
				url: 'http://localhost:9090/odo/mains',
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				//data: this.listOfLists, //put, post, delete 방식 자동으로 JSON으로 변환 전달
				responseType: 'json' //수신타입
			}).then(response => {
				this.listOfLists = response.data.apiData;
			}).catch(error => {
				console.log(error);
			});

		},
		//
		///  배너클릭하면 호스트가입페이지로 이동  ////
		goHost() {
			this.$router.push('/companyselect');
		},
		////////////////////////////////////////////
	},
	created() {
		this.getLists();
	}
});
</script>
<style>
.carousel__item {
	max-height: 470px;
	width: 100%;
	color: var(--vc-clr-white);
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.slideImg {
	width: 100%;
}

.carousel__pagination {
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
}

.carousel__pagination-button::after {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, .6);
}

.carousel__pagination-button--active::after {
	background: #8521FF;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	color: #fff;
}

.carousel__prev:hover,
.carousel__next:hover {
	color: #8521FF;
}
</style>
