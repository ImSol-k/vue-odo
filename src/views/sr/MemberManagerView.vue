<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList" v-if="isClass">
        <p>예약리스트 <span>(원데이클래스)</span></p>
        <div class="memberListTable">
          <table>
            <thead style="height: 40px">
              <th style="width: 40px">번호</th>
              <th style="width: 130px">이름</th>
              <th style="width: 80px">나이</th>
              <th style="width: 80px">성별</th>
              <th style="width: 190px">전화번호</th>
              <th style="width: 100px">참여여부</th>
              <th style="width: 100px">작성후기</th>
              <th style="width: 90px">쿠폰지급</th>
            </thead>
            <tbody v-for="i in 16" :key="i" style="height: 30px">
              <td>{{ i }}</td>
              <td>김소리</td>
              <td>25</td>
              <td>여</td>
              <td>010-3433-4324</td>
              <td>완료</td>
              <td>[링크]</td>
              <td><button>지급</button></td>
            </tbody>
          </table>
        </div>
        <!--memberListTable-->
      </div>
      <!--companyInfoClassList-->
      <div class="companyInfoClassList" v-else>
        <p>회원관리 <span>(정규클래스)</span></p>
        <div class="memberListTable">
          <table>
            <thead style="height: 40px">
              <th style="width: 40px">번호</th>
              <th style="width: 130px">이름</th>
              <th style="width: 80px">나이</th>
              <th style="width: 80px">성별</th>
              <th style="width: 190px">전화번호</th>
              <th style="width: 130px">출석일수</th>
              <th style="width: 100px">상태</th>
            </thead>
            <tbody v-for="i in 16" :key="i" style="height: 30px">
              <td>{{ i }}</td>
              <td>김소리</td>
              <td>25</td>
              <td>여</td>
              <td>010-3433-4324</td>
              <td>17/20 <span>(90%)</span></td>
              <td>입실</td>
            </tbody>
          </table>
        </div>
        <!--memberListTable-->
      </div>
      <!--companyInfoClassList-->
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";

export default {
  name: "MemberManagerView",
  components: { AppHeader, AppFooter, AppMenu },
  data() {
    return {
      isClass: false,
    };
  },
  methods: {},
  created() {},
};
</script>

<style></style>
