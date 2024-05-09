<template>
	<div>
		<div class="wrap">
			<!-- container 부분 -->
			<div class="MporderContainer">
				<div class="MpLeft">
					<!-- nav -->
					<ul>
						<li><strong>내 활동</strong></li>
						<li><router-link to="/mypage">결제 내역</router-link></li>
						<li><router-link to="/mypage">위시리스트</router-link></li>
						<li><router-link to="/mypage">쿠폰</router-link></li>
						<li><router-link to="/mypage">후기</router-link></li>
					</ul>
					<hr>
					<ul>
						<li><strong>고객센터</strong></li>
						<li><router-link to="/mypage">공지사항</router-link></li>
						<li><router-link to="/mypage">약관 및 정책</router-link></li>
					</ul>
					<hr>
				</div>
				<!-- 오른쪽내용영역 -->
				<div class="MpRight">
					<h2>내 정보</h2>
					<div class="ModifyImg">
						<img src="@/assets/images/icon/man_icon.png" alt="">
					</div>
					<br>
					<div class="form-blank">
						<label for="group">닉네임</label>
					</div>
					<div>
						<span id="fixid"> 이미지</span>
					</div>
					<div class="form-blank">
						<label class="group">휴대폰번호</label>
					</div>
					<div>
						<input type="hp" id="hp">
					</div>
					<div class="form-blank">
						<label class="group">이메일</label>
					</div>
					<div>
						<input type="e-mail" id="e-mail" v-model= required>
					</div>
					<div class="form-blank">
						<label class="group">비밀번호</label>
					</div>
					<div>
						<input type="password" id="password" v-model= required>
					</div>
					<div class="form-blank">
						<label class="group">생년월일</label>
					</div>
					<div>
						<input type="birth" id="birth" v-model= required>
					</div>
					<div class="form-blank">
						<label class="group">성별</label>
					</div>
					<div>
						<span id="fixid"> **</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import '@/assets/css/Initialization.css'
import "@/assets/css/mj/modify.css"

	export default {
		name: "ModifyView",
		components: {},
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>