<template>
  <div>
    <!-- AppHeader -->
    <AppHeader />
    <div class="wrap">
      <div class="MporderContainer">
        <div class="MpLeft">
          <!-- nav -->
          <!-- <MyPageSide/> -->
        </div>
        <h2>공지사항</h2>
        <div class="MpRight" style="overflow: hidden;">
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
              <tr v-for="(noticeVo, i) in list" :key="i">
                <td @click="goToReadPage(noticeVo.no)">{{ noticeVo.no }}</td>
                <td @click="goToReadPage(noticeVo.no)">{{ noticeVo.title }}</td>
                <td @click="goToReadPage(noticeVo.no)">{{ noticeVo.name }}</td>
                <td @click="goToReadPage(noticeVo.no)">{{ noticeVo.regDate }}</td>
                <td @click="goToReadPage(noticeVo.no)">{{ noticeVo.pagesNo }}</td>
              </tr>
            </tbody>
          </table>
                          <!-- <tr>
                            <td>1111</td>
                            <td><a href="#" @click="goRead">공지 전달드립니다</a></td>
                            <td>관리자</td>
                            <td>2024-05-11</td>
                            <td>111</td>
                          </tr>
                           -->

          <span v-if="noticeVo.next">next</span>
          <span id="noticePageing">- 1 2 3 4 5 -</span>
          <router-link :to="noticeVo.endPageBtnNo"></router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- 푸터 -->
	<AppFooter />
</template>

<script>
import '@/assets/css/Initialization.css';
import '@/assets/css/mj/notice.css';
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import axios from 'axios';
// import MyPageSide from '@/components/MyPageSide.vue';

export default {
  name: 'ConditionView',
  components: {
    AppHeader,
    AppFooter,
    // MyPageSide
  },
  data() {
    return {
      list: [],
      noticeVo: {
        no: '',
        title: '',
        name: '',
        regDate: '',
        pagesNo: '',
        endPageBtnNo: '',
        next: false,
        prev: false,
        starPageBtnNo: ''
      }
    };
  },
	methods: {
    getList() {
      axios({
        method: 'get', // put, post, delete
        url: `${this.$store.state.apiBaseUrl}/odo/mypage/list`,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }, //전송타입
        params: this.MjVo, //get방식 파라미터로 값이 전달
        responseType: 'json' //수신타입
      }).then(response => {
          console.log(response); //수신데이타
          this.list = response.data.boardList;
        })
        .catch(error => {
          console.log(error);
        });
    },
    goToReadPage(no) {
      console.log(no + '번 글의 읽기 페이지로 이동');
      this.$router.push(`/notice/read/${no}`);
    },
    goRead() {
      this.$router.push('/mypage/read');
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style></style>