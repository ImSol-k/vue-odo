<template>
  <div>
    <!-- AppHeader -->
    <AppHeader />
    <div class="wrap">
      <MyPageHeader />
      <!-- container 부분 -->
      <div class="modifyContent">
        <div class="MpLeft">
          <!-- nav -->
          <MyPageSide />
        </div>
        <!-- 오른쪽내용영역 -->
        <div class="modify-head">
          <span>정보수정</span>
        </div>
        <div class="MpRight" style="overflow: hidden">
          <img class="profile" src="@/assets/images/icon/header_icons/my.png" />
          <div id="p-box">
            <input type="file" name="" id="pic" />
          </div>
          <div class="area">
            <label>닉네임</label>
            <div>
              <input
                type="text"
                id="nickname"
                v-model="userVo.name"
              />
            </div>
          </div>
          <div class="area">
            <label>휴대폰번호</label>
            <div>
              <input
                type="text"
                id="hp"
                v-model="userVo.hp"
              />
            </div>
          </div>
          <div class="area">
            <label>이메일</label>
            <div>
              <input
                type="text"
                id="e-mail"
                v-model="userVo.email"
              />
            </div>
          </div>
          <div class="area">
            <label>비밀번호</label>
            <div>
              <input
                type="password"
                id="password"
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
                v-model="userVo.birth"
              />
            </div>
          </div>
          <div class="area">
            <label>성별</label>
            <div>
              <input
                type="text"
                id="gender"
                disabled
                placeholder="여자"
                v-model="required"
              />
            </div>
          </div>
          <div class="userModifyBtn">
            <button>취소</button>
            <button>저장</button>
          </div>
        </div>
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
    return {
      userVo: {
        name: "김소리",
        hp: "010-5443-5432",
        email: "sss@fds.fds",
        birth: "990523"
      }
    };
  },
  methods: {},
  created() {},
};
</script>

<style></style>
