<template><!--업체 소개페이지-->
    <AppHeader />
    <div class="wrap">

        

        <div class="mymy-header clearfix">
			
			<img src="@/assets/images/icon/ss/default-profile.png" 
				alt="회원 프로필"
				v-on:click.prevent="goModify">
			<ul>
				<li>mypage@naver.com(닉네임나올자리)</li>
				<li>일반회원</li>
				<li>
					<router-link class="goLogin" to="/mypage/modify" >정보 수정</router-link>
				</li>
			</ul>
		</div>

        <div class="mymy clearfix">

            <mymyside/>
            <!-- mypage-side -->

            <div class="mymy-content">
                <div class="mymy-head">
                    <span>위시리스트</span>
                </div>
                <!-- mymy-head -->

                <div class="mymy-main">
					<div class="mymy-nav">
						<span type="button" class="isClass"><RouterLink to="/wishlistclass">원데이</RouterLink></span>
						<span>ㅣ</span>
						<span type="button" class="isClass">정규</span>
					</div>
                    <!-- mymy-nav -->
                    <!--위시 리스트 없을때-->
                    <!--
                    <div class="cover31">
                        
                        <div>
                            <img class="img30" src="../../assets/images/하트.png" alt="">
                        </div>
                        <div class="cover30">
                            <p>아직 찜한 업체가 없어요</p>
                            <p>관심있는 업체를 선택해보세요</p>
                        </div>
                        


                    </div>
                    -->

                    <div class="cover41 clearfix" v-for="(a, i) in a" :key="i">
                        <div class="cover40">
                            <img class="img40" src="../../assets/images/회사이미지.png" alt="">
                        </div>

                        <div class="cover42">
                            <div>
                                <div class="cover43">
                                    <p class="p40">업체명></p>
                                </div>
                                <div>
                                    <img class="img41" src="../../assets/images/하트2.png" alt="">
                                </div>
                            </div>
                            <p class="p41">클래스 00 | 리뷰 00 | 찜 00</p>
                        </div>
                    </div>
                </div>
                <!-- mymy-main -->
            </div>
            <!-- mypage-content -->

        </div>

        

    </div>
    <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import mymyside from "@/components/MyPageSide.vue"
import '@/assets/css/jh/jh.css'
import '@/assets/css/ss/ss.css'
import '@/assets/css/Initialization.css'

export default {
    components: {
        AppHeader,
        AppFooter,
        mymyside
    },
    data() {
        return {
            a: [1, 2, 3, 4, 5, 6]
        }
    },

    methods: {

    },
    created() {

    }
}
</script>

<style></style>