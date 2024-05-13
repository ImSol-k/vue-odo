<template>
    <AppHeader />
	<!-- //header -->

	<div class="inner">
		<div class="headSection">
			<img class="representImg" src="../../assets/images/hs/cake.jpg" alt="">

			<div class="headInfoBox">
				<h1>소풍을 즐기는 새로운 방법, 루하루 티크닉 세트 [SQNC 055]</h1>
				<p>30,000<span>원</span></p>

				<div class="companySection">
					<router-link to="" class="companyLogo">
						<img src="" alt="">
					</router-link>
					<router-link to="" class="nameBox">
						<p>골든블루마리나</p>
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

		<div class="classInfoSection">
			<h2>클래스 정보</h2>
			<div></div>
		</div>
	</div>
	<!-- //inner -->

	<div class="floatingActionBar">
		<div class="action-box">
			<router-link to="#" class="like-actBtn">
				<img src="../../assets/images/하트.png" alt="">
				<p>13</p>
			</router-link>
			<button>참여하기</button>
		</div>
	</div>
	<!-- //floatingActionBar -->

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
	methods: {},
	created(){}
	};
</script>
