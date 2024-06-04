<template>
	<div>
		<!-- AppHeader -->
		<AppHeader />
		<div class="wrap">
			
			<!-- container 부분 -->
			<div class="MporderContainer">
				<div class="MpLeft">
					
					<!-- nav -->
					<!-- <MyPageSide /> -->

				</div>
				<!-- 오른쪽내용영역 -->
				<div class="MpRight">
					
						<div id="in_title">
							<textarea v-model="write.title" name="title" id="utitle" rows="1" cols="55" placeholder="제목" maxlength="100"></textarea>
						</div>
						<!-- <div class="wi_line"></div> -->
						<div id="in_content">
							<textarea v-model="write.content" name="content" id="ucontent" placeholder="내용"></textarea>
						</div>
						<div class="bt_se">
							<button id="sign" type="submit" v-on:click.prevent="goList">등록</button>
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
import "@/assets/css/mj/write.css"
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
// import MyPageSide from '@/components/MyPageSide.vue';
import axios from 'axios';

	export default {
		name: "ModifyView",
		components: {
			AppHeader,
			AppFooter,
			// MyPageSide
		},
		data() {
			return {
				write:{
					title:"",
					content:""

				}
			};
		},
		methods: {
			
			goList() {
				console.log("안녕하세요");
				console.log(this.write);
				axios({
                method: 'post', // put, post, delete                   
                url: `${this.$store.state.apiBaseUrl}/odo/mypage/notice/write`,
                headers: { 'Content-Type': 'application/json; charset=utf-8',
								'Authorization' : 'Bearer ' + this.$store.state.token }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.write, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.$router.push('/mypage/notice'); // 예시 라우팅, 필요에 따라 조정

            }).catch(error => {
                console.log(error);
                
            });
        }
		},
		created(){}
	};
</script>

<style></style>