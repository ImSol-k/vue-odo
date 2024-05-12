<template>
    <AppHeader />
	<!-- //header -->

	<div class="inner">
		<div class="headSection">
			<img src="" alt="">

			<div class="headInfoBox">
				<h2>소풍을 즐기는 새로운 방법, 루하루 티크닉 세트 [SQNC 055]</h2>
				<p>30,000원</p>

				<div class="companySection">
					<router-link to="">
						<img src="" alt="">
					</router-link>
					<router-link to="" class="nameBox">
						<p></p>
						<p></p>
					</router-link>
					<router-link to="" class="company-like-btn">
						<img src="" alt="">
					</router-link>
				</div>
			</div>
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
