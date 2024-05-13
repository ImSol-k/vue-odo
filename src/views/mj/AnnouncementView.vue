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
                                <th width="500">제목</th>
                                <th width="120">글쓴이</th>
                                <th width="100">작성일</th>
                                <th width="100">조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td width="70">1111</td>
                            <td width="500"><a href="#">제제제목모곰곰고모목</a></td>
                            <td width="120">이미지</td>
                            <td width="100">2024-05-11</td>
                            <td width="100">222</td>
                          </tr>
                          <tr>
                            <td width="70">1111</td>
                            <td width="500"><a href="#">공지드립니다</a></td>
                            <td width="120">김효진</td>
                            <td width="100">2024-05-11</td>
                            <td width="100">222</td>
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