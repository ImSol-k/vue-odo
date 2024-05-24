<template>

<AppHeader/>
<!-- header -->

<div class="wrap">
	
	<MyPageHeader />
	<!-- mypageheader -->
	
	<div class="mymy clearfix">

		<MyPageSide/>
		<!-- mypage-side -->

		<div class="mymy-content">

			<div class="mymy-head">
				<span>쿠폰</span>
			</div>
			<!-- mymy-head -->
			<div class="mymy-main">

				<div class="couponMsg">
					<span>보유한 쿠폰</span>
				</div>
				<!-- couponMsg -->

				<div class="coupon-box clearfix">
					<!-- 보유한 쿠폰 있을때 -->
					<div v-if="coupon">
						<div v-for="(list,index) in couponList" :key="index">
							<div class="on-coupon clearfix">
								<div class="coupon1">
									<div class="coupon1-1">
										<div class="">
											<span class="coupon1-1-txt1">{{ list.couponPrice }} %</span>
											<!-- <span class="coupon1-1-txt1-1">할인</span> -->
											<span class="coupon1-1-txt2">사용 기한 : ~ {{ list.couponDate }}</span>
										</div>
										<span class="coupon1-1-txt3">{{ list.companyName }}</span>
									</div>
									<div class="coupon1-2">
										<span>해당 학원에서만 사용 가능</span>
									</div>
								</div>
								<!-- coupon1 -->
								<div class="coupon2"></div>
								<!-- coupon2 -->
							</div>
						</div>
					</div>

					<!-- 보유한 쿠폰 없을때 -->
					<div class="no-coupon" v-else>
						<img src="@/assets/images/icon/ss/nocoupon.png"><br>
						<span>보유한 쿠폰이 없어요</span>
					</div>
					<!-- //no-coupon -->
				</div>
				<!-- coupon-box -->
			</div>
			<!-- mymy-main -->
		</div>
		<!-- mypage-content -->
	</div>
	<!-- mymy -->
</div>
<!-- wrap -->
<AppFooter/>
<!-- footer -->
</template>




<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/ss.css';
import '@/assets/css/ss/mycoupon.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import MyPageHeader from '@/components/MyPageHeader.vue';
import MyPageSide from '@/components/MyPageSide.vue';
import axios from 'axios';

export default {
	name: "MyPageCoupon",
	components: {
		AppHeader,
		AppFooter,
		MyPageHeader,
		MyPageSide
	},
	data() {
		return {
			coupon : '', // true면 쿠폰보유 false면 쿠폰미보유
			couponList : [],
		};
	},
	methods: {
		// 쿠폰정보 가져오기 
		getCouponList(){
			axios({
				method: 'get',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/usercoupon/${this.$store.state.authUser.userNo}`,
				headers: { "Content-Type": "application/json; charset=utf-8" },
				responseType: "json",
			}).then((response) => {
				console.log(response.data.apiData);
				if(response.data.apiData != null){
					this.coupon = true;
					this.couponList = response.data.apiData;
				} else {
					this.coupon = false;
				}
			}).catch((error) => {
				console.log(error);
			});
		}
	},
	created(){
		this.getCouponList();
	}
};
</script>





<style>
</style>