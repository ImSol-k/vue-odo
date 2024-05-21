<template>
    <AppHeader />
    <!-- //header -->

    <div class="inner">

		<div class="categorySelectBox">
			<div class="category-1st">
				<h1 v-for=" cate in category1st " :key="cate">{{ cate }}</h1>
			</div>
			<div class="catgory-2nd">
				<ul>
					<li class="BtnActive">한식</li>
					<li>일식</li>
					<li>중식</li>
					<li>양식</li>
				</ul>
				<ul>
					<li>제과</li>
					<li>제빵</li>
					<li>쇼콜라</li>
					<li>디저트</li>
				</ul>
				<ul>
					<li>주류</li>
					<li>바리스타</li>
				</ul>
				<ul>
					<li>네일</li>
					<li>미용</li>
					<li>메이크업</li>
					<li>패션</li>
				</ul>
				<ul>
					<li>비즈</li>
					<li>뜨게질</li>
					<li>자수</li>
					<li>도자기</li>
					<li>터프팅</li>
				</ul>
				<ul>
					<li>수영</li>
					<li>축구</li>
					<li>야구</li>
					<li>배구</li>
					<li>골프</li>
					<li>볼링</li>
				</ul>
				<ul>
					<li>부부상담</li>
					<li>가정상담</li>
					<li>심리상담</li>
				</ul>
			</div>
		</div>

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
        return {
			category1st: ["쿠킹", "베이킹", "음료", "뷰티", "공예", "스포츠", "심리/상담", "IT"],
		};
    },
    methods: {},
};
</script>