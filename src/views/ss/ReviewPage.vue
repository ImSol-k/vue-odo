<template>

<AppHeader/>
<!-- header -->

<div class="wrap">
	<div class="revMain">
		<div class="rev-header">
			<div class="rev-header1">
				<span>후기 {{ reviewCount }}개</span>
			</div>
			<div class="rev-header2">
				<div class="review-select1">
					<button type="button" @click="showType">
						{{ whatType }}<span>{{ updown }}</span>
					</button>
				</div>
				<div class="review-select2" v-show="isList">
					<button type="button" 
					v-for="(item , index) in type"
					:key="index"
					@click="getType(index)">
						{{ item }}
					</button>
					
				</div>
			</div>
			
		</div>
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
			updown : '△',
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
			this.updown = this.isUp ? '△' : '▽';
		},

		getType(index){
			this.whatType = this.type[index];
			this.isList = false;
			this.updown = '▽';
		}

	},
	created(){
		this.whatType = this.type[0];
	}
};
</script>





<style>
</style>