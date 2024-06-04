<template>
  <AppHeader v-if="isUser == 'user'" />
  <HostAppHeader v-else />
  <!-- header -->

  <div class="login-join" v-if="isUser == 'user'">
    <span class="lj-txt">로그인</span>
    <div class="lj-form">
      <form @submit.prevent="login">
        <input type="text" name="id" v-model="loginVo.userId" placeholder="아이디" />
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
      <form v-on:submit.prevent="cLogin">
        <input
          type="text"
          name="id"
          v-model="cLoginVo.companyId"
          placeholder="아이디"
        />
        <!-- <img v-if="isPass" class="lj-passImg" :src="pass1" v-on:click.prevent="changeInputImg">
				<img v-else class="lj-passImg" :src="pass2" v-on:click.prevent="changeInputImg"> -->
        <input
          type="password"
          name="password"
          v-model="cLoginVo.companyPass"
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
    HostAppHeader,
  },
  data() {
    return {
      loginVo: {
        userId: '',
        userPw: '',
      },
      // https://velog.io/@yeoonnii/Vue.js-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%9B%84-%EC%9D%B4%EC%A0%84%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C-%EB%90%98%EB%8F%8C%EC%95%84%EA%B0%80%EA%B8%B0
      path : this.$route.fullPath,
      pass1: require("@/assets/images/icon/ss/pass1.png"),
      pass2: require("@/assets/images/icon/ss/pass2.png"),
      isPass: true,
      isUser: this.$route.params.type,
      cLoginVo: {
        companyId: "",
        companyPass: "",
      },
      code: this.$route.query.code,

    };
  },
  mounted(){
    
  },
  methods: {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 카카오 로그인 버튼 눌렀을 때
    kakaoLogin(){
      window.Kakao.Auth.authorize({
        redirectUri : 'http://localhost:8080/login/user',
        prompt : 'login'
      })
    },

    // 수신동의하면 토큰 받아와서 유저정보가져오는 메소드 실행
    getToken(code){
      axios({
				method: 'post',
				url: `https://kauth.kakao.com/oauth/token`,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
				params : {
          'grant_type': 'authorization_code',
          'client_id' : '78707b677a0d5b7e94a82c2a18059218',
          'redirect_uri' : 'http://localhost:8080/login/user',
          'code' : code,
          'client_secret' : 'qboKDshBeJY0XTfj3xCWFYH5RqXzahpy'
        },
				responseType: 'json'
			}).then(response => {
        // console.log('인가코드받기'+response.data);
        this.getUserInfo(response.data.access_token, response.data.scope);
      }).catch(error => {
				console.log(error);
			});
		},
    // 토큰과 어떤정보가져올지 넣고 유저정보 받아오기 -> 받아온값을 서버로 넘겨서 데이터 확인
    getUserInfo(access_token,scope){
      axios({
				method: 'get',
				url: `https://kapi.kakao.com/v2/user/me`,
				headers: { 
          'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8',
          'Authorization' : 'Bearer ' + access_token
        },
        data : scope,
				responseType: 'json'
			}).then(response => {
        console.log('받아온 유저정보: '+response);
        if(response.status === 200){
          // console.log('토큰에서 아이디 출력 : '+response.data.id);
          // console.log('액세스토큰 : '+ access_token);
          let userVo = {
            userId : 'kakao '+response.data.id,
            userEmail : response.data.kakao_account.email,
            userName : response.data.properties.nickname,
            userNickname : response.data.properties.nickname,
            userType : 1,
          }
          // console.log('userVo: '+userVo)
          this.$store.commit('setKakaoToken',access_token);
          // console.log(this.$store.state.kakao)
          this.kakaoLoignCheck(userVo);
        } else {
          Swal.fire({text: '인증실패'});
        }
			}).catch(error => {
				console.log(error);
			});
    },

    // 유저정보를 서버로 보내서 회원가입이 안되어있으면 회원가입시키고 로그인, 회원가입이 되어있으면 그냥 로그인처리
    kakaoLoignCheck(userVo){
      axios({
				method: 'post',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/kakaocheck`,
				headers: { 
          'Content-Type': 'application/json; charset=utf-8'
        },
        data : userVo,
				responseType: 'json'
			}).then(response => {
        if(response.data.result === 'success'){
          // console.log(response.data.apiData);
          const token = response.headers.authorization.split(" ")[1];
          let authUser = {
            userNo: response.data.apiData.userNo,
            userNickname: response.data.apiData.userNickname,
            userId: response.data.apiData.userId,
            userImage: response.data.apiData.userImage,
            userType : response.data.apiData.userType
          };
          this.$store.commit('setAuthUser', authUser);
          this.$store.commit('setToken', token);
          this.$router.push('/');
        } else {
          Swal.fire({text: '통신오류'})
        }
			}).catch(error => {
				console.log(error);
			});
    },

    // 로그인
    login() {
      let id = this.loginVo.userId;
      let pw = this.loginVo.userPw;

      if (id === null || id === "") {
        Swal.fire({ text: "아이디를 확인하세요", icon: "error" });
      } else if (id.search(/\s/) != -1) {
        Swal.fire({ text: "아이디에 공백이 포함되어있습니다", icon: "error" });
      } else if (pw === null || pw === "") {
        Swal.fire({ text: "비밀번호를 확인하세요", icon: "error" });
      } else if (pw.search(/\s/) != -1) {
        Swal.fire({
          text: "비밀번호에 공백이 포함되어있습니다",
          icon: "error",
        });
      } else {
        axios({
          method: "post",
          url: `${this.$store.state.apiBaseUrl}/odo/ss/userlogin`,
          headers: { "Content-Type": "application/json; charset=utf-8" },
          data: this.loginVo,
          responseType: "json",
        })
        .then((response) => {
            if (response.data.result === "success") {
              const token = response.headers.authorization.split(" ")[1];
              let authUser = {
                userNo: response.data.apiData.userNo,
                userNickname: response.data.apiData.userNickname,
                userId: response.data.apiData.userId,
                userImage: response.data.apiData.userImage,
                userType : response.data.apiData.userType,
              };
              this.$store.commit("setAuthUser", authUser);
              this.$store.commit("setToken", token);
              this.$router.push("/");
            } else {
              Swal.fire({ text: response.data.message, icon: "error" });
            }
        }).catch((error) => {
            console.log(error);
        });
      }
    },

    // 비밀번호인풋창 바꾸기
    changeInputImg() {
      this.isPass = !this.isPass;
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 사업자로그인
    cLogin() {
      console.log("사업자 로그인");
      axios({
          method: "post",
          url: `${this.$store.state.apiBaseUrl}/odo/company/login`,
          headers: { "Content-Type": "application/json; charset=utf-8" },
          data: this.cLoginVo,
          responseType: "json",
        })
          .then((response) => {
            if (response.data.result === "success") {
              const token = response.headers.authorization.split(" ")[1];
              let authCompany = {
                companyNo: response.data.apiData.companyNo,
                companyId: response.data.apiData.companyId,
                companyName: response.data.apiData.companyName,
                companyImage: response.data.apiData.companyImage,
              };
              this.$store.commit("setAuthCompany", authCompany);
              this.$store.commit("setCToken", token);
              this.$router.push("/companypage");
            } else {
              Swal.fire({ text: "로그인 실패", icon: "error" });
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
  created() {
    if(this.code != undefined){
      this.getToken(this.code);
    }
  },
};
</script>

<style></style>
