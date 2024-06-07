<template>
    <AppHeader />
    <div class="wrap">
        <div class="clearfix">
            <AppMenu />
            <div class="companyInfoClassList">
                <p>페이스북 광고 올리기</p>
            </div>
            <div class="photo-preview">
                <img :src="photoPreview || placeholderImage" alt="미리보기 이미지" />
            </div>
            <input class="under" type="file" @change="handleFileUpload" />
            <div class="inputText">
                <input v-model="message" placeholder="게시할 내용을 입력하세요 ex)오늘 수강생! 즐거운 요리교실!" />
                <button @click="postToFacebook" :disabled="loading">게시하기</button>
            </div>
        </div>
    </div>
    <!--wrap-->
    <AppFooter />
</template>

<script>
import AppHeader from "@/components/HostAppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";

import Swal from 'sweetalert2';

import axios from "axios";

export default {
    name: "PostPacebook",
    components: { AppHeader, AppFooter, AppMenu },
    data() {
        return {
            message: "",
            photo: null,
            photoPreview: null,
            placeholderImage: require("../../assets/images/company/nope.png"), // 플레이스홀더 이미지 URL
            accessToken: "EAAN3krJLRh4BOygZACSanLiJZBMg51rLvXr7z0qYo0vJoUAHh090BzGVB02229haKuaqulu9MiG64ERZCFojgoFJ4OHe5QXOszYXRrqsZB7Al4yY7HKV7An7PC3R3rLjEXb0QQg1CTCXZA5uN9SZAtB3sLBRoTa4VT7pU74KBZBEP4lEkZAMl6hK0IsjYfwKufg7", // 페이지 액세스 토큰
            pageId: "320016071194453", // 페이스북 페이지 ID
            loading: false, // 로딩 상태
        };
    },
    methods: {
        handleFileUpload(event) {
            this.photo = event.target.files[0];
            if (this.photo) {
                this.photoPreview = URL.createObjectURL(this.photo);
            } else {
                this.photoPreview = null;
            }
        },
        postToFacebook() {
            this.loading = true; // 로딩 상태 시작
            Swal.fire({
                title: "게시물을 등록 중입니다...",
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            if (this.photo) {
                this.uploadPhotoAndPost();
            } else {
                this.createPost();
            }
        },
        uploadPhotoAndPost() {
            const formData = new FormData();
            formData.append("source", this.photo);
            formData.append("access_token", this.accessToken);

            const photoUrl = `https://graph.facebook.com/${this.pageId}/photos`;

            axios
                .post(photoUrl, formData)
                .then((response) => {
                    const photoId = response.data.id;
                    this.createPost(photoId);
                })
                .catch((error) => {
                    this.loading = false; // 로딩 상태 종료
                    Swal.close(); // 로딩 알림 닫기
                    Swal.fire({
                        title: "사진 업로드 중 오류 발생",
                        icon: "error",
                        text: error.message,
                    });
                    console.error("페이스북에 사진 업로드 중 오류 발생:", error);
                });
        },
        createPost(photoId = null) {
            const url = `https://graph.facebook.com/${this.pageId}/feed`;
            const params = {
                message: this.message,
                access_token: this.accessToken,
            };
            if (photoId) {
                params.object_attachment = photoId;
            }

            axios
                .post(url, null, { params })
                .then((response) => {
                    this.loading = false; // 로딩 상태 종료
                    Swal.close(); // 로딩 알림 닫기
                    Swal.fire({
                        title: "게시물이 등록되었습니다",
                        icon: "success",
                    });
                    this.resetForm();
                    console.log("게시 성공:", response.data);
                })
                .catch((error) => {
                    this.loading = false; // 로딩 상태 종료
                    Swal.close(); // 로딩 알림 닫기
                    Swal.fire({
                        title: "게시 중 오류 발생",
                        icon: "error",
                        text: error.message,
                    });
                    console.error("페이스북에 게시 중 오류 발생:", error);
                });
        },
        resetForm() {
            this.message = "";
            this.photo = null;
            this.photoPreview = null;
        },
    },
    created() { },
};
</script>

<style>
.classChack {
    border-bottom: 2px solid #8521ff;
}

</style>