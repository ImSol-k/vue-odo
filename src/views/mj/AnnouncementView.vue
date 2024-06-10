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

        <div style="text-align:right;">
          <button class="write" v-if="this.no==3" type="submit"><router-link to="/mypage/notice/write">글쓰기</router-link></button>
        </div>
        <div class="MpRight" style="overflow: hidden;">
          <table class="list-table">
            <thead>
              <tr>
                <th width="80">번호</th>
                <th width="550">제목</th>
                <th width="100">글쓴이</th>
                <th width="150">작성일</th>
                <th width="100">조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(MjVo,i) in MjList" v-bind:key="i">
                <td >{{ MjVo.idx }}</td>
                <td v-on:click="go( MjVo.idx )">{{ MjVo.title }}</td>
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
      no:""
      };
  },
  methods: {
    go(no){
      this.$router.push("/mypage/notice/" + no);
    },

    getList() {
      axios({
        method: 'get', // put, post, delete
        url: `${this.$store.state.apiBaseUrl}/odo/mypage/notice`,
        headers: { 'Content-Type': 'application/json; charset=utf-8',
								'Authorization' : 'Bearer ' + this.$store.state.token},
        responseType:'json'
       }).then( response =>{
        this.MjList=response.data.MjList
        this.no=response.data.no
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