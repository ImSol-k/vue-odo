<template>
	<div>
		<!-- AppHeader -->
		<AppHeader />
		<div class="wrap">
			
			<!-- container 부분 -->
			<div class="MporderContainer">
				<div class="MpLeft">
					
					<!-- nav -->
					<MyPageSide/>

				</div>
				<!-- 오른쪽내용영역 -->
				<div class="MpRight">
					<form action="" method="post" enctype="multipart/form-data">
						<div id="in_title">
							<textarea name="title" id="utitle" rows="1" cols="55" placeholder="제목" maxlength="100"></textarea>
						</div>
						<div id="in_name">
							<textarea name="name" id="uname" rows="1" cols="55" placeholder="글쓴이" maxlength="100"></textarea>
						</div>
						<!-- <div class="wi_line"></div> -->
						<div id="in_content">
							<textarea name="content" id="ucontent" placeholder="내용"></textarea>
						</div>
						<div id="in_file">
							<input type="file" name="b_file" />
						</div>
						<div class="bt_se">
							<button type="submit" @click="goRead">글 작성</button>
						</div>
					</form>
				</div>
		</div>
	</div>
</div>
		<!-- 푸터 -->
		<AppFooter/>
</template>
<script>
import '@/assets/css/Initialization.css'
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import MyPageSide from '@/components/MyPageSide.vue';

	export default {
		name: "NoticemodifyView",
		components: {
			AppHeader,
			AppFooter,
			MyPageSide
		},
		data() {
			return {};
	},
	methods: {
		goRead(){
			this.$router.push('/mypage/read');
		}
	},
	created(){}
	};
</script>

<style></style>