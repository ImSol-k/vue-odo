<template>

	<AppHeader/>
	<!-- header -->
	
	<div class="login-join">
		<span class="lj-txt">{{ loginTitle }}</span>
		<div class="lj-form">

			<div class="select-join">
				<div class="join-box">
					<span class="other-login">선택</span><br>
					<button type="button" v-on:click.prevent="userJoin" class="join-select">일반 회원</button>
					<button type="button" v-on:click.prevent="companyJoin" class="join-select">기업 회원</button>
				</div>
				<!-- join-box -->
				<router-link to="/login" class="go-login">로그인하러가기</router-link>
			</div>

			<div class="user-join">
				<div class="join1">
					<div class="join-box">
						<div class="join1-1">
							<input id="join-id" type="text" v-model="joinVo.id" :placeholder="`아이디&nbsp;(이메일)`"><br>
							<!-- <span class="join-id-msg">올바른 이메일 형식이 아닙니다</span> -->
							<input id="join-pw" type="password" v-model="joinVo.password" placeholder="비밀번호">
							<span class="join1-txt">대/소문자, 숫자, 특수문자 중 2가지 이상의 조합으로 10자이상</span>
							<input id="join-pw2" type="password" v-model="checkPw" placeholder="비밀번호 한 번 더"><br>
							<!-- <span class="join-pw-msg">비밀번호를 확인하세요</span> -->
						</div>
					</div>
					<button class="login-btn" type="button" v-on:click="showSelectJoin">뒤로 가기</button>
					<button class="login-btn" type="button" v-on:click="showJoin2">다음</button>
				</div>
				<!-- join1 -->
				<div class="join2">
					<div class="join-box">
						<div class="join2-1">
							<input id="join-nickname" type="text" v-model="joinVo.nickName" placeholder="닉네임">
							<input id="join-hp" type="text" v-model="joinVo.hp" :placeholder="`핸드폰 번호를 '-' 없이 입력하세요`">
							<input id="join-birth" type="text" v-model="joinVo.birth" :placeholder="`생년월일을 '-' 없이 입력하세요`"><br>
							<div class="join2-2">
								<label for="joinVoMale">남자</label>
								<input id="joinVoMale" type="radio" name="gender" v-model="joinVo.gender" value="male">
								<label for="joinVoFemale">여자</label>
								<input id="joinVoFemale" type="radio" name="gender" v-model="joinVo.gender" value="female">
							</div>
						</div>
						<button class="login-btn" v-on:click="showJoin1">뒤로가기</button>
						<button class="login-btn" type="submit" v-on:click.prevent="join">회원가입하기</button>
					</div>
				</div>
				<!-- join2 -->
				<div class="join3">
					<div class="join-box">
						<span>{{ joinVo.nickName }}님 반가워요</span><br>
						<span>회원가입이 완료되었어요</span><br>
						<router-link to="/" class="login-btn">홈으로 가기</router-link>
						<router-link to="/login" class="login-btn">로그인하러가기</router-link>
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

export default {
	name: "UserJoinPage",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			checkPw : '',
			joinVo : {
				id : '',
				password : '',
				nickName : '',
				hp : '',
				birth : '',
				gender : ''
			},
			loginTitle : '반가워요!',


		};
	},
	mounted(){

	},
	methods: {
		// 기업회원 선택했을 때 
		companyJoin(){
			this.$router.push('/companyjoin');
			
		},

		// 일반회원 선택했을 때 
		userJoin(){
			let select = document.querySelector('.select-join');
			let user = document.querySelector('.user-join');
			select.style.display = 'none';
			user.style.display = 'block';
			this.loginTitle = '회원가입';
		},

		// 회원가입에서 뒤로가기 눌렀을 때 
		showSelectJoin(){
			console.log('asdasd');
			this.joinVo = {
				id: '',
				password: '',
				nickName: '',
				hp: '',
				birth: '',
				gender: ''
			}
			this.loginTitle = '반가워요!';
			let select = document.querySelector('.select-join');
			let user = document.querySelector('.user-join');
			select.style.display = 'block';
			user.style.display = 'none';
		},

		// 다음 버튼 클릭했을 때
		showJoin2(){
			let join1 = document.querySelector('.join1');
			let join2 = document.querySelector('.join2');

			// 공백 등 조건 고려해서 if 문 추가
			join1.style.display = 'none';
			join2.style.display = 'block';

		},
		// 뒤로가기 버튼 클릭했을때 
		showJoin1(){
			let join1 = document.querySelector('.join1');
			let join2 = document.querySelector('.join2');
			join1.style.display = 'block';
			join2.style.display = 'none';
		},

		// 회원가입 버튼 클릭했을 때
		join (){
			console.log(this.joinVo);
			this.loginTitle = '안녕하세요!'
			let join3 = document.querySelector('.join3');
			let join2 = document.querySelector('.join2');
			join2.style.display = 'none';
			join3.style.display = 'block';
		}
	},
	created(){
		this.joinVo = {};
	}
};
</script>





<style>
</style>