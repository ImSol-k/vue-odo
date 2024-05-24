<template>
	<AppHeader />
	<!-- //header -->

	<div class="inner">

		<div class="categorySelectBox">
			<div class="category-1st">
				<h1 @click="goCate1ListPage(i)" :class="{ 'cate1-active': clickIndex === i }"
					v-for=" (cate, i) in category1st " :key="i">{{ cate }}</h1>
			</div>
			<div class="catgory-2nd">
				<ul v-for="(category, catIndex) in categories" :key="catIndex">
					<li v-for="(item, itemIndex) in category" :key="itemIndex"
						:class="{ BtnActive: isActive(catIndex, itemIndex) }"
						@click="activateItem(catIndex, itemIndex, item[0])">
						{{ item[1] }}
					</li>
				</ul>
			</div>
		</div>

		<!-- <h2 class="searchResult">어쩌고 검색 결과 123</h2> -->

		<div class="btnBox">
			<!-- <button class="onedayBtn">원데이</button>
			<button class="officialBtn">정규</button> -->
		</div>

		<ul v-if="cateList.length != 0" class="classList resultPageClassList">
			<li v-for=" cateClass in cateList " :key="cateClass">
				<router-link :to="`/classdetailpage/${cateClass.classNo}`">
					<div class="img-box">
						<img src="../../assets/images/hs/main_slide_2.jpg" alt="">
						<img src="" alt="">
					</div>
					<p class="location">{{ cateClass.classNameAdd }}</p>
					<p class="classTitle">{{ cateClass.className }}</p>
					<div class="review-box">
						<span class="starPoint">★★★★★</span>
						<span>후기 123</span>
					</div>
					<p class="class-price" v-if="cateClass.classPrice == 0">무료</p>
					<p class="class-price" v-else>{{ cateClass.classPrice.toLocaleString('ko-KR') }}원</p>
				</router-link>
			</li>
		</ul>
		<ul v-else>
			<div class="searchResultNone">
				<h4>해당하는 검색 결과가 없어요.</h4>
				<p>다른 검색어로 검색해 주세요!</p>
			</div>

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
			clickIndex: null,
			category1st: ["쿠킹", "베이킹", "음료", "뷰티", "공예", "스포츠", "심리/상담", "IT"],
			activeIndex: { categoryIndex: null, itemIndex: null },
			categories: [
				[[1, "한식"], [2, "일식"], [3, "중식"], [4, "양식"]],
				[[5, "제과"], [6, "제빵"], [7, "쇼콜라"], [8, "디저트"]],
				[[9, "주류"], [10, "바리스타"]],
				[[11, "네일"], [12, "미용"], [13, "메이크업"], [14, "패션"]],
				[[15, "비즈"], [16, "뜨게질"], [17, "자수"], [18, "도자기"], [19, "터프팅"]],
				[[20, "수영"], [21, "축구"], [22, "야구"], [23, "배구"], [24, "골프"], [25, "볼링"]],
				[[26, "부부상담"], [27, "가정상담"], [28, "심리상담"]],
				[[29, "IT"]]
			],
			cateList: [],
		};
	},
	methods: {
		isActive(categoryIndex, itemIndex) {
			return this.activeIndex.categoryIndex === categoryIndex && this.activeIndex.itemIndex === itemIndex;
		},
		//카테고리 사이드바에서 선택해서 넘어올때 버튼 선택되어있게하는 함수
		btnSelected() {
			for( let i=1; i<5; i++ ) {
				if ( this.$route.params.no <5 && this.$route.params.no == i ) {
					this.activeIndex = { categoryIndex: 0, itemIndex: (i-1) };
				}
			}
			for( let i=5; i<9; i++ ) {
				if ( 5 <= this.$route.params.no < 9 && this.$route.params.no == i ) {
					this.activeIndex = { categoryIndex: 1, itemIndex: (i-5) };
				}
			}
			for( let i=9; i<11; i++ ) {
				if ( 9 <= this.$route.params.no < 11 && this.$route.params.no == i ) {
					this.activeIndex = { categoryIndex: 2, itemIndex: (i-9) };
				}
			}
			for( let i=11; i<15; i++ ) {
				if ( 11 <= this.$route.params.no < 15 && this.$route.params.no == i ) {
					this.activeIndex = { categoryIndex: 3, itemIndex: (i-11) };
				}
			}
			for( let i=15; i<20; i++ ) {
				if ( 15 <= this.$route.params.no < 20 && this.$route.params.no == i ) {
					this.activeIndex = { categoryIndex: 4, itemIndex: (i-15) };
				}
			}
			for( let i=20; i<26; i++ ) {
				if ( 20 <= this.$route.params.no < 26 && this.$route.params.no == i ) {
					this.activeIndex = { categoryIndex: 5, itemIndex: (i-20) };
				}
			}
			for( let i=26; i<29; i++ ) {
				if ( 26 <= this.$route.params.no < 29 && this.$route.params.no == i ) {
					this.activeIndex = { categoryIndex: 6, itemIndex: (i-26) };
				}
			}
			for( let i=29; i<30; i++ ) {
				if ( 29 <= this.$route.params.no < 30 && this.$route.params.no == i ) {
					this.activeIndex = { categoryIndex: 7, itemIndex: (i-29) };
				}
			}
				
		},
		//2차 카테고리 버튼 눌렀을때 버튼 색상변경 + 리스트가져오기
		activateItem(categoryIndex, itemIndex, cate2No) {
			this.$router.push(`/searchresultpage2/${cate2No}`);
			this.clickIndex = null;
			this.activeIndex = { categoryIndex, itemIndex };

			//2차카테고리 리스트 가져오기
			this.getcate2List();
		},
		getcate2List() {

			axios({
				method: 'get', // put, post, delete
				url: 'http://localhost:9090/odo/subcategories',
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				params: { cate2No: this.$route.params.no }, //get방식 파라미터로 값이 전달
				//data: this.$route.params.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달
				responseType: 'json' //수신타입
			}).then(response => {
				this.cateList = response.data.apiData;
			}).catch(error => {
				console.log(error);
			});
		},
		goCate1ListPage(i) {
			this.$router.push(`/searchresultpage/${i + 1}`);
		},
	},
	created() {
		this.getcate2List();
		this.btnSelected();
	},
	watch: {
		'$route.params.no': function() {
			this.getcate2List();
			this.btnSelected();
		}
	},
};
</script>