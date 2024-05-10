<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>운영중인 클래스</p>
        <div class="whatClass">
          <span
            v-on:click.prevent="selectClass(1)"
            :class="{ classChack: isClass }"
            >원데이</span
          >
          <span
            v-on:click.prevent="selectClass(2)"
            :class="{ classChack: !isClass }"
            >정규</span
          >
        </div>

        <ul class="companyInfoClassfor clearfix" v-for="i in 6" :key="i">
          <li v-if="isClass">
            <img src="@/assets/images/icon/alt_icon.png" alt="" />
            <div class="classListObj">
              <p>(<span>20%</span>) 레모나클래스</p>
              <p>
                레모나 클레스 개강 종강일정 상세페이지 확인 설명글 설명글 공간
              </p>
            </div>
            <div class="classListOption">
              <button>예약확인</button>
              <button>일정확인</button>
            </div>
          </li>
          <li v-else>
            <img src="@/assets/images/icon/alt_icon.png" alt="" />
            <div class="classListObj">
              <p>레모나클래스</p>
              <p>
                레모나 클레스 개강 종강일정 상세페이지 확인 설명글 설명글 공간
              </p>
            </div>
            <div class="classListOption">
              <button>회원관리</button>
              <button>일정확인</button>
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
      isClass: true,
    };
  },
  methods: {
    selectClass(num) {
      if (num == 1) {
        this.isClass = true;
      } else {
        this.isClass = false;
      }
    },
  },
  created() {},
};
</script>

<style>
.classChack {
  border-bottom: 2px solid #8521ff;
}
</style>
