<template>
  <AppHeader />
  <div class="wrap">
    <div class="classListOne" v-for="(i) in 19" :key="i">
      <router-link to="/classdetailpage" class="listRouterLink">
        <div class="classListBox">
          <img src="../../assets/images/hs/main_slide_3.jpg" alt="" />
          <img src="" alt="" />
        </div>
        <p class="location">강남/서초</p>
        <p class="classTitle">소풍을 즐기는 새로운 방법..</p>
        <div class="listRreviewBox">
          <span class="starPoint">★★★★★</span>
          <span>후기 123</span>
        </div>
        <p class="class-price">무료</p>
      </router-link>
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
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style></style>
