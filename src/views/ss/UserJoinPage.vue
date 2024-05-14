<template>

	<AppHeader/>
	<!-- header -->
	
	<div class="login-join">
		<span class="lj-txt">회원가입</span>
		<div class="lj-form">
			
			<div class="join1">
				<div class="join-box">
					<div class="join1-1">
						<input id="join-id" type="text" v-model="joinVo.id" :placeholder="`아이디&nbsp;(이메일)`"><br>
						<span class="join-id-msg">올바른 이메일 형식이 아닙니다</span>
						<input id="join-pw" type="password" v-model="joinVo.password" placeholder="비밀번호">
						<span class="join1-txt">대/소문자, 숫자, 특수문자 중 2가지 이상의 조합으로 10자이상</span>
						<input id="join-pw2" type="password" v-model="checkPw" placeholder="비밀번호 한 번 더"><br>
						<span class="join-pw-msg">비밀번호를 확인하세요</span>
					</div>
				</div>
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
					<span>ㅁㅁㅁ님 반가워요</span><br>
					<span>회원가입이 완료되었어요</span><br>
					<router-link to="/" class="login-btn">홈으로 가기</router-link>
					<router-link to="/login" class="login-btn">로그인하러가기</router-link>
				</div>
			</div>
			
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
			}
		};
	},
	mounted(){
		document.querySelector('.join2').style.display = 'none';
	},
	methods: {
		// 다음 버튼 클릭했을 때
		showJoin2(){
			let join1 = document.querySelector('.join1');
			let join2 = document.querySelector('.join2');

			// 공백 등 조건 고려해서 if 문 추가
			// if(this.joinVo.password === this.checkPw) {
				join1.style.display = 'none';
				join2.style.display = 'block';
			// }
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