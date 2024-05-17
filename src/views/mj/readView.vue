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
                <div>
                    <table id="detailboard" width="900" border="1" bordercolor="lightgray">
                        <tr>
                            <td id="title">작성일</td>
                            <td>2024.05.14</td>
                            <td id="title">작성자</td>
                            <td>이미지</td>
                        </tr>
                        <tr>
                            <td id="title">제목</td>
                            <td colspan="3">공지드립니다</td>
                            
                        </tr>
                        <tr>
                            <td colspan="4">
                                공지사항 내용입니다 공지사항 내용입니다
                                공지사항 내용입니다 공지사항 내용입니다
                                공지사항 내용입니다 공지사항 내용입니다
                                공지사항 내용입니다 공지사항 내용입니다
                                공지사항 내용입니다 공지사항 내용입니다
                                공지사항 내용입니다 공지사항 내용입니다
                                공지사항 내용입니다 공지사항 내용입니다
                                공지사항 내용입니다 공지사항 내용입니다
                            </td>
                        </tr>
                    </table>
                    <div>
                        <tr>
                            <td colspan="3">
                                <input type="file">
                            </td>
                        </tr>
                    </div>
                    <div id="notice_btn">
                        <div>
                            <input type="button" value="수정" class="button">
                            <input type="button" value="삭제" class="button">
                            <input type="button" value="목록" class="button">
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
import '@/assets/css/mj/read.css'
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import MyPageSide from '@/components/MyPageSide.vue';

	export default {
		name: "ModifyView",
		components: {
			AppHeader,
			AppFooter,
			MyPageSide
		},
		data() {
			return {};
	},
	methods: {},
	created(){}
	};
</script>

<style></style>