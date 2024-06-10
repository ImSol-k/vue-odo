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
  </template>
  
  <script>
  import AppMenu from "@/components/CompanyMenu.vue";
  import AppHeader from "@/components/HostAppHeader.vue";
  import Swal from 'sweetalert2';
  import axios from "axios";
  
  export default {
    name: "PostPacebook",
    components: { AppMenu, AppHeader },
    data() {
      return {
        message: "",
        photo: null,
        photoPreview: null,
        placeholderImage: require("../../assets/images/nope.png"),
        accessToken: "EAAN3krJLRh4BOygZACSanLiJZBMg51rLvXr7z0qYo0vJoUAHh090BzGVB02229haKuaqulu9MiG64ERZCFojgoFJ4OHe5QXOszYXRrqsZB7Al4yY7HKV7An7PC3R3rLjEXb0QQg1CTCXZA5uN9SZAtB3sLBRoTa4VT7pU74KBZBEP4lEkZAMl6hK0IsjYfwKufg7",
        pageId: "320016071194453",
        loading: false,
      };
    },
    methods: {
      handleFileUpload(event) {
        this.photo = event.target.files[0];
        if (this.photo != null) {
          this.photoPreview = URL.createObjectURL(this.photo);
        } else {
          this.photoPreview = null;
        }
      },
      postToFacebook() {
        if (this.photo) {
          this.uploadPhoto(); // 사진 업로드 메서드 호출
        } else {
          this.createPost(); // 사진이 없는 경우 게시물 생성 메서드 호출
        }
      },
      uploadPhoto() {
        this.loading = true; // 로딩 상태 시작
        Swal.fire({
          title: "게시물을 등록 중입니다...",
          allowOutsideClick: false,
        });
  
        const formData = new FormData();
        formData.append("source", this.photo);
        formData.append("access_token", this.accessToken);
  
        const photoUrl = `https://graph.facebook.com/${this.pageId}/photos`;
  
        axios.post(photoUrl, formData)
          .then((response) => {
            const photoId = response.data.id;
            this.createPost(photoId); // 업로드가 성공하면 게시물 생성 메서드 호출
          })
          .catch((error) => {
            this.loading = false; // 로딩 상태 종료
            Swal.close();
            Swal.fire({
              title: "사진 업로드 중 오류 발생",
              icon: "error",
              text: error.message,
            });
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
  
        axios.post(url, null, { params })
        /* eslint-disable */
          .then((response) => {
            this.loading = false; // 로딩 상태 종료
            Swal.close();
            Swal.fire({
              title: "게시물이 등록되었습니다",
              icon: "success",
            });
            this.resetForm();
          })
          .catch((error) => {
            this.loading = false; // 로딩 상태 종료
            Swal.close();
            Swal.fire({
              title: "게시 중 오류 발생",
              icon: "error",
              text: error.message,
            });
          });
      },
      resetForm() {
        this.message = "";
        this.photo = null;
        this.photoPreview = null;
      },
    },
  };
  </script>
  
  <style>
  .classChack {
    border-bottom: 2px solid #8521ff;
  }
  </style>