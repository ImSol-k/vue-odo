<template>
  <AppHeader />
  <div class="wrap">
    <div class="clearfix">
      <AppMenu />
      <div class="companyInfoClassList">
        <p>운영중인 클래스</p>
        <div class="whatClass">
          <span
            v-on:click.prevent="selectClass(1)"
            :class="{ classChack: isClass == 1 }"
            >원데이</span
          >
          <span
            v-on:click.prevent="selectClass(2)"
            :class="{ classChack: isClass == 2 }"
            >정규</span
          >
          <span
            v-on:click.prevent="selectClass(3)"
            :class="{ classChack: isClass == 3 }"
            >상시정규</span
          >
        </div>

        <div class="companyInfoClassBox">
          <div>
            <ul
              class="companyInfoClassfor clearfix"
              v-for="(c, i) in classList"
              :key="i"
            >
              <!-- 원데이클래스 -->
              <li>
                <img
                  :src="`${this.$store.state.apiBaseUrl}/upload/${c.classImage}`"
                  alt=""
                />
                <div class="classListObj">
                  <p>
                    <router-link
                      class="classRouterLink"
                      :to="`/classdetailpage/${c.classNo}`"
                      >{{ c.className }}</router-link
                    >
                  </p>
                  <p v-if="isClass != 1">
                    {{ c.startDate }}
                    <span v-if="isClass != 1">~ {{ c.endDate }}</span>
                  </p>
                  <p>{{ c.classIntro }}</p>
                  <div class="classListOptionBox">
                    <div class="classListOption">
                      <router-link
                        v-if="isClass == 1"
                        class="classRouterLink"
                        :to="`/membermanager/1/${c.scheduleNo}/${c.className}/${c.classNo}`"
                      >
                        예약확인
                      </router-link>
                      <router-link
                        v-else-if="isClass == 2"
                        class="classRouterLink"
                        :to="`/membermanager/2/${c.scheduleNo}/${c.className}/${c.classNo}`"
                        >회원관리</router-link
                      >
                      <router-link
                        v-else
                        class="classRouterLink"
                        :to="`/membermanager/3/${c.scheduleNo}/${c.className}/${c.classNo}`"
                        >회원관리</router-link
                      >
                      <router-link class="classRouterLink" :to="{ path: '/classadd/2', query:{no:c.classNo}}">
                        수정
                      </router-link>
                    </div>
                    <span v-if="isClass != 1">인원수: {{ c.classMin }}/{{ c.classMax }}</span>
                  </div>
                </div>
              </li>
              <!-- 상시클래스 -->
              <!-- <li v-else-if="isClass == 2">
                <img src="@/assets/images/hs/main_slide_2.jpg" alt="" />
                <div class="classListObj">
                  <p>
                    <router-link class="classRouterLink" to="/classdetailpage"
                      >(정규)레모나클래스</router-link
                    >
                  </p>
                  <p>2024/06/01~2024/07/30</p>
                  <p>
                    레모나 클레스 개강 종강일정 상세페이지 확인 설명글 설명글
                    공간
                  </p>
                  <div class="classListOption">
                    <router-link class="classRouterLink" to="/membermanager"
                      >회원관리</router-link
                    >
                    <router-link class="classRouterLink" to="/classadd"
                      >클래스수정</router-link
                    >
                  </div>
                </div>
              </li>
              <li v-else>
                <img src="@/assets/images/hs/main_slide_3.jpg" alt="" />
                <div class="classListObj">
                  <p>(상시)레모나클래스</p>
                  <p>2024/03/01~2024/12/31</p>
                  <p>
                    레모나 클레스 개강 종강일정 상세페이지 확인 설명글 설명글
                    공간
                  </p>
                  <div class="classListOption">
                    <router-link class="classRouterLink" to="/membermanager"
                      >회원관리</router-link
                    >
                    <router-link class="classRouterLink" to="/classadd"
                      >수정</router-link
                    >
                  </div>
                </div>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
      <!--companyInfoClassList-->
    </div>
  </div>
  <!--wrap-->
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/HostAppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMenu from "@/components/CompanyMenu.vue";
import axios from "axios";

export default {
  name: "CompanyPageView",
  components: { AppHeader, AppFooter, AppMenu },
  data() {
    return {
      isClass: 1,
      companyNo: this.$store.state.authCompany.companyNo,
      classList: [],
    };
  },
  methods: {
    classTypeList() {
      console.log("클래스불러오기: ");
      axios({
        method: "get",
        url: `${this.$store.state.apiBaseUrl}/odo/company/list`, //SpringBoot주소
        headers: { "Content-Type": "application/json; charset=utf-8" },
        params: {
          classType: this.isClass,
          companyNo: this.companyNo
        },
        responseType: "json",
      })
        .then((response) => {
          this.classList = response.data.apiData;
          console.log(this.classList); //수신데이터
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectClass(num) {
      //리스트 불러오기
      if (num == 1) {
        this.isClass = 1;
      } else if (num == 2) {
        this.isClass = 2;
      } else {
        this.isClass = 3;
      }
      this.classTypeList();
    },
  },
  created() {
    this.classTypeList();
  },
};
</script>

<style>
.classChack {
  border-bottom: 2px solid #8521ff;
}
</style>
