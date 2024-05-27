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
        <form v-on:submit.prevent="modify">
        <div class="MpRight" style="overflow: hidden">
          <img class="profile" src="@/assets/images/icon/header_icons/my.png" />
          <div id="p-box">
            <input type="file" name="" id="pic" />
          </div>
          <div class="area">
            <label>닉네임</label>
            <div>
              <input type="text" id="nickname" name="usernickname" v-model="userVo.name" />
            </div>
          </div>
          <div class="area">
            <label>휴대폰번호</label>
            <div>
              <input type="text" id="hp" name="userhp" v-model="userVo.hp" />
            </div>
          </div>
          <div class="area">
            <label>이메일</label>
            <div>
              <input type="text" id="e-mail" name="useremail" v-model="userVo.email" />
            </div>
          </div>
          <div class="area">
            <label>비밀번호</label>
            <div>
              <input type="password" id="password" name="userpw" v-model="required" />
            </div>
          </div>
          <div class="area">
            <label>생년월일</label>
            <div>
              <input type="text" id="birth" name="userbirth" disabled v-model="userVo.birth" />
            </div>
          </div>
          <div class="area">
            <label>성별</label>
            <div>
              <input type="text" id="gender" name="usergender" disabled placeholder="여자" v-model="required" />
            </div>
          </div>
          <div class="userModifyBtn">
            <button type="reset">취소</button>
            <button  @click="goModify">저장</button>
          </div>
        </div>
</form>
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
import axios from 'axios';


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
        name: "이미지",
        hp: "010-5443-5432",
        email: "sss@fds.fds",
        birth: "990523"
      }
    };
  },
  methods: {
    modify() {
     axios({
       method: 'post', // put, post, delete
       url: `${this.$store.state.apiBaseUrl}/odo/mypage/modify`,
       headers: { "Content-Type": "application/json; charset=utf-8","Autorization":"Bearer"+this.$store.state }, //전송타입
       data: this.userVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
       responseType: 'json' //수신타입
     }).then(response => {
         console.log(response);
        alert("수정되었습니다.");

         //수신데이타
       }).catch(error => {
         console.log(error);
       });
      },
        goModify(){ 
      this.$router.push('/mypage/pay');
    },
  },
    created() {

    }
};
</script>

<style></style>
