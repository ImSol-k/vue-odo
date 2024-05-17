<template>

<AppHeader/>
<!-- header -->

<div class="wrap">
	
	<MyPageHeader />
	<!-- mypage-main -->
	
	<div class="mymy clearfix">

		<MyPageSide/>
		<!-- mypage-side -->

		<div class="mymy-content">
			<div class="mymy-head">
				<span>쿠폰</span>
			</div>
			<div class="mymy-main">
				<div class="couponMsg">
					<span>보유한 쿠폰</span>
				</div>
				<div class="coupon-box clearfix">
					<!-- 보유한 쿠폰 있을때 -->
					<div  v-for="(i) in 1" :key="i">
						<div v-if="coupon" class="on-coupon">
							<div class="coupon-set">
								<img src="@/assets/images/icon/ss/cou.png">
								<div class="coupon-set2">
									<span class="cou-price">7000원</span>
									<span class="cou-name">클래스이름asdasdasdasdasdasds</span>
								</div>
							</div>
						</div>
					</div>
						<!-- on-coupon -->

					<!-- 보유한 쿠폰 없을때 -->
					<div class="no-coupon" v-if="!coupon">
						<img src="@/assets/images/icon/ss/nocoupon.png"><br>
						<span>보유한 쿠폰이 없어요</span>
					</div>
					<!-- //no-coupon -->
				</div>
				
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
			coupon : true // true면 쿠폰보유 false면 쿠폰미보유
		};
	},
	methods: {},
	created(){}
};
</script>





<style>
</style>