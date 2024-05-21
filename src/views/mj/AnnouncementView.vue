<template>
    <diV>
      <!-- AppHeader -->
      <AppHeader />
        <div class="wrap">
            <div class="MporderContainer">
                <div class="MpLeft">
                
                <!-- nav -->
                <MyPageSide/>

                </div>
                <div class="MpRight" style="overflow: hidden;">

                    <h2>공지사항</h2>
                
                    <table class="list-table">
                      <thead>
                          <tr>
                              <th width="70">번호</th>
                                <th width="400">제목</th>
                                <th width="100">글쓴이</th>
                                <th width="100">작성일</th>
                                <th width="100">조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1111</td>
                            <td><a href="#">공지 전달드립니다</a></td>
                            <td>이미지</td>
                            <td>2024-05-11</td>
                            <td>111</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td><a href="#">공지 전달드립니다</a></td>
                            <td>이미지</td>
                            <td>2024-05-11</td>
                            <td>111</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td><a href="#">공지 전달드립니다</a></td>
                            <td>이미지</td>
                            <td>2024-05-11</td>
                            <td>111</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td><a href="#">공지 전달드립니다</a></td>
                            <td>이미지</td>
                            <td>2024-05-11</td>
                            <td>111</td>
                          </tr>
                          <tr>
                            <td>1111</td>
                            <td><a href="#">공지 전달드립니다</a></td>
                            <td>이미지</td>
                            <td>2024-05-11</td>
                            <td>111</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
            </div>
        </div>
    </diV>
    <!-- 푸터 -->
		<AppFooter/>
</template>
<script>
import '@/assets/css/Initialization.css'
import '@/assets/css/mj/notice.css'
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import MyPageSide from '@/components/MyPageSide.vue';

	export default {
		name: "ConditionView",
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