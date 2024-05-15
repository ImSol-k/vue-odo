<template><!--업체 소개페이지-->
    <!--헤더-->

    <AppHeader />
    <div class="wrap">

        <div>
            <!--사진 + 업체명-->
            <div class="clearfix cover20">
                <div class="preview-image">
                    <img class="img20" :src="previewImage">
                </div>

                <div>
                    <p class="p20">업체명</p>
                </div>

                <div class="input">
                    <input type="file" id="profile" name="profile" class="file-input" style="font-size: 20px;"
                        @change="handleImageChange">
                </div>
            </div>
        </div>
        <!--소개글-->

        <div class="cover21">
            <div>
                <!-- <label for="companyNo">사업자번호</label> -->
                <input type="text" name="" id="ip20" value="사업자번호" readonly>
            </div>
            <div>
                <!-- <label for="companyName">업체명</label> -->
                <input type="text" name="" id="ip20" value="업체명" readonly>
            </div>
            <div>

                <!-- <label for="companyId">아이디</label> -->
                <input type="text" name="" id="ip20" value="아이디" readonly>
            </div>
            <div>
                <!-- <label for="companyPass">비밀번호</label> -->
                <input type="text" name="" id="ip20" placeholder="비밀번호">
            </div>

            <div class="companyAddress">
                <input type="text" id="ip24" placeholder="우편번호">
                <input type="button" onclick="sample6_execDaumPostcode()" value="주소검색">
                <input type="text" id="ip20" placeholder="주소">
                <input type="text" id="ip20" placeholder="상세주소">
            </div>
            <div>
                <!-- <label for="companyPassChack">비밀번호확인</label> -->
                <input type="text" name="" id="ip20" placeholder="대표 핸드폰번호">
            </div>
            <div>
                <textarea name="" id="texta" cols="30" rows="10"
                    placeholder="소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글"></textarea>
            </div>
        </div>
        <div class="companyJoinButton">
            <button>취소</button>
            <button>수정</button>
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
            previewImage: require('@/assets/images/logo.png')
        }
    },

    methods: {
        handleImageChange(event) {
            // 선택한 파일
            this.profile = event.target.files[0];

            // FileReader 객체를 사용하여 이미지를 읽음
            const reader = new FileReader();

            // 읽기가 완료된 후 실행되는 콜백 함수
            reader.onload = (e) => {
                // 읽은 이미지 데이터를 previewImage에 할당하여 이미지 미리보기 업데이트
                this.previewImage = e.target.result;
            };

            // 파일을 읽음
            if (this.profile) {
                reader.readAsDataURL(this.profile);
            }
        }
    },
    created() {

    }
}
</script>

<style></style>