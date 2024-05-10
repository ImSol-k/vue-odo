<template>
	<div>
		<!-- AppHeader -->
		<AppHeader />
		<div class="wrap">
			
			<!-- container 부분 -->
			<div class="MporderContainer">
				<div class="MpLeft">
					<!-- nav -->
					<ul>
						<li><strong>내 활동</strong></li>
						<li><router-link to="">결제 내역</router-link></li>
						<li><router-link to="">위시리스트</router-link></li>
						<li><router-link to="">쿠폰</router-link></li>
						<li><router-link to="">후기</router-link></li>
					</ul>
					<hr>
					<ul>
						<li><strong>고객센터</strong></li>
						<li><router-link to="">공지사항</router-link></li>
						<li><router-link to="">약관 및 정책</router-link></li>
					</ul>
					<hr>
				</div>
				<!-- 오른쪽내용영역 -->
				<div class="MpRight">
					<h2>내 정보</h2>
					<div class="container Right">
						<button>저장</button>
					</div>
					
					<div class="contents_body">
						<div class="ModifyImg">
						<img src="@/assets/images/icon/man_icon.png" alt="">
					</div>
					<br>
					<div class="form-blank">
						<label class="group">닉네임</label>
					</div>
					<div>
						<span id="fixid"> 이미지</span>
					</div>
					<div class="form-blank">
						<label class="group">휴대폰번호</label>
					</div>
					<div>
						<input type="text" id="hp" class="form_w100" v-model=required>
					</div>
					<div class="form-blank">
						<label class="group">이메일</label>
					</div>
					<div>
						<input type="text" id="e-mail" class="form_w100" v-model= required>
					</div>
					<div class="form-blank">
						<label class="group">비밀번호</label>
					</div>
					<div>
						<input type="password" id="password" class="form_w100" v-model= required>
					</div>
					<div class="form-blank">
						<label class="group">생년월일</label>
					</div>
					<div>
						<input type="text" id="birth" class="form_w100" v-model= required>
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
	</div>
		<!-- 푸터 -->
		<AppFooter/>
</template>
<script>
import '@/assets/css/Initialization.css'
import "@/assets/css/mj/modify.css"
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';

	export default {
		name: "ModifyView",
		components: {
			AppHeader,
			AppFooter
		},
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>