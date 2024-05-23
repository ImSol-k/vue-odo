<template>
  <AppHeader v-if="isUser == 'user'" />
  <HostAppHeader v-else/>
  <!-- header -->
  

  <div class="login-join" v-if="isUser == 'user'">
    <span class="lj-txt">로그인</span>
    <div class="lj-form">
      <form v-on:submit.prevent="login">
        <input type="text" name="id" v-model="loginVo.userId" placeholder="아이디(이메일)" />
        <!-- <img v-if="isPass" class="lj-passImg" :src="pass1" v-on:click.prevent="changeInputImg">
				<img v-else class="lj-passImg" :src="pass2" v-on:click.prevent="changeInputImg"> -->
        <input type="password" name="password" v-model="loginVo.userPw" placeholder="비밀번호" />
        <button class="login-btn" type="submit">로그인</button>
      </form>
      <!-- form -->
      <span class="other-login">다른 방식으로 로그인</span>
      <!-- https://henniee.tistory.com/219 -->
      <img @click="kakaoLogin" class="kakao-login" src="@/assets/images/icon/ss/kakao_login_medium.png" />
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
import axios from "axios";
import Swal from "sweetalert2";

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
        userId: '',
        userPw: '',
      },
      pass1: require("@/assets/images/icon/ss/pass1.png"),
      pass2: require("@/assets/images/icon/ss/pass2.png"),
      isPass: true,
      isUser: this.$route.params.type,
    };
  },
  methods: {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 로그인
    login() {
      let id = this.loginVo.userId;
      let pw = this.loginVo.userPw;

      if(id === null || id === ''){
        Swal.fire({text: '아이디를 확인하세요', icon: 'error'});
      } else if(id.search(/\s/) != -1) {
				Swal.fire({ text : '아이디에 공백이 포함되어있습니다', icon : 'error', });
			} else if(pw === null || pw === '') {
				Swal.fire({ text : '비밀번호를 확인하세요', icon : 'error', });
			} else if(pw.search(/\s/) != -1) {
				Swal.fire({ text : '비밀번호에 공백이 포함되어있습니다', icon : 'error', });
			} else {
        axios({
					method: 'post',
					url: `${this.$store.state.apiBaseUrl}/odo/ss/userlogin`,
					headers: { 'Content-Type': 'application/json; charset=utf-8' },
					data: this.loginVo,
					responseType: 'json'
				}).then(response => {
					if(response.data.result === 'success'){
            const token = response.headers.authorization.split(" ")[1];
            let authUser ={
              userNo : response.data.apiData.userNo,
              userNickname : response.data.apiData.userNickname,
              userId : response.data.apiData.userId,
              userImage : response.data.apiData.userImage,
              userKakao : response.data.apiData.userKakao,
              userNaver : response.data.apiData.userNaver,
            }
            this.$store.commit('setAuthUser', authUser);
            this.$store.commit('setToken', token);
            this.$router.push('/');
          } else {
            Swal.fire({text: response.data.message, icon: 'error'});
          }
				}).catch(error => {
					console.log(error);
				});
      }

    },

    // 비밀번호인풋창 바꾸기
    changeInputImg() {
      this.isPass = !this.isPass;
    },

    


    // https://velog.io/@aocl333/Vue-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EB%A1%9C%EA%B7%B8%EC%9D%B8
    kakaoLogin() {
      // const redirect_uri = 'http://localhost:8080/odo/user/oauth';
      // const clientId = '78707b677a0d5b7e94a82c2a18059218';
      // const Auth_url = `http://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&uri=http://localhost:8080/odo/user/oauth`;
      
      
      axios({
					method: 'get',
					url: `${this.$store.state.apiBaseUrl}/odo/user/oauth`,
					headers: { 'Content-Type': 'application/json; charset=utf-8' },
					// data: this.loginVo,
					responseType: 'json'
				}).then(response => {
          console.log(response);
          window.location.href = response.data;
				}).catch(error => {
					console.log(error);
				});

    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const ninkname = kakao_account.profile.ninkname;
          const email = kakao_account.email;
          console.log(kakao_account);
          console.log("ninkname", ninkname);
          console.log("email", email);

          //로그인처리구현

          alert("로그인 성공!");
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  },
	created() {
    
  },
};
</script>

<style>
</style>
