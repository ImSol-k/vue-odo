<template>
  <!--업체 소개페이지-->
  <AppHeader />
  <div class="wrap">
    
    <MyPageHeader />
    <!-- <div class="mymy-header clearfix">
      <img
        src="@/assets/images/icon/ss/default-profile.png"
        alt="회원 프로필"
        v-on:click.prevent="goModify"
      />
      <ul>
        <li>mypage@naver.com(닉네임나올자리)</li>
        <li>일반회원</li>
        <li>
          <router-link class="goLogin" to="/mypage/modify"
            >정보 수정</router-link
          >
        </li>
      </ul>
    </div> -->

    <div class="mymy clearfix">
      <mymyside />
      <!-- mypage-side -->
      
      <div class="mymy-content">
        <div class="mymy-head">
          <span>위시리스트</span>
        </div>
        <!-- mymy-head -->

        <div class="mymy-main">
          <div class="mymy-nav">
            <span type="button" class="isClass">
              <RouterLink to="/wishlistclass">클래스</RouterLink>
            </span>
            <span>ㅣ</span>
            <span type="button" class="isClass">업체</span>
          </div>
          <!-- mymy-nav -->
          <!--위시 리스트 없을때-->
          <!---->
          <div v-if="this.b != 0" class="wishlistCompany">
            <div class="wishlistCompanyBox" v-for="(a, i) in b" :key="i">
              <div>
                <div class="whsilistImg wishlistCompanyImg">
                  <img v-if="a.companyImage != null" class=""
                    v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${a.companyImage}`" alt=""
                    @click="goCompanyInfo(a.companyNo)" />
                  <img v-else class="" v-bind:src="`${this.$store.state.apiBaseUrl}/upload/noneImage.jpg`" alt=""
                    @click="goCompanyInfo(a.companyNo)" />
                  <img v-on:click.prevent="modalUp(a.no)" style="cursor: pointer"
                    :src="img"
                    alt="" />
                </div>
                <div class="wishTitleContent">
                  <p class="content1">{{ a.companyName }}</p>
                  <div class="wihshCompanyContent">
                    <div>
                      <p class="">클래스</p>
                      <p class="">00</p>
                    </div>
                    <div>
                      <p class="">리뷰</p>
                      <p class="">00</p>
                    </div>
                    <div>
                      <p class="">찜</p>
                      <p class="">00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="goCompanyInfo" @click="goCompanyInfo(a.companyNo)">></div>
            </div>
          </div>

          <div v-else class="cover31">

            <div>
              <img class="img30" src="../../assets/images/하트.png" alt="">
            </div>
            <div class="cover30">
              <p>아직 찜한 업체가 없어요</p>
              <p>관심있는 업체를 선택해보세요</p>
            </div>



          </div>


        </div>
        <!-- mymy-main -->
      </div>
      <!-- mypage-content -->

    </div>

    <div id="newModal">
      <div class="modal-content2">
        <p class="closeBtn" v-on:click="close">x</p>
        <div class="modal-p">
          <p>위시리스트에서 삭제됩니다</p>
          <p>삭제 하시겠습니까?</p>
        </div>
        <div class="modal-b">
          <button v-on:click="close">취소</button>
          <button v-on:click="del">삭제</button>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import axios from 'axios';

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import mymyside from "@/components/MyPageSide.vue";
import MyPageHeader from '@/components/MyPageHeader.vue';
import "@/assets/css/jh/jh.css";
import "@/assets/css/ss/ss.css";
import "@/assets/css/Initialization.css";

export default {
  components: {
    AppHeader,
    AppFooter,
    mymyside,
    MyPageHeader
  },
  data() {
    return {
      a: [1, 2, 3, 4, 5, 6],
      b: [],
      c: '',
      img: "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg clip-path='url(%23clip0_2517_457)'%3E %3Cpath d='M15.4448 27.0641L15.4368 27.0593L15.4064 27.0433C14.775 26.6998 14.1549 26.3359 13.5472 25.9521C12.0981 25.0404 10.7174 24.0243 9.41595 22.9121C6.47195 20.3729 3.19995 16.5633 3.19995 12.0001C3.20009 10.5112 3.66179 9.05903 4.52147 7.84344C5.38115 6.62785 6.59654 5.70866 8.00027 5.21244C9.40401 4.71622 10.9271 4.66737 12.3597 5.07263C13.7924 5.47788 15.0641 6.31729 16 7.4753C16.9358 6.31729 18.2075 5.47788 19.6402 5.07263C21.0728 4.66737 22.5959 4.71622 23.9996 5.21244C25.4034 5.70866 26.6187 6.62785 27.4784 7.84344C28.3381 9.05903 28.7998 10.5112 28.8 12.0001C28.8 16.5633 25.5296 20.3729 22.584 22.9121C20.7349 24.492 18.7274 25.8764 16.5936 27.0433L16.5632 27.0593L16.5552 27.0641H16.552C16.3819 27.1542 16.1925 27.2014 16.0001 27.2017C15.8078 27.2019 15.6182 27.1553 15.448 27.0657L15.4448 27.0641Z' fill='%23FD2748'/%3E %3C/g%3E %3Cdefs%3E %3CclipPath id='clip0_2517_457'%3E %3Crect width='32' height='32' fill='white'/%3E %3C/clipPath%3E %3C/defs%3E %3C/svg%3E"
    };
  },

  methods: {
    modalUp(a) {
      console.log("업");
      let viewModal = document.querySelector("#newModal");

      this.c = a;
      console.log(this.c);

      viewModal.style.display = "block";
    },
    close() {
      let viewModal = document.querySelector("#newModal");

      viewModal.style.display = "none";
    },
    ///////////////////////////// 이미지 누르면 업체상세페이지로 이동 //////////////////////
    goCompanyInfo(no) {
      this.$router.push("/companyinfo/" + no);
    },
    ////////////////////////////////////////////////////////////////////////////////
    listup() {
      axios({
        method: 'get', // put, post, delete 
        url: `${this.$store.state.apiBaseUrl}/odo/wishcompany`,
        headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        //data: this.$store.state.authUser.userNo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
        responseType: 'json' //수신타입
      }).then(response => {
        console.log(response); //수신데이타

        console.log(response.data.apiData);
        this.b = response.data.apiData
        console.log(this.b);
      }).catch(error => {
        console.log(error);
      });
    },
    del() {
      axios({
        method: 'delete', // put, post, delete 
        url: `${this.$store.state.apiBaseUrl}/odo/wishcompany`,
        headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
        //params: guestbookVo, //get방식 파라미터로 값이 전달
        data: this.c, //put, post, delete 방식 자동으로 JSON으로 변환 전달
        responseType: 'json' //수신타입
      }).then(response => {
        console.log(response); //수신데이타
        window.location.reload(true);
      }).catch(error => {
        console.log(error);
      });
    }
  },
  created() {
    this.listup();
  },
};
</script>

<style></style>
