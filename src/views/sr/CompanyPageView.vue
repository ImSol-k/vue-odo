<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>운영중인 클래스</p>
        <div class="whatClass">
          <span v-on:click.prevent="selectClass(1)" :class="{ classChack: isClass == 1 }">원데이</span>
          <span v-on:click.prevent="selectClass(2)" :class="{ classChack: isClass == 2 }">정규</span>
          <span v-on:click.prevent="selectClass(3)" :class="{ classChack: isClass == 3 }">상시정규</span>
        </div>

        <ul class="companyInfoClassfor clearfix" v-for="i in 6" :key="i">
          <!-- 원데이클래스 -->
          <li v-if="isClass == 1">
            <img src="@/assets/images/icon/alt_icon.png" alt="" />
            <div class="classListObj">
              <p>(원데이)레모나클래스</p>
              <p>
                레모나 클레스 개강 종강일정 상세페이지 확인 설명글 설명글 공간
              </p>
            </div>
            <div class="classListOption">
              <router-link class="classRouterLink" to="/membermanager">예약확인</router-link>
              <router-link class="classRouterLink" to="/classcalender">일정확인</router-link>
            </div>
          </li>
          <!-- 상시클래스 -->
          <li v-else-if="isClass == 2">
            <img src="@/assets/images/icon/alt_icon.png" alt="" />
            <div class="classListObj">
              <p>(정규)레모나클래스</p>
              <p>
                레모나 클레스 개강 종강일정 상세페이지 확인 설명글 설명글 공간
              </p>
            </div>
            <div class="classListOption">
              <router-link class="classRouterLink" to="/membermanager">회원관리</router-link>
              <router-link class="classRouterLink" to="/classcalender">일정확인</router-link>
            </div>
          </li>
          <li v-else>
            <img src="@/assets/images/icon/alt_icon.png" alt="" />
            <div class="classListObj">
              <p>(상시)레모나클래스</p>
              <p>
                레모나 클레스 개강 종강일정 상세페이지 확인 설명글 설명글 공간
              </p>
            </div>
            <div class="classListOption">
              <router-link class="classRouterLink" to="/membermanager">회원관리</router-link>
              <router-link class="classRouterLink" to="/classcalender">일정확인</router-link>
            </div>
          </li>
        </ul>
      </div>
      <!--companyInfoClassList-->
    </div>
  </div>
  <!--wrap-->
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";

export default {
  name: "CompanyPageView",
  components: { AppHeader, AppFooter, AppMenu },
  data() {
    return {
      isClass: 1,
    };
  },
  methods: {
    selectClass(num) {
      if (num == 1) {
        this.isClass = 1;
      } else if (num == 2) {
        this.isClass = 2;
      } else {
        this.isClass = 3;
        
      }
    },
  },
  created() {},
};
</script>

<style>
</style>
