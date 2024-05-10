<template>
    <AppHeader/>
	<div class="wrap">
        <div class="clearfix">
            <div class="companyInfoMenu">

            <h1>(주)레모나</h1>
        
            <ul>
                <li>업체관리</li>
                <li>소개</li>
            </ul>
            <ul>
                <li>회원관리</li>
                <li>정규회원관리</li>
                <li>원데이회원관리</li>
            </ul>
            <ul>
                <li>클래스관리</li>
                <li>클래스 스케줄</li>
                <li>클래스 등록</li>
            </ul>
        </div>
        <div class="companyInfoClassList">
            <p>운영중인 클래스</p>
            <div class="whatClass">
                <span>원데이</span>
                <span>정규</span>
            </div>
            
            <ul class="companyInfoClassfor clearfix" v-for="(i) in 6" :key="i">
                <li>
                    <img src="@/assets/images/icon/alt_icon.png" alt="">
                    <div class="classListObj">
                        <p>레모나클래스</p>
                        <p>레모나 클레스 설명글</p>
                    </div>
                    
                </li>
            </ul>
        </div>
        </div>
       
    </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue"

	export default {
		name: "CompanyPageView",
		components: {AppHeader},
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>