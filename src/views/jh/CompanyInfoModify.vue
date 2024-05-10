<template><!--업체 소개페이지-->
    <!--헤더-->

    <AppHeader />
    <div class="wrap">

        
        <!--사진 + 업체명-->
        <div class="clearfix cover20">
            <div class="preview-image">
                <img class="img20" :src="previewImage" >
            </div>

            <div>
                <p class="p20">업체명</p>
            </div>

            <div class="input">
                <input type="file" id="profile" name="profile" class="file-input" style="font-size: 24px;"
                    @change="handleImageChange">
            </div>
        </div>
        <!--소개글-->

        <div class="cover21">
            <p>수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정</p>
        </div>


        <!--취소/수정버튼-->
        <div class="cover22">
            <button class="bu20">수정</button>
            <button class="bu21">취소</button>
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