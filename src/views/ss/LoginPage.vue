<template>
  <AppHeader v-if="isUser == 'user'" />
  <HostAppHeader v-else/>
  <!-- header -->
  

  <div class="login-join" v-if="isUser == 'user'">
    <span class="lj-txt">로그인</span>
    <div class="lj-form">
      <form v-on:submit.prevent="login">
        <input type="text" name="id" v-model="loginVo.id" placeholder="아이디(이메일)" />
        <!-- <img v-if="isPass" class="lj-passImg" :src="pass1" v-on:click.prevent="changeInputImg">
				<img v-else class="lj-passImg" :src="pass2" v-on:click.prevent="changeInputImg"> -->
        <input ntype="password" name="password" v-model="loginVo.password" placeholder="비밀번호" />
        <button class="login-btn" type="submit">로그인</button>
      </form>
      <!-- form -->
      <span class="other-login">다른 방식으로 로그인</span>
      <img @click="loginKakao" class="kakao-login" src="@/assets/images/icon/ss/kakao_login_medium.png" />
      <!-- <img src="@/assets/images/icon/ss/na.png" /> -->
    </div>
    <!-- lj-form -->
  </div>
  <!-- login-join -->

  <div class="login-join" v-else>
    <span class="lj-txt">사업자 로그인</span>
    <div class="lj-form">
      <form v-on:submit.prevent="login">
        <input
          type="text"
          name="id"
          v-model="loginVo.id"
          placeholder="아이디"
        />
        <!-- <img v-if="isPass" class="lj-passImg" :src="pass1" v-on:click.prevent="changeInputImg">
				<img v-else class="lj-passImg" :src="pass2" v-on:click.prevent="changeInputImg"> -->
        <input
          type="password"
          name="password"
          v-model="loginVo.password"
          placeholder="비밀번호"
        />
        <button class="login-btn" type="submit">로그인</button>
      </form>
    </div>
    <!-- lj-form -->
  </div>

  <AppFooter />
  <!-- footer -->
</template>



<script>
import "@/assets/css/Initialization.css";
import "@/assets/css/ss/login-join.css";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import HostAppHeader from "@/components/HostAppHeader.vue";

export default {
  name: "LoginPage",
  components: {
    AppHeader,
    AppFooter,
	HostAppHeader
  },
  data() {
    return {
      loginVo: {
        id: "",
        password: "",
      },
      pass1: require("@/assets/images/icon/ss/pass1.png"),
      pass2: require("@/assets/images/icon/ss/pass2.png"),
      isPass: true,
      isUser: this.$route.params.type,
    };
  },
  methods: {
    // 로그인
    login() {
      console.log("로그인");
      console.log(this.loginVo);
      
    },

    // 비밀번호인풋창 바꾸기
    changeInputImg() {
      this.isPass = !this.isPass;
    },

    // 카카오 로그인
    loginKakao(){
      console.log('카카오');
    },

  },
	created() {
    
  },
};
</script>

<style>
</style>
