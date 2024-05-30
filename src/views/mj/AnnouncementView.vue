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
              <tr v-for="(MjVo,i) in MjList" v-bind:key="i">
                <td>{{ MjVo.idx }}</td>
                <td>{{ MjVo.title }}</td>
                <td>{{ MjVo.notice_name }}</td>
                <td>{{ MjVo.regDate }}</td>
                <td>{{ MjVo.pagesNo }}</td>
              </tr>
            </tbody>
          </table>

          <!-- Pagination Component -->
          <PaginationComponent 
            :totalPages="endPageBtnNo" 
            v-model:currentPage="starPageBtnNo"
            @update:currentPage="getList"
          />

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
import PaginationComponent from '@/components/PaginationComponent.vue';
import axios from 'axios';
// import MyPageSide from '@/components/MyPageSide.vue';

export default {
  name: 'AnnouncementView',
  components: {
    AppHeader,
    AppFooter,
    PaginationComponent,
    // MyPageSide
  },
  data() {
    return {
      MjList: [],
      };
  },
  methods: {
    getList() {
      axios({
        method: 'get', // put, post, delete
        url: `${this.$store.state.apiBaseUrl}/odo/mypage/notice`,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        responseType:'json'
       }).then( response =>{
        this.MjList = response.data;
       }).catch( error =>{
        console.log(error);
      }); //전송타입
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style></style>