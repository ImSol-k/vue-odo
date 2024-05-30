<template>

	<AppHeader/>
	<!-- header -->
	
	<div class="login-join">
		<span class="lj-txt">{{ loginTitle }}</span>
		<div class="lj-form">

			<div class="select-join">
				<div class="join-box">
					<button type="button" @click="userJoin" class="join-select">일반 회원가입</button>
					<img class="kakao-login" @click=kakaoJoin src="@/assets/images/icon/ss/kakao_login_medium_narrow.png">
					<button type="button" @click.="naverJoin" class="join-select">네이버로 회원가입</button>
				</div>
			</div>
			

			<!-- https://sorto.me/docs/Web/HTML/Element/input/email#term-multiple -->

			<div class="user-join">
				<div class="join1">
					<div class="join-box">
						<div class="join1-1">
							<input id="join-id" type="email"  v-model="joinVo.userId" :placeholder="`아이디&nbsp;(이메일)`"><br>
							<span v-if="joinVo.userId !== null && joinVo.userId !== '' && !isJoinIdValid" class="join-id-msg">올바른 이메일 형식이 아닙니다</span>
							<input id="join-pw" type="password" v-model="joinVo.userPw" placeholder="비밀번호">
							<!-- <span class="join1-txt">대/소문자, 숫자, 특수문자 중 2가지 이상의 조합으로 10자이상</span> -->
							<input id="join-pw2" type="password" v-model="checkPw" placeholder="비밀번호 한 번 더"><br>
						</div>


					</div>
					<button class="login-btn" type="button" @click="showSelectJoin">뒤로 가기</button>
					<button class="login-btn" type="button" @click="showJoin2" :disabled="!isJoinIdValid">다음</button>
				</div>
				<!-- join1 -->
				<div class="join2">
					<div class="join-box">
						<div class="join2-1">
							<input id="join-name" type="text" v-model="joinVo.userName" placeholder="이름">
							<input id="join-nickname" type="text" v-model="joinVo.userNickname" placeholder="닉네임">
							<input id="join-hp" type="text" v-model="joinVo.userHp" :placeholder="`핸드폰 번호를 '-' 없이 입력하세요`">
							<input id="join-birth" type="text" v-model="joinVo.userBirth" :placeholder="`생년월일을 '-' 없이 입력하세요 ex)19980303`"><br>
							<div class="join2-2">
								<label for="joinVoMale">남자</label>
								<input id="joinVoMale" type="radio" name="gender" v-model="joinVo.userGender" value="male">
								<label for="joinVoFemale">여자</label>
								<input id="joinVoFemale" type="radio" name="gender" v-model="joinVo.userGender" value="female">
							</div>
						</div>
						<button class="login-btn" v-on:click="showJoin1">뒤로가기</button>
						<button class="login-btn" type="submit" v-on:click.prevent="joinFinish">회원가입하기</button>
					</div>
				</div>
				<!-- join2 -->
				<div class="join3">
					<div class="join-box">
						<span>{{ joinVo.userNickname }}님 반가워요</span><br>
						<span>회원가입이 완료되었어요</span><br>
						<router-link to="/" class="login-btn">홈으로 가기</router-link>
						<router-link to="/login/user" class="login-btn">로그인하러가기</router-link>
					</div>
				</div>
				<!-- join3 -->
			</div>
			<!-- user-join -->
		</div>
		<!-- lj-form -->
	</div>
	<!-- login-join -->

	<AppFooter/>
	<!-- footer -->
</template>




<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/ss/login-join.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
	name: "JoinPage",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			check : false,
			checkPw : '',
			joinVo : {
				userId : '',
				userPw : '',
				userName : '',
				userNickname : '',
				userHp : '',
				userBirth : '',
				userGender : ''
			},
			loginTitle : '반가워요!',


		};
	},
	computed :{
		// 이메일 유효성 검증확인되면 다음버튼 활성화
		isJoinIdValid(){
			return this.validateEmail(this.joinVo.userId);
		},
		
	},

	mounted(){

	},
	methods: {

		// 일반회원 선택했을 때 
		userJoin(){
			let select = document.querySelector('.select-join');
			let user = document.querySelector('.user-join');
			select.style.display = 'none';
			user.style.display = 'block';
			this.loginTitle = '회원가입';
		},

		// 카카오로 회원가입
		kakaoJoin(){
			console.log('카카오회원가입');
		},
		
		// 네이버로 회원가입
		naverJoin(){
			console.log('네이버회원가입');
		},

		// 회원가입에서 뒤로가기 눌렀을 때 
		showSelectJoin(){
			this.joinVo = {
				userId: '',
				userPw: '',
				userNickname: '',
				userHp: '',
				userBirth: '',
				userGender: ''
			}
			this.checkPw = '';
			this.loginTitle = '반가워요!';
			let select = document.querySelector('.select-join');
			let user = document.querySelector('.user-join');
			select.style.display = 'block';
			user.style.display = 'none';
		},

		// 이메일 유효성 검증
		validateEmail(inputEmail) {
			const regex = /\S+@\S+\.\S+/;
			return regex.test(inputEmail);
		},

		// 다음 버튼 클릭했을 때 - 아이디 비밀번호 체크 + 비밀번호 확인
		/* eslint-disable */
		showJoin2(){
			let pw = this.joinVo.userPw;
			if(pw === null || pw === ''){
				Swal.fire({ text : '비밀번호를 확인하세요', icon : 'error', });
			} else if(pw.search(/\s/) != -1) {
				Swal.fire({ text : '비밀번호에 공백이 포함되어있습니다', icon : 'error', });
			} else if (pw != this.checkPw){
				Swal.fire({text : '비밀번호가 달라요', icon : 'error',});
			} else {
				axios({
					method: 'get',
					url: `${this.$store.state.apiBaseUrl}/odo/ss/checkid`,
					headers: { 'Content-Type': 'application/json; charset=utf-8' },
					params : {id : this.joinVo.userId},
					responseType: 'json'
				}).then(response => {
					if(response.data.apiData == 1){
						let join1 = document.querySelector('.join1');
						let join2 = document.querySelector('.join2');
						join1.style.display = 'none';
						join2.style.display = 'block';
					} else if(response.data.apiData == -1) {
						Swal.fire({text : '이미 등록된 이메일입니다', icon : 'error',});
					}
				}).catch(error => {
					console.log(error);
				});
			}
		},

		// 뒤로가기 버튼 클릭했을때 
		showJoin1(){
			let join1 = document.querySelector('.join1');
			let join2 = document.querySelector('.join2');
			join1.style.display = 'block';
			join2.style.display = 'none';
		},

		// 회원가입 버튼 클릭했을 때
		joinFinish (){
			let userName = this.joinVo.userName;
			let nickname = this.joinVo.userNickname;
			let hp = this.joinVo.userHp;
			let birth = this.joinVo.userBirth;
			let gender = this.joinVo.userGender;


			if(userName === null || userName === ''){
				Swal.fire({text : '이름을 확인하세요', icon : 'error',});
			} else if(userName.search(/\s/) != -1){
				Swal.fire({ text : '이름에 공백이 포함되어있습니다', icon : 'error', });
			} else if(nickname === null || nickname === ''){
				Swal.fire({text : '닉네임을 확인하세요', icon : 'error',});
			} else if(nickname.search(/\s/) != -1){
				Swal.fire({ text : '닉네임에 공백이 포함되어있습니다', icon : 'error', });
			} else if(hp === null || hp === ''){
				Swal.fire({text : '핸드폰번호를 확인하세요', icon : 'error',});
			} else if(hp.search(/\s/) != -1){
				Swal.fire({ text : '핸드폰번호에 공백이 포함되어있습니다', icon : 'error', });
			} else if(birth === null || birth === ''){
				Swal.fire({text : '생년월일을 확인하세요', icon : 'error',});
			} else if(birth.search(/\s/) != -1){
				Swal.fire({ text : '생년월일에 공백이 포함되어있습니다', icon : 'error', });
			} else if(gender === null || gender === ''){
				Swal.fire({text : '성별을 확인하세요', icon : 'error',});
			} else {
				axios({
					method: 'post',
					url: `${this.$store.state.apiBaseUrl}/odo/ss/userjoin`,
					headers: { 'Content-Type': 'application/json; charset=utf-8' },
					data: this.joinVo,
					responseType: 'json'
				}).then(response => {
					if(response.data.result === 'success'){
						this.loginTitle = '안녕하세요!'
						let join3 = document.querySelector('.join3');
						let join2 = document.querySelector('.join2');
						join2.style.display = 'none';
						join3.style.display = 'block';
					} else {
						Swal.fire({text: '회원가입에 실패했습니다.', icon: 'error'});
					}
				}).catch(error => {
					console.log(error);
				});
			}
		}
	},
	created(){

	}
};
</script>





<style>
.swal-wide{
	width : 100px;
}

</style>