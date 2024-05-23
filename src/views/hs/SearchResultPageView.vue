<template>
	<AppHeader />
	<!-- //header -->

	<div class="inner">

		<div class="categorySelectBox">
			<div class="category-1st">
				<h1 @click="goCate1ListPage(i)" v-for=" (cate, i) in category1st " :key="i">{{ cate }}</h1>
			</div>
			<div class="catgory-2nd">
				<ul v-for="(category, catIndex) in categories" :key="catIndex">
					<li v-for="(item, itemIndex) in category" :key="itemIndex"
						:class="{ BtnActive: isActive(catIndex, itemIndex) }"
						@click="activateItem(catIndex, itemIndex)">
						{{ item }}
					</li>
				</ul>
			</div>
		</div>

		<h2 class="searchResult">소개팅 검색 결과 123</h2>

		<div class="btnBox">
			<button class="onedayBtn">원데이</button>
			<button class="officialBtn">정규</button>
		</div>

		<ul class="classList resultPageClassList">
			<li v-for=" cate1Class in cate1List " :key="cate1Class">
				<router-link :to="`/classdetailpage/${cate1Class.classNo}`">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_2.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">{{ cate1Class.classNameAdd }}</p>
					<p class="classTitle">{{ cate1Class.className }}</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price" v-if="cate1Class.classPrice == 0">무료</p>
					<p class="class-price" v-else>{{ cate1Class.classPrice }}</p>
				</router-link>
			</li>
		</ul>
	</div>

	<AppFooter />
	<!-- //footer -->
</template>

<script>
import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

import "@/assets/css/hs/searchview.css"

import axios from 'axios';

export default {
	name: "SearchResultPageView",
	components: {
		AppHeader,
		AppFooter,
	},
	data() {
		return {
			category1st: ["쿠킹", "베이킹", "음료", "뷰티", "공예", "스포츠", "심리/상담", "IT"],
			activeIndex: { categoryIndex: null, itemIndex: null },
			categories: [
				["한식", "일식", "중식", "양식"],
				["제과", "제빵", "쇼콜라", "디저트"],
				["주류", "바리스타"],
				["네일", "미용", "메이크업", "패션"],
				["비즈", "뜨게질", "자수", "도자기", "터프팅"],
				["수영", "축구", "야구", "배구", "골프", "볼링"],
				["부부상담", "가정상담", "심리상담"],
				["IT"]
			],
			cate1List: [],
		};
	},
	methods: {
		isActive(categoryIndex, itemIndex) {
			return this.activeIndex.categoryIndex === categoryIndex && this.activeIndex.itemIndex === itemIndex;
		},
		activateItem(categoryIndex, itemIndex) {
			this.activeIndex = { categoryIndex, itemIndex };
		},
		getcateList() {
			console.log("1차 카테고리 리스트 가져오기");

			axios({
				method: 'get', // put, post, delete
				url: 'http://localhost:9090/odo/categories',
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				params: { cate1No: this.$route.params.no }, //get방식 파라미터로 값이 전달
				//data: this.$route.params.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달
				responseType: 'json' //수신타입
			}).then(response => {
				console.log("=================="); //수신데이타
				console.log(response.data.apiData); //수신데이타
				this.cate1List = response.data.apiData;
			}).catch(error => {
				console.log(error);
			});
		},
		goCate1ListPage(i) {
			this.$router.push(`/searchresultpage/${i+1}`); //i는 0부터, cate1No는 1부터 시작하기때문에 +1

			axios({
				method: 'get', // put, post, delete
				url: 'http://localhost:9090/odo/categories',
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				params: { cate1No: i+1 }, //get방식 파라미터로 값이 전달
				//data: this.$route.params.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달
				responseType: 'json' //수신타입
			}).then(response => {
				console.log("=================="); //수신데이타
				console.log(response.data.apiData); //수신데이타
				this.cate1List = response.data.apiData;
			}).catch(error => {
				console.log(error);
			});
		},
	},
	created() {
		this.getcateList();
	},
};
</script>