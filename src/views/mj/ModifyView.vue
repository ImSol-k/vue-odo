<template>
	<div>
		<!-- AppHeader -->
		<AppHeader />
		<div class="wrap">
			<MyPageHeader/>
			<!-- container 부분 -->
			<div class="MporderContainer">
				<div class="MpLeft">
					
					<!-- nav -->
					<MyPageSide/>

				</div>
				<!-- 오른쪽내용영역 -->
				<div class="MpRight" style="overflow: hidden;">
					<h2>내 정보</h2>
					<div class="container Right">
						<button>저장</button>
					</div>
					
					<div class="box">
						<img class="profile" src="@/assets/images/하트.png">
					</div>
					<div id="p-box">
						<input type="file" name="" id="pic">
					</div>
					<div class="area">
						<div class="form-blank">
							<label class="group">닉네임</label>
						</div>
						<div>
							<input type="text" id="nickname" class="form_w100" placeholder="이미지" v-model=required>
						</div>
					</div>
					<div class="area">
						<div class="form-blank">
							<label class="group">휴대폰번호</label>
						</div>
						<div>
							<input type="text" id="hp" class="form_w100" disabled placeholder ="010-3333-3333" v-model="required">
						</div>
					</div>
					<div class="area">
						<div class="form-blank">
							<label class="group">이메일</label>
						</div>
						<div>
							<input type="text" id="e-mail" class="form_w100" disabled placeholder ="admin@admin.com" v-model="required">
						</div>
					</div>
					<div class="area">
						<div class="form-blank">
							<label class="group">비밀번호</label>
						</div>
						<div>
							<input type="password" id="password" class="form_w100" disabled placeholder ="****" v-model="required">
						</div>
					</div>
					<div class="area">
						<div class="form-blank">
							<label class="group">생년월일</label>
						</div>
						<div>
							<input type="text" id="birth" class="form_w100" disabled placeholder ="981217" v-model="required">
						</div>
					</div>
					<div>
						<div class="form-blank">
							<label class="group">성별</label>
						</div>
						<div>
							<input type="text" id="gender" class="form_w100" disabled placeholder ="**" v-model="required">
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
import MyPageSide from '@/components/MyPageSide.vue';
import MyPageHeader from '@/components/MyPageHeader.vue';

	export default {
		name: "ModifyView",
		components: {
			AppHeader,
			AppFooter,
			MyPageSide,
			MyPageHeader
		},
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>