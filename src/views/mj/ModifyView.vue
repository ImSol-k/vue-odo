<template>
  <div>
    <!-- AppHeader -->
    <AppHeader />
    <div class="wrap">
      <MyPageHeader />
      <!-- container 부분 -->
      <div class="">
        <div class="MpLeft">
          <!-- nav -->
          <MyPageSide />
        </div>
        <!-- 오른쪽내용영역 -->
        <div class="mymy-head">
          <span>위시리스트</span>
        </div>
        <div class="MpRight" style="overflow: hidden">
          <img class="profile" src="@/assets/images/하트.png" />
          <div id="p-box">
            <input type="file" name="" id="pic" />
          </div>
          <div class="area">
            <label>닉네임</label>
            <div>
              <input
                type="text"
                id="nickname"
                class="form_w100"
                placeholder="이미지"
                v-model="required"
              />
            </div>
          </div>
          <div class="area">
            <label>휴대폰번호</label>
            <div>
              <input
                type="text"
                id="hp"
                class="form_w100"
                placeholder="010-3333-3333"
                v-model="required"
              />
            </div>
          </div>
          <div class="area">
            <label>이메일</label>
            <div>
              <input
                type="text"
                id="e-mail"
                class="form_w100"
                placeholder="admin@admin.com"
                v-model="required"
              />
            </div>
          </div>
          <div class="area">
            <label>비밀번호</label>
            <div>
              <input
                type="password"
                id="password"
                class="form_w100"
                placeholder="****"
                v-model="required"
              />
            </div>
          </div>
          <div class="area">
            <label>생년월일</label>
            <div>
              <input
                type="text"
                id="birth"
                class="form_w100"
                placeholder="981217"
                v-model="required"
              />
            </div>
          </div>
          <div class="area">
            <label>성별</label>
            <div>
              <input
                type="text"
                id="gender"
                class="form_w100"
                disabled
                placeholder="**"
                v-model="required"
              />
            </div>
          </div>
        </div>
        <button>저장</button>
      </div>
    </div>
  </div>
  <!-- 푸터 -->
  <AppFooter />
</template>
<script>
import "@/assets/css/Initialization.css";
import "@/assets/css/mj/modify.css";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import MyPageSide from "@/components/MyPageSide.vue";
import MyPageHeader from "@/components/MyPageHeader.vue";

export default {
  name: "ModifyView",
  components: {
    AppHeader,
    AppFooter,
    MyPageSide,
    MyPageHeader,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style></style>
