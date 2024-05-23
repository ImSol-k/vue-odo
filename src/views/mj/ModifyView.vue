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
              <input type="text" id="nickname" v-model="userVo.name" />
            </div>
          </div>
          <div class="area">
            <label>휴대폰번호</label>
            <div>
              <input type="text" id="hp" v-model="userVo.hp" />
            </div>
          </div>
          <div class="area">
            <label>이메일</label>
            <div>
              <input type="text" id="e-mail" v-model="userVo.email" />
            </div>
          </div>
          <div class="area">
            <label>비밀번호</label>
            <div>
              <input type="password" id="password" v-model="required" />
            </div>
          </div>
          <div class="area">
            <label>생년월일</label>
            <div>
              <input type="text" id="birth" v-model="userVo.birth" />
            </div>
          </div>
          <div class="area">
            <label>성별</label>
            <div>
              <input type="text" id="gender" disabled placeholder="여자" v-model="required" />
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
// import axios from 'axios';

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
  methods: {
    // axios({
    //   method: 'get', // put, post, delete
    //   //url: 'http://localhost:9000/mypage/modify',
    //   url: `${this.$store.state.apiBaseUrl}/odo/modify`,
    //   headers: { "Content-Type": "application/json; charset=utf-8","Autorization":"Bearer"+this.$store.state }, //전송타입
    //   //params: guestbookVo, //get방식 파라미터로 값이 전달
    //   data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
    //   responseType: 'json' //수신타입
    // }).then(response => {
    //     console.log(response/+.data.apiData);
        

    //     //수신데이타
    //   }).catch(error => {
    //     console.log(error);
    //   });
  },
    created() {
        this.modifyform();
    }
};
</script>

<style></style>
