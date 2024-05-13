<template>
	<div>
		<!-- AppHeader -->
		<AppHeader />
		<div class="wrap">
			
			<!-- container 부분 -->
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
				<!-- 오른쪽내용영역 -->
				<div class="MpRight" style="overflow: hidden;">
                    <div>
                        <div>
                            <div>
                                <div class="title">약관 및 정책</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a>
                            <div>
                                <div>
                                    <div class="conditions">이용약관
                                        <img src="@/assets/images/icon/mj/static_button.png" alt="이용약관" class="info">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a>
                            <div>
                                <div>
                                    <div class="conditions">개인정보 처리방침
                                        <img src="@/assets/images/icon/mj/static_button.png" alt="개인정보 처리방침" class="info">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a>
                            <div>
                                <div>
                                    <div class="conditions">위치서비스 이용약관
                                        <img src="@/assets/images/icon/mj/static_button.png" alt="위치서비스 이용약관" class="info">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>            	
    </div>
		<!-- 푸터 -->
		<AppFooter/>
</template>
<script>
import '@/assets/css/Initialization.css'
import '@/assets/css/mj/staticInfo.css' 
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

	export default {
		name: "ModifyView",
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