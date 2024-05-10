<template><!--업체 소개페이지-->

    <!--헤더-->

    <AppHeader />
    <div class="wrap">

        

        <div>
            <p class="p50">클래스 정보</p>
        </div>
        <div class="clearfix cover50">
            <div>
                <img class="img50" src="../../assets/images/logo.png" alt="">
            </div>
            <div class="cover51">
                <p>업체명</p>
                <p>클래스명</p>
                <div class="cover52">
                    <img class="img51" src="../../assets/images/logo.png" alt="">
                    <p>별점</p>
                </div>
            </div>
            <div class="cover53">
                <p>날자</p>
                <p>2024-05-10 20:00:00</p>
            </div>
        </div>

        <div>
            <p class="p50"> 결제수단</p>
        </div>

        <div>
            <div class="cover54">
                <form action="">
                    <li>
                        <ul class="ul1">
                            <label>신용카드</label>
                            <input type="radio" style="width:30px;height:20px;border:1px;" name="pay" value="10" checked="checked">
                        </ul>
                        <ul class="ul1">
                            <label>네이버페이</label>
                            <input type="radio" style="width:30px;height:20px;border:1px;" name="pay" value="10" checked="checked">
                        </ul>
                        <ul class="ul1">
                            <label>토스페이</label>
                            <input type="radio" style="width:30px;height:20px;border:1px;" name="pay" value="10" checked="checked">
                        </ul>
                        <ul class="ul1">
                            <label>휴대폰결제</label>
                            <input type="radio" style="width:30px;height:20px;border:1px;" name="pay" value="10" checked="checked">
                        </ul>
                    </li>
                    <div>
                        <p class="p51">쿠폰</p>
                        <div class="claerfix">
                            <p v-if="a > 0" class="p52">{{ Number(this.a).toLocaleString('ko-KR') }}</p>
                            <p v-if="a == '사용안함'" class="p52">{{ this.a }}</p>
                            <button v-on:click.prevent="listup">쿠폰</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="clearfix">
            <div>
                <p class="p53">결제금액</p>
                <p>{{ Number(1000000).toLocaleString('ko-KR') }}원</p>
            </div>
            <div>
                <p class="p53">쿠폰사용금액</p>
                <p v-if="a > 0">{{ Number(this.a).toLocaleString('ko-KR') }}</p>
                <p v-if="a == '사용안함'">{{ this.a }}</p>
            </div>
            <div>
                <p class="p54">총결제금액</p>
                <p>{{ Number(500000).toLocaleString('ko-KR') }}</p>
            </div>
            <div>
                <button>결제하기</button>
            </div>
        </div>

        

    </div>

    <!--모달창-->
    <div id="addModal" class="modal">
        <div class="modal-content">
            <form action="">
                <p class="closeBtn" v-on:click="close">x</p>
                <label for="none">사용안함</label>
                <input id="none" type="radio" name="coupon" value="사용안함" v-model="a" checked="checked"><br>
                <label for="3000">3000원 할인</label>
                <input id="3000" type="radio" name="coupon" value="3000" v-model="a"><br>
                <label for="5000">5000원 할인</label>
                <input id="5000" type="radio" name="coupon" value="5000" v-model="a"><br>
                <button v-on:click.prevent="close2">적용하기</button>
            </form>
        </div>
    </div>
    <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import '@/assets/css/jh/jh.css'
import '@/assets/css/Initialization.css'


export default {
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            a: "사용안함"
        };
    },
    mounted() {

    },
    methods: {
        listup() {
            console.log("업");

            let viewModal = document.querySelector("#addModal");

            viewModal.style.display = "block";
        },
        close() {
            let viewModal = document.querySelector("#addModal");

            viewModal.style.display = "none";
        },
        close2() {
            let viewModal = document.querySelector("#addModal");

            viewModal.style.display = "none";

        }
    },
    created() {

    }
};
</script>

<style></style>