<template>
	<AppHeader />
	<!-- //header -->
	<div class="inner">
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
		<ul class="category-icons">
			<li><router-link to="">
					<div><img src="@/assets/images/icon/hs/main_category_icon/cooking.png" alt=""></div>
					<p>쿠킹</p>
				</router-link></li>
			<li><router-link to="">
					<div><img src="@/assets/images/icon/hs/main_category_icon/baking.png" alt=""></div>
					<p>베이킹</p>
				</router-link></li>
			<li><router-link to="">
					<div><img src="@/assets/images/icon/hs/main_category_icon/drink.png" alt=""></div>
					<p>음료</p>
				</router-link></li>
			<li><router-link to="">
					<div><img src="@/assets/images/icon/hs/main_category_icon/beauty.png" alt=""></div>
					<p>뷰티</p>
				</router-link></li>
			<li><router-link to="">
					<div><img src="@/assets/images/icon/hs/main_category_icon/craft.png" alt=""></div>
					<p>공예</p>
				</router-link></li>
			<li><router-link to="">
					<div><img src="@/assets/images/icon/hs/main_category_icon/sports.png" alt=""></div>
					<p>스포츠</p>
				</router-link></li>
			<li><router-link to="">
					<div><img src="@/assets/images/icon/hs/main_category_icon/councelling.png" alt=""></div>
					<p>심리/상담</p>
				</router-link></li>
			<li><router-link to="">
					<div><img src="@/assets/images/icon/hs/main_category_icon/it.png" alt=""></div>
					<p>IT</p>
				</router-link></li>
		</ul>
		<section class="free-best">
			<div class="title-box">
				<h3>무료 베스트 클래스
					<img src="../../assets/images/하트2.png" alt="">
				</h3>
				<router-link to="#">전체보기</router-link>
			</div>
			<ul class="classList">
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_2.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">무료</p>
				</router-link></li>
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_3.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">무료</p>
				</router-link></li>
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_4.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">무료</p>
				</router-link></li>
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_5.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">무료</p>
				</router-link></li>
			</ul>
		</section>
		<div class="banner"></div>
		<section class="pay-best">
			<div class="title-box">
				<h3>유료 베스트 클래스
					<img src="../../assets/images/하트2.png" alt="">
				</h3>
				<router-link to="#">전체보기</router-link>
			</div>
			<ul class="classList">
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_1.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">40,000원</p>
				</router-link></li>
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_1.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">40,000원</p>
				</router-link></li>
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_1.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">40,000원</p>
				</router-link></li>
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_1.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">40,000원</p>
				</router-link></li>
			</ul>
		</section>
		<div class="banner"></div>
		<section class="pay-best">
			<div class="title-box">
				<h3>신규 클래스
					<img src="../../assets/images/하트2.png" alt="">
				</h3>
				<router-link to="#">전체보기</router-link>
			</div>
			<ul class="classList">
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/coffee.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">40,000원</p>
				</router-link></li>
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/coffee.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">40,000원</p>
				</router-link></li>
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/coffee.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">40,000원</p>
				</router-link></li>
				<li><router-link to="">
					<div class="img-box">
						<img src="../../assets/images/hs/coffee.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">강남/서초</p>
					<p class="classTitle">소풍을 즐기는 새로운 방법, 루하루 티크닉 세트[SQN..</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price">40,000원</p>
				</router-link></li>
			</ul>
		</section>
		<div class="banner"></div>
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
		};
	},
	methods: {},
	created() { }
});
</script>
<style>
.carousel__item {
	max-height: 380px;
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

.carousel__slide {
	padding: 10px;
}

.carousel__pagination-button::after {
	width: 7px;
	height: 7px;
	border-radius: 50%;
}
.carousel__pagination-button--active::after {
	background: #8521FF;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	color: #fff;
}
.carousel__prev:hover, .carousel__next:hover {
	color: #8521FF;
}
</style>
