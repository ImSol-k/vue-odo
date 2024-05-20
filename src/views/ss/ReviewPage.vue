<template>

<AppHeader/>
<!-- header -->

<div class="wrap">
	<div class="revMain">
		<div class="rev-header">
			<div class="rev-header1">
				<span>후기 {{ reviewCount }}개</span>
				<div class="star-ratings">
					<div class="star-ratings-fill" :style="{ width: ratingToPercent(starScore) + '%' }">
						<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
					</div>
					<div class="star-ratings-base">
						<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
					</div>
				</div>
			</div>
			<!-- rev-header1 -->
			<div class="rev-header2">
				<div class="review-select1">
					<button type="button" @click="showType">
						{{ whatType }}
					</button>
				</div>
				<!-- review-select1 -->
				<div class="review-select2" v-show="isList">
					<button type="button" 
					v-for="(item , index) in type"
					:key="index"
					@click="getType(index)">
						{{ item }}
					</button>
				</div>
				<!-- review-select2 -->
			</div>
			<!-- rev-header2 -->
		</div>
		<!-- rev-header -->

		<div class="rev-body">
			<div class="rev-box">
				<div class="rev-box1">
					<img src="@/assets/images/hs/coffee.jpg">
					<span>nickname</span>
					<div class="star-ratings">
						<div class="star-ratings-fill" :style="{ width: ratingToPercent(starScore) + '%' }">
							<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
						</div>
						<div class="star-ratings-base">
							<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
						</div>
					</div>
					<span>2024년 5월 16일 21:02 작성</span>
				</div>
				<!-- revbox1 -->
				<div class="rev-box2">
					<div>후기내용이 나오는 자리</div>
					<div>클래스 이름이 나오는 자리</div>
					<div>클래스 설명이 나오는 자리</div>
				</div>
				<!-- revbox2 -->
			</div>
			<!-- revbox -->
		</div>
		<!-- rev-body -->
	</div>
</div>

<AppFooter/>
<!-- footer -->
	
</template>


<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/revpage.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';


export default {
	name: "ReviewPage",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			type : ['평점높은순','평점낮은순','최신순'], // 리뷰 정렬 할 때 쓸 값들
			reviewCount : 1245, // 리뷰갯수 
			starAvg : 3.5, // 별점 총점
			starScore : 5, // 별점 표시 
			isUp : true,
			isList : false,
			whatType : '',
		};
	},
	methods: {

		// 정렬순서 버튼 눌렀을 때 
		showType(){
			this.isUp = !this.isUp;
			this.isList = !this.isList;
		},

		getType(index){
			this.whatType = this.type[index];
			this.isList = false;
		},

		// 별점표시 
		ratingToPercent(){

		},


	},
	created(){
		this.whatType = this.type[0];
	}
};
</script>





<style>
</style>