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
              <tr v-for="(noticeVo, i) in list" :key="i" @click="goToReadPage(noticeVo.no)">
                <td>{{ noticeVo.no }}</td>
                <td>{{ noticeVo.title }}</td>
                <td>{{ noticeVo.name }}</td>
                <td>{{ noticeVo.regDate }}</td>
                <td>{{ noticeVo.pagesNo }}</td>
              </tr>
            </tbody>
          </table>
          <!-- <span id="noticePaging" v-if="prev" @click="prevPage">이전</span>

          <span id="noticePaging" v-for="i in endPageBtnNo - starPageBtnNo + 1" :key="i">
            <a @click.prevent="getList(starPageBtnNo + i - 1)" href="">{{ starPageBtnNo + i - 1 }}</a>
          </span>

          <span id="noticePaging" v-if="next" @click="nextPage">다음</span> -->
        </div> 
      </div>
    </div>
    <!-- 푸터 -->
    <AppFooter />
  </div>
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
      },
      endPageBtnNo: 0,
      next: false,
      prev: false,
      starPageBtnNo: 1,  // 초기 값을 1로 설정
    };
  },
  methods: {
    getList(pageNo = 1) {
      axios({
        method: 'get', // put, post, delete
        url: `${this.$store.state.apiBaseUrl}/odo/mypage/notice`,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }, //전송타입
        params: { pageNo }, //get방식 파라미터로 값이 전달
        responseType: 'json', //수신타입
      }).then(response => {
          console.log(response); //수신데이타
          this.list = response.data.boardList;
          this.endPageBtnNo = response.data.endPageBtnNo;
          this.next = response.data.next;
          this.prev = response.data.prev;
          // 데이터 응답 후 starPageBtnNo를 1로 초기화
          // this.starPageBtnNo = 1;
        })
        .catch(error => {
          console.log(error);
        });
    },
    goToReadPage(no) {
      console.log(no + '번 글의 읽기 페이지로 이동');
      this.$router.push(`/notice/read/${no}`);
    },
    // prevPage() {
    //   if (this.starPageBtnNo > 1) {
    //     this.starPageBtnNo -= 1;
    //     this.getList(this.starPageBtnNo);
    //   }
    // },
    // nextPage() {
    //   if (this.next) {
    //     this.starPageBtnNo += 1;
    //     this.getList(this.starPageBtnNo);
    //   }
    // },
  },
  created() {
    this.getList();
  },
};
</script>

<style></style>