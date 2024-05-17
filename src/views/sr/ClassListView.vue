<template>
  <AppHeader />
  <div class="wrap">
    <div class="findClassBox">
      <div>
        <p>검색결과</p>
        <button v-on:click="MapOnOff">
          <span v-if="!isMap">지도로보기</span>
          <span v-else>리스트로보기</span>
        </button>
        <div class="classTypeSelect">
          <select name="" id="">
            <option value="" disabled selected>클래스 형식 선택</option>
            <option value="">원데이</option>
            <option value="">정규</option>
            <option value="">상시</option>
          </select>
        </div>
      </div>

      <!-- 리스트로보기 -->
      <div class="findClassListBox clearfix" v-if="!isMap">
        <div class="classListOne" v-for="i in 18" :key="i">
          <router-link to="/classdetailpage" class="listRouterLink">
            <div class="classListBox">
              <img src="../../assets/images/hs/main_slide_3.jpg" alt="" />
            </div>
            <p class="location">경기/성남</p>
            <p class="classTitle">소풍을 즐기는..</p>
            <div class="listRreviewBox">
              <span class="starPoint" v-for="i in 5" :key="i">★</span>
              <span>23</span>
            </div>
            <p class="class-price">무료</p>
          </router-link>
        </div>
      </div>

      <!-- 지도로 보기 -->
      <div class="findClassListBox clearfix" v-else>
        <div class="classListOne" v-for="i in 18" :key="i">
          <router-link to="/classdetailpage" class="listRouterLink">
            <div class="classListBox">
              <img src="../../assets/images/hs/main_slide_1.jpg" alt="" />
            </div>
            <p class="location">강남/서초</p>
            <p class="classTitle">지도들어갈거..</p>
            <div class="listRreviewBox">
              <span class="starPoint" v-for="i in 5" :key="i">★</span>
              <span>23</span>
            </div>
            <p class="class-price">무료</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import "@/assets/css/sr/classList.css";

export default {
  name: "ClassListView",
  components: { AppHeader, AppFooter },
  data() {
    return {
      isMap: false,
    };
  },
  methods: {
    MapOnOff() {
      this.isMap = !this.isMap
    },
  },
  created() {},
};
</script>

<style></style>
