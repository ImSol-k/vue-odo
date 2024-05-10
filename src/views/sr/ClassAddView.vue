<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>클래스 등록</p>
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
        <div class="classAddBox">
            <img src="@/assets/images/icon/ss/kakao.png" alt="" />
            <div class="classAddImg">
              <p>대표이미지</p>
              <input type="file" name="" id="" />
              <select name="" id="" class="addPageSelectClassMemory">
                <option value="" disabled selected>기존클래스 불러오기</option>
                <option value="" v-for="i in 5" :key="i">
                  기존에 사용했던 클래스명 불러오기
                </option>
              </select>
            </div>
          <div>
            <select name="" id="" class="addPageSelectClass">
              <option value="" disabled selected>관련 정규클래스 선택</option>
              <option value="" v-for="i in 5" :key="i">
                정규클래스 {{ i }}번
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";

export default {
  name: "ClassAddView",
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

<style></style>
