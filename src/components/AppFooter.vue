<template>
    <footer>
        <div class="inner">
            <ul class="f-t-ul">
                <li><router-link to="/companyselect">호스트 지원</router-link></li>
                <li><router-link to="/">인재채용</router-link></li>
                <li><router-link to="/">제휴문의</router-link></li>
            </ul>

            <div class="center-box">
                <div>
                    <h4>고객센터</h4>
                    <div>
                        <span>채팅상담:</span>
                        <button id="KakaoTalk1">카카오톡 채널 원데이원클래스</button>
                    </div>
                </div>
                <div>
                    <h4>호스트 지원센터</h4>
                    <div>
                        <span>채팅상담:</span>
                        <button id="KakaoTalk2">카카오톡 채널 원데이원클래스 호스트</button>
                    </div>
                </div>
            </div>

            <div class="hour">
                <p>운영시간: 평일/주말 10:00 - 17:00 (점심 : 12:00 - 13:00)</p>
                <p>광고/제휴: contact@onedayone.com</p>
            </div>

            <h4 class="en">OneDayOne</h4>
            <p>㈜원데이원 | 사업자 등록번호 : 261-81-04385 <br>
                통신판매업신고번호 : 2016-서울성동-01088 <br>
                대표 : 유승수 | 개인정보 관리 책임자 : 유승수 <br>
                서울 서초구 강남대로 405 통영빌딩 8층 <br>
                ㈜원데이원은 통신판매중개자로서 거래당사자가 아니며, 호스트가 등록한 상품정보 및 거래에 대해 ㈜원데이원은 일체의 책임을 지지 않습니다. <br>
                NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시, 저희 사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다. 가입 확인 <br>
            </p>

            <ul class="f-m-ul">
                <li><a href="#">이용약관</a></li>
                <li><a href="#">개인정보 처리방침</a></li>
                <li><a href="#">위치기반 서비스 이용약관</a></li>
            </ul>

            <a href="#" class="download">
                <img src="../assets/images/icon/footer_icons_modify/다운로드.png" alt="">
                앱 다운로드
            </a>

            <ul class="icon-box">
                <li><a href="#"><img src="../assets/images/icon/footer_icons_modify/f_instagram.png" alt=""></a></li>
                <li><a href="#"><img src="../assets/images/icon/footer_icons_modify/f_facebook.png" alt=""></a></li>
                <li><a href="#"><img src="../assets/images/icon/footer_icons_modify/f_naver.png" alt=""></a></li>
                <li><a href="#"><img src="../assets/images/icon/footer_icons_modify/f_youtube.png" alt=""></a></li>
                <li><a href="#"><img src="../assets/images/icon/footer_icons_modify/f_apple.png" alt=""></a></li>
                <li><a href="#"><img src="../assets/images/icon/footer_icons_modify/f_playstore.png" alt=""></a></li>
            </ul>
        </div>
    </footer>
</template>

<script>


export default {
    name: "AppFooter",
    components: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {
        document.getElementById("KakaoTalk1").addEventListener("click", function () {
            window.open("https://open.kakao.com/o/ghymk2vg", "_blank");
        });

        document.getElementById("KakaoTalk2").addEventListener("click", function () {
            window.open("https://open.kakao.com/o/go2lp2vg", "_blank");
        });
    },
    created() { }
};
</script>