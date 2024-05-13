<!-- <script setup>
const msg = '안녕!'

function log(){
    console.log(msg)
}

</script> -->

<template>
    
    <diV>
        <!-- AppHeader -->
		<AppHeader />
        <div class="wrap">
            <div class="MporderContainer">
                <div class="MpLeft">
                <!-- nav -->
					<ul>
						<li><strong>내 활동</strong></li>
						<li><router-link to="">결제 내역</router-link></li>
						<li><router-link to="">위시리스트</router-link></li>
						<li><router-link to="">쿠폰</router-link></li>
						<li><router-link to="">후기</router-link></li>
					</ul>
					<hr>
					<ul>
						<li><strong>고객센터</strong></li>
						<li><router-link to="">공지사항</router-link></li>
						<li><router-link to="">약관 및 정책</router-link></li>
					</ul>
					<hr>
                </div>
                <div class="MpRight">

                    <h2>이용약관</h2>

                <h2>개인정보 처리방침</h2>
                <div>
                    <p class="content">
                        
                    </p>
                </div>
                
                <h2>위치서비스 이용약관</h2>
                <div>
                    <p class="content">
                        
                    </p>
                </div>
            </div>
            </div>
        </div>
    </diV>
    <!-- 푸터 -->
		<AppFooter/>
</template>
<script>
import '@/assets/css/Initialization.css'
import "@/assets/css/mj/condition.css"
// import txt from "raw-loader!./이용약관.txt";
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

	export default {
		name: "ConditionView",
		components: {
			AppHeader,
			AppFooter
		},
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>