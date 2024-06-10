<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />

      <!-- 원데이회원 -->
      <div class="companyInfoClassList" v-if="classType == 1">
        <div class="memberListTitle">
          <p>{{ this.$route.params.name }}</p>
          <select name="" id="" v-model="scheduleNo" @change="memberList">
            <option disabled selected value="일정선택하기">일정선택하기</option>
            <option v-for="(date, i) in dateList" :key="i" :value="date.scheduleNo" >{{ date.start }}</option>
          </select>
        </div>

        <div class="memberListTable" v-if="mList > 0">
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
            <tbody v-for="(m, i) in mList" :key="i" style="height: 30px">
              <td>{{ i + 1 }}</td>
              <td>{{ m.userName }}</td>
              <td>{{ m.userAge }}</td>
              <td>
                <span v-if="m.userGender == 'male'">남</span
                ><span v-else>여</span>
              </td>
              <td>{{ m.userHp }}</td>
              <td>
                <span v-if="m.attendState == '출석'">참여</span
                ><span v-else>-</span>
              </td>
              <td>
                <span v-if="m.reviewState > 0">작성</span><span v-else>-</span>
              </td>
              <td>
                <button v-on:click.prevent="coupon(1, m.userNo)">지급</button>
              </td>
            </tbody>
          </table>
        </div>
        <div v-else class="noUser">
          <p>참여자가 없습니다</p>
        </div>
        <!--memberListTable-->
      </div>
      <!--companyInfoClassList-->

      <!-- 정규회원 -->
      <div class="companyInfoClassList" v-else-if="classType == 2">
        <div class="memberListTitle">
          <p>{{ this.$route.params.name }}</p>
          <input
            class="memberVueDatePicker"
            type="date"
            v-model="datepick"
            @change="memberList"
            name=""
            id=""
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
              <th style="width: 130px">출석일수</th>
              <th style="width: 100px">상태</th>
            </thead>
            <tbody v-for="(m, i) in mList" :key="i" style="height: 30px">
              <td>{{ i + 1 }}</td>
              <td>{{ m.userName }}</td>
              <td>{{ m.userAge }}</td>
              <td>
                <span v-if="m.userGender == 'male'">남</span
                ><span v-else>여</span>
              </td>
              <td>{{ m.userHp }}</td>
              <td>{{ m.attend }}</td>
              <td v-if="m.attendState != null">{{ m.attendState }}</td>
              <td>-</td>
            </tbody>
          </table>
        </div>
        <!--memberListTable-->
      </div>
      <!--companyInfoClassList-->

      <!-- 상시회원 -->
      <div class="companyInfoClassList" v-else-if="classType == 3">
        <div class="memberListTitle">
          <p>{{ this.$route.params.name }}</p>
          <input
            class="memberVueDatePicker"
            type="date"
            v-model="datepick"
            @change="memberList"
            name=""
            id=""
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
              <th style="width: 130px">수강기간</th>
              <th style="width: 100px">상태</th>
            </thead>
            <tbody v-for="(m, i) in mList" :key="i" style="height: 30px">
              <td>{{ i + 1 }}</td>
              <td>{{ m.userName }}</td>
              <td>{{ m.userAge }}</td>
              <td v-if="m.userGender == 'male'">남</td>
              <td v-else>여</td>
              <td>{{ m.userHp }}</td>
              <td>{{ m.startDate }} ~ {{ m.endDate }}</td>
              <td v-if="m.attendState != null">{{ m.attendState }}</td>
              <td>-</td>
            </tbody>
          </table>
        </div>
        <!--memberListTable-->
      </div>
      <!--companyInfoClassList-->
    </div>
  </div>

  <div class="couponModal" v-show="isCoupon">
    <div class="couponModalContent">
      <h3>쿠폰지급</h3>
      <div>
        <input
          type="radio"
          name="coupon"
          id="coupon5"
          value="5"
          v-model="couponType"
        />
        <label for="coupon5">5%</label>
      </div>
      <div>
        <input
          type="radio"
          name="coupon"
          id="coupon10"
          value="10"
          v-model="couponType"
        />
        <label for="coupon10">10%</label>
      </div>
      <div>
        <input
          type="radio"
          name="coupon"
          id="coupon15"
          value="15"
          v-model="couponType"
        />
        <label for="coupon15">15%</label>
      </div>
      <div class="couponBtn">
        <button v-on:click.prevent="coupon(2)">닫기</button>
        <button v-on:click="setCoupon">추가</button>
      </div>
    </div>
  </div>

  <AppFooter />
</template>
<script>
import AppHeader from "@/components/HostAppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";
import axios from "axios";
import moment from "moment";

export default {
  name: "MemberManagerView",
  components: { AppHeader, AppFooter, AppMenu },
  data() {
    return {
      isCoupon: false,
      couponType: "",
      userNo: "",
      classType: this.$route.params.type,
      datepick: new Date(),
      toDay:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      mList: [],
      scheduleNo: this.$route.params.no,
      classNo: this.$route.params.cno,
      dateList: []
    };
  },
  methods: {

    /********************************************************************
     * 원데이클래스 일정 불러오기
     */
    ondaySchedule() {
      axios({
        method: "get",
        url: `${this.$store.state.apiBaseUrl}/odo/company/one/${this.classNo}`, //SpringBoot주소
        headers: { "Content-Type": "application/json; charset=utf-8" },
        responseType: "json",
      })
        .then((response) => {
          console.log(response.data.apiData); //수신데이터
          this.dateList = response.data.apiData;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /********************************************************************
     * 회원리스트 불러오기
     */
    memberList() {
      axios({
        method: "get",
        url: `${this.$store.state.apiBaseUrl}/odo/company/member`, //SpringBoot주소
        headers: { "Content-Type": "application/json; charset=utf-8" },
        params: {
          classType: this.$route.params.type,
          scheduleNo: this.scheduleNo,
          classNo: this.classNo,
          start: moment(this.datepick).format(`YYYY-MM-DD`)
        },
        responseType: "json",
      })
        .then((response) => {
          // console.log(response.data.apiData); //수신데이터
          this.mList = response.data.apiData;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /********************************************************************
     * 쿠폰 모달창
     */
    coupon(state, user) {
      this.userNo = user;
      if (state == 1) {
        this.isCoupon = true;
        this.couponType = "";
      } else {
        this.isCoupon = false;
      }
    },

    /********************************************************************
     * 쿠폰지급
     */
    setCoupon() {
      console.log(this.userNo);
      axios({
        method: "post",
        url: `${this.$store.state.apiBaseUrl}/odo/company/coupon`, //SpringBoot주소
        headers: { "Content-Type": "application/json; charset=utf-8" },
        params: {
          userNo: this.userNo,
          companyNo: this.$store.state.authCompany.companyNo,
          couponPrice: this.couponType,
        },
        responseType: "json",
      })
        .then((response) => {
          // console.log(response.data); //수신데이터
          this.isCoupon = false;
          if (response.data.result == "success") {
            alert("쿠폰이 지급되었습니다.");
          } else {
            alert("쿠폰지급 실패");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /********************************************************************
     * 클래스 타입 변경
     */
    asdf(c) {
      if (c === 1) {
        this.classType = 1;
      } else if (c === 2) {
        this.classType = 2;
      } else if (c === 3) {
        this.classType = 3;
      }
    },
  },
  created() {
    console.log(this.$route.params.name);
    this.memberList();
    this.ondaySchedule();
  },
};
</script>

<style></style>
