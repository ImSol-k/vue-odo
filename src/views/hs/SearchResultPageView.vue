<template>
    <AppHeader />
    <!-- //header -->

    <div class="inner">
        <h2 class="searchResult">소개팅 검색 결과 123</h2>
        
        <div class="btnBox">
            <button class="onedayBtn">원데이</button>
            <button class="officialBtn">정규</button>
        </div>

        <ul class="classList">
            <li><router-link to="/classdetailpage">
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
                <li><router-link to="/classdetailpage">
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
                <li><router-link to="/classdetailpage">
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
                <li><router-link to="/classdetailpage">
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
    </div>

    <AppFooter />
    <!-- //footer -->
</template>
    
<script>
import AppFooter from "@/components/AppFooter.vue"
import AppHeader from "@/components/AppHeader.vue"

import "@/assets/css/hs/searchview.css"

export default {
    name: "SearchResultPageView",
    components: {
        AppHeader,
		AppFooter,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>