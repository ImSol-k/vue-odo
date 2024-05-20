<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <button v-on:click.prevent="asdf('원데이')">원데이</button>
      <button v-on:click.prevent="asdf('정규')">정규</button>
      <button v-on:click.prevent="asdf('상시')">상시</button>

      <!-- 원데이회원 -->
      <div class="companyInfoClassList" v-if="isClass == '원데이'">
        <div class="memberListTitle">
          <div>
            <span>예약리스트</span>
            <span>(원데이클래스)</span>
          </div>
            <VueDatePicker
              class="memberVueDatePicker"
              locale="ko"
              v-model="datepick"
              :enable-time-picker="false"
            />
        </div>

        <div class="memberListTable">
          <table>
            <thead style="height: 40px">
              <th style="width: 40px">번호</th>
              <th style="width: 130px">이름</th>
              <th style="width: 80px">나이</th>
              <th style="width: 80px">성별</th>
              <th style="width: 190px">전화번호</th>
              <th style="width: 100px">참여여부</th>
              <th style="width: 100px">후기</th>
              <th style="width: 90px">쿠폰지급</th>
            </thead>
            <tbody v-for="i in 16" :key="i" style="height: 30px">
              <td>{{ i }}</td>
              <td>김소리</td>
              <td>25</td>
              <td>여</td>
              <td>010-3433-4324</td>
              <td>완료</td>
              <td v-if="i == 1 || i == 2 || i == 10  || i == 14 ">작성</td>
              <td v-else>-</td>
              <td><button>지급</button></td>
            </tbody>
          </table>
        </div>
        <!--memberListTable-->
      </div>
      <!--companyInfoClassList-->

      <!-- 정규회원 -->
      <div class="companyInfoClassList" v-else-if="isClass == '정규'">
        <div class="memberListTitle">
          <p>
            <span>회원관리</span>
            <span>(정규클래스)</span>
            <VueDatePicker
              class="memberVueDatePicker"
              locale="ko"
              v-model="datepick"
              :enable-time-picker="false"
            />
          </p>
        </div>
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
              <td>결석</td>
            </tbody>
          </table>
        </div>
        <!--memberListTable-->
      </div>
      <!--companyInfoClassList-->

      <!-- 상시회원 -->
      <div class="companyInfoClassList" v-else-if="isClass == '상시'">
        <div class="memberListTitle">
          <p>
            <span>회원관리</span>
            <span>(상시클래스)</span>
            <VueDatePicker
              class="memberVueDatePicker"
              locale="ko"
              v-model="datepick"
              :enable-time-picker="false"
            />
          </p>
        </div>
        <div class="memberListTable">
          <table>
            <thead style="height: 40px">
              <th style="width: 40px">번호</th>
              <th style="width: 130px">이름</th>
              <th style="width: 80px">나이</th>
              <th style="width: 80px">성별</th>
              <th style="width: 190px">전화번호</th>
              <th style="width: 130px">수강기간</th>
              <th style="width: 100px">상태</th>
            </thead>
            <tbody v-for="i in 16" :key="i" style="height: 30px">
              <td>{{ i }}</td>
              <td>김소리</td>
              <td>25</td>
              <td>여</td>
              <td>010-3433-4324</td>
              <td>2024-05-15~<br>2024-06-14</td>
              <td>출석</td>
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
      isClass: "원데이",
      datepick: new Date(),
    };
  },
  methods: {
    asdf(c) {
      if (c === "원데이") {
        this.isClass = "원데이"
      } else if (c === "정규") {
        this.isClass = "정규"
      } else if (c === "상시") {
        this.isClass = "상시"
      }
      }
    },
  created() {},
};
</script>

<style></style>
