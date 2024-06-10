<template>
  
<AppHeader />
<!-- AppHeader -->

<div class="wrap">

  <MyPageHeader />
  <!-- MyPageHeader -->

  <div class="modify-main clearfix">

    <MyPageSide />
    <!-- MyPageSide -->

    <div class="modifyContent clearfix">
      
      <!-- 오른쪽내용영역 -->

      <div class="modify-head">
        <span>정보수정</span>
      </div>
      <!-- modify-head -->

      <form @submit.prevent="modifyUser" enctype="multipart/form-data">
        <div class="MpRight" style="overflow: hidden">
          
            <label for="file">
              <img v-if="userVo.userImage == ''" :src="prevImg">
              <img v-else class="profile" :src="prevImg">
            </label>
            <br>
            <div id="p-box">
              <input class="upload-name" v-model="fileName" placeholder="선택된 파일이 없습니다" readonly>
              <label for="file">파일찾기</label>
              <input type="file" name="file" id="file" @change="getfile">
            </div>
          
          <br>
          <div class="area">
            <label for="name">이름</label>
            <div><input type="text" id="name" name="userVo.userName" v-model="userVo.userName" disabled></div>
          </div>
          <div class="area">
            <label for="nickname">닉네임</label>
            <div><input type="text" id="nickname" name="userVo.userNickname" v-model="userVo.userNickname"></div>
          </div>
          <div class="area">
            <label for="hp">휴대폰번호</label>
            <div><input type="text" id="hp" name="userVo.userHp" v-model="userVo.userHp"></div>
          </div>
          <div class="area">
            <label for="e-mail">이메일</label>
            <div><input type="text" id="e-mail" name="userVo.userEmail" v-model="userVo.userEmail"></div>
          </div>
          <div class="area">
            <label for="birth">생년월일</label>
            <div><input type="text" id="birth" name="userbirth" :value="formatDate(userVo.userBirth)" disabled></div>
          </div>
          <div class="area">
            <label for="gender">성별</label>
            <div><input type="text" id="gender" name="usergender" :value="checkGender(userVo.userGender)" disabled></div>
          </div>
          <div class="userModifyBtn">
            <button type="button" @click.prevent="goMypage">취소</button>
            <button  @click="goModify">저장</button>
          </div>
        </div>
      </form>
      <!-- //수정폼 -->
    </div>
    <!-- //modifyContent -->

  </div>
  <!-- //modify-main -->

</div>
<!-- //wrap -->
  
<AppFooter />
<!-- 푸터 -->

</template>

<script>
import "@/assets/css/Initialization.css";
import "@/assets/css/mj/modify.css";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import MyPageSide from "@/components/MyPageSide.vue";
import MyPageHeader from "@/components/MyPageHeader.vue";
import axios from 'axios';
import moment from "moment";
import Swal from "sweetalert2";

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
        userNo : '',
        userName : '',
        userNickname : '',
        userEmail : '',
        userImage : '',
        userType : '',
        userBirth : '',
        userId : '',
        userGender : '',
      },
      file : '',
      fileName : null,
      prevImg : require('@/assets/images/icon/ss/default-profile.png')
    };
  },
  methods: {
    modifyUser(){
      const formData = new FormData();
      if(this.file == ''){

      } else {
        formData.append('file', this.file);
      }
      formData.append('userNickname', this.userVo.userNickname);
      formData.append('userEmail', this.userVo.userEmail);
      formData.append('userHp', this.userVo.userHp);
      axios({
				method: 'put',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/modify`,
				headers: { 'Content-Type': 'multipart/form-data',
							'Authorization' : 'Bearer ' + this.$store.state.token
				},
        data : formData,
				responseType: 'json'
			}).then(response => {
        if(response.data.result === 'success'){
          let authUser = {
            userNo: response.data.apiData.userNo,
            userNickname: response.data.apiData.userNickname,
            userId: response.data.apiData.userId,
            userImage: response.data.apiData.userImage,
            userType : response.data.apiData.userType,
          };
          this.$store.commit("setAuthUser", authUser);
          // this.getUserInfo();
          Swal.fire({text : '수정 완료'});
        } else {
          Swal.fire({text : '통신오류 입니다.'});
        }
			}).catch(error => {
				console.log(error);
			});
    },


    getUserInfo(){
      axios({
				method: 'get',
				url: `${this.$store.state.apiBaseUrl}/odo/ss/modify`,
				headers: { 'Content-Type': 'application/json; charset=utf-8',
							'Authorization' : 'Bearer ' + this.$store.state.token
				},
        params : {userNo : this.$store.state.authUser.userNo},
				responseType: 'json'
			}).then(response => {
        this.userVo = response.data.apiData;
        this.prevImg = `${this.$store.state.apiBaseUrl}/upload/${response.data.apiData.userImage}`
			}).catch(error => {
				console.log(error);
			});
    },
    checkGender(type){
      if(type == 'male'){
        return '남자';
      } else {
        return '여자';
      }
    },
    formatDate(date){
      return moment(date).format('YYYY년 MM월 DD일');
    },
    goMypage(){
      this.$router.push('/mypage/pay');
    },
    getfile(event){
      this.file = event.target.files[0];
      const READER = new FileReader();

      READER.onload = (e) => {
        this.prevImg = e.target.result;
      }
      if(this.file){
        READER.readAsDataURL(this.file);
      }
      if(this.file != null){
        this.fileName = this.file.name;
      }
    }


  },
  created() {
    this.getUserInfo();
  }
};
</script>

<style></style>
