<template>

<AppHeader/>
<!-- header -->

<div class="wrap">
	<div class="revMain">
		<div class="rev-header clearfix">
			<div class="rev-header1">
				<span>후기 {{ classInfo.totalCount }}개</span>
				<div class="star-ratings">
					<div class="star-ratings-fill" :style="{ width: ratingToPercent(classInfo.reviewAvg) + '%' }">
						<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
					</div>
					<div class="star-ratings-base">
						<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
					</div>
				</div>
				<span class="star-avg">{{ classInfo.reviewAvg }}</span>
			</div>
			<!-- rev-header1 -->
			<div class="rev-header2">
				<div class="review-select1">
					<button type="button" @click="showType"> {{ whatType }} </button>
				</div>
				<!-- review-select1 -->
				<div class="review-select2" v-show="isList">
					<button type="button" v-for="(item , index) in type" :key="index" @click="getType(index)">
						{{ item }}
					</button>
				</div>
				<!-- review-select2 -->
			</div>
			<!-- rev-header2 -->
		</div>
		<!-- rev-header -->

		<div class="rev-body clearfix">
			<div class="rev-box" v-for="(list,index) in classReivewList" :key="index">
				<div class="rev-left clearfix">
					<div class="rev-box1">
						<img v-if="list.userImage != null" :src="`${this.$store.state.apiBaseUrl}/upload/${list.userImage}`">
						<img v-else src="@/assets/images/icon/ss/default-profile.png">
						<span class="rev-box1-txt1">{{ list.userNickname }}</span>
						<div class="star-ratings">
							<div class="star-ratings-fill" :style="{ width: ratingToPercent(list.reviewPoint) + '%' }">
								<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
							</div>
							<div class="star-ratings-base">
								<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
							</div>
						</div>
						<span class="rev-box1-txt2">{{ list.reviewDate }}</span>
					</div>
					<!-- revbox1 -->

					<div class="rev-box2 ">
						<div class="rev-box2-1">
							{{ list.reviewContent }}
						</div>
						<div class="rev-box2-2" @click="goPage">{{ list.classIntro }}</div>
						<div class="rev-box2-3">
							<span v-if="list.classType == 1">[원데이]</span>
							<span v-else>[정규]</span>
							{{ list.className }}
						</div>
					</div>
					<!-- revbox2 -->
				</div>
				<!-- rev-left -->
				<div v-if="list.reviewImage != null" class="rev-box3">
					<ul>
						<li v-for="(index) in 1" :key="index">
							<img  :src="`${this.$store.state.apiBaseUrl}/upload/${list.reviewImage}`">
						</li>
					</ul>		
				</div>
				<!-- rev-box3 -->
			</div>
			<!-- revbox -->
			
		</div>
		<!-- rev-body -->
	</div>
	<!-- revMain -->
</div>
<!-- wrap -->

<Observer @show="loadItem"></Observer>
<!-- 옵저버 -->

<AppFooter/>
<!-- footer -->
	
</template>

<script setup>
import Observer from '@/components/ObserverView.vue';
</script>

<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/revpage.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
	name: "ReviewPage",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			classNo : this.$route.fullPath.split('/')[2], // 주소에서 클래스 넘버 가져오기
			type : ['평점높은순','평점낮은순','최신순'], // 리뷰 정렬 할 때 쓸 값들
			isList : false, // 버튼누르면 리스트 나오게 할때 쓸 값
			page : 0, // 현재 페이지
			whatType : '', // type의 값이 출력되는 데이터
			classInfo : '', // 클래스 정보 들어가는 데이터
			classReivewList : [],
			typeNo : 0,
		};
	},
	methods: {

		// 정렬순서 버튼 눌렀을 때 
		showType(){ 
			this.isList = !this.isList;
		},
		// 클래스 별점표시 
		ratingToPercent(no){
			let starScore = (no / 5 ) * 100;
			return starScore + 1.5;
		},

		// 페이지 이동
		goPage(){
			this.$router.push('/classdetailpage/'+ this.classNo);
		},

		// 
		getType(index){
			this.page = 0;
			this.typeNo = index;
			this.whatType = this.type[index];
			this.classReivewList = [];
			this.isList = false;
		},

		loadItem(){
			this.page ++;
			this.getClassReviewList(this.typeNo);
		},

		// 클래스 리뷰리스트 가져오기
		getClassReviewList(type){
			axios({
				method: 'get',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/classreviewlist`,
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				params : {classNo : this.classNo, type : type, page : this.page},
				responseType: 'json'
			}).then(response => {
				if(response.data.result === 'success'){
					this.classReivewList.push(...(response.data.apiData));
				} else {
					Swal.fire({text : '통신오류입니다'});
				}
			}).catch(error => {
				console.log(error);
			});
		},

		// 클래스 정보 가져오기
		getClassInfo(){
			axios({
				method: 'get',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/classinfo`,
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				params : {classNo : this.classNo},
				responseType: 'json'
			}).then(response => {
				if(response.data.result === 'success'){
					this.classInfo = response.data.apiData;
				} else {
					Swal.fire({text : '통신오류입니다'});
				}
			}).catch(error => {
				console.log(error);
			});
		}
	},
	created(){
		this.whatType = this.type[this.typeNo];
		this.getClassInfo();
	}
};
</script>





<style>
</style>