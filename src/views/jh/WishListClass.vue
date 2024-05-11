<template><!--업체 소개페이지-->

    <AppHeader />
    <div class="wrap">

        

        <div class="mymy-header">

            <img src="../../assets/images/icon/ss/default-profile.png" alt="">
            <ul>
                <li>mypage@naver.com</li>
                <li>일반회원</li>
                <li>
                    <button type="button">정보 수정</button>
                </li>
            </ul>
        </div>

        <div class="mymy clearfix">

            <div class="mymy-side">
                <ul>
                    <li>내 활동</li>
                    <li>결제 내역</li>
                    <li>위시리스트</li>
                    <li>쿠폰</li>
                    <li>후기</li>
                </ul>
                <ul>
                    <li>고객센터</li>
                    <li>공지사항</li>
                    <li>약관 및 정책</li>
                </ul>

                <div class="cli-image">
                    <div class="cli-1">
                        <img src="../../assets/images/icon/ss/kakao.png"><br>
                        <span>카카오톡 채널</span>
                    </div>
                    <div class="cli-2 clearfix">
                        <img src="../../assets/images/icon/ss/kakao.png"><br>
                        <span>카카오톡 채널</span>
                    </div>
                    <div class="cli-3">
                        <span>운영시간</span><br>
                        <span>
                            &nbsp;&nbsp;평일 10:00 ~ 17:00<br>
                            &nbsp;(점심 12:00 ~ 13:00)
                        </span>
                    </div>
                </div>
            </div>
            <!-- mypage-side -->

            <div class="mymy-content">
                <div class="mymy-head">
                    <span>위시리스트</span>
                </div>
                <!-- mymy-head -->

                <div class="mymy-main">
                    <div class="mymy-nav">
                        <button type="button">클래스</button>
                        <span>ㅣ</span>
                        <button type="button">업체</button>
                    </div>
                    <!-- mymy-nav -->
                    <!--위시 리스트 없을때-->
                    <!--
                    <div class="cover31">
                        
                        <div>
                            <img class="img30" src="../../assets/images/하트.png" alt="">
                        </div>
                        <div class="cover30">
                            <p>아직 찜한 클래스가 없어요</p>
                            <p>관심있는 클래스를 선택해보세요</p>
                        </div>
                        


                    </div>
                    -->

                    <div class="cover33 clearfix">
                        <!--위시리스트 있을때-->
                        <div class="cover34" v-for="(a,i) in a" :key="i">
                            <div class="cover32">
                                <img class="img31" src="../../assets/images/하트2.png" alt="">
                            </div>
                            <p>지역이름</p>
                            <p class="p30">설명~설명~설명~설명~설명~설명~설명~설명~설명~설설명~설명~설명~설명~설명~설명~설명~설명~설명~설</p>
                            <p>무료</p>
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
import '@/assets/css/jh/jh.css'
import '@/assets/css/ss/ss.css'
import '@/assets/css/Initialization.css'


export default {
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            a:[1,2,3,4,5,6]
        }
    },

    methods: {

    },
    created() {

    }
}
</script>

<style>
.cover32 {
    background-image: url(../../assets/images/회사이미지.png);
}
</style>